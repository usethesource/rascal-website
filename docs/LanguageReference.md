---
sidebar_position: 5
title: Language Reference
slug: /Rascal
---

**Synopsis.**

Reference manual for the Rascal meta-programming language.

**Description.**

Here we describe *all* features of the Rascal language in detail, for reference purposes.

  - [Declarations](#declarations): The entities that can be declared in Rascal programs.

  - [Patterns](#patterns): Patterns are a notation for pattern matching used to detect if a value has a certain
    shape,.

  - [Expressions](#expressions): The expressions available in Rascal.

  - [Statements](#statements): All Rascal statements.

You can find more (accessible) information related to Rascal here:

  - [Why Rascal](/docs/WhyRascal): gives the motivation for the Rascal language and describes various usage scenarios.

  - [Getting Started](/docs/GettingStarted) describes how to download, install and start Rascal.

  - [Getting Help](/docs/GettingHelp) shows how to use the help facilties and search the documentation. See [Further
    Reading](/docs/GettingHelp#FurtherReading) for a reading guide.

  - Library functies are described in [Rascal Libraries](/docs/Libraries).

  - We do not maintain a list of frequently asked questions (faq) but use
    [StackOverflow](http://stackoverflow.com/questions/tagged/rascal) instead.

<!-- end list -->

  - We show examples for each Rascal language construct described here.

  - You can find many simple code examples in [Recipes](/docs/Recipes).

  - The [Rascal Libraries](/docs/Libraries) contain examples for most functions.

<!-- end list -->

  - Rascal has everything you need for any kind of (meta-)program you want to write. See [Why Rascal](/docs/WhyRascal).

<!-- end list -->

  - Rascal is a procedural/functional language with immutable data. Do not confuse this with object-oriented
    programming.

  - Rascal allows you to write highly imperative code, but it has declarative constructs that lead to shorter and more
    readable code.

## Declarations

**Synopsis.**

The entities that can be declared in Rascal programs.

**Description.**

The following concepts are relevant for declarations:

  - [Module Declaration](#module-declaration): Declare a module.

  - [Import](#import): Declare the import a module.

  - [Program](#program): A Rascal program consists of a number of [Module
    Declaration](#module-declaration)s.

  - [StaticTyping](#staticTyping): The static type system of Rascal.
    
      - [Reified Types](#reifiedtypes): Reified types are types that can be used as values.
    
      - [Type Constraints](#typeconstraints): Type constraints restrict the acceptable type for parameters.
    
      - [Type Parameters](#typeparameters): Type parameters enable parameterized types.

  - [Algebraic Data Type](#ADT): Define a user-defined type (Algebraic Data Type).

  - [Variable Declaration](#variable): Declare a variable.

  - [Function Declaration](#function): Declare a function.

  - [Syntax Definition](#definition): Syntax Definitions allow the definition of parsers for
    programming languages, domain-specific languages and data formats.
    
      - [Action](#action): Actions are functions that are called when parse trees are constructed
        (right after parsing).
    
      - [Ambiguity Detection](#ambiguityDetection): Ambiguity detection helps to find ambiguities in
        syntax definitions.
    
      - [Ambiguity Diagnosis](#ambiguityDiagnosis): Ambiguity diagnosis suggests changes to syntax
        definitions to make them non-ambiguous.
    
      - [Disambiguation](#disambiguation):
    
      - [Parse Trees](#parseTrees): An algebraic data-type for parse trees; produced by all parsers
        generated from syntax definitions.
    
      - [Symbol](#symbol): The symbols that can occur in a syntax definition.

  - [Alias Declaration](#alias): Declare an alias for a type.

  - [Annotation Declaration](#annotation):

  - [Tag Declaration](#tag): Tag declarations are not implemented (yet).

### Module Declaration

**Synopsis.**

Declare a module.

**Syntax.**

``` rascal
module Name
Imports;
Declaration1;
...
Declarationn;
```

**Description.**

A module declaration consists of:

  - A module name.

  - Zero or more imports;

  - Zero or more declarations.

The module name *Name* will be used when the current module is imported in another module. A module name is in general a
qualified name of the form:

``` rascal
Name1::_Name2:: ... ::_Namen
```

which corresponds to a path relative to the root of the current workspace.

The constituents of a module are shown in the figure below.

![Module Parts](/images/module-parts.png)

An [Import](#import) declares other modules that are used by the current module. Following imports, a
module may contain declarations (in arbitrary order, but a [Syntax Definition](#definition) can occur
directly following the imports) for:

  - [Syntax Definition](#definition)

  - [Variable Declaration](#variable)

  - [Function Declaration](#function)

  - [Algebraic Data Type](#ADT)

  - [Alias Declaration](#alias)

  - [Annotation Declaration](#annotation)

  - [Tag Declaration](#tag)

Each declaration may contain a `private` or `public` keyword that determines the *visibility* of the declared entity.

The entities that are *visible inside* a module are

  - The private or public entities declared in the module itself.

  - The public entities declared in any imported module.

The only entities that are *visible outside* the module, are the public entities declared in the module itself. If
different imported modules declare the same visible name, it can be disambiguated by explicitly qualifying it with its
module name:

``` rascal
Module :: Name
```

Each module resides in a separate file with extension `.rsc`.

**Examples.**

Here is the `Hello` module:

``` rascal
module demo::basic::Hello

import IO;

void hello() {
   println("Hello world, this is my first Rascal program");
}
```

It defines a module with the name `demo::basic::Hello` and imports the [IO](/docs/Libraries#io) library. Finally, it
declares the `hello` function.

The actual source of this module can be found in `library/demo/basic/Hello.rsc` in the Rascal sources.

More ways to write this example are discussed in the [Hello](/docs/Recipes#Hello) example in [Recipes](/docs/Recipes).

### Import

**Synopsis.**

Declare the import a module.

**Syntax.**

`import QualifiedName;`

**Description.**

An import has as effect that all public entities declared in module *QualifiedName* are made available to the importing
module. Circular imports are allowed. All publicly visible entities in the imported module become available in the
importing module.

Import is *non-transitive*, i.e., the visible entities from an imported module are not re-exported by the importing
module.

**Examples.**

Here, is how to import the [IO](/docs/Libraries#io) library:

``` rascal-shell
import IO;
println("IO library was imported.");
```

### Program

**Synopsis.**

A Rascal program consists of a number of [Module Declaration](#module-declaration)s.

**Description.**

A Rascal program consists of a number of [Module Declaration](#module-declaration)s, each stored in a separate file
with extension `.rsc`.

### StaticTyping

**Synopsis.**

The static type system of Rascal.

**Description.**

Rascal is based on static typing, this means that as many errors and inconsistencies as possible are spotted before the
program is executed.

### The Type Lattice

The types are ordered in a so-called *type lattice* shown in the following figure.

![Type Lattice](/images/type-lattice.png)

The arrows describe a *subtype-of* relation between types. The type `void` is the *smallest* type and is included in all
other types and the type `value` is the *largest* type that includes all other types. We also see that `rel` is a
subtype of `set` and that each ADT is a subtype of `node`. A special role is played by the datatype `Tree` that is the
generic type of syntax trees. Syntax trees for specific languages are all subtypes of `Tree`. As a result, syntax trees
can be addressed at two levels:

  - in a generic fashion as `Tree` and,

  - in a specific fashion as a more precisely typed syntax tree. Finally, each `alias` is structurally equivalent to one
    or more specific other types.

The fact that the types are ordered in a lattice makes it possible to define a **Least Upper Bound** (lub) on types.
Given two types *T*<sub>1</sub> and *T*<sub>2</sub>, `lub(T1, T2)` is defined as the nearest common super type of
*T*<sub>1</sub> and *T*<sub>2</sub> in the type lattice.

### Advanced Features

The Rascal type system has various advanced features that are described separately:

  - Types may be be *parameterized* resulting in very general and reusable types, see \[Type Parameters\].

  - Declarations of \[Function\]s and \[AlgebraicDataType\]s may be parameterized and \[Type Constraints\] can be used
    to define constraints on the actual type to be used.

  - The formal arguments of functions are bound to *values* but in exceptional cases a function may need a type as
    argument value, [Reified Types](#reifiedtypes) make this possible.

**Examples.**

Here are some simple examples of correct and incorrect typing:

We can assign an integer value to an integer variable:

``` rascal-shell
int i = 3;
```

But assigning a string value gives an error:

``` rascal-shell
int j = "abc";
```

The `num` type accepts integer and real values:

``` rascal-shell
num n = i;
n = 3.14;
```

A variable of type `value` accepts all possible values:

``` rascal-shell
value v = true;
v = "abc";
v = [1, 2, 3];
```

### Reified Types

**Synopsis.**

Reified types are types that can be used as values.

**Syntax.**

`# Name`

**Types.**

`type`

**Description.**

Usually one declares functions that have arguments that have a type that corresponds to one of the many forms of values
in Rascal. In exceptional circumstances it is desirable to define functions that have a type itself as argument.

To solve this problem in a more general manner something special has to be done. Types are not values and without an
additional mechanism they cannot be passed as arguments to functions. To achieve this effect we introduce reified types
that are denoted by the type `type`. In other words, reified types make it possible to use types as values.

**Examples.**

The prototypical example is a parse function: how to write a type safe parse function that expresses the type of the
result we expect? Suppose we want to parse a language that has the non-terminals `EXP`, `STAT` and `PROGRAM`. A first,
naive, solution introduces a parse function for each non-terminal:

``` rascal
EXP parseEXP(str s){ ... }
STAT parsePROGRAM(str s) { ... }
PROGRAM parsePROGRAM(str s) { ... }
```

Unfortunately this solution does not scale well to large languages with many non-terminals and it breaks down completely
when we do not know the non-terminals before hand.

Now we can write (see [Type Parameters](#typeparameters) for a description of the `&T` notation):

``` rascal
&T parse(type[&T] start, str s) { ... }
```

and use the parse by giving it a type as argument:

``` rascal
parse(#eXP, "1+3");
```

### Type Constraints

**Synopsis.**

Type constraints restrict the acceptable type for parameters.

**Syntax.**

`& Name <: Type`

**Description.**

Constraints can be imposed on the actual types to which a type parameter may be bound. This is expressed by a subtype
constraint which expresses that actual types bound to *Name* should be a subtype of *Type*.

**Examples.**

Here is the definition of the absolute value function `abs` from the [Number](#number) library:

``` rascal
public &T <: num abs(&T <: num N)
{
    return N >= 0 ? N : -N;
}
```

The argument `N` is constrained to be at most of type `num`.

``` rascal-shell
import util::Math;
abs(-3);
abs(-3.5);
```

Here is an example from the [Node](#node) library:

``` rascal
&T <: node setAnnotations(&T <: node x, map[str, value] annotations);
```

(we don’t give the body of this function since it has been implemented in Java). `setAnnotations` takes a value of any
type that is at most `node` and adds annotations to it. This makes it possible to set annotations on any [Algebraic Data
Type](#ADT).

``` rascal-shell
import Node;
nd = "f"(10, "abc");
```

First we apply `setAnnotations` to a node value:

``` rascal-shell
setAnnotations(nd, ("color" : "red", "size" : "large"));
```

Next, we introduce a new data type `Suite`:

``` rascal-shell
data Suite = hearts() | diamonds() | clubs() | spades();
st = diamonds();
```

And apply `setAnnotations` to a value of type `Suite`:

``` rascal-shell
setAnnotations(st, ("player" : "Hossein", "gain" : "120"));
```

### Type Parameters

**Synopsis.**

Type parameters enable parameterized types.

**Syntax.**

`& Name`

**Description.**

A type parameter may occur at every syntactic position where a type is required and turns an ordinary type into a
parameterized type. Parameterized types are used to define polymorphic functions and data types, i.e., functions and
data types that are applicable for more than one type. Type parameters are bound to an actual type when the function or
data type is applied and further uses of the type parameter are consistently replaced by the actual type.

The following syntactic positions are *binding occurrences* for type parameters:

  - Type parameters in the type declaration of a function are bound to the types of the actual parameters in the call of
    that function. Type parameters that occur in the body of the function are replaced by the corresponding actual
    types.

  - The left-hand side of an alias. The type parameters are bound when the alias is used and occurrences of type
    parameters in the right hand side are replaced by corresponding actual types.

  - The alternatives of a data type. Binding and replacement is identical to that of function declarations.

All other occurrences of type parameters are *using occurrences*. The following rules apply:

  - When the same type parameter is used at different binding occurrences it should be bound to the same actual type.

  - For every using occurrence of a type parameter there should be a binding occurrence of a type parameter with the
    same name.

**Examples.**

Let's consider a small example of the use of function parameters in a function declaration, see [Function
Declaration](#function) for more details on function declarations. The following function `swap` returns a
tuple in which its arguments are swapped and can be applied to arbitrary values in a type safe manner:

``` rascal-shell
tuple[&B, &A] swap(&A a, &B b) { return <b, a>; }
swap(1,2);
swap("abc", 3);
```

Observe that the type parameters that are used in the return type should be defined in the declarations of the formal
parameter of the function.

An [Alias](#alias) declaration may also be parameterized. So we can generalize graphs as follows:

``` rascal
alias Graph[&Node] = rel[&Node, &Node];
Graph[int] GI = {<1,2>, <3,4>, <4,1>};
Graph[str] GS = {<"a", "b">, <"c","d">, <"d", "a">};
```

The type parameters that are used in the type in the right part of the alias declaration should be defined in the left
part of the alias definition.

### Algebraic Data Type {#ADT}

**Synopsis.**

Define a user-defined type (Algebraic Data Type).

**Description.**

In ordinary programming languages record types or classes exist to introduce a new type name for a collection of
related, named, values and to provide access to the elements of such a collection through their name.

In Rascal, algebraic data types provide this facility. They have to be declared, and then values can be declared using
calls to the declared constructor functions, see [Constructor](#constructor).

**Examples.**

The following data declaration defines the datatype `Bool` that contains various constants (`tt()` and `ff()` and
constructor functions `conj` and `disj`.

``` rascal-shell
data Bool = tt() | ff() | conj(Bool L, Bool R)  | disj(Bool L, Bool R);
```

terms of type `Bool` can be constructed using the defined constructors:

``` rascal-shell
conj(tt(),ff());
```

### Variable Declaration

**Synopsis.**

Declare a variable.

  - `Type Name = Exp ;`

  - `Type Name;`

|        |           |
| ------ | --------- |
| `Type` | `Exp`     |
| `Type` | `<: Type` |

Types

**Description.**

The effect of a variable declaration is to introduce a new variable *Name* and to assign the value of expression *Exp*
to *Name*. A mention of *Name* later on in the same scope will be replaced by this value, provided that *Name*\\'s value
has not been changed by an intermediate assignment.

When a variable is declared, it has as scope the nearest enclosing block, or the module when declared at the module
level.

The following rules apply:

  - Double declarations in the same scope are not allowed.

  - The type of *Exp* should be compatible with *Type*, i.e., it should be a subtype of *Type*.

As a convenience, also declarations without an initialization expression are permitted inside functions (but not at the
module level) and have the form

``` rascal
Type Name;
```

and only introduce the variable *Name*.

Rascal provides local type inference, which allows the implicit declaration of variables that are used locally in
functions. The following rules apply:

  - An implicitly declared variable is declared at the level of the current scope, this may the whole function body or a
    block nested in it.

  - An implicitly declared variable gets as type the type of the first value that is assignment to it.

  - If a variable is implicitly declared in different execution path of a function, all these implicit declarations
    should result in the same type.

  - All uses of an implicitly declared variable must be compatible with its implicit type.

**Examples.**

Two explicit variable declarations:

``` rascal-shell
int max = 100;
min = 0;
```

An implicit variable declaration

``` rascal-shell
day = {<"mon", 1>, <"tue", 2>, <"wed",3>,
       <"thu", 4>, <"fri", 5>, <"sat",6>, <"sun",7>};
```

Variable declaration and assignment leading to type error

``` rascal-shell
int month = 12;
month ="December";
```

  - Local type inference for variables always uses the smallest possible scope for a variable; this implies that a
    variable introduced in an inner scope is not available outside that scope. Here is how things can go wrong:

<!-- end list -->

``` rascal-shell
if( 4 > 3){ x = "abc"; } else { x = "def";}
x;
```

### Function Declaration

**Synopsis.**

Declare a function.

  - `Modifiers Type Name( Type1 Var1, …​, Typen Varn ) Body`

  - `Modifiers Type Name( Type1 Var1, …​, Typen Varn Type0 Name0…​ ) Body`

  - `Modifiers Type Name( Pattern1, …​, Patternn) Body`

  - `Modifiers Type Name( Pattern1, …​, Patternn, Type0 Name0…​) Body`

where `Body` is one of:

  - `{ Statements }`

  - `throws Exception1, Exception2, …​ { Statements }`

  - `= Expression;`

and where `Modifiers` may be:

  - `("public" | "private")? ("java" | "test" | "default")?`

### Variant 1

**Description.**

A function declaration introduces a new function with name *name*, typed formal parameters `Type1 Var1`, a return type
*Type* and a *Statement* that forms the function body. The type of *Statement* should be equal to *Type*.

The formal parameters may be used in *Statement* and get their value when function *Name* is invoked.

### Variant 2

A function may have a variable list of arguments, this has as syntax variant 2 given above.

The last parameter of a function may be followed by `…​` and this has as effect that all remaining actual parameters
that occur in a call to this function are collected as list value of the last formal parameter. Inside the function
body, the type of this parameter will therefore be `list[Type0]`.

### Variant 3 and 4

All formal parameter of a function can be [Patterns](#patterns). There are some restrictions however:

  - A Pattern in formal parameter positions may not refer to variables in the scope.

  - Patterns in formal parameter positions may not introduce fresh variables without an explicit type.

  - The last parameter, if followed by `…​` can only be a normal typed parameters, not just any pattern.

### Body types

  - Functions with list of statements as bodies must eventually use `return` or `fail` on every control flow path.

  - The declarations to `throw` an exception are documentation only

  - Single expressions can be bodies of functions, the return value is the value of the expression.

### Parameterized types in function declaration

The types that occur in function declarations may also contain [Type Parameters](#typeparameters). In this
way functions can be defined for arbitrary types. The type variable is bound (statically) at by the types of the
parameters given at location of the call. The result type must be used at least once in any of the parameters.

### Overloading

Function definitions may be overloaded, i.e. a function with the same name may be defined twice and a function may
redefine a constructor of an [Algebraic Data Type](#ADT) or a [Syntax
Definition](#definition).

There are some restrictions however:

  - Overloaded alternatives for the same function name but with different patterns must return the same type.

  - Overloaded alternatives for the same function name must have mutually exclusive patterns, unless one alternative is
    labeled `default` and the other is not. The patterns of formal parameters are mutually exclusive if for at least one
    parameter position:
    
      - They range over incomparable types, as in `int f(int a)` and `int f(real a)`, or
    
      - They range over different alternatives of an [Algebraic Data Type](#ADT), as in `int
        f(and(Bool a, Bool b))` and `int f(or(Bool a, Bool b))`
    
      - They range over different alternatives of a [Syntax Definition](#definition)
    
      - And note that deep matches using the `/` alternative are considered to be of type `value` and therefore overlap
        with all other patterns.

  - Overlapping patterns are allowed if the one alternative has the `default` modified while the other does not.

  - If a function is fallible, it uses the `fail` statement to back-track to a different alternative, then there must be
    a `default` alternative defined which can handle the general case. An \[AlgebraicDataType\] or a
    \[syntax-definition\] with the same name and return type counts as a `default` alternative.

  - `default` functions may not fail.

### Modifiers

The *Modifiers* affect *visibility* and *special behaviour* of functions:

  - *Visibility*: `private` declares that a function is only visible in the current module. `public` declares that it is
    visible outside the module as well. When visibility is not specified, `private` is assumed.

  - *Special Behaviour*:
    
      - `java` declares that the body of the function is implemented in Java. The function should have a `javaClass`
        annotation that determines where the Java implementation can be found.
    
      - `test` declares that this is a test function. A test function is a boolean function (currently) without
        arguments. It can be called as any other function. However, it can also be called automatically by the unit test
        framework, by typing `:test` at the command line, see [Help](#help).
    
      - `default` declares an alternative for an overloaded function that will only be tried after all non-default
        alternatives have been tried. Note that [Algebraic Data Type](#ADT)s and [Syntax
        Definition](#definition)s *implicitly* define `default` functions that may be overloaded by
        normal [Function Declaration](#function)s.

**Examples.**

Declare a function

``` rascal-shell
rel[int, int] invert(rel[int,int] R){
   return {<Y, X> | <int X, int Y> <- R };
}
```

Call it

``` rascal-shell
invert({<1,10>, <2,20>});
```

In the following example we illustrate the use of type variables in function declarations. Declare an inversion function
that is applicable to any binary relation:

``` rascal-shell
rel[&T2, &T1] invert2(rel[&T1,&T2] R){
   return {<Y, X> | <&T1 X, &T2 Y> <- R };
}
```

Now apply it to relations with different types:

``` rascal-shell
invert2({<1,10>, <2,20>});
invert2({<"mon", 1>, <"tue", 2>});
```

As another example declare a function that can be used to swap the elements of pairs of arbitrary types (also see [Tuple
Subscription](#subscription)):

``` rascal-shell
tuple[&T2, &T1] swap(tuple[&T1, &T2] TP) { return <TP[1], TP[0]>;}
swap(<1, 2>);
swap(<"wed", 3>);
```

Here we use an overloaded definition with incomparable patterns:

``` rascal-shell
int f(int i) = 1;
int f(real r) = 2;
f(0);
f(0.0);
```

And we may use `default`, as in:

``` rascal-shell
int f(0) = 1;
default int f(int n) = n * f(n - 1);
f(0);
f(2);
```

In combination with an [Algebraic Data Type](#ADT), which defines `default` functions
implicitly for every alternative, we can define canonicalization functions. The same holds for [Syntax
Definition](#definition)s, see [Action](#action)s.

**Pitfalls.**

In case of overlapping function definitions, the order in which the functions are tried is left undefined. The only
exceptions are functions marked `default`, those will be tried after non-`default` functions.

### Syntax Definition

**Synopsis.**

Syntax Definitions allow the definition of parsers for programming languages, domain-specific languages and data
formats.

  - `Start syntax Nonterminal = Alternatives;`

  - `lexical Nonterminal = Alternatives;`

  - `layout Nonterminal = Alternatives;`

  - `keyword Nonterminal = Alternatives;`

where *Start* is either `start` or nothing, and *Alternatives* are one of:

  - `Tags Associativity Symbols`

  - `Tags Associativity Name : Symbols`

  - `Associativity ( Alternatives )`

  - `Alternatives1 | Alternatives2`

  - `Alternatives1 > Alternatives2`

where *Associativity* is nothing, or one of `assoc`, `left`, `right` or `non-assoc`, and *Tags* are a possibly empty
list of tags.

**Description.**

Rascal supports full context-free grammars for syntax definition. It generates scannerless parsers from these
definitions. These parsers produce [Parse Trees](#parseTrees) that can be further processed by Rascal
using [Concrete Syntax](#concretesyntax) fragments in [Patterns](#patterns) and
[Expressions](#expressions), or they can be *imploded* to [Algebraic Data
Type](#ADT)s.

There are four kinds of non-terminals that can be defined with slightly different characteristics.

  - *Syntax* non-terminals are general context-free non-terminals. This mean left-recursion, right-recursion, any of the
    regular expression [Symbol](#symbol)s and all kinds of
    [Disambiguation](#disambiguation) can be used to define it. It is important to note that in between
    the *Symbols* that define a syntax non-terminal the locally defined layout non-terminal will be interleaved. For
    example, if you define `layout ML = [\ ]*;` and `syntax A = "a" "a"`, Rascal will *modify* the definition of A to
    `syntax A = "a" ML "a";` before generating a parser.

  - *Lexical* non-terminals are just like *syntax* non-terminals, very much like *syntax* non-terminals. However, the
    definition of a lexical is *not* modified with interleaved layout non-terminals. And, the structure of lexicals is
    not traversed by the [Visit](#visit) statement and equality is checked between lexicals by checking the
    characters (not its structure) for equality.

  - *Layout* non-terminals are just like *syntax* non-terminals as well. However, they are used to preprocess all
    *syntax* definitions in the same module scope (see above).

  - *Keyword* non-terminals are *not* like *syntax* non-terminals. These only allow definition of enumeration of literal
    symbols and single character classes. Keyword non-terminals play an important role in the semantics of
    [Disambiguation](#disambiguation) where some disambiguation constructs require finite, non-empty
    enumeration of strings. The prime example is the definition of reserved keywords.

Each alternative of a syntax definition is defined by a list of [Symbol](#symbol)s. Each of the
[Symbol](#symbol)s can be labeled or not. The alternative of a defined syntax type may be labeled or
not as well. With the label additional operations are activated on the corresponding parse trees:

  - The `is` operator is defined for labeled alternatives (see [Operators](#operators)).

  - The `has` operator is defined for labeled [Symbol](#symbol)s in the right-hand side (see
    [Operators](#operators)).

  - [Action](#action) functions can be written to override the construction of a parse tree, using the
    label of an alternative as the function name

  - \[implode\] uses labeled alternatives to map to an [Algebraic Data Type](#ADT)

Alternatives can be combined in a single [Syntax Definition](#definition) using the `|`, `>` and
associativity combinators. The latter two represent [Disambiguation](#disambiguation) constructs that
you should read more about. The `|` is a short-hand for not having to repeat `syntax A =` for every alternative of `A`.

Alternatives can be named or not. The names are essential only if:

  - you need to [implode](/docs/Libraries#implode) [Parse Trees](#parseTrees)

  - you need to use the `is` expression, as in `myStatement is ifThenElse` instead of using concrete pattern matching.

  - you want to write [Action](#action)s that triggers on the construction of the alternative.

However, it is generally a good idea to name your rules even if you do not need them. Note that a name may be reused for
different alternatives for a single non-terminal, provided that the lists of symbols for these "overloaded" alternatives
use *different non-terminal symbols*. This implies that alternatives for lexicals generally do not use overloaded names
because they are often defined only by regular expressions over terminal [Symbol](#symbol)s (literals
and character classes).

The *start* modifier identifies the start of a grammar. The effect of a start modifier is that Rascal will generate an
extra syntax definition before generating a parser that allows layout to before and after the start non-terminal. For
example:

``` rascal
layout L = [\ ]*; start Program = Statement*;`
```

will produce `syntax start[Program] = L Program top L;`. Note that the `start[Program]` type is now available in your
program, and [Parse Trees](#parseTrees) assigned to variable of that type will allow access to the
*top* field.

**Examples.**

The following example makes use of practically all of the [Syntax Definition](#definition) features,
except parse actions.

``` rascal
// layout is lists of whitespace characters
layout MyLayout = [\t\n\ \r\f]*;

// identifiers are characters of lowercase alphabet letters,
// not immediately preceded or followed by those (longest match)
// and not any of the reserved keywords
lexical Identifier = [a-z] !<< [a-z]+ !>> [a-z] \ MyKeywords;

// this defines the reserved keywords used in the definition of Identifier
keyword MyKeywords = "if" | "then" | "else" | "fi";

// here is a recursive definition of expressions
// using priority and associativity groups.
syntax Expression
  = id: Identifier id
  | null: "null"
  | left multi: Expression l "*" Expression r
  > left ( add: Expression l "+" Expression r
         | sub: Expression l "-" Expression r
         )
  | bracket "(" Expression ")"
  ;
```

  - Modular and compositional.

  - No grammar normalization or grammar factoring necessary.

  - Generate a parser for any context-free grammar.

  - Generate parsers are really fast (for general parsers).

  - Powerful disambiguation constructs for common programming language disambiguation patterns.

  - Data-dependent (context-sensitive) disambiguation via arbitrary functions.

  - Embedding of concrete syntax fragments in Rascal programs

  - [Syntax Definition](#definition)s follow the syntax and semantics of [Algebraic Data
    Type](#ADT)s quite closely.

<!-- end list -->

  - Grammars may be ambiguous, so read about [Disambiguation](#disambiguation), [Ambiguity
    Detection](#ambiguityDetection) and [Ambiguity Diagnosis](#ambiguityDiagnosis).

  - Static grammar checker is not implemented yet.

### Action

**Synopsis.**

Actions are functions that are called when parse trees are constructed (right after parsing).

**Description.**

A so-called [Action](#action) is a normal rascal [Function Declaration](#function) that
overloads a [Syntax Definition](#definition). A [Syntax Definition](#definition),
very similar to [Algebraic Data Type](#ADT) definitions, defines a constructor for a parse
tree node. This constructor is the default function, and when it is overloaded by a non-default function this overloaded
function will be tried first. You can overload any labeled [Syntax Definition](#definition) using the
name of an alternative.

For example:

``` rascal
syntax A = a: B  C;

public A a(B b, C c) {
  return f(b, c);
}
```

In this example [Action](#action) function the a is replaced by whatever A the `f` function returns.

[Action](#action)s are executed every time a parse tree is constructed:

  - Right after parsing.

  - On the way back from a visit statement.

  - When a [Concrete Syntax](#concretesyntax) expression is executed.

  - When [Parse Trees](#parseTrees) are constructed "manually".

They can be used as a [Disambiguation](#disambiguation) method, using the `filter` statement, as in:

``` rascal
syntax E = id: Id i;
set[Id] types = {};

public E id(Id i) {
  if (i in types)
    filter; // remove this parse tree and all its parents up to the first amb node
  else
    fail; // just build the parse tree "E = id: Id i", by defaulting to the constructor
}
```

### Ambiguity Detection

**Synopsis.**

Ambiguity detection helps to find ambiguities in syntax definitions.

**Description.**

AmbiDexter is a tool that analyzes [Syntax Definition](#definition)s, including their
[Disambiguation](#disambiguation)s, to try and determine which ambiguities it contains. Static
detection of ambiguity is not decidable, nevertheless AmbiDexter does a fine job at finding them.

  - AmbiDexter can find ambiguity for you before testing the parser, after which you can use \[AmbiguityDiagnosis\] to
    explain it.

<!-- end list -->

  - AmbiDexter is now a separate command-line tool which still needs integration

  - AmbiDexter is not a silver bullet. It has a time-limit to stop after having searcher only so much of a language.
    After the time limit has expired, your \[syntax-definition\] may still be ambiguous.

### Ambiguity Diagnosis

**Synopsis.**

Ambiguity diagnosis suggests changes to syntax definitions to make them non-ambiguous.

**Description.**

The `Ambiguity` library, a.k.a. DrAmbiguity, contains a diagnosis tool that can help you find the causes of ambiguous
parse trees and possible [Disambiguation](#disambiguation)s to solve them in a [Syntax
Definition](#definition). DrAmbiguity is a library that processes any parse forest produced by a
parser generated from Rascal’s [Syntax Definition](#definition)s. Please read
[Disambiguation](#disambiguation) first.

**Examples.**

``` rascal
import analysis::grammars::Ambiguity;
diagnose(t); // for any t of which you know it contains an ambiguity
```

  - DrAmbiguity automatically proposes [Disambiguation](#disambiguation)s that will work

<!-- end list -->

  - DrAmbiguity does not scale to large parse trees, so please first make your example smaller.

  - DrAmbiguity proposes several \[Disambiguation\]s for each ambiguity, only few of which make sense from a language
    design point of view\!

  - DrAmbiguity is now only a library function, while it should be integrated into the Rascal IDE

### Disambiguation

**Synopsis.**

Disambiguation is the definition of filters on the parse trees that [Syntax Definition](#definition)s
define. There are several ways of defining [Disambiguation](#disambiguation) in Rascal.

**Description.**

There are generally three ways of removing ambiguity from parse forests that are produced by parsers generated from
[Syntax Definition](#definition)s.

  - The first way is to add disambiguation declarations to the [Syntax Definition](#definition). You
    can choose from:
    
      - [Priority Declaration](#priority)s, which can be used to define the relative priority in
        expression languages
    
      - [Associativity Declaration](#associativity)s, which can be used to define relative associativity
        between operators of expression languages
    
      - [Follow Declaration](#follow)s, which can be used to implement longest match using lookahead
    
      - [Precede Declaration](#precede)s, which can be used to implement first match using look behind
    
      - [which allow you to finite sets of strings from a \<\<Syntax Definition](#reserve-Declaration\>s) to implement
        keyword reservation

  - The second way is to add [Action](#action)s that will be triggered just after parsing and allow you
    to trim a parse forest using any information necessary.

  - The third way is use the [Visit](#visit) statement on a parse tree and implement your own filter
    post-parsing time, or any other kind of program that processes [Parse Trees](#parseTrees).

##### Associativity Declaration

**Synopsis.**

Define associativity of operators

  - `syntax Exp = Assoc Label Symbol1 Symbol2 …​`

  - `syntax Exp = Assoc ( Alt1 | Alt2 | …​ )`

  - `syntax Exp = Assoc Symbol1 Symbol2 …​`

Here *Assoc* is one of: `left`, `right`, `assoc` or `non-assoc`. See [Syntax
Definition](#definition)s on how to define alternatives and [Symbol](#symbol)s.

**Description.**

Using Associativity declarations we may disambiguate binary recursive operators.

The semantics are that an associativity modifier will instruct the parser to disallow certain productions to nest *at
particular argument positions*:

  - `left` and `assoc` will disallow productions to directly nest in their *right-most* position.

  - `right` will disallow productions to directly nest in their *left-most* position.

  - `non-assoc` will disallow productions to directly nest in either their left-most or their right-most position.

When associativity is declared for a group of productions, e.g. `left ( Alt1 | Alt 2 | Alt3)`, then each alternative
will be mutually associative to each other alternative *and itself*. If an alternative of a group defines its own local
associativity, as in `left ( right Alt1 | Alt2 | Alt3)`, then *Alt*<sub>1</sub> is right associative with respect to
itself and left associative with respect to all others in the group.

A finer point is that associativity has no effect on any other position than the left-most and right-most position (see
also [Priority Declaration](#priority)). This is to guarantee that associativity does not introduce parse
errors. The following tables explain when an assocativity declaration filters given two productions `father` and `child`
that share an associativity group.

| If \`left (Parent             | Child)\`  | Parent None: `E = "[" E "]"` | Parent Left-most: `E = E "*"` | Parent Right-most: `E = "*" E`  | Parent Both: `E = E "*" E`     |
| ----------------------------- | --------- | ---------------------------- | ----------------------------- | ------------------------------- | ------------------------------ |
| *Child None:* `E = "{" E "}"` | No filter | No filter                    | No filter                     | No filter                       | *Child Left-most:* `E = E "+"` |
| No filter                     | No filter | Filter under right           | Filter under right            | *Child Right-most:* `E = "+" E` | No filter                      |
| No filter                     | No filter | No filter                    | *Child Both:* `E = E "+" E`   | No filter                       | No filter                      |

| If \`right (Parent            | Child)\`  | Parent None: `E = "[" E "]"` | Parent Left-most: `E = E "*"` | Parent Right-most: `E = "*" E`  | Parent Both: `E = E "*" E`     |
| ----------------------------- | --------- | ---------------------------- | ----------------------------- | ------------------------------- | ------------------------------ |
| *Child None:* `E = "{" E "}"` | No filter | No filter                    | No filter                     | No filter                       | *Child Left-most:* `E = E "+"` |
| No filter                     | No filter | No filter                    | No filter                     | *Child Right-most:* `E = "+" E` | No filter                      |
| Filter under left             | No filter | Filter under left            | *Child Both:* `E = E "+" E`   | No filter                       | Filter under left              |

  - Short notation for common constructs in programming languages.

  - Removes ambiguity but can not introduce parse errors.

  - Allows the use of less non-terminals for the same expression grammar (typically only one), which makes parse trees
    simpler as well as the mapping to an abstract syntax tree more direct.

<!-- end list -->

  - Please do not assume that Rascal’s associativity declarations have the same semantics as SDF’s associativity
    declarations.

  - Use of productions that are not both left and right recursive in an associativity group, although safe, is not very
    meaningful. We would advise to use the [Priority Declaration](#priority) relation such a case. For
    example:

| Original associativity | Better written as priority |
| ---------------------- | -------------------------- |
| \`E = left ( "+" E     | E "+" E );\`               |
| `E = E "+" E > "+" E;` | \`E = right ( "+" E        |
| E "+" E );\`           | `E = "+" E > E "+" E;`     |
| \`E = left ( E "+"     | E "+" E);\`                |
| `E = E "+" > E "+" E;` | \`E = right ( E "+"        |
| E "+" E);\`            | `E = E "+" E > E "+" ;`    |

##### Follow Declaration

**Synopsis.**

A conditional [Symbol](#symbol), constraining the characters that can immediately follow a symbol in
the input source text.

  - `Symbol >> constraint`

  - `Symbol !>> constraint`

where a *constraint* is any character class, a literal or a keyword non-terminal [Symbol](#symbol).

**Description.**

Using `!>>`, the parser will not accept the *Symbol* if it is immediately followed by the *terminal* in the input
string. If the end of the symbol coincides with end-of-file, the constraint will always succeed and the symbol is
accepted.

##### Precede Declaration

**Synopsis.**

A conditional [Symbol](#symbol), constraining the characters that can immediately precede a symbol in
the input source text.

  - `constraint << Symbol`

  - `constraint !<< Symbol`

where a *constraint* is any character class, a literal or a keyword non-terminal [Symbol](#symbol).

**Description.**

Using `!<<`, the parser will not accept the *Symbol* if it is immediately preceded by the *terminal* in the input
string. If the start of the symbol coincides with start of the inout, the constraint will always succeed and the symbol
is accepted.

##### Priority Declaration

**Synopsis.**

Declare the priority of operators.

  - `syntax Exp = alt1 > alt2 > alt3` is the basic syntax for priorities.

  - `syntax Exp = alt1 | alt2 > alt3 | alt4`, where the `|` signifies groups of equal priority

  - `syntax Exp = associativity ( _alt1 | …​ ) > _alt2`, where an associativity group denotes a group of equal priority

**Description.**

Priority declarations define a partial ordering between the productions *within a single non-terminal*. The feature is
specifically designed to fit with the semantics of expression sub-languages embedded in programming languages. There
exist other mechanisms for [Disambiguation](#disambiguation), if [Priority
Declaration](#priority) does not work for you.

The semantics of a priority relation `A > B` is that B will not be nested under A in the left-most or right-most
position. Any other position of A will allow B fine. Note that the priority relation you define is transitively closed,
so if A \> B and B \> C then A \> C.

A finer point is that Rascal restricts the filtering of priority such that it is guaranteed that no parse errors occur
at the cause of a priority. The following table defines when and where Rascal forbids a direct nesting between two
productions `parent > child`, depending on at which left-most or right-most positions the parent and the child are
recursive.

| If `Parent > Child`             | Parent None: `E = "[" E "]"` | Parent Left-most: `E = E "*"` | Parent Right-most: `E = "*" E` | Parent Both: `E = E "*" E`  |
| ------------------------------- | ---------------------------- | ----------------------------- | ------------------------------ | --------------------------- |
| *Child None:* `E = "{" E "}"`   | No filter                    | No filter                     | No filter                      | No filter                   |
| *Child Left-most:* `E = E "+"`  | No filter                    | No filter                     | Filter under right             | Filter under right          |
| *Child Right-most:* `E = "+" E` | No filter                    | Filter under left             | No filter                      | Filter under left           |
| *Child Both:* `E = E "+" E`     | No filter                    | Filter under left             | Filter under right             | Filter under left and right |

**Examples.**

The following snippet uses all [Priority Declaration](#priority) features:

``` rascal
syntax Exp
  = A: Id
  | B: Number
  > C: Exp "[" Exp "]"
  | D: Exp "!"
  > E: Exp "*" Exp
  > F: Exp "+" Exp;
  | bracket G: "(" Exp ")"
  ;
```

A short explanation:

  - C and D share a group of equal priority. They are incomparable in the partial ordering. That’s fine because `1![2]`
    is not ambiguous.

  - Similarly A and B share a group; yet they are not recursive and so do not play any role in the priority ordering.

  - C and D both have higher priority then E and F, which means that E and F may not be directly nested under C or D.

  - However: E and F will be allowed under the second argument of C because it is not an outermost position. That’s fine
    because `1 [2 + 3]` is not ambiguous.

Here a number of strings for this language, with brackets to show how they will be parsed:

  - "1 + 2 \* 3" will be parsed as "1 + (2 \* 3)" because E \> F.

  - "1 + 2 \[ 3 \]" will be parsed as "1 + (2\\\[3\\\])" because C \> F.

  - "1 \* 3\!" will be parsed as "1 + (3\!)" because D \> E.

  - "1 + \[2 \* 3\]" will be parsed as "1 + (\[2 \* 3\])" because priority is only defined for outermost positions.

<!-- end list -->

  - Short notation for common expression grammars

  - Removes ambiguity but can not introduce parse errors

  - Allows the use of less non-terminals for the same expression grammar (typically only one), which makes parse trees
    simpler as well as the mapping to an abstract syntax tree more direct.

<!-- end list -->

  - Please do not assume that Rascal’s priorities have the same semantics as SDF’s priorities.

  - When a priority does not have a filtering effect, such as in `E = E "+" > E ""` it is usually better to use normal
    alternative composition: `E = E "+" | E "</emphasis>"`. There is no difference in the semantics of parsing, but the
    latter expression is more intentional.

  - You should not hide right or left recursion behind a nullable non-terminal, since the system will not filter the
    ambiguity then. Example: E = left "a"? E "\*" E \> E "" E will remain ambiguous. This should be written as: E = left
    ("a" E "\*" E | E "\*" E ) \> E "" E; (unfolding the optional such that E becomes explicitly left-most).

##### Reserve Declaration

**Synopsis.**

Reserve is a conditional [Symbol](#symbol), constraining the set of strings that a symbol may produce.

  - `Symbol \ constraint`

where a *constraint* is any character class, a literal or a keyword non-terminal [Symbol](#symbol).

### Parse Trees

**Synopsis.**

An algebraic data-type for parse trees; produced by all parsers generated from syntax definitions.

**Description.**

Below is the full definition of `Tree` and `Production` and `Symbol`. A parse tree is a nested tree structure of type
`Tree`.

  - Most internal nodes are applications (`appl`) of a `Production` to a list of children `Tree` nodes. `Production` is
    the abstract representation of a \[syntax-definition\] rule, which consists of a definition of an alternative for a
    `Symbol` by a list of `Symbols`.

  - The leaves of a parse tree are always characters (`char`), which have an integer index in the UTF8 table.

  - Some internal nodes encode ambiguity (`amb`) by pointing to a set of alternative `Tree` nodes.

The `Production` and `Symbol` types are an abstract notation for rules in [Syntax
Definition](#definition)s, while the `Tree` type is the actual notation for parse trees.

Parse trees are called parse forests when they contain `amb` nodes.

You can analyze and manipulate parse trees in three ways:

  - Directly on the `Tree` level, just like any other [Algebraic Data Type](#ADT)

  - Using [Concrete Syntax](#syntax)

  - Using [Action](#action)s

The type of a parse tree is the symbol that it’s production produces, i.e. `appl(prod(sort("A"),[],{}),[])` has type
`A`. Ambiguity nodes Each such a non-terminal type has `Tree` as its immediate super-type.

**Examples.**

``` rascal
// the following definition
syntax A = "a";
// would make the following [Test] succeed:
test a() = parse(#A,"a") ==
appl(prod(
    sort("A"),
    [lit("a")],
    {}),
  [appl(
      prod(
        lit("a"),
        [\char-class([range(97,97)])],
        {}),
      [char(97)])]);
// you see that the defined non-terminal A ends up as the production for the outermost node. As the only child is the tree for recognizing the literal a, which is defined to be a single a from the character-class [ a ].
```

``` rascal
// when we use labels in the definitions, they also end up in the trees:
// the following definition
lexical A = myA:"a" B bLabel;
lexical B = myB:"b";
// would make the following [Test] succeed:
test a() = parse(#A,"ab") == appl(prod(label("myA",lex("A")),[lit("a"),sort("bLabel",lex("B"))],{}),[appl(prod(lit("a"),[\char-class([range(97,97)]),[char(97)]),appl(prod(label("myB", lex("B"),[lit("b")],{}),[appl(prod(lit("b"),[\char-class([range(98,98)]),[char(98)])]) ]);
// here you see that the alternative name is a label around the first argument of `prod` while argument labels become labels in the list of children of a `prod`.
```

### Symbol

**Synopsis.**

The symbols that can occur in a syntax definition.

**Syntax.**

Nonterminal symbols are identifier names that *start with an uppercase letter*.

| Symbol             | Description                                                                       |
| ------------------ | --------------------------------------------------------------------------------- |
| `Symbol fieldName` | Any symbol can be labeled with a field name that *starts with a lowercase letter* |

The following literal symbols and character classes are defined:

| Symbol                | Description                     |
| --------------------- | ------------------------------- |
| `"stringliteral"`     | Literal string                  |
| `'stringliteral'`     | Case-insensitive literal string |
| `[range1 range2 …​ ]` | Character class                 |

The following operations on character classes can be composed arbitrarily:

| Class                | Description                                                           |
| -------------------- | --------------------------------------------------------------------- |
| `!Class`             | Complement of `Class` with respect to the UTF8 universe of characters |
| `Class1 - Class2`    | Difference of character classes `Class1` and `Class2`                 |
| `Class1 \|\| Class2` | Union of character classes `Class1` and `Class2`                      |
| `Class1 && Class2`   | Intersection of character classes `Class1` and `Class2`               |
| `(Class)`            | Brackets for defining application order of class operators            |

The following regular expressions can be constructed over [Symbol](#symbol)s:

| Symbol                        | Description                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------ |
| `Symbol?`                     | Optional *Symbol*                                                              |
| `Symbol+`                     | Non-empty list of \_Symbol\_s                                                  |
| `Symbol*`                     | Possibly empty list of \_Symbol\_s.                                            |
| `{Symbol1 Symbol2}+`          | Non-empty list of *Symbol<sub>1</sub>* separated by *Symbol<sub>2</sub>*       |
| `{Symbol1 Symbol2}*`          | Possibly empty list of *Symbol<sub>1</sub>* separated by *Symbol<sub>2</sub>*. |
| `(Symbol1 Symbol2 …​ )`       | Embedded sequence of symbols                                                   |
| `(Symbol1 \| Symbol2 \| …​ )` | Embedded choice of alternative symbols                                         |
| `()`                          | The anonymous non-terminal for the language with the empty string              |

Inline conditions ([Disambiguation](#disambiguation)s) can be added to symbols to constrain their
acceptability:

| Disambiguation         | Description                                                                      |
| ---------------------- | -------------------------------------------------------------------------------- |
| `Symbol _`             | *Symbol* ends at end of line or end of file                                      |
| `^Symbol`              | *Symbol* starts at begin of line                                                 |
| `Symbol @ ColumnIndex` | *Symbol* starts at certain column index.                                         |
| `Symbol1 >> Symbol2`   | *Symbol<sub>1</sub>* must be (directly) followed by *Symbol<sub>2</sub>*         |
| `Symbol1 !>> Symbol2`  | *Symbol<sub>1</sub>* must *not* be (directly) followed by *Symbol<sub>2</sub>*   |
| `Symbol1 << Symbol2`   | *Symbol<sub>2</sub>* must be (directly) preceded by *Symbol<sub>1</sub>*         |
| `Symbol1 !<< Symbol2`  | *Symbol<sub>2</sub>* must *not* be (directly) preceded by *Symbol<sub>1</sub>*   |
| `Symbol1 \ Symbol2`    | *Symbol<sub>1</sub>* must not be in the language defined by *Symbol<sub>2</sub>* |

Symbols can be composed arbitrarily.

**Types.**

Every non-terminal symbol is a type.

**Description.**

The basic symbols are the non-terminal name and the labeled non-terminal name. These refer to the names defined by
[Syntax Definition](#definition). You can use any defined non-terminal name in any other definition
(lexical in syntax, syntax in lexical, etc).

Then we have literals and character classes to define the *terminals* of a grammar. When you use a literal such as
`"begin"`, Rascal will produce a definition for it down to the character level before generating a parser: `syntax
"begin" = [b][e][g][i][n];`. This effect will be visible in the [Parse Trees](#trees) produced by
the parser. For case insensitive literals you will see a similar effect; the use of `'begin'` produces `syntax 'begin' =
[bB][eE][gG][iI][nN]`.

Character classes have the same escaping conventions as characters in a [String](#string) literal, but spaces and
newlines are meaningless and have to be escaped and the `[` and `]` brackets as well as the dash `-` need escaping. For
example, one writes `[\[ \] \ \n\-]` for a class that includes the open and close square brackets and a space, a newline
and a dash. Character classes support ranges as in `[a-zA-Z0-9]`. Please note about character classes that:

  - the operations on character classes are executed before parser generation time. You will not find explicit
    representation of these operations in \[ParseTrees\], but rather their net effect as resulting character classes.

  - Character classes are also ordered by Rascal and overlapping ranges are merged before parsers are generated.
    Equality between character classes is checked after this canonicalization.

  - Although all [Symbol](#symbol)s are type constructors, the character class operators are not
    allowed in types.

The other symbols either *generate* for you parts of the construction of a grammar, or they *constrain* the rules of the
grammar to generate a smaller set of trees as [Disambiguation](#disambiguation)s.

The *generative symbols* are referred to as the *regular symbols*. These are like named non-terminals, except that they
are defined implicitly and interpreted by the parser generator to produce a parser that can recognize a symbol
optionally, iteratively, alternatively, sequentially, etc. You also need to know this about the regular symbols:

  - In [Parse Trees](#parse-trees) you will find special nodes for the regular expression symbols that
    hide *how* these were recognized.

  - [Patterns](#patterns) using [Concrete Syntax](#concrete-syntax) have special semantics for the
    regular symbols (list matching, separator handling, ignoring layout, etc.).

  - Regular symbols are not allowed in *keyword* [Syntax Definition](#definition)s

  - Depending on their occurrence in a *lexical*, *syntax* or *layout* [Syntax
    Definition](#definition) the semantics of regular symbols changes. In the *syntax* context,
    layout non-terminals will be woven into the regular symbol, but not in the *lexical* and *layout* contexts. For
    example, a `Symbol*` in a *syntax* definition such as `syntax X = A*;` will be processed to ``syntax X = `{A
    Layout}*``. Similarly, `syntax X = {A B}+;` will be processed to `syntax X = {A (Layout B Layout)}+;`.

The *constraint* symbols are specially there to deal with the fact that Rascal does not generate a scanner. There are no
a priori disambiguation rules such as prefer keywords or longest match. Instead, you should use the constraint symbols
to define the effect of keyword reservation and longest match.

  - It is important to note that these constraints work on a character-by-character level in the input stream. So, a
    follow constraint such as `A >> [a-z]` means that the character immediately following a recognized A must be in the
    range `[a-z]`.

  - Read more on the constraint symbols via [Disambiguation](#disambiguation)s.

**Examples.**

A character class that defines all alphanumeric characters:

``` rascal
lexical AlphaNumeric = [a-zA-Z0-9];
```

A character class that defines anything except quotes:

``` rascal
lexical AnythingExceptQuote = ![\"];
```

An identifier class with longest match (can not be followed immediately by \[a-z\]):

``` rascal
lexical Id = [a-z]+ !>> [a-z];
```

An identifier class with longest match and first match (can not be preceded or followed by \[a-z\]):

``` rascal-shell
lexical Id = [a-z] !<< [a-z]+ !>> [a-z];
```

An identifier class with some reserved keywords and longest match:

``` rascal
lexical Id = [a-z]+ !>> [a-z] \ "if" \ "else" \ "fi";
```

An optional else branch coded using sequence and optional symbols:

``` rascal
syntax Statement = "if" Expression "then" Statement ("else" Statement)? "fi";
```

A block of statements separated by semicolons:

``` rascal
syntax Statement = "{" {Statement ";"}* "}";
```

A declaration with an embedded list of alternative modifiers and a list of typed parameters:

``` rascal
syntax Declaration = ("public" | "private" | "static" | "final")* Type Id "(" {(Type Id) ","}* ")" Statement;
```

  - The symbol language is very expressive and can lead to short definitions of complex syntactic constructs.

  - There is no built-in longest match for iterators, which makes syntax definitions open to languages that do not have
    longest match.

  - There is no built-in keyword preference or reservation, which makes syntax definitions open to language composition
    and legacy languages.

<!-- end list -->

  - By nesting too many symbols definitions can be become hard to understand.

  - By nesting too many symbols pattern matching and term construction becomes more complex. Extra non-terminals and
    rules with meaningful names can make a language specification more manageable.

  - The lack of automatic longest match and prefer keyword heuristics (you have to define it yourself), sometimes leads
    to unexpected ambiguity. See \[Disambiguation\].

### Alias Declaration

**Synopsis.**

Declare an alias for a type.

**Syntax.**

`alias Name = Type;`

**Description.**

Everything can be expressed using the elementary types and values that are provided by Rascal. However, for the purpose
of documentation and readability it is sometimes better to use a descriptive name as type indication, rather than an
elementary type. The use of aliases is a good way to document your intentions.

An alias declaration states that *Name* can be used everywhere instead of the already defined type *Type*. Both types
are thus structurally equivalent.

**Examples.**

``` rascal-shell
```

Introduce two aliases `ModuleId` and `Frequency` for the type str.

``` rascal
alias ModuleId = str;
alias Frequency = int;
```

Another example is an alias definition for a graph containing integer nodes:

``` rascal
alias IntGraph = rel[int,int];
```

Note that the Rascal Standard Library provides a graph data type that is defined as follows:

``` rascal
alias Graph[&T] = rel[&T, &T];
```

In other words the standard graph datatype can be parameterized with any element type.

See [Type Parameters](#typeparameters) for other examples parameterized alias declarations.

### Annotation Declaration

**Synopsis.**

Declare an annotation type for nodes. This feature is deprecated; please use [Keyword Fields](#keyword-fields) instead.

**Syntax.**

`anno AnnoType OnType @ Name`

**Description.**

An annotation may be associated with any node value, be it a pure node or some [Algebraic Data
Type](#ADT) derived from it.

Annotations are intended to attach application data to values, like adding position information or control flow
information to source code or adding visualization information to a graph.

An annotation declaration defines:

  - *AnnoType*, the type of the annotation values,

  - *OnType*, the type of the values that are being annotated,

  - *Name*, the name of the annotation.

Any value of any named type can be annotated and the type of these annotations can be declared precisely.

The following constructs are provided for handling annotations:

  - `Val @ Anno`: is an expression that retrieves the value of annotation *Anno* of value *Val* (may be undefined\!).
    See \[Selection\].

  - `Val1[@Anno = Val2]`: is an expression that sets the value of annotation *Anno* of the value *Val<sub>1</sub>* to
    *Val<sub>2</sub>* and returns *Val<sub>1</sub>* with the new annotation value as result. See [Replacement](#replacement).

  - `Var @ Anno = Val`: is an assignment statement that sets the value of annotation *Anno* of the value of variable
    *Var* to *Val*.

**Examples.**

Examples have been removed since this feature is deprecated.

  - Annotations are cumbersome since they change the structure of [Values](#values) without changing the
    semantics of the identity of a value. This is why they are deprecated.

### Tag Declaration

**Synopsis.**

Tag declarations are not implemented (yet).

**Description.**

Tag declarations explain which type the expected value of a tag should have.

  - They help the type checker to find common errors and they can help the parser to parse the contents of a string tag
    using a context-free grammar declaration.

<!-- end list -->

  - Not yet implemented, so basically tags are not checked

## Patterns

**Synopsis.**

Patterns are a notation for pattern matching used to detect if a value has a certain shape, and then to bind variables
to parts of the matched value.

**Syntax.**

For most of the [Values](#values), there is a corresponding pattern matching operator. Then there are some
"higher-order" matching operators which make complex patterns out of simpler ones. This is the complete list:

| Pattern              | Syntax                                                                                                                                                                                          |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Literal              | [Boolean](#boolean), [Integer](#integer), [Real](#real), [Number](#number), [String](#string), [Location](#location), or [DateTime](#datetime) |
| Regular Expression   | `/<Regular Expression>/`                                                                                                                                                                        |
| Variable declaration | `Type Var`                                                                                                                                                                                      |
| Multi-variable       | `*Var`, `*Type Var`                                                                                                                                                                             |
| Variable             | `Var`                                                                                                                                                                                           |
| List                 | `[ Pat1, Pat2, …​, Patn ]`                                                                                                                                                                      |
| Set                  | `{ Pat1, Pat2, …​, Patn }`                                                                                                                                                                      |
| Tuple                | `< Pat1, Pat2, …​, Patn >`                                                                                                                                                                      |
| Node                 | `Name ( Pat1, Pat2, …​, Patn )`                                                                                                                                                                 |
| Descendant           | `/ Pat`                                                                                                                                                                                         |
| Labelled             | `Var : Pat`                                                                                                                                                                                     |
| TypedLabelled        | `Type Var : Pat`                                                                                                                                                                                |
| TypeConstrained      | `[Type] Pat`                                                                                                                                                                                    |
| Concrete             | (Symbol) \` *Token<sub>1</sub>* *Token<sub>2</sub>* …​ *Token<sub>n</sub>* \`                                                                                                                   |

**Description.**

Patterns are used to **dispatch** functions and conditional control flow, to **extract** information from values and to
conditionally **filter** values. The pattern following pattern kinds can be arbitrarily nested, following the above
syntax:

  - [Concrete Patterns](#concrete): Concrete patterns.

  - [Descendant Pattern](#descendant): Deep match in an abstract pattern.

  - [Labelled Pattern](#labelled): Labelled abstract pattern.

  - [List Pattern](#list): List in abstract pattern.

  - [Literal Pattern](#literal): Literal in abstract pattern.

  - [MultiVariable Pattern](#multivariable): Multi-variable (also known as Splice-variable) in abstract
    pattern.

  - [Node pattern](#node): Node in abstract pattern.

  - [Regular Expression Pattern](#regular): Regular expression patterns.

  - [Set Pattern](#set): Set in abstract pattern.

  - [Tuple Pattern](#tuple): Tuple in abstract pattern.

  - [Type Constrained Pattern](#typeconstrained): Type constrained abstract pattern.

  - [Typed and Labelled Pattern](#typedlabelled): Typed, labelled, abstract pattern.

  - [Variable Pattern](#variable): Variable in abstract pattern.

  - [Variable Declaration Pattern](#variabledeclaration): Variable declaration in abstract pattern.

All these patterns may be used in:

  - cases of a [Switch](#switch) or [Visit](#visit),

  - on the left of the [Boolean Match](#match) operator (`:=`),

  - on the left of the [Enumerator](#enumerator) operator (`←`), and

  - as formal parameters of [Function Declaration](#function)s.

  - [Try Catch](#try-catch) statements to match thrown exceptions.

Each pattern binds variables in a conditional scope:

  - in further patterns to the right of the name which is bound in the same pattern

  - in the body of case statement (either a replacement or a statement body)

  - in the conditions and bodies of \<If\>, \<For\>, and \<While\> control flow statements

  - in the yielding expressions of comprehensions and in furter conditions of the comprehensions

<!-- end list -->

  - If a pattern does not match, then it may be hard to find out why. A small test case is the best thing to create.
    Often a default alternative which \<Throw\>s an exception with the value which is not matched can be used to find
    out why this is happening.

  - If a variable is bound in the scope of a pattern, then it acts as an `==` test, so make sure to use fresh variables
    to avoid such accidental collisions.

### Concrete Patterns

**Synopsis.**

Concrete patterns.

**Syntax.**

``` rascal
Concrete pattern with expected symbol type: (Symbol) ` Token1 Token2 ... Tokenn `
```

``` rascal
Typed variable inside a concrete pattern: Type</emphasis> Var>
```

**Description.**

A concrete pattern is a pattern for matching a [Parse Tree](#parse-trees). The notation of a concrete pattern is the **object
language** itself, the language that the parse tree describes. In other words, you can use a code example to match
parsed code using a concrete pattern. These concrete code examples can contain [Variable Pattern](#variable)s
like the other [Patterns](#patterns).

The mechanism of concete patterns gives a good notation for matching complex structures such as a [Prase Tree](#parse-trees),
and it works in a simple manner:

  - the input code is parsed using a parser generated from a [Syntax Definition](#definition); this
    generates parse trees.

  - the pattern example code is parsed using the **same** parser; this generates parse trees with [Variable
    Pattern](#variable)s.

  - the parse tree with the [Variable Pattern](#variable)s is matches against the parse tree of the input code,
    similarly to the way [Node pattern](#node)s work.

So, you could say that [Concrete Patterns](#concrete) are a short notation for otherwise highly complex [Node
pattern](#node)s on [Parse Tree](#parse-trees). Note that the [Typed Variable](#typed-variable)s in a concrete pattern can
only occur in the pattern at the location where the code for a full non-terminal of the [Syntax
Definition](#definition) would be. The structure of a concrete pattern follows the structure of the
grammar in the [Syntax Definition](#definition) and the types of the [Variable
Pattern](#variable)s are the syntax non-terminals of the [Syntax Definition](#definition).

Inside concrete syntax patterns, layout is ignored while pattern matching. So parse trees which have different
whitespace and comments but are otherwise the same will match anyway.

**Examples.**

Examples (in a context where an appropriate concrete syntax has been defined):

  - Quoted syntax pattern with two pattern variable declarations:

<!-- end list -->

    import ParseTree;
    syntax Id = [a-z]+;
    syntax Num = [0-9]+;
    syntax Exp = left Exp "*" Exp > Exp "+" Exp |  Id | Num;
    layout WS = [\ \n\r\t]*;
    visit (parse(#exp, "x + x")) {
       case (Exp) `<Id a> + <Id b>` => (Exp) `2 * <Id a>` when a == b
    }

Some observations about this example:

  - Notice how the non-terminals `Exp` and `Id` from the [Syntax Definition](#definition) become
    types for the pattern.

  - When this example pattern actually matches the variable `a` is bound and can be used again like any other [Variable
    Pattern](#variable).

A full example of concrete patterns can be found in [WithLayout](/docs/Recipes#with-layout).

### Descendant Pattern

**Synopsis.**

Deep match in an abstract pattern.

**Description.**

A descendant pattern performs a deep match of the pattern *Pat*. In other words, it matches when any element of the
subject at any depth that matches *Pat* and is used to match, for instance, tree nodes at an arbitrary distance from the
root.

**Examples.**

``` rascal-shell
import IO;
data ColoredTree = leaf(int N)
                 | red(ColoredTree left, ColoredTree right)
                 | black(ColoredTree left, ColoredTree right);
T = red(red(black(leaf(1), leaf(2)), black(leaf(3), leaf(4))), black(leaf(5), leaf(4)));
```

Now we match for `black` nodes with `leaf(4)` as second argument:

``` rascal-shell
for(/docs/black(_,leaf(4)) := T)
    println("Match!");
```

We use an *anonymous variable* `_` at a position where we don’t care about the actual value that is matched. In order to
print the actual values of the matches, we would need an \[Abstract/Labelled\] pattern.

Here we match all leaves that occur as second argument of `black`:

``` rascal-shell
for(/docs/black(_,leaf(int N)) := T)
    println("Match <N>");
```

Here we list all integers that occur in any leaf:

``` rascal-shell
for(/docs/int N := T)
    println("Match <N>");
```

Rather than printing, we can also collect them in a list using \[$Statements/Append\]:

``` rascal-shell
for(/docs/int N := T)
    append N;
```

### Labelled Pattern

**Synopsis.**

Labelled abstract pattern.

**Description.**

A labelled pattern matches the same values as *Pat*, but has as side-effect that the matched value is assigned to *Var*.

**Examples.**

``` rascal-shell
import IO;
data ColoredTree = leaf(int N)
                 | red(ColoredTree left, ColoredTree right)
                 | black(ColoredTree left, ColoredTree right);
T = red(red(black(leaf(1), leaf(2)), black(leaf(3), leaf(4))), black(leaf(5), leaf(4)));
for(/docs/M:black(_,leaf(4)) := T)
    println("Match <M>");
```

We use an **anonymous variable** `_` at a position where we don’t care about the actual value that is matched.

### List Pattern

**Synopsis.**

List in abstract pattern.

**Description.**

A list pattern matches a list value (the subject), provided that *Pat*<sub>1</sub>, *Pat*<sub>2</sub>, …​,
*Pat*<sub>n</sub> match the elements of that list in order. Special cases exist when one of the patterns
*Pat*<sub>i</sub> is

  - a [Variable Pattern](#variable) with a type that is identical to the element type of the subject list: the
    variable is matched with the value at the corresponding position in the subject list.

  - a [MultiVariable Pattern](#multivariable), with an optional element type that is identical to the element
    type of the subject list: list matching is applied and the variable can match an arbitrary number of elements of the
    subject list.

  - a [variable-pattern](#variable), where the variable has been declared with a list type, but not
    initialized, outside the pattern: list matching is applied and the variable can match an arbitrary number of
    elements of the subject list.

  - a [variable-pattern](#variable), where the variable has been declared with a type equal to the element type of the
    subject, but not initialized, outside the pattern: the variable is matched with the value at the corresponding
    position in the subject list
**Examples.**

``` rascal-shell
import IO;
```

  - A single variable

<!-- end list -->

    if([10, int N, 30, 40, 50] := [10, 20, 30, 40, 50])
       println("Match succeeded, N = <N>");

  - An untyped multi-variable:

<!-- end list -->

    if([10, *L, 50] := [10, 20, 30, 40, 50])
       println("Match succeeded, L = <L>");

  - A typed multi-variable:

<!-- end list -->

    if([10, *int L, 50] := [10, 20, 30, 40, 50])
       println("Match succeeded, L = <L>");

A list pattern may also be *non-linear*, i.e., it may contain uses of variables that were bound earlier in the pattern
(here, the second occurence of `L`):

``` rascal-shell
if([10, *L, 40, *L, 50] := [10, 20, 30, 40, 20, 30, 50])
   println("Match succeeded, L = <L>");
```

Here we see an example, where all pairs of equal elements in a list are printed:

``` rascal-shell
for([*L1, int N, *L2, N, *L3] := [ 5, 10, 20, 30, 40, 30, 15, 20, 10])
    println("N = <N>");
```

Here we print all ways in which a given list can be partitioned in two lists:

``` rascal-shell
for([*L1, *L2] := [10, 20, 30, 40, 50])
    println("<L1> and <L2>");
```

  - Already declared list variable:

<!-- end list -->

    list[int] L;
    if([10, L, 50] := [10, 20, 30, 40, 50])
       println("Match succeeded, L = <L>");

  - Already declared element variable:

<!-- end list -->

    int N;
    if([10, N, 30, 40, 50] := [10, 20, 30, 40, 50])
       println("Match succeeded, N = <N>");

### Literal Pattern

**Synopsis.**

Literal in abstract pattern.

**Description.**

A literal of one of the basic types [Boolean](#boolean), [Integer](#integer), [Real](#real),
[Number](#number), [String](#string), [Location](#location), or [DateTime](#datetime) can be
used as abstract pattern. A literal pattern matches with a value that is identical to the literal.

**Examples.**

A literal pattern matches with a value that is equal to it:

``` rascal-shell
123 := 123
"abc" := "abc"
```

A literal pattern does not match with a value that is not equal to it:

``` rascal-shell
123 := 456
"abc" := "def"
```

If the type of the literal pattern is **incomparable** to the subject’s type, a static type error is produced to
announce that the match is guaranteed to fail:

``` rascal-shell
123 := "abc";
```

However, a literal pattern can be used to filter among other values:

``` rascal-shell
value x = "abc";
123 := x;
x = 123;
123 := x;
```

### MultiVariable Pattern

**Synopsis.**

Multi-variable (also known as Splice-variable) in abstract pattern.

  - `*Var`

  - `*Type Var`

**Description.**

A multi-variable is an abbreviation for a variable declaration pattern. It can occur in a list pattern or set pattern
and can match zero or more list or set elements. Optionally the **element type** of the multi-variable may be specified.

**Examples.**

``` rascal-shell
import IO;
```

Using lists:

``` rascal-shell
if([10, *N, 50] := [10, 20, 30, 40, 50])
   println("Match succeeds, N == <N>");
```

the above is equivalent with:

``` rascal-shell
if([10, *int N, 50] := [10, 20, 30, 40, 50])
   println("Match succeeds, N == <N>");
```

Using sets:

``` rascal-shell
if({10, *S, 50} := {50, 40, 30, 30, 10})
   println("Match succeeds, S == <S>");
```

the above is equivalent with:

``` rascal-shell
if({10, *int S, 50} := {50, 40, 30, 30, 10})
   println("Match succeeds, S == <S>");
```

**Pitfalls.**

In older versions of Rascal the type of a multi-variable had to be a list or set type.

### Node pattern

**Synopsis.**

Node in abstract pattern.

**Description.**

A node pattern matches a node value or a datatype value, provided that *Name* matches with the constructor symbol of
that value and *Pat*<sub>1</sub>, *Pat*<sub>2</sub>, …​, *Pat*<sub>n</sub> match the children of that value in order.

**Examples.**

``` rascal-shell
```

Match on node values (recall that the function symbol of a node has to be quoted, see \[Values/Node\]):

``` rascal-shell
import IO;
if("f"(A,13,B) := "f"("abc", 13, false))
   println("A = <A>, B = <B>");
```

Define a data type and use it to match:

``` rascal-shell
data Color = red(int N) | black(int N);
if(red(K) := red(13))
   println("K = <K>");
```

### Regular Expression Pattern

**Synopsis.**

Regular expression patterns.

**Description.**

Regular expressions are used to match a string value and to decompose it in parts and also to compose new strings.
Regular expression patterns bind variables of type `str` when the match succeeds, otherwise they do not bind anything.
They can occur in cases of visit and switch statements, on the left-hand side of the match operator (`:=` or `!:=`) and
as declarator in enumerators.

We use a regular expression language that slightly extends/modifies the Java Regex language:

  - Regular expression are delimited by `/` and `/` optionally followed by modifiers (see below).

  - We allow *variable introductions*, syntax `<_Name_:_Regex_>`, which introduce a variable of type `str` named *Name*.
    A variable introduction corresponds to a group in a Java regexp. Each variable that is introduced should be unique,
    but may be referenced more than once later in the regular expression.

  - Regular expressions may also contain *references to variables*, syntax `<_Name_>`, the string value of variable
    `Name` is used at the position of the variable reference. This can be used to define so-called *non-linear*
    patterns.

  - Java regular expressions allow optional groups, which may introduce null bindings. Since uninitialized variables are
    not allowed in Rascal, we limit the kinds of expressions one can write here by not allowing nesting of variable
    introductions.

  - We allow variable references in a regular expression of the form: `<_Name_>` which inserts the string value of
    *Name* in the pattern. $Name$ should have been introduced in the regular expression itself or in the context in
    which the regular expression occurs.

  - In Perl matching options *follow* the regular expression, but Java uses the notation `(?Option)` at the *beginning*
    of the regular expression to set matching options. We support both styles. The following modifiers are supported:
    
      - *multi-line matching*: `(?m)` at the start of the regular expression or the modifier `m` at the end of the
        regular expression. The anchors `^` and `$` usually only match at the beginning and end of the subject string.
        When this option is set they also match any begin or end of line that is embedded in the subject string.
        Examples:
    
      - *case-insensitive matching*: `(?i)` or modifier `i`. Match characters irrespective of their case.
    
      - *single-line mode*: `(?s)` or modifier `s`. The `.` expression does usually not match line terminators. When
        single-line mode is set, it will match any character including line terminators.
    
      - *unix lines*: `(?d)` or modifier `d`. Usually newlines (`\n`), carriage return (`\r`) and new line carriage
        return (`\n\r`) sequences are all considered line terminators. When this option is set, only newline is
        considered to be a line terminator.

For convenience, we summarize the most frequently used constructs in regular expressions in the following table.

| Operator                                                        | Description                                                                                                                                                                                                  |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `x`                                                             | The single character `x` as long as it is not a punctuation character with a special meaning in the regular expression syntax                                                                                |
| `\p`                                                            | The punctuation character `p`, this includes `!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `\`, `]`, `^`, `_`, `{`, `\|`, `}`, and `~`. |
| `\\`                                                            | The backslash character                                                                                                                                                                                      |
| `\n`                                                            | Newline character                                                                                                                                                                                            |
| `\t`                                                            | Tab character                                                                                                                                                                                                |
| `[…​]`                                                          | One of the characters between the brackets (also known as *character class*). Character ranges and set operations on character classes may be used.                                                          |
| `[^…​]`                                                         | Any one character not between the brackets.                                                                                                                                                                  |
| `[a-z0-9]`                                                      | Character range: character between `a` and `z` or `0` and `9`.                                                                                                                                               |
| `.`                                                             | Any character except a line terminator. If single-line mode is set (using `(?s)` or modifier `s`), then it matches any character including line terminators.                                                 |
| `\d`                                                            | Digit: `[0-9]`                                                                                                                                                                                               |
| `\D`                                                            | Non-digit:\` \[^0-9\]\`                                                                                                                                                                                      |
| `\s`                                                            | Whitespace                                                                                                                                                                                                   |
| `\S`                                                            | Anything but whitespace.                                                                                                                                                                                     |
| `\w`                                                            | A word: `[a-zA-Z0-9_]`                                                                                                                                                                                       |
| `\W`                                                            | A non-word:\` \[^\\w\]\`                                                                                                                                                                                     |
| `xy`                                                            | Match `x` followed by `y`                                                                                                                                                                                    |
| \`x                                                             | y\`                                                                                                                                                                                                          |
| Match `x` or `y`                                                | `x?`                                                                                                                                                                                                         |
| Optional occurrence of `x`                                      | `x*`                                                                                                                                                                                                         |
| Zero or more occurrences of `x`                                 | `x+`                                                                                                                                                                                                         |
| One or more occurrences of `x`                                  | `x{n}`                                                                                                                                                                                                       |
| Exactly `n` occurrences of `x`                                  | `x{n,}`                                                                                                                                                                                                      |
| `n` or more occurrences of `x`                                  | `x{n,m}`                                                                                                                                                                                                     |
| At least `n`, at most `m` occurrences of `x`                    | `^`                                                                                                                                                                                                          |
| The beginning of the subject string                             | `$`                                                                                                                                                                                                          |
| The end of the input string                                     | `\b`                                                                                                                                                                                                         |
| Word boundary: position between a word and a non-word character | `\B`                                                                                                                                                                                                         |

Frequently used elements of Regular Expression Syntax

**Examples.**

Here are some examples of regular expression patterns.

``` rascal
/\brascal\b/i
```

does a case-insensitive match (`i`) of the word `rascal` between word boundaries (`\b`). And

``` rascal
/^.*?<word:\w+><rest:.*$>/m
```

does a multi-line match (`m`), matches the first consecutive word characters (`\w`) and assigns them to the variable
`word`. The remainder of the string is assigned to the variable `rest`.

A variable reference used to make a non-linear pattern:

``` rascal
/<x:[a-z]+>---<x>/
```

matches strings like `abc---abc` that consist of two identical sequences of letters separated by three dashes. Variables
that are referenced in a regular expression may also come from the context in which the regular expression occurs. For
instance,

``` rascal
/<x><n>/
```

will use the current values of `x` and `n` as regular expression. For values `"abc"`, respectively, `3` this would be
equivalent to the regular expression:

``` rascal
/abc3/
```

Observe that context variables may be of arbitrary type and that their value is first converted to a string before it is
inserted in the regular expression. This can be used in many ways. For instance, regular expressions may contain
restrictions on the number of repetitions of an element: `/a{3}/` will match exactly three letters a. Also minimum and
maximum number of occurrences can be defined. Here is how the repetition count can be inserted by a variable reference
(where `n` is assumed to have an integer value):

``` rascal
/a{<n>}/
```

Taking this example one step further, we can even write

``` rascal
/<x:a{<n>}>/
```

in other words, we introduce variable `x` and its defining regular expression contains a reference to a context
variable.

Multi-line matching:

``` rascal-shell
/XX$/ := "lineoneXX\nlinetwo";
/XX$/m := "lineoneXX\nlinetwo";
/(?m)XX$/ := "lineoneXX\nlinetwo";
```

Case-insensitive matching:

``` rascal-shell
/XX/ := "some xx";
/XX/i := "some xx";
/(?i)XX/ := "some xx";
```

Single-line mode:

``` rascal-shell
/a.c/ := "abc";
/a.c/ := "a\nc";
/a.c/s := "a\nc";
/(?s)a.c/ := "a\nc";
```

Here are examples, how to escape punctuation characters in regular expressions:

``` rascal-shell
/a\/b/ := "a/b";
/a\+b/ := "a+b";
```

### Set Pattern

**Synopsis.**

Set in abstract pattern.

**Description.**

A set pattern matches a set value (the subject), provided that *Pat*<sub>1</sub>, *Pat*<sub>2</sub>, …​,
*Pat*<sub>n</sub> match the elements of that set in **any** order (recall that the elements of a set are unordered and
do not contain duplicates). Completely analogous to list patterns, there are special cases when one of the patterns
*Pat*<sub>i</sub> is

  - a [Variable Declaration Pattern](#variabledeclaration) with a type that is identical to the element type of
    the subject set: the variable is matched with one value in the subject set.

  - a [MultiVariable Pattern](#multivariable), with an optional element type that is identical to the element
    type of the subject set: set matching is applied and the variable can match an arbitrary number (in arbitrary order)
    of elements of the subject set.

  - a [Variable Pattern](#variable), where the variable has been declared with a set type, but not initialized,
    outside the pattern: set matching is applied and the variable can match an arbitrary number (in arbitrary order) of
    elements of the subject set.

  - a [Variable Pattern](#variable), where the variable has been declared with a type equal to the element type
    of the subject, but not initialized, outside the pattern: the variable is matched with one value in the subject set.

**Examples.**

``` rascal-shell
import IO;
```

  - A single variable

<!-- end list -->

    if({10, 30, 40, 50, int N} := {10, 20, 30, 40, 50})
       println("Match succeeded, N = <N>");

  - An untyped multi-variable:

<!-- end list -->

    if({10, *S, 50} := {50, 40, 30, 20, 10})
       println("Match succeeded, S = <S>");

  - A typed multi-variable:

<!-- end list -->

    if({10, *int S, 50} := {50, 40, 30, 20, 10})
       println("Match succeeded, S = <S>");

Here we see an example, where all possible splits of a set in two subsets are printed:

``` rascal-shell
for({*S1, *S2} :={30, 20, 10})
    println("<S1> and <S2>");
```

  - Already declared set variable:

<!-- end list -->

    set[int] S;
    if({10, *S, 50} := {10, 20, 30, 40, 50})
       println("Match succeeded, S = <S>");

  - Already declared element variable:

<!-- end list -->

    int N;
    if({10, N, 30, 40, 50} := {50, 40, 30, 20, 10})
       println("Match succeeded, N = <N>");

### Tuple Pattern

**Synopsis.**

Tuple in abstract pattern.

**Description.**

A tuple pattern matches a tuple value, provided that *Pat*<sub>1</sub>, *Pat*<sub>2</sub>, …​, *Pat*<sub>n</sub> match
the elements of that tuple in order.

**Examples.**

``` rascal-shell
import IO;
if(<A, B, C> := <13, false, "abc">)
   println("A = <A>, B = <B>, C = <C>");
```

### Type Constrained Pattern

**Synopsis.**

Type constrained abstract pattern.

**Description.**

A type constrained pattern matches provided that the subject has type *Type* and *Pat* matches. This can be handy in
case of ambiguity (say more than one constructor with the same name), or in case the pattern is completely general. See
an example below:

Warning: This does not seem to work properly. There is a bug.

**Examples.**

``` rascal-shell
import IO;
```

Some example data type which contains generic values as well as specific expressions:

``` rascal-shell
data Exp = val(value v) | add(Exp l, Exp r) | sub(Exp l, Exp r);
ex = add(add(val("hello"(1,2)),val("bye")), sub(val(1),val(2)));
```

Here we constrain the match to find only Exps:

``` rascal-shell
visit (ex) {
  case [Exp] str name(_,_) : println("node name is <name>");
}
```

Here we do not constrain the same pattern:

``` rascal-shell
visit (ex) {
  case str name(_,_) : println("node name is <name>");
}
```

### Typed and Labelled Pattern

**Synopsis.**

Typed, labelled, abstract pattern.

**Description.**

A typed, labelled, pattern matches when the subject value has type *Type* and *Pat* matches. The matched value is
assigned to *Var*.

This construct is used for:

  - binding the *whole pattern* to a variable while also matching some stuff out of it: `MyType t :
    someComplexPattern(f(int a), int b))`. This is similar to [Labelled Pattern](#labelled)s but with an extra
    type

  - to assert that the pattern has a certain type. This can be useful in disambiguating a constructor name, as in the
    example below.

**Examples.**

``` rascal-shell
import IO;
data Lang = add(Lang l, Lang r) | number(int i);
data Exp = id(str n) | add(Exp l, Exp r) | subtract(Exp l, Exp r) | otherLang(Lang a);
ex = add(id("x"), add(id("y"), otherLang(add(number(1),number(2)))));
visit (ex) {
  case Lang l:add(_,_) : println("I found a Lang <l>");
  case Exp e:add(_,_)  : println("And I found an Exp <e>");
}
```

### Variable Pattern

**Synopsis.**

Variable in abstract pattern.

**Syntax.**

*Var*

**Description.**

A variable pattern can act in two roles:

  - If *Var* has already a defined value then it matches with that value.

  - If *Var* has not been defined before (or it has been declared but not initialized) then it matches any value. That
    value is assigned to *Var*. The scope of this variable is the outermost expression in which the pattern occurs or
    the enclosing [If](#if), [While](#while), or [Do](#do) if the pattern occurs in the
    test expression of those statements.

**Examples.**

Initialize variable `N`

``` rascal-shell
N = 10;
```

and use `N` in a pattern; its value is used as value to match with:

``` rascal-shell
N := 10;
N := 20;
```

Use a non-existing variable in a pattern, it is bound when the match succeeds:

``` rascal-shell
import IO;
if(M := 10)
   println("Match succeeded, M == <M>");
```

### Variable Declaration Pattern

**Synopsis.**

Variable declaration in abstract pattern.

**Description.**

A variable declaration

``` rascal
Type Var
```

can be used as abstract pattern. A variable declaration introduces a new variable *Var* that matches any value of the
given type *Type*. That value is assigned to *Var* when the whole match succeeds.

The scope of this variable is the outermost expression in which the pattern occurs or the enclosing
[If](#if), [While](#while), or [Do](#do) if the pattern occurs in the test expression
of those statements.

**Examples.**

Let’s first perform a match that succeeds:

``` rascal-shell
str S := "abc";
```

and now we attempt to inspect the value of `S`:

``` rascal-shell
S;
```

As mentioned above: `S` is only bound in the scope of the match expression\! Let’s explore how bindings work in an if
statement:

``` rascal-shell
import IO;
if(str S := "abc")
   println("Match succeeds, S == \"<S>\"");
```

## Expressions

**Synopsis.**

The expressions available in Rascal.

**Description.**

The expression is the basic unit of evaluation and may consist of the ingredients shown in the figure.

  - An elementary *literal value*, e.g. constants of the types [Boolean](#boolean), [Integer](#integer),
    [Real](#real), [Number](#number), [String](#string), [Location](#location) or
    [DateTime](#datetime).

  - A *structured value* for [List](#list), [Set](#set), [Map](#map), [Tuple](#tuple) or
    [Relation](#relation). The elements are first evaluated before the structured value is built.

  - A *variable* that evaluates to its current value.

  - A call to a function or constructor:
    
      - A *function call*. First the arguments are evaluated and the corresponding function is called. The value
        returned by the function is used as value of the function call. See [Call](#call).
    
      - A *constructor*. First the arguments are evaluated and then a data value is constructed for the corresponding
        type. This data value is used as value of the constructor. Constructors are functions that can be used in all
        contexts where functions can be used. See [Constructor](#constructor).

  - An operator expression. The operator is applied to the arguments; the evaluation order of the arguments depends on
    the operator. The result returned by the operator is used as value of the operator expression. See
    [Operators](#operators).

  - [Comprehensions](#comprehensions).

  - A [Visit](#visit) expression.

  - A [Boolean Any](#any) expression.

  - An [Boolean All](#all) expression.

  - Some statements like [If](#if), [For](#for), [While](#while) and
    [Do](#do) can also be used in expressions, see [Statement as
    Expression](#statementasexpression).

### Values

**Synopsis.**

The different types of values.

  - [Boolean](#boolean): Boolean values.
    
      - [Boolean All](#all): All argument expressions are true.
    
      - [Boolean And](#and): Boolean *and* operator.
    
      - [Boolean Any](#any): Any combination of argument values is true.
    
      - [Boolean Equivalence](#equivalence): The *equivalence* operator on Boolean values.
    
      - [Boolean IfDefinedElse](#ifdefinedelse): Test whether expression has a defined value, otherwise provide
        alternative.
    
      - [Boolean Implication](#implication): The *implication* operator on Boolean values.
    
      - [Boolean IsDefined](#isdefined): Test whether the value of an expression is defined.
    
      - [Boolean Match](#match): Match a pattern against an expression.
    
      - [Boolean Negation](#negation): The *not* operator on Boolean values.
    
      - [Boolean NoMatch](#nomatch): Negated \[Boolean Match\] operator.
    
      - [Boolean Or](#or): The *or* operator on Boolean values.

  - [Constructor](#constructor): Constructors create values for user-defined datatypes (Algebraic Datatypes).

  - [DateTime](#datetime): Date and time values.
    
      - [DateTime Equal](#equal): Equality on datetime values.
    
      - [DateTime Field Selection](#fieldselection): Select a field from a datetime value.
    
      - [DateTime GreaterThan](#greaterthan): Greater than operator on datetime values.
    
      - [DateTime GreaterThanOrEqual](#greaterthanorequal): Greater than or equal operator on datetime values.
    
      - [DateTime LessThan](#lessthan): Less than operator on datetime values.
    
      - [DateTime LessThanOrEqual](#lessthanorequal): Less than or equal operator on datetime values.
    
      - [DateTime NotEqual](#notequal): Not equal operator on datetime values.

  - [Integer](#integer): Integer values.

  - [List](#list): List values.
    
      - [List Append](#append): Append an element at the end of a list.
    
      - [List Comprehension](#comprehension): A list comprehension generates a list value.
    
      - [List Concatenation](#concatenation): Concatenate two lists.
    
      - [List Difference](#difference): The difference between two lists.
    
      - [List Equal](#equal): Equality on lists.
    
      - [List Insert](#insert): add an element in front of a list.
    
      - [List Intersection](#intersection): Intersection of two lists.
    
      - [List NotEqual](#notequal): Not equal operator on lists.
    
      - [List Product](#product): Compute the product of two lists.
    
      - [List Slice](#slice): Retrieve a slice of a list.
    
      - [List Splice](#splice): Splice the elements of a list in an enclosing list.
    
      - [List StrictSubList](#strictsublist): The strict sublist operator on lists.
    
      - [List StrictSuperList](#strictsuperlist): The strict super list operator on lists.
    
      - [List SubList](#sublist): The sublist operator on lists.
    
      - [List Subscription](#subscription): Retrieve a list element via its index.
    
      - [List SuperList](#superlist): The super list operator on lists.
    
      - [List in](#in): Membership test on list elements.
    
      - [List notin](#notin): Negated membership test on lists.

  - [ListRelation](#listrelation): ListRelation values.
    
      - [ListRelation CartesianProduct](#cartesianproduct): Cartesian product of two list relation values.
    
      - [ListRelation Composition](#composition): Composition of two list relation values.
    
      - [ListRelation FieldSelection](#fieldselection): Select a field (column) from a list relation value.
    
      - [ListRelation Join](#join): Join two list relation values.
    
      - [ListRelation Reflexive Transitive Closure](#reflexivetransitiveclosure): The reflexive transitive
        closure of a binary list relation.
    
      - [ListRelation Subscription](#subscription): Indexing of a list relation via tuple values.
    
      - [ListRelation Transitive Closure](#transitiveclosure): Transitive closure on binary list relation
        values.

  - [Location](#location): (Source code) location values.
    
      - [Location AddSegment](#addsegment): Locations can be concatenated with strings to add segments to the
        path component.
    
      - [Location Equal](#equal): Equality operator on locations.
    
      - [Location FieldSelection](#fieldselection): Field selection on locations.
    
      - [Location GreaterThan](#greaterthan): The greater than operator on location values.
    
      - [Location GreaterThanOrEqual](#greaterthanorequal): The greater than or equal operator on location
        values.
    
      - [Location LessThan](#lessthan): The less than operator on location values.
    
      - [Location LessThanOrEqual](#lessthanorequal): The less than or equal operator on location values.
    
      - [NotEqual](#notequal): The not equal operator on location values.

  - [Map](#map): Map values.
    
      - [Map Composition](#composition): Composition of two map values.
    
      - [Map Comprehension](#comprehension): A map comprehension generates a map value.
    
      - [Map Difference](#difference): The difference between two maps.
    
      - [Map Equal](#equal): Equality operator on maps.
    
      - [Map Intersection](#intersection): Intersection of two maps.
    
      - [Map NotEqual](#notequal): Not equal operator on map values.
    
      - [Map StrictSubMap](#strictsubmap): Strict submap operator on map values.
    
      - [Map StrictSuperMap](#strictsupermap): Strict supermap operator on map values.
    
      - [Map SubMap](#submap): Submap operator on map values.
    
      - [Map Subscription](#subscription): Retrieve a value by its key in map.
    
      - [Map SuperMap](#supermap): Supermap operator on map values.
    
      - [Map Union](#union): Union of two maps.
    
      - [Map in](#in): Membership test on the keys of a map.
    
      - [Map notin](#notin): Negated membership test on the keys of a map.

  - [Node](#node): Node values.
    
      - [Node Equal](#equal): Equal operator on node values.
    
      - [Node GreaterThan](#greaterthan): Greater than operator on node values.
    
      - [Node GreaterThanOrEqual](#greaterthanorequal): Greater than or equal operator on node values.
    
      - [Node LessThan](#lessthan): Less than operator on node values.
    
      - [Node LessThanOrEqual](#lessthanorequal): Less than or equal operator on node values.
    
      - [Node NotEqual](#notequal): Not equal operator on node values.
    
      - [Node Slice](#slice): Retrieve a slice of a node’s argument list.
    
      - [Node Subscription](#subscription): Retrieve an argument of a node via its index.

  - [Number](#number): Numeric values.
    
      - [Number Addition](#addition): Addition on numeric values.
    
      - [Number Conditional](#conditional): Conditional expression for numeric values.
    
      - [Number Division](#division): Division on numeric values.
    
      - [Number Equal](#equal): Equality operator on numeric values.
    
      - [Number GreaterThan](#greaterthan): Greater than operator on numeric values.
    
      - [Number GreaterThanOrEqual](#greaterthanorequal): Greater than or equal operator on numeric values.
    
      - [Number LessThan](#lessthan): Less than operator on numeric values.
    
      - [Number LessThanOrEqual](#lessthanorequal): Less than or equal operator on numeric values.
    
      - [Number Multiplication](#multiplication): Multiply two numeric values.
    
      - [Number Negation](#negation): Negate a numeric value.
    
      - [Number NotEqual](#notequal): Not equal operator on numeric values.
    
      - [Number Remainder](#remainder): Remainder of two integer values.
    
      - [Number Subtraction](#subtraction): Subtract two numeric values.

  - [Range](#range): Numeric range of values.

  - [Real](#real): Real values.

  - [ReifiedTypes](#reifiedtypes): Types can be represented by values.

  - [Relation](#relation): Relation values.
    
      - [Relation CartesianProduct](#cartesianproduct): Cartesian product of two relation values.
    
      - [Relation Composition](#composition): Composition of two relation values.
    
      - [Relation FieldSelection](#fieldselection): Select a field (column) from a relation value.
    
      - [Relation Join](#join): Join two relation values.
    
      - [Relation ReflexiveTransitiveClosure](#reflexivetransitiveclosure): The reflexive transitive closure of
        a binary relation.
    
      - [Relation Subscription](#subscription): Indexing of a relation via tuple values.
    
      - [Relation TransitiveClosure](#transitiveclosure): Transitive closure on binary relation values.

  - [Set](#set): Set values.
    
      - [Set Comprehension](#comprehension): A set comprehension generates a set value.
    
      - [Set Difference](#difference): The difference between two sets.
    
      - [Set Equal](#equal): Equal operator on set values.
    
      - [Set Insert](#insert): Add an element to a set.
    
      - [Set Intersection](#intersection): Intersection of two sets.
    
      - [Set NotEqual](#notequal): Not equal operator on set values.
    
      - [Set Product](#product): The product of two set values.
    
      - [Set Splice](#splice): Splice the elements of a set in an enclosing set.
    
      - [Set StrictSubSet](#strictsubset): Strict subset operator on set values.
    
      - [Set StrictSuperSet](#strictsuperset): Strict superset operator on set values.
    
      - [Set SubSet](#subset): Subset operator on set values.
    
      - [Set SuperSet](#superset): Superset operator on set values.
    
      - [Set Union](#union): Union of two set values.
    
      - [Set in](#in): Membership test on set values.
    
      - [Set notin](#notin): Negated membership test on set values.

  - [String](#string): String values.
    
      - [String Concatenation](#concatenation): Concatenate two strings.
    
      - [String Equal](#equal): Equality operator on string values.
    
      - [String GreaterThan](#greaterthan): Greater than operator on string values.
    
      - [String GreaterThanOrEqual](#greaterthanorequal): Greater than or equal operator on string values.
    
      - [String LessThan](#lessthan): Less than operator on string values.
    
      - [String LessThanOrEqual](#lessthanorequal): Less than or equal operator on string values.
    
      - [String NotEqual](#notequal): Not equal operator on string values.
    
      - [String Slice](#slice): Retrieve a slice of a string.
    
      - [String Subscription](#subscription): Retrieve a substring via its index.

  - [Tuple](#tuple): Tuple values.
    
      - [Tuple Concatenation](#concatenation): Concatenate two tuple values.
    
      - [Tuple Equal](#equal): Equality operator on tuple values.
    
      - [Tuple FieldSelection](#fieldselection): Select a field from a tuple by its field name.
    
      - [Tuple GreaterThan](#greaterthan): Greater than operator on tuple values.
    
      - [Tuple GreaterThanOrEqual](#greaterthanorequal): Greater than or equal operator on tuple values.
    
      - [Tuple LessThan](#lessthan): Less than operator on tuple values.
    
      - [Tuple LessThanOrEqual](#lessthanorequal): Less than or equal operator on tuple values.
    
      - [Tuple NotEqual](#notequal): Not equal operator on tuple values.
    
      - [Tuple Subscription](#subscription): Retrieve a tuple field by its index position.

  - [Value](#value): Values of type `value`.
    
      - [Value Conditional](#conditional): Conditional expression on values.
    
      - [Value Equal](#equal): Equal operator on values.
    
      - [Value GreaterThan](#greaterthan): Greater than operator on values.
    
      - [Value GreaterThanOrEqual](#greaterthanorequal): Greater than or equal operator on values.
    
      - [Value LessThan](#lessthan): Less than operator on values.
    
      - [Value LessThanOrEqual](#lessthanorequal): Less than or equal operator on values.
    
      - [Value NotEqual](#notequal): Not equal operator on values.

  - [Void](#void): Values of type `void`.

### Boolean

**Synopsis.**

Boolean values.

**Syntax.**

`true`, `false`

**Types.**

`bool`

**Description.**

The Booleans are represented by the type `bool` which has two values: `true` and `false`.

The Boolean operators (to be more precise: operators with a value of type Boolean as result) have *short-circuit*
semantics. This means that the operands are evaluated until the outcome of the operator is known.

Most operators are self-explanatory except the match (:=) and no match (\!:=) operators that are also the main reason to
treat Boolean operator expressions separately. Although we describe patterns in full detail in
[Patterns](#patterns), a preview is useful here. A pattern can

  - match (or not match) any arbitrary value (that we will call the *subject value*);

  - during the match variables may be bound to subvalues of the subject value.

The *match* operator

``` rascal
Pat := Exp
```

is evaluated as follows:

  - *Exp* is evaluated, the result is a subject value;

  - the subject value is matched against the pattern *Pat*;

  - if the match succeeds, any variables in the pattern are bound to subvalues of the subject value and the match
    expression yields `true`;

  - if the match fails, no variables are bound and the match expression yields `false`.

This looks and *is* nice and dandy, so why all this fuss about Boolean operators? The catch is that—​as we will see in
[Patterns](#patterns)--a match need not be unique. This means that there may be more than one way of matching the
subject value resulting in different variable bindings.

This behaviour is applicable in the context of all Rascal constructs where a pattern match determines the flow of
control of the program, in particular:

  - Boolean expressions: when a pattern match fails that is part of a Boolean expression, further solutions are tried in
    order to try to make the Boolean expression true.

  - Tests in [For](#for), [While](#while), [Do](#do) statements.

  - Tests in [Boolean Any](#any) and [Boolean All](#all) expressions.

  - Tests and [Enumerator](#enumerator)s in comprehensions.

  - Pattern matches in cases of a [Visit](#visit).

  - Pattern matches in cases of a [Switch](#switch).

The following operators are provided for Boolean:

  - [Boolean All](#all): All argument expressions are true.

  - [Boolean And](#and): Boolean *and* operator.

  - [Boolean Any](#any): Any combination of argument values is true.

  - [Boolean Equivalence](#equivalence): The *equivalence* operator on Boolean values.

  - [Boolean IfDefinedElse](#ifdefinedelse): Test whether expression has a defined value, otherwise provide
    alternative.

  - [Boolean Implication](#implication): The *implication* operator on Boolean values.

  - [Boolean IsDefined](#isdefined): Test whether the value of an expression is defined.

  - [Boolean Match](#match): Match a pattern against an expression.

  - [Boolean Negation](#negation): The *not* operator on Boolean values.

  - [Boolean NoMatch](#nomatch): Negated \[Boolean Match\] operator.

  - [Boolean Or](#or): The *or* operator on Boolean values.

There are also [library functions](/docs/Libraries#boolean) available for Booleans.

**Examples.**

Consider the following match of a list

``` rascal-shell
[1, *int L, 2, *int M] := [1,2,3,2,4]
```

By definition `list[int] L` and `list[int] M` match list elements that are part of the enclosing list in which they
occur. If they should match a nested list each should be enclosed in list brackets.

There are two solutions for the above match:

  - `L` = `[]` and `M` =\` \[2, 3, 2, 4\]\`; and

  - `L` = `[2,3]` and `M` =\` \[4\]\`.

<!-- end list -->

``` rascal-shell
import IO;
for ([1, *int L, 2, *int M] := [1,2,3,2,4])
  println("L: <L>, M: <M>");
```

Depending on the context, only the first solution of a match expression is used, respectively all solutions are used. If
a match expression occurs in a larger Boolean expression, a subsequent subexpression may yield false and — depending on
the actual operator — evaluation backtracks to a previously evaluated match operator to try a next solution. Let’s
illustrate this by extending the above example:

``` rascal
[1, *int L, 2, *int M] := [1,2,3,2,4] && size(L) > 0
```

where we are looking for a solution in which L has a non-empty list as value. Evaluation proceeds as follows:

  - The left argument of the `&&` operator is evaluated: the match expression is evaluated resulting in the bindings `L
    = []` and `M = [2, 3, 2, 4]`;

  - The right argument of the `&&` operator is evaluated: `size(L) > 0` yields `false`;

  - Backtrack to the left argument of the `&&` operator to check for more solutions: indeed there are more solutions
    resulting in the bindings `L = [2,3]` and `M = [4]`;

  - Proceed to the right operator of `&&`: this time `size(L) > 0` yields `true`;

  - The result of evaluating the complete expression is `true`.

<!-- end list -->

``` rascal-shell
import IO;
import List;
```

for prints them all:

``` rascal-shell
for ([1, *int L, 2, *int M] := [1,2,3,2,4] && size(L) > 0)
  println("L: <L>, M: <M>");
```

if prints the first

``` rascal-shell
if ([1, *int L, 2, *int M] := [1,2,3,2,4] && size(L) > 0)
  println("L: <L>, M: <M>");
```

##### Boolean All

**Synopsis.**

All argument expressions are true.

**Syntax.**

`all ( Exp1, Exp2, …​ )`

| `Exp1` | `Exp2` | …​ | `all ( Exp1, Exp2, …​ )` |
| ------ | ------ | -- | ------------------------ |
| `bool` | `bool` | …​ | `bool`                   |

Types

**Description.**

Yields `true` when all combinations of values of *Exp*<sub>i</sub> are true.

**Examples.**

Are all integers 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 even?

``` rascal-shell
all(int n <- [1 .. 10], n % 2 == 0);
```

Are all integers 0, 2, 4, 6, 8, 10 even?

``` rascal-shell
all(int n <- [0, 2 .. 10], n % 2 == 0);
```

When one of the *Exp*<sub>i</sub> enumerates the elements of an empty list, `all` always returns `true`:

``` rascal-shell
all(int n <- [], n > 0);
```

> **Warning**
> 
> The Rascal interpreter and compiler give different results on an empty list. The interpreter returns `fals` for the
> abo eexample.

##### Boolean And

**Synopsis.**

Boolean *and* operator.

**Syntax.**

`Exp1 && Exp2`

| `Exp1` | `Exp2` | `Exp1 && Exp2` |
| ------ | ------ | -------------- |
| `bool` | `bool` | `bool`         |

Types

**Description.**

The *and* operator on Boolean values defined as follows:

| `Exp1`  | `Exp2`  | `Exp1 && Exp2` |
| ------- | ------- | -------------- |
| `true`  | `true`  | `true`         |
| `true`  | `false` | `false`        |
| `false` | `true`  | `false`        |
| `false` | `false` | `false`        |

Boolean operators have *short circuit* semantics: only those operands are evaluated that are needed to compute the
result. In the case of the `&&` operator, the result is `false` if `Exp1` evaluates to `false`, otherwise `Exp2` is
evaluated to determine the result.

Note that `&&` backtracks over its argument expressions until it can find an evaluation that yields `true` unless there
is none. This may happen if the left or right expression is a non-deterministic pattern match or a value generator.

Variable assignments as a result of matching or generator expressions under a `&&` are visible outside the context of
the operator, but only if the context is conditional, such as an if-then-else or a for loop. Note that if one of the
argument expressions evaluates to false, then no binding is done either.

**Examples.**

``` rascal-shell
true && false;
i <- [1,2,3] && (i % 2 == 0)
import IO;
if (i <- [1,2,3] && (i % 2 == 0))
  println("<i> % 2 == 0");
for (i <- [1,2,3,4] && (i % 2 == 0))
  println("<i> % 2 == 0");
```

  - The backtracking `&&` allows one to express searching for a computational solution in concise manner.

<!-- end list -->

  - Side effects to global variables or IO in the context of a backtracking `&&` can lead to more effects than you
    bargained for.

<!-- end list -->

``` rascal-shell
import IO;
int i = 0;
bool incr() { i += 1; return true; }
for (int j <- [1,2,3] && incr() && (i % 2 == 0))
  println("once true for <j>");
i;
```

##### Boolean Any

**Synopsis.**

Any combination of argument values is true.

**Syntax.**

`any ( Exp1, Exp2, …​ )`

| `Exp1` | `Exp2` | …​ | `any ( Exp1, Exp2, …​ )` |
| ------ | ------ | -- | ------------------------ |
| `bool` | `bool` | …​ | `bool`                   |

Types

**Description.**

Yields `true` when at least one combination of values of *Exp*<sub>i</sub> is true.

**Examples.**

``` rascal-shell
any(int n <- [1 .. 10], n % 2 == 0);
```

##### Boolean Equivalence

**Synopsis.**

The *equivalence* operator on Boolean values.

**Syntax.**

`Exp1 ⇐⇒ Exp2`

| `Exp1` | `Exp2` | `Exp1 ⇐⇒ Exp2` |
| ------ | ------ | -------------- |
| `bool` | `bool` | `bool`         |

Types

**Description.**

The *equivalence* operator on Boolean values defined as follows:

| `Exp1`  | `Exp2`  | `Exp1 ⇐⇒ Exp2` |
| ------- | ------- | -------------- |
| `true`  | `true`  | `true`         |
| `true`  | `false` | `false`        |
| `false` | `true`  | `false`        |
| `false` | `false` | `true`         |

Boolean operators have *short circuit* semantics: only those operands are evaluated that are needed to compute the
result. However, in the case of the `⇐⇒` operator both operands have to be evaluated to determine the result.

Note that the `⇐⇒` operator backtracks over its arguments until it finds an evaluation that is `true`, unless there is
none. Variable bindings that are the effect of matching operators in its arguments are not visible outside the scope of
the `⇐⇒`.

**Examples.**

``` rascal-shell
import IO;
false <==> false;
false <==> true;
```

> **Note**
> 
> We should add a more meaningful example of backtracking over ⇐⇒ than this old one: (i ← \[1,2\]) ⇐⇒ (j ← \[1,2,3\]);
> for i ← \[1,2\]) ⇐⇒ (j ← \[1,2,3\]i ← \[1,2\]) ⇐⇒ (j ← \[1,2,3\] println("true\!"); (i ← \[1,2\] && (i % 2 == 0)) ⇐⇒
> (j ← \[1,2,3\] && (j % 3 == 0)) for i ← \[1,2\] && (i % 2 == 0i ← \[1,2\] && (i % 2 == 0 ⇐⇒ (j ← \[1,2,3\] && (j % 3
> == 0))) println("true\!");

##### Boolean IfDefinedElse

**Synopsis.**

Test whether expression has a defined value, otherwise provide alternative.

**Syntax.**

`Exp1 ? Exp2`

| `Exp1` | `Exp2` | `Exp1 ? Exp2` |
| ------ | ------ | ------------- |
| `T1`   | `T2`   | `T2 <: T1`    |

Types

**Description.**

If no exception is generated during the evaluation of *Exp*<sub>1</sub>, the result of `Exp1 ? Exp2` is the value of
*Exp*<sub>1</sub>. Otherwise, it is the value of *Exp*<sub>2</sub>.

Also see [???](#boolean-isDefined) and [Assignment](#assignment).

**Examples.**

This test can, for instance, be used to handle the case that a certain key value is not in a map:

``` rascal-shell
T = ("a" : 1, "b" : 2);
```

Trying to access the key `"c"` will result in an error:

``` rascal-shell
T["c"];
```

Using the `?` operator, we can write:

``` rascal-shell
T["c"] ? 0;
```

This is very useful, if we want to modify the associated value, but are not sure whether it exists:

``` rascal-shell
T["c"] ? 0 += 1;
```

Another example using a list:

``` rascal-shell
L = [10, 20, 30];
L[4] ? 0;
```

It is, however, not possible to assign to index positions outside the list.

##### Boolean Implication

**Synopsis.**

The *implication* operator on Boolean values.

**Syntax.**

`Exp1 =⇒ Exp2`

| `Exp1` | `Exp2` | `Exp1 =⇒ Exp2` |
| ------ | ------ | -------------- |
| `bool` | `bool` | `bool`         |

Types

**Description.**

The *implication* operator on Boolean values defined as follows:

| `Exp1`  | `Exp2`  | `Exp1 =⇒ Exp2` |
| ------- | ------- | -------------- |
| `true`  | `true`  | `true`         |
| `true`  | `false` | `false`        |
| `false` | `true`  | `true`         |
| `false` | `false` | `true`         |

Boolean operators have *short circuit* semantics: only those operands are evaluated that are needed to compute the
result. In the case of the `=⇒` operator, the result is `true` if `Exp1` evaluates to `false`, otherwise `Exp2` is
evaluated to determine the result.

**Examples.**

``` rascal-shell
false ==> true;
```

##### Boolean IsDefined

**Synopsis.**

Test whether the value of an expression is defined.

**Syntax.**

`Exp ?`

| `Exp` | `Exp ?` |
| ----- | ------- |
| `T`   | `bool`  |

Types

**Description.**

If no exception is generated during the evaluation of *Exp*, the result is `true`. Otherwise, it is `false`.

**Examples.**

``` rascal-shell
T = ("a" : 1, "b" : 2);
T["b"]?
T["c"]?
L = [10, 20, 30];
L[1]?
L[5]?
```

##### Boolean Match

**Synopsis.**

Match a pattern against an expression.

**Syntax.**

`Pat := Exp`

| `Pat`                        | `Exp`   | `Pat := Exp` |
| ---------------------------- | ------- | ------------ |
| [Patterns](#patterns) | `value` | `bool`       |

Types

**Description.**

See [???](#pattern-Matching) for an introduction to pattern matching and [Patterns](#patterns) for a complete
description.

**Examples.**

``` rascal-shell
123 := 456;
[10, *n, 50] := [10, 20, 30, 40, 50];
{10, *int n, 50} := {50, 40, 30, 30, 10};
```

##### Boolean Negation

**Synopsis.**

The *not* operator on Boolean values.

**Syntax.**

`! Exp`

| `Exp`  | `! Exp` |
| ------ | ------- |
| `bool` | `bool`  |

Types

**Description.**

The *not* operator on Boolean values defined as follows:

| `Exp`   | `! Exp` |
| ------- | ------- |
| `true`  | `false` |
| `false` | `true`  |

**Examples.**

``` rascal-shell
!true;
```

##### Boolean NoMatch

**Synopsis.**

Negated \[Boolean Match\] operator.

**Syntax.**

`Pat !:= Exp`

| `Pat`        | `Exp`   | `Pat !:= Exp` |
| ------------ | ------- | ------------- |
| \[Patterns\] | `value` | `bool`        |

Types

**Description.**

See [???](#pattern-Matching) for an introduction to pattern matching and [Patterns](#patterns) for a complete
description.

**Examples.**

``` rascal-shell
123 !:= 456;
[10, *n, 50] !:= [10, 20, 30, 40];
{10, *n, 50} !:= {40, 30, 30, 10};
```

##### Boolean Or

**Synopsis.**

The *or* operator on Boolean values.

**Syntax.**

`Exp1 || Exp2`

| `Exp1` | `Exp2` | `Exp1 \|\| Exp2` |
| ------ | ------ | ---------------- |
| `bool` | `bool` | `bool`           |

Types

**Description.**

The *or* operator on Boolean values defined as follows:

| `Exp1`  | `Exp2`  | `Exp1 \|\| Exp2` |
| ------- | ------- | ---------------- |
| `true`  | `true`  | `true`           |
| `true`  | `false` | `true`           |
| `false` | `true`  | `true`           |
| `false` | `false` | `false`          |

Boolean operators have *short circuit* semantics: only those operands are evaluated that are needed to compute the
result. In the case of the `||` operator, the result is `true` if `Exp1` evaluates to `true`, otherwise `Exp2` is
evaluated to determine the result.

Note that `||` will backtrack over its argument expressions until it can find an evaluation that is `true`, unless there
is none.

Variable assignments as a result of matching or generator expressions under a `||` are visible outside the context of
the operator, but only if the context is conditional, such as an if-then-else or a for loop. Note that it is statically
required that both sides of an `||` introduce the same variable names of the same type.

**Examples.**

``` rascal-shell
import IO;
false || true;
(i <- [1,2,3,4] && i % 2 == 0) || false
for ((i <- [1,2,3,4] && i % 2 == 0) || false)
  println("true for <i>");
```

### Constructor

**Synopsis.**

Constructors create values for user-defined datatypes (Algebraic Datatypes).

**Syntax.**

`Name ( Exp1, Exp2, …​ )`

| `Exp1` | `Exp2` | …​ | `Name ( Exp1, Exp2, …​ )`  |
| ------ | ------ | -- | -------------------------- |
| `T1`   | `T2`   | …​ | Depends on ADT declaration |

Types

**Description.**

In ordinary programming languages record types or classes exist to introduce a new type name for a collection of
related, named, values and to provide access to the elements of such a collection through their name.

In Rascal, algebraic data types provide this facility. They have to be declared, see [Algebraic Data
Type](#ADT), and then values can be created using calls to the declared constructor
functions. The constructor *Name* should correspond (regarding name, arity and argument types) to one of the
alternatives in the ADT declaration.

First, the actual parameter expressions *Exp*<sub>i</sub> are evaluated resulting in values *V*<sub>i</sub>. Next, a
data value is constructed in accordance with the declared data type using the values *V*<sub>i</sub> as arguments for
the constructor. This data value is used as value of the constructor. Constructors are functions that can be used in all
contexts where functions can be used.

Observe that the syntax of a constructor is identical to the syntax of an function [Call](#call).

**Examples.**

First, define a datatype `WF` for word frequencies:

``` rascal-shell
data WF = wf(str word, int freq);
```

Then construct a new `WF` value by calling the constructor `wf` with appropriate arguments:

``` rascal-shell
wf("Rascal", 10000);
```

### DateTime

**Synopsis.**

Date and time values.

  - `$` `Date` `$`

  - `$` `Time` `$`

  - `$` `DateTime` `$`

**Types.**

`datetime`

**Description.**

Date, time, and datetime values are represented by the `datetime` type. `datetime` literals start with a `$` and are
made up of either a date, given in year, month, day of month order; a time, preceded by `T` and given in hour, minute,
second, millisecond, (optional) timezone offset order; or a datetime, which is a date and a time, in the orders given
above, and separated by a `T`.

The following fields provide access to information about the value, but cannot be set:

  - `isDate`: returns `true` if the value is a date value, `false` if the value is a datetime or time value.

  - `isTime`: returns `true` if the value is a time value, `false` if the value is a date or datetime value.

  - `isDateTime`: returns `true` if the value is a datetime value, `false` if the value is a date or time value.

  - `justTime`: returns the date component of a date or datetime value.

  - `justDate`: returns the time component of a time or datetime value.

  - `century`: returns the century component of a year for date or datetime values.

The following fields provide access to the individual components of date, time and datetime values, and can be accessed
using [DateTime Field Selection](#fieldselection) and be assigned using [DateTime Field
Selection](#fieldselection):

  - `year`

  - `month`

  - `day`

  - `hour`

  - `minute`

  - `second`

  - `millisecond`

  - `timezoneOffsetHours`

  - `timezoneOffsetMinutes`

Not all fields are available on all values as indicated by the following table:

| Field                   | `date` | `datetime` | `time` |
| ----------------------- | ------ | ---------- | ------ |
| `year`                  | x      | x          |        |
| `month`                 | x      | x          |        |
| `day`                   | x      | x          |        |
| `hour`                  |        | x          | x      |
| `minute`                |        | x          | x      |
| `second`                |        | x          | x      |
| `millisecond`           |        | x          | x      |
| `timezoneOffsetHours`   |        | x          | x      |
| `timezoneOffsetMinutes` |        | x          | x      |

The `isDate`, `isTime`, and `isDateTime` fields can be checked in advance to determine what kind of value is stored in a
variable of type `datetime`.

The following operators are defined for DateTime:

  - [DateTime Equal](#equal): Equality on datetime values.

  - [DateTime Field Selection](#fieldselection): Select a field from a datetime value.

  - [DateTime GreaterThan](#greaterthan): Greater than operator on datetime values.

  - [DateTime GreaterThanOrEqual](#greaterthanorequal): Greater than or equal operator on datetime values.

  - [DateTime LessThan](#lessthan): Less than operator on datetime values.

  - [DateTime LessThanOrEqual](#lessthanorequal): Less than or equal operator on datetime values.

  - [DateTime NotEqual](#notequal): Not equal operator on datetime values.

The following functions are defined for DateTime:

  - [DateTime Equal](#equal): Equality on datetime values.

  - [DateTime Field Selection](#fieldselection): Select a field from a datetime value.

  - [DateTime GreaterThan](#greaterthan): Greater than operator on datetime values.

  - [DateTime GreaterThanOrEqual](#greaterthanorequal): Greater than or equal operator on datetime values.

  - [DateTime LessThan](#lessthan): Less than operator on datetime values.

  - [DateTime LessThanOrEqual](#lessthanorequal): Less than or equal operator on datetime values.

  - [DateTime NotEqual](#notequal): Not equal operator on datetime values.

There are also [library functions](/docs/Libraries#datetime) available for DateTime.

**Examples.**

Examples of `datetime` values are:

``` rascal-shell
$2010-07-15$
$T07:15:23.123+0100$;
```

Now introduce a `datetime` value and assign it to `DT`.

``` rascal-shell
DT = $2010-07-15T09:15:23.123+03:00$;
```

Here are examples of some `datatime` fields:

``` rascal-shell
DT.isDateTime;
DT.justDate;
DT.justTime;
DT.century;
```

**Pitfalls.**

In normal parlance, the year 2010 is in the 21th century. The `century` field, however, just returns the century
component of a given year, e.g., for 2010 this is 20.

##### DateTime Equal

**Synopsis.**

Equality on datetime values.

**Syntax.**

`Exp1 == Exp2`

| `Exp1`     | `Exp2`     | `Exp1 == Exp2` |
| ---------- | ---------- | -------------- |
| `datetime` | `datetime` | `bool`         |

Types

**Description.**

Yields `true` if both arguments are identical `datetime` values and `false` otherwise.

**Examples.**

``` rascal-shell
$2010-07-15$ == $2010-07-15$;
$2010-07-15$ == $2010-07-14$;
```

##### DateTime Field Selection

**Synopsis.**

Select a field from a datetime value.

**Syntax.**

`Exp . Name`

| `Exp`      | `Name` | `Exp . Name`     |
| ---------- | ------ | ---------------- |
| `datetime` |        | depends on field |

Types

**Description.**

Field selection applies to `datetime` values. *Name* should be one of the supported fields listed in
[DateTime](#datetime) and returns the value of that field. Name stands for itself and is not evaluated.

##### DateTime GreaterThan

**Synopsis.**

Greater than operator on datetime values.

**Syntax.**

`Exp1 > Exp2`

| `Exp1`     | `Exp2`     | `Exp1 > Exp2` |
| ---------- | ---------- | ------------- |
| `datetime` | `datetime` | `bool`        |

Types

**Description.**

Yields `true` if the `datetime` value of *Exp*<sub>1</sub> is later in time than the `datetime` value of
*Exp*<sub>2</sub>, and `false` otherwise.

**Examples.**

``` rascal-shell
$2010-07-15$ > $2010-07-14$;
$2011-07-15$ > $2010-07-15$;
```

##### DateTime GreaterThanOrEqual

**Synopsis.**

Greater than or equal operator on datetime values.

**Syntax.**

`Exp1 >= Exp2`

| `Exp1`     | `Exp2`     | `Exp1 >= Exp2` |
| ---------- | ---------- | -------------- |
| `datetime` | `datetime` | `bool`         |

Types

**Description.**

Yields `true` if the `datetime` value of *Exp*<sub>1</sub> is later in time than the `datetime` value of
*Exp*<sub>2</sub> or if both values are equal, and `false` otherwise.

**Examples.**

``` rascal-shell
$2011-07-15$ >= $2010-07-15$;
$2010-07-15$ >= $2010-07-14$;
```

##### DateTime LessThan

**Synopsis.**

Less than operator on datetime values.

**Syntax.**

`Exp1 < Exp2`

| `Exp1`     | `Exp2`     | `Exp1 < Exp2` |
| ---------- | ---------- | ------------- |
| `datetime` | `datetime` | `bool`        |

Types

**Description.**

Yields `true` if the `datetime` value of *Exp*<sub>1</sub> is earlier in time than the `datetime` value of
*Exp<sub>2</sub>*, and `false` otherwise.

**Examples.**

``` rascal-shell
$2010-07-14$ < $2010-07-15$;
$2011-07-15$ < $2010-07-14$;
```

##### DateTime LessThanOrEqual

**Synopsis.**

Less than or equal operator on datetime values.

**Syntax.**

`Exp1 ⇐ Exp2`

| `Exp1`     | `Exp2`     | `Exp1 ⇐ Exp2` |
| ---------- | ---------- | ------------- |
| `datetime` | `datetime` | `bool`        |

Types

**Description.**

Yields `true` if the `datetime` value of *Exp*<sub>1</sub> is earlier in time than the `datetime` value of
*Exp*<sub>2</sub> or if the values of *Exp*<sub>1</sub> and *Exp*<sub>2</sub> are equal, and `false` otherwise.

**Examples.**

``` rascal-shell
$2010-07-15$ <= $2010-07-15$;
$2011-07-15$ <= $2010-07-14$;
```

##### DateTime NotEqual

**Synopsis.**

Not equal operator on datetime values.

**Syntax.**

`Exp1 != Exp2`

| `Exp1`     | `Exp2`     | `Exp1 != Exp2` |
| ---------- | ---------- | -------------- |
| `datetime` | `datetime` | `bool`         |

Types

**Description.**

Yields `true` if both arguments are different `datetime` values and `false` otherwise.

**Examples.**

``` rascal-shell
$2010-07-15$ != $2010-07-14$;
$2010-07-15$ != $2010-07-15$;
```

### Integer

**Synopsis.**

Integer values.

**Syntax.**

sequence of digits of arbitrary length.

**Types.**

`int`

**Description.**

The integer values are represented by the type `int` and are written as usual. They can be *arbitrarily large*.

See [Number](#number) for all operations and functions on integers, reals and numbers.

  - `12`

  - `0`

  - `-123456789`

### List

**Synopsis.**

List values.

**Syntax.**

`[ Exp1, Exp2, …​ ]`

| `Exp1` | `Exp2` | …​ | `[ Exp1, Exp2, …​ ]`     |
| ------ | ------ | -- | ------------------------ |
| `T1`   | `T2`   | …​ | `list[lub(T1, T2, …​ )]` |

Types

**Description.**

A list is an ordered sequence of values and has the following properties:

  - All elements have the same static type.

  - The order of the elements matters.

  - A list may contain an element more than once.

The type of a list has the form `list[T]`, where `T` is an arbitrary type.

When a value or variable of type list occurs inside a list, that list value is inserted as list element. To achieve
*splicing* of these elements, i.e., the insertion of the elements of the list value rather than the whole list, it has
to be prefixed by the splice operator `*`.

The following operators are provided on list:

  - [List Append](#append): Append an element at the end of a list.

  - [List Comprehension](#comprehension): A list comprehension generates a list value.

  - [List Concatenation](#concatenation): Concatenate two lists.

  - [List Difference](#difference): The difference between two lists.

  - [List Equal](#equal): Equality on lists.

  - [List Insert](#insert): add an element in front of a list.

  - [List Intersection](#intersection): Intersection of two lists.

  - [List NotEqual](#notequal): Not equal operator on lists.

  - [List Product](#product): Compute the product of two lists.

  - [List Slice](#slice): Retrieve a slice of a list.

  - [List Splice](#splice): Splice the elements of a list in an enclosing list.

  - [List StrictSubList](#strictsublist): The strict sublist operator on lists.

  - [List StrictSuperList](#strictsuperlist): The strict super list operator on lists.

  - [List SubList](#sublist): The sublist operator on lists.

  - [List Subscription](#subscription): Retrieve a list element via its index.

  - [List SuperList](#superlist): The super list operator on lists.

  - [List in](#in): Membership test on list elements.

  - [List notin](#notin): Negated membership test on lists.

There are also [library functions](/docs/Libraries#list) available for List.

**Examples.**

``` rascal-shell
[1, 2, 3];
[<1,10>, <2,20>, <3,30>];
[1, "b", 3];
[<"a",10>, <"b",20>, <"c",30>];
[["a", "b"], ["c", "d", "e"]];
```

List splicing works as follows: by prefixing `L` by the splice operator, its elements are included as elements in the
enclosing list:

``` rascal-shell
L = [1, 2, 3];
[10, L, 20];
[10, *L, 20];
```

##### List Append

**Synopsis.**

Append an element at the end of a list

| `Exp1`     | `Exp2` | `Exp1 + Exp2`      |
| ---------- | ------ | ------------------ |
| `list[T1]` | `T2`   | `list[lub(T1,T2)]` |

Types

**Description.**

The operator `+` appends an element at the end of a list. The `+` is one of those [Operators](#operators)
which are overloaded. It can also mean [List Insert](#insert) or [List Concatenation](#concatenation) for
example.

**Examples.**

``` rascal-shell
[] + 1;
[1] + 2;
```

  - If both operands of `+` are a list, then it acts as [List Concatenation](#concatenation)

This is concatenation:

``` rascal-shell
[1] + [2]
```

To append a list to a list, use extra brackets:

``` rascal-shell
[1] + [[2]]
```

##### List Comprehension

**Synopsis.**

A list comprehension generates a list value.

**Syntax.**

`[ Exp1, Exp2, …​ | Gen1, Gen2, …​ ]`

| `Exp1` | `Exp2` | …​ | `[ Exp1, Exp2, …​ \| Gen1, Gen2, …​ ]` |
| ------ | ------ | -- | -------------------------------------- |
| `T1`   | `T2`   | …​ | `list[ lub( T1, T2, …​ ) ]`            |

Types

**Description.**

A list comprehension consists of a number of contributing expressions *Exp*<sub>1</sub>, *Exp*<sub>2</sub>, …​ and a
number of generators *Gen*<sub>1</sub>, *Gen*<sub>2</sub>, *Gen*<sub>3</sub>, …​ that are evaluated as described in
[Comprehensions](#comprehensions).

**Examples.**

Computing a list of squares of the numbers from 0 to 10 that are divisible by 3:

``` rascal-shell
[n * n | int n <- [0 .. 10], n % 3 == 0];
```

But we can also include the relevant `n` in the resulting list:

``` rascal-shell
[n, n * n | int n <- [0 .. 10], n % 3 == 0];
```

##### List Concatenation

**Synopsis.**

Concatenate two lists.

**Syntax.**

`Exp1 + Exp2`

| `Exp1`     | `Exp2`     | `Exp1 + Exp2`      |
| ---------- | ---------- | ------------------ |
| `list[T1]` | `list[T2]` | `list[lub(T1,T2)]` |

Types

**Description.**

The `+` operator concatenates the elements of the two lists in order of appearance.

Note that the same operator is overloaded for [List Insert](#insert) and [List Append](#append).

**Examples.**

``` rascal-shell
[1, 2, 3] + [4, 5, 6];
[] + [1]
[1] + []
[1] + [2] + [3]
```

And overloaded usage for insert and append looks like:

``` rascal-shell
1 + []
[] + 1
```

##### List Difference

**Synopsis.**

The difference between two lists.

**Syntax.**

`Exp1 - Exp2`

| `Exp1`     | `Exp2`     | `Exp1 - Exp2`      |
| ---------- | ---------- | ------------------ |
| `list[T1]` | `list[T2]` | `list[lub(T1,T2)]` |
| `list[T1]` | `T2`       | `list[lub(T1,T2)]` |

Types

**Description.**

If both *Exp*<sub>1</sub> and *Exp*<sub>2</sub> have a list as value, the result is the difference of these two list
values. If *Exp*<sub>2</sub> does not have a list as value, it is first converted to a list before the difference is
computed. The difference is computed by taking the successive elements of the second list and removing the first
occurrence of that element in the first list.

**Examples.**

``` rascal-shell
[1, 2, 3, 4] - [1, 2, 3];
[1, 2, 3, 4] - [3];
[1, 2, 3, 4] - 3;
[1, 2, 3, 4] - [5, 6, 7];
[1, 2, 3, 1, 2, 3] - [1];
[1, 2, 3, 1, 2, 3] - [1, 2];
```

##### List Equal

**Synopsis.**

Equality on lists.

**Syntax.**

`Exp1 == Exp2`

| `Exp1`     | `Exp2`     | `Exp1 == Exp2` |
| ---------- | ---------- | -------------- |
| `list[T1]` | `list[T2]` | `bool`         |

Types

**Description.**

Yields `true` if both arguments are equal lists and `false` otherwise.

**Examples.**

``` rascal-shell
[1, 2, 3] == [1, 2, 3];
[1, 2, 3] == [3, 2, 1];
```

##### List Insert

**Synopsis.**

add an element in front of a list

| `Exp1` | `Exp2`     | `Exp1 + Exp2`      |
| ------ | ---------- | ------------------ |
| `T1`   | `list[T2]` | `list[lub(T1,T2)]` |

Types

**Description.**

The `+` operator can insert an element in front of a list. Note that `+` is one of the
[Operators](#operators) that is overloaded, it is also [List Concatenation](#concatenation) and [List
Append](#append) for example.

**Examples.**

``` rascal-shell
1 + []
1 + [2]
1 + [2,3]
```

  - If the first operand before the `+` is a list, `+` acts as [List Concatenation](#concatenation) and not as
    [List Insert](#insert)

This is concatenation:

``` rascal-shell
[1] + [2]
```

To insert a list as an element, use extra brackets:

``` rascal-shell
[[1]] + [2]
```

##### List Intersection

**Synopsis.**

Intersection of two lists.

**Syntax.**

`Exp1 & Exp2`

| `Exp1`     | `Exp2`     | `Exp1 & Exp2`      |
| ---------- | ---------- | ------------------ |
| `list[T1]` | `list[T2]` | `list[lub(T1,T2)]` |

Types

**Description.**

Returns the intersection of the two list values of *Exp*<sub>1</sub> and *Exp*<sub>2</sub>, i.e., the list value of
*Exp*<sub>1</sub> with all elements removed that do not occur in the list value of *Exp*<sub>2</sub>.

**Examples.**

``` rascal-shell
[1, 2, 3, 4, 5] & [4, 5, 6];
```

##### List NotEqual

**Synopsis.**

Not equal operator on lists.

**Syntax.**

`Exp1 != Exp2`

| `Exp1`     | `Exp2`     | `Exp1 != Exp2` |
| ---------- | ---------- | -------------- |
| `list[T1]` | `list[T2]` | `bool`         |

Types

**Description.**

Yields `true` if both arguments are unequal lists and `false` otherwise.

**Examples.**

``` rascal-shell
[1, 2, 3] != [3, 2, 1];
[1, 2, 3] != [1, 2, 3];
```

##### List Product

**Synopsis.**

Compute the product of two lists.

**Syntax.**

`Exp1 * Exp2`

| `Exp1`     | `Exp2`     | `Exp1 * Exp2`        |
| ---------- | ---------- | -------------------- |
| `list[T1]` | `list[T2]` | `list[tuple[T1,T2]]` |

Types

**Description.**

Yields a list of tuples resulting from the product of the values of *Exp*<sub>1</sub> and *Exp*<sub>2</sub>. It contains
a tuple for each combination of values from both arguments.

**Examples.**

``` rascal-shell
[1, 2, 3] * [4, 5, 6];
```

Here is a concise way to create a deck of cards:

``` rascal-shell
["clubs", "hearts", "diamonds", "spades"] * [1 .. 13];
```

##### List Slice

**Synopsis.**

Retrieve a slice of a list.

  - `Exp1 [ Exp2 .. Exp4]`

  - `Exp1 [ Exp2 , Exp3 .. Exp4]`

where *Exp*<sub>2</sub> and *Exp*<sub>4</sub> are optional.

| `Exp1`                                                   | `Exp2`     | `Exp3` | `Exp4` |
| -------------------------------------------------------- | ---------- | ------ | ------ |
| `Exp1 [ Exp2 .. Exp4 ]` or `Exp1 [ Exp2 , Exp3 .. Exp4]` | `list[T1]` | `int`  | `int`  |

Types

**Description.**

List slicing uses the integer values of *Exp*<sub>2</sub> and *Exp*<sub>4</sub> to determine the `begin` (**inclusive**)
and `end` (**exclusive**) of a slice from the list value *L* of *Exp*<sub>1</sub>. Negative indices count from the end
of the list backwards. Using the second form, an extra index *Exp*<sub>3</sub> is given that determines the index of the
second element in the slice and establishes the `step` between successive elements in the slice. The default `step` is
1. If `end` is smaller than `begin`, the slice is constructed backwards.

Let `Len` be the length of *L* and let *N*<sub>2</sub>, *N*<sub>3</sub> and *N*<sub>4</sub> be the respective values of
the expressions *Exp*<sub>2</sub>, *Exp*<sub>2</sub> and *Exp*<sub>2</sub> when they are present.

The slice parameters `begin`, `end`, and `step` are determined as follows:

  - *Exp<sub>2</sub>*:
    
      - If *Exp<sub>2</sub>* is absent, then `begin = 0`.
    
      - Otherwise, if *N<sub>2</sub>* \>= 0 then `begin = N2` else `begin = N2 + Len`.

  - *Exp<sub>4</sub>*:
    
      - If *Exp<sub>4</sub>* is absent, then `end = Len`.
    
      - Otherwise, if *N<sub>4</sub>* \>= 0, then `end = N4` else `end = N4 + Len`.

  - *Exp<sub>3</sub>*:
    
      - If *Exp<sub>3</sub>* is absent, then if `begin < end` then `step = 1` else `step = -1`.
    
      - Otherwise, if `begin < end`, then `step = N3 - begin` else `step = begin - N3`.

Now, the constraints `0 ⇐ begin < Len` and `0 < end < Len` should hold, otherwise the exception `IndexOutOfBounds` is
thrown.

The slice consists of the elements `L[begin]`, `L[begin+step]`, `L[end - step]`. When `begin >= end`, the elements are
listed in reverse order.

**Examples.**

Consider the list `L = [0, 10, 20, 30, 40, 50, 60, 70, 80];` as running example.

Here is a view on *L* that will help to correlate positive and negative indices:

| `i`    | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   |
| ------ | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `L[i]` | 0   | 10  | 20  | 30  | 40  | 50  | 60  | 70  | 80  |
| `-i`   | \-9 | \-8 | \-7 | \-6 | \-5 | \-4 | \-3 | \-2 | \-1 |

Some common use cases (with `begin` ⇐ `end`):

| Slice           | Means:                                                     |
| --------------- | ---------------------------------------------------------- |
| `L[begin..end]` | elements with indices `begin` through `end-1`              |
| `L[begin..]`    | elements with indices `begin` through the rest of the list |
| `L[..end]`      | elements with indices from the beginning through `end-1`   |
| `L[..]`         | the whole list                                             |
| `L[-1]`         | last element of the list                                   |
| `L[-2..]`       | the last two elements of the list                          |
| `L[..-2]`       | all elements except the last two.                          |

Let’s put this into practice now.

``` rascal-shell
L = [0, 10, 20, 30, 40, 50, 60, 70, 80];
```

Slices with begin \< end

``` rascal-shell
L[1..3];
L[1..];       // empty end => end of list
L[..3];       // empty begin => first element of list
L[..];        // both empty => whole list
```

Slices with begin \>= end

``` rascal-shell
L[3..1];      // slice contains elements with indices 3 and 2 (in that order)
L[3..3];      // empty slice when begin == end
```

Slices with negative begin or end:

``` rascal-shell
L[2..-2];     // equivalent to L[2..7]
L[2..7];
L[-4..-2];    // equivalent to L[5..7]
L[5..7];
```

Slices with an explicit second index:

``` rascal-shell
L[1,3..6];
L[5,3..];
```

Explore error cases:

``` rascal-shell
L[..10];
L[1..20];
```

##### List Splice

**Synopsis.**

Splice the elements of a list in an enclosing list.

| `Exp` | `Exp1` | `Expn` | `[Exp1, …​, Exp, …​, Expn]`   |
| ----- | ------ | ------ | ----------------------------- |
| `T`   | `T1`   | `Tn`   | `list[lub(T1, …​, T, …​,Tn)]` |

Types

**Description.**

The operator `*` splices the elements of a list in an enclosing list.

**Examples.**

Consider the following list in which the list `[10, 20, 30]` occurs as list element. It has as type `list[value]`:

``` rascal-shell
[1, 2, [10, 20, 30], 3, 4];
```

The effect of splicing the same list element in the enclosing list gives a flat list of type `list[int]`:

``` rascal-shell
[1, 2, *[10, 20, 30], 3, 4];
```

The same example can be written as:

``` rascal-shell
L = [10, 20, 30];
[1, 2, *L, 3, 4];
```

**Benefits.**

in which nested lists are handled.

##### List StrictSubList

**Synopsis.**

The strict sublist operator on lists.

**Syntax.**

`Exp1 < Exp2`

| `Exp1`     | `Exp2`     | `Exp1 < Exp2` |
| ---------- | ---------- | ------------- |
| `list[T1]` | `list[T2]` | `bool`        |

Types

**Description.**

Yields `true` if the value of *Exp*<sub>1</sub> is a strict sublist of the value of *Exp*<sub>2</sub>, and `false`
otherwise.

**Examples.**

``` rascal-shell
[1, 2, 3] < [1, 2, 3, 4];
[1, 2, 3, 4] < [1, 2, 3, 4];
[1, 3, 5] < [1, 2, 3, 4, 5]
```

##### List StrictSuperList

**Synopsis.**

The strict super list operator on lists.

**Syntax.**

`Exp1 > Exp2`

| `Exp1`     | `Exp2`     | `Exp1 > Exp2` |
| ---------- | ---------- | ------------- |
| `list[T1]` | `list[T2]` | `bool`        |

Types

**Description.**

Yields `true` if the value of *Exp*<sub>2</sub> is a strict sublist of the value of *Exp*<sub>1</sub>, and `false`
otherwise.

**Examples.**

``` rascal-shell
[1, 2, 3, 4] > [1, 2, 3];
[1, 2, 3, 4] > [1, 2, 3, 4];
[1, 2, 3, 4] > [1, 2, 3];
[1, 2, 3, 4, 5] > [1, 3, 5]
```

##### List SubList

**Synopsis.**

The sublist operator on lists.

**Syntax.**

`Exp1 ⇐ Exp2`

| `Exp1`     | `Exp2`     | `Exp1 ⇐ Exp2` |
| ---------- | ---------- | ------------- |
| `list[T1]` | `list[T2]` | `bool`        |

Types

**Description.**

Yields `true` if the value of *Exp*<sub>1</sub> is equal to or a sublist of the value of *Exp*<sub>2</sub>, and `false`
otherwise.

**Examples.**

``` rascal-shell
[1, 2, 3] <= [1, 2, 3, 4];
[1, 2, 3] <= [1, 2, 3];
[1, 3, 5] <= [1, 2, 3, 4, 5];
```

##### List Subscription

**Synopsis.**

Retrieve a list element via its index.

**Syntax.**

`Exp1 [ Exp2 ]`

| `Exp1`     | `Exp2` | `Exp1 [ Exp2 ]` |
| ---------- | ------ | --------------- |
| `list[T1]` | `int`  | `T1`            |

Types

**Description.**

List subscription uses the integer value of *Exp*<sub>2</sub> as index in the list value of *Exp*<sub>1</sub>. The value
of *Exp*<sub>2</sub> should be greater or equal 0 and less than the number of elements in the list. If this is not the
case, the exception `IndexOutOfBounds` is thrown.

**Examples.**

Introduce a list, assign it to L and retrieve the element with index 1:

``` rascal-shell
L = [10, 20, 30];
L[1];
```

Explore an error case:

``` rascal-shell
L[5];
```

##### List SuperList

**Synopsis.**

The super list operator on lists.

**Syntax.**

`Exp1 >= Exp2`

| `Exp1`     | `Exp2`     | `Exp1 >= Exp2` |
| ---------- | ---------- | -------------- |
| `list[T1]` | `list[T2]` | `bool`         |

Types

**Description.**

Yields `true` if the value of *Exp*<sub>2</sub> is equal to or a sublist of the value of *Exp*<sub>1</sub>, and `false`
otherwise.

**Examples.**

``` rascal-shell
[1, 2, 3, 4] >= [1, 2, 3];
[1, 2, 3, 4] >= [1, 2, 3, 4];
[1, 2, 3, 4] >= [1, 2, 3];
[1, 2, 3, 4, 5] >= [1, 3, 5]
```

##### List in

**Synopsis.**

Membership test on list elements.

**Syntax.**

`Exp1 in Exp2`

| `Exp1`        | `Exp2`     | `Exp1 in Exp2` |
| ------------- | ---------- | -------------- |
| `T1` \<: `T2` | `list[T2]` | `bool`         |

Types

**Description.**

Yields `true` if the value of *Exp*<sub>1</sub> occurs as element in the value of *Exp*<sub>2</sub> and `false`
otherwise. The type of *Exp*<sub>1</sub> should be compatible with the element type of *Exp*<sub>2</sub>.

**Examples.**

``` rascal-shell
2 in [1, 2, 3];
4 in [1, 2, 3];
```

##### List notin

**Synopsis.**

Negated membership test on lists.

**Syntax.**

`Exp1 notin Exp2`

| `Exp1`        | `Exp2`     | `Exp1 notin Exp2` |
| ------------- | ---------- | ----------------- |
| `T1` \<: `T2` | `list[T2]` | `bool`            |

Types

**Description.**

Yields `true` if the value of *Exp*<sub>1</sub> does not occur as element in the value of *Exp*<sub>2</sub> and `false`
otherwise. The type of *Exp*<sub>1</sub> should be compatible with the element type of *Exp*<sub>2</sub>.

**Examples.**

``` rascal-shell
4 notin [1, 2, 3];
2 notin [1, 2, 3];
```

### ListRelation

**Synopsis.**

ListRelation values.

**Syntax.**

`[ < Exp11, Exp12, …​ > , < Exp21, Exp22, …​ > , …​ ]`

| `Exp11` | `Exp12` | …​ | `{ < Exp11, Exp12, …​ > , …​ }` |
| ------- | ------- | -- | ------------------------------- |
| `T1`    | `T2`    | …​ | `lrel[T1, T2, …​ ]`             |

Types

**Description.**

A list relation is a list of elements with the following property:

  - All elements have the same static tuple type.

ListRelations are thus nothing more than lists of tuples, but since they are used so often we provide a shorthand
notation for them. ListRelations are represented by the type `lrel[T1 L1, T2 L2, …​ ]`, where *T*<sub>1</sub>,
*T*<sub>2</sub>, …​ are arbitrary types and *L*<sub>1</sub>, *L*<sub>2</sub>, …​ are optional labels. It is a shorthand
for `list[tuple[T1 L1, T2 L2, …​ ]]`.

An n-ary list relation with m tuples is denoted by `[< E11, E12, …​, E1n>,< E21, E22, …​, E2n>, …​, < Em1, Em2, …​,
Emn>]`, where the *E*<sub>ij</sub> are expressions that yield the desired element type *T*<sub>i</sub>.

Since list relations are a form of list all operations (see [List](#list)) and functions (see
[???](#list)) are also applicable to relations.

The following additional operators are provided for list relations:

  - [ListRelation CartesianProduct](#cartesianproduct): Cartesian product of two list relation values.

  - [ListRelation Composition](#composition): Composition of two list relation values.

  - [ListRelation FieldSelection](#fieldselection): Select a field (column) from a list relation value.

  - [ListRelation Join](#join): Join two list relation values.

  - [ListRelation Reflexive Transitive Closure](#reflexivetransitiveclosure): The reflexive transitive
    closure of a binary list relation.

  - [ListRelation Subscription](#subscription): Indexing of a list relation via tuple values.

  - [ListRelation Transitive Closure](#transitiveclosure): Transitive closure on binary list relation
    values.

There are also [library functions](/docs/Libraries#listrelation) available for ListRelation.

**Examples.**

``` rascal-shell
[<1,10>, <2,20>, <3,30>]
```

instead of lrel\[int,int\] we can also give `list[tuple[int,int]]` as type of the above expression remember that these
types are interchangeable.

``` rascal-shell
[<"a",10>, <"b",20>, <"c",30>]
[<"a", 1, "b">, <"c", 2, "d">]
```

##### ListRelation CartesianProduct

**Synopsis.**

Cartesian product of two list relation values.

**Syntax.**

`Exp1 * Exp2`

| `Exp1`     | `Exp2`     | `Exp1 * Exp2`  |
| ---------- | ---------- | -------------- |
| `list[T1]` | `list[T2]` | `lrel[T1, T2]` |

Types

**Description.**

Returns a binary relation that is the [Cartesian product](http://en.wikipedia.org/wiki/Cartesian_product) of two lists.

**Examples.**

``` rascal-shell
[1, 2, 3] * [9];
[1, 2, 3] * [10, 11];
```

##### ListRelation Composition

**Synopsis.**

Composition of two list relation values.

**Syntax.**

`Exp1 o Exp2`

| `Exp1`         | `Exp2`         | `Exp1 o Exp2`  |
| -------------- | -------------- | -------------- |
| `lrel[T1, T2]` | `lrel[T2, T3]` | `lrel[T1, T3]` |

Types

**Description.**

Returns the composition of two binary list relations.

**Examples.**

``` rascal-shell
[<1,10>, <2,20>, <3,15>] o [<10,100>, <20,200>];
```

**Pitfalls.**

We use the letter `o` as operator and this may conflict other defined names.

##### ListRelation FieldSelection

**Synopsis.**

Select a field (column) from a list relation value.

**Syntax.**

`Exp . Name`

|       |                           |
| ----- | ------------------------- |
| `Exp` | `Exp . Name`              |
|       | `lrel[T1 L1, T2 L2, …​ ]` |

Types

**Description.**

*Exp* should evaluate to a list relation that has an *i*-th field label *L*<sub>i</sub> that is identical to *Name*.
Return a list with all values of that field. *Name* stands for itself and is not evaluated.

**Examples.**

``` rascal-shell
lrel[str street, int nm] R = [<"abc", 1>, <"abc", 2>, <"def", 4>, <"def", 5>];
R.street;
```

##### ListRelation Join

**Synopsis.**

Join two list relation values.

**Syntax.**

`Exp1 join Exp2`

| `Exp1`                      | `Exp2`                      | `Exp1 join Exp2`                               |
| --------------------------- | --------------------------- | ---------------------------------------------- |
| `lrel[ T11, T12, T13, …​ ]` | `lrel[ T21, T22, T23, …​ ]` | `lrel[ T11, T12, T13, …​, T21, T22, T23, …​ ]` |

Types

**Description.**

ListRelation resulting from the natural join of the list relation values of the two arguments. This list relation
contains tuples that are the result from concatenating the elements from both arguments.

**Examples.**

``` rascal-shell
[<1,2>, <10,20>] join [<2,3>];
[<1,2>] join [3, 4];
[<1,2>, <10,20>] join [<2,3>, <20,30>];
```

##### ListRelation Reflexive Transitive Closure

**Synopsis.**

The reflexive transitive closure of a binary list relation.

**Syntax.**

`Exp *`

| `Exp`          | `Exp *`        |
| -------------- | -------------- |
| `lrel[T1, T2]` | `lrel[T1, T2]` |

Types

**Description.**

Reflexive transitive closure is defined by repeated composition of a list relation. If we define for a given list
relation R:

  - R<sup>0</sup> = identity relation = `[<a, a>, <b, b> | <a, b> ← R]`

  - R<sup>1</sup> = R

  - R<sup>2</sup> = R o R

  - R<sup>3</sup> = R o R<sup>2</sup>

  - …​

then the reflexive transitive closure R\* can be defined in two ways: (also see [ListRelation Transitive
Closure](#transitiveclosure)):

  - R\* = R<sup>0</sup> + R<sup>1</sup> + R<sup>2</sup> + R<sup>3</sup> + …​

  - R\* = R<sup>0</sup> + R+

**Examples.**

``` rascal-shell
[<1,2>, <2,3>, <3,4>]*;
```

##### ListRelation Subscription

**Synopsis.**

Indexing of a list relation via tuple values.

  - `Exp0 [ Exp1, Exp2, …​ Expn]`

  - `Exp0 [ Exp1]`

###### Variant 1

| `Exp0`                | `Exp1` | `Exp2` | …​ | `Exp0 [ Exp1, Exp2, …​ ]` |
| --------------------- | ------ | ------ | -- | ------------------------- |
| `lrel[T1, T2, …​ Tm]` | `int`  | `int`  | …​ | `lrel[Tn, Tn+1, …​ Tm]`   |

Types

###### Variant 2

|        |                       |                 |
| ------ | --------------------- | --------------- |
| `Exp0` | `Exp1`                | `Exp0 [ Exp1 ]` |
|        | `lrel[T1, T2, …​ Tm]` | `list[T1]`      |

**Description.**

ListRelation resulting from subscription of a ListRelation *Exp*<sub>0</sub>.

###### Variant 1

Subscription with the index values of *Exp*<sub>1</sub>, *Exp*<sub>2</sub>, …​. The result is a ListRelation with all
tuples that have these index values as first elements with the index values removed from the tuple. If the resulting
tuple has only a single element, a list is returned instead of a relation. A wildcard `_` as index value matches all
possible values at that index position.

###### Variant 2

Subscription with a set of the index values of *Exp*<sub>1</sub>. The result is a ListRelation with all tuples that have
these index values as first element with the index values removed from the tuple.

**Examples.**

``` rascal-shell
R = [<1,10>, <2,20>, <1,11>, <3,30>, <2,21>];
R[1];
R[{1}];
R[{1, 2}];
RR = [<1,10,100>,<1,11,101>,<2,20,200>,<2,22,202>,
              <3,30,300>];
RR[1];
RR[1,_];
```

Introduce a relation with economic data and assign it to `GDP`:

``` rascal-shell
lrel[str country, int year, int amount] GDP =
[<"US", 2008, 14264600>, <"EU", 2008, 18394115>,
 <"Japan", 2008, 4923761>, <"US", 2007, 13811200>,
 <"EU", 2007, 13811200>, <"Japan", 2007, 4376705>];
```

and then retrieve the information for the index `"Japan"`:

``` rascal-shell
GDP["Japan"];
```

or rather for the indices `"Japan"` and `2008`:

``` rascal-shell
GDP["Japan", 2008];
```

##### ListRelation Transitive Closure

**Synopsis.**

Transitive closure on binary list relation values.

**Syntax.**

`Exp +`

| `Exp`          | `Exp +`        |
| -------------- | -------------- |
| `lrel[T1, T2]` | `lrel[T1, T2]` |

Types

**Description.**

Returns the transitive closure of a binary listrelation. Transitive closure is defined by repeated composition of a
relation. If we define for a given relation R:

  - R<sup>1</sup> = R

  - R<sup>2</sup> = R o R

  - R<sup>3</sup> = R o R<sup>2</sup>

  - …​

then the transitive closure R+ can be defined as

  - R+ = R<sup>1</sup> + R<sup>2</sup> + R<sup>3</sup> + …​

**Examples.**

``` rascal-shell
[<1,2>, <2,3>, <3,4>]+;
```

### Location

**Synopsis.**

(Source code) location values.

**Syntax.**

`| Uri | ( O, L, < BL, BC > , < EL,EC > )` where:

  - *Uri* is an arbitrary Uniform Resource Identifier (URI).

  - *O* and *L* are integer expressions giving the offset of this location to the begin of file, respectively, its
    length.

  - *BL* and *BC* are integers expressions giving the begin line and begin column.

  - *EL* and *EC* are integers expressions giving the end line and end column.

The part following the second pipe symbol (`|`) is optional.

**Types.**

`loc`

**Description.**

Location values are represented by the type `loc` and serve the following purposes:

  - Providing a uniform mechanism for accessing local or remote files. This is used in all IO-related library functions.

  - If the optional part is present they serve as text coordinates in a specific local or remote source file. This is
    very handy to associate a source code location which extracted facts.

URIs are explained in [Uniform Resource Identifier](http://en.wikipedia.org/wiki/Uniform_Resource_Identifier). From
their original definition in RFC3986 we cite the following useful overview of an URI:

``` rascal
         foo://example.com:8042/over/there?name=ferret#nose
         \_/   \______________/\_________/ \_________/ \__/
          |           |            |            |        |
       scheme     authority       path        query   fragment
          |   _____________________|__
         / \ /                        \
         urn:example:animal:ferret:nose
```

The elements of a location value can be accessed and modified using the standard mechanism of field selection and field
assignment. The corresponding field names are:

  - `top`: the URI of the location without precise positioning information (offset, length, begin, end).

  - `uri`: the URI of the location as a string. Also subfields of the URI can be accessed:
    
      - `scheme`: the scheme (or protocol) to be used;
    
      - `authority`: the domain where the data are located, as a `str`;
    
      - `host`: the host where the URI is hosted (part of authority), as a `str`;
    
      - `port`: port on host (part of authority), as a `int`;
    
      - `path`: path name of file on host, as a `str`;
    
      - `extension`: file name extension, as a `str`;
    
      - `query`: query data, as a `str`;
    
      - `fragment`: the fragment name following the path name and query data, as a `str`;
    
      - `user`: user info (only present in schemes like mailto), as a `str`;
    
      - `parent` : removes the last segment from the path component, if any, as a `loc`;
    
      - `file` : the last segment of the path, as a `str`;
    
      - `ls` : the contents of a directory, if the loc is a directory, as a `list[loc]`.

  - `offset`: start of text area.

  - `length`: length of text area.

  - `begin.line`, `begin.column`: begin line and column of text area.

  - `end.line`, `end.column` end line and column of text area.

Supported protocols are:

| Scheme name and pattern                        | Description                                                                         |
| ---------------------------------------------- | ----------------------------------------------------------------------------------- |
| `http://host:_port_/path?query#fragment`       | access a remote file via the web.                                                   |
| `file:///path`                                 | access a local file on the file system.                                             |
| `cwd:///path`                                  | access the current working directory (the directory from which Rascal was started). |
| `home:///path`                                 | access the home directory of the user.                                              |
| `std:///path`                                  | access the Rascal standard library.                                                 |
| `tmp:///path`                                  | access the temporay file directory.                                                 |
| `jar:_url_!/[entry]`                           | access any entry in a zip file (or a jar)                                           |
| `rascal://qualifiedModulename`                 | access the source code of a Rascal module name                                      |
| `project://projectName/projectRelativePath`    | access a project in the current instance of Eclipse.                                |
| `bundleresource://bundleId/bundleRelativePath` | access OSGI bundles. Only active in Eclipse context                                 |

**Examples.**

Locations with specific position information should always be generated automatically but for the curious here is an
example:

``` rascal-shell
|file:///home/paulk/pico.trm|(0,1,<2,3>,<4,5>)
```

Note that this is equivalent to using the `home` scheme:

``` rascal-shell
|home://pico.trm|(0,1,<2,3>,<4,5>)
```

You could read a webpage:

``` rascal-shell
import IO;
println(readFile(|http://www.example.org|))
```

Addition on locations creates longer paths:

``` rascal-shell
x = |tmp://myTempDirectory|;
x += "myTempFile.txt";
```

##### Location AddSegment

**Synopsis.**

Locations can be concatenated with strings to add segments to the path component

**Syntax.**

`Loc + Str`

| `Loc` | `Str` | `Loc + Str` |
| ----- | ----- | ----------- |
| `loc` | `str` | `loc`       |

Types

**Description.**

Adds a segment to the path component of a location. This concatenation introduces a path separator (`/`) automatically.

**Examples.**

``` rascal-shell
|tmp:///myDir| + "myFile";
```

To get the original back, you can use the `parent` field:

``` rascal-shell
(|tmp:///myDir| + "myFile").parent
```

##### Location Equal

**Synopsis.**

Equality operator on locations.

**Syntax.**

`Exp1 == Exp2`

| `Exp1` | `Exp2` | `Exp1 == Exp2` |
| ------ | ------ | -------------- |
| `loc`  | `loc`  | `bool`         |

Types

**Description.**

Yields `true` if both arguments are identical and `false` otherwise.

##### Location FieldSelection

**Synopsis.**

Field selection on locations.

**Syntax.**

`Exp . Name`

| `Exp` | `Name` | `Exp . Name`     |
| ----- | ------ | ---------------- |
| `loc` |        | Depends on field |

Types

**Description.**

Field selection applies to locations. *Name* should be one of the supported fields listed in
[Location](#location) and returns the value of that field. Name stands for itself and is not evaluated.

##### Location GreaterThan

**Synopsis.**

The greater than operator on location values.

**Syntax.**

`Exp1 > Exp2`

| `Exp1` | `Exp2` | `Exp1 > Exp2` |
| ------ | ------ | ------------- |
| `loc`  | `loc`  | `bool`        |

Types

**Description.**

Yields `true` if the location value of *Exp*<sub>1</sub> strictly textually encloses the location value of
*Exp*<sub>2</sub>, and `false` otherwise.

##### Location GreaterThanOrEqual

**Synopsis.**

The greater than or equal operator on location values.

**Syntax.**

`Exp1 >= Exp2`

| `Exp1` | `Exp2` | `Exp1 >= Exp2` |
| ------ | ------ | -------------- |
| `loc`  | `loc`  | `bool`         |

Types

**Description.**

Yields `true` if the location value of *Exp*<sub>1</sub> textually encloses the location value of *Exp*<sub>2</sub>, and
`false` otherwise.

##### Location LessThan

**Synopsis.**

The less than operator on location values.

**Syntax.**

`Exp1 < Exp2`

| `Exp1` | `Exp2` | `Exp1 < Exp2` |
| ------ | ------ | ------------- |
| `loc`  | `loc`  | `bool`        |

Types

**Description.**

Yields `true` if the location value of *Exp*<sub>1</sub> is strictly textually contained in the location value of
*Exp*<sub>2</sub>, and `false` otherwise.

##### Location LessThanOrEqual

**Synopsis.**

The less than or equal operator on location values.

**Syntax.**

`Exp1 ⇐ Exp2`

| `Exp1` | `Exp2` | `Exp1 ⇐ Exp2` |
| ------ | ------ | ------------- |
| `loc`  | `loc`  | `bool`        |

Types

**Description.**

Yields `true` if the location value of *Exp*<sub>1</sub> is textually contained in the location value of
*Exp*<sub>2</sub>, and `false` otherwise.

##### NotEqual

**Synopsis.**

The not equal operator on location values.

**Syntax.**

`Exp1 != Exp2`

| `Exp1` | `Exp2` | `Exp1 != Exp2` |
| ------ | ------ | -------------- |
| `loc`  | `loc`  | `bool`         |

Types

**Description.**

Yields `true` if both arguments are not identical and `false` otherwise.

### Map

**Synopsis.**

Map values.

**Syntax.**

`( KeyExp1 : ValExp1, KeyExp2 : ValExp2, …​ )`

| `KeyExp1` | `ValExp1` | `KeyExp2` | `ValExp2` | …​ | `( KeyExp1 : ValExp1, KeyExp2 : ValExp2, …​ )` |
| --------- | --------- | --------- | --------- | -- | ---------------------------------------------- |
| `TK1`     | `TV1`     | `TK2`     | `TV2`     | …​ | `map[lub(TK1, TK2, …​ ) , lub(TV1, TV2, …​ )]` |

Types

**Description.**

A map is a set of key/value pairs and has the following properties:

  - Key and value may have different static types.

  - A key can only occur once.

Maps resemble functions rather than relations in the sense that only a single value can be associated with each key.

The following functions are provided for maps:

  - [Map Composition](#composition): Composition of two map values.

  - [Map Comprehension](#comprehension): A map comprehension generates a map value.

  - [Map Difference](#difference): The difference between two maps.

  - [Map Equal](#equal): Equality operator on maps.

  - [Map Intersection](#intersection): Intersection of two maps.

  - [Map NotEqual](#notequal): Not equal operator on map values.

  - [Map StrictSubMap](#strictsubmap): Strict submap operator on map values.

  - [Map StrictSuperMap](#strictsupermap): Strict supermap operator on map values.

  - [Map SubMap](#submap): Submap operator on map values.

  - [Map Subscription](#subscription): Retrieve a value by its key in map.

  - [Map SuperMap](#supermap): Supermap operator on map values.

  - [Map Union](#union): Union of two maps.

  - [Map in](#in): Membership test on the keys of a map.

  - [Map notin](#notin): Negated membership test on the keys of a map.

**Examples.**

``` rascal-shell
("pear" : 1, "apple" : 3, "banana" : 0);
```

##### Map Composition

**Synopsis.**

Composition of two map values.

**Syntax.**

`Exp1 o Exp2`

| `Exp1`        | `Exp2`        | `Exp1 o Exp2` |
| ------------- | ------------- | ------------- |
| `map[T1, T2]` | `map[T2, T3]` | `map[T1, T3]` |

Types

**Description.**

Returns the composition of two maps.

**Examples.**

``` rascal-shell
import Map;
("one" : 1, "two" : 2) o (1 : 10, 2 : 20);
```

**Pitfalls.**

We use the letter `o` as operator and this may conflict other defined names.

##### Map Comprehension

**Synopsis.**

A map comprehension generates a map value.

**Syntax.**

`( Exp1 : Exp2 | Gen1, Gen2, …​ )`

| `Exp1` | `Exp2` | `( Exp1 : Exp2 \| Gen1, Gen2, …​ )` |
| ------ | ------ | ----------------------------------- |
| `T1`   | `T2`   | `map[T1, T2]`                       |

Types

**Description.**

A map comprehension consists of a number of two contributing expressions *Exp*<sub>1</sub> (for key values), and
*Exp*<sub>2</sub> (the values associated with those key values) and a number of generators *Gen*<sub>1</sub>,
*Gen*<sub>2</sub>, *Gen*<sub>3</sub>, …​ that are evaluated as described in
[Comprehensions](#comprehensions).

**Examples.**

``` rascal-shell
```

Introduce a map of `fruits`:

``` rascal-shell
fruits = ("pear" : 1, "apple" : 3, "banana" : 0, "berry" : 25, "orange": 35);
import String;
```

Use a map comprehension to filter fruits with a name of at most 5 characters:

``` rascal-shell
(fruit : fruits[fruit] | fruit <- fruits, size(fruit) <= 5);
```

Use a map comprehension to filter fruits with an associated value larger than 10:

``` rascal-shell
(fruit : fruits[fruit] | fruit <- fruits, fruits[fruit] > 10);
```

##### Map Difference

**Synopsis.**

The difference between two maps.

**Syntax.**

`Exp1 - Exp2`

| `Exp1`          | `Exp2`          | `Exp1 - Exp2`                    |
| --------------- | --------------- | -------------------------------- |
| `map[TK1, TV1]` | `map[TK2, TV2]` | `map[lub(TK1,TK2),lub(TK1,TK2)]` |

Types

**Description.**

The result is the difference of the two map values of *Exp*<sub>1</sub> and *Exp*<sub>2</sub>, i.e. a map with all pairs
in *Exp*<sub>1</sub> that do have a key that does not occur in *Exp*<sub>2</sub>.

**Examples.**

``` rascal-shell
("apple": 1, "pear": 2) - ("banana": 3, "apple": 4);
```

##### Map Equal

**Synopsis.**

Equality operator on maps.

**Syntax.**

`Exp1 == Exp2`

| `Exp1`         | `Exp2`          | `Exp1 == Exp2` |
| -------------- | --------------- | -------------- |
| `map[TK1,TV2]` | `map[TK2, TV2]` | `bool`         |

Types

**Description.**

Yields `true` if both arguments contain the same key/value pairs, and `false` otherwise.

**Examples.**

``` rascal-shell
("apple": 1, "pear": 2) == ("pear": 2, "apple": 1);
("apple": 1, "pear": 2) == ("apple": 1, "banana": 3)
```

##### Map Intersection

**Synopsis.**

Intersection of two maps.

**Syntax.**

`Exp1 & Exp2`

| `Exp1`          | `Exp2`    | `Exp1 & Exp2`     |
| --------------- | --------- | ----------------- |
| `map[T11, T12]` | `set[T2]` | `set[lub(T1,T2)]` |

Types

**Description.**

Returns the intersection of the two map values of *Exp*<sub>1</sub> and *Exp*<sub>2</sub>, i.e., a map that contains the
key/value pairs that occur in both maps.

**Examples.**

``` rascal-shell
("apple": 1, "pear": 2) & ("banana": 3, "apple": 1);
("apple": 1, "pear": 2) & ("banana": 3, "apple": 4);
```

##### Map NotEqual

**Synopsis.**

Not equal operator on map values.

**Syntax.**

`Exp1 != Exp2`

| `Exp1`         | `Exp2`          | `Exp1 != Exp2` |
| -------------- | --------------- | -------------- |
| `map[TK1,TV2]` | `map[TK2, TV2]` | `bool`         |

Types

**Description.**

Yields `true` if both arguments contain different key/value pairs, and `false` otherwise.

**Examples.**

``` rascal-shell
("apple": 1, "pear": 2) != ("apple": 1, "banana": 3);
("apple": 1, "pear": 2) != ("pear": 2, "apple": 1);
```

##### Map StrictSubMap

**Synopsis.**

Strict submap operator on map values.

**Syntax.**

`Exp1 < Exp2`

| `Exp1`         | `Exp2`          | `Exp1 < Exp2` |
| -------------- | --------------- | ------------- |
| `map[TK1,TV2]` | `map[TK2, TV2]` | `bool`        |

Types

**Description.**

Yields `true` if all key/value pairs in the map value of *Exp*<sub>1</sub> occur in the map value *Exp*<sub>2</sub> and
the values of *Exp*<sub>1</sub> and *EXp*<sub>2</sub> are not equal, and `false` otherwise.

**Examples.**

``` rascal-shell
("apple": 1, "pear": 2) < ("pear": 2, "apple": 1, "banana" : 3);
("apple": 1, "pear": 2) < ("apple": 1, "banana" : 3);
```

##### Map StrictSuperMap

**Synopsis.**

Strict supermap operator on map values.

**Syntax.**

`Exp1 > Exp2`

| `Exp1`         | `Exp2`          | `Exp1 > Exp2` |
| -------------- | --------------- | ------------- |
| `map[TK1,TV2]` | `map[TK2, TV2]` | `bool`        |

Types

**Description.**

Yields `true` if all key/value pairs in the map value of *Exp*<sub>2</sub> occur in the map value *Exp*<sub>1</sub> and
the values of *Exp*<sub>1</sub> and *EXp*<sub>2</sub> are not equal, and `false` otherwise.

**Examples.**

``` rascal-shell
("pear": 2, "apple": 1, "banana" : 3) > ("apple": 1, "pear": 2);
("apple": 1, "banana" : 3) > ("apple": 1, "pear": 2);
```

##### Map SubMap

**Synopsis.**

Submap operator on map values.

**Syntax.**

`Exp1 ⇐ Exp2`

| `Exp1`         | `Exp2`          | `Exp1 ⇐ Exp2` |
| -------------- | --------------- | ------------- |
| `map[TK1,TV2]` | `map[TK2, TV2]` | `bool`        |

Types

**Description.**

Yields `true` if all key/value pairs in the map value of *Exp*<sub>1</sub> occur in the map value *Exp*<sub>2</sub> or
the values of *Exp*<sub>1</sub> and *Exp*<sub>2</sub> are equal, and `false` otherwise.

**Examples.**

``` rascal-shell
("apple": 1, "pear": 2) <= ("pear": 2, "apple": 1);
("apple": 1, "pear": 2) <= ("pear": 2, "apple": 1, "banana" : 3);
("apple": 1, "pear": 2) <= ("apple": 1, "banana" : 3);
```

##### Map Subscription

**Synopsis.**

Retrieve a value by its key in map.

**Syntax.**

`Exp1 [ Exp2 ]`

| `Exp1`        | `Exp2` | `Exp1 [ Exp2 ]` |
| ------------- | ------ | --------------- |
| `map[T1, T2]` | `T1`   | `T2`            |

Types

**Description.**

Map subscription uses the value of *Exp*<sub>2</sub> as key in the map value of *Exp*<sub>1</sub> and returns the
associated value. If this key does not occur in the map, the exception `NoSuchKey` is thrown.

**Examples.**

``` rascal-shell
```

Introduce a map, assign it to `colors`, and retrieve the element with index `"trumps"`:

``` rascal-shell
colors = ("hearts":"red", "clover":"black",
          "trumps":"black", "clubs":"red");
colors["trumps"];
```

Explore some erroneous subscription expressions:

``` rascal-shell
colors[0];
colors["square"];
```

##### Map SuperMap

**Synopsis.**

Supermap operator on map values.

**Syntax.**

`Exp1 >= Exp2`

| `Exp1`         | `Exp2`          | `Exp1 >= Exp2` |
| -------------- | --------------- | -------------- |
| `map[TK1,TV2]` | `map[TK2, TV2]` | `bool`         |

Types

**Description.**

Yields `true` if all key/value pairs in the map value of *Exp*<sub>2</sub> occur in the map value *Exp*<sub>1</sub> or
the values of *Exp*<sub>1</sub> and *Exp*<sub>2</sub> are equal, and `false` otherwise.

**Examples.**

``` rascal-shell
("pear": 2, "apple": 1) >= ("apple": 1, "pear": 2);
("pear": 2, "apple": 1, "banana" : 3) >= ("apple": 1, "pear": 2);
("apple": 1, "banana" : 3) >= ("apple": 1, "pear": 2);
```

##### Map Union

**Synopsis.**

Union of two maps.

**Syntax.**

`Exp1 + Exp2`

| `Exp1`          | `Exp2`          | `Exp1 + Exp2`                     |
| --------------- | --------------- | --------------------------------- |
| `map[TK1, TV1]` | `map[TK2, TV2]` | `map[lub(TK1,TK2),lub(TK1,TK2) ]` |

Types

**Description.**

The result is the union of the two map values of *Exp*<sub>1</sub> and *Exp*<sub>2</sub>. If they have a pair with the
same key in common, that key will be associated in the union with the value associated with that key in
*Exp*<sub>2</sub>.

**Examples.**

``` rascal-shell
("apple": 1, "pear": 2) + ("banana": 3, "kiwi": 4);
("apple": 1, "pear": 2) + ("banana": 3, "apple": 4);
```

**Benefits.**

Map union is very suited for representing environment composition in interpreters.

##### Map in

**Synopsis.**

Membership test on the keys of a map.

**Syntax.**

`Exp1 in Exp2`

| `Exp1`        | `Exp2`        | `Exp1 in Exp2` |
| ------------- | ------------- | -------------- |
| `T1` \<: `TK` | `map[TK, TV]` | `bool`         |

Types

**Description.**

Yields `true` if the value of *Exp*<sub>1</sub> occurs as key in the map value of *Exp*<sub>2</sub> and `false`
otherwise. The type of *Exp*<sub>1</sub> should be compatible with the key type *TK* of *Exp*<sub>2</sub>.

**Examples.**

``` rascal-shell
"pear" in ("apple": 1, "pear": 2);
"pineapple" in ("apple": 1, "pear": 2);
```

##### Map notin

**Synopsis.**

Negated membership test on the keys of a map.

**Syntax.**

`Exp1 notin Exp2`

| `Exp1`        | `Exp2`        | `Exp1 notin Exp2` |
| ------------- | ------------- | ----------------- |
| `T1` \<: `TK` | `map[TK, TV]` | `bool`            |

Types

**Description.**

Yields `true` if the value of *Exp*<sub>1</sub> does not occur as key in the map value of *Exp*<sub>2</sub> and `false`
otherwise. The type of *Exp*<sub>1</sub> should be compatible with the key type *TK* of *Exp*<sub>2</sub>.

**Examples.**

``` rascal-shell
"pineapple" notin ("apple": 1, "pear": 2);
"pear" notin ("apple": 1, "pear": 2);
```

### Node

**Synopsis.**

Node values.

**Syntax.**

`Exp0 ( Exp1, Exp2, …​, FieldName1 = Expr~1, FieldName2 = _Expr~2, …​ )`

| `Exp0` | `Exp1`  | `Exp2`  | …​ | `Exp0 ( Exp1, Exp2, …​ )` |
| ------ | ------- | ------- | -- | ------------------------- |
| `str`  | `value` | `value` | …​ | `node`                    |

Types

**Description.**

Values of type `node` represent untyped trees and are constructed as follows:

  - the string value of *Exp<sub>0</sub>* is the node name;

  - zero or more expressions of type `value` are the node's children.

  - optionally, unordered named fields can be added as well.

The following are provided for nodes:

  - [Node Equal](#equal): Equal operator on node values.

  - [Node GreaterThan](#greaterthan): Greater than operator on node values.

  - [Node GreaterThanOrEqual](#greaterthanorequal): Greater than or equal operator on node values.

  - [Node LessThan](#lessthan): Less than operator on node values.

  - [Node LessThanOrEqual](#lessthanorequal): Less than or equal operator on node values.

  - [Node NotEqual](#notequal): Not equal operator on node values.

  - [Node Slice](#slice): Retrieve a slice of a node’s argument list.

  - [Node Subscription](#subscription): Retrieve an argument of a node via its index.

**Examples.**

A node with name "my\_node" and three arguments:

``` rascal-shell
"my_node"(1, true, "abc");
```

A nested node structure:

``` rascal-shell
"my_node1"(1, "my_node2"(3.5, ["a", "b", "c"]), true);
```

A node with named fields:

``` rascal-shell
"my_node2"(1,2,size=2,age=24);
```

  - nodes are untyped and can be used to quickly import untyped data into Rascal

  - pattern matching on nodes is quite expressive

<!-- end list -->

  - the lack of types at run-time makes pattern matching on node possibly inaccurate (you might match more than you
    think)

##### Node Equal

**Synopsis.**

Equal operator on node values.

**Syntax.**

`Exp1 == Exp2`

| `Exp1` | `Exp2` | `Exp1 == Exp2` |
| ------ | ------ | -------------- |
| `node` | `node` | `bool`         |

Types

**Description.**

Yields `true` if the node names of the values of *Exp*<sub>1</sub> and *Exp*<sub>2</sub> are equal and the children of
each node are pairwise equal, otherwise `false`.

**Examples.**

``` rascal-shell
"f"(1, "abc", true) == "f"(1, "abc", true);
"f"(1, "abc", true) == "f"(1, "def", true);
```

##### Node GreaterThan

**Synopsis.**

Greater than operator on node values.

**Syntax.**

`Exp1 > Exp2`

| `Exp1` | `Exp2` | `Exp1 > Exp2` |
| ------ | ------ | ------------- |
| `node` | `node` | `bool`        |

Types

**Description.**

Comparison on nodes is defined by a lexicographic ordering. Node `N = F(N1, …​, Nn)` is greater than node `N = G(M1, …​,
Mm)` when: \* *N* is not equal to *M*, and \* *F* is lexicographically greater than *G*, or *F* is equal to *G* and `n >
m`.

**Examples.**

``` rascal-shell
"g"(3) > "f"(10, "abc");
"f"(10, "abc") > "f"(10);
```

##### Node GreaterThanOrEqual

**Synopsis.**

Greater than or equal operator on node values.

**Syntax.**

`Exp1 >= Exp2`

| `Exp1` | `Exp2` | `Exp1 >= Exp2` |
| ------ | ------ | -------------- |
| `node` | `node` | `bool`         |

Types

**Description.**

Comparison on nodes is defined by a lexicographic ordering. Node `N = F(N1, …​, Nn)` is greater than or equal node `N =
G(M1, …​, Mm)` when: \* *N* is equal to *M*, or \* *F* is lexicographically greater than *G*, or *F* is equal to *G* and
`n > m`.

**Examples.**

``` rascal-shell
"g"(3) >= "f"(10, "abc");
"f"(10, "abc") >= "f"(10);
"f"(10, "abc") >= "f"(10, "abc");
```

##### Node LessThan

**Synopsis.**

Less than operator on node values.

**Syntax.**

`Exp1 < Exp2`

| `Exp1` | `Exp2` | `Exp1 < Exp2` |
| ------ | ------ | ------------- |
| `node` | `node` | `bool`        |

Types

**Description.**

Comparison on nodes is defined by a lexicographic ordering. Node `N = F(N1, …​, Nn)` is less than node `N = G(M1, …​,
Mm)` when: \* *N* is not equal to *M*, and \* *F* is lexicographically less than *G*, or *F* is equal to *G* and `n <
m`.

**Examples.**

``` rascal-shell
"f"(10, "abc") < "g"(3);
"f"(10) < "f"(10, "abc");
```

##### Node LessThanOrEqual

**Synopsis.**

Less than or equal operator on node values.

**Syntax.**

`Exp1 ⇐ Exp2`

| `Exp1` | `Exp2` | `Exp1 ⇐ Exp2` |
| ------ | ------ | ------------- |
| `node` | `node` | `bool`        |

Types

**Description.**

Comparison on nodes is defined by a lexicographic ordering. Node `N = F(N1, …​, Nn)` is less than or equal node `N =
G(M1, …​, Mm)` when: \* *N* is equal to *M*, or \* *F* is lexicographically less than *G*, or *F* is equal to *G* and `n
< m`.

**Examples.**

``` rascal-shell
"f"(10, "abc") <= "f"(10, "abc");
"f"(10) <= "f"(10, "abc");
```

##### Node NotEqual

**Synopsis.**

Not equal operator on node values.

**Syntax.**

`Exp1 != Exp2`

| `Exp1` | `Exp2` | `Exp1 != Exp2` |
| ------ | ------ | -------------- |
| `node` | `node` | `bool`         |

Types

**Description.**

Yields `true` if the node names of the values of *Exp*<sub>1</sub> and *Exp*<sub>2</sub> are unequal or any of the
children of each node is pairwise unequal, otherwise `true`.

**Examples.**

``` rascal-shell
"f"(1, "abc", true) != "g"(1, "abc", true);
"f"(1, "abc", true) != "f"(1, "abc", true);
```

##### Node Slice

**Synopsis.**

Retrieve a slice of a node’s argument list.

  - `Exp1 [ Exp2 .. Exp4]`

  - `Exp1 [ Exp2 , Exp3 .. Exp4]`

where *Exp*<sub>2</sub> and *Exp*<sub>4</sub> are optional.

| `Exp1` | `Exp2` | `Exp3` | `Exp4` | `Exp1 [ Exp2 .. Exp4 ]` or `Exp1 [ Exp2 , Exp3 .. Exp4]` |
| ------ | ------ | ------ | ------ | -------------------------------------------------------- |
| `node` | `int`  | `int`  | `int`  | `list[value]`                                            |

Types

**Description.**

A Node slice is similar to a list [List Slice](#slice) and uses the integer values of *Exp*<sub>2</sub> and
*Exp*<sub>4</sub> to determine the `begin` (**inclusive**) and `end` (**exclusive**) of a slice from the children of the
node value *ND* of *Exp*<sub>1</sub>. Negative indices count from the end of the list of children backwards. Using the
second form, an extra index *Exp*<sub>3</sub> is given that determines the index of the second element in the slice and
establishes the `step` between successive elements in the slice. The default `step` is 1. If `end` is smaller than
`begin`, the slice is constructed backwards.

Let `Len` be the number of children of *ND* and let *N*<sub>2</sub>, *N*<sub>3</sub> and *N*<sub>4</sub> be the
respective values of the expressions *Exp*<sub>2</sub>, *Exp*<sub>2</sub> and *Exp*<sub>2</sub> when they are present.

The slice parameters `begin`, `end`, and `step` are determined as follows:

  - *Exp<sub>2</sub>*:
    
      - If *Exp<sub>2</sub>* is absent, then `begin = 0`.
    
      - Otherwise, if *N<sub>2</sub>* \>= 0 then `begin = N2` else `begin = N2 + Len`.

  - *Exp<sub>4</sub>*:
    
      - If *Exp<sub>4</sub>* is absent, then `end = Len`.
    
      - Otherwise, if *N<sub>4</sub>* \>= 0, then `end = N4` else `end = N4 + Len`.

  - *Exp<sub>3</sub>*:
    
      - If *Exp<sub>3</sub>* is absent, then if `begin < end` then `step = 1` else `step = -1`.
    
      - Otherwise, if `begin < end`, then `step = N3 - begin` else `step = begin - N3`.

Now, the constraints `0 ⇐ begin < Len` and `0 < end < Len` should hold, otherwise the exception `IndexOutOfBounds` is
thrown.

The slice consists of the children `ND[begin]`, `ND[begin+step]`, `ND[end - step]`. When `begin >= end`, the elements
are listed in reverse order.

**Examples.**

Consider the list `ND = "f"(0, "abc", 20, false, 40, [3,4,5], 60, {"a", "b"}, 80);` as running example.

Here is a view on the children of *ND* that will help to correlate positive and negative indices:

| `i`     | 0   | 1       | 2    | 3       | 4    | 5         | 6    | 7            | 8    |
| ------- | --- | ------- | ---- | ------- | ---- | --------- | ---- | ------------ | ---- |
| `ND[i]` | `0` | `"abc"` | `20` | `false` | `40` | `[3,4,5]` | `60` | `{"a", "b"}` | `80` |
| `-i`    | \-9 | \-8     | \-7  | \-6     | \-5  | \-4       | \-3  | \-2          | \-1  |

Some common use cases (with `begin` ⇐ `end`):

| Slice            | Means:                                                                 |
| ---------------- | ---------------------------------------------------------------------- |
| `ND[begin..end]` | children with indices `begin` through `end-1`                          |
| `ND[begin..]`    | children with indices `begin` through the rest of the list of children |
| `ND[..end]`      | children with indices from the beginning through `end-1`               |
| `ND[..]`         | the whole list of children                                             |
| `ND[-1]`         | last child of the list of children                                     |
| `ND[-2..]`       | the last two children of the list of children                          |
| `ND[..-2]`       | all children except the last two.                                      |

Let’s put this into practice now.

``` rascal-shell
ND = "f"(0, "abc", 20, false, 40, [3,4,5], 60, {"a", "b"}, 80);
```

Slices with begin \< end

``` rascal-shell
ND[1..3];
ND[1..];       // empty end => end of list of children
ND[..3];       // empty begin => first child of list
ND[..];        // both empty => whole list of children
```

Slices with begin \>= end

``` rascal-shell
ND[3..1];      // slice contains children with indices 3 and 2 (in that order)
ND[3..3];      // empty slice when begin == end
```

Slices with negative begin or end:

``` rascal-shell
ND[2..-2];     // equivalent to ND[2..7]
ND[2..7];
ND[-4..-2];    // equivalent to ND[5..7]
ND[5..7];
```

Slices with an explicit second index:

``` rascal-shell
ND[1,3..6];
ND[5,3..];
```

Explore error cases:

``` rascal-shell
ND[..10];
ND[1..20];
```

##### Node Subscription

**Synopsis.**

Retrieve an argument of a node via its index.

**Syntax.**

`Exp1 [ Exp2 ]`

| `Exp1` | `Exp2` | `Exp1 [ Exp2 ]` |
| ------ | ------ | --------------- |
| `node` | `int`  | `value`         |

Types

**Description.**

Node subscription uses the integer value of *Exp*<sub>2</sub> as index in the argument list of the node value of
*Exp*<sub>1</sub>. The value of *Exp*<sub>2</sub> should be greater or equal 0 and less than the number of arguments of
the node. If this is not the case, the exception `IndexOutOfBounds` is thrown.

**Examples.**

``` rascal-shell
```

Introduce a node, assign it to F and retrieve the various arguments:

``` rascal-shell
F = "f"(1, "abc", false);
F[0]
F[1]
F[2]
```

Explore an error case:

``` rascal-shell
F[3];
```

### Number

**Synopsis.**

Numeric values.

**Types.**

`int`, `real`, `num`

**Description.**

Numbers include integers (values of type `int`) and reals (values of type `real`). If both operands have the same type
(`int` or `real`) then the operator is the corresponding operator on integers or reals. Otherwise, integer arguments are
first converted to real and the real operator is applied.

The following operations are provided on numbers:

  - [Number Addition](#addition): Addition on numeric values.

  - [Number Conditional](#conditional): Conditional expression for numeric values.

  - [Number Division](#division): Division on numeric values.

  - [Number Equal](#equal): Equality operator on numeric values.

  - [Number GreaterThan](#greaterthan): Greater than operator on numeric values.

  - [Number GreaterThanOrEqual](#greaterthanorequal): Greater than or equal operator on numeric values.

  - [Number LessThan](#lessthan): Less than operator on numeric values.

  - [Number LessThanOrEqual](#lessthanorequal): Less than or equal operator on numeric values.

  - [Number Multiplication](#multiplication): Multiply two numeric values.

  - [Number Negation](#negation): Negate a numeric value.

  - [Number NotEqual](#notequal): Not equal operator on numeric values.

  - [Number Remainder](#remainder): Remainder of two integer values.

  - [Number Subtraction](#subtraction): Subtract two numeric values.

##### Number Addition

**Synopsis.**

Addition on numeric values.

**Syntax.**

`Exp1 + Exp2`

| `Exp1` | `Exp2` | `Exp1 + Exp2` |
| ------ | ------ | ------------- |
| `int`  | `int`  | `int`         |
| `int`  | `real` | `real`        |
| `real` | `real` | `real`        |

Types

**Description.**

Yields the numerical sum of the values of *Exp*<sub>1</sub> and *Exp*<sub>2</sub>.

**Examples.**

``` rascal-shell
12 + 13
12 + 13.5
```

##### Number Conditional

**Synopsis.**

Conditional expression for numeric values.

**Syntax.**

`Exp1 ? Exp2 : Exp3`

| `Exp1` | `Exp2` | `Exp3` | `Exp1 ? Exp2 : Exp3` |
| ------ | ------ | ------ | -------------------- |
| `bool` | `int`  | `int`  | `int`                |
| `bool` | `int`  | `real` | `real`               |
| `bool` | `real` | `real` | `real`               |

Types

**Description.**

If the value of *Exp* is `true` then the value of *Exp*<sub>1</sub> else the value of *Exp*<sub>2</sub>.

**Examples.**

``` rascal-shell
(3 > 2) ? 10 : 20
(3 > 20) ? 10 : 20
```

##### Number Division

**Synopsis.**

Division on numeric values.

**Syntax.**

`Exp1 / Exp2`

| `Exp1` | `Exp2` | `Exp1 / Exp2` |
| ------ | ------ | ------------- |
| `int`  | `int`  | `int`         |
| `int`  | `real` | `real`        |
| `real` | `real` | `real`        |

Types

**Description.**

Yields the result of dividing the value of *Exp<sub>1</sub>* by the value of *Exp<sub>2</sub>*.

**Examples.**

``` rascal-shell
12 / 3
10 / 3
12 / 3.0
10 / 3.0
12 / 0
```

##### Number Equal

**Synopsis.**

Equality operator on numeric values.

**Syntax.**

`Exp1 == Exp2`

| `Exp1` | `Exp2` | `Exp1 == Exp2` |
| ------ | ------ | -------------- |
| `int`  | `int`  | `bool`         |
| `int`  | `real` | `bool`         |
| `real` | `real` | `bool`         |

Types

**Description.**

Yields `true` if the value of both arguments is numerically equal, and `false` otherwise.

**Examples.**

``` rascal-shell
12 == 12
12 == 12.0
12 == 13
12 == 13.0
3.14 == 3.14
3.14 == 3
```

##### Number GreaterThan

**Synopsis.**

Greater than operator on numeric values.

**Syntax.**

`Exp1 > Exp2`

| `Exp1` | `Exp2` | `Exp1 > Exp2` |
| ------ | ------ | ------------- |
| `int`  | `int`  | `bool`        |
| `int`  | `real` | `bool`        |
| `real` | `real` | `bool`        |

Types

**Description.**

Yields `true` if the value of *Exp<sub>1</sub>* is numerically greater than the value of *Exp<sub>2</sub>*, and `false`
otherwise.

**Examples.**

``` rascal-shell
13 > 12
12 > 13
13.5 > 12
12.5 > 13
```

##### Number GreaterThanOrEqual

**Synopsis.**

Greater than or equal operator on numeric values.

**Syntax.**

`Exp1 >= Exp2`

| `Exp1` | `Exp2` | `Exp1 >= Exp2` |
| ------ | ------ | -------------- |
| `int`  | `int`  | `bool`         |
| `int`  | `real` | `bool`         |
| `real` | `real` | `bool`         |

Types

**Description.**

Yields `true` if the value of *Exp<sub>1</sub>* is numerically greater than or equal to the value of *Exp<sub>2</sub>*,
and `false` otherwise.

**Examples.**

``` rascal-shell
13 >= 12
12 >= 13
13.5 >= 12
12.5 >= 13
```

##### Number LessThan

**Synopsis.**

Less than operator on numeric values.

**Syntax.**

`Exp1 < Exp2`

| `Exp1` | `Exp2` | `Exp1 < Exp2` |
| ------ | ------ | ------------- |
| `int`  | `int`  | `bool`        |
| `int`  | `real` | `bool`        |
| `real` | `real` | `bool`        |

Types

**Description.**

Yields `true` if the value of *Exp<sub>1</sub>* is numerically less than the value of *Exp<sub>2</sub>*, and `false`
otherwise.

**Examples.**

``` rascal-shell
13 < 12
12 < 13
13.5 < 12
12.5 < 13
```

##### Number LessThanOrEqual

**Synopsis.**

Less than or equal operator on numeric values.

**Syntax.**

`Exp1 ⇐ Exp2`

| `Exp1` | `Exp2` | `Exp1 ⇐ Exp2` |
| ------ | ------ | ------------- |
| `int`  | `int`  | `bool`        |
| `int`  | `real` | `bool`        |
| `real` | `real` | `bool`        |

Types

**Description.**

Yields `true` if the value of *Exp<sub>1</sub>* is numerically less than or equal to the value of *Exp<sub>2</sub>*, and
`false` otherwise.

**Examples.**

``` rascal-shell
13 <= 12
12 <= 13
13.5 <= 12
12.5 <= 13
```

##### Number Multiplication

**Synopsis.**

Multiply two numeric values.

**Syntax.**

`Exp1 * Exp2`

| `Exp1` | `Exp2` | `Exp1 * Exp2` |
| ------ | ------ | ------------- |
| `int`  | `int`  | `int`         |
| `int`  | `real` | `real`        |
| `real` | `real` | `real`        |

Types

**Description.**

Yields the result of multiplying the values of *Exp<sub>1</sub>* and *Exp<sub>2</sub>*.

**Examples.**

``` rascal-shell
12 * 13
12 * 13.5
-12*13
```

##### Number Negation

**Synopsis.**

Negate a numeric value.

**Syntax.**

`- Exp`

| `Exp`  | `- Exp` |
| ------ | ------- |
| `int`  | `int`   |
| `real` | `real`  |

Types

**Description.**

Yields the negated values of *Exp*.

**Examples.**

``` rascal-shell
-12
-13.5
- -12
```

##### Number NotEqual

**Synopsis.**

Not equal operator on numeric values.

**Syntax.**

`Exp1 != Exp2`

| `Exp1` | `Exp2` | `Exp1 != Exp2` |
| ------ | ------ | -------------- |
| `int`  | `int`  | `bool`         |
| `int`  | `real` | `bool`         |
| `real` | `real` | `bool`         |

Types

**Description.**

Yields `true` if the value of both arguments is numerically unequal, and `false` otherwise.

**Examples.**

``` rascal-shell
12 != 13
12 != 12
12 != 13.0
12.0 != 13
3.14 != 3
3.14 != 3.14
```

##### Number Remainder

**Synopsis.**

Remainder of two integer values.

**Syntax.**

`Exp1 % Exp2`

| `Exp1` | `Exp2` | `Exp1 % Exp2` |
| ------ | ------ | ------------- |
| `int`  | `int`  | `int`         |

Types

**Description.**

Yields the remainder when dividing the of *Exp*<sub>1</sub> by the value of *Exp*<sub>2</sub>.

**Examples.**

``` rascal-shell
12 % 5
12 % 6
```

**Pitfalls.**

Remainder is only defined on integers:

``` rascal-shell
13.5 % 6
```

##### Number Subtraction

**Synopsis.**

Subtract two numeric values.

**Syntax.**

`Exp1 - Exp2`

| `Exp1` | `Exp2` | `Exp1 - Exp2` |
| ------ | ------ | ------------- |
| `int`  | `int`  | `int`         |
| `int`  | `real` | `real`        |
| `real` | `real` | `real`        |

Types

**Description.**

Yields the numerical result of subtracting the value of *Exp*<sub>2</sub> from the value of *Exp*<sub>1</sub>.

**Examples.**

``` rascal-shell
13 - 12
13.5 - 12
12 - 13
12 - 13.5
```

### Range

**Synopsis.**

Numeric range of values.

  - `[ Exp1 .. Exp3 ]`

  - `[ Exp1, Exp2 .. Exp3 ]`

**Description.**

Ranges are a shorthand for describing lists of integers from *Exp*<sub>1</sub> up to (exclusive) *Exp*<sub>3</sub> with
increments of 1. When *Exp*<sub>2</sub> is present it is taken as the second element of the list and *Exp*<sub>2</sub> -
*Exp*<sub>1</sub> is used as increment for the subsequent list elements.

A range with integer expressions is identical to a list [List Slice](#slice). However, a range may also contain
numeric expressions that are not integers.

**Examples.**

``` rascal-shell
[1 .. 10];
[1, 3 .. 10];
[0.5, 3.2 .. 10];
[1, -2 .. -10];
```

**Benefits.**

Ranges are mostly used to loop over ranges of integers.

**Pitfalls.**

In some cases ranges are empty where one could have expected at least one element:

``` rascal-shell
[1, 3 .. -10];
```

### Real

**Synopsis.**

Real values.

**Types.**

`real`

**Description.**

The real values are represented by the type `real` and are written as usual in most programming languages. They can have
*arbitrary size and precision*.

See [Number](#number) for all operations on integers, reals and numbers.

  - 1.5

  - 3.14e-123

### ReifiedTypes

**Synopsis.**

Types can be represented by values

**Description.**

The type reify expression operator has two functions in one go:

  - it transforms type literals into values that represent them (an isomorphic relation)

  - it reifies the declarations necessary to build values of the types as well

As a result a reified type can be used to reconstruct a type and the abstract ([Algebraic Data
Type](#ADT)) or concrete ([Syntax Definition](#definition)) grammar that
produced it.

Type literals have a nice interaction with [Type Parameters](#typeparameters), since they can be used to
bind a type parameter without having to provide a value of the type. An example is the [???](#parse) function in
[???](#parseTree) (see below for an example usage).

The values that are used to represent types are declared in the [???](#type) module and
[???](#parseTree) modules, namely `Symbol` is the data-type to represent types symbolically and
`Production` is the data-type for representing grammatical constructs.

A type literal wraps a `Symbol` and a map of \`Production\`s.

**Examples.**

First import the module `Type`:

``` rascal-shell
import Type;
```

Builtin types can be constructed without definitions, so the reified type representation is simple:

``` rascal-shell
#int
#list[int]
#rel[int from, int to]
```

to get the symbol from the reified type:

``` rascal-shell
#int.symbol
```

or we can use some definitions and reify the defined type to see a different behavior:

``` rascal-shell
data Nat = zero() | succ(Nat prev) | add(Nat l, Nat r) | mul(Nat l, Nat r);
#Nat
```

and we can get an abstract definition of the constructors of the \[AlgebraicDataType\]:

``` rascal-shell
import Type;
#Nat.definitions[adt("Nat",[])]
```

we could go the other way around and construct a type literal dynamically:

``` rascal-shell
type(\int(),())
type(\int(),()) == #int
```

we use type literals often in IO to express an expected type:

``` rascal-shell
import ValueIO;
int testInt = readTextValueString(#int, "1");
tuple[int,int] testTuple = readTextValueString(#tuple[int,int], "\<1,2\>");
```

  - Note that the type reify operator always produces constant values, because type literals are always constants.

### Relation

**Synopsis.**

Relation values.

**Syntax.**

`{ < Exp11, Exp12, …​ > , < Exp21, Exp22, …​ > , …​ }`

| `Exp11` | `Exp12` | …​ | `{ < Exp11, Exp12, …​ > , …​ }` |
| ------- | ------- | -- | ------------------------------- |
| `T1`    | `T2`    | …​ | `rel[T1, T2, …​ ]`              |

Types

**Description.**

A relation is a set of elements with the following property:

  - All elements have the same static tuple type.

Relations are thus nothing more than sets of tuples, but since they are used so often we provide a shorthand notation
for them. Relations are represented by the type `rel[T1 L1, T2 L2, …​ ]`, where *T*<sub>1</sub>, *T*<sub>2</sub>, …​ are
arbitrary types and *L*<sub>1</sub>, *L*<sub>2</sub>, …​ are optional labels. It is a shorthand for `set[tuple[T1 L1, T2
L2, …​ ]]`.

An n-ary relations with m tuples is denoted by `{< E11, E12, …​, E1n >,< E21, E22, …​, E2n >, …​, < Em1, Em2, …​, Emn
>}`, where the *E*<sub>ij</sub> are expressions that yield the desired element type *T*<sub>i</sub>.

Since relations are a form of set all operations (see [Set](#set)) and functions (see [???](#set)) are
also applicable to relations.

The following additional operators are provided for relations:

  - [Relation CartesianProduct](#cartesianproduct): Cartesian product of two relation values.

  - [Relation Composition](#composition): Composition of two relation values.

  - [Relation FieldSelection](#fieldselection): Select a field (column) from a relation value.

  - [Relation Join](#join): Join two relation values.

  - [Relation ReflexiveTransitiveClosure](#reflexivetransitiveclosure): The reflexive transitive closure of a
    binary relation.

  - [Relation Subscription](#subscription): Indexing of a relation via tuple values.

  - [Relation TransitiveClosure](#transitiveclosure): Transitive closure on binary relation values.

There are also [library functions](/docs/Libraries#relation) available for Relations.

**Examples.**

``` rascal-shell
{<1,10>, <2,20>, <3,30>}
```

instead of `rel[int,int]` we can also give `set[tuple[int,int]]` as type of the above expression remember that these
types are interchangeable.

``` rascal-shell
{<"a",10>, <"b",20>, <"c",30>}
{<"a", 1, "b">, <"c", 2, "d">}
```

##### Relation CartesianProduct

**Synopsis.**

Cartesian product of two relation values.

**Syntax.**

`Exp1 * Exp2`

| `Exp1`    | `Exp2`    | `Exp1 * Exp2` |
| --------- | --------- | ------------- |
| `set[T1]` | `set[T2]` | `rel[T1, T2]` |

Types

**Description.**

Returns a binary relation that is the [Cartesian product](http://en.wikipedia.org/wiki/Cartesian_product) of two sets.

**Examples.**

``` rascal-shell
{1, 2, 3} * {9};
{1, 2, 3} * {10, 11};
```

##### Relation Composition

**Synopsis.**

Composition of two relation values.

**Syntax.**

`Exp1 o Exp2`

| `Exp1`        | `Exp2`        | `Exp1 o Exp2` |
| ------------- | ------------- | ------------- |
| `rel[T1, T2]` | `rel[T2, T3]` | `rel[T1, T3]` |

Types

**Description.**

Returns the composition of two binary relations.

**Examples.**

``` rascal-shell
import Relation;
{<1,10>, <2,20>, <3,15>} o {<10,100>, <20,200>};
```

**Pitfalls.**

We use the letter `o` as operator and this may conflict other defined names.

##### Relation FieldSelection

**Synopsis.**

Select a field (column) from a relation value.

**Syntax.**

`Exp . Name`

| `Exp`                    | `Exp . Name` |
| ------------------------ | ------------ |
| `rel[T1 L1, T2 L2, …​ ]` | `set[Ti]`    |

Types

**Description.**

*Exp* should evaluate to a relation that has an *i*-th field label *L*<sub>i</sub> that is identical to *Name*. Return a
set with all values of that field. *Name* stands for itself and is not evaluated.

**Examples.**

``` rascal-shell
rel[str street, int nm] R = {<"abc", 1>, <"abc", 2>, <"def", 4>, <"def", 5>};
R.street;
```

##### Relation Join

**Synopsis.**

Join two relation values.

**Syntax.**

`Exp1 join Exp2`

| `Exp1`                     | `Exp2`                     | `Exp1 join Exp2`                              |
| -------------------------- | -------------------------- | --------------------------------------------- |
| `rel[ T11, T12, T13, …​ ]` | `rel[ T21, T22, T23, …​ ]` | `rel[ T11, T12, T13, …​, T21, T22, T23, …​ ]` |

Types

**Description.**

Relation resulting from the natural join of the relation values of the two arguments. This relation contains tuples that
are the result from concatenating the elements from both arguments.

**Examples.**

``` rascal-shell
{<1,2>, <10,20>} join {<2,3>};
{<1,2>} join {3, 4};
{<1,2>, <10,20>} join {<2,3>, <20,30>};
```

##### Relation ReflexiveTransitiveClosure

**Synopsis.**

The reflexive transitive closure of a binary relation.

**Syntax.**

`Exp *`

| `Exp`         | `Exp *`       |
| ------------- | ------------- |
| `rel[T1, T2]` | `rel[T1, T2]` |

Types

**Description.**

Reflexive transitive closure is defined by repeated composition of a relation. If we define for a given relation R:

  - R<sup>0</sup> = identity relation = `{<a, a>, <b, b> | <a, b> ← R}`

  - R<sup>1</sup> = R

  - R<sup>2</sup> = R o R

  - R<sup>3</sup> = R o R<sup>2</sup>

  - …​

then the reflexive transitive closure R\* can be defined in two ways: (also see [Relation
TransitiveClosure](#transitiveclosure)): \* R\* = R<sup>0</sup> + R<sup>1</sup> + R<sup>2</sup> + R<sup>3</sup>
+ …​ \* R\* = R<sup>0</sup> + R+

**Examples.**

``` rascal-shell
{<1,2>, <2,3>, <3,4>}*;
```

##### Relation Subscription

**Synopsis.**

Indexing of a relation via tuple values.

##### `Exp_0 [ Exp1, Exp2, …​ Expn]`

##### `Exp_0 [ Exp1]`

###### Variant 1

| `Exp_0`              | `Exp1` | `Exp2` | …​ | `Exp_0 [ Exp1, Exp2, …​ ]` |
| -------------------- | ------ | ------ | -- | -------------------------- |
| `rel[T1, T2, …​ Tm]` | `int`  | `int`  | …​ | `rel[Tn, Tn+1, …​ Tm]`     |

Types

###### Variant 2

| `Exp0`               | `Exp1`    | `Exp0 [ Exp1 ]`      |
| -------------------- | --------- | -------------------- |
| `rel[T1, T2, …​ Tm]` | `set[T1]` | `rel[T2, T2, …​ Tm]` |

**Description.**

Relation resulting from subscription of a relation *Exp*<sub>0</sub>.

###### Variant 1

Subscription with the index values of *Exp*<sub>1</sub>, *Exp*<sub>2</sub>, …​. The result is a relation with all tuples
that have these index values as first elements with the index values removed from the tuple. If the resulting tuple has
only a single element, a set is returned instead of a relation. A wildcard `_` as index value matches all possible
values at that index position.

###### Variant 2

Subscription with a set of the index values of *Exp*<sub>1</sub>. The result is a relation with all tuples that have
these index values as first element with the index values removed from the tuple.

**Examples.**

``` rascal-shell
R = {<1,10>, <2,20>, <1,11>, <3,30>, <2,21>};
R[1];
R[{1}];
R[{1, 2}];
RR = {<1,10,100>,<1,11,101>,<2,20,200>,<2,22,202>,
              <3,30,300>};
RR[1];
RR[1,_];
```

Introduce a relation with economic data and assign it to `GDP`:

``` rascal-shell
rel[str country, int year, int amount] GDP =
{<"US", 2008, 14264600>, <"EU", 2008, 18394115>,
 <"Japan", 2008, 4923761>, <"US", 2007, 13811200>,
 <"EU", 2007, 13811200>, <"Japan", 2007, 4376705>};
```

and then retrieve the information for the index `"Japan"`:

``` rascal-shell
GDP["Japan"];
```

or rather for the indices `"Japan"` and `2008`:

``` rascal-shell
GDP["Japan", 2008];
```

##### Relation TransitiveClosure

**Synopsis.**

Transitive closure on binary relation values.

**Syntax.**

`Exp +`

| `Exp`         | `Exp +`       |
| ------------- | ------------- |
| `rel[T1, T2]` | `rel[T1, T2]` |

Types

**Description.**

Returns the transitive closure of a binary relation. Transitive closure is defined by repeated composition of a
relation. If we define for a given relation R:

  - R<sup>1</sup> = R

  - R<sup>2</sup> = R o R

  - R<sup>3</sup> = R o R<sup>2</sup>

  - …​

then the transitive closure R+ can be defined as

  - R+ = R<sup>1</sup> + R<sup>2</sup> + R<sup>3</sup> + …​

**Examples.**

``` rascal-shell
{<1,2>, <2,3>, <3,4>}+;
```

We can also simply (but not necessarily efficiently) define transitive closure ourselves:

``` rascal-shell
rel[int,int] tclosure(rel[int,int] R) {
   tc = R;
   while(true){
      tc1 = tc;
      tc += tc o R;
      if(tc1 == tc)
         return tc;
   }
}
//tclosure({<1,2>, <2,3>, <3,4>});
```

### Set

**Synopsis.**

Set values.

**Syntax.**

`{ Exp1, Exp2, …​ }`

| `Exp1`          | `Exp2`          | …​ | `{ Exp1, Exp2, …​ }`                                |
| --------------- | --------------- | -- | --------------------------------------------------- |
| *T<sub>1</sub>* | *T<sub>2</sub>* | …​ | set\[ lub(*T<sub>1</sub>*, *T<sub>2</sub>*, …​ ) \] |

Types

**Description.**

A set is an unordered sequence of values and has the following properties:

  - All elements have the same static type.

  - The order of the elements does not matter.

  - A set contains an element only once. In other words, duplicate elements are eliminated and no matter how many times
    an element is added to a set, it will occur in it only once.

The type of a set has the form `set[T]`, where `T` is an arbitrary type.

When a value or variable of type set occurs inside a set, that set value is inserted as set element. To achieve splicing
of these elements, i.e., the insertion of the elements of the set value rather than the whole set, it has to be prefixed
by the splice operator `*`.

The following operators are provided on sets:

  - [Set Comprehension](#comprehension): A set comprehension generates a set value.

  - [Set Difference](#difference): The difference between two sets.

  - [Set Equal](#equal): Equal operator on set values.

  - [Set Insert](#insert): Add an element to a set.

  - [Set Intersection](#intersection): Intersection of two sets.

  - [Set NotEqual](#notequal): Not equal operator on set values.

  - [Set Product](#product): The product of two set values.

  - [Set Splice](#splice): Splice the elements of a set in an enclosing set.

  - [Set StrictSubSet](#strictsubset): Strict subset operator on set values.

  - [Set StrictSuperSet](#strictsuperset): Strict superset operator on set values.

  - [Set SubSet](#subset): Subset operator on set values.

  - [Set SuperSet](#superset): Superset operator on set values.

  - [Set Union](#union): Union of two set values.

  - [Set in](#in): Membership test on set values.

  - [Set notin](#notin): Negated membership test on set values.

There are also [library functions](/docs/Libraries#set) available for Sets. .Examples \#\# Set types

``` rascal-shell
{1, 2, 3};
{<1,10>, <2,20>, <3,30>};
{1, "b", 3};
{<"a", 10>, <"b", 20>, <"c", 30>}
{{"a", "b"}, {"c", "d", "e"}}
```

Note that

  - `{1, 2, 3}` and `{3, 2, 1}` are identical sets (since order is not relevant).

  - `{1, 2, 3}` and `{1, 2, 3, 1}` are also identical sets (since duplication is not relevant).

##### Set splicing

Introduce a set variable `S`

``` rascal-shell
S = {1, 2, 3};
```

and observe how the value of `S` is added as single element in another set:

``` rascal-shell
{10, S, 20};
```

or how its elements are added as elements to the other set:

``` rascal-shell
{10, *S, 20};
```

##### Set Comprehension

**Synopsis.**

A set comprehension generates a set value.

**Syntax.**

`{ Exp1, Exp2, …​ | Gen1, Gen2, …​ }`

| `Exp1` | `Exp2` | …​ | `{ Exp1, Exp2, …​ \| Gen1, Gen2, …​ }` |
| ------ | ------ | -- | -------------------------------------- |
| `T1`   | `T2`   | …​ | `set[ lub( T1, T2, …​ ) ]`             |

Types

**Description.**

A set comprehension consists of a number of contributing expressions *Exp*<sub>1</sub>, *Exp*<sub>2</sub>, …​ and a
number of generators *Gen*<sub>1</sub>, *Gen*<sub>2</sub>, *Gen*<sub>3</sub>, …​ that are evaluated as described in
[Comprehensions](#comprehensions).

**Examples.**

``` rascal-shell
{ N * N | int N <- [0 .. 10]};
{ N * N | int N <- [0 .. 10], N % 3 == 0};
```

##### Set Difference

**Synopsis.**

The difference between two sets.

**Syntax.**

`Exp1 - Exp2`

| `Exp1`    | `Exp2`    | `Exp1 - Exp2`     |
| --------- | --------- | ----------------- |
| `set[T1]` | `set[T2]` | `set[lub(T1,T2)]` |
| `set[T1]` | `T2`      | `set[lub(T1,T2)]` |

Types

**Description.**

If both *Exp*<sub>1</sub> and *Exp*<sub>2</sub> have a set as value, the result is the difference of these two set
values. If *Exp*<sub>2</sub> does not have a set as value, it is first converted to a set before the difference is
computed. The difference is computed by removing all elements of the second set from the first set.

**Examples.**

``` rascal-shell
{1, 2, 3, 4} - {1, 2, 3};
{1, 2, 3, 4} - {3};
{1, 2, 3, 4} - 3;
{1, 2, 3, 4} - {5, 6, 7};
```

##### Set Equal

**Synopsis.**

Equal operator on set values.

**Syntax.**

`Exp1 == Exp2`

| `Exp1`    | `Exp2`    | `Exp1 == Exp2` |
| --------- | --------- | -------------- |
| `set[T1]` | `set[T2]` | `bool`         |

Types

**Description.**

Yields `true` if both arguments are equal sets and `false` otherwise.

**Examples.**

``` rascal-shell
{1, 2, 3} == {3, 2, 1};
{1, 2, 3} == {1, 2};
```

##### Set Insert

**Synopsis.**

Add an element to a set.

**Syntax.**

`Exp1 + Exp2`

| `Exp1`    | `Exp2`    | `Exp1 + Exp2`     |
| --------- | --------- | ----------------- |
| `set[T1]` | `T2`      | `set[lub(T1,T2)]` |
| `T1`      | `set[T2]` | `set[lub(T1,T2)]` |

Types

**Description.**

The `+` operator will add elements to sets.

**Examples.**

``` rascal-shell
{1, 2, 3} + 4;
1 + { 2, 3, 4};
{1} + 1;
1 + {1};
```

  - if both operands of `+` are a set then it acts as [Set Union](#union).

##### Set Intersection

**Synopsis.**

Intersection of two sets.

**Syntax.**

`Exp1 & Exp2`

| `Exp1`    | `Exp2`    | `Exp1 & Exp2`     |
| --------- | --------- | ----------------- |
| `set[T1]` | `set[T2]` | `set[lub(T1,T2)]` |

Types

**Description.**

Returns the intersection of the two set values of *Exp*<sub>1</sub> and *Exp*<sub>2</sub>. The intersection consists of
the common elements of both sets.

**Examples.**

``` rascal-shell
{1, 2, 3, 4, 5} & {4, 5, 6};
```

##### Set NotEqual

**Synopsis.**

Not equal operator on set values.

**Syntax.**

`Exp1 != Exp2`

| `Exp1`    | `Exp2`    | `Exp1 != Exp2` |
| --------- | --------- | -------------- |
| `set[T1]` | `set[T2]` | `bool`         |

Types

**Description.**

Yields `true` if both arguments are unequal sets and `false` otherwise.

**Examples.**

``` rascal-shell
{1, 2, 3} != {3, 2, 1};
{1, 2, 3} != {1, 2};
```

##### Set Product

**Synopsis.**

The product of two set values.

**Syntax.**

`Exp1 * Exp2`

| `Exp1`    | `Exp2`    | `Exp1 * Exp2` |
| --------- | --------- | ------------- |
| `set[T1]` | `set[T2]` | `rel[T1,T2]`  |

Types

**Description.**

Yields a relation resulting from the product of the values of *Exp*<sub>1</sub> and *Exp*<sub>2</sub>. It contains a
tuple for each combination of values from both arguments.

**Examples.**

``` rascal-shell
{1, 2, 3} * {4, 5, 6};
```

A card deck can be created as follows:

``` rascal-shell
{"clubs", "hearts", "diamonds", "spades"} * {1,2,3,4,5,6,7,8,9,10,11,12,13};
```

##### Set Splice

**Synopsis.**

Splice the elements of a set in an enclosing set.

| `Exp` | `Exp1` | `Expn` | `{Exp1, …​, Exp, …​, Expn}`  |
| ----- | ------ | ------ | ---------------------------- |
| `T`   | `T1`   | `Tn`   | `set[lub(T1, …​, T, …​,Tn)]` |

Types

**Description.**

The operator `*` splices the elements of a set in an enclosing set.

**Examples.**

Consider the following set in which the set `{10, 20, 30}` occurs as set element. It has as type `set[value]`:

``` rascal-shell
{1, 2, {10, 20, 30}, 3, 4};
```

The effect of splicing the same set element in the enclosing set gives a flat list of type `set[int]`:

``` rascal-shell
{1, 2, *{10, 20, 30}, 3, 4};
```

The same example can be written as:

``` rascal-shell
S = {10, 20, 30};
{1, 2, *S, 3, 4};
```

##### Set StrictSubSet

**Synopsis.**

Strict subset operator on set values.

**Syntax.**

`Exp1 < Exp2`

| `Exp1`    | `Exp2`    | `Exp1 < Exp2` |
| --------- | --------- | ------------- |
| `set[T1]` | `set[T2]` | `bool`        |

Types

**Description.**

Yields `true` if the value of *Exp*<sub>1</sub> is a strict subset of the value of *Exp*<sub>2</sub>, and `false`
otherwise.

**Examples.**

``` rascal-shell
{1, 2, 3} < {1, 2, 3, 4};
{1, 2, 3} < {1, 3, 4};
{1, 2, 3} < {1, 2, 3};
```

##### Set StrictSuperSet

**Synopsis.**

Strict superset operator on set values.

**Syntax.**

`Exp1 > Exp2`

| `Exp1`    | `Exp2`    | `Exp1 > Exp2` |
| --------- | --------- | ------------- |
| `set[T1]` | `set[T2]` | `bool`        |

Types

**Description.**

Yields `true` if the value of *Exp*<sub>1</sub> is a strict superset of the value of *Exp*<sub>2</sub>, and `false`
otherwise.

**Examples.**

``` rascal-shell
{1, 2, 3, 4} > {3, 2, 1};
{1, 2, 3, 4} > {4, 3, 2, 1};
```

##### Set SubSet

**Synopsis.**

Subset operator on set values.

**Syntax.**

`Exp1 ⇐ Exp2`

| `Exp1`    | `Exp2`    | `Exp1 ⇐ Exp2` |
| --------- | --------- | ------------- |
| `set[T1]` | `set[T2]` | `bool`        |

Types

**Description.**

Yields `true` if the value of *SetExp*<sub>1</sub> is a subset of the value of *SetExp*<sub>2</sub>, and `false`
otherwise.

**Examples.**

``` rascal-shell
{1, 2, 3} <= {1, 2, 3, 4};
{1, 2, 3} <= {1, 2, 3};
```

##### Set SuperSet

**Synopsis.**

Superset operator on set values.

**Syntax.**

`Exp1 >= Exp2`

| `Exp1`    | `Exp2`    | `Exp1 >= Exp2` |
| --------- | --------- | -------------- |
| `set[T1]` | `set[T2]` | `bool`         |

Types

**Description.**

Yields `true` if the value of *Exp*<sub>1</sub> is a superset of the value of *Exp*<sub>2</sub> and `false` otherwise.

**Examples.**

``` rascal-shell
{1, 2, 3, 4} >= {3, 2, 1};
{1, 2, 3, 4} >= {4, 3, 2, 1};
```

##### Set Union

**Synopsis.**

Union of two set values.

| `Exp1`    | `Exp2`    | `Exp1 + Exp2`     |
| --------- | --------- | ----------------- |
| `set[T1]` | `set[T2]` | `set[lub(T1,T2)]` |

Types

**Description.**

The `+` operator computes set union if both operands are sets. If one of the operands is not a set, it acts as [Set
Insert](#insert) instead.

**Examples.**

``` rascal-shell
{1, 2, 3} + {4, 5, 6};
{1,2,3} + {2,3,4};
{1, 2, 3} + {3};
{2} + { 2, 3, 4};
```

##### Set in

**Synopsis.**

Membership test on set values.

**Syntax.**

`Exp1 in Exp2`

| `Exp1`        | `Exp2`    | `Exp1 in Exp2` |
| ------------- | --------- | -------------- |
| `T1` \<: `T2` | `set[T2]` | `bool`         |

Types

**Description.**

Yields `true` if the value of *Exp*<sub>1</sub> occurs as element in the value of *Exp*<sub>2</sub> and `false`
otherwise. The type of *Exp*<sub>1</sub> should be compatible with the element type of *Exp*<sub>2</sub>.

**Examples.**

``` rascal-shell
2 in {1, 2, 3};
4 in {1, 2, 3};
```

##### Set notin

**Synopsis.**

Negated membership test on set values.

**Syntax.**

`Exp1 notin Exp2`

| `Exp1`        | `Exp2`    | `Exp1 notin Exp2` |
| ------------- | --------- | ----------------- |
| `T1` \<: `T2` | `set[T2]` | `bool`            |

Types

**Description.**

Yields `true` if the value of *Exp*<sub>1</sub> does not occur as element in the value of *Exp*<sub>2</sub> and `false`
otherwise. The type of *Exp*<sub>1</sub> should be compatible with the element type of *Exp*<sub>2</sub>.

**Examples.**

``` rascal-shell
4 notin {1, 2, 3};
4 notin {1, 2, 3, 4};
```

### String

**Synopsis.**

String values.

**Syntax.**

`"StringChar1StringChar2…​"` where \`*StringChar<sub>i</sub>* may be one of the following:

  - *Ordinary character*: Any character except `<`, `>`, `"`, `'` or `\`.

  - *Escaped character*: Backslash `\` followed by any of `<`, `>`, `"`, `'` or `\` represents the escaped character
    itself. Other escape sequences that are supported are:
    
      - `\n`: newline
    
      - `\t`: tab
    
      - `\r`: carriage return
    
      - `\b`: backspace
    
      - `\f`: vertical feed
    
      - `\u hexDigit1 hexDigit2 hexDigit3 hexDigit4` : hexadecimal escapes with four digit indexes into UNICODE.
    
      - `\U hexDigit1 hexDigit2 hexDigit3 hexDigit4 hexDigit5 hexDigit6` : hexadecimal escapes with six digit indexes
        into UNICODE.
    
      - `\ a_hexDigit1_ hexDigit2`: hexadecimal escapes with 2 digit indexes into ASCII (0x0 …​ 0x7F).

  - *String Interpolation*:

| Form                                                               | Description                                                                                                     |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `<_Exp_>`                                                          | Interpolate the value of the expression as a string                                                             |
| `<if(Exp){> …​ StringChars …​ <}>`                                 | Conditional inclusion of *Text*, where *StringChars* may use variables introduced in *Exp*                      |
| `<if(Exp){> …​ StringChars1 …​ <} else {>  …​ StringChars2 …​ <}>` | Conditional inclusion of either *StringChars<sub>1</sub>* or *StringChars<sub>2</sub>*                          |
| `<for(Exp){>…​ StringChars …​ <}>`                                 | Iterative splicing of *StringChars* into the result, where *StringChars* may use variables introduced in *Exp*. |
| `<while(Exp){> …​ StringChars …​ <}>`                              | Iterative splicing of *StringChars* into the result, where *StringChars* may use variables introduced in *Exp*. |
| `<do {>…​ StringChars …​ <} while (Exp)>`                          | Iterative splicing of *StringChars* into the result, where *StringChars* may use variables introduced in *Exp*. |

  - *Multiline*:

| Form                                                        | Description                                                        |
| ----------------------------------------------------------- | ------------------------------------------------------------------ |
| \`*StringChars<sub>1</sub>*\\n *StringChars<sub>2</sub>* \` | Strings can be multi-line without an escape or continuation marker |
| `StringChars2\n '  StringChars2`                            | A margin character `'` indicates where the next line starts        |

**Types.**

`str`

**Description.**

The string values are represented by the type `str` and consist of character sequences surrounded by double quotes,
e.g., `"a"` or `"a\nlong\nstring"`.

*Multiline*: Strings may span more than one line. The margin character `'` indicates which part of a line will be
ignored. This is useful for indenting a multi-line string with the source code that generates it.

*Interpolation*: String literals support so-called *string interpolation*: inside string constants text between angle
brackets (`<` and `>`) is first executed and then replaced by its string value. Various statements (if, for, while, do)
also return a value and can be used in this way. In the interpolation variant of these statements the block or blocks
that are part of the statement become arbitrary text (that may itself contain interpolations).

*Auto-indent*: Expressions that get interpolated in a string will be auto-indented. This means that each line that
results from the evaluation of the expression is prefixed with the indentation level of the position of the expression
in the current string.

The following operators are defined for Strings:

  - [String Concatenation](#concatenation): Concatenate two strings.

  - [String Equal](#equal): Equality operator on string values.

  - [String GreaterThan](#greaterthan): Greater than operator on string values.

  - [String GreaterThanOrEqual](#greaterthanorequal): Greater than or equal operator on string values.

  - [String LessThan](#lessthan): Less than operator on string values.

  - [String LessThanOrEqual](#lessthanorequal): Less than or equal operator on string values.

  - [String NotEqual](#notequal): Not equal operator on string values.

  - [String Slice](#slice): Retrieve a slice of a string.

  - [String Subscription](#subscription): Retrieve a substring via its index.

There are also [library functions](/docs/Libraries#string) available for Strings.

**Examples.**

``` rascal-shell
N = 13;
"The value of N is <N>";
"The value of N*N is <N*N>";
"The value is <(N < 10) ? 10 : N*N>";
```

As you can see the string value of variables and expressions is interpolated in the result as expected. \<br\> Some
examples of more advances string interpolation

``` rascal-shell
"N is <if(N < 10){> small <} else {> large <}>";
"N is <if(N < 10){> small <} else {> large (<N>)<}>";
"before <for(x<-[1..5]){>a <x> b <}>after";
```

multi-line string

``` rascal-shell
import IO;
println("hello
this
  is
    new")
```

multi-line string with margin:

``` rascal-shell
if (true)
  println("this is
          'what
          '  margins
          'are good for
          ");
```

auto indent:

``` rascal-shell
str genMethod(str n) = "int <n>() {
                       '  return 0;
                       '}";
str genClass() = "class myClass {
                 '  <genMethod("myMethod")>
                 '}";
println(genClass());
```

**Benefits.**

String interpolation enables very flexible template-based text generation as used in generators for source code, markup
and the like.

##### String Concatenation

**Synopsis.**

Concatenate two strings.

**Syntax.**

`Exp1 + Exp2`

| `Exp1` | `Exp2` | `Exp1 + Exp2` |
| ------ | ------ | ------------- |
| `str`  | `str`  | `str`         |

Types

**Description.**

Concatenates the string values of *Exp*<sub>1</sub> and *Exp*<sub>2</sub>.

Note that to concatenate other types of values into a string, you can use [String](#string) interpolation.

**Examples.**

``` rascal-shell
"abc" + "def";
```

##### String Equal

**Synopsis.**

Equality operator on string values.

**Syntax.**

`Exp1 == Exp2`

| `Exp1` | `Exp2` | `Exp1 == Exp2` |
| ------ | ------ | -------------- |
| `str`  | `str`  | `bool`         |

Types

**Description.**

Yields `true` if both arguments are identical and `false` otherwise.

**Examples.**

``` rascal-shell
"abc" == "abc";
"abc" == "defghi";
```

##### String GreaterThan

**Synopsis.**

Greater than operator on string values.

**Syntax.**

`Exp1 > Exp2`

| `Exp1` | `Exp2` | `Exp1 > Exp2` |
| ------ | ------ | ------------- |
| `str`  | `str`  | `bool`        |

Types

**Description.**

Yields `true` if the string value of *Exp*<sub>1</sub> is strictly lexicographically greater than the string value of
*Exp*<sub>2</sub>, and `false` otherwise.

**Examples.**

``` rascal-shell
"abcdef" > "abc";
"defghi" > "abcdef";
"a" > "abc";
```

##### String GreaterThanOrEqual

**Synopsis.**

Greater than or equal operator on string values.

**Syntax.**

`Exp1 >= Exp2`

| `Exp1` | `Exp2` | `Exp1 >= Exp2` |
| ------ | ------ | -------------- |
| `str`  | `str`  | `bool`         |

Types

**Description.**

Yields `true` if the string value of *Exp*<sub>1</sub> is lexicographically greater than the string value of
*Exp*<sub>2</sub> or if both strings are equal, and `false` otherwise.

**Examples.**

``` rascal-shell
"abc" >= "abc";
"abcdef" >= "abc";
"defghi" >= "abcdef";
"a" >= "abc";
```

##### String LessThan

**Synopsis.**

Less than operator on string values.

**Syntax.**

`Exp1 < Exp2`

| `Exp1` | `Exp2` | `Exp1 < Exp2` |
| ------ | ------ | ------------- |
| `str`  | `str`  | `bool`        |

Types

**Description.**

Yields `true` if the string value of *Exp*<sub>1</sub> is strictly lexicographically less than the string value of
*Exp*<sub>2</sub>, and `false` otherwise.

**Examples.**

``` rascal-shell
"abc" < "abcdef";
"abc" < "defghi";
"abc" < "a";
```

##### String LessThanOrEqual

**Synopsis.**

Less than or equal operator on string values.

**Syntax.**

`Exp1 ⇐ Exp2`

| `Exp1` | `Exp2` | `Exp1 ⇐ Exp2` |
| ------ | ------ | ------------- |
| `str`  | `str`  | `bool`        |

Types

**Description.**

Yields `true` if the string value of *Exp*<sub>1</sub> is lexicographically less than the string value of
*Exp*<sub>2</sub> or if both string are equal, and `false` otherwise.

**Examples.**

``` rascal-shell
"abc" <= "abc";
"abc" <= "abcdef";
"abc" <= "defghi";
"abc" <= "a";
```

##### String NotEqual

**Synopsis.**

Not equal operator on string values.

**Syntax.**

`Exp1 != Exp2`

| `Exp1` | `Exp2` | `Exp1 != Exp2` |
| ------ | ------ | -------------- |
| `str`  | `str`  | `bool`         |

Types

**Description.**

Yields `true` if both arguments are not identical and `false` otherwise.

**Examples.**

``` rascal-shell
"abc" != "defghi";
"abc" != "abc";
```

##### String Slice

**Synopsis.**

Retrieve a slice of a string.

##### `Exp1 [ Exp2 .. Exp4]`

##### `Exp1 [ Exp2 , Exp3 .. Exp4]`

**Syntax.**

where *Exp*<sub>2</sub> and *Exp*<sub>4</sub> are optional.

| `Exp1` | `Exp2` | `Exp3` | `Exp4` | `Exp1 [ Exp2 .. Exp4 ]` or `Exp1 [ Exp2 , Exp3 .. Exp4]` |
| ------ | ------ | ------ | ------ | -------------------------------------------------------- |
| `str`  | `int`  | `int`  | `int`  | `str`                                                    |

Types

**Description.**

A String slice is similar to a list [List Slice](#slice) and uses the integer values of *Exp*<sub>2</sub> and
*Exp*<sub>4</sub> to determine the `begin` (**inclusive**) and `end` (**exclusive**) of a slice from the string value
*S* of *Exp*<sub>1</sub>. Negative indices count from the end of the string backwards. Using the second form, an extra
index *Exp*<sub>3</sub> is given that determines the index of the second element in the slice and establishes the `step`
between successive elements in the slice. The default `step` is 1. If `end` is smaller than `begin`, the slice is
constructed backwards.

Let `Len` be the length of *S* and let *N*<sub>2</sub>, *N*<sub>3</sub> and *N*<sub>4</sub> be the respective values of
the expressions *Exp*<sub>2</sub>, *Exp*<sub>2</sub> and *Exp*<sub>2</sub> when they are present.

The slice parameters `begin`, `end`, and `step` are determined as follows:

  - *Exp<sub>2</sub>*:
    
      - If *Exp<sub>2</sub>* is absent, then `begin = 0`.
    
      - Otherwise, if *N<sub>2</sub>* \>= 0 then `begin = N2` else `begin = N2 + Len`.

  - *Exp<sub>4</sub>*:
    
      - If *Exp<sub>4</sub>* is absent, then `end = Len`.
    
      - Otherwise, if *N<sub>4</sub>* \>= 0, then `end = N4` else `end = N4 + Len`.

  - *Exp<sub>3</sub>*:
    
      - If *Exp<sub>3</sub>* is absent, then if `begin < end` then `step = 1` else `step = -1`.
    
      - Otherwise, if `begin < end`, then `step = N3 - begin` else `step = begin - N3`.

Now, the constraints `0 ⇐ begin < Len` and `0 < end < Len` should hold, otherwise the exception `IndexOutOfBounds` is
thrown.

The slice consists of the elements `S[begin]`, `S[begin+step]`, `S[end - step]`. When `begin >= end`, the elements are
listed in reverse order.

**Examples.**

Consider the string `S = "abcdefghi";` (with size 9) as running example.

Here is a view on *L* that will help to correlate positive and negative indices:

| `i`    | 0     | 1     | 2     | 3     | 4     | 5     | 6     | 7     | 8     |
| ------ | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| `S[i]` | `"a"` | `"b"` | `"c"` | `"d"` | `"e"` | `"f"` | `"g"` | `"h"` | `"i"` |
| `-i`   | \-9   | \-8   | \-7   | \-6   | \-5   | \-4   | \-3   | \-2   | \-1   |

Some common use cases (with `begin` ⇐ `end`):

| Slice           | Means:                                                         |
| --------------- | -------------------------------------------------------------- |
| `S[begin..end]` | characters with indices `begin` through `end-1`                |
| `S[begin..]`    | characters with indices `begin` through the rest of the string |
| `S[..end]`      | characters with indices from the beginning through `end-1`     |
| `S[..]`         | the whole list                                                 |
| `S[-1]`         | last element of the string                                     |
| `S[-2..]`       | the last two characters of the string                          |
| `S[..-2]`       | all characters except the last two.                            |

Let’s put this into practice now.

``` rascal-shell
S = "abcdefghi";
```

Slices with begin \< end

``` rascal-shell
S[1..3];
S[1..];       // empty end => end of string
S[..3];       // empty begin => first character of string
S[..];        // both empty => whole string
```

Slices with begin \>= end

``` rascal-shell
S[3..1];      // slice contains characters with indices 3 and 2 (in that order)
S[3..3];      // empty slice when begin == end
```

Slices with negative begin or end:

``` rascal-shell
S[2..-2];     // equivalent to S[2..7]
S[2..7];
S[-4..-2];    // equivalent to S[5..7]
S[5..7];
```

Slices with an explicit second index:

``` rascal-shell
S[1,3..6];
S[5,3..];
```

Explore error cases:

``` rascal-shell
S[..10];
S[1..20];
```

##### String Subscription

**Synopsis.**

Retrieve a substring via its index.

**Syntax.**

`Exp1 [ Exp2 ]`

| `Exp1` | `Exp2` | `Exp1 [ Exp2 ]` |
| ------ | ------ | --------------- |
| `str`  | `int`  | `str`           |

Types

**Description.**

String subscription uses the integer value of *Exp*<sub>2</sub> as index in the string value of *Exp*<sub>1</sub>. The
value of *Exp*<sub>2</sub> should be greater or equal 0 and less than the number of characters in the string. If this is
not the case, the exception `IndexOutOfBounds` is thrown.

**Examples.**

Introduce a string, assign it to S and retrieve the element with index 1:

``` rascal-shell
S = "abc";
S[1];
```

Explore an error case:

``` rascal-shell
S[5];
```

### Tuple

**Synopsis.**

Tuple values.

**Syntax.**

`< Exp1, Exp2, …​ >`

| `Exp1` | `Exp2`          | …​ | `< Exp1, Exp2, …​ >` |
| ------ | --------------- | -- | -------------------- |
| `T1`   | *T<sub>2</sub>* | …​ | `tuple[T1, T2, …​ ]` |

Types

**Description.**

A tuple is a sequence of elements with the following properties:

  - Each element in a tuple (may) have a different type.

  - Each element of a tuple may have a label that can be used to select that element of the tuple.

  - Each tuple is fixed-width, i.e., has the same number of elements.

Tuples are represented by the type `tuple[T1 L1, T2 L2, …​]`, where *T*<sub>1</sub>, *T*<sub>2</sub>, …​ are arbitrary
types and *L*<sub>1</sub>, *L*<sub>2</sub>, …​ are optional labels.

The following operators are provided for tuples:

  - [Tuple Concatenation](#concatenation): Concatenate two tuple values.

  - [Tuple Equal](#equal): Equality operator on tuple values.

  - [Tuple FieldSelection](#fieldselection): Select a field from a tuple by its field name.

  - [Tuple GreaterThan](#greaterthan): Greater than operator on tuple values.

  - [Tuple GreaterThanOrEqual](#greaterthanorequal): Greater than or equal operator on tuple values.

  - [Tuple LessThan](#lessthan): Less than operator on tuple values.

  - [Tuple LessThanOrEqual](#lessthanorequal): Less than or equal operator on tuple values.

  - [Tuple NotEqual](#notequal): Not equal operator on tuple values.

  - [Tuple Subscription](#subscription): Retrieve a tuple field by its index position.

**Examples.**

``` rascal-shell
tuple[str first, str last, int age] P = <"Jo","Jones",35>;
P.first;
P.first = "Bo";
```

##### Tuple Concatenation

**Synopsis.**

Concatenate two tuple values.

**Syntax.**

`Exp1 + Exp2`

| `Exp1`                  | `Exp_2`                 | `Exp1 > Exp_2`                        |
| ----------------------- | ----------------------- | ------------------------------------- |
| `tuple[ T11, T12, …​ ]` | `tuple[ T21, T22, …​ ]` | `tuple[ T11, T12, …​, T21, T22, …​ ]` |

Types

**Description.**

Returns a tuple consisting of the concatenation of the tuple elements of *Exp*<sub>1</sub> and *Exp*<sub>2</sub>.

**Examples.**

``` rascal-shell
<"abc", 1, 2.5> + <true, "def">;
```

##### Tuple Equal

**Synopsis.**

Equality operator on tuple values.

**Syntax.**

`Exp1 == Exp2`

| `Exp1`                  | `Exp2`                  | `Exp1 == Exp2` |
| ----------------------- | ----------------------- | -------------- |
| `tuple[ T11, T12, …​ ]` | `tuple[ T21, T22, …​ ]` | `bool`         |

Types

**Description.**

Yields `true` if both tuples are identical and `false` otherwise.

**Examples.**

``` rascal-shell
<1, "abc", true> == <1, "abc", true>;
```

##### Tuple FieldSelection

**Synopsis.**

Select a field from a tuple by its field name.

**Syntax.**

`Exp . Name`

| `Exp`                       | `Name` | `Exp . Name` |
| --------------------------- | ------ | ------------ |
| `tuple[ T1 L1, T2 L2, …​ ]` | `Li`   | `Ti`         |

Types

**Description.**

Field selection applies to tuples with named elements. *Exp* should evaluate to a tuple with field *Name* and returns
the value of that field. *Name* stands for itself and is not evaluated.

**Examples.**

``` rascal-shell
tuple[int key, str val] T = <1, "abc">;
T.val;
```

##### Tuple GreaterThan

**Synopsis.**

Greater than operator on tuple values.

**Syntax.**

`Exp1 > Exp2`

| `Exp1`                  | `Exp2`                  | `Exp1 > Exp2` |
| ----------------------- | ----------------------- | ------------- |
| `tuple[ T11, T12, …​ ]` | `tuple[ T21, T22, …​ ]` | `bool`        |

Types

**Description.**

Yields `true` if

  - both tuples are not equal, and

  - the left-most element in the tuple value of *Exp<sub>1</sub>* that differs from the corresponding element in the
    tuple value of *Exp*<sub>2</sub> is greater than that element in *Exp*<sub>2</sub>.

Otherwise the result if `false`.

**Examples.**

``` rascal-shell
<1, "def", true> > <1, "abc", true>;
```

##### Tuple GreaterThanOrEqual

**Synopsis.**

Greater than or equal operator on tuple values.

**Syntax.**

`Exp1 >= Exp2`

| `Exp1`                  | `Exp2`                  | `Exp1 >= Exp2` |
| ----------------------- | ----------------------- | -------------- |
| `tuple[ T11, T12, …​ ]` | `tuple[ T21, T22, …​ ]` | `bool`         |

Types

**Description.**

Yields `true` if

  - both tuples are equal, or

  - the left-most element in the tuple value of *Exp<sub>1</sub>* that differs from the corresponding element in the
    tuple value of *Exp*<sub>2</sub> is greater than that element in *Exp*<sub>2</sub>.

Otherwise the result if `false`.

**Examples.**

``` rascal-shell
<1, "abc", true> > <1, "abc", true>;
<1, "def", true> > <1, "abc", true>;
```

##### Tuple LessThan

**Synopsis.**

Less than operator on tuple values.

**Syntax.**

`Exp1 < Exp2`

| `Exp1`                  | `Exp2`                  | `Exp1 < Exp2` |
| ----------------------- | ----------------------- | ------------- |
| `tuple[ T11, T12, …​ ]` | `tuple[ T21, T22, …​ ]` | `bool`        |

Types

**Description.**

Yields `true` if

  - both tuples are not equal, and

  - the left-most element in the tuple value of *Exp<sub>1</sub>* that differs from the corresponding element in the
    tuple value of *Exp*<sub>2</sub> is less than that element in *Exp*<sub>2</sub>.

Otherwise the result if `false`.

**Examples.**

``` rascal-shell
<1, "abc", true> < <1, "def", true>;
```

##### Tuple LessThanOrEqual

**Synopsis.**

Less than or equal operator on tuple values.

**Syntax.**

`Exp1 ⇐ Exp2`

| `Exp1`                  | `Exp2`                  | `Exp1 ⇐ Exp2` |
| ----------------------- | ----------------------- | ------------- |
| `tuple[ T11, T12, …​ ]` | `tuple[ T21, T22, …​ ]` | `bool`        |

Types

**Description.**

Yields `true` if

  - both tuples are equal, or

  - the left-most element in the tuple value of *Exp<sub>1</sub>* that differs from the corresponding element in the
    tuple value of *Exp*<sub>2</sub> is less than that element in *Exp*<sub>2</sub>.

Otherwise the result if `false`.

**Examples.**

``` rascal-shell
<1, "abc", true> <= <1, "abc", true>;
<1, "abc", true> <= <1, "def", true>;
```

##### Tuple NotEqual

**Synopsis.**

Not equal operator on tuple values.

**Syntax.**

`Exp1 != Exp2`

| `Exp1`                  | `Exp2`                  | `Exp1 != Exp2` |
| ----------------------- | ----------------------- | -------------- |
| `tuple[ T11, T12, …​ ]` | `tuple[ T21, T22, …​ ]` | `bool`         |

Types

**Description.**

Yields `true` if both tuples are not identical and `false` otherwise.

**Examples.**

``` rascal-shell
<1, "abc", true> != <1, "abc">;
<1, "abc", true> != <1, "abc", true>;
```

##### Tuple Subscription

**Synopsis.**

Retrieve a tuple field by its index position.

**Syntax.**

`Exp1 [ Exp2 ]`

**Description.**

Subscription retrieves the tuple element with index *Exp*<sub>2</sub> from the tuple value of *Exp*<sub>1</sub>.

**Examples.**

Introduce a tuple, assign it to T and retrieve the element with index 0:

``` rascal-shell
T = <"mon", 1>;
T[0];
```

### Value

**Synopsis.**

Values of type `value`.

**Types.**

`value`

**Description.**

Value stands for all possible Rascal values and is represented by the type `value`. This type is a container for all
other types and does not have any values itself.

The following operators are provided for values:

  - [Value Conditional](#conditional): Conditional expression on values.

  - [Value Equal](#equal): Equal operator on values.

  - [Value GreaterThan](#greaterthan): Greater than operator on values.

  - [Value GreaterThanOrEqual](#greaterthanorequal): Greater than or equal operator on values.

  - [Value LessThan](#lessthan): Less than operator on values.

  - [Value LessThanOrEqual](#lessthanorequal): Less than or equal operator on values.

  - [Value NotEqual](#notequal): Not equal operator on values.

##### Value Conditional

**Synopsis.**

Conditional expression on values.

**Syntax.**

`Exp1 ? Exp2 : Exp3`

| `Exp1` | `Exp2` | `Exp3` | `Exp1 ? Exp2 : Exp3` |
| ------ | ------ | ------ | -------------------- |
| `bool` | `T2`   | `T3`   | `lub(T2,T3)`         |

Types

**Description.**

Yields the value of *Exp*<sub>2</sub> if the value of *Exp*<sub>1</sub> is `true` and the value of *Exp*<sub>3</sub>
otherwise. The result type is the *least upper bound* (also known as `lub`, see [Static
Typing](#staticTyping)) of the types of *Exp*<sub>2</sub> and *Exp*<sub>3</sub>.

**Examples.**

``` rascal-shell
( 3 > 2 ) ? 30 : 40;
( 3 < 2 ) ? "abc" : {3, 4};
```

##### Value Equal

**Synopsis.**

Equal operator on values.

**Syntax.**

`Exp1 == Exp2`

| `Exp1`  | `Exp2`  | `Exp1 == Exp2` |
| ------- | ------- | -------------- |
| `value` | `value` | `bool`         |

Types

**Description.**

Yields `true` if both arguments are identical and `false` otherwise.

**Examples.**

``` rascal-shell
```

Introduce two variables `X`, `Y` and `Z` and force them to be of type `value`:

``` rascal-shell
value X = "abc";
value Y = "abc";
value Z = 3.14;
```

Now compare `X` and `Y` for equality:

``` rascal-shell
X == Y;
```

and `X` and `Z`:

``` rascal-shell
X == Z;
```

##### Value GreaterThan

**Synopsis.**

Greater than operator on values.

**Syntax.**

`Exp1 > Exp2`

| `Exp1`  | `Exp2`  | `Exp1 > Exp2` |
| ------- | ------- | ------------- |
| `value` | `value` | `bool`        |

Types

**Description.**

By brute force, a total less than operator between two values *V*<sub>1</sub> and *V*<sub>2</sub> of arbitrary types
*T*<sub>1</sub> and *T*<sub>2</sub> is defined:

  - If the types *T<sub>1</sub>* and *T<sub>2</sub>* can be compared then *V<sub>1</sub>* less than *V<sub>2</sub>* is
    used.

  - Otherwise values are ordered according their type name, for instance, `int` is smaller than `list`, and `map` is
    smaller than `rel`.

Greater than yields `true` if the value of *Exp*<sub>2</sub> is strictly less than (according to the ordering defined
above) the value of *Exp*<sub>1</sub>, and `false` otherwise.

**Examples.**

Introduce two variables `X`, `Y` and `Z` and force them to be of type `value`:

``` rascal-shell
value X = "def";
value Y = "abc";
value Z = 3.14;
```

Now compare `X` and `Y`:

``` rascal-shell
X > Y;
```

and `X` and `Z`:

``` rascal-shell
X > Z;
```

##### Value GreaterThanOrEqual

**Synopsis.**

Greater than or equal operator on values.

**Syntax.**

`Exp1 >= Exp2`

| `Exp1`  | `Exp2`  | `Exp1 >= Exp2` |
| ------- | ------- | -------------- |
| `value` | `value` | `bool`         |

Types

**Description.**

By brute force, a total less than operator between two values *V*<sub>1</sub> and *V*<sub>2</sub> of arbitrary types
*T*<sub>1</sub> and *T*<sub>2</sub> is defined:

  - If the types *T<sub>1</sub>* and *T<sub>2</sub>* can be compared then *V<sub>1</sub>* less than *V<sub>2</sub>* is
    used.

  - Otherwise values are ordered according their type name, for instance, `int` is smaller than `list`, and `map` is
    smaller than `rel`.

Greater than or equal yields `true` if the value of *Exp*<sub>2</sub> is strictly less than (according to the ordering
defined above) the value of *Exp*<sub>1</sub> or if both values are equal, and `false` otherwise.

**Examples.**

Introduce two variables `X`, `Y` and `Z` and force them to be of type `value`:

``` rascal-shell
value X = "def";
value Y = "abc";
value Z = 3.14;
```

Now compare `X` and `Y`:

``` rascal-shell
X >= Y;
```

and `X` and `Z`:

``` rascal-shell
X >= Z;
```

##### Value LessThan

**Synopsis.**

Less than operator on values.

**Syntax.**

`Exp1 < Exp2`

| `Exp1`  | `Exp2`  | `Exp1 < Exp2` |
| ------- | ------- | ------------- |
| `value` | `value` | `bool`        |

Types

**Description.**

By brute force, a total less than operator between two values *V*<sub>1</sub> and *V*<sub>2</sub> of arbitrary types
*T*<sub>1</sub> and *T*<sub>2</sub> is defined:

  - If the types *T<sub>1</sub>* and *T<sub>2</sub>* can be compared then *V<sub>1</sub>* less than *V<sub>2</sub>* is
    used.

  - Otherwise values are ordered according their type name, for instance, `int` is smaller than `list`, and `map` is
    smaller than `rel`.

Less than yields `true` if the value of *Exp*<sub>1</sub> is strictly less than (according to the ordering defined
above) the value of *Exp*<sub>2</sub>, and `false` otherwise.

**Examples.**

Introduce two variables `X`, `Y` and `Z` and force them to be of type `value`:

``` rascal-shell
value X = "abc";
value Y = "def";
value Z = 3.14;
```

Now compare `X` and `Y`:

``` rascal-shell
X < Y;
```

and `X` and `Z`:

``` rascal-shell
X < Z;
```

##### Value LessThanOrEqual

**Synopsis.**

Less than or equal operator on values.

**Syntax.**

`Exp1 ⇐ Exp2`

| `Exp1`  | `Exp2`  | `Exp1 ⇐ Exp2` |
| ------- | ------- | ------------- |
| `value` | `value` | `bool`        |

Types

**Description.**

By brute force, a total less than operator between two values *V*<sub>1</sub> and *V*<sub>2</sub> of arbitrary types
*T*<sub>1</sub> and *T*<sub>2</sub> is defined:

  - If the types *T<sub>1</sub>* and *T<sub>2</sub>* can be compared then *V<sub>1</sub>* less than *V<sub>2</sub>* is
    used.

  - Otherwise values are ordered according their type name, for instance, `int` is smaller than `list`, and `map` is
    smaller than `rel`.

Less than or equal yields `true` if the value of *Exp*<sub>1</sub> is strictly less than (according to the ordering
defined above) the value of *Exp*<sub>2</sub> or if both values are equal, and `false` otherwise.

**Examples.**

Introduce two variables `X`, `Y` and `Z` and force them to be of type `value`:

``` rascal-shell
value X = "abc";
value Y = "def";
value Z = 3.14;
```

Now compare `X` and `Y`:

``` rascal-shell
X <= Y;
```

and `X` and `Z`:

``` rascal-shell
X <= Z;
```

##### Value NotEqual

**Synopsis.**

Not equal operator on values.

**Syntax.**

`Exp1 != Exp2`

| `Exp1`  | `Exp2`  | `Exp1 != Exp2` |
| ------- | ------- | -------------- |
| `value` | `value` | `bool`         |

Types

**Description.**

Yields `true` if both arguments are not identical and `false` otherwise.

**Examples.**

Introduce two variables `X`, `Y` and `Z` and force them to be of type `value`:

``` rascal-shell
value X = "abc";
value Y = "abc";
value Z = 3.14;
```

Now compare `X` and `Y` for inequality:

``` rascal-shell
X != Y;
```

and `X` and `Z`:

``` rascal-shell
X != Z;
```

### Void

**Synopsis.**

Values of type `void`.

**Types.**

`void`

**Description.**

Void stands for *nothing* and is represented by the type `void`. It is a type without any values.

### Operators

**Synopsis.**

The Rascal operators.

**Description.**

An *operator expression* consists of an operator and one or more operands. The evaluation order of the operands depends
on the operator. The operator is applied to the operands and the resulting value (or values in some cases) is the result
of the operator expression.

All operators are summarized in the following table. They are listed from highest precedence to lowest precedence. In
other words, operators listed earlier in the table bind stronger.

| Operator                       | See                                                                                                                                                                                                                                                                                  | Short Description                                                                                                                              |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `Exp . Name`                   | [Location](#fieldselection), [DateTime](#fieldselection), [Tuple](#fieldselection), [???](#fieldselection.Relation),                                                                                                                                | Select named field from structured value                                                                                                       |
| `Exp1 [ Name = Exp2 ]`         | [???](#fieldAssignment)                                                                                                                                                                                                                                                              | Change value of named field of structured value                                                                                                |
| `Exp < field1, …​ >`           | [???](#fieldProjection)                                                                                                                                                                                                                                                              | Select fields from relation or structured value                                                                                                |
| `Exp is Name`                  | [???](#parseTree), [Concrete Syntax](#concretesyntax), [Algebraic Data Type](#ADT)                                                                                                                                                            | Returns true if and only if the constructor name of the value produced by *Exp* is equal to *Name*                                             |
| `Exp has Name`                 | [???](#parseTree), [Concrete Syntax](#concretesyntax), [Algebraic Data Type](#ADT)                                                                                                                                                            | Returns true if and only if the constructor (node or parse tree) of the value produced by *Exp* has any field labeled *Name*                   |
| `Exp1 [ Exp2 , Exp3, …​. ]`    | [List](#subscription), [Map](#subscription), [Tuple](#subscription), [Relation](#subscription)                                                                                                                                                               | Retrieve values for given index/key from list, map, tuple or relation.                                                                         |
| `Exp1 [ Exp2 , Exp3 .. Exp4 ]` | [List](#list-Slice), [String](#slice), [Node](#slice)                                                                                                                                                                                                             | Retrieve a slice from a list, string, or node.                                                                                                 |
| `Exp?`                         | [Boolean](#isdefined)                                                                                                                                                                                                                                                        | Test whether an expression has a defined value                                                                                                 |
| `!Exp`                         | [Boolean](#negation)                                                                                                                                                                                                                                                         | Negate a Boolean value                                                                                                                         |
| `- Exp`                        | [Number](#negation)                                                                                                                                                                                                                                                           | Negation of numbers                                                                                                                            |
| `Exp +`                        | [Relation](#transitiveclosure), [ListRelation](#transitiveclosure),                                                                                                                                                                                            | Transitive closure on relation or list relation                                                                                                |
| `Exp *`                        | [Relation](#reflexivetransitiveclosure), [ListRelation](#reflexivetransitiveclosure)                                                                                                                                                                           | Reflexive transitive closure on relation or list relation                                                                                      |
| `Exp @ Name`                   | [???](#selection)                                                                                                                                                                                                                                                        | Value of annotation *Name* of *Exp*'s value                                                                                                    |
| `Exp1 [@ Name = Exp2]`         | [???](#replacement)                                                                                                                                                                                                                                                      | Assign value of *Exp*<sub>2</sub> to annotation *Name* of *Exp*<sub>1</sub>'s value                                                            |
| `Exp1 o Exp2`                  | [Relation](#composition), [Map](#composition)                                                                                                                                                                                                                           | *Exp*<sub>1</sub> and *Exp*<sub>2</sub> should evaluate to a relation or map; return their composition. Note: the letter "o" is thus a keyword |
| `Exp1 / Exp2`                  | [Number](#division)                                                                                                                                                                                                                                                           | Divide two numbers                                                                                                                             |
| `Exp1 % Exp2`                  | [Number](#remainder)                                                                                                                                                                                                                                                          | Remainder on numbers                                                                                                                           |
| `Exp1 * Exp2`                  | [Number](#multiplication), [List](#product), [Set](#product), [Relation](#cartesianproduct)                                                                                                                                                                 | Multiply numbers; product of list, set, or relation                                                                                            |
| `Exp1 & Exp2`                  | [List](#intersection), [Set](#intersection), [Map](#intersection)                                                                                                                                                                                                       | Intersection of list, set (including relation), or map                                                                                         |
| `Exp1 + Exp2`                  | [Number](#addition), [String](#concatenation), [List Concatenation](#concatenation), [List Insert](#insert),[List Append](#append), [Tuple Concatenation](#concatenation), [Set](#union), [Map](#union), [Location](#addsegment) | Add numbers; concatenate string, list or tuple; union on set (including relation), or map; concatenate location and string                     |
| `Exp1 - Exp2`                  | [Number](#subtraction), [List](#difference), [Set](#difference), [Map](#difference)                                                                                                                                                                              | Subtract numbers; difference of list, set (including relation), or map                                                                         |
| `Exp1 join Exp2`               | [Relation](#join)                                                                                                                                                                                                                                                           | Join on relation                                                                                                                               |
| `Exp1 in Exp2`                 | [List](#in), [Set](#in), [Map](#in)                                                                                                                                                                                                                                     | Membership test for element in list, map, set (including relation)                                                                             |
| `Exp1 notin Exp2`              | [List](#notin), [Set](#notin), [Map](#notin)                                                                                                                                                                                                                            | Negated membership test for element in list, map, set (including relation)                                                                     |
| `Exp1 ⇐ Exp2`                  | [Number](#lessthanorequal), [String](#lessthanorequal), [Location](#lessthanorequal), [DateTime](#lessthanorequal), [List](#sublist), [Set](#subset), [Map](#submap)                                                                    | Less than or equal on all values                                                                                                               |
| `Exp1 < Exp2`                  | [Number](#lessthan), [String](#lessthan), [Location](#lessthan), [dateTime](#lessthan), [List](#strictsublist), [Set](#strictsubset), [Map](#strictsubmap)                                                                              | Less than on all values                                                                                                                        |
| `Exp1 >= Exp2`                 | [Number](#greaterthanorequal), [String](#greaterthanorequal), [Location](#greaterthanorequal), [DateTime](#greaterthanorequal), [List](#superlist), [Set](#superset), [Map](#supermap)                                                  | Greater than or equal on all values                                                                                                            |
| `Exp1 > Exp2`                  | [Number](#greaterthan), [String](#greaterthan), [Location](#greaterthan), [DateTime](#greaterthan), [List](#strictsuperlist), [Set](#strictsuperset), [Map](#strictsupermap)                                                            | Greater than on all values.                                                                                                                    |
| `Pat := Exp`                   | [Boolean Match](#match)                                                                                                                                                                                                                                                      | Pattern matches value of expression                                                                                                            |
| `Pat !:= Exp`                  | [Boolean NoMatch](#nomatch)                                                                                                                                                                                                                                                  | Pattern does not match value of expression                                                                                                     |
| `Exp1 == Exp2`                 | [Number](#equal), [String](#equal), [Location](#equal), [DateTime](#equal), [List](#equal), [Set](#equal), [Map](#equal)                                                                                                                | Equality on all values                                                                                                                         |
| `Exp1 != Exp2`                 | [Number](#notequal), [String](#notequal), [Location](#notequal), [DateTime](#notequal), [List](#notequal), [Set](#notequal), [Map](#notequal)                                                                                           | Inequality on all values                                                                                                                       |
| `Exp1 ? Exp2`                  | [Boolean IfDefinedElse](#ifdefinedelse)                                                                                                                                                                                                                                      | Value of expression when it is defined, otherwise alternative value                                                                            |
| `Exp1 ? Exp2 : Exp3`           | [Value Conditional](#conditional)                                                                                                                                                                                                                                              | Conditional expression for all types                                                                                                           |
| `Exp1 =⇒ Exp2`                 | [Boolean Implication](#implication)                                                                                                                                                                                                                                          | Implication on Boolean values                                                                                                                  |
| `Exp1 ⇐⇒ Exp2`                 | [Boolean Equivalence](#equivalence)                                                                                                                                                                                                                                          | Equivalence on Boolean values                                                                                                                  |
| `Exp1 && Exp2`                 | [Boolean And](#and)                                                                                                                                                                                                                                                          | And on Boolean values                                                                                                                          |
| `Exp1 \|\| Exp2`               | [Boolean Or](#or)                                                                                                                                                                                                                                                            | Or on Boolean values                                                                                                                           |

### Field Assignment

**Synopsis.**

Assignment to a field of a tuple or datatype.

**Syntax.**

`Exp1 [ Name = Exp2 ]`

**Description.**

*Exp*<sub>1</sub> should evaluate to a tuple or datatype with a field *Name*; assign the value of *Exp*<sub>2</sub> to
that field

Field assignment applies to all values that have named components like tuples and relations with named elements, data
types, and locations. Field assignment returns a new value in which the named component has been replaced by a new
value. *Name* stands for itself and is not evaluated.

**Examples.**

``` rascal-shell
tuple[int key, str val] T = <1, "abc">;
T[val = "def"];
 T;
```

Observe that field assignment creates a new value with an updated field. The old value remains unchanged as can be seen
from the unchanged value of T in the above example.

### Field Projection

**Synopsis.**

Projection of tuple.

**Syntax.**

`Exp < Field1, Field2 …​ >`

**Description.**

*Exp* should evaluate to a tuple or relation, and *Field*<sub>i</sub> should be a field name or an integer constant that
refers to elements in the order in which they occur in the original value (counting from 0).

**Examples.**

Suppose we have a relation with traffic information that records the name of the day, the day number, and the length of
the traffic jams at that day.

``` rascal-shell
rel[str day, int daynum, int length] Traffic =
{<"mon", 1, 100>, <"tue", 2, 150>, <"wed", 3, 125>,
 <"thur", 4, 110>, <"fri", 5, 90>};
Traffic<length,daynum>;
Traffic<2,day>;
```

Field projection thus selects parts from a larger value that has a fixed number of parts. The selection is based on
position and not on value and can be used to completely reorder or remove the parts of a larger value.

### Call

**Synopsis.**

Function call.

**Syntax.**

`Name ( Exp1, Exp2, …​ )`

| `Exp1` | `Exp2` | …​ | `Name ( Exp1, Exp2, …​ )`                                       |
| ------ | ------ | -- | --------------------------------------------------------------- |
| `T1`   | `T2`   | …​ | Determined by *Name*, *T<sub>i</sub>* and function declarations |

Types

**Description.**

First, the actual parameter expressions *Exp*<sub>i</sub> are evaluated resulting in values *V*<sub>i</sub>. Based on
*Name* and the argument types *T*<sub>i</sub>, the identity of the function to be called is determined.

The values *V*<sub>i</sub> are bound to the formal parameter names of the declared functions and the function body is
executed. The value returned by the function is used as value of the function call.

A *constructor call* has identical syntax to that of a function call, see [Constructor](#constructor),

See [Function Declaration](#function) for more details about function declarations.

> **Note**
> 
> Describe keyword parameters.

**Examples.**

First declare a function `square` with argument *n* that returns *n^2*:

``` rascal-shell
int square(int n) { return n * n; }
```

Next call `square`. This results in the following steps:

  - Based on the name `square` and the int argument 12 we identify the function to be called (= the function `square` we
    just defined).

  - Compute the value of the actual parameter (= 12).

  - Bind the formal parameter `n` to the actual value 12.

  - Execute the body of `square`.

  - The return value of square is the vale of the call:

<!-- end list -->

``` rascal-shell
square(12);
```

### Comprehensions

**Synopsis.**

Comprehensions provide a concise notation to conditionally generate new values.

**Description.**

Comprehensions are defined for the following types:

  - `list`, see [List Comprehension](#comprehension),

  - `set`, see [Set Comprehension](#comprehension),

  - `map`, see [Map Comprehension](#comprehension).

The syntax varies slightly for each type, but comprehensions have the following common elements:

  - A *generator* can come in two flavours:
    
      - an *enumerator* that generates all the values in some subject value.
    
      - a *filter* that performs an arbitrary test on previously generated values.

  - One or more *contributing expressions* that are added to the list, set or map that is being constructed.

The contributing expressions are evaluated for all possible values of the enumerators that are not excluded by a test.
When a filter fails, execution continues with the preceding enumerator (if any).

Each enumerator may introduce new variables that can be used in subsequent generators as well as in the contributing
expressions. A generator can use the variables introduced by preceding generators.

**Examples.**

A list comprehension:

``` rascal-shell
[ 3 * X | int X <- [1 .. 10] ];
```

A list comprehension with a filter:

``` rascal-shell
[ 3 * X | int X <- [1 .. 10], X > 5];
```

A list comprehension with multiple contributing expressions:

``` rascal-shell
[X, X * X | int X <- [1, 2, 3, 4, 5], X >= 3];
```

A set comprehension with a filter:

``` rascal-shell
{X | int X <- {1, 2, 3, 4, 5}, X >= 3};
```

A set comprehension that constructs a relation:

``` rascal-shell
{<X, Y> | int X <- {1, 2, 3}, int Y <- {2, 3, 4}, X >= Y};
{<Y, X> | <int X, int Y> <- {<1,10>, <2,20>}};
```

Introduce a map of `fruits` and use a map comprehension to filter fruits with an associated value larger than 10:

``` rascal-shell
fruits = ("pear" : 1, "apple" : 3, "banana" : 0, "berry" : 25, "orange": 35);
(fruit : fruits[fruit] | fruit <- fruits, fruits[fruit] > 10);
```

See [List Comprehension](#comprehension), [Set Comprehension](#comprehension), or [Map
Comprehension](#comprehension) for more examples.

### Enumerator

**Synopsis.**

Enumerate all values in a given subject value.

**Syntax.**

`Pattern ← Exp`

**Description.**

An enumerator generates all the values in a given subject value. For elementary types (`bool`, `int`, `real`, `num`,
`loc`, `datetime`, `str`) this is just a singleton. For composite types (`list`, `set`, `map`, `tuple`, `rel`, `node`)
the values of their elements, respectively, their direct children are enumerated. An enumerator is evaluated as follows:

  - Expression *Exp* is evaluated and may have an arbitrary value *V*.

  - The elements of *V* are enumerated one by one.

  - Each element value is matched against the pattern *Pattern*. There are two cases:
    
      - The match succeeds, any variables in *Pattern* are bound, and the next generator in the comprehension is
        evaluated. The variables that are introduced by an enumerator are only available to generators that appear later
        (i.e., to the right) in the comprehension. When this enumerator is the last generator in the comprehension, the
        contributing expressions of the comprehension are evaluated.
    
      - The match fails, no variables are bound. If *V* has more elements, a next element is tried. Otherwise, a
        previous generator (i.e., to the left) is tried. If this enumerator is the first generator in the comprehension,
        the evaluation of the comprehension is complete.

Type information is used to check the validity of an enumerator and guard you against mistakes. An impossible enumerator
like

``` rascal
int N <- {"apples", "oranges"}
```

will be flagged as an error since the pattern can never match.

**Examples.**

Here are some examples of enumerators:

  - `int N ← {1, 2, 3, 4, 5}`.

  - `str K ← KEYWORDS`, where `KEYWORDS` should evaluate to a value of `set[str]`.

  - `<str K, int N> ← {<"a",10>, <"b",20>, <"c",30>}`.

  - `<str K, int N> ← FREQUENCIES`, where `FREQUENCIES` should evaluate to a value of type `rel[str,int]`.

  - `<str K, 10> ← FREQUENCIES`, will only generate pairs with `10` as second element.

  - `int N ← 17`, will only generate the value `17`.

Here are examples of enumerators in action:

``` rascal-shell
[ N * N | int N <- [1, 2, 3, 4, 5] ];
{<N, K> | <str K, int N> <- {<"a",10>, <"b",20>, <"c",30>}};
```

### Filter

**Synopsis.**

Filter values in a [List Comprehension](#comprehension)\], [Set Comprehension](#comprehension) or [Map
Comprehension](#comprehension).

**Syntax.**

`Exp`

| `Exp`  |
| ------ |
| `bool` |

Types

**Description.**

A filter is a boolean-valued expression. If the evaluation of the filter gives `true` this indicates that the current
combination of generated values up to this filter is still desired and execution continues with subsequent generators.
If the evaluation gives `false` this indicates that the current combination of values is undesired, and that another
combination should be tried by going back to the previous generator.

**Examples.**

Adding a filter to a comprehension, may restrict the values that are included in the result of the comprehension:

``` rascal-shell
[ X * X | int X <- [1, 2, 3, 4, 5, 6] ];
[ X * X | int X <- [1, 2, 3, 4, 5, 6], X % 3 == 0 ];
```

Filters can also be applied to values produced by several generators:

``` rascal-shell
[<X, Y> | int X <- [0 .. 10], int Y <- [0 .. 10], X + Y == 10]
```

### Concrete Syntax

**Synopsis.**

Concrete syntax is a notation for patterns that match parse trees and expressions that generate them.

  - `` (Nonterminal) `sentence` ``

  - \` `sentence` \`

where each sentence is a string over the language generated from `Nonterminal`. This language is extended in the
following way. Each non-terminal reachable `X` from *Non*-terminal has an added alternative to allow nested Rascal
[Patterns](#patterns) inside of concrete syntax fragments:

  - `syntax X = "<" Pattern p ">";`

**Description.**

A concrete syntax fragment allows the programmer to write patterns and expressions in the language that is currently
analyzed, transformed or generated. The [Concrete Syntax](#concretesyntax) feature is derived from [Syntax
Definition](#definition)s. For any non-terminal defined in a [Syntax
Definition](#definition), you may use [Concrete Syntax](#concretesyntax) to match or
generate its parse trees.

  - Easy notation for complex structures

<!-- end list -->

  - Since Rascal currently has no type-checker, the disambiguation of concrete syntax fragments is done heuristically
    which may lead to surprises.

  - The disambiguation of embedded concrete syntax fragments may change in the near future.

### Reducer

**Synopsis.**

Reduce generated values to a single value.

**Syntax.**

`( InitExp | RedExp | Gen1, Gen2, …​ )`

**Description.**

A reducer resembles the [fold](http://en.wikipedia.org/wiki/Fold_(higher-order_function)) function found in most
functional languages.

A reducer is equivalent to the following code:

``` rascal
it = InitExp; 
for(Gen1, Gen2, ... ) 
    it = RedExp; 
it; 
```

and is executed as follows:

  - A fresh variable `it` is initialized with *InitExp*. We call the variable `it` since we use `it` to initialize the
    reducer, to make changes to `it`, and to return `it` as result.

  - A for loop iterates over all values produced by the generators `Gen1`, `Gen2`, …​ .

  - In the body of the loop, variable `it` is updated to reflect a new reduced value. Note that `it` itself and
    variables introduced in *Gen*<sub>1</sub>, *Gen*<sub>2</sub>, …​ may occur in *RedExp*.

  - The value of `it` is the result of the reducer.

**Examples.**

``` rascal-shell
L = [1, 3, 5, 7];
(0 | it + e | int e <- L);
(1 | it * e | int e <- L);
```

### Statement as Expression

**Synopsis.**

Statements that have a value and can be used as expressions.

**Description.**

Several forms of statements produce a value and can be used as expression. This is further explained in the sections for
the relevant statements, see [If](#if), [While](#while), [Do](#do) and
[For](#for).

**Pitfalls.**

It is likely that the design of Rascal will evolve into completely merging expressions and statements.

### Visit

**Synopsis.**

Visit the elements in a tree or value.

**Syntax.**

``` rascal
Strategy visit ( Exp ) {
case PatternWithAction1;
case PatternWithAction2;
...
default: ...
}
```

**Description.**

Visiting, recursively traversing, the nodes in a deeply nested data-structure is a very common task in the [EASY](/docs/WhyRascal#easy)
domain. In many cases (but certainly not all) this data-structure is a syntax tree of some source code file and the
nodes correspond to expressions or statements.

The visit expression/statement allows to focus on the points of interest in the data-structure while automating the
search over the other parts for the programmer.

Computing metrics or refactoring are examples of tasks that require a tree visit. There are three frequently occurring
scenarios:

  - Accumulator: traverse the tree and collect information (fold).

  - Transformer: traverse the tree and transform it into another tree (map).

  - Accumulating Transformer: traverse the tree, collect information and also transform the tree.

The visit expression in Rascal can accommodate all these (and more) use cases.

Given a subject term (the current value of *Exp*) and a list of cases (consisting of a sequence of
[???](#pattern-with-Action)s, it traverses the term. Depending on the precise actions it may perform replacement
(mimicking a transformer), update local variables (mimicking an accumulator) or a combination of these two (accumulating
transformer). If **any** of the actions contains an [Insert](#insert) statement, the value of the visit
expression is a new value that is obtained by successive insertions in the subject term by executing one or more cases.
Otherwise, the original value of the subject term is returned.

The visit expression is optionally preceded by one of the following strategy indications that determine the traversal
order of the subject:

  - `top-down`: visit the subject from root to leaves.

  - `top-down-break`: visit the subject from root to leaves, but stop at the current path when a case matches.

  - `bottom-up`: visit the subject from leaves to root (this is the default).

  - `bottom-up-break`: visit the subject from leaves to root, but stop at the current path when a case matches.

  - `innermost`: repeat a bottom-up traversal as long as a case matches.

  - `outermost`: repeat a top-down traversal as long as a case matches.

The execution of the cases has the following effect:

  - A PatternWithAction of the form `Pattern ⇒ Exp` replaces the current subtree of the subject by the value of *Exp*.
    Note that a copy of the subject is created at the start of the visit statement and all replacements are made in this
    copy. As a consequence, modifications made during the visit cannot influence matches later on. The modified copy of
    the subject is ultimately returned by the visit expression.

  - A PatternWithAction of the form `Pattern : Statement` executes `Statement` and this should lead to one of the
    following:
    
      - Execution of an Insert statement of the form `insert Exp2`. The value of *Exp*<sub>2</sub> replaces the subtree
        of the subject that is currently being visited. Once again, this modification takes place in a copy of the
        original subject (see above). Note that:
        
          - An insert statement may only occur in a PatternWithAction in a visit expression or a rule.
        
          - `Pattern ⇒ Exp` is equivalent to `Pattern : insert Exp;`.
    
      - Execution of a [Fail](#fail) statement: the next case is tried.
    
      - Execution of a [Return](#return) statement that returns a value from the enclosing function.

The precise behaviour of the visit expression depends on the type of the subject:

  - For type node or ADT, all nodes of the tree are visited (in the order determined by the strategy). Concrete patterns
    and abstract patterns directly match tree nodes. Regular expression patterns match only values of type string.

  - For other structured types (list, set, map, tuple, rel), the elements of the structured type are visited and matched
    against the cases. When inserts are made, a new structured value is created. In these cases a strategy does not have
    any effect.

**Examples.**

Visit a value and increment a counter for pattern `leaf(int N)` matches:

``` rascal
visit(t) {
     case leaf(int N): c = c + N;
   };
```

Replace all values that match the pattern `red(l, r)`:

``` rascal
visit(t) {
     case red(l, r) => green(l, r)
   };
```

Do a bottom-up visit of an expression and apply the function `simp` to each subexpression:

``` rascal
bottom-up visit(e){
           case Exp e1 => simp(e1)
         }
```

More examples can, for instance, be found in Recipes, see [ColoredTrees](/docs/Recipes#ColoredTrees),
[WordReplacement](/docs/Recipes#WordReplacement), [CountConstructors](/docs/Recipes#CommonCountConstructors), and
[Derivative](/docs/Recipes#Derivative).

### Pattern With Action

**Synopsis.**

A pattern with an associated action that is executed on a successful match.

  - `Pattern ⇒ Exp`

  - `Pattern: Statement`

**Description.**

Patterns can be used in various contexts, but a common context is a PatternWithAction, which in its turn, may be used in
various statements such [Switch](#switch) and [Visit](#visit).

There are two variants as listed above:

  - When the subject matches *Pattern*, the expression *Exp* is evaluated and the subject is replaced with the result.

  - When the subject matches Pat, the Statement is executed. More statements can be executed by including them in a
    [Block](#block).

In [Switch](#switch) statements, only the form `Pattern : Statement` is allowed. When the subject matches
*Pattern*, the *Statement* is executed and the execution of the switch statement is complete. However, when a fail
statement is executed in *Statement* further alternatives of *Pattern* are tried. If no alternatives remain,
PatternWithAction as a whole fails and subsequent cases of the switch statement are tried.

In [Visit](#visit) expressions, the form `Pattern ⇒ Exp` describes subtree replacement: the current subtree
of the subject of the visit expression is replaced by the value of *Exp*. The form `Pattern : Statement` is as described
for switch statements, with the addition that execution of an [Insert](#insert) statement will replace the
current subtree. After both success or failure of the PatternWithAction, the traversal of the subject continues.

**Examples.**

Two examples of variant 1 (replacement):

``` rascal
case red(CTree l, CTree r) => red(r,l)
case red(l, r) => green(l, r)
```

Three examples of variant 2 (Statement):

``` rascal
case /Leila/: println("The topic is Starwars");
case red(_, _):    println("A red root node");
case red(_,_): c = c + 1;
```

The action may also be a [Block](#block):

``` rascal
case red(_,_): { c = c + 1; println("c = <c>"); }
```

## Statements

**Synopsis.**

All Rascal statements.

**Description.**

The following statements are available:

  - [Append](#append): Append an element to the list value produced by various loop statements.

  - [Assert](#assert): An executable assertion.

  - [Assignment](#assignment): Assign a value to a variable or more complex data structure.
    
      - [Annotation](#annotation):
    
      - [Constructor](#constructor): Assign to constructor.
    
      - [Field](#field): Assign to a field of a tuple, relation or datatype.
    
      - [IsDefined](#isdefined): Assign but replace if value is not defined.
    
      - [Multiple](#multiple): Assign to multiple assignables.
    
      - [Slice](#slice): Assign to a slice of a list or string.
    
      - [Subscription](#subscription): Assign a single element of a structured value.
    
      - [Variable](#variable): Assign to a variable.

  - [Block](#block): Group statements into a block.

  - [Break](#break): End the execution of a while, do or for loop.

  - [Continue](#continue): Continue with the next iteration of while, do or for loop.

  - [Do](#do): Repeat statements while condition holds.

  - [Fail](#fail): Let the current alternative of a pattern match fail.

  - [For](#for): For loop.

  - [If](#if): Conditional statement.

  - [Insert](#insert): Insert a value in a tree during a [Visit](#visit).

  - [Return](#return): Return a value as result of a \[Function\].

  - [Solve](#solve): Solve a set of equalities by fixed-point iteration.

  - [Switch](#switch):

  - [Test](#test): Test statement (*deprecated*).

  - [Throw](#throw):

  - [Try Catch](#try-catch): Try to execute a statement and catch resulting exceptions.

  - [Visit](#visit):

  - [While](#while): While loop.

![Statement Types](/images/statement-parts.png)

### Append

**Synopsis.**

Append an element to the list value produced by various loop statements.

**Syntax.**

`append Exp`

**Description.**

An append statement may only occur in the body of a [While](#while), [Do](#do) or
[For](#for) statement. It appends the value of *Exp* to the resulting list value of the loop construct in
which it occurs.

**Examples.**

``` rascal-shell
for(int i <- [1..5]) append i*i;
L = for(int i <- [1..5]) append i*i;
```

### Assert

**Synopsis.**

An executable assertion.

  - `assert Exp1`

  - `assert Exp1 : Exp2`

| `Exp1` | `Exp2` |
| ------ | ------ |
| `bool` | `str`  |

Types

**Description.**

An assert statement may occur everywhere where a declaration is allowed. It has two forms:

An assert statement consists of a Boolean expression *Exp*<sub>1</sub> and an optional string expression
*Exp*<sub>2</sub> that serves as a identifying message for this assertion.

When *Exp*<sub>1</sub> evaluates to `false`, an `AssertionFailed` exception is thrown.

**Examples.**

``` rascal-shell
assert 1==2 : "is never true";
int div(int x, int y) {
  assert y != 0 : "y must be non-zero";
  return x / y;
}
div(4,0);
```

### Assignment

**Synopsis.**

Assign a value to a variable or more complex data structure.

**Syntax.**

`Assignable AssignmentOp Exp`

where *AssignmentOp* may be one of `=`, `+=`, `-=`, `*=`, `/=`, or `?=`.

An *Assignable* is one of the following:

  - `Var`

  - `Assignable [ Exp ]`

  - `Assignable [ Exp .. Exp ]`

  - `Assignable [ Exp, Exp .. Exp ]`

  - `Assignable . Name`

  - `< Assignable, Assignable, …​, Assignable >`

  - `Assignable ? Exp`

  - `Assignable @ Name`

  - `Name ( Assignable, Assignable, …​ )`

**Description.**

The purpose of an assignment is to assign a new value to a simple variable or to an element of a more complex data
structure.

The standard assignment operator is `=`. The other assignment operators can be expressed as abbreviations for the
standard assignment operator.

| Assignment Operator | Equivalent to                   |
| ------------------- | ------------------------------- |
| `Assignable += Exp` | `Assignable = Assignable + Exp` |
| `Assignable -= Exp` | `Assignable = Assignable - Exp` |
| `Assignable *= Exp` | `Assignable = Assignable * Exp` |
| `Assignable /= Exp` | `Assignable = Assignable / Exp` |
| `Assignable &= Exp` | `Assignable = Assignable & Exp` |
| `Assignable ?= Exp` | `Assignable = Assignable ? Exp` |

An assignable is either a single variable, (the base variable), optionally followed by subscriptions, slices or field
selections. The assignment statement always results in assigning a completely new value to the base variable. We
distinguish the following forms of assignment:

  - [Annotation](#annotation):

  - [Constructor](#constructor): Assign to constructor.

  - [Field](#field): Assign to a field of a tuple, relation or datatype.

  - [IsDefined](#isdefined): Assign but replace if value is not defined.

  - [Multiple](#multiple): Assign to multiple assignables.

  - [Slice](#slice): Assign to a slice of a list or string.

  - [Subscription](#subscription): Assign a single element of a structured value.

  - [Variable](#variable): Assign to a variable.

### Annotation

**Synopsis.**

Assign to an annotation. This feature is deprecated.

**Description.**

The value *V* of *Assignable* is determined and should be of a type that has an annotation *Name*. A new value *V*' is
created that is a copy of *V* but with the value of annotation *Name* replaced by the value of *Exp*. *V*' is assigned
to *Assignable*. See [Annotation Declaration](#annotation).

**Examples.**

Examples have been removed since this feature is deprecated.

### Constructor

**Synopsis.**

Assign to constructor.

**Description.**

First the value *Exp* is determined and should be a data value of the form ``Name(V1, V2, …​, Vn).
Next the assignments `Assignablei = Vi`` are performed for 1 \<= i \<= n.

**Examples.**

``` rascal-shell
data FREQ = wf(str word, int freq);
W = wf("rascal", 1000);
wf(S, I) = W;
S;
I;
```

### Field

**Synopsis.**

Assign to a field of a tuple, relation or datatype.

**Description.**

The value `V` of *Assignable* is determined and should be of a type that has a field *Name*. The value of that field is
replaced in *V* by the value of *Exp* resulting in a new value *V*' that is assigned to *Assignable*.

**Examples.**

``` rascal-shell
data FREQ = wf(str word, int freq);
W = wf("rascal", 1000);
W.freq = 100000;
```

### IsDefined

**Synopsis.**

Assign but replace if value is not defined.

**Description.**

First the value of *Exp*<sub>1</sub> is determined and if that is defined it is assigned to *Assignable*. Otherwise, the
value of *Exp*<sub>2</sub> is assigned to *Assignable*. Values which can be undefined are values in [Map](#map)s
where the key is not set or values of [Annotations](#annotation) which have not been set yet.

No other values can be used in an undefined state, so the ? operator does not make sense on undefined or uninitialized
variables for example.

**Examples.**

``` rascal-shell
M = ("Andy": 1, "Brian" : 2);
```

Using an `isDefined` assignable can we increment a non-existing entry:

``` rascal-shell
M["SomebodyElse"] ? 0 += 1;
M["SomebodyElse"];
```

And if we increment an existing entry the ? has no effect:

``` rascal-shell
M["Andy"] ? 0 += 1;
M["Andy"]
```

### Multiple

**Synopsis.**

Assign to multiple assignables.

**Description.**

First the value *Exp* is determined and should be a tuple of the form `< V1, V2, …​, Vn >`. Next the assignments
`Assignablei = Vi` are performed for 1 \<= i \<= n.

**Examples.**

``` rascal-shell
<A, B, C> = <"abc", 2.5, [1,2,3]>;
A;
B;
C;
```

### Slice

**Synopsis.**

Assign to a slice of a list or string.

  - `Assignable [ Exp1 .. Exp_3 ] = Exp4`

  - `Assignable [ Exp1, Exp2 .. Exp3 ] = Exp4`

`Exp1` and `Exp3` are optional .Types

**Description.**

A slice assignment is defined for [List](#list), [String](#string) and [Node](#node) and aims to
replace a slice from the old value of the assignable by a new value. See [List Slice](#slice), [String
Slice](#slice) or [Node Slice](#slice) for a more detailed explanation of slicing.

Let *V* be the current value of *Assignable*.

  - `Assignable [ Exp1 .. Exp3 ] = Exp4`: The slice `[ Exp1 .. Exp3 ]` determines two indices `begin` (inclusive) and
    `end` (exclusive) in *V*. A new value *V*' is computed that is a copy of *V* but with all the elements in *V* with
    `begin ⇐ index < end` replaced by the elements of the value of *Exp*<sub>4</sub>. Note that the size of *V* and *V*'
    may differ. *V*' is assigned to the *Assignable*.

  - `Assignable [ Exp1, Exp2 .. Exp3 ] = Exp4`: The slice `[ Exp1, Exp2 .. Exp3 ]` determines two indices `begin`
    (inclusive) and `end` (exclusive) and a `step` between indices in \_V\</emphasis\>. A new value *V*' is computed
    that is a copy of *V* but with all the elements in *V* with indices `begin`, `begin+step`. …​ `end-step` ⇐ `index <
    end` replaced by the successive elements of the value of *Exp*<sub>4</sub>. Note that the size of *V* and *V*' may
    differ. *V*' is assigned to the *Assignable*. If the number of indices in the slice and the number of elements in
    the value of *Exp*<sub>4</sub> is not equal the following is done:
    
      - If the number of elements in the slice is larger: the elements of *Exp<sub>4</sub>* are used in a circular
        manner.
    
      - If the number of elements in the slice is smaller: the remaining elements of *Exp<sub>4</sub>* is inserted after
        the last index in the slice.

**Examples.**

Replace the elements with index 3, 4, 5 in `L`:

``` rascal-shell
L = [0,1,2,3,4,5,6,7,8,9];
L[3..6] = [100,200,300,400,500];
```

Replace the elements with index 1, 3, 5, 7 in `L` (note how the elements from `[100,200]` are used in a circular way):

``` rascal-shell
L = [0,1,2,3,4,5,6,7,8,9];
L[1,3..8] = [100,200];
```

Replace the elements with index 1, 3, 5, 7 in `L` (note how the unused elements from `[100,200,300,400,500]` are insert
at index 7):

``` rascal-shell
L = [0,1,2,3,4,5,6,7,8,9];
L[1,3..8] = [100,200,300,400,500];
```

Similar examples for slicing assignment on strings:

``` rascal-shell
S = "abcdefghij";
S[3..6] = "UVWXYZ";
S = "abcdefghij";
S[1,3..8] = "XY";
S = "abcdefghij";
S[1,3..8] = "UVWXYZ";
```

Replace the elements with index 3, 4, 5 in node `N`:

``` rascal-shell
N = "f"(0,true,2,"abc",4,5.5,6,{7,77},8,{9,99,999});
N[3..6] = [100,200,300,400,500];
```

Replace the elements with index 1, 3, 5, 7 in `L` (note how the elements from `[100,200]` are used in a circular way):

``` rascal-shell
N = "f"(0,true,2,"abc",4,5.5,6,{7,77},8,{9,99,999});
N[1,3..8] = [100,200];
```

Replace the elements with index 1, 3, 5, 7 in `L` (note how the unused elements from `[100,200,300,400,500]` are insert
at index 7):

``` rascal-shell
N = "f"(0,true,2,"abc",4,5.5,6,{7,77},8,{9,99,999});
N[1,3..8] = [100,200,300,400,500];
```

### Subscription

**Synopsis.**

Assign a single element of a structured value.

**Description.**

Let *V* be the current value of *Assignable*. The value of *Exp*<sub>1</sub> is used as index in *V* and the value of
*Exp*<sub>2</sub> replaces the original value at that index position. The result is a new value *V*' that is assigned to
the *Assignable*.

**Examples.**

``` rascal-shell
```

Assignable has a list value:

``` rascal-shell
L = [10,20,30];
P = L;
L[1] = 200;
```

Observe that `P` is unchanged:

``` rascal-shell
P;
```

Assignable has a map value:

``` rascal-shell
M = ("abc": 1, "def" : 2);
M["def"] = 3;
```

Assignable has a tuple value:

``` rascal-shell
T = <1, "abc", true>;
T[1] = "def";
```

> **Note**
> 
> See <https://github.com/usethesource/rascal/issues/948>

### Variable

**Synopsis.**

Assign to a variable.

**Description.**

The expression *Exp* is evaluated and its value is assigned to the variable *Var*.

**Examples.**

``` rascal-shell
N = 3;
N;
```

### Block

**Synopsis.**

Group statements into a block.

**Syntax.**

`{ Statement1; …​ ; Statementn }`

**Description.**

A *block* consists of a sequence of statements separated by semi-colons.

Since a block is itself a statement, it may be used in all places where a statement is required. A block also introduces
a new scope and variables that are declared in the block are local to that block. The value produced by a block is the
value produced by its last statement (if any).

**Examples.**

Here is a contrived block of three expressions (be aware of the last semi-colon):

``` rascal-shell
{1;2;3;}
```

its value is `3`.

The effect of a local variable declared in a block can be seen as follows:

``` rascal-shell
{int x = 3; x*x;}
```

After the block we cannot refer to `x`:

``` rascal-shell
x;
```

### Break

**Synopsis.**

End the execution of a while, do or for loop.

**Description.**

A `break` statement is only allowed inside the body of a [While](#while), [Do](#do) or
[For](#for) statement and is associated with the innermost loop statement in which it is contained. Its
effect is to end the execution of the loop.

Also see [Continue](#continue) and [Fail](#fail).

**Examples.**

Here is an example using break to find the first number divisible by 3:

``` rascal-shell
import IO;
for(int i <- [1 .. 10]){
    if(i % 3 == 0){
       println("i = <i> is divisible by 3");
       break;
    }
}
```

### Continue

**Synopsis.**

Continue with the next iteration of while, do or for loop.

**Description.**

A continue statement is only allowed inside the body of a [While](#while), [Do](#do) or
[For](#for) statement and is associated with the innermost loop statement in which it is contained. Its
effect is to end the execution of the block for the current iteration of the loop and to continue with the next
iteration of the loop.

Also see [Break](#break) and [Fail](#fail).

**Examples.**

Here is an example using continue to avoid printing numbers that are divisible by 3:

``` rascal-shell
import IO;
for(int i <- [1 .. 10]){
    if(i % 3 == 0)
       continue;
    println("i = <i>");
}
```

### Do

**Synopsis.**

Repeat statements while condition holds.

**Syntax.**

`do Statement while ( Exp );`

**Description.**

*Statement* is executed repeatedly, as long as the Boolean expression *Exp* yields true. Expression *Exp* is executed
from scratch in each repetition and only the first true value (if any) is used.

By default, the value of a do statement is the empty list. In general, the value of a do statement consists of all
values contributed by [Append](#append) statements that are executed during the repeated execution of its
body Statement.

**Examples.**

``` rascal-shell
import IO;
int n = 3;
do { println("n = <n>"); n -= 1; } while (n > 0);
```

Now build a list result using the `append` statement:

``` rascal-shell
n = 3;
do { append n * n; n -= 1; } while (n > 0);
```

### Fail

**Synopsis.**

Let the current alternative of a pattern match fail.

**Syntax.**

`fail;`

**Description.**

A `fail` statement is only allowed in statements that are controlled by the outcome of a pattern match:

  - The [Patterns](#patterns) in a [???](#pattern-with-Action) in [Switch](#switch) or
    [Visit](#visit) statement controls the statements in the action part.

  - The test (expression) of a [While](#while) or [Do](#do) statement controls the statements in
    the body part.

  - The test (expressions) of a [For](#for) statement control the statements in the body part.

  - The formal parameter declaration of a [Function Declaration](#function).

The `fail` statement is associated with the innermost pattern match by which it is controlled.

When `fail` is executed:

  - If the associated pattern has more alternatives, the next alternative is explored,

  - otherwise the pattern as a whole fails.
    
      - In the case of switch or visit this means that the next case will be tried.
    
      - For while, do and for, this implies that any bindings caused by the pattern are undone and that the next
        alternative in the test is tried; otherwise the loop is terminated.
    
      - For a function call it means that the next function declaration (or the default one) is tried.

**Examples.**

Here is an example taken from [Bubble](/docs/Recipes#Bubble). It uses a `fail` for the case that no unsorted element can be
found in the list of numbers. As a result, the whole case fails and the default case is used.

``` rascal-shell
import IO;
public list[int] sort(list[int] numbers){
  switch(numbers){
    case [*int nums1, int p, int q, *int nums2]:
       if(p > q){
          return sort(nums1 + [q, p] + nums2);
       } else {
          fail;
       }
     default: return numbers;
   }
}
sort([10, 1, 5, 3]);
```

### For

**Synopsis.**

For loop.

**Syntax.**

`for ( Exp1 , Exp2 , …​ , Expn ) Statement;`

**Description.**

The for-statement executes *Statement* for all possible combinations of values generated, and filtered, by the
expressions *Exp*<sub>i</sub>.

Some of the expressions can generate bindings ([Enumerator](#enumerator),
[Boolean,Match](#values)), and some can filter them ([Boolean](#values)). The for loop will
iterate over the cartesian product of all the generating expressions, and filter the combinations which fail the
conditional expressions.

By default, the value of a for statement is the empty list. In general, the value of a for statement consists of all
values contributed by [Append](#append) statements that are executed during the repeated execution of its
body Statement.

**Examples.**

``` rascal-shell
import IO;
for(int n <- [1 .. 5]) println("n = <n>");
for(int n <- [1 .. 5]) append n * n;
```

### If

**Synopsis.**

Conditional statement.

  - `if ( Exp ) Statement;`

  - `if ( Exp ) Statement1 else Statement2;`

| `Exp`  | `if ( Exp ) Statement;` |
| ------ | ----------------------- |
| `bool` | `void`                  |

Types

| `Exp`  | `Statement1`    | `Statement2`    | `if ( Exp ) Statement1 else Statement2;` |
| ------ | --------------- | --------------- | ---------------------------------------- |
| `bool` | *T<sub>1</sub>* | *T<sub>2</sub>* | `lub(T1, T2)`                            |

**Description.**

The test *Exp* is evaluated and its outcome determines the statement to be executed: *Statement*<sub>1</sub> if *Exp*
yields `true` and *Statement*<sub>2</sub> otherwise. The value of an if-then statement is equal to *Statement* when its
test is true. Otherwise it is void. The value of an if-then-else statement is the value of the statement that was
executed.

**Examples.**

``` rascal-shell
if( 3 > 2 ) 30; else 40;
x = if( 3 > 2 ) 30; else 40;
if( 3 > 2 ) 30;
```

An if-then statement yields `void` when its test is false (demonstrated by the *ok* that is printed by the Rascal
system):

``` rascal-shell
if( 2 > 3 ) 30;
```

### Insert

**Synopsis.**

Insert a value in a tree during a [Visit](#visit).

**Syntax.**

`insert Exp;`

**Description.**

An insert statement may only occur in the action part of a [Pattern With Action](#patternwithaction), more
precisely in a case in a [Visit](#visit) expression. The value matched by the pattern of this case is
replaced by the value of *Exp*.

The following rule applies:

  - The static type of *Exp* should be a subtype of the type of the value that is replaced.

**Examples.**

Consider the following datatype `CTree` and assign a CTree value to variable `T`:

``` rascal-shell
data CTree = leaf(int n) | red(CTree left, CTree right) | green(CTree left, CTree right);
CTree T = red(green(leaf(1), red(leaf(2), leaf(3))), red(leaf(4), leaf(5)));
```

We can now switch the arguments of all red nodes as follows:

``` rascal-shell
visit(T){
  case red(CTree l, CTree r): insert red(r,l);
}
```

Since this is a very common idiom, we also have a shorthand for it:

``` rascal-shell
visit(T){
  case red(CTree l, CTree r) => red(r,l)
}
```

**Pitfalls.**

There is a glitch in the Rascal syntax that *requires* a semicolon after a case (as in the first example), but refuses
it in the abbreviated version using `⇒` (the second example).

### Return

**Synopsis.**

Return a value as result of a \[Function\].

  - `return;`

  - `return Exp`

**Description.**

A return statement comes in two variants: without and with an expression, both variants end the execution of the current
function. The first variant applies to functions with `void` as return type. The second variants applies to non-void
functions and returns the value of *Exp* as result of the function invocation. The following rules apply:

  - The static type of *Exp* should be compatible with the declared return type of the function in which the return
    statement occurs.

  - In each function with a return type that is not void, every possible execution path through the body of the function
    should end in a return statement.

In each function with a return type that is void, a return statement is implicitly assumed at the end of each execution
path through the function body.

**Examples.**

``` rascal-shell
int twice(int n) { return 2 * n; }
twice(5);
```

Functions that only return a value can be abbreviated (and the return is implicit):

``` rascal-shell
int twiceb(int n) = 2 * n;
twiceb(5);
```

### Solve

**Synopsis.**

Solve a set of equalities by fixed-point iteration.

**Syntax.**

`solve(Var1, Var2, …​, Varn; Exp) Statement;`

**Description.**

Rascal provides a solve statement for performing arbitrary fixed-point computations. This means, repeating a certain
computation as long as it causes changes. This can, for instance, be used for the solution of sets of simultaneous
linear equations but has much wider applicability.

The solve statement consists of the variables for which a fixed point will be computed and a statement. Optionally, an
expression *Exp* directly following the list of variables gives an upper bound on the number of iterations.

Statement can use and modify the listed variables *Var*<sub>i</sub>. The statement is executed, assigning new values to
the variables *Var*<sub>i</sub>, and this is repeated as long as the value of any of the variables was changed compared
to the previous repetition. Note that this computation will only terminate if the variables range over a so-called
*bounded monotonic lattice*, in which values can only become larger until a fixed upper bound or become smaller until a
fixed lower bound.

**Examples.**

Let’s consider transitive closure as an example (transitive closure is already available as built-in operator, we use it
here just as a simple illustration). Transitive closure of a relation is usually defined as:

``` rascal
R+ = R + (R o R) + (R o R o R) + ...
```

In other words, it is the union of successive [Relation Composition](#composition)s of `R` with itself. For a
given relation `R` this can be expressed as follows:

``` rascal-shell
rel[int,int] R = {<1,2>, <2,3>, <3,4>};
T = R;
solve (T) {
          T = T + (T o R);
        }
```

### Switch

**Synopsis.**

The switch statement is a control flow statement where the next block is selected by pattern matching against a number
of `case` patterns.

**Syntax.**

``` rascal
switch ( Exp ) {
case PatternWithAction1;
case PatternWithAction2;
...
default: ...
}
```

**Description.**

A switch statement is similar to a switch statement in C or Java. The value of the expression *Exp* is the subject term
that will be matched by the successive [Pattern With Action](#patternwithaction)s in the switch statement. The
switch statement provides only matching at the top level of the subject term and does not traverse it. The type of the
pattern in each case must be identical to the type of the subject term (or be a supertype of it). If no case matches,
the switch acts as a dummy statement. There is no fall through from one case to the next.

**Examples.**

Suppose we want to naively analyze a sentence and print the topic it is about:

``` rascal-shell
import IO;
S = "Princess Leila sipped from her rum punch";
switch(S){
  case /Leila/: println("The topic is Star Wars");
  case /rum/:   println("The topic is Drunken man");
  case /punch/: println("The topic is Kick Boxing");
}
```

From the printed message you can infer that the cases are tried in the order in which they occur.

**Pitfalls.**

The switch statement does not yet return a value, this will be changed.

### Test

**Synopsis.**

Test statement (*deprecated*).

**Description.**

The `test` statement is deprecated and is replaced by the `test` modifier in function declarations, see [Function
Declaration](#function).

### Throw

**Synopsis.**

Throw any value as an exception up the call stack.

**Syntax.**

`throw Exp`

**Description.**

A throw statement causes the immediate abortion of the execution of the current function with *Exp* \\'s value as
exception value. The exception can be caught by a [Try Catch](#try-catch) statement in the current function or
in one of its callers. If the exception is not caught, the execution of the Rascal program is terminated. The following
rules apply:

  - The static type of *Exp* should be `RuntimeException`, see
    [RuntimeException](/docs/Libraries#runtimeexception).

  - The Rascal program may contain data declarations that extend the type `RuntimeException`.

**Examples.**

Here is a a variant of string concatenation for ball haters:

``` rascal-shell
str conc(str x, str y){ if("ball" in {x, y}) throw "I hate balls"; return x + y; }
conc("fairy", "tale");
conc("foot", "ball");
```

### Try Catch

**Synopsis.**

Try to execute a statement and catch resulting exceptions.

**Syntax.**

``` rascal
try
   Statement1;
catch PatternWithAction1;
catch PatternWithAction2;
...
catch: Statement2;
finally: Statement3;
```

**Description.**

A try catch statement has as purpose to catch any [Exceptions](/docs/Libraries#exception) that are raised during the
execution of *Statement*<sub>1</sub>. These exceptions may caused by:

  - The execution of an explicit [Throw](#throw) statement.

  - The Rascal system that discovers an abnormal condition, e.g., an out of bounds error when accessing a list element.

Note that all elements of the try catch statement are optional but that at least one has to be present. Their meaning is
as follows:

  - If a pattern of some *PatternWithAction<sub>i</sub>* matches, the corresponding action is executed.

  - Otherwise, *Statement<sub>2</sub>* is executed (when present).

  - Before leaving the try catch statement *Statement<sub>3</sub>* is always executed (when present).

**Examples.**

Let’s define a variant of the [head](/docs/Libraries#head) function that returns the first element of a list, but throws
an exception when the list is empty. Our variant will return `0` for an empty list:

``` rascal-shell
import List;
import Exception;
int hd(list[int] x) { try return head(x); catch: return 0; }
hd([1,2,3]);
hd([]);
```

We can also be more specific and catch the `EmptyList` exception (which is available here since we have imported the
`Exception` module):

``` rascal-shell
int hd2(list[int] x) { try return head(x); catch EmptyList(): return 0; }
hd2([]);
```

### Visit

**Synopsis.**

The [Visit](#visit) expression can also be used directly as a statement

**Syntax.**

See [???](#visit).

**Description.**

See [Visit](#visit) for the details.

**Examples.**

``` rascal-shell
x = [[1],[2],[3]];
if (true) {
  // this visit is a nested statement in an if block:
  visit (x) {
    case int i => i + 1
  }
}
```

### While

**Synopsis.**

While loop.

**Syntax.**

`while ( Exp ) Statement;`

**Description.**

The Boolean expression *Exp* is evaluated repeatedly and *Statement* is executed when the test is true. Execution ends
the first time that the test yields false. The test *Exp* is executed from scratch in each repetition and only the first
`true` value (if any) is used. This is relevant when *Exp* contains a [Boolean Match](#match) or [Boolean
NoMatch](#nomatch) operator.

By default, the value of a while statement is the empty list. In general, the value of a while statement consists of all
values contributed by [Append](#append) statements that are executed during the repeated execution of its
body *Statement*.

**Examples.**

``` rascal-shell
import IO;
int n = 3;
while( n > 0 ) { println("n = <n>"); n -= 1; }
```

Now build a list result using the `append` statement:

``` rascal-shell
n = 3;
while (n > 0) { append n * n; n -= 1; }
```

Just to be sure, a [List Comprehension](#comprehension) is the superior way to write this:

``` rascal-shell
[n * n | n <- [3 .. 1]];
```
