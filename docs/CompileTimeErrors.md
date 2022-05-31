---
sidebar_position: 11
title: Compile Time Errors
---

**Synopsis.**

All errors that can occur during compilation of a Rascal program.

> **Warning**
> 
> in progress of being adopted to the Rascal compiler. This list currently holds for the Rascal interpreter.

The following compile time (static) errors can occur in a Rascal program. They cannot be caught by the Rascal program.
Although some of these errors are raised while running Rascal programs in the interpreter, they are all intended to be
raised by a static checker. This static checker is currently under development.

  - [AmbiguousFunctionReference](#CompileTimeErrors-AmbiguousFunctionReference): An ambiguous function name.

  - [ArgumentMismatch](#CompileTimeErrors-ArgumentMismatch): The called signature does not match any defined function.

  - [Arity](#CompileTimeErrors-Arity): The number of arguments of an operator differ from what is required.

  - [DateTimeSyntax](#CompileTimeErrors-DateTimeSyntax): A datetime value is syntactically incorrect.

  - [IllegalQualifiedDeclaration](#CompileTimeErrors-IllegalQualifiedDeclaration): Qualified names cannot be declared.

  - [InvalidDateTimeComparison](#CompileTimeErrors-InvalidDateTimeComparison): Attempt to compare a date with a time.

  - [JavaCompilation](#CompileTimeErrors-JavaCompilation): Compilation of generated Java code failed.

  - [JavaMethodLink](#CompileTimeErrors-JavaMethodLink): Cannot link to a Java method.

  - [MissingModifier](#CompileTimeErrors-MissingModifier): A modifier is missing in a declaration.

  - [MissingReturn](#CompileTimeErrors-MissingReturn): A return statement is missing from a function body.

  - [ModuleImport](#CompileTimeErrors-ModuleImport): A Rascal module could not be imported.

  - [ModuleNameMismatch](#CompileTimeErrors-ModuleNameMismatch): Module name and file name are different.

  - [NoKeywordParameters](#CompileTimeErrors-NoKeywordParameters): A function that is declared without keyword
    parameters is called with keyword parameters.

  - [NonAbstractJavaFunction](#CompileTimeErrors-NonAbstractJavaFunction): A function declared with the `java` modifier
    has a Rascal body.

  - [NonVoidTypeRequired](#CompileTimeErrors-NonVoidTypeRequired): A type other than `void` is needed.

  - [NonWellformedType](#CompileTimeErrors-NonWellformedType): A type in a declaration is not wellformed.

  - [NotEnumerable](#CompileTimeErrors-NotEnumerable): A value that cannot be enumerated is used in an enumerator.

  - [PartiallyLabeledFields](#CompileTimeErrors-PartiallyLabeledFields): In a tuple or relation all fields should have
    names or none at all.

  - [RedeclaredField](#CompileTimeErrors-RedeclaredField): A field name is redeclared.

  - [RedeclaredType](#CompileTimeErrors-RedeclaredType): A type with the same name has been declared before.

  - [RedeclaredVariable](#CompileTimeErrors-RedeclaredVariable): A variable with the same name has been declared in the
    same scope.

  - [SyntaxError](#CompileTimeErrors-SyntaxError): Text in a module or entered via the command line violates the Rascal
    syntax.

  - [UndeclaredAnnotation](#CompileTimeErrors-UndeclaredAnnotation): An annotation is used that has not been declared.

  - [UndeclaredField](#CompileTimeErrors-UndeclaredField): A field name is used that has not been declared.

  - [UndeclaredFunction](#CompileTimeErrors-UndeclaredFunction): A function is called that has not been declared.

  - [UndeclaredJavaMethod](#CompileTimeErrors-UndeclaredJavaMethod): Attempt to call a non-existing Java method.

  - [UndeclaredKeywordParameter](#CompileTimeErrors-UndeclaredKeywordParameter): A function is called with a keyword
    parameter that was not declared in the function’s declaration.

  - [UndeclaredModule](#CompileTimeErrors-UndeclaredModule): Reference to a non-existing module.

  - [UndeclaredModuleProvider](#CompileTimeErrors-UndeclaredModuleProvider): A scheme is used in a location for wich no
    provider has been registered.

  - [UndeclaredNonTerminal](#CompileTimeErrors-UndeclaredNonTerminal): A syntax rule uses an undeclared non-terminal.

  - [UndeclaredType](#CompileTimeErrors-UndeclaredType): Use of a type that has not been declared.

  - [UndeclaredVariable](#CompileTimeErrors-UndeclaredVariable): Use of a variable that has not been declared.

  - [UnexpectedKeywordArgumentType](#CompileTimeErrors-UnexpectedKeywordArgumentType): The actual value of a keyword
    argument is not compatible with its declared type.

  - [UnexpectedType](#CompileTimeErrors-UnexpectedType): A value of a different type was expected.

  - [UnguardedAppend](#CompileTimeErrors-UnguardedAppend): Append statement occurs outside a for/while statement.

  - [UnguardedFail](#CompileTimeErrors-UnguardedFail): Use of `fail` statement outside a condtional context.

  - [UnguardedInsert](#CompileTimeErrors-UnguardedInsert): An `insert` occurs outside a `visit` expression.

  - [UnguardedIt](#CompileTimeErrors-UnguardedIt): The special variable `it` occurs outside a reducer expression.

  - [UnguardedReturn](#CompileTimeErrors-UnguardedReturn): A return statement occurs outside a function body.

  - [UninitializedPatternMatch](#CompileTimeErrors-UninitializedPatternMatch): Pattern matching has not been properly
    initialized.

  - [UnitializedVariable](#CompileTimeErrors-UnitializedVariable): Use of a variable that has not been initialized.

  - [UnsupportedOperation](#CompileTimeErrors-UnsupportedOperation): Attempt to apply a operation to a value for which
    the operation is not defined.

  - [UnsupportedPattern](#CompileTimeErrors-UnsupportedPattern): A pattern is used that is not supported.

  - [UnsupportedSubscript](#CompileTimeErrors-UnsupportedSubscript): A subscript is applied to a value that does not
    support it.

  - [UnsupportedSubscriptArity](#CompileTimeErrors-UnsupportedSubscriptArity): Wrong number of subscripts is used.

# AmbiguousFunctionReference

**Synopsis.**

An ambiguous function name

**Description.**

Warning: How to generate this error?

**Examples.**

``` rascal-shell
data D = d(int x);
data D2 = d(str x);
d(3).x
d("a").x
```

# ArgumentMismatch

**Synopsis.**

The called signature does not match any defined function.

**Description.**

A function has a name and a signature (the names and types of its arguments). This error is reported when a call of a
function cannot be associated with a function declaration.

Remedies:

  - Modify the call so that the arguments match the function declaration.

  - Write a new definition for a function with the same name, that matches the argument types in the call.

**Examples.**

Define a function `triple` that multiplies its argument by 3:

``` rascal-shell
int triple(int x) = 3 * x;
```

It works fine:

``` rascal-shell
triple(5)
```

Unless it is called with an argument of a wrong type:

``` rascal-shell
triple([1,2,3])
```

We can define a new version of `triple` function that accepts lists:

``` rascal-shell
list[int] triple(list[int] L) = [3 * x | x <- L];
triple([1,2,3]);
```

# Arity

**Synopsis.**

The number of arguments of an operator differ from what is required.

**Description.**

Various operators like [composition](/Rascal#Relation-Composition), [transitive
closure](/Rascal#Relation-TransitiveClosure) and [reflexive transitive
closure](/Rascal#Relation-ReflexiveTransitiveClosure) expect binary relations or tuples as arguments.

**Examples.**

This composition is correct:

``` rascal-shell
{<1,10>, <2,20>} o {<10,100>, <20, 200>};
```

This is not, since the first argument has arity 3:

``` rascal-shell
{<1,5,10>, <2,6,20>} o {<10,100>, <20, 200>};
```

These transitive closures are correct:

``` rascal-shell
{<1,2>, <2,3>,<4,5>}+
{<1,2>, <2,3>,<4,5>}*
```

But these are incorrect:

``` rascal-shell
{<1,2,3>, <2,3,4>,<4,5,6>}+
{<1,2,3>, <2,3,4>,<4,5,6>}*
```

# DateTimeSyntax

**Synopsis.**

A datetime value is syntactically incorrect.

**Description.**

datetime values have a rather complex format as described in [datetime](/Rascal#Values-DateTime). Some errors in the
format are treated as syntax errors, others generate the `DateTimeSyntax` error.

Remedy: Fix the datetime value.

**Examples.**

A correct datetime value:

``` rascal-shell
$2013-07-15T09:15:23.123+03:00$;
```

Certain errors, like a wrong day number (here: 40) lead to a parse error:

``` rascal-shell
$2013-07-40T09:15:23.123+03:00$;
```

Others, like a wrong month number (here: 15) lead to a DateTimeSyntax error

# IllegalQualifiedDeclaration

**Synopsis.**

Qualified names cannot be declared.

**Description.**

When the same name is declared in different modules, a qualified name can be used to refer to a specific version of that
name. This error is generated when a qualified name is used in a declaration.

Remedy: remove the qualification.

**Examples.**

Using a qualified name gives an error:

``` rascal-shell
data M::D = d();
```

Without the qualification, this is correct:

``` rascal-shell
data D = d();
```

# InvalidDateTimeComparison

**Synopsis.**

Attempt to compare a date with a time.

**Description.**

[datetime](/Rascal#Values-DateTime) values may contain two components: date and time. Datetime values that contain both
a date and a time can be compared. Dates can also be compared with dates, and times with times. This error is generated
when a date is compared with a time.

**Examples.**

Comparing dates with dates:

``` rascal-shell
$2013-07-15$ < $2014-07-15$
```

Or times with times:

``` rascal-shell
$T20:03:56.901+01:00$ < $T22:00:56.901+01:00$
```

Or datetimes with datetimes:

``` rascal-shell
$2013-01-11T23:03:56.901+01:00$ < $2013-01-11T23:05:00.901+01:00$
```

But mixing dates and times gives errors:

``` rascal-shell
$2013-07-15$ < $T20:03:56.901+01:00$
```

# JavaCompilation

**Synopsis.**

Compilation of generated Java code failed.

**Description.**

Some parts of the Rascal system generate Java code. Most notable is the parser generator. This error message is
generated when the compilation of generated Java code fails.

Remedy: Contact the Rascal developers:

  - Ask a question on StackOverflow using the [Rascal Stackoverflow
    Tag](http://stackoverflow.com/questions/tagged/rascal).

  - Read the currently open issues at the Rascal’s [Issue Tracker on
    Github](https://github.com/usethesource/rascal/issues?state=open). If your problem has not yet been reported by
    someone else, please report it here.

# JavaMethodLink

**Synopsis.**

Cannot link to a Java method.

**Description.**

Rascal functions can be implemented in Java. This is the case for many functions in the standard library. This requires
these elements:

  - An abstract Rascal function declaration (= a function header without a body).

  - The keyword `java` should be part of the function header.

  - The function declaration is annotated (uing `javaClass`) with the name of the Java class that implements this
    function.

This error is generated when the Java implementation cannot be found. Most likely, this is a missing or misspelled Java
class name. It is also generated when the function declaration *does* have a body.

Remedy: Contact the Rascal developers:

  - Ask a question on StackOverflow using the [Rascal Stackoverflow
    Tag](http://stackoverflow.com/questions/tagged/rascal).

  - Read the currently open issues at the Rascal’s [Issue Tracker on
    Github](https://github.com/usethesource/rascal/issues?state=open). If your problem has not yet been reported by
    someone else, please report it here.

If you are an expert developer and have implemented your own extension in Java, please check your own extension code
first.

**Examples.**

This is how the `size` function on lists is declared in the Rascal library:

``` rascal-shell
@javaClass{org.rascalmpl.library.Prelude}
public java int size(list[&T] lst);
```

Misspelling the class name will generate the JavaMethodLink error:

``` rascal-shell
@javaClass{org.rascalmpl.library.Preludexxx}
public java int size(list[&T] lst);
```

The same error message is generated if the function declaration contains a body:

``` rascal-shell
@javaClass{org.rascalmpl.library.Preludexxx}
public java int size(list[&T] lst){
  return 0;
}
```

# MissingModifier

**Synopsis.**

A modifier is missing in a declaration.

**Description.**

Rascal functions can be implemented in Java. This is the case for many functions in the standard library. This requires
these elements:

  - An abstract Rascal function declaration (= a function header without a body).

  - The keyword `java` should be part of the function header.

  - The function declaration is annotated (uing `javaClass`) with the name of the Java class that implements this
    function.

This error is generated when the `java` keyword is missing.

Remedy: Contact the Rascal developers:

  - Ask a question on StackOverflow using the [Rascal Stackoverflow
    Tag](http://stackoverflow.com/questions/tagged/rascal).

  - Read the currently open issues at the Rascal’s [Issue Tracker on
    Github](https://github.com/usethesource/rascal/issues?state=open). If your problem has not yet been reported by
    someone else, please report it here.

If you are an expert developer and have implemented your own extension in Java, please check your own extension code
first.

**Examples.**

This is how the `size` function on lists is declared in the Rascal library:

``` rascal-shell
@javaClass{org.rascalmpl.library.Prelude}
public java int size(list[&T] lst);
```

This is what happens if the `java` keyword is missing:

``` rascal-shell
@javaClass{org.rascalmpl.library.Prelude}
public int size(list[&T] lst);
```

# MissingReturn

**Synopsis.**

A return statement is missing from a function body.

**Description.**

Functions return some value (except functions that have return type `void`). This error is generated when a function
body does not return a value.

Remedies:

  - Add a \[Rascal:Return\] statement to the function body.

  - Rewrite the function so that the function body becomes a single expression and you can use the abbreviated function
    format, see \[$Rascal:Declarations/Function\].

**Examples.**

Here is an incorrect definition of function `triple`:

``` rascal-shell
int triple(int x) {
   x * 3;
}
triple(5)
```

It should look like this:

``` rascal-shell
int triple(int x) {
   return x * 3;
}
triple(5)
```

This is another solution using the abbreviated function format:

``` rascal-shell
int triple(int x) = x * 3;
triple(5)
```

# ModuleImport

**Synopsis.**

A Rascal module could not be imported.

**Description.**

Rascal programs are split up in modules. An [import](/Rascal#Statements-Import) statement is used to include one module
in another. This error indicates that a module import failed. This can be caused by

  - A misspelled name in the import statement.

  - Starting a Rascal console from the wrong directory.

Remedies:

  - Correct the mispelled name.

  - In Eclipse the safest way to execute a Rascal module is to select it in the Package Explorer, right click on it and
    then select `Run as Rascal Application`.

  - At the command line, change directory to where the toplevel module of your program is located and then execute the
    Rascal Shell.

**Examples.**

Here is a correct import of the library module `List`:

``` rascal-shell
import List;
```

Here is the effect of a misspelled module name (assuming that you do not have a module `Lis`):

``` rascal-shell
import Lis;
```

# ModuleNameMismatch

**Synopsis.**

Module name and file name are different.

**Description.**

A Rascal module has a name (the name that follows the `module` keyword) and it is stored in a file. The (enforced)
convention is that the name of the module (say `MyModule`) and the name of the file should be the same (except fo the
Rascal extension `.rsc`). Module `MyModule` should be stored in the file `MyModule.rsc`. This error signals that this
convention is violated.

Remedies:

  - Rename the module.

  - Rename the file.

# NoKeywordParameters

**Synopsis.**

A function that is declared without keyword parameters is called with keyword parameters.

**Description.**

Functions maybe declared with or without keyword parameters. This error is generated when a function has been declared
without keyword parameters but is called with a keyword parameter.

Remedies:

  - Replace the keyword parameter in the call by a positional parameter.

  - Add a keyword parameter to the function declaration.

**Examples.**

``` rascal-shell
int incr(int x) = x + 1;
incr(3, delta=5);
```

Here is one solution:

``` rascal-shell
int incr(int x, int delta=1) = x + delta;
incr(3, delta=5);
```

# NonAbstractJavaFunction

**Synopsis.**

A function declared with the `java` modifier has a Rascal body.

**Description.**

Rascal functions can be implemented in Java. This is the case for many functions in the standard library. This requires
these elements:

  - An abstract Rascal function declaration (= a function header without a body).

  - The keyword `java` should be part of the function header.

  - The function declaration is annotated (uing `javaClass`) with the name of the Java class that implements this
    function.

This error is generated when the function does have a body.

Remedies:

  - Remove the `java` keyword.

  - If this happens to a library function, contact the Rascal developers:
    
      - Ask a question at \[Rascal Ask site\](<http://ask.rascal-mpl.org/questions/>).
    
      - Read the currently open issues at the Rascal’s \[issue
        tracker\](<https://github.com/cwi-swat/rascal/issues?state=open>). If your problem has not yet been reported by
        someone else, please report it here.

If you are an expert developer, please check the body of the offending function first.

**Examples.**

``` rascal-shell
java int incr(int x) {}
```

# NonVoidTypeRequired

**Synopsis.**

A type other than `void` is needed.

**Description.**

This error is generated when a non-void value is needed, but only void is provided. The most prominent examples are
splicing for [list](/Rascal#List-Splice), [set](/Rascal#Set-Splice), and [map](/Rascal#Map-Splice).

Remedy: replace the expression that computes void by an expression that computes a non-void value.

**Examples.**

First define a dummy function that returns void:

``` rascal-shell
void dummy() { return; }
[1, *dummy(), 2]
{1, *dummy(), 2}
```

A solution could be:

``` rascal-shell
int dummy() { return 17; }
[1, *dummy(), 2]
{1, *dummy(), 2}
```

# NonWellformedType

**Synopsis.**

A type in a declaration is not wellformed.

**Description.**

Types should respect some structural rules and this error signals a violation of these rules. Examples of violations
are:

  - a non-parametric type has parameters.

  - a parametric type has an incorrect number of parameters.

Remedy: correct the type.

**Examples.**

``` rascal-shell
bool[int] x;
list[int,str] l;
map[str, int, int]  m;
set[int,str] s;
```

# NotEnumerable

**Synopsis.**

A value that cannot be enumerated is used in an enumerator.

**Description.**

An [enumerator](/Rascal#Comprehensions-Enumerator) like `int n ← V` is used in
[comprehensions](/Rascal#Expressions-Comprehensions) to enumerate the values in `V`. This error is produced when `V` is
a value that does not support enumeration. This is typically the case for atomic values like numbers, Booleans and
Strings,

Remedy: modify the expression in the enumerator to return a value that supports enumeration.

**Examples.**

``` rascal-shell
int x <- 17
b <- true
```

# PartiallyLabeledFields

**Synopsis.**

In a tuple or relation all fields should have names or none at all.

**Description.**

The fields in tuples and relations can optionally be labelled with a name. There are only two legal situations:

  - All fields have a label.

  - No field has a label.

This error signals the case that thei fields are partially labelled.

**Examples.**

``` rascal-shell
tuple[int n, str] T;
rel[str name, int] R;
```

# RedeclaredField

**Synopsis.**

A field name is redeclared.

**Description.**

The definition of an [algebraic data type](/Rascal#Declarations-AlgebraicDatatype) consists of a number of constructor
functions. Each constructor has named fields but the same field name may only be used in different constructors if it
has the same type in all occurrences in the declaration.

Remedy: rename one of the fields in the declaration.

**Examples.**

This is correct since all occurrences of `key` have type `int`:

``` rascal-shell
data D = d1(int key) | d2(str name, int key);
```

This is incorrect since `key` is used as `int` and as `str`.

``` rascal-shell
data D = d1(int key) | d2(str key);
```

This can be corrected by choosing other names for the labels:

``` rascal-shell
data D = d1(int intKey) | d2(str strKey);
```

A tuple declaration with a duplicate field name also gives an error:

``` rascal-shell
tuple[int x, str x] Q = <3,"abc">;
```

# RedeclaredType

**Synopsis.**

A type with the same name has been declared before.

**Description.**

Some declarations introduce new type names. Most important are an [algebraic data
type](/Rascal#Declarations-AlgebraicDataType) and [alias](/Rascal#Declarations-Alias). This error signals that the same
type name is used for incompatible purposes.

Remedy: rename one of the type names.

**Examples.**

``` rascal-shell
data D = d(int x);
alias D = str;
```

``` rascal-shell
alias D = int;
alias D = str;
```

# RedeclaredVariable

**Synopsis.**

A variable with the same name has been declared in the same scope.

**Description.**

Remedy: rename one of the variables.

**Examples.**

``` rascal-shell
int n = 3;
int n = 4;
```

# SyntaxError

**Synopsis.**

Text in a module or entered via the command line violates the Rascal syntax.

**Description.**

This error is generated when a text is expected to be Rascal but does not comply with the Rascal syntax.

Remedy: Correct your text and check for the following:

  - All parentheses are balanced: `(…​)`, `[…​]`, `{…​}`, `<…​>`, `/…​/`.

  - All multi-line comments are balanced: `/…​/`.

  - All semi-colons are present.

  - All tests in `if`, `for`, `while` statement are surrounded by `(…​)`.

When you are completely desparate and cannot find the syntax error, the following *binary search* strategy may help:

  - Surround all text in the module (except the module header) with `/` and `</emphasis>/`. Now your module should
    parse. If not the syntax error is in the module header.

  - Move the upper comment symbol `/*` to the middle of the file. Now there are two possibilities:
    
      - The module parses. The top part is correct and the syntax error is in the bottom part. Move the `/*` marker to
        the middle of the bottom part and repeat.
    
      - The module does not parse. The syntax error is in the top part. Move the `/*` marker to the middle of the top
        part and repeat.

# UndeclaredAnnotation

**Synopsis.**

An annotation is used that has not been declared.

**Description.**

An [annotation](/Rascal#Declarations-Annotation) can be used to add information to an instance of an [algebraic data
type](/Rascal#Declarations-AlgebraicDataType). An annotation has to declared beforehand. This error is generated when an
undeclared annotation is used.

Remedies:

  - Declare the annotation.

  - Use an already declared annotation.

**Examples.**

This is correct:

``` rascal-shell
data Fruit = apple(int n) | orange(int n);
anno str Fruit @ quality;
piece = orange(13);
piece @ quality = "great";
```

But using a wrong annotation name generates an error:

``` rascal-shell
piece @ qual;
```

# UndeclaredField

**Synopsis.**

A field name is used that has not been declared.

**Description.**

Fields of [tuple](/Rascal#Values-Tuple) (hence also of [relation](/Rascal#Values-Relation) and
[listrelation](/Rascal#Values-ListRelation)) and constructors of [algebraic data
types](/Rascal#Declarations-AlgebraicDataType) may have names. This error is generated when a reference is made to an
undeclared field.

Remedies:

  - Fix the field name in the reference.

  - Declare a new field as used in the reference.

**Examples.**

Use of the undeclared field `gender`:

``` rascal-shell
tuple[str name, int age] Jo = <"Jo", 33>;
Jo.gender;
```

A similar example now expressed as ADT:

``` rascal-shell
data Person = person(str name, int age);
jo = person("Jo", 33);
jo.gender;
```

# UndeclaredFunction

**Synopsis.**

A function is called that has not been declared.

**Description.**

All functions, constructors and variables have to be declared before they can be used. This error is generated when this
rule is violated.

Remedies for functions:

  - Declare the function.

  - Declare the function as constructor of an (existing or new) \[Rascal:AlgebraicDataType\].

  - Import a module that declares the function (Did you import all necessary library modules?)

Remedies for variables:

  - Declare the variable.

**Examples.**

Calling the undeclared function `triple` gives an error:

``` rascal-shell
triple(5)
```

We can remedy this by declaring the function:

``` rascal-shell
int triple(int n) = 3 * n;
triple(5)
```

Calling the library function `size` gives an error if the proper library (in this case: `List`) is not imported

``` rascal-shell
size([20, 1, 77]);
```

The solution is:

``` rascal-shell
import List;
size([20, 1, 77]);
```

Another solution is to import the complete Rascal library at once:

``` rascal-shell
import Prelude;
size([20, 1, 77]);
```

Using an undeclared variable gives an error:

``` rascal-shell
n + 1;
```

A variable is introduced by just assigning to it (with or without its expected type):

``` rascal-shell
n = 3;
n + 1;
```

Or equivalenty (with an expected type):

``` rascal-shell
int n = 3;
n + 1;
```

# UndeclaredJavaMethod

**Synopsis.**

Attempt to call a non-existing Java method.

**Description.**

Rascal functions can be implemented in Java. This is the case for many functions in the standard library. This requires
these elements:

  - An abstract Rascal function declaration (= a function header without a body).

  - The keyword `java` should be part of the function header.

  - The function declaration is annotated (uing `javaClass`) with the name of the Java class that implements this
    function.

This error is generated when a method with the same name as the Rascal function cannot be found in the mentioned Java
class. Most likely, this is a missing or misspelled function/method name.

Remedy: Contact the Rascal developers:

  - Ask a question at \[Rascal Ask site\](<http://ask.rascal-mpl.org/questions/>).

  - Read the currently open issues at the Rascal’s \[issue
    tracker\](<https://github.com/cwi-swat/rascal/issues?state=open>). If your problem has not yet been reported by
    someone else, please report it here.

If you are an expert developer and have implemented your own extension in Java, please check your own extension code
first.

**Examples.**

This is how the `size` function on lists is declared in the Rascal library:

``` rascal-shell
@javaClass{org.rascalmpl.library.Prelude}
public java int size(list[&T] lst);
```

This is the result of misspelling the function name (`siz` instead of `size`):

``` rascal-shell
@javaClass{org.rascalmpl.library.Prelude}
public java int siz(list[&T] lst);
```

# UndeclaredKeywordParameter

**Synopsis.**

A function is called with a keyword parameter that was not declared in the function’s declaration.

**Description.**

Rascal functions may have keyword parameters. This error is generated when a function call uses an undeclared keyword
parameter.

Remedies:

  - Rename the keyword parameter in the call.

  - Add a new keyword parameter to the function.

**Examples.**

``` rascal-shell
int incr(int n, int delta=1) = n + delta;
```

Calling `incr` with a wrong keyword parameter gives an error:

``` rascal-shell
incr(3, diff=5);
```

This can be fixed by using the correct name for the keyword parameter:

``` rascal-shell
incr(3, delta=5);
```

# UndeclaredModule

**Synopsis.**

Reference to a non-existing module.

**Description.**

This can, for example, occur in a qualified name.

Remedies:

  - Check that the offending module name is spelled correctly.

  - Create a module of that name.

**Examples.**

Referring to the non-existing module `M` gives errors:

``` rascal-shell
M::x = 3;
M::f(3);
```

# UndeclaredModuleProvider

**Synopsis.**

A scheme is used in a location for wich no provider has been registered.

**Description.**

[Locations](/Rascal#Values-Location) provide very flexible ways to access files and external data sources. There any
many protocols (called *schemes*) that can be used (e.g., `file`, `http`, `home` and many others). This error is
generated when an unknown scheme is used.

Remedy: Use an existing scheme.

**Examples.**

Misspelling the scheme for Rascal’s standard library (which is `std`) gives an error when the location is used:

``` rascal-shell
import IO;
readFileLines(|standard:///demo/basic/Hello.rsc|);
```

This is fixed by using the proper scheme name:

``` rascal-shell
readFileLines(|std:///demo/basic/Hello.rsc|);
```

# UndeclaredNonTerminal

**Synopsis.**

A syntax rule uses an undeclared non-terminal.

**Description.**

All non-terminals that occur in a [syntax definition](/Rascal#Declarations-SyntaxDefinition) should be declared in some
rule. This error is generated when this is not the case.

Remedy: declare the offending non-terminal.

**Examples.**

Here is an example where the non-terminal `Y` is not declared:

``` rascal-shell
import ParseTree;
syntax X = "a" Y;
parse(#X, "ab");
```

**Pitfalls.**

The source location of the non-terminal is not yet available, so the error message mentions the module in which this
occurs.

# UndeclaredType

**Synopsis.**

Use of a type that has not been declared.

**Description.**

A type has to be declared before it can be used. This error is generated when an undeclared type is used.

Remedies:

  - Rename the type name.

  - Declare the type.

  - Import a module that declares the type. (Did you import all library modules?)

**Examples.**

Using the undeclared type `myint` gives an error:

``` rascal-shell
myint incr(myint n) = n + 1;
```

The solkution is to first declares `myint` (here as an alias for `int`):

``` rascal-shell
alias myint = int;
myint incr(myint n) = n + 1;
incr(3);
```

# UndeclaredVariable

**Synopsis.**

Use of a variable that has not been declared.

**Description.**

A variable can only be used when it has been declared and initialized. This error is generated when this is not the
case.

Remedy:

  - Rename the offending variable name into the name of an existing variable.

  - Introduce a new variable.

**Examples.**

Here is an example where an undeclared variables occurs in list splicing:

``` rascal-shell
[1, *x, 3]
```

The remedy is here:

``` rascal-shell
x = 5;
[1, *x, 3]
```

# UnexpectedKeywordArgumentType

**Synopsis.**

The actual value of a keyword argument is not compatible with its declared type.

**Description.**

Functions may be declared to have keyword parameters. Each keyword parameters has a type, a name and a default value.
This error is generated when the declared type and the actual type of the keyword parameter are not compatible.

Remedies:

  - Change the type of the keyword parameter in the call.

  - Change the type of the keyword parameter in the function declaration.

**Examples.**

Declare `incr` function with keyword parameter `delta` of type `int`:

``` rascal-shell
int incr(int x, int delta = 1) = n + delta;
```

Erroneous use of `delta` with a string value:

``` rascal-shell
incr(3, delta="more");
```

# UnexpectedType

**Synopsis.**

A value of a different type was expected.

**Description.**

This error signals an incompatibility between expected type and actual type. Some of the situations in which this may
occur are [assert](/Rascal#Statements-Assert), [variable](/Rascal#Declarations-Variable),
[solve](/Rascal#Statements-Solve).

Remedy: adjust the actual type to the expected type.

**Examples.**

Declaring variable `n` as `int` and assigning it a `str` value gives an error:

``` rascal-shell
int n = "abc";
```

The solution is to assign an `int` value to `n`:

``` rascal-shell
int n = 123;
```

An `assert` statement expects an argument of type `bool`:

``` rascal-shell
assert 3;
```

# UnguardedAppend

**Synopsis.**

Append statement occurs outside a for/while statement.

**Description.**

The [append](/Rascal#Statements-Append) statement can be used inside a loop statement. This error is generated when
append occurs outside a loop.

Remedy: use List concatenation to append an element to a list outside a loop.

**Examples.**

This is the typical use of `append`:

``` rascal-shell
for(int i <- [1..5]) append i*i;
```

Using append outside a loop gives an error:

``` rascal-shell
append 3;
```

# UnguardedFail

**Synopsis.**

Use of `fail` statement outside a condtional context.

**Description.**

A [fail](/Rascal#Statements-Fail) statement is only allowed inside conditional statements. This error is generated when
`fail` is used outside a conditional context.

Remedies:

  - Surround the `fail` statement by a conditional conditional statement.

  - Replace the `fail` statement by a \[Rascal:Throw\] statement.

  - replace the `fail` statement by a \[Rascal:Return\] statement.

**Examples.**

Here is a correct (albeit not very useful) use of `fail` where the pattern match `int N := 35` acts as guard:

``` rascal-shell
if(int N := 35){ if(N > 10) fail; }
```

Any condition (non only one using pattern matching) can act as guard:

``` rascal-shell
if(true) { fail; }
```

An error occurs when `fail` is used outside a conditional context:

``` rascal-shell
fail;
```

# UnguardedInsert

**Synopsis.**

An `insert` occurs outside a `visit` expression.

**Description.**

An insert statement may only occur in the action part of a [pattern with action](/Rascal#Patterns-PatternWithAction),
more precisely in a case in a [visit](/Rascal#Expressions-Visit) expression.

Remedies:

  - Use an auxiliary variable and list or set operations to insert the value where you want.

  - Place the insert statement inside a visit.

**Examples.**

Here is an example of the use of insert to swap the arguments of red nodes:

Our favorite data type, colored trees:

``` rascal-shell
data CTree = leaf(int n) | red(CTree left, CTree right) | green(CTree left, CTree right);
```

An example tree:

``` rascal-shell
CTree T = red(green(leaf(1), red(leaf(2), leaf(3))), red(leaf(4), leaf(5)));
```

A visit to swap the arguments of red nodes:

``` rascal-shell
visit(T){ case red(CTree l, CTree r): insert red(r,l); }
```

An error occurs when insert is used outside a visit:

``` rascal-shell
insert red(leaf(1), leaf(2));
```

# UnguardedIt

**Synopsis.**

The special variable `it` occurs outside a reducer expression.

**Description.**

A [reducer](/Rascal#Expressions-Reducer) is used to reduce all elements in a collection to a sngle value. The special
variable `it` represents the currently reduced value and can be modified inside the reducer. This error is generated
when `it` i used otuside the a reducer.

Remedies:

  - You have accidentially used a variable with the name `it`; rename your variable to something else.

  - Place the expression that contains `it` in a reducer expression.

**Examples.**

This is correct way to add all elements in a list:

``` rascal-shell
(0 | it + n | int n <- [1,5,9] )
```

Using `it` outside a reducer gives an error:

``` rascal-shell
it + 3
```

# UnguardedReturn

**Synopsis.**

A return statement occurs outside a function body.

**Description.**

A [return](/Rascal#Statements-Return) statement is used to return a value from a function. It is an error to use it
outside a function body.

**Examples.**

``` rascal-shell
int triple(int n) { return 3 * n; }
triple(5);
```

Using return outside a function body gives an error:

``` rascal-shell
return 3;
```

# UninitializedPatternMatch

**Synopsis.**

Pattern matching has not been properly initialized.

**Description.**

[Pattern matching](/Rascal#Concepts-PatternMatching) requires two ingredients:

  - One of the many [patterns](/Rascal#Rascal-Patterns).

  - A non-void subject value to which the pattern is applied.

This error is generated when the subject is void.

Remedy: replace the subject by a non-void value.

**Examples.**

here is a (contrived) example that produces this error:

``` rascal-shell
void dummy() { return; }
int n := dummy();
```

# UnitializedVariable

**Synopsis.**

Use of a variable that has not been initialized.

**Description.**

A [variable](/Rascal#Declarations-Variable) has to be initialized before it can be used. This error is generated when an
uninitialzed variable is used.

Remedy: assign a value to the variable before its use:

**Examples.**

Using the uninitialized variable `x` gives an error:

``` rascal-shell
x + 5;
```

This can be avoided by first initializing `x`:

``` rascal-shell
x = 3;
x + 5;
```

# UnsupportedOperation

**Synopsis.**

Attempt to apply a operation to a value for which the operation is not defined.

**Description.**

This error is generated when an unsupported operation is applied to (a combination of) values. There can be many causes
for this as illustrated below.

Remedies:

  - Change the operation to another operations that is supported on the given values.

  - Change the values so that the operation can be applied to them.

  - Rewrite the expression compleye to get the effect you intended.

**Examples.**

``` rascal-shell
L = [1,2,3];
```

Division is not supported on lists:

``` rascal-shell
[1, 2, 3] / 4;
```

Combined multiplication and assignment is not supported either:

``` rascal-shell
L *= 3;
```

Taking the time from a date-only value is not supported:

``` rascal-shell
$2010-07-15$.justTime;
```

Calling an integer as a function is not supported:

``` rascal-shell
17(3, "abc");
```

# UnsupportedPattern

**Synopsis.**

A pattern is used that is not supported.

**Description.**

This is a case where the syntax (parser) of Rascal allows some kind of pattern, while the semantics (interpreter) does
not support it (yet). To solve this issue, usually you can introduce a variable in the place of the not support pattern,
and check conditions on the value "manually" later.

**Examples.**

Warning: To Do

# UnsupportedSubscript

**Synopsis.**

A subscript is applied to a value that does not support it.

**Description.**

Subscription is available for values of various types including: [string](/Rascal#String-Subscription),
[node](/Rascal#Node-Subscription), [list](/Rascal#List-Subscription), [map](/Rascal#Map-Subscription),
[tuple](/Rascal#Tuple-Subscription) and [relation](/Rascal#Relation-Subscription). This error is generated when
subscription is applied to a value for which it is not defined.

Remedies:

  - Use another operation than subscription to extract the values you want.

  - Use another type (that does support subscription) to represent your data.

**Examples.**

Here are some correct uses of subscription:

``` rascal-shell
"abc"[1];
[1,2,3][1];
"f"(1,2,3)[1];
("a":1, "b":2, "c":3)["b"]
```

Here are some erroneous examples:

``` rascal-shell
true[1];
123[1];
{1,2,3}[1];
```

# UnsupportedSubscriptArity

**Synopsis.**

Wrong number of subscripts is used.

**Description.**

Subscription is available for values of various types including: [string](/Rascal#String-Subscription),
[node](/Rascal#Node-Subscription), [list](/Rascal#List-Subscription), [map](/Rascal#Map-Subscription),
[tuple](/Rascal#Tuple-Subscription) and [relation](/Rascal#Relation-Subscription). This error is generated when
subscription is applied to a value that does support subscription but not the number of indices that are used.

Remedies: correct the number of indices used in the subscription.

**Examples.**

``` rascal-shell
[1,2,3][2,1];
("a":1, "b":2, "c":3)["c", "d"];
<1, 2, 3>[5,6];
```
