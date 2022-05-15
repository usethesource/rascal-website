---
sidebar_position: 9
---

**Synopsis.**

TypePal is a framework for name analysis, type checking and type inference

**Description.**

Many type checkers have already been written in Rascal with good results. However, type checkers for different languages
have a lot in common and address similar questions:

  - How to handle declarations of names, in particular their scope and uses?

  - How to distinguish the roles names can play, e.g., names of functions, data types, labels, constants or variables?

  - How to handle imports and multiple name spaces?

  - How to associate requirements/constraints relevant for type checking with the syntax definition of the language
    being type checked?

  - How to represent the types that occur in a program?

  - How to handle global or local type inference?

  - How to handle overloading?

  - How to give precise error messages (and avoid spurious messages)?

  - How to extract information that is useful for later compiler stages or the IDE for, e.g., code generation, use-def
    information or name completion?

TypePal is a Rascal framework that addresses the above questions and we describe here all its concepts, architecture and
features and also show some examples:

  - [Overview](#TypePal-Overview): An overview of TypePal.

  - [A Calculator Language](#TypePal-PocketCalculator): Calc illustraties the basic facilities of TypePal.

  - [Concepts and Definitions](#TypePal-ConceptsAndDefinitions): The concepts and definitions used in TypePal.

  - [Architecture of TypePal](#TypePal-Architecture): Architectural overview of TypePal.

  - [Reporting](#TypePal-Reporting): How to format and report errors, warnings and info messages.

  - [Collector](#TypePal-Collector): A `Collector` collects constraints from source code and produces an initial
    `TModel`.

  - [Solver](#TypePal-Solver): A `Solver` tries to solve the constraints in a `TModel`; unsolved constraints produce
    error messages.

  - [TypePal Configuration](#TypePal-Configuration): Configuration options for TypePal.

  - [Utilities](#TypePal-Utilities): Some utility functions.

  - [Examples of Typecheckers](#TypePal-Examples): Examples of type checkers built with TypePal.

# Overview

**Synopsis.**

An overview of TypePal

**Description.**

TypePal is a declarative framework that operates on a model of the program to be type checked that consisting of

  - *facts* that some source code fragment has a known type, e.g., an integer literal is of type integer, or that its
    type is equal to the type of another source code fragment, e.g., the type of the expression in parentheses `( e )`
    is equal to the type of `e`.

  - *calculators* that compute the type of a source code fragment and create new facts; this computation may also need
    the types of one or more other source code fragments, e.g., computing the type of the addition operator is based on
    the types of its operands.

  - *requirements* that are imposed on a source code fragment by the type system being used; a requirement may need the
    types of one or more other source code fragments, e.g., if the expression on the right-hand side of an assignment
    has type integer, then the type of the variable on the left-hand side should be compatible with the type integer.

We call this model the *TModel* (for "Type Model") of the program: facts describe elementary observations and equalities
between types, calculators compute new type facts, and requirements impose restrictions on the types of program
fragments. A requirement or calculator may detect a type violation and will then generate an error message. When a
requirement is satisfied or a calculator computes a new type, this leads to the creation of new facts that may trigger
the computation of other requirements and calculators.

Technically, TypePal uses *scope graphs* for expressing definition and use of names (including their role, scope, name
space, and visibility), and *constraints* to describe facts, requirements and calculators. These constraints are such
that they can express either type checking or type inference, or a mixture thereof. Under the hood, these constraints
are solved in an efficient, data-driven, fashion.

TypePal is highly parameterized and can be adapted to specific type checking needs.

# A Calculator Language

**Synopsis.**

Calc illustraties the basic facilities of TypePal

**Description.**

By developing a type checker for ***Calc***, a tiny pocket calculator language, we illustrate elementary usage of
TypePal. The full source code of Calc can be found at
<https://github.com/cwi-swat/typepal/tree/master/src/examples/calc>. See [Examples of Typecheckers](#TypePal-Examples)
for a list of all available type checker examples.

## Syntax of Calc

``` rascal
module lang::calc::Syntax

extend lang::CommonLex;     

start syntax Calc
    = Decl+                 
    ;

syntax Decl
    = "var" Id "=" Exp ";"  
    ;

syntax Exp
   = Id                             
   | Integer                        
   | Boolean                        
   | bracket "(" Exp ")"            
   > left Exp "*" Exp               
   > left Exp "+" Exp               
   > "if" Exp "then" Exp "else" Exp 
   ;

keyword Reserved
    = "var" | "if" | "then" | "else"
    ;
```

  - For brevity we use some common lexical definitions in `lang::CommonLex`. They take, amongst others, care of
    whitespace, comments and definitions for integer and Boolean constants (`Integer` and `Boolean`) as well as
    identifiers (`Id`).

  - A Calc program consists of one or more declarations (`Decl`).

  - Each declaration introduces a new variable and binds it to the value of an expression.

  - An expression can be an identifier (that should have been introduced in a preceding declaration), or

  - an integer constant, or

  - a Boolean constant, or

  - be surrounded by parentheses, or

  - a multiplication (arguments should have the same type), or

  - an addition (arguments should have the same type), or

  - a conditional expression (the first expression should have type Boolean, the other two should have the same type).

## Typechecking Calc

Type checking Calc amounts to checking the following:

  - Every name that is used in an expression should have been defined in a declaration and has the type of the
    expression in that declaration.

  - Addition or multiplication on integers yields an integer type.

  - Addition or multiplication on Booleans yields a Boolean type.

  - The condition in a condional expression should be Boolean.

  - The then and else part of a conditional expression should have the same type; that type becomes the type of the
    conditional expression.

Let’s now move to the Calc type checker described in `lang::calc::Checker`. We break it up in parts and describe the
parts as we go. You should be explicitly aware of the fact that type checking consists of two phases:

  - *Collecting facts and constraints*: this is all about formulating constraints and attaching them to parts of the
    source program. In this phase types are unknown and constraints can only be created but not yet solved. All
    computations on types have therefore to be postponed until the solving phase. We will see how in a minute.

  - *Solving constraints*: constraints are solved (if possible) and types are assigned to parts of the source program.

### Begin of type checker module for Calc

``` rascal
module lang::calc::Checker

import lang::calc::Syntax;                  // The Calc syntax
extend analysis::typepal::TypePal;          // TypePal
```

We import the Calc syntax `lang::calc::Syntax` and then we *extend* the TypePal `analysis::typepal::TypePal`.

> **Note**
> 
> There is a technical reason why we have to extend TypePal rather than import it. Some data types (e.g., `AType`) and
> functions (e.g., `collect`) are already defined in TypePal itself and they are being extended in each type checker.

### Extend AType

TypePal has a built-in data type to represent types: `AType`. This data type can be extended to represent
language-specific types.

``` rascal
data AType
    = boolType()
    | intType()
    ;

str prettyAType(boolType()) = "bool";
str prettyAType(intType()) = "int";
```

The values in Calc are Booleans and integers and we create two `AType` constants `boolType()` and `intType()` to
represent these types. `prettyAType` converts them back to a string representation; this is used in error reporting.

### Collecting facts and constraints

Writing a type checker in TypePal amounts to collecting facts and constaints from a source program to be checked. This
is achieved by the `collect` function that has the form

``` rascal
void collect(current: syntactic pattern, Collector c){ ... }`
```

where *syntactic pattern* corresponds with a rule from the language syntax, in this case `lang::calc::Syntax`. The
`Collector` argument provides methods to add facts and constraints.

> **Note**
> 
> One `collect` declaration is needed per alternative in the syntax but some rules (i.e., chain rules) are handled
> automatically.

> **Note**
> 
> By convention the syntactic pattern is named `current` and the Collector is named `c`.

> **Warning**
> 
> Each `collect` declaration is responsible for calling `collect` on relevant subparts (a run-time error is given for a
> missing `collect`).

#### Check Declaration

A declaration introduces a new name and associates the type of the righthand side expression with it.

``` rascal
void collect(current: (Decl) `var <Id name> = <Exp exp> ;`, Collector c){
    c.define("<name>", variableId(), current, defType(exp));
    collect(exp, c);
}
```

Here we define `name` as a variable and define its type as the same type as `exp`. Let’s digest this:

  - `c.define(…​)` calls the `define` function in the `Collector` and adds this definition to the internal state of the
    Collector.

  - `name` is a parse tree for the lexical syntax rule `Id`. `"<name>"` reduces this tree to a string and this is how
    the variable can be used later on.

  - `variableId()` defines that the role of this name (`IdRole`) is a variable. `variableId` is a built-in role
    `IdRole`.

  - `current` is the parse tree of the whole declaration, we use it as unique identification of the definition of
    `name`.

  - `defType` is used to define the type of `name` and it comes in several flavours. Here, we use another parse tree
    fragment `exp` as argument. `defType(exp)` should be read as *the same type as* `exp` and the effect is that `name`
    is defined having the same type as `exp`. This implies that the type of `name` can only be known when the type of
    `exp` is known.

#### Check Exp: Id

An expression consisting of a single identifier, refers to a name introduced in another declaration and gets the type
introduced in that declaration.

``` rascal
void collect(current: (Exp) `<Id name>`, Collector c){
    c.use(name, {variableId()});
}
```

An expression consisting of a single identifier represents a *use* of that identifier. `c.use(name, roles)` records
this. There are then two possibilities:

  - a matching define is found for one of the given roles: use and definition are connected to each other.

  - no matching define is found and an error is reported.

> **Note**
> 
> In larger languages names may be defined in different scopes. Scopes do not play a role in Cal.

> **Note**
> 
> We do not enforce *define-before-use* in this example, but see [???](#XXX) how to achieve this.

#### Check Exp: Boolean and Integer constants

``` rascal
void collect(current: (Exp) `<Boolean boolean>`, Collector c){
    c.fact(current, boolType());
}

void collect(current: (Exp) `<Integer integer>`, Collector c){
    c.fact(current, intType());
}
```

When encountering a Boolean or integer constant we record their type using `c.fact(current, its type)`.

> **Note**
> 
> The second argument of `fact` maybe an `AType`, an arbitrary parse tree (in which case the type of that tree will be
> used), or a function that returns a type.

#### Check Exp: parentheses

``` rascal
void collect(current: (Exp) `( <Exp e> )`, Collector c){
    c.fact(current, e);
    collect(e, c);
}
```

The type of an expression enclosed by parentheses is the same as the same of the enclosed expression.

A final, essential, step is to collect constraints from the subpart `e`.

#### Check Exp: addition

Addition of integers given an integer result and addition of Booleans gives a Boolean result.

``` rascal
void collect(current: (Exp) `<Exp e1> + <Exp e2>`, Collector c){
     c.calculate("addition", current, [e1, e2],
        AType (Solver s) {
            switch(<s.getType(e1), s.getType(e2)>){
                case <intType(), intType()>: return intType();
                case <boolType(), boolType()>: return boolType();
                default:
                    s.report(error(current, "`+` not defined for %t and %t", e1, e2));
            }
        });
      collect(e1, e2, c);
}
```

Checking addition is more complex since we need the type of sub expressions `e1` and `e2` in order to do our job. The
type of an arbitrary parse tree can be computed using

`c.calculate(informative label, current, list of dependencies, AType(Solver s) { …​ }`.

where

  - *informative label* is a label that can be used in error messages and log files.

  - `current` is the parse tree for which we are computing a type.

  - *list of dependencies* is a list of other parse trees whose type is needed in the computation of the type of
    `current`.

  - `AType(Solver s) { …​ }` performs the type computation:
    
      - it is only called when the types of all dependencies are known.
    
      - it has a `Solver` as argument: a `Solver` manages the constraint solving process and is aware of all facts and
        solved constraints so far and knows, for instance, about the existence of type information for some parse tree.
    
      - it either returns an `AType` or reports an error.

The above code could be paraphrased as follows: *The type of `current` can only be computed when the types of `e1` and
`e2` are known. When known, get their types (using `s.getType`) and distinguish cases: two integer arguments give an
integer result type and two Boolean arguments a Boolean result type; otherwise report an error.*

A final, essential, step is to collect constraints from the subparts `e1` and `e2`.

#### Check Exp: multiplication

``` rascal
void collect(current: (Exp) `<Exp e1> * <Exp e2>`, Collector c){
     c.calculate("multiplication", current, [e1, e2],
        AType (Solver s) {
            switch(<s.getType(e1), s.getType(e2)>){
                case <intType(), intType()>: return intType();
                case <boolType(), boolType()>: return boolType();
                default:
                    s.report(error(current, "`*` not defined for %t and %t", e1, e2));
            }
        });
      collect(e1, e2, c);
}
```

Checking multiplication follows exactly the same pattern as checking addition. Even in this simple example we see
repetition of code that could be factored out.

#### Check Exp: conditional expression

``` rascal
void collect(current: (Exp) `if <Exp cond> then <Exp e1> else <Exp e2>`, Collector c){
    c.calculate("if Exp", current, [cond, e1, e2],
        AType(Solver s){
            s.requireEqual(cond, boolType(),
                           error(cond, "Condition should be Boolean, found %t", cond));
            s.requireEqual(e1, e2,
                           error(current, "Equal types required, found %t and %t", e1, e2));
            return s.getType(e1);
        });
    collect(cond, e1, e2, c);
}
```

Checking a conditional expression amounts to checking that the condition has type Boolean and that the then and else
branch have the same type (which also becomes the type of the conditional expression as a whole). In the above code we
see `s.requireEqual(arg1, arg2, message)`. Here *arg1* and *arg2* may either be a subtree (in which case its type is
used) or an `AType`. `requireEqual` requires that both types are equal or reports an error.

A final, essential, step is to collect constraints from the subparts `cond`, `e1` and `e2`.

## Testing the Calc typechecker

### Getting started

``` rascal
module lang::calc::Test

extend lang::calc::Checker;
extend analysis::typepal::TestFramework;    // TypePal test utilities
import ParseTree;                           // In order to parse tests
```

We need three ingredients for testing:

  - `lang::calc::Checker`, the Calc type checker we have just completed.

  - `analysis::typepal::TestFramework`, the TypePal test framework which enables test automation.

  - `ParseTree` that provides parsing functionality that is needed to parse Calc source text.

### Manual testing

``` rascal
TModel calcTModelFromTree(Tree pt){
    return collectAndSolve(pt);
}
```

Given a parse tree `pt` for a Calc program, we apply [collectAndSolve](#_collectandsolve) to it. This creates a
Collector, uses it to collect constraints from `pt` and then creates a Solver to solve all constraints. The result is a
`TModel`. `calcTModelFromTree` will also be used during automated testing.

``` rascal
TModel calcTModelFromStr(str text){
    pt = parse(#start[Calc], text).top;
    return calcTModelFromTree(pt);
}
```

In order to obtain a parse tree, we need to parse it as shown above.

TModels contain much information but here we are only interested in the messages that have been generated during
constraint solving. They are contained in the `messsages` field of a TModel.

With the above machinery in place we can perform some experiments:

  - `calcTModelFromStr("var x = 3;"),messages` gives no messages.

  - `calcTModelFromStr("var x = 3+true;").messsages` reports that addition of integer and Boolean is illegal.

### Automated testing

``` rascal
bool calcTests() {
     return runTests([|project://typepal-examples/src/lang/calc/tests.ttl|],
                     #Calc, calcTModelFromTree);
}
```

TypePal’s testing framework enables scripting of tests. Each script is written in TTL (TypePal Testing Language). Use
`runtests(list of TTL files, start non-terminal, function to create a TModel)` to execute the scripts.

Here is a sample script:

``` TTL
test Ok1 [[ var x = 1; ]]

test Ok2 [[ var x = 1; var y = x + 2; ]]

test Undef1 [[ var x = y; ]]
expect { "Undefined variable `y`" }

test Add1 [[ var x = 1 + 2; ]]

test Add2 [[ var x = true + false; ]]

test Add3 [[ var x = 1 + true; ]]
expect { "`+` not defined for `int` and `bool`" }

test If1 [[ var x = if true then 1 else 2;
            var y = x + 1;]]
test If2 [[ var x = if true then 1 else false; ]]
expect { "Equal types required, found `int` and `bool`" }

test If3 [[ var x = if 1 then 2 else 3; ]]
expect { "Condition should be Boolean, found `int`" }
```

and here is the produced output:

    Test Ok1: true
    Test Ok2: true
    Test Undef1: true
    Test Add1: true
    Test Add2: true
    Test Add3: true
    Test If1: true
    Test If2: true
    Test If3: true
    Test summary: 9 tests executed, 9 succeeded, 0 failed

# Concepts and Definitions

**Synopsis.**

The concepts and definitions used in TypePal.

## Identifier

The syntax of a source language may impose various restrictions on the identifiers that can occur in a program. They
amount to including or excluding specific characters for various occurrences of names in the program. One example is the
requirement in Java that class names start with an upper case letter. TypePal is agnostic of such conventions and
represents each name as a string. *Qualified names* are also supported and are represented by a list of strings.

## Tree

The Rascal data type `Tree` (REF) is used to represent all parse trees that can be generated for any syntax described in
Rascal. `Tree` is also a super type of any syntactic construct that may occur in a parse tree. In TypePal we
interchangeably use `Tree` and the source area (a source location) associated with it to uniquely identify program
parts, definitions, uses and scopes.

## Scope

A *scope* is a region of a program that delimits where definitions of identifier are applicable. An identifier is
defined in the scope where it is defined and in all nested subscopes, unless one of these subscopes redefines that same
identifier. In that case, the inner definition applies inside that nested scope (and its subscopes). Scopes are
identified by the subtree of the parse tree that introduces them such as, for instance, a module, a function declaration
or a block. Special rules may apply such as *define-before-use* or *scopes-with-holes*.

## Scope Graph

The scope graph is one of the the oldest methods to describe the scope of names in a program. We use a version of scope
graphs as described by Kastens & Waite, *Name analysis for modern languages: a general solution*, SP\&E, 2017. This
model uses text ranges in the source text (happily represented by Rascal’s `loc` data type) to identify and define all
aspects of names. A scope graph provides lookup operations on names that take both syntactic nesting and semantic
linking (via *paths*) into account, as well as the specific roles of identifiers and paths (described below).

## Identifier definition

The *definition* of an identifier is inside TypePal characterized by a `Define`:

``` rascal
alias Define  = tuple[loc scope, str id, IdRole idRole, loc defined, DefInfo defInfo];
```

where

  - `scope` is the scope in which the definition occurs;

  - `id` is the text representation of the identifier;

  - `idRole` is the role in which the identifier is defined, see [Identifier Role](#_identifier_role);

  - `defined` is source code area of the definition;

  - `defInfo` is any additional information associated with this definition, see [DefInfo](#_definfo),

## Identifier Use

The *use* of an identifier is characterized by a `Use`:

``` rascal
data Use
    = use(str id, loc occ, loc scope, set[IdRole] idRoles)
    | useq(list[str] ids, loc occ, loc scope, set[IdRole] idRoles, set[IdRole] qualifierRoles)
    ;
```

where `use` represents the use of a simple name and `useq` that of a qualified name. In the latter case, a list of
strings is given; the last string is a simple name in given `idRoles` and the preceeding strings are its qualifiers in
`qualifierRoles`.

## Path

TypePal is based on scope graphs that are not only based on syntactic containment of scopes but can also express
semantic connections between parse trees. While scopes are strictly determined by the hierarchical structure of a
program (i.e., its parse tree), *paths* provide an escape from this restriction and define a semantic connection between
syntactic entities that are not hierarchically related and may even be part of different syntax trees. Connections
between syntactic entities are paths labelled with user-defined roles. Paths are represented by the Rascal datatype
`PathRole`. An example is the import of a module *M* into another module *N* that makes the entities in *M* known inside
*N*. Here is an example of a path role to mark an import path between two parse trees.

``` rascal
data PathRole
    = importPath()
    ;
```

Paths are, amongst others, used in the resolution of qualified names.

## Name Resolution

Name resolution is based on the principle: *syntactic resolution first, semantic resolution second*. This means that we
first search for a definition in the current parse tree and only when that fails we follow semantic path to other trees
(either in the current tree or in other trees):

  - First the current scope in which the name is used is searched for a definition.

  - If this fails surrounding scopes are searched.

  - If this fails semantic paths in the same parse tree or to other parse trees are searched, such as, for instance,
    provided by an import statement.

This is illustrated below, where a name occurrence *O* can be resolved to definitions *D1* (syntactic resolution), *D2*
(semantic resolution) and/or *D3* (semantic resolution).

![400]\(images/NameResolution.png\)

> **Important**
> 
> Name resolution need not have a unique solution. Therefore the author of a TypePal-based type checker can provide
> functions to (a) filter valid solutions; (b) determine which identifiers may be overloaded.

## Role

Identifiers, scopes and path can play different *roles* that determine how they will be handled. They are represented by
various Rascal datatypes that can be extended by the author of a typechecker.

### Identifier Role

Identifier roles are modelled by the data type `IdRole`. Here is an example where roles are introduced for constants,
variables, formal parameters and functions:

``` rascal
data IdRole
    = constantId()
    | variableId()
    | formalId()
    | functionId()
    ;
```

When *defining* an identifier, the specific role of that identifier has to be given, e.g. as `constantId()`. When
*using* an identifier, the set of acceptables roles has to be given. For instance, an identifier used in an expression
may accept the roles `{ constantId(), variableId(), formalId() }`.

### Scope Role

Scope roles are modelled by the data type `ScopeRole` and are used to distinguish different kinds of scopes. Later (REF)
we will see that this can be used, for instance, to search for the innermost scope with a specific role, say the
innermost function scope. Here is an example that introduces scopes for functions and loops:

``` rascal
data ScopeRole
    = functionScope()
    | loopScope()
    ;
```

### Path Role

Path roles are modelled by the data type `PathRole`:

``` rascal
data PathRole
    = importPath()
    | extendPath()
    ;
```

## Types

The type to be associated with names varies widely for different programming languages and has to be provided by the
typechecker author. TypePal provides the data type `AType` that provides already some built-in constructors:

``` rascal
data AType
   = tvar(loc tname)                                    
   | atypeList(list[AType] atypes)                      
   | overloadedAType(rel[loc, IdRole, AType] overloads) 
   | lazyLub(list[AType] atypes)                        
   ;
```

  - `tvar` represents a type variable (used for type inference) and is only used internally.

  - `atypeList` represents a list of \`AType\`s and is used both internally in TypePal but can also be used in
    typechecker definitions.

  - `overloadedAType` represents overloaded types.

  - `lazyLub` represents a lazily computed LUB of a list of types.

AType that has to be extended with language-specific types.

The typechecker author also has to provide a function to convert `AType` to string (it is used create readable error
messages):

``` rascal
str prettyAType(AType atype);
```

## DefInfo

When defining a name, we usually want to associate information with it such as the type of the defined name. TypePal
provides the data type `DefInfo` for this purpose:

``` rascal
data DefInfo
    = noDefInfo()                                                                           
    | defType(value contrib)                                                                
    | defTypeCall(list[loc] dependsOn, AType(Solver s) getAType)                            
    | defTypeLub(list[loc] dependsOn, list[loc] defines, list[AType(Solver s)] getATypes)   
    ;
```

  - No information associated with this definition.

  - Explicitly given AType contribution associated with this definition. `contrib` can either be an `AType`, or a
    `Tree`. In the latter case, the type of that tree is used (when it becomes available) for the current definition.

  - Type of this definition depends on the type of the entities given in `dependsOn`, when those are known, `getAType`
    can construct the type of this definition. `getAType` will only be called by TypePal during constraint solving.

  - Refine a set of definitions by taking their LUB, mostly used for local type inference.

The [Solver](#TypePal-Solver) argument of `getAType` and `getATypes` is the current constraint solver being used.

> **Warning**
> 
> noDefInfo may be removed.

# Architecture of TypePal

**Synopsis.**

Architectural overview of TypePal

**Description.**

Type checking using TypePal proceeds in the following stages:

  - *Parse* the program to be analyzed using its syntax definition, the result is a parse tree;

  - *Collect* constraints (facts, calculators, and requirements) from the parsed program and build an initial `TModel`
    using these collected constraints;

  - *Solve* the constraints, the result is a validated and further enriched `TModel`. This amounts to executing
    calculators and requirements when the types on which they depend become available. This also involves resolving the
    semantic links between program parts as introduced by, e.g., import statements.

This approach is very flexible, since each of the stages can be called separately, enabeling a pipeline with
user-defined model transformations inbetween.

![900]\(images/Architecture.png\)

This whole process starts with a syntax for the language we want to analyze (let’s call that language *L* for now). The
*L* syntax is used to parse the *L* program we want to type check. The result is a parse tree.

Collecting constraints from the resulting parse tree is based on the builder pattern: first a new
[Collector](#TypePal-Collector) is created (using `newCollector`) and that enables the author of the type checker to add
facts, requirements and calculators to the `TModel` depending on the specific input program. The Collector calls
user-defined `collect` functions for each language construct. This collection process is strictly *local* and based on
the nested structure of the parse tree and the result is an initial `TModel`.

After the Collector phase, a `TModel` is available whose constraints can be solved (or not). This is done by creating a
new [Solver](#TypePal-Solver) (using `newSolver`) and running it on the given `TModel`.

TypePal can be configured using a [TypePal Configuration](#TypePal-Configuration).

# Reporting

**Synopsis.**

How to format and report errors, warnings and info messages.

**Description.**

Reporting may be done both in the Collector and the Solver. It uses values of the datatype `FailMessage` that can be
created as follows:

``` rascal
FailMessage error(value src, str msg, value args...);
FailMessage warning(value src, str msg, value args...);
FailMessage info(value src, str msg, value args...);
```

Here,

  - `src` is a `Tree` or `loc` that is the subject of the report.

  - `msg` is an informative string to be printed. It may contain *insertion directives*.

  - `args` are zero or more values to be inserted in the insertion directives in `msg`.

The following insertion directives are supported:

  - `%t`: insert the *type* of the next element of `args`.

  - `%v`: insert the *value* of the next element of `args`.

  - `%q`: quote and insert the *type* or *value* of the next element of `args`.

  - `%%`: insert the character `%`.

# Collector

**Synopsis.**

A `Collector` collects constraints from source code and produces an initial `TModel`.

**Description.**

A `Collector` is a statefull object that provides all the functions described below to access and change its internal
state. The global services provided by a `Collector` are:

  - Register facts, calculators, and requirements as collected from the source program.

  - Maintain a global (key,value) store to store global information relevant for the collection process. Typical
    examples are:
    
      - Configuration information.
    
      - The files that have been imported.

  - Manage scopes.

  - Maintain a single value per scope. This enables decoupling the collection of information from separate but related
    language constructs. Typical examples are:
    
      - While collecting information from a function declaration: create a new function scope and associate the required
        return type with it so that return statements in the function body can check that (a) they occur inside a
        function; (b) that the type of their returned value is compatible with the required return type.
    
      - While collecting information from an optionally labelled loop statement: create a new loop scope and associate
        the label with it so that break/continue statements can check that: (a) they occur inside a loop statement; (b)
        which loop statement they should (dis)continue.

  - Reporting.

The functions provided by a `Collector` are summarized below:

![800]\(images/Collector.png\)

Three dozen functions are available that fall into the following categories:

  - *Lifecycle of Collector*: create a new `Collector`, use it to `collect` information from a source program, and
    produce a TModel.

  - *Configuration*: retrieve or modify configuration settings.

  - *Scoping*: enter or leave a scope, ask for current scope.

  - *Scope Info*: add information to the current scope or retrieve that information.

  - *Nested Info*: maintain nested information during collection; this is only available during collection.

  - *Composition*: add another TModel to the current one.

  - *Reporting*: report errors, warnings and info messages.

  - *Add Path*: add paths to the scope graph.

  - *Define*: define identifiers in various ways.

  - *Use*: use identifiers in various ways.

  - *Inference*: create new type variables for type inference.

  - *Facts*: establish facts.

  - *Calculate*: define calculators.

  - *Require*: define requirements.

Technically, `Collector` is a datatype with a single constructur and a number of functions as fields, For instance,
given a `Collector` named `c`, calling the `define` function amounts to: `c.define(the-arguments-of-define)`. All
Collector functions are prefixed with `/* Collector field */` to emphasize that they are a field of the Collector
datatype.

## LifeCycle of Collector

A new `Collector` is created using the function `newCollector`.

``` rascal
Collector newCollector(str modelName, Tree pt, TypePalConfig config = tconfig());
```

where

  - `modelName` is the name of the TModel to be created (used for logging);

  - `pt` is the parse tree of the source program to be type checked;

  - `config` is a [TypePal Configuration](#TypePal-Configuration).

Once a Collector has been created, the user-defined `collect` function is invoked with the current parse tree of a
source program and the Collector as arguments. The `collect` function is applied recursively until all information has
been collected from the source program.

Finally, `run` creates the desired `TModel` that will be used by the [Solver](#TypePal-Solver):

``` rascal
/* Collector field */ TModel () run;
```

A typical scenario is (for a given a parse tree `pt` of the program to be checked):

``` rascal
c = newCollector("my_model", pt);   // create Collector
collect(pt, c);                     // collect constraints
model = c.run();                    // create initial TModel to be handled by the Solver
```

The `collect` function has to be supplied by the author of the type checker and looks like this:

``` rascal
void collect(LanguageConstruct lc, Collector c){ ... }
```

where:

  - `lc` is a syntactic type from the language under consideration.

  - `c` is a `Collector`.

> **Important**
> 
> Each `collect` function is responsible for collecting constraints from its subtrees.

## Configuration

The [TypePal Configuration](#TypePal-Configuration) can be retrieved or adjusted by the following two functions:

``` rascal
/* Collector field */ TypePalConfig () getConfig;
/* Collector field */ void (TypePalConfig cfg) setConfig;
```

The former returns the current TypePal configuration, the latter sets the current configuration to a new configuration.

## Scoping

Scope management amounts to entering a new scope, leave the current scope and retrieving the current scope:

``` rascal
/* Collector field */ void (Tree inner) enterScope;
/* Collector field */ void (Tree inner) leaveScope;
/* Collector field */ loc () getScope,
```

In order to check consistency, `leaveScope` has the inner scope that it is supposed to be leaving as argument.

Here is an example how the `let` expression in [Fun](#_fun) handles subscopes:

``` rascal
void collect(current: (Expression) `let <Id name> : <Type tp> = <Expression exp1> in <Expression exp2> end`, Collector c) {
     c.enterScope(current);
         c.define("<name>", variableId(), name, defType(tp));
         c.calculate("let", current, [exp2], AType(Solver s) { return s.getType(exp2); } );
         collect(tp, exp1, exp2, c);
     c.leaveScope(current);
}
```

## Scope Info

It is possible to associate auxiliary information with each scope. This enables the downward propagation of information
during the topdown traversal of the source program by `collect`. Typical use cases are:

  - recording the return type of a function declaration and checking that all return statements in the body of that
    function have a type that is compatible with the declared return type.

  - recording the label of a loop statement for the benefit of nested break or continue statements.

Scopes are identified by their source location and `ScopeRole`: a user-defined data type that distinsguishes possible
roles such as `functionScope()` or `labelScope()`.

`setScopeInfo` sets the information for a scope:

``` rascal
/* Collector field */ void (loc scope, ScopeRole scopeRole, value info) setScopeInfo;
```

where

  - `scope` is the scope for which information is to be set.

  - `scopeRole` is the role of that scope.

  - `info` is the associated information.

`getScopeInfo` retrieves associated scope information:

``` rascal
/* Collector field */ lrel[loc scope, value scopeInfo]  (ScopeRole scopeRole) getScopeInfo;
```

where

  - `scopeRole` is the role of the scope we are looking for.

`getScopeInfo` returns a list relation containing scope/scopeInfo pairs (ordered from innermost to outermost scope).

Let’s illustrate ScopeInfo with a stripped down version of how the Rascal type checker handles `while` and `break`
statements:

``` rascal
data LoopInfo = loopInfo(str name); 

void collect(current: (Statement) `<Label label> while( <{Expression ","}+ conditions> ) <Statement body>`,  Collector c){
    c.enterScope(current);
        ...
        loopName = "<label.name>";
        c.setScopeInfo(c.getScope(), loopScope(), loopInfo(loopName)); 
        ...
    c.leaveScope(current);
}

void collect(current:(Statement) `break <Target target>;`, Collector c){
    ...
    loopName = "<target.name>"
    for(<scope, scopeInfo> <- c.getScopeInfo(loopScope())){ 
        if(loopInfo(loopName1) := scopeInfo){
            if(loopName == "" || loopName == loopName1){
                collect(target, c);
                return;
             }
        } else {
            throw rascalCheckerInternalError(getLoc(current), "Inconsistent info from loop scope: <scopeInfo>");
        }
    }
    c.report(error(current, "Break outside a while/do/for statement"));
}
```

  - Introduces a data type to represent loop information.

  - When handling a while statement, the current scope is marked as `loopScope` and `loopInfo` is associated with it.

  - When handling a `break` statement, we get all available ScopeInfo for loopScopes (innermost first) and check the
    associated loopInfo.

## Nested Info

An arbitrary number of push down stacks can be maintained during the topdown traversal of the source code that is being
type checked. A use case is recording that a certain syntax type is encountered and make children aware of this, e.g.
"we are inside a parameter list".

Each stack has a string name (`key`) and is created on demand.

``` rascal
/* Collector field */ void (str key, value val) push
/* Collector field */ value (str key) pop,
/* Collector field */ value (str key) top,
/* Collector field */ list[value] (str key) getStack,
/* Collector field */ void (str key) clearStack,
```

`push`, `pop`, and `top` perform standard stack operations. `push` creates a stack when needed, while `top` and `pop`
require the existence of the named stack. `getStack` returns all values in the named stack, while `clearStack` resets it
to empty.

## Composition

TModels can be composed by adding the information from one TModel to the other. A use case is module compoisition.

``` rascal
/* Collector field */ void (TModel tm) addTModel;
```

`addTModel` adds the information in `tm` to the current Collector.

## Reporting

One or more reports can be added by `report` and `reports`:

``` rascal
/* Collector field */ void (FailMessage fmsg) report;
/* Collector field */ void (list[FailMessage] fmgs) reports;
```

See [Reporting](#TypePal-Reporting) for a description of `FailMessage`.

> **Important**
> 
> If one of the messages is `error` the execution of the current calculator or requirement is immediately terminated.

## Add Path

TypePal is based on nested scopes and path between scopes. The former represent textual nesting as present in block
structure and function scopes. The latter represent non-local semantic links between program parts as present in import
statements between modules or Pascal’s with statement. The following functions add to the scope graph a path from the
current scope to another scope.

### Add a path to a definition

``` rascal
/* Collector field */ void (Tree occ, set[IdRole] idRoles, PathRole pathRole) addPathToDef;
```

`addPathToDef` is typically used to create an *import* or *extend* path between program parts. `occ` is an occurence of
a name that should be defined elsewhere in one of the given roles. The effect is to add a `pathRole` path between the
current scope and the definition.

Here is an example taken from [ModFun](#_modfun):

``` rascal
void collect(current: (ImportDecl) `import <ModId mid> ;`, Collector c){
     c.addPathToDef(mid, {moduleId()}, importPath());
}
```

### Add a path to a qualified definition

``` rascal
/* Collector field */ void (list[str] ids, Tree occ, set[IdRole] idRoles, set[IdRole] qualifierRoles, PathRole pathRole) addPathToQualifiedDef;
```

Similar to `addPathToDef` for the occurrence of a qualified names rather than a simple name.

### Add a path to a type

``` rascal
/* Collector field */ void (Tree occ, PathRole pathRole) addPathToType
```

`occ` is a parse tree with has a certain type. The effect is to add a `pathRole` path between the current scope and the
definition of that type.

A prime example is type checking of [Pascal](#_pascal)'s `with` statement which *opens* the definition of a record type
and makes all defined fields available in the body of the `with` statement. Here we create a `withPath` between the
scope of the with statement and all definitions of the record types of the given record variables:

``` rascal
void collect(current: (WithStatement) `with <{RecordVariable ","}+ recordVars> do <Statement withStat>`, Collector c){
    c.enterScope(current);
        for(rv <- recordVars){
            c.addPathToType(rv, withPath());
        }
        collect(recordVars, withStat, c);
    c.leaveScope(current);
}
```

## Define

The function `define` adds the definition of a name in the *current* scope:

``` rascal
/* Collector field */  void (str id, IdRole idRole, value def, DefInfo info) define;
```

where:

  - `id` is the textual appearance of the name.

  - `idRole` is the role played by the name.

  - `def` is the part of the parse tree that corresponds to the definition of the name.

  - `info` is the definition information [DefInfo](#_definfo) to be associated with this definition.

The function `defineInScope` adds the definition of a name in a *given* scope:

``` rascal
/* Collector field */  void (value scope, str id, IdRole idRole, value def, DefInfo info) defineInScope
```

## Use

### Use an unqualified name

There are three functions to describe the occurrence of a name in a parse tree as a use. The most elementary use of a
name is described by:

``` rascal
/* Collector field */ void (Tree occ, set[IdRole] idRoles) use,
```

The parse tree `occ` is a use to be resolved in the current scope in one of the given roles `idRoles`. The use of a
variable in an expression is typically modelled with this use function.

Here is an example from [Calc](#_calc):

``` rascal
void collect(current: (Exp) `<Id name>`, Collector c){
    c.use(name, {variableId()});
}
```

### Use a qualified name

Next we consider the use of qualified names, i.e., a list of identifiers that will be resolved from left to right. We
will call these identifiers (except the last one) *qualifiers* and the last one the *qualified identifier*.

``` rascal
/* Collector field */ void (list[str] ids, Tree occ, set[IdRole] idRoles, set[IdRole] qualifierRoles) useQualified;
```

Here `ids` is the list of strings that form the qualified name, `occ` is the actual occurrence, and there are two sets
of roles: `idRoles` are the possible roles for the qualified identifier itself and \`qualifierRoles are the possible
roles for the qualifiers.

### Use a name via another type

Many languages support *named types* and names that can be defined inside such a named type. Examples are field names in
records or method names in classes. `useViaType` handles the use of names defined in a named type:

``` rascal
/* Collector field */ void (Tree container, Tree selector, set[IdRole] idRolesSel) useViaType
```

where

  - `container`: has a named type as type.

  - `selector`: is the name to be selected from that named type.

  - `idRolesSel`: are the IdRoles allowed for the selector.

Here is an example of field selection from a record in [Struct](#_struct):

``` rascal
void collect(current:(Expression)`<Expression lhs> . <Id fieldName>`, Collector c) {
    c.useViaType(lhs, fieldName, {fieldId()}); 
    c.fact(current, fieldName); 
    collect(lhs, c);
}
```

  - Determine the type of `lhs`, say *T*. Now look for a definition of `fieldName` (as `fieldId`) in the definition of
    *T*.

  - The type of the whole expressions becomes the type of `fieldId`.

`useViaType` can be configured with [getTypeNamesAndRole](#_gettypenamesandrole) and
[getTypeInNamelessType](#_gettypeinnamelesstype) that determine the precise mapping between a named or unnamed type and
its fields.

### UseLub

In some languages (think Rascal) local type inference and subtyping are needed to determine the type of variables: when
no explicit definition is present, the type of these variables is inferred from their use and the least-upper-bound
(LUB) of all the uses of a variable is taken as its type. `useLub` marks variable uses for which this regime has to be
applied:

``` rascal
/* Collector field */ void (Tree occ, set[IdRole] idRoles) useLub
```

See the Rascal type checker for examples.

## Inference

ATypes may contain type variables and new type variables can be created using `newTypeVar`:

``` rascal
/* Collector field */ AType (value src) newTypeVar;
```

Type variables can be bound via unification.

Here is an example of a call expression taken from [UntypedFun](#_untypedfun):

``` rascal
void collect(current: (Expression) `<Expression exp1>(<Expression exp2>)`, Collector c) {
     tau1 = c.newTypeVar(exp1);
     tau2 = c.newTypeVar(exp2);

     c.calculateEager("application", current, [exp1, exp2],
        AType (Solver s) {
              s.requireUnify(functionType(tau1, tau2), exp1, error(exp1, "Function type expected, found %t", exp1));
              s.requireUnify(tau1, exp2, error(exp2, "Incorrect type of actual parameter"));
              return tau2;
            });
      collect(exp1, exp2, c);
}
```

`calculate` and `require` are only evaluated when all their dependencies are available and they are fully instantiated,
i.e., **do not contain type variables**.

`calculateEager` and `requireEager` are also only evaluated when all their dependencies are available **but those may
contain type variables**.

The bindings that are accumulated during `calculateEager` or `requireEager` are effectuated upon successfull completion
of that `calculateEager` or `requireEager`.

## Fact

The function `fact` registers known type information for a program fragment `src`:

``` rascal
/* Collector field */ void (Tree src, value atype) fact;
```

where `atype` can be either an `AType` or a `Tree`. In the latter case the type of that Tree is used when available.

Here are two examples from [Calc](#_calc):

``` rascal
void collect(current: (Exp) `<Integer integer>`, Collector c){
    c.fact(current, intType()); 
}

void collect(current: (Exp) `( <Exp e> )`, Collector c){
    c.fact(current, e);        
    collect(e, c);
}
```

  - Registers the fact that the current expression has type `intType`.

  - Registers the fact that the current expression has the same type as the embedded expression `e`.

## Calculate

A calculator computes the type of a subtree `src` by way of an AType-returning function `calculator`. A list of
dependencies is given whose types have to be known before this calculator can be computed. There are two versions: for
`calculate` all dependencies should be fully resolved and instantiated, while `calculateEager` can also handle
dependencies that still contain type variables.

``` rascal
/* Collector field */ void (str name, Tree src, list[value] dependencies, AType(Solver s) calculator) calculate;
/* Collector field */ void (str name, Tree src, list[value] dependencies, AType(Solver s) calculator) calculateEager;
```

See [A Calculator Language](#TypePal-PocketCalculator) and [Examples of Typecheckers](#TypePal-Examples) for examples of
calculator definitions.

See [Inference](#_inference) for details about type variables.

## Require

A requirement is a predicate regarding the type or properties of a source tree fragment `src`. There are two versions:
for `require` all dependencies should be fully resolved and instantiated, while `requireEager` can also handle
dependencies that still contain type variables.

``` rascal
/* Collector field */ void (str name, Tree src, list[value] dependencies, void(Solver s) pred) require;
/* Collector field */ void (str name, Tree src, list[value] dependencies, void(Solver s) pred) requireEager;
```

where

  - `name` is the name of the requirement (for reporting purposes).

  - `dependencies` is a list of dependencies whose types have to be known before this requirement can be computed.

  - `pred` is a function that actually checks the requirement; when it is violated this will be reported via its Solver
    argument.

More specific requiremens can be expressed for checking that two subtrees or types are equal, comparable, that the one
is a subtype of the other, or that they can be unified:

``` rascal
/* Collector field */ void (value l, value r, FailMessage fmsg) requireEqual;
/* Collector field */ void (value l, value r, FailMessage fmsg) requireComparable;
/* Collector field */ void (value l, value r, FailMessage fmsg) requireSubType;
/* Collector field */ void (value l, value r, FailMessage fmsg) requireUnify;
```

The arguments `l` and `r` should either be an AType or a subtree whose type is known.

See [A Calculator Language](#TypePal-PocketCalculator) and [Examples of Typecheckers](#TypePal-Examples) for examples of
requirement definitions. See [Inference](#_inference) for details about type variables.

# Solver

**Synopsis.**

A `Solver` tries to solve the constraints in a `TModel`; unsolved constraints produce error messages

**Description.**

The purpose of a Solver is to solve the constraints that have been gathered by the [Collector](#TypePal-Collector) and
to produce a TModel. The functions provided by a Solver are summarized below:

![800]\(images/Solver.png\)

Two dozen functions (some very similar to the ones provided for [Collector](#TypePal-Collector)) are available that fall
into the following categories:

  - *Lifecycle of Solver*: create a new Solver and use it to solve the constraints in a given TModel.

  - *Fact*: establish facts.

  - *Calculate*: calculate types.

  - *Require*: check requirements.

  - *Types*: retrieve the type of a program fragment in various ways, if that type is available.

  - *Inference*: create new type variables for type inference.

  - *Reporting*: report errors, warnings and info messages.

  - *Global Info*: access global information such as the current [TypePal Configuration](#TypePal-Configuration),
    available type facts, and the global store (EXPLAIN).

In identical style as used for [Collector](#TypePal-Collector), `Solver` is a datatype with a single constructur and
with a number of functions as fields, For instance, given a `Solver` named `s`, calling the `getType` function amounts
to: `s.getType(argument-of-getType)`. All Solver functions are prefixed with `/* Solver field */` to emphasize that they
are a field of the Solver datatype.

The result of the Solver is an enriched `TModel` that contains, amongst others, messages regarding violated requirements
or types that could not be computed. It can also be used to generate other usefull information about the program such as
a use-def relation and the used vocabulary (used for name completion).

## Lifecycle of Solver

Once, an initial TModel has been created by a [Collector](#TypePal-Collector), a Solver takes over to solve constraints
and produce a final TModel. A new Solver can be created by `newSolver` that comes in two flavours:

``` rascal
Solver newSolver(Tree pt, TModel tm)
Solver newSolver(map[str,Tree] namedTrees, TModel tm){
```

The former takes a parse tree and an initial TModel and is intended to solve the constraints for a single parse tree.
The latter takes a map of named parse trees and an initial TModel and can handle the situation of multiple trees with
mutual dependencies.

Finally, `run` creates the final TModel by solving the constraints in the initial TModel:

``` rascal
/* Solver field */ TModel () run
```

A complete type checking scenario (for a given a parse tree `pt` of the program to be checked) is:

``` rascal
c = newCollector("my_model", pt);  // create Collector
collect(pt, c);                    // collect constraints
initial_model = c.run();           // create initial TModel
s = newSolver(pt, initial_model);  // create Solver
final_model = s.run();             // solve constraints and produce final TModel
```

The final TModel contains valuable information such as

  - messages (errors, warnings, info);

  - type facts for subtrees of the given parse tree;

  - use/def relations.

## Fact

The function `fact` registers known type information for a program fragment `src`:

``` rascal
/* Solver field */ void (value src, AType atype) fact
```

Here

  - `src` may either be a `Tree` (i.e., a parse tree fragment) or a `loc` (the source location of a parse tree
    fragment).

  - `atype` is the AType to be associated with `src`.

## Calculate

All calculate (and require) functions use the following typing convention: an argument of type `value` can either be:

  - an `AType`, or

  - a `Tree`.

In the former case, the AType is used as is. In the latter case, the type of the tree is used provided that it exists.
Otherwise a `TypeUnavailable()` exception is generated and the calculator or requirement in which the predicate occurs
is re-evaluated at a later time.

### equal

``` rascal
/* Solver field */ bool (value l, value r) equal
```

The function `equal` determines whether the types of `l` and `r` are equal, the result is a Boolean value.

### subtype

``` rascal
/* Solver field */ bool (value l, value r) subtype
```

The function `subtype` determines whether the type of `l` is a subtype of the type of `r`; it calls the user-provided
function `getSubType`, see [TypePal Configuration](#TypePal-Configuration).

### comparable

``` rascal
/* Solver field */ bool (value l, value r) comparable
```

The function `comparable` determines whether the type of `l` is comparable with the type of `r`; it calls the
user-provided function `getSubType` twice, see [TypePal Configuration](#TypePal-Configuration).

### unify

``` rascal
/* Solver field */ bool (value l, value r) unify
```

The function `unify` determines whether the type of `l` can be unified with the type of `r` it calls the user-provided
functions `getSubType` and `getLub`, see [TypePal Configuration](#TypePal-Configuration). The bindings that may result
from unification are effectuated when the enclosing calculate succeeds.

### lub

``` rascal
/* Solver field */ AType (value l, value r) lub
```

The function `lub` return the least upper bound of the types of `l` and `r`; it calls the user-provided function
`getLub`, see [TypePal Configuration](#TypePal-Configuration).

## Require

### requireEqual

``` rascal
/* Solver field */ void (value l, value r, FailMessage fmsg) requireEqual
```

The function `requireEqual` returns when the types of `l` and `r` are equal, otherwise a FailMessage is reported.

### requireSubType

``` rascal
/* Solver field */ void (value l, value r, FailMessage fmsg) requireSubType
```

The function `requireSubtype` returns when the type of `l` is a subtype of `r`, otherwise the FailMessage is reported;
it calls the user-provided function `getSubType`, see [TypePal Configuration](#TypePal-Configuration).

### requireCompare

``` rascal
/* Solver field */ void (value l, value r, FailMessage fmsg) requireComparable
```

The function `requireComparable` returns when the type of `l` is comparable with the type of `r`, otherwise the
FailMessage is generated; it calls the user-provided function \`getSubType\`twice, see [TypePal
Configuration](#TypePal-Configuration).

### requireUnify

``` rascal
/* Solver field */ void (value l, value r, FailMessage fmsg) requireUnify
```

The function ``requireUnify just returns when the type of `l`` can be unified with the type of `r`, otherwise the
FailMessage is reported; it calls the user-provided functions `getSubType` and `getLub`, see [TypePal
Configuration](#TypePal-Configuration). The bindings that may result from unification are effectuated when the enclosing
require succeeds.

### requireTrue and requireFalse

``` rascal
/* Solver field */ void (bool b, FailMessage fmsg) requireTrue
/* Solver field */ void (bool b, FailMessage fmsg) requireFalse
```

The function `requireTrue` returns when its condition is true, otherwise the FailMessage is reported. The function
`requireFalse` returns when its condition is false, otherwise the FailMessage is reported.

## Types

Type-related functions try to retrieve various forms of type information from parts of the source program. When that
information is available, it is returned as result. When it is not available, the internal exception `TypeUnavailable()`
is thrown. This will abort the execution of the current requirement or calculator which will then be tried later again.

### getType

The workhorse of TypePal is the function `getType` that determines the type of a given source code fragment in the
current scope:

``` rascal
/* Solver field */ AType(value src) getType
```

`src` may either be a `Tree` (i.e., a parse tree fragment) or a `loc` (the source location of a parse tree fragment).

Here is how `getType` is used in [Pico](#_pico) to check the addition operator:

  - two integer arguments give an integer result;

  - two string arguments give a string result;

  - other combinations are incorrect.

<!-- end list -->

``` rascal
void collect(current: (Expression) `<Expression lhs> + <Expression rhs>`, Collector c){
     c.calculate("addition", current, [lhs, rhs],
        AType (Solver s) { switch([s.getType(lhs), s.getType(rhs)]){
                   case [intType(), intType()]: return intType();
                   case [strType(), strType()]: return strType();
                   default:
                       s.report(error(current, "Operator `+` cannot be applied to %t and %t", lhs, rhs));
                   }
                 });
     collect(lhs, rhs, c);
}
```

### getTypeInScope

The function `getTypeInScope` determines the type of a given source code fragment in a given scope and given roles:

``` rascal
/* Solver field */ AType (Tree occ, loc scope, set[IdRole] idRoles) getTypeInScope
```

Here

  - `occ` is a parse tree fragment;

  - `scope` is the desired scope;

  - `idRoles` is a set of allowed identifier roles.

### getTypeInScopeFromName

The function `getTypeInScopeFromName` determines the type of a given name that has been bound via given identifier roles
in a given scope. It is typically used to map a name of a type to its actual type, e.g., mapping the name `POINT` as it
occurs in a declaration to the actual record type of `POINT`.

``` rascal
/* Solver field */ AType (str name, loc scope, set[IdRole] idRoles) getTypeInScopeFromName
```

Here:

  - `name` is the name of the desired element;

  - `scope` is the desired scope;

  - `idRoles` is a set of allowed identifier roles.

### getTypeInType

The function `getTypeInType` is typically used to determine parts of a container type such as, e.g., the fields in a
named record type or the methods in a named class type.

``` rascal
/* Solver field */ AType (AType containerType, Tree selector, set[IdRole] idRolesSel, loc scope) getTypeInType
```

Here:

  - `containerType` is a given container type;

  - `selector` is a parse tree fragment to select a part from the container type (e.g., a field or method name);

  - `idRolesSel` is a set of allowed identifier roles for the selector (e.g., `fieldId()` or `methodId()`);

  - `scope` is the desired scope.

### getAllDefinedInType

The function `getAllDefinedInType` is typically used to determine **all** named types that are defined in a container
type, e.g., all fields in a record type or all methods in a class type.

``` rascal
/* Solver field */ rel[str id, AType atype] (AType containerType, loc scope, set[IdRole] idRoles) getAllDefinedInType
```

Here:

  - `containerType` is a given container type;

  - `scope` is the desired scope;

  - `idRoles` is a set of allowed identifier roles for the selectoed types.

## Inference

Type inference is supported by the introduction of type variables using `newTypeVar` in combination with unification
primitives inside `calculateEager` [Calculate](#_calculate) and `requireEager` [Require](#_require) such as
`requireUnify` and `unify`. The following functions support the computation with types possibly containing type
variables.

### instantiate

``` rascal
/* Solver field */ AType (AType atype) instantiate
```

replaces all type variables occurring in `atype` by their binding (when present).

### isFullyInstantiated

``` rascal
/* Solver field */ bool (AType atype) isFullyInstantiated
```

checks whether `atype` contains any occurrences of type variables.

## Reporting

``` rascal
/* Solver field */ bool(FailMessage fmsg) report
/* Solver field */ bool (list[FailMessage] fmsgs) reports
```

## Global Info

### getConfig

``` rascal
/* Solver field */ TypePalConfig () getConfig
```

Returns the current [TypePal Configuration](#TypePal-Configuration).

### getFacts

``` rascal
/* Solver field */ map[loc, AType]() getFacts
```

Returns the type facts known to the Solver as mapping from source location to AType.

### getStore

``` rascal
/* Solver field */ map[str,value]() getStore
```

Returns the global store of the Solver. The following elements may occur in the store:

  - Remaining [Nested Info](#_nested_info) from the collect phase. For instance, a single `push` to a stack during the
    collect phase will be visible during the solve phase and can me (mis)used to communicate information between the two
    phases.

# TypePal Configuration

**Synopsis.**

Configuration options for TypePal

**Description.**

TypePal provides configuration options for

  - *Name Resolution & Overloading*: configures how names are resolved and which overloading is allowed.

  - *Operations on Types*: configures how operations like subtype and least-upper-bound (lub) are defined.

  - *Retrieval of Types*: configures how named and structured types are handled.

  - *Extension Points*: configures operations before an after solving.

  - *Miscellaneous*: utility functions that can be configured.

  - *Verbosity*: configures the verbosity of TypePal.

Here is an overview:

![600]\(images/TypePalConfig.png\)

## Name Resolution & Overloading

### isAcceptableSimple

``` rascal
/* Configuration field */ Accept (TModel tm, loc def, Use use) isAcceptableSimple
```

Here

  - `tm` is a given TModel

  - `def` is a proposed definition

  - `use` is the use (characterized by the `Use` data type that contains, name, occurrence, scope and identifier roles
    of the use, see [Identifier Use](#_identifier_use)) for which the definition is proposed.

`isAcceptableSimple` accepts or rejects a proposed definition for the use of a simple name in a particular role. The
returned `Accept` data type is defined as:

``` rascal
data Accept
    = acceptBinding()
    | ignoreContinue()
    | ignoreSkipPath()
    ;
```

The default `isAcceptableSimple` returns acceptBinding()\`.

Typical concerns addressed by `isAcceptableSimple` are:

  - enforce definition before use;

  - check access rights, e.g. visibility.

By comparing the offset of the source locations of definition, respectively, the use, we enforce definition before use:

``` rascal
Accept myIsAcceptableSimple(TModel tm, loc def, Use use)
    = use.occ.offset > def.offset ? acceptBinding() : ignoreContinue();
```

### isAcceptableQualified

``` rascal
/* Configuration field */ Accept (TModel tm, loc def, Use use) isAcceptableQualified
```

Here

  - `tm` is a given TModel

  - `def` is a proposed definition

  - `use` is the use for which the definition is proposed.

`isAcceptableQualified` accepts or rejects a proposed definition for the use of a qualified name in a particular role.

### isAcceptablePath

``` rascal
/* Configuration field */
Accept (TModel tm, loc defScope, loc def, Use use, PathRole pathRole) isAcceptablePath
```

Here

  - `tm` is a given TModel;

  - `defScope` is the scope in which the proposed definition occurs;

  - `def` is a proposed definition;

  - `use` is the use for which the definition is proposed;

  - `pathRole` is the role of the semantic path.

`isAcceptablePath` accepts or rejects a proposed access path between use and definition.

To illustrate this, assume a language with modules and imports. A module may contain variable definitions but these are
not visible from outside the module. This can be enforced as follows:

``` rascal
Accept myIsAcceptablePath(TModel tm, loc def, Use use, PathRole pathRole) {
    return variableId() in use.idRoles ? ignoreContinue() : acceptBinding();
}
```

### mayOverload

``` rascal
/* Configuration field */ bool (set[loc] defs, map[loc, Define] defines) mayOverload
```

`mayOverload` determines whether a set of definitions (`defs`) are allowed to be overloaded, given their definitions
(`defines`).

In [FWJava](#_fwjava) the only allowed overloading is between class names and constructor names.

``` rascal
bool fwjMayOverload (set[loc] defs, map[loc, Define] defines) {
    roles = {defines[def].idRole | def <- defs};  
    return roles == {classId(), constructorId()}; 
}
```

  - First collect all the roles in which the overloaded names have been defined.

  - Only allow the combination of class name and constructor name.

## Operations on Types

Various operations on types can be configured by way of user-defined functions.

### isSubType

``` rascal
/* Configuration field */ bool (AType l, AType r) isSubType
```

Function that checks whether `l` is a subtype of `r`.

### getLub

``` rascal
/* Configuration field */ AType (AType l, AType r) getLub
```

Function that computes the least upperbound of two types and `l` and `r`.

### getMinAType

``` rascal
/* Configuration field */ AType() getMinAType
```

Function that returns the *smallest* type of the type lattice.

### getMaxAType

``` rascal
/* Configuration field */ AType() getMaxAType
```

Function that returns the *largest* type of the type lattice.

### instantiateTypeParameters

``` rascal
/* Configuration field */ AType (Tree current, AType def, AType ins, AType act, Solver s) instantiateTypeParameters
```

The function `instantiateTypeParameters` defines instantiation of **language-specific** type parameters, where:

  - `current` is a source code fragment for which type `act` has already been determined, but any **language-specific**
    type parameters in `act` may still need to be instantiated.

  - `def` is the parameterized type of `act`.

  - `ins` is an instantiated version of the type of `act` (i.e., with bound type parameters).

  - `act` is the actual type found for `current` that needs to be instantiated.

`instantiateTypeParameters` will match `def` with `ins` and the resulting bindings will be used to instantiate `act`.
The instantiated version of `act` is returned.

In [StructParameters](#_structparameters) parameterized structs (records) are defined. The formal type of such a struct
is `structDef(str name, list[str] formals)`, i.e., a struct has a name and a list of named formal type parameters. The
actual type of a struct is `structType(str name, list[AType] actuals)`, i.e., a struct name followed by actual types for
the parameters.

The definition of `instantiateTypeParameters` for this example is as follows:

``` rascal
AType structParametersInstantiateTypeParameters(Tree current, structDef(str name1, list[str] formals), structType(str name2, list[AType] actuals), AType t, Solver s){
    if(size(formals) != size(actuals)) throw checkFailed([]);
    bindings = (formals[i] : actuals [i] | int i <- index(formals));

    return visit(t) { case typeFormal(str x) => bindings[x] };
}

default AType structParametersInstantiateTypeParameters(Tree current, AType def, AType ins, AType act, Solver s) = act;
```

## Retrieval of Types

### getTypeNamesAndRole

``` rascal
/* Configuration field */  tuple[list[str] typeNames, set[IdRole] idRoles] (AType atype) getTypeNamesAndRole
```

This function determines whether a given `atype` is a named type or not. This is needed for the customization of
indirect type computations such as [???](#useViaType) and [getTypeInType](#_gettypeintype). When `atype` is a named type
`getTypeNamesAndRole` returns:

  - A list of names that may be associated with it. In most languages this will contain just a single element, the name
    of the type. In more sophisticated cases the list may contain a list of named types to be considered.

  - A list of roles in which the type name can be bound.

Here are the definitions for \<\<Struct\>:

``` rascal
tuple[list[str] typeNames, set[IdRole] idRoles] structGetTypeNamesAndRole(structType(str name)){
    return <[name], {structId()}>; 
}

default tuple[list[str] typeNames, set[IdRole] idRoles] structGetTypeNamesAndRole(AType t){
    return <[], {}>;               
}
```

  - A `structType(name)` has a name that is bound in the role `structId()`. Return the name and role.

  - Any other type is unnamed; return an empty list of type names.

Another example is the Rascal type checker, where we need to model the case that all abstract data types are a subtype
of `Tree`. In that case `getTypeNamesAndRole` will return `<["A", "Tree"], roles>` for an abstract data type `A`. The
net effect is that when the search for a name in `A` fails, the search is continued in `Tree`.

### getTypeInTypeFromDefine

``` rascal
/* Configuration field */  AType (Define containerDef, str selectorName, set[IdRole] idRolesSel, Solver s) getTypeInTypeFromDefine
```

In some extreme cases (think Rascal) the type of a field selection cannot be determined by considering all the fields
defined in a container type and as a last resort one needs to fall back to information that has been associated with the
original definition of the container type. `getTypeInTypeFromDefine` is called as a last resort from `getTypeInType`.

In the Rascal type checker common keyword parameters of data declarations are handled using `getTypeInTypeFromDefine`.

### getTypeInNamelessType

``` rascal
/* Configuration field */ AType(AType containerType, Tree selector, loc scope, Solver s) getTypeInNamelessType
```

`getTypeInNamelessType` describes field selection on built-types that have not been explicitly declared with a name. A
case in point is a `length` field on a built-in string type.

In [StaticFields](#_staticfields) this is done as follows:

``` rascal
AType staticFieldsGetTypeInNamelessType(AType containerType, Tree selector, loc scope, Solver s){
    if(containerType == strType() && "<selector>" == "length") return intType();
    s.report(error(selector, "Undefined field %q on %t", selector, containerType));
}
```

## Extension Points

### preSolver

``` rascal
/* Configuration field */ TModel(map[str,Tree] namedTrees, TModel tm) preSolver
```

A function `preSolver` that can enrich or transform the TModel before the Solver is applied to it.

### postSolver

``` rascal
/* Configuration field */ void (map[str,Tree] namedTrees, Solver s) postSolver
```

A function `postSolver` that can enrich or transform the TModel after constraint solving is complete.

## Miscellaneous

### unescapeName

``` rascal
/* Configuration field */  str(str) unescapeName
```

A function *unescapeName* to define language-specific escape rules for names. By default, all backslashes are removed
from names.

### validateConstraints

``` rascal
/* Configuration field */ bool validateConstraints = true
```

When `validateConstraints` is true, the validity of all constraints is checked before solving starts. For all
dependencies (in facts, calculators and requirements) a calculator needs to be present to solve that dependency.

## Verbosity

The verbosity of TypePal can be controlled with several configurations settings.

### showTimes

``` rascal
/* Configuration field */ bool showTimes = false
```

When `showTimes` is true, the time of the Collector and Solver phases is printed.

### showSolverSteps

``` rascal
/* Configuration field */ bool showSolverSteps = false
```

When `showSolverSteps` is true, each step of the Solver is printed.

### showSolverIterations

``` rascal
/* Configuration field */ bool showSolverIterations = false
```

When `showSolverIterations` is true, information is printed about each iteration of the Solver.

### showAttempts

``` rascal
/* Configuration field */ bool showAttempts = false
```

When `showAttempts` is true, the number of evaluation attempts per calculator or requirement is printed when solving is
complete.

### showTModel

``` rascal
/* Configuration field */ bool showTModel = false
```

When `showTModel` is true, the resulting TModel is printed when solving is complete.

# Utilities

**Synopsis.**

Some utility functions.

**Description.**

TypePal provides some utility functions to address common scenarios.

## collectAndSolve

``` rascal
TModel collectAndSolve(Tree pt, TypePalConfig config = tconfig(), bool debug = false)
```

`collectAndSolve` implements the most simple type checking scenario without any customization. For a given parse tree
`pt`:

  - Create a Collector and use it to create a TModel by applying `collect` to parse tree `pt`.

  - Create a Solver and solve the constraints in that TModel.

  - Return the extended TModel.

## getUseDef

``` rascal
rel[loc, loc] getUseDef(TModel tm)
```

Get all use-def relations in a given TModel. This may be used in an IDE for creating hyperlinks between use locations
and definitions.

## getVocabulary

``` rascal
set[str] getVocabulary(TModel tm)
```

Get all defined names in a given TModel. This may be used in an IDE for text completion.

## getFacts

``` rascal
map[loc, AType] getFacts(TModel tm)
```

Get all the locations and their type in a given TModel.

## getMessages

``` rascal
list[Message] getMessages(TModel tm)
```

Get all the messages in a TModel (as added by the Solver).

# Examples of Typecheckers

**Synopsis.**

Examples of type checkers built with TypePal.

**Description.**

TypePal is used in a new type checker for the Rascal meta-programming language and also in type checkers for half a
dozen domain-specific languages created by <http://swat.engineering> in the domains finance, forensics and privacy.

To get you started more quickly, we give below a list of complete TypePal-based type checkers ranging from very simple
(intended only to illustrate specific TypePal features) to type checkers for FeatherweightJava and the complete Pascal
programming language. For each example we give a description, the most distinctive TypePal features that are used, and
its source at GitHub. Each example has the same structure:

  - `Syntax.rsc` the syntax of the example language.

  - `Checker.rsc` the type checker for the language.

  - `Test.rsc` functions to call the type checker and test framework.

  - `tests.ttl` test cases for the type checker.

  - `examples` (optionally) a directory with example.

## Calc

|                 |                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| **What**        | The pocket calculator language Calc; we already covered it [???](#A%20simple%20pocket%20calculator%20language) |
| **Illustrates** | fact, define, use, requireEqual, calculate, getType, report                                                    |
| **Source**      | <https://github.com/cwi-swat/typepal/tree/master/src/examples/calc>                                            |

## Pico

|                 |                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------- |
| **What**        | Toy language with declared variables in single scope, assignment, if and while statement |
| **Illustrates** | fact, define, use, enterScope, leaveScope, requireEqual, calculate, getType, report      |
| **Source**      | <https://github.com/cwi-swat/typepal/tree/master/src/examples/pico>                      |

## QL

|                 |                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------- |
| **What**        | A questionnaire language, for describing forms with text entry fields and computed values |
| **Illustrates** | fact, define, use, requireEqual, requireTrue, calculate, getType, report                  |
| **Source**      | <https://github.com/cwi-swat/typepal/tree/master/src/examples/ql>                         |

## Fun

|                 |                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------ |
| **What**        | Functional language with explicit types, function declarations and calls, let and if expressions |
| **Illustrates** | fact, define, use, enterScope, leaveScope, requireEqual, calculate, getType, report              |
| **Source**      | <https://github.com/cwi-swat/typepal/tree/master/src/examples/fun>                               |

## ModFun

|                 |                                                                       |
| --------------- | --------------------------------------------------------------------- |
| **What**        | Extension of [Fun](#_fun) with modules                                |
| **Illustrates** | PathRole, addPathToDef                                                |
| **Source**      | <https://github.com/cwi-swat/typepal/tree/master/src/examples/modfun> |

## Struct

|                 |                                                                       |
| --------------- | --------------------------------------------------------------------- |
| **What**        | Simple named records                                                  |
| **Illustrates** | useViaType, TypePalConfig, getTypeNamesAndRole                        |
| **Source**      | <https://github.com/cwi-swat/typepal/tree/master/src/examples/struct> |

## Aliases

|                 |                                                                        |
| --------------- | ---------------------------------------------------------------------- |
| **What**        | [Struct](#_struct) extended with type aliases                          |
| **Illustrates** | useViaType, TypePalConfig, getTypeNamesAndRole                         |
| **Source**      | <https://github.com/cwi-swat/typepal/tree/master/src/examples/aliases> |

## StaticFields

|                 |                                                                             |
| --------------- | --------------------------------------------------------------------------- |
| **What**        | [Struct](#_struct) extended with fields on non-record type                  |
| **Illustrates** | useViaType, TypePalConfig, getTypeNamesAndRole, getTypeInNamelessType       |
| **Source**      | <https://github.com/cwi-swat/typepal/tree/master/src/examples/staticFields> |

## StructParameters

|                 |                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------ |
| **What**        | [Struct](#_struct) with parameterized records                                                    |
| **Illustrates** | useViaType, TypePalConfig, getTypeNamesAndRole, getTypeInNamelessType, instantiateTypeParameters |
| **Source**      | <https://github.com/cwi-swat/typepal/tree/master/src/examples/structParameters>                  |

## SmallOO

|                 |                                                                        |
| --------------- | ---------------------------------------------------------------------- |
| **What**        | Small OO language without inheritance                                  |
| **Illustrates** | useViaType, TypePalConfig, getTypeNamesAndRole                         |
| **Source**      | <https://github.com/cwi-swat/typepal/tree/master/src/examples/smallOO> |

## FWJava

|                 |                                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **What**        | FeatherWeight Java, a minimal, Java-like, language with inheritance and constructors                                        |
| **Illustrates** | useViaType, addPathToDef, isSubType, TypePalConfig, getTypeNamesAndRole, mayOverload, preSolver, setScopeInfo, getScopeInfo |
| **Source**      | <https://github.com/cwi-swat/typepal/tree/master/src/examples/fwjava>                                                       |

## Pascal

|                 |                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------- |
| **What**        | The Pascal language (Second Edition, 1978)                                                                  |
| **Illustrates** | useViaType, addPathToType, PathRole, isSubType, TypePalConfig, preCollectInitialization getTypeNamesAndRole |
| **Source**      | <https://github.com/cwi-swat/typepal/tree/master/src/examples/pascal>                                       |

## UntypedFun

|                 |                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **What**        | Functional language with implicit (inferred) types, function declarations and calls, let and if expressions                          |
| **Illustrates** | fact, define, use, enterScope, leaveScope, requireEqual, calculate, getType, report, newTypeVar, calculateEager, requireUnify, unify |
| **Source**      | <https://github.com/cwi-swat/typepal/tree/master/src/examples/untypedFun>                                                            |
