---
sidebar_position: 4
title: Concepts
---

**Synopsis.**

Gentle introduction to the main concepts of the Rascal language.

**Description.**

Rascal is based on a dozen concepts and having a global understanding of them will help to grasp the language more
quickly. Here we will informally explain and illustrate these concepts and often we will refer to the [Rascal Language
Reference](/Rascal) for further details. In other words, we are providing here a friendly front-end for the actual
language description.

Most language concepts are described separately but some features we just mention here:

  - Rascal programs consist of modules that are organized in packages.

  - Modules can import other modules.

  - The visibility of entities declared in modules can be controlled using public/private modifiers.

  - Data structures may have annotations that can be explicitly used and modified.

  - There is an extensive library for built-in datatypes, input/output, fact extraction from Java source code,
    visualization, and more.

Here are the concepts to be discussed:

  - [Static Typing](#RascalConcepts-StaticTyping): Static type checking.

  - [Datatypes](#RascalConcepts-Datatypes): Built-in and user-defined datatypes.

  - [Immutable Values](#RascalConcepts-ImmutableValues): Immutable values.

  - [Comprehensions](#RascalConcepts-Comprehensions): Comprehensions for generating values.

  - [Pattern Matching](#RascalConcepts-PatternMatching): Pattern matching.

  - [Control Structures](#RascalConcepts-ControlStructures): Success-directed control structures.

  - [Case Distinction](#RascalConcepts-CaseDistinction): Case distinction via pattern matching.

  - [Visiting](#RascalConcepts-Visiting): Visiting tree structures and arbitrary values.

  - [Functions](#RascalConcepts-Functions): Functions and pattern-directed invocation.

  - [Syntax Definition and Parsing](#RascalConcepts-SyntaxDefinitionAndParsing): Syntax definition and parser generation
    for new languages.

  - [IDE Construction](#RascalConcepts-IDEConstruction): Extend an IDE with interactive, language-specific, features
    (Eclipse only).

  - [Code Models](#RascalConcepts-CodeModels): Code models are abstract representations of source code.

  - [Enumerating](#RascalConcepts-Enumerating): Enumerating values.

  - [Equation Solving](#RascalConcepts-EquationSolving): Solving equations by fixed-point iteration.

  - [Rewriting](#RascalConcepts-Rewriting): Rewriting using pattern-directed invocation.

# Static Typing

**Synopsis.**

Static type checking.

![Type Lattice](/images/type-lattice.png)

**Description.**

Rascal has a static and a dynamic type system, which interact with eachother. The static type system is used by a type
checker (not yet released) to predict errors and give warnings where possibly slipups have been made. The dynamic type
system ensures well-formedness of data structures and plays an important role while pattern matching, since many
algorithms dispatch on the types of values.

Rascal’s static type system does not ensure that all functions will go right: \* functions may throw exceptions. \*
functions may not be defined for the specific pattern which occur on the call site.

However, the static type system will produce an error when a function will certainly throw an exception, or when it is
certainly not defined for a certain case. Also it catches some logical tautologies and contradictions which would lead
to dead code.

The Rascal types are ordered in a so-called *type lattice* shown in the figure above.

The arrows describe a *subtype-of* relation between types. The type `void` is the *smallest* type and is included in all
other types and the type `value` is the *largest* type that includes all other types. We also see that `rel` is a
subtype of `set` and that each ADT is a subtype of `node`. A special role is played by the datatype `Tree` that is the
generic type of syntax trees. Syntax trees for specific languages are all subtypes of `Tree`. As a result, syntax trees
can be addressed at two levels:

  - in a generic fashion as `Tree` and,

  - in a specific fashion as a more precisely typed syntax tree. Finally, each `alias` is structurally equivalent to one
    or more specific other types.

Rascal does not provide an explicit casting mechanism (as in Java), but pattern matching can play that role.

The language provides higher-order, parametric polymorphism. A type aliasing mechanism allows documenting specific uses
of a type. Built-in operators are heavily overloaded. For instance, the operator `+` is used for addition on integers
and reals but also for list concatenation, set union and the like.

**Examples.**

Some example can illustrate the above.

``` rascal-shell
int I = 3;
```

Since I is declared as type `int`, we cannot assign a `real` value to it:

``` rascal-shell
I = 3.5;
```

``` rascal-shell
num N = 3;
```

Since N is declared as type `num`, we can assign both `int` and `real` values to it:

``` rascal-shell
N = 3.5;
```

Since all types are a subtype of type `value`, one can assign values of any type to a variable declared as `value`:

``` rascal-shell
value V = 3;
V = "abc";
V = false;
```

We can use pattern matching to classify the actual type of a value:

``` rascal-shell
str classify(value V){
  switch(V){
    case str S: return "A string";
    case bool B: return "A Boolean";
    default: return "Another type";
  }
}
classify(V);
V = 3.5;
classify(V);
```

In addition to these standard examples, it is interesting that all [Algebraic Data
Types](/Rascal#Declarations-AlgebraicDataType) are subtypes of type `node`. Let’s introduce a simple `Color` data type:

``` rascal-shell
data Color = red(int level) | blue(int level);
```

Unsurprisingly, we have:

``` rascal-shell
Color C = red(3);
```

Due to subtyping, we can also have:

``` rascal-shell
node ND = red(3);
```

One example of the actual application of subtypes can be found in [Count
Constructors](/Recipes#Common-CountConstructors).

# Datatypes

**Synopsis.**

Built-in and user-defined datatypes.

**Description.**

Rascal provides a rich set of datatypes:

  - [Boolean](/Rascal#Values-Boolean) (`bool`).

  - Infinite precision [Integer](/Rascal#Values-Integer) (`int`), [Real](/Rascal#Values-Real) (`real`), and
    [Number](/Rascal#Values-Number) (`num`).

  - [String](/Rascal#Values-String)s (`str`) that can act as templates with embedded expressions and statements.

  - Source code [Location](/Rascal#Values-Location)s (`loc`) based on an extension of Universal Resource Identifiers
    (URI) that allow precise description of text areas in local and remote files.

  - Date and time values ([DateTime](/Rascal#Values-DateTime), `datetime`).

  - [List](/Rascal#Values-List) (`list`).

  - [Tuple](/Rascal#Values-Tuple) (`tuple`).

  - [Set](/Rascal#Values-Set) (`set`).

  - [Map](/Rascal#Values-Map) (`map`)

  - [Relation](/Rascal#Values-Relation) (`rel`).

  - Untyped tree structures ([Node](/Rascal#Values-Node), `node`).

  - User-defined algebraic datatypes ([Algebraic Data Type](/Rascal#Declarations-AlgebraicDataType), `data`) allow the
    introduction of problem-specific types and are a subtype of node. This makes it possible to have typed and untyped
    views on the same data. A special case are syntax trees that are the result of parsing source files are represented
    as datatypes (`Tree`).

There is a wealth of built-in operators and library functions available on the standard datatypes.

These built-in datatypes are closely related to each other:

  - In a list all elements have the same static type and the order of elements matters. A list may contain the same
    value more than once.

  - In a set all elements have the same static type and the order of elements does not matter. A set contains an element
    only once. In other words, duplicate elements are eliminated and no matter how many times an element is added to a
    set, it will occur in it only once.

  - In a tuple all elements (may) have a different static type. Each element of a tuple may have a label that can be
    used to select that element of the tuple.

  - A relation is a set of tuples which all have the same static tuple type.

  - A map is an associative table of (key, value) pairs. Key and value (may) have different static type and a key can
    only be associated with a value once.

**Examples.**

Here are some examples of the built-in data types:

| *Type*             | *Examples*                                        |
| ------------------ | ------------------------------------------------- |
| `bool`             | `true`, `false`                                   |
| `int`              | `11, 101, 1-11, 1123456789`                       |
| `real`             | `1.01, 11.0232e201, 1-25.5`                       |
| `str`              | `"abc"`, `"first\nnext"`, `"result: <X>"`         |
| `loc`              | `\|file:///etc/passwd\|`                          |
| `dateTime`         | `$2101-09-05T07:16:19.714+0200$`                  |
| `tuple[T1,…​,_Tn]` | `<1,2>`, `<"john", 43, true>`                     |
| `list[T]`          | `[]`, `[1]`, `[1,2,3]`, `[true, 2, "abc"]`        |
| `set[T]`           | `{}`, `{1,2,3,5,7}`, `{"john", 4.0}`              |
| `rel[T1,…​,_Tn]`   | `{<1,2>,<2,3>,<1,3>}`, `{<1,10,100>, <2,20,200>}` |
| `map[T, U]`        | `()`, `(1:true, 2:false)`, `("a":1, "b":2)`       |
| `node`             | `f()`, `add(x,y)`, `g("abc", [2,3,4])`            |

A fragment of the datatype that defines the abstract syntax for statements (assignment, if, while) in a programming
language would look as follows:

``` rascal
data STAT = asgStat(Id name, EXP exp)
          | ifStat(EXP exp,list[STAT] thenpart,
                           list[STAT] elsepart)
          | whileStat(EXP exp, list[STAT] body)
          ;
```

Here are some examples how Rascal responds to values of the above built-in datatypes:

``` rascal-shell
true;
101;
3.14;
"Rascal";
|file:///etc/passwd|;
$2101-09-05$;
[30, 20, 10];
<"Rascal", 100000>;
{"apples", "oranges", "bananas"};
{<"apples", 10, 15>, <"oranges", 5, 7>, <"bananas", 9, 11>};
("apples" : 100, "oranges": 150, "bananas": 75);
"abc"(1, 2, 3);
```

# Immutable Values

**Synopsis.**

Immutable values.

**Description.**

Values are the basic building blocks of a language and the type of values determines how they may be used.

Rascal is a *value-oriented language*. This means that values are immutable and are always freshly constructed from
existing parts. For instance, replacing an element in a list does not modify the original list but produces a new list
that only differs from the original one in the modified position.

The language also provides variables. A value can be associated with a variable as the result of an explicit assignment
statement: during the lifetime of a variable different (immutable) values may be assignment to it. Other ways to
associate a value with a variable is by way of function calls (binding of formal parameters to actual values) and as the
result of a successful pattern match.

The approach that values are immutable and that variables can be associated with different immutable values during their
lifetime avoids sharing and aliasing problems that exist in many languages.

**Examples.**

First we, create a list value and assign it to two variables `L` and `M`.

``` rascal-shell
L = [1, 2, 3];
M = L;
```

Next we assign a new value to the first element of the list. The effect is that a new list value `[10, 2, 3]` is
constructed.

``` rascal-shell
L[0] = 10;
```

L is now associated with this new value:

``` rascal-shell
L;
```

But `M` is still associated with the original, unmodified, value.

``` rascal-shell
M;
```

In pointer-based languages and in object-oriented languages the change to the original value of `L` would also be
visible via `M`.

String values are, like all other values, also immutable. Let’s experiment with the
[replaceAll](/Libraries#String-replaceAll) function:

``` rascal-shell
import String;
replaceAll("abracadabra", "a", "A");
```

Now assign to variables `S` and `T` the string `"abracadabra"` and let’s see what happens:

``` rascal-shell
S = "abracadabra";
T = S;
S = replaceAll("abracadabra", "a", "A");
S;
T;
```

To summarize: all values are immutable and variables can during their lifetime be associated with different immutable
values.

  - Immutable values contribute to referential transparence.

<!-- end list -->

  - Immutable values maybe less efficient than mutable ones.

# Comprehensions

**Synopsis.**

Comprehensions for generating values.

**Description.**

Comprehensions are a notation inspired by mathematical [set-builder
notation](http://en.wikipedia.org/wiki/Set-builder_notation) and [list
comprehensions](http://en.wikipedia.org/wiki/List_comprehension) that help to write succinct definitions of lists and
sets. They are also inspired by queries as found in a language like SQL.

Rascal generalizes comprehensions in various ways. Comprehensions exist for lists, sets and maps. A comprehension
consists of an expression that determines the successive elements to be included in the result and a list of enumerators
and tests (boolean expressions). The enumerators produce values and the tests filter them.

See [Comprehensions](/Rascal#Expressions-Comprehensions), [List Comprehension](/Rascal#List-Comprehension), [Set
Comprehension](/Rascal#Set-Comprehension), and [Map Comprehension](/Rascal#Map-Comprehension) for details.

**Examples.**

A standard example is

``` rascal-shell
{ x * x | int x <- [1 .. 10], x % 3 == 0 }
```

i.e., the squares of the integers in the range `[ 1 .. 10 ]` that are divisible by 3. A more intriguing example (that we
do not give in full detail) is

``` rascal
{name | /asgStat(Id name, _) <- P}
```

which traverses program `P` (using the *descendant match* operator `/`, see [Patterns](/Rascal#Patterns-Abstract)) and
constructs a set of all identifiers that occur on the left hand side of assignment statements in `P`.

# Pattern Matching

**Synopsis.**

Pattern matching.

**Description.**

Pattern matching determines whether a given pattern matches a given value. The outcome can be `false` (no match) or
`true` (a match). A pattern match that succeeds may bind values to variables.

Pattern matching is *the* mechanism for case distinction ([Switch](/Rascal#Statements-Switch) statement) and search
([Visit](/Rascal#Expressions-Visit) statement) in Rascal. Patterns can also be used in an explicit match operator `:=`
and can then be part of larger boolean expressions. Since a pattern match may have more than one solution, local
backtracking over the alternatives of a match is provided. Patterns can also be used in
[Enumerators](/Rascal#Comprehensions-Enumerator)s and control structures like [For](/Rascal#Statements-For) and
[While](/Rascal#Statements-While) statement.

A very rich pattern language is provided that includes string matching based on regular expressions, matching of
abstract patterns, and matching of concrete syntax patterns. Some of the features that are provided are list
(associative) matching, set (associative, commutative, idempotent) matching, and deep matching of descendant patterns.
All these forms of matching can be used in a single pattern and can be nested. Patterns may contain variables that are
bound when the match is successful. Anonymous (don’t care) positions are indicated by the underscore (`_`). See
[Patterns](/Rascal#Rascal-Patterns) for more details.

**Examples.**

Here is a *regular expression* that matches a line of text, finds the first alphanumeric word in it, and extracts the
word itself as well as the before and after it (`\W` matches all non-word characters; `\w` matches all word characters):

``` rascal
/^<before:\W*><word:\w+><after:.*$>/
```

Regular expressions follow the Java regular expression syntax with one exception: instead of using numbered groups to
refer to parts of the subject string that have been matched by a part of the regular expression we use the notation:

``` rascal
Name</emphasis>:_RegularExpression_>
```

If `RegularExpression` matches, the matched substring is assigned to string variable `Name`.

The following abstract pattern matches the abstract syntax of a while statement defined earlier:

``` rascal
whileStat(EXP Exp, list[STAT] Stats)
```

Variables in a pattern are either explicitly declared in the pattern itself---as done in the example---or they may be
declared in the context in which the pattern occurs. So-called multi-variables in list and set patterns are declared by
a `  ` suffix: `X</emphasis>` is thus an abbreviation for `list[…​] X` or `set[…​] X`, where the precise element type
depends on the context. The above pattern can then be written as

``` rascal
whileStat(EXP Exp, Stats*)
```

or, if you are not interested in the actual value of the statements as

``` rascal
whileStat(EXP Exp, _*)
```

When there is a grammar for this example language, we can also write concrete patterns as described in [Concrete
Patterns](/Rascal#Patterns-Concrete).

# Control Structures

**Synopsis.**

Success-directed control structures.

**Description.**

The flow of Rascal program execution is completely explicit. Boolean expressions determine choices that drive the
control structures. Only local backtracking is provided in the context of boolean expressions and pattern matching.

Control structures like [If](/Rascal#Statements-If), [While](/Rascal#Statements-While) and [For](/Rascal#Statements-For)
statement are driven by Boolean expressions. Actually, combinations of generators and Boolean expressions can be used to
drive the control structures. In the latter case, the Boolean expression is executed for each generated value.

**Examples.**

A classical if statement:

``` rascal
if(N <= 0)
     return 1;
  else
     return N * fac(N - 1);
```

A combination of a generator and a test:

``` rascal
for(/asgStat(Id name, _) <- P, size(name) > 10){
    println(name);
}
```

This statement prints all identifiers in assignment statements (`asgStat`) that consist of more than 10 characters.

# Case Distinction

**Synopsis.**

Case distinction via pattern matching.

**Description.**

The switch statement as known from C and Java is generalized: the subject value to switch on may be an arbitrary value
and the cases are arbitrary patterns followed by a statement. Each case is comparable to a *transaction*: when the
pattern succeeds and the following statement is executed successfully, all changes to variables made by the statement
are committed and thus become permanent. The variables bound by the pattern are always local to the statement associated
with the case.

See [Switch](/Rascal#Statements-Switch),[Visit](/Rascal#Expressions-Visit) and [Pattern With
Action](/Rascal#Patterns-PatternWithAction) for more details.

**Examples.**

We use the [ColoredTrees](/Recipes#Common-ColoredTrees) datatype as example and use a switch to distinguish between red
and black nodes:

``` rascal-shell
data ColoredTree =
      leaf(int N)
    | red(ColoredTree left, ColoredTree right)
    | black(ColoredTree left, ColoredTree right);
ColoredTree CT = red(black(leaf(1), red(leaf(2),leaf(3))), black(leaf(3), leaf(4)));
import IO;
switch (CT){
case red(_, _):
     println("A red root node");
case black(_, _):
     println("A black root node");
}
```

# Visiting

**Synopsis.**

Visiting tree structures and arbitrary values.

**Description.**

Visiting the elements of a data structure is one of the most common operations in our domain and the visitor design
pattern is a solution known to every software engineer. Given a tree-like data structure we want to perform an operation
on some (or all) nodes of the tree. The purpose of the visitor design pattern is to decouple the logistics of visiting
each node from the actual operation on each node. In Rascal the logistics of visiting is completely automated.

Visiting is achieved by way of visit expressions that resemble the switch statement. A visit expression traverses an
arbitrarily complex subject value and applies a number of cases to all its subtrees. All the elements of the subject are
visited. When one of the cases matches the statements associated with that case are executed. These cases may:

  - cause some side effect, i.e., assign a value to local or global variables;

  - execute an [Insert](/Rascal#Statements-Insert) statement that replaces the current element;

  - execute a [Fail](/Rascal#Statements-Fail) statement that causes the match for the current case to fail.

The value of a visit expression is the original subject value with all replacements made as dictated by matching cases.
The traversal order in a visit expressions can be explicitly defined by the programmer.

**Examples.**

Examples of visiting are, for instance, given in the Recipes [ColoredTrees](/Recipes#Common-ColoredTrees) and
[Derivative](/Recipes#Common-Derivative).

# Functions

**Synopsis.**

Functions and pattern-directed invocation.

**Description.**

Functions allow the definition of frequently used operations. They have a name and formal parameters. They are
explicitly declared and are fully typed. Functions can also be used as values thus enabling higher-order functions.
Rascal is a higher-order language in which functions are first-class values.

See [Function Declaration](/Rascal#Declarations-Function) for details.

**Examples.**

Here is an example of a function that counts the number of assignment statements in a program:

``` rascal
int countAssignments(PROGRAM P){
    int n = 0;
    visit (P){
    case asgStat(_, _):
         n += 1;
    }
    return n;
}
```

Consider the following use of higher-order functions:

``` rascal
int double(int x) { return 2 * x; }

int triple(int x) { return 3 * x; }

int f(int x, int (int) multi){ return multi(x); }
```

The functions `double` and `triple` simply multiply their argument with a constant. Function `f` is, however, more
interesting. It takes an integer `x` and a function `multi` (with integer argument and integer result) as argument and
applies multi to its own argument. `f(5, triple)` will hence return `15`. Function values can also be created
anonymously as illustrated by the following, alternative, manner of writing this same call to `f`:

``` rascal
f(5, int (int y){return 3 * y;});
```

Here the second argument of `f` is an anonymous function.

# Syntax Definition and Parsing

**Synopsis.**

Syntax definition and parser generation for new languages.

**Description.**

All source code analysis projects need to extract information directly from the source code. There are two main
approaches to this:

  - *Lexical information*: Use regular expressions to extract useful, but somewhat superficial, flat, information. This
    can be achieved using regular expression patterns, see [Regular Expression Pattern](/Rascal#Patterns-Regular)s.

  - *Structured information*: Use syntax analysis to extract the complete, nested, structure of the source code in the
    form of a syntax tree. Rascal can directly manipulate the parse trees, but it also enables user-defined mappings
    from parse tree to abstract syntax tree.

Using [Syntax Definitions](/Rascal#Declarations-SyntaxDefinition) you can define the syntax of any (programming)
language. Then Rascal:

  - will generate the parser, and

  - will provide pattern matching and pattern construction on parse trees and abstract syntax trees, see [Abstract
    Patterns](/Rascal#Patterns-Abstract) and [Concrete Patterns](/Rascal#Patterns-Concrete).

**Examples.**

Let’s use the Exp language as example. It contains the following elements:

  - Integer constants, e.g., `123`.

  - A multiplication operator, e.g., `3*4`.

  - An addition operator, e.g., `3+4`.

  - Multiplication is left-associative and has precedence over addition.

  - Addition is left-associative.

  - Parentheses can be used to override the precedence of the operators.

Here are some examples:

  - `123`

  - `2+3+4`

  - `2+3*4`

  - `(2+3)*4`

The EXP language can be defined as follows:

``` rascal
module demo::lang::Exp::Concrete::WithLayout::Syntax

layout Whitespace = [\t-\n\r\ ]*; 

lexical IntegerLiteral = [0-9]+;

start syntax Exp
  = IntegerLiteral
  | bracket "(" Exp ")"
  > left Exp "*" Exp
  > left Exp "+" Exp
  ;
```

Now you may parse and manipulate programs in the EXP language. Let’s demonstrate parsing an expression:

``` rascal-shell
import demo::lang::Exp::Concrete::WithLayout::Syntax;
import ParseTree;
parse(#start[Exp], "2+3*4");
```

First we import the syntax definition and the [ParseTree](/Libraries/Prelude-ParseTree) module that provides the parsing
functionality. Finally, we parse `2+3*4` using the start symbol `Exp`.

Don’t be worried, we are just showing the resulting parse tree here. It intended for programs and not for humans. The
points we want to make are:

  - Rascal grammars are relatively easy to read and write (unfortunately, writing grammars will never become simple).

  - Parser generation is completely implicit.

  - Given a syntax definition, it can be used immediately for parsing.

See [Recipes](/Recipes) for a more extensive presentation of the [EXP](/Recipes#Languages-Exp) language and
[Languages](/Recipes#Recipes-Languages) for other language examples.

# IDE Construction

**Synopsis.**

Extend an IDE with interactive, language-specific, features (Eclipse only).

**Description.**

Meta-programs become most useful, when they are integrated with an Interactive Development Environment (IDE).

A Rascal program running inside Eclipse can get access to many of the services provided by Eclipse such as syntax
highlighting, outlining, documentation hovering and much more.

Rascal uses the services of the IDE Meta-tooling Platform, or [IMP](http://www.eclipse.org/imp/) for short, a collection
of API and tools to support constructing IDEs for programming languages and domain specific languages. Rascal is also
part of the collection of IMP tools and (will be) hosted shortly on eclipse.org.

Using the [IDE library](/Libraries#util-IDE), you can instantiate the services that IMP provides for any language
implemented in Rascal.

To instantiate an IDE for a language implemented using Rascal, use the following steps:

  - Define the grammar for the language.

  - Define a parse function for the language.

  - Register the language.

The following IDE features are available

# Code Models

**Synopsis.**

Code models are abstract representations of source code

**Description.**

You can use any of Rascal’s [Values](/Rascal#Expressions-Values) to represent facts about source code. For example,
[Algebraic Data Types](/Rascal#Declarations-AlgebraicDataType) can be used to define abstract syntax trees and
[???](#Values-Relation) are used to represent call graphs. We consistently use [Locations](/Rascal#Values-Location) to
refer to source code artifacts, either physically (`|file:///tmp/HelloWorld.java|`) or logically
(`|java+class://java/lang/Object|`).

Specifically we have standardized a set of models to represent source code which are ready for computing metrics:
\#/Libraries\#analysis-m3\[M3\]. This M3 model consists of:

  - an open (extensible) set of [Relations](/Rascal#Values-Relation) between source code artifacts.

  - a number of extensible [Algebraic Data Types](/Rascal#Declarations-AlgebraicDataType) for representing abstract
    syntax trees.

The core language independent model can be found here: [analysis::m3](/Libraries#analysis-m3).

Extensions for representing facts about specific languages:

  - [lang::java::m3](/Libraries#java-m3).

# Enumerating

**Synopsis.**

Enumerating values.

**Description.**

Enumerating regards the enumeration of the values in a given (finite) domain, be it the elements in a list, the
substrings of a string, or all the nodes in a tree. Each value that is enumerated is first matched against a pattern
before it can possibly contribute to the result of the enumerator. An enumerator yields `true` as long as it has
generated a new value, and `false` otherwise.

See [Enumerator](/Rascal#Comprehensions-Enumerator) for details.

**Examples.**

``` rascal
int x <- { 1, 3, 5, 7, 11 }
int x <- [ 1 .. 10 ]
/asgStat(Id name, _) <- P
```

The first two produce the integer elements of a set of integers, respectively, a range of integers. Observe that the
left-hand side of an enumerator is a pattern, of which `int x` is a specific instance. The use of more general patterns
is illustrated by the third enumerator that does a deep traversal (as denoted by the descendant operator `/`) of the
complete program `P` (that is assumed to have a `PROGRAM` as value) and only yields statements that match the assignment
pattern (`asgStat`). Note the use of an anonymous variable at the `EXP` position in the pattern.

Let’s practice some of these examples.

``` rascal-shell
int x <- {};
```

The enumerator does not produce any value and returns `false`.

``` rascal-shell
int x <- {1, 3, 5, 7, 11 };
x;
```

Well, this is a disappointing experience. The generator returned `true` since it did produce a value. Apparently, we
cannot inspect the value of the variable `x` that was bound.

Another example that results in an error:

``` rascal-shell
str x <- {1, 3, 5, 7, 11 };
```

Here, the enumerator produces its first integer value, an attempt is made to assign this to variable `x` that is
declared as string, and an error results.

A more satisfying use is as follows:

``` rascal-shell
{ x * x | int x <- {1, 3, 5, 7, 11 }};
```

When used inside [Comprehensions](/Rascal#Expressions-Comprehensions), or [For](/Rascal#Statements-For),
[Do](/Rascal#Statements-Do), or [While](/Rascal#Statements-While) statement, all values of the generator will be
produced and used. The variables that are introduced by a enumerator are local to the construct in which the enumerator
is used. Here is a similar example:

``` rascal-shell
import IO;
for(int x <- {1, 3, 5, 7, 11 })
    println("x = <x>");
```

**Pitfalls.**

The variables that are bound by an enumerator are local to the statement in which the enumerator is used.

# Equation Solving

**Synopsis.**

Solving equations by fixed-point iteration.

**Description.**

Many problems can be solved by forms of *constraint solving*. This is a declarative way of programming: specify the
constraints that a problem solution should satisfy and how potential solutions can be generated. The actual solution (if
any) is found by enumerating solutions and testing their compliance with the constraints.

Rascal provides a [Solve](/Rascal#Statements-Solve) statement that helps writing constraint solvers.

**Examples.**

A typical example is data flow analysis where the propagation of values through a program can be described by a set of
equations. Their solution can be found with the solve statement.

> **Warning**
> 
> add links

# Rewriting

**Synopsis.**

Rewriting using pattern-directed invocation

**Description.**

A rewrite rule is a recipe on how to simplify values. Remember: (*a* + *b*)<sup>2</sup> = *a*<sup>2</sup> + 2 *ab* +
*b*<sup>2</sup>? A rewrite rule has a pattern as left-hand side — here: (*a* + *b*)<sup>2</sup> — and a replacement as
right-hand side — here: *a*<sup>2</sup> + 2 *ab* + *b*<sup>2</sup>. Given a value and a set of rewrite rules the
patterns are tried on every subpart of the value and replacements are made if a match is successful. This is repeated as
long as some pattern matches.

Rascal has ancestors, notably [ASF+SDF](http://www.meta-environment.org/), where rewriting was the most important
computation mechanism. In Rascal, rewriting can be achieved using pattern-directed invocation, see [Function
Declaration](/Rascal#Declarations-Function), possibly combined with a [Visit](/Rascal#Expressions-Visit) statement.

**Examples.**

In a package for symbolic differentiation it is desirable to keep expressions in simplified form in order to avoid
intermediate results like `add(product(con(1), x), mul(con(0), y))` that can be simplified to `x`. The following
definitions achieve this:

``` rascal
Exp simp(add(con(n), con(m))) = con(n + m);   
Exp simp(mul(con(n), con(m))) = con(n * m);

Exp simp(mul(con(1), Exp e))  = e;
Exp simp(mul(Exp e, con(1)))  = e;
Exp simp(mul(con(0), Exp e))  = con(0);
Exp simp(mul(Exp e, con(0)))  = con(0);

Exp simp(add(con(0), Exp e))  = e;
Exp simp(add(Exp e, con(0)))  = e;

default Exp simp(Exp e)       = e;            

Exp simplify(Exp e){                          
  return bottom-up visit(e){
           case Exp e1 => simp(e1)
         }
}
```

  - Definitions of the function `simp` are given with different patterns as formal argument. Each definition is
    responsible for one particular simplification (here is where the similarity with rewrite rules surfaces).

  - A default for `simp` is given: if no other definition applies, the default one is used.

  - The actual `simplify` function: it performs a bottom up visit of the expression, replacing each subexpression by a
    simplified version.

See [Derivative](/Recipes#Common-Derivative) for a full explanation of this example.
