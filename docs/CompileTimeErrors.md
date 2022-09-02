## Document preparation issues

The following issues have been detected while preparing this draft document. It is not ready for publication.

1. [warning] |project://rascal/src/org/rascalmpl/courses/CompileTimeErrors/UnguardedFail/UnguardedFail.md|:17,0 Ambiguous concept link: Rascal:Statements-Fail resolves to all of {"#Statements-Fail","/Rascal.md#Statements-Fail"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/CompileTimeErrors/NotEnumerable/NotEnumerable.md|:18,0 Ambiguous concept link: Rascal:Expressions-Comprehensions resolves to all of {"#Expressions-Comprehensions","/Rascal.md#Expressions-Comprehensions"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/CompileTimeErrors/UnexpectedType/UnexpectedType.md|:19,0 Ambiguous concept link: Rascal:Declarations-Variable resolves to all of {"#Declarations-Variable","/Rascal.md#Declarations-Variable"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/CompileTimeErrors/UnexpectedType/UnexpectedType.md|:19,0 Ambiguous concept link: Rascal:Statements-Assert resolves to all of {"#Statements-Assert","/Rascal.md#Statements-Assert"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/CompileTimeErrors/UnexpectedType/UnexpectedType.md|:20,0 Ambiguous concept link: Rascal:Statements-Solve resolves to all of {"/Rascal.md#Statements-Solve","#Statements-Solve"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/CompileTimeErrors/UndeclaredAnnotation/UndeclaredAnnotation.md|:17,0 Ambiguous concept link: Rascal:Declarations-Annotation resolves to all of {"#Declarations-Annotation","/Rascal.md#Declarations-Annotation"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/CompileTimeErrors/UndeclaredAnnotation/UndeclaredAnnotation.md|:18,0 Ambiguous concept link: Rascal:Declarations-AlgebraicDataType resolves to all of {"/Rascal.md#Declarations-AlgebraicDataType","#Declarations-AlgebraicDataType"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/CompileTimeErrors/UnguardedIt/UnguardedIt.md|:17,0 Ambiguous concept link: Rascal:Expressions-Reducer resolves to all of {"/Rascal.md#Expressions-Reducer","#Expressions-Reducer"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/CompileTimeErrors/ModuleImport/ModuleImport.md|:18,0 Broken concept link: Rascal:Statements-Import
1. [warning] |project://rascal/src/org/rascalmpl/courses/CompileTimeErrors/UnguardedInsert/UnguardedInsert.md|:17,0 Broken concept link: Rascal:Patterns-PatternWithAction
1. [warning] |project://rascal/src/org/rascalmpl/courses/CompileTimeErrors/UnguardedInsert/UnguardedInsert.md|:19,0 Ambiguous concept link: Rascal:Expressions-Visit resolves to all of {"/Rascal.md#Expressions-Visit","#Expressions-Visit"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/CompileTimeErrors/UnitializedVariable/UnitializedVariable.md|:17,0 Ambiguous concept link: Rascal:Declarations-Variable resolves to all of {"#Declarations-Variable","/Rascal.md#Declarations-Variable"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/CompileTimeErrors/RedeclaredType/RedeclaredType.md|:18,0 Ambiguous concept link: Rascal:Declarations-Alias resolves to all of {"/Rascal.md#Declarations-Alias","#Declarations-Alias"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/CompileTimeErrors/RedeclaredType/RedeclaredType.md|:18,0 Ambiguous concept link: Rascal:Declarations-AlgebraicDataType resolves to all of {"/Rascal.md#Declarations-AlgebraicDataType","#Declarations-AlgebraicDataType"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/CompileTimeErrors/UndeclaredNonTerminal/UndeclaredNonTerminal.md|:17,0 Ambiguous concept link: Rascal:Declarations-SyntaxDefinition resolves to all of {"#Declarations-SyntaxDefinition","/Rascal.md#Declarations-SyntaxDefinition"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/CompileTimeErrors/UndeclaredField/UndeclaredField.md|:19,0 Ambiguous concept link: Rascal:Declarations-AlgebraicDataType resolves to all of {"/Rascal.md#Declarations-AlgebraicDataType","#Declarations-AlgebraicDataType"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/CompileTimeErrors/UnguardedReturn/UnguardedReturn.md|:17,0 Ambiguous concept link: Rascal:Statements-Return resolves to all of {"/Rascal.md#Statements-Return","#Statements-Return"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/CompileTimeErrors/RedeclaredField/RedeclaredField.md|:17,0 Broken concept link: Rascal:Declarations-AlgebraicDatatype
1. [warning] |project://rascal/src/org/rascalmpl/courses/CompileTimeErrors/UninitializedPatternMatch/UninitializedPatternMatch.md|:17,0 Broken concept link: Rascal:Concepts-PatternMatching
1. [warning] |project://rascal/src/org/rascalmpl/courses/CompileTimeErrors/UnguardedAppend/UnguardedAppend.md|:17,0 Ambiguous concept link: Rascal:Statements-Append resolves to all of {"#Statements-Append","/Rascal.md#Statements-Append"}

## Compile Time Errors {#CompileTimeErrors}

### Synopsis 
All errors that can occur during compilation of a Rascal program.

### Description 

WARNING: in progress of being adopted to the Rascal compiler. This list currently holds 
for the Rascal interpreter.

The following compile time (static) errors can occur in a Rascal program. 
They cannot be caught by the Rascal program. Although some of these errors are raised while running
Rascal programs in the interpreter, they are all intended to be raised by a static checker. This static
checker is currently under development.
 
* [Compile time errors:Undeclared module provider](/CompileTimeErrors.md#UndeclaredModuleProvider-UndeclaredModuleProvider)
* [Compile time errors:Unguarded fail](/CompileTimeErrors.md#UnguardedFail-UnguardedFail)
* [Compile time errors:Non void type required](/CompileTimeErrors.md#NonVoidTypeRequired-NonVoidTypeRequired)
* [Compile time errors:Arity](/CompileTimeErrors.md#Arity-Arity)
* [Compile time errors:Ambiguous function reference](/CompileTimeErrors.md#AmbiguousFunctionReference-AmbiguousFunctionReference)
* [Compile time errors:Not enumerable](/CompileTimeErrors.md#NotEnumerable-NotEnumerable)
* [Compile time errors:Missing return](/CompileTimeErrors.md#MissingReturn-MissingReturn)
* [Compile time errors:Non wellformed type](/CompileTimeErrors.md#NonWellformedType-NonWellformedType)
* [Compile time errors:Unsupported subscript arity](/CompileTimeErrors.md#UnsupportedSubscriptArity-UnsupportedSubscriptArity)
* [Compile time errors:Non abstract java function](/CompileTimeErrors.md#NonAbstractJavaFunction-NonAbstractJavaFunction)
* [Compile time errors:Unexpected type](/CompileTimeErrors.md#UnexpectedType-UnexpectedType)
* [Compile time errors:Unsupported pattern](/CompileTimeErrors.md#UnsupportedPattern-UnsupportedPattern)
* [Compile time errors:Unsupported operation](/CompileTimeErrors.md#UnsupportedOperation-UnsupportedOperation)
* [Compile time errors:Java method link](/CompileTimeErrors.md#JavaMethodLink-JavaMethodLink)
* [Compile time errors:Undeclared annotation](/CompileTimeErrors.md#UndeclaredAnnotation-UndeclaredAnnotation)
* [Compile time errors:Undeclared type](/CompileTimeErrors.md#UndeclaredType-UndeclaredType)
* [Compile time errors:Unguarded it](/CompileTimeErrors.md#UnguardedIt-UnguardedIt)
* [Compile time errors:Date time syntax](/CompileTimeErrors.md#DateTimeSyntax-DateTimeSyntax)
* [Compile time errors:Java compilation](/CompileTimeErrors.md#JavaCompilation-JavaCompilation)
* [Compile time errors:No keyword parameters](/CompileTimeErrors.md#NoKeywordParameters-NoKeywordParameters)
* [Compile time errors:Unexpected keyword argument type](/CompileTimeErrors.md#UnexpectedKeywordArgumentType-UnexpectedKeywordArgumentType)
* [Compile time errors:Unsupported subscript](/CompileTimeErrors.md#UnsupportedSubscript-UnsupportedSubscript)
* [Compile time errors:Illegal qualified declaration](/CompileTimeErrors.md#IllegalQualifiedDeclaration-IllegalQualifiedDeclaration)
* [Compile time errors:Invalid date time comparison](/CompileTimeErrors.md#InvalidDateTimeComparison-InvalidDateTimeComparison)
* [Compile time errors:Module import](/CompileTimeErrors.md#ModuleImport-ModuleImport)
* [Compile time errors:Undeclared java method](/CompileTimeErrors.md#UndeclaredJavaMethod-UndeclaredJavaMethod)
* [Compile time errors:Unguarded insert](/CompileTimeErrors.md#UnguardedInsert-UnguardedInsert)
* [Compile time errors:Unitialized variable](/CompileTimeErrors.md#UnitializedVariable-UnitializedVariable)
* [Compile time errors:Redeclared type](/CompileTimeErrors.md#RedeclaredType-RedeclaredType)
* [Compile time errors:Module name mismatch](/CompileTimeErrors.md#ModuleNameMismatch-ModuleNameMismatch)
* [Compile time errors:Undeclared function](/CompileTimeErrors.md#UndeclaredFunction-UndeclaredFunction)
* [Compile time errors:Undeclared module](/CompileTimeErrors.md#UndeclaredModule-UndeclaredModule)
* [Compile time errors:Undeclared non terminal](/CompileTimeErrors.md#UndeclaredNonTerminal-UndeclaredNonTerminal)
* [Compile time errors:Missing modifier](/CompileTimeErrors.md#MissingModifier-MissingModifier)
* [Compile time errors:Undeclared keyword parameter](/CompileTimeErrors.md#UndeclaredKeywordParameter-UndeclaredKeywordParameter)
* [Compile time errors:Undeclared field](/CompileTimeErrors.md#UndeclaredField-UndeclaredField)
* [Compile time errors:Redeclared variable](/CompileTimeErrors.md#RedeclaredVariable-RedeclaredVariable)
* [Compile time errors:Argument mismatch](/CompileTimeErrors.md#ArgumentMismatch-ArgumentMismatch)
* [Compile time errors:Unguarded return](/CompileTimeErrors.md#UnguardedReturn-UnguardedReturn)
* [Compile time errors:Redeclared field](/CompileTimeErrors.md#RedeclaredField-RedeclaredField)
* [Compile time errors:Uninitialized pattern match](/CompileTimeErrors.md#UninitializedPatternMatch-UninitializedPatternMatch)
* [Compile time errors:Undeclared variable](/CompileTimeErrors.md#UndeclaredVariable-UndeclaredVariable)
* [Compile time errors:Syntax error](/CompileTimeErrors.md#SyntaxError-SyntaxError)
* [Compile time errors:Partially labeled fields](/CompileTimeErrors.md#PartiallyLabeledFields-PartiallyLabeledFields)
* [Compile time errors:Unguarded append](/CompileTimeErrors.md#UnguardedAppend-UnguardedAppend)

## UndeclaredModuleProvider {#UndeclaredModuleProvider-UndeclaredModuleProvider}

### Synopsis 
A scheme is used in a location for wich no provider has been registered.



### Function 
       


### Description 

[Locations](/Rascal.md#Expressions-Values-Location) provide very flexible ways to access files and external data sources.
There any many protocols (called _schemes_) that can be used (e.g., `file`, `http`, `home` and many others).
This error is generated when an unknown scheme is used.

Remedy: Use an existing scheme.

### Examples 
Misspelling the scheme for Rascal's standard library (which is `std`) gives an error when the location is used:

```rascal-shell
rascal>import IO;
ok
rascal>readFileLines(|standard:///demo/basic/Hello.rsc|);
|std:///IO.rsc|(15235,756,<605,0>,<625,24>): IO("Unsupported scheme \'standard\'")
	at *** somewhere ***(|std:///IO.rsc|(15235,756,<605,0>,<625,24>))
	at readFileLines(|prompt:///|(14,34,<1,14>,<1,48>))
ok
```
This is fixed by using the proper scheme name:

```rascal-shell
rascal>readFileLines(|std:///demo/basic/Hello.rsc|);
list[str]: ["@license{","  Copyright (c) 2009-2015 CWI","  All rights reserved. This program and the accompanying materials","  are made available under the terms of the Eclipse Public License v1.0","  which accompanies this distribution, and is available at","  http://www.eclipse.org/legal/epl-v10.html","}","@contributor{Jurgen J. Vinju - Jurgen.Vinju@cwi.nl - CWI}","@contributor{Paul Klint - Paul.Klint@cwi.nl - CWI}","//START","// tag::module[]","module demo::basic::Hello","","import IO;","","void hello() {","   println(\"Hello world, this is my first Rascal program\");","}","// end::module[]"]
```




## UnguardedFail {#UnguardedFail-UnguardedFail}

### Synopsis 
Use of `fail` statement outside a condtional context.



### Function 
       


### Description 
A [fail]_broken:Rascal:Statements-Fail (ambiguous link)_ statement is only allowed inside conditional statements.
This error is generated when `fail` is used outside a conditional context.

Remedies:

*  Surround the `fail` statement by a conditional conditional statement.
*  Replace the `fail` statement by a [Rascal:Throw] statement.
*  replace the `fail` statement by a [Rascal:Return] statement.

### Examples 
Here is a correct (albeit not very useful) use of `fail` where the pattern match `int N := 35` acts as guard:

```rascal-shell
rascal>if(int N := 35){ if(N > 10) fail; }
ok
```
Any condition (non only one using pattern matching) can act as guard:

```rascal-shell
rascal>if(true) { fail; }
ok
```
An error occurs when `fail` is used outside a conditional context:

```rascal-shell
rascal>fail;
|prompt:///|(0,5,<1,0>,<1,5>): Use of fail outside a conditional context
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnguardedFail/UnguardedFail.html|
ok
```




## NonVoidTypeRequired {#NonVoidTypeRequired-NonVoidTypeRequired}

### Synopsis 

A type other than `void` is needed.



### Function 
       


### Description 

This error is generated when a value is needed, so an expression of any type but the `void` type.

The most prominent examples are splicing for 
[list](/Rascal.md#Expressions-Values-List-Splice) and [set](/Rascal.md#Expressions-Values-Set-Splice).

Remedy: replace the expression of type `void` by an expression that computes a value.

### Examples 
First define a dummy function that returns void:

```rascal-shell
rascal>void dummy() { return; }
void (): function(|prompt:///|(0,24,<1,0>,<1,24>))
rascal>[1, *dummy(), 2]
|prompt:///|(4,8,<1,4>,<1,12>): Non-void type required
Advice: |http://tutor.rascal-mpl.org/Errors/Static/NonVoidTypeRequired/NonVoidTypeRequired.html|
ok
rascal>{1, *dummy(), 2}
|prompt:///|(5,7,<1,5>,<1,12>): Non-void type required
Advice: |http://tutor.rascal-mpl.org/Errors/Static/NonVoidTypeRequired/NonVoidTypeRequired.html|
ok
```
A solution could be:


```rascal-shell
rascal>int dummy() { return 17; }
int (): function(|prompt:///|(0,26,<1,0>,<1,26>))
rascal>[1, *dummy(), 2]
list[int]: [1,17,2]
rascal>{1, *dummy(), 2}
set[int]: {1,2,17}
```




## Arity {#Arity-Arity}

### Synopsis 
The number of arguments of an operator differ from what is required.



### Function 
       


### Description 
Various operators like [composition](/Rascal.md#Expressions-Values-Relation-Composition), 
[transitive closure](/Rascal.md#Expressions-Values-Relation-TransitiveClosure) and 
[reflexive transitive closure](/Rascal.md#Expressions-Values-Relation-ReflexiveTransitiveClosure) 
expect binary relations or tuples as arguments.

### Examples 
This composition is correct:

```rascal-shell
rascal>{<1,10>, <2,20>} o {<10,100>, <20, 200>};
rel[int,int]: {
<1,100>,
<2,200>
}
```
This is not, since the first argument has arity 3:

```rascal-shell
rascal>{<1,5,10>, <2,6,20>} o {<10,100>, <20, 200>};
|prompt:///|(39,3,<1,39>,<1,42>): Expected arity : 2, unequal to 3
Advice: |http://tutor.rascal-mpl.org/Errors/Static/Arity/Arity.html|
ok
```

These transitive closures are correct:

```rascal-shell
rascal>{<1,2>, <2,3>,<4,5>}+
rel[int,int]: {
<2,3>,
<4,5>,
<1,3>,
<1,2>
}
rascal>{<1,2>, <2,3>,<4,5>}*
rel[int,int]: {
<5,5>,
<3,3>,
<1,1>,
<1,3>,
<1,2>,
<2,3>,
<2,2>,
<4,5>,
<4,4>
}
```
But these are incorrect:

```rascal-shell
rascal>{<1,2,3>, <2,3,4>,<4,5,6>}+
|prompt:///|(23,1,<1,23>,<1,24>): Expected arity : 2, unequal to 3
Advice: |http://tutor.rascal-mpl.org/Errors/Static/Arity/Arity.html|
ok
rascal>{<1,2,3>, <2,3,4>,<4,5,6>}*
|prompt:///|(23,1,<1,23>,<1,24>): Expected arity : 2, unequal to 3
Advice: |http://tutor.rascal-mpl.org/Errors/Static/Arity/Arity.html|
ok
```



## AmbiguousFunctionReference {#AmbiguousFunctionReference-AmbiguousFunctionReference}

### Synopsis 
An ambiguous function name



### Function 
       


### Description 
Warning: How to generate this error? 

### Examples 

```rascal-shell
rascal>data D = d(int x);
ok
rascal>data D2 = d(str x);
ok
rascal>d(3).x
int: 3
rascal>d("a").x
str: "a"
```




## NotEnumerable {#NotEnumerable-NotEnumerable}

### Synopsis 
A value that cannot be enumerated is used in an enumerator.



### Function 
       


### Description 
An [enumerator](/Rascal.md#Expressions-Comprehensions-Enumerator) like `int n <- V` is used in 
[comprehensions]_broken:Rascal:Expressions-Comprehensions (ambiguous link)_ to enumerate the values in `V`.
This error is produced when `V` is a value that does not support enumeration.
This is typically the case for atomic values like numbers, Booleans and Strings,

Remedy: modify the expression in the enumerator to return a value that supports enumeration.

### Examples 

```rascal-shell
rascal>int x <- 17
|prompt:///|(9,2,<1,9>,<1,11>): int is not enumerable
Advice: |http://tutor.rascal-mpl.org/Errors/Static/NotEnumerable/NotEnumerable.html|
ok
rascal>b <- true
|prompt:///|(5,4,<1,5>,<1,9>): bool is not enumerable
Advice: |http://tutor.rascal-mpl.org/Errors/Static/NotEnumerable/NotEnumerable.html|
ok
```




## MissingReturn {#MissingReturn-MissingReturn}

### Synopsis 
A return statement is missing from a function body.



### Function 
       


### Description 
Functions return some value (except functions that have return type `void`).
This error is generated when a function body does not return a value.

Remedies:

*  Add a [Rascal:Return] statement to the function body.
*  Rewrite the function so that the function body becomes a single expression and you can use the abbreviated function format, see [$Rascal:Declarations/Function].

### Examples 
Here is an incorrect definition of function `triple`:

```rascal-shell
rascal>int triple(int x) {
>>>>>>>   x * 3;
>>>>>>>}
int (int): function(|prompt:///|(0,31,<1,0>,<3,1>))
rascal>triple(5)
|prompt:///|(0,31,<1,0>,<3,1>): Missing return statement
Advice: |http://tutor.rascal-mpl.org/Errors/Static/MissingReturn/MissingReturn.html|
ok
```
It should look like this:

```rascal-shell
rascal>int triple(int x) {
>>>>>>>   return x * 3;
>>>>>>>}
int (int): function(|prompt:///|(0,38,<1,0>,<3,1>))
rascal>triple(5)
int: 15
```
This is another solution using the abbreviated function format:

```rascal-shell
rascal>int triple(int x) = x * 3;
int (int): function(|prompt:///|(0,26,<1,0>,<1,26>))
rascal>triple(5)
int: 15
```




## NonWellformedType {#NonWellformedType-NonWellformedType}

### Synopsis 
A type in a declaration is not wellformed.



### Function 
       


### Description 
Types should respect some structural rules and this error signals a violation of these rules.
Examples of violations are:

*  a non-parametric type has parameters.
*  a parametric type has an incorrect number of parameters.


Remedy: correct the type.

### Examples 

```rascal-shell
rascal>bool[int] x;
|prompt:///|(0,4,<1,0>,<1,4>): Non-well-formed type: bool cannot have type arguments.
Advice: |http://tutor.rascal-mpl.org/Errors/Static/NonWellformedType/NonWellformedType.html|
ok
rascal>list[int,str] l;
|prompt:///|(0,4,<1,0>,<1,4>): Non-well-formed type: list should have exactly one type argument, like list[value]
Advice: |http://tutor.rascal-mpl.org/Errors/Static/NonWellformedType/NonWellformedType.html|
ok
rascal>map[str, int, int]  m;
|prompt:///|(0,3,<1,0>,<1,3>): Non-well-formed type: map should have exactly two type arguments, like map[value,value]
Advice: |http://tutor.rascal-mpl.org/Errors/Static/NonWellformedType/NonWellformedType.html|
ok
rascal>set[int,str] s;
|prompt:///|(0,3,<1,0>,<1,3>): Non-well-formed type: set should have exactly one type argument, like set[value]
Advice: |http://tutor.rascal-mpl.org/Errors/Static/NonWellformedType/NonWellformedType.html|
ok
```



## UnsupportedSubscriptArity {#UnsupportedSubscriptArity-UnsupportedSubscriptArity}

### Synopsis 
Wrong number of subscripts is used. 



### Function 
       


### Description 
Subscription is available for values of various types including: 
[string](/Rascal.md#Expressions-Values-String-Subscription), 
[node](/Rascal.md#Expressions-Values-Node-Subscription),
[list](/Rascal.md#Expressions-Values-List-Subscription), 
[map](/Rascal.md#Expressions-Values-Map-Subscription), 
[tuple](/Rascal.md#Expressions-Values-Tuple-Subscription) and 
[relation](/Rascal.md#Expressions-Values-Relation-Subscription).
This error is generated when subscription is applied to a value that does support subscription but not the number
of indices that are used.

Remedies: correct the number of indices used in the subscription.

### Examples 

```rascal-shell
rascal>[1,2,3][2,1];
|prompt:///|(10,1,<1,10>,<1,11>): Unsupported subscript arity of 2 on type list[int]
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedSubscriptArity/UnsupportedSubscriptArity.html|
ok
rascal>("a":1, "b":2, "c":3)["c", "d"];
|prompt:///|(27,3,<1,27>,<1,30>): Unsupported subscript arity of 2 on type map[str, int]
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedSubscriptArity/UnsupportedSubscriptArity.html|
ok
rascal><1, 2, 3>[5,6];
|prompt:///|(12,1,<1,12>,<1,13>): Unsupported subscript arity of 2 on type tuple[int,int,int]
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedSubscriptArity/UnsupportedSubscriptArity.html|
ok
```




## NonAbstractJavaFunction {#NonAbstractJavaFunction-NonAbstractJavaFunction}

### Synopsis 
A function declared with the `java` modifier has a Rascal body.



### Function 
       


### Description 
Rascal functions can be implemented in Java. This is the case for many functions in the standard library.
This requires these elements:

*  An abstract Rascal function declaration (= a function header without a body).
*  The keyword `java` should be part of the function header.
*  The function declaration is annotated (uing `javaClass`) with the name of the Java class that implements this function.


This error is generated when the function does have a body.

Remedies:

*  Remove the `java` keyword.
*  If this happens to a library function, contact the Rascal developers:
**  Ask a question at [Rascal Ask site](http://ask.rascal-mpl.org/questions/).
**  Read the currently open issues at the Rascal's [issue tracker](https://github.com/cwi-swat/rascal/issues?state=open). If your problem has not yet been reported by someone else, please report it here.


If you are an expert developer, please check the body of the offending function first.

### Examples 

```rascal-shell
rascal>java int incr(int x) {}
|prompt:///|(0,23,<1,0>,<1,23>): Java function has a body
Advice: |http://tutor.rascal-mpl.org/Errors/Static/NonAbstractJavaFunction/NonAbstractJavaFunction.html|
ok
```




## UnexpectedType {#UnexpectedType-UnexpectedType}

### Synopsis 
A value of a different type was expected.



### Function 
       


### Description 
This error signals an incompatibility between expected type and actual type.
Some of the situations in which this may occur are
[assert]_broken:Rascal:Statements-Assert (ambiguous link)_, [variable]_broken:Rascal:Declarations-Variable (ambiguous link)_,
[solve]_broken:Rascal:Statements-Solve (ambiguous link)_.

Remedy: adjust the actual type to the expected type.

### Examples 
Declaring variable `n` as `int` and assigning it a `str` value gives an error:

```rascal-shell
rascal>int n = "abc";
|prompt:///|(4,9,<1,4>,<1,13>): Expected int, but got str
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnexpectedType/UnexpectedType.html|
ok
```
The solution is to assign an `int` value to `n`:

```rascal-shell
rascal>int n = 123;
int: 123
```
An `assert` statement expects an argument of type `bool`:

```rascal-shell
rascal>assert 3;
|prompt:///|(0,9,<1,0>,<1,9>): Expected bool, but got int
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnexpectedType/UnexpectedType.html|
ok
```




## UnsupportedPattern {#UnsupportedPattern-UnsupportedPattern}

### Synopsis 
A pattern is used that is not supported.



### Function 
       




### Description 

This is a case where the syntax (parser) of Rascal allows some kind of pattern, while the semantics (interpreter) does not support it (yet).
To solve this issue, usually you can introduce a variable in the place of the not support pattern, and check conditions on the value "manually" later.

### Examples 
Warning: To Do




## UnsupportedOperation {#UnsupportedOperation-UnsupportedOperation}

### Synopsis 
Attempt to apply a operation to a value for which the operation is not defined.



### Function 
       


### Description 
This error is generated when an unsupported operation is applied to (a combination of) values.
There can be many causes for this as illustrated below.

Remedies: 

*  Change the operation to another operations that is supported on the given values.
*  Change the values so that the operation can be applied to them.
*  Rewrite the expression compleye to get the effect you intended.

### Examples 

```rascal-shell
rascal>L = [1,2,3];
list[int]: [1,2,3]
```
Division is not supported on lists:

```rascal-shell
rascal>[1, 2, 3] / 4;
|prompt:///|(12,1,<1,12>,<1,13>): division not supported on list[int] and int
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedOperation/UnsupportedOperation.html|
ok
```
Combined multiplication and assignment is not supported either:

```rascal-shell
rascal>L *= 3;
|prompt:///|(5,1,<1,5>,<1,6>): multiplication not supported on list[int] and list[int]
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedOperation/UnsupportedOperation.html|
ok
```
Taking the time from a date-only value is not supported:

```rascal-shell
rascal>$2010-07-15$.justTime;
|prompt:///|(0,12,<1,0>,<1,12>): Can not retrieve the time component of a date value
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedOperation/UnsupportedOperation.html|
ok
```
Calling an integer as a function is not supported:

```rascal-shell
rascal>17(3, "abc");
|prompt:///|(6,5,<1,6>,<1,11>): A value of type int is not something you can call like a function, a constructor or a closure.
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedOperation/UnsupportedOperation.html|
ok
```




## JavaMethodLink {#JavaMethodLink-JavaMethodLink}

### Synopsis 
Cannot link to a Java method.



### Function 
       


### Description 
Rascal functions can be implemented in Java. This is the case for many functions in the standard library.
This requires these elements:

*  An abstract Rascal function declaration (= a function header without a body).
*  The keyword `java` should be part of the function header.
*  The function declaration is annotated (uing `javaClass`) with the name of the Java class that implements this function.


This error is generated when the Java implementation cannot be found. Most likely, this is a missing or misspelled Java class name.
It is also generated when the function declaration _does_ have a body.

Remedy: Contact the Rascal developers:

*  Ask a question on StackOverflow using the http://stackoverflow.com/questions/tagged/rascal[Rascal Stackoverflow Tag].
*  Read the currently open issues at the Rascal's https://github.com/usethesource/rascal/issues?state=open[Issue Tracker on Github]. If your problem has not yet been reported by someone else, please report it here.


If you are an expert developer and have implemented your own extension in Java, please check your own extension code first.

### Examples 
This is how the `size` function on lists is declared in the Rascal library:

```rascal-shell
rascal>@javaClass{org.rascalmpl.library.Prelude}
>>>>>>>public java int size(list[&T] lst);
int (list[&T]): function(|prompt:///|(0,77,<1,0>,<2,35>))
```

Misspelling the class name will generate the JavaMethodLink error:

```rascal-shell
rascal>@javaClass{org.rascalmpl.library.Preludexxx}
>>>>>>>public java int size(list[&T] lst);
org.rascalmpl.exceptions.JavaMethodLink: Cannot link method org.rascalmpl.library.Preludexxx because: class not found
(internal error)
	at $shell$(|main://$shell$|)

org.rascalmpl.exceptions.JavaMethodLink: Cannot link method org.rascalmpl.library.Preludexxx because: class not found
	at org.rascalmpl.interpreter.utils.JavaBridge.getJavaClassInstance(JavaBridge.java:432)
	at org.rascalmpl.interpreter.result.JavaMethod.<init>(JavaMethod.java:95)
	at org.rascalmpl.interpreter.result.JavaMethod.<init>(JavaMethod.java:52)
	at org.rascalmpl.semantics.dynamic.FunctionDeclaration$Abstract.interpret(FunctionDeclaration.java:61)
	at org.rascalmpl.semantics.dynamic.Declaration$Function.interpret(Declaration.java:117)
	at org.rascalmpl.semantics.dynamic.Command$Declaration.interpret(Command.java:38)
	at org.rascalmpl.interpreter.Evaluator.eval(Evaluator.java:1062)
	at org.rascalmpl.interpreter.Evaluator.eval(Evaluator.java:923)
	at org.rascalmpl.interpreter.Evaluator.eval(Evaluator.java:876)
	at org.rascalmpl.repl.RascalInterpreterREPL.evalStatement(RascalInterpreterREPL.java:132)
	at org.rascalmpl.repl.BaseRascalREPL.handleInput(BaseRascalREPL.java:119)
	at org.rascalmpl.library.lang.rascal.tutor.repl.TutorCommandExecutor.eval(TutorCommandExecutor.java:88)
	at org.rascalmpl.library.lang.rascal.tutor.repl.TutorCommandExecutorCreator.lambda$eval$2(TutorCommandExecutorCreator.java:82)
	at org.rascalmpl.values.RascalFunctionValueFactory$RascalFunctionValue.call(RascalFunctionValueFactory.java:176)
	at org.rascalmpl.interpreter.result.FunctionResultFacade.call(FunctionResultFacade.java:54)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Assignment.interpret(Statement.java:205)
	at org.rascalmpl.semantics.dynamic.Statement$NonEmptyBlock.interpret(Statement.java:759)
	at org.rascalmpl.semantics.dynamic.Statement$For.interpret(Statement.java:468)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.semantics.dynamic.Statement$NonEmptyBlock.interpret(Statement.java:759)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:711)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.semantics.dynamic.Statement$NonEmptyBlock.interpret(Statement.java:759)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:711)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.semantics.dynamic.Statement$NonEmptyBlock.interpret(Statement.java:759)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:711)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.semantics.dynamic.Statement$NonEmptyBlock.interpret(Statement.java:759)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:711)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.semantics.dynamic.Statement$NonEmptyBlock.interpret(Statement.java:759)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:711)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.semantics.dynamic.Statement$NonEmptyBlock.interpret(Statement.java:759)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:711)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.semantics.dynamic.Statement$NonEmptyBlock.interpret(Statement.java:759)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:711)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.semantics.dynamic.Statement$NonEmptyBlock.interpret(Statement.java:759)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:711)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$Addition.interpret(Expression.java:141)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.semantics.dynamic.Statement$NonEmptyBlock.interpret(Statement.java:759)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:679)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:711)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:711)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Assignment.interpret(Statement.java:205)
	at org.rascalmpl.semantics.dynamic.Statement$NonEmptyBlock.interpret(Statement.java:759)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:679)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.semantics.dynamic.Statement$NonEmptyBlock.interpret(Statement.java:759)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:679)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.ListComprehensionWriter.append(ListComprehensionWriter.java:26)
	at org.rascalmpl.semantics.dynamic.Comprehension.evalComprehension(Comprehension.java:95)
	at org.rascalmpl.semantics.dynamic.Comprehension$List.interpret(Comprehension.java:39)
	at org.rascalmpl.semantics.dynamic.Expression$Comprehension.interpret(Expression.java:680)
	at org.rascalmpl.semantics.dynamic.Expression$Addition.interpret(Expression.java:142)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.semantics.dynamic.Statement$NonEmptyBlock.interpret(Statement.java:759)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:711)
	at org.rascalmpl.semantics.dynamic.Statement$NonEmptyBlock.interpret(Statement.java:759)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:679)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Assignment.interpret(Statement.java:205)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.ListComprehensionWriter.append(ListComprehensionWriter.java:26)
	at org.rascalmpl.semantics.dynamic.Comprehension.evalComprehension(Comprehension.java:95)
	at org.rascalmpl.semantics.dynamic.Comprehension$List.interpret(Comprehension.java:39)
	at org.rascalmpl.semantics.dynamic.Expression$Comprehension.interpret(Expression.java:680)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Command$Expression.interpret(Command.java:61)
	at org.rascalmpl.interpreter.Evaluator.eval(Evaluator.java:1062)
	at org.rascalmpl.interpreter.Evaluator.eval(Evaluator.java:923)
	at org.rascalmpl.interpreter.Evaluator.eval(Evaluator.java:876)
	at org.rascalmpl.repl.RascalInterpreterREPL.evalStatement(RascalInterpreterREPL.java:132)
	at org.rascalmpl.repl.BaseRascalREPL.handleInput(BaseRascalREPL.java:106)
	at org.rascalmpl.shell.REPLRunner$1.handleInput(REPLRunner.java:61)
	at org.rascalmpl.repl.BaseREPL.handleInput(BaseREPL.java:180)
	at org.rascalmpl.repl.BaseREPL.run(BaseREPL.java:347)
	at org.rascalmpl.shell.REPLRunner.run(REPLRunner.java:96)
	at org.rascalmpl.shell.RascalShell.main(RascalShell.java:69)
ok
```
The same error message is generated if the function declaration contains a body:

```rascal-shell
rascal>@javaClass{org.rascalmpl.library.Preludexxx}
>>>>>>>public java int size(list[&T] lst){
>>>>>>>  return 0;
>>>>>>>}
|prompt:///|(0,94,<1,0>,<4,1>): Java function has a body
Advice: |http://tutor.rascal-mpl.org/Errors/Static/NonAbstractJavaFunction/NonAbstractJavaFunction.html|
ok
```






## UndeclaredAnnotation {#UndeclaredAnnotation-UndeclaredAnnotation}

### Synopsis 
An annotation is used that has not been declared.



### Function 
       


### Description 
An [annotation]_broken:Rascal:Declarations-Annotation (ambiguous link)_ can be used to add information to an instance of an
[algebraic data type]_broken:Rascal:Declarations-AlgebraicDataType (ambiguous link)_.
An annotation has to declared beforehand. This error is generated when an undeclared annotation is used.

Remedies:

*  Declare the annotation.
*  Use an already declared annotation.

### Examples 
This is correct:

```rascal-shell
rascal>data Fruit = apple(int n) | orange(int n);
ok
rascal>anno str Fruit @ quality;
ok
rascal>piece = orange(13);
Fruit: orange(13)
rascal>piece @ quality = "great";
Fruit: orange(13,quality="great")
```
But using a wrong annotation name generates an error:

```rascal-shell
rascal>piece @ qual;
```




## UndeclaredType {#UndeclaredType-UndeclaredType}

### Synopsis 
Use of a type that has not been declared.



### Function 
       


### Description 
A type has to be declared before it can be used.
This error is generated when an undeclared type is used.

Remedies:

*  Rename the type name.
*  Declare the type.
*  Import a module that declares the type. (Did you import all library modules?)

### Examples 
Using the undeclared type `myint` gives an error:

```rascal-shell
>>>>>>>myint incr(myint n) = n + 1;
                    ^ Parse error here
ok
```
The solkution is to first declares `myint` (here as an alias for `int`):

```rascal-shell
rascal>alias myint = int;
ok
rascal>myint incr(myint n) = n + 1;
int (int): function(|prompt:///|(0,28,<1,0>,<1,28>))
rascal>incr(3);
int: 4
```




## UnguardedIt {#UnguardedIt-UnguardedIt}

### Synopsis 
The special variable `it` occurs outside a reducer expression.



### Function 
       


### Description 
A [reducer]_broken:Rascal:Expressions-Reducer (ambiguous link)_ is used to reduce all elements in a collection to a sngle value.
The special variable `it` represents the currently reduced value and can be modified inside the reducer.
This error is generated when `it` i used otuside the a reducer.

Remedies:

*  You have accidentially used a variable with the name `it`; rename your variable to something else.
*  Place the expression that contains `it` in a reducer expression.

### Examples 
This is correct way to add all elements in a list:

```rascal-shell
rascal>(0 | it + n | int n <- [1,5,9] )
int: 15
```
Using `it` outside a reducer gives an error:

```rascal-shell
rascal>it + 3
|prompt:///|(0,2,<1,0>,<1,2>): Use of 'it' special variable is only allowed within reducers
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnguardedIt/UnguardedIt.html|
ok
```




## DateTimeSyntax {#DateTimeSyntax-DateTimeSyntax}

### Synopsis 
A datetime value is syntactically incorrect.



### Function 
       


### Description 

Datetime values have a rather complex format as described in [datetime](/Rascal.md#Expressions-Values-DateTime).
Some errors in the format are treated as syntax errors, others generate the `DateTimeSyntax` error.

Remedy: Fix the datetime value notation.

### Examples 
A correct datetime value:

```rascal-shell
rascal>$2013-07-15T09:15:23.123+03:00$;
datetime: $2013-07-15T09:15:23.123+03:00$
```
Certain errors, like a wrong day number (here: 40) lead to a parse error:

```rascal-shell
rascal>$2013-07-40T09:15:23.123+03:00$;
                 ^ Parse error here
ok
```

Others, like a wrong month number (here: 15) lead to a DateTimeSyntax error

```rascal-shell
rascal>$2010-15-15T09:15:23.123+03:00$;
|prompt:///|(0,31,<1,0>,<1,31>): Invalid datetime input: Cannot create date with provided values.
Advice: |http://tutor.rascal-mpl.org/Errors/Static/DateTimeSyntax/DateTimeSyntax.html|
ok
```




## JavaCompilation {#JavaCompilation-JavaCompilation}

### Synopsis 
Compilation of generated Java code failed.



### Function 
       


### Description 
Some parts of the Rascal system generate Java code. Most notable is the parser generator.
This error message is generated when the compilation of generated Java code fails.

Remedy: Contact the Rascal developers:

*  Ask a question on StackOverflow using the http://stackoverflow.com/questions/tagged/rascal[Rascal Stackoverflow Tag].
*  Read the currently open issues at the Rascal's https://github.com/usethesource/rascal/issues?state=open[Issue Tracker on Github]. If your problem has not yet been reported by someone else, please report it here.





## NoKeywordParameters {#NoKeywordParameters-NoKeywordParameters}

### Synopsis 
A function that is declared without keyword parameters is called with keyword parameters.



### Function 
       


### Description 
Functions maybe declared with or without keyword parameters.
This error is generated when a function has been declared without keyword parameters but is called with a keyword parameter.

Remedies:

*  Replace the keyword parameter in the call by a positional parameter.
*  Add a keyword parameter to the function declaration.

### Examples 

```rascal-shell
rascal>int incr(int x) = x + 1;
int (int): function(|prompt:///|(0,24,<1,0>,<1,24>))
rascal>incr(3, delta=5);
int: 4
```
Here is one solution:

```rascal-shell
rascal>int incr(int x, int delta=1) = x + delta;
int (int, int delta = ...): function(|prompt:///|(0,41,<1,0>,<1,41>))
rascal>incr(3, delta=5);
int: 8
```




## UnexpectedKeywordArgumentType {#UnexpectedKeywordArgumentType-UnexpectedKeywordArgumentType}

### Synopsis 
The actual value of a keyword argument is not compatible with its declared type.



### Function 
       


### Description 
Functions may be declared to have keyword parameters. Each keyword parameters has a type, a name and a default value.
This error is generated when the declared type and the actual type of the keyword parameter are not compatible.

Remedies:

*  Change the type of the keyword parameter in the call.
*  Change the type of the keyword parameter in the function declaration.

### Examples 

Declare `incr` function with keyword parameter `delta` of type `int`:

```rascal-shell
rascal>int incr(int x, int delta = 1) = n + delta;
int (int, int delta = ...): function(|prompt:///|(0,43,<1,0>,<1,43>))
```
Erroneous use of `delta` with a string value:

```rascal-shell
rascal>incr(3, delta="more");
|prompt:///|(0,21,<1,0>,<1,21>): Expected int, but got str
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnexpectedType/UnexpectedType.html|
ok
```




## UnsupportedSubscript {#UnsupportedSubscript-UnsupportedSubscript}

### Synopsis 
A subscript is applied to a value that does not support it.



### Function 
       


### Description 
Subscription is available for values of various types including: 
[string](/Rascal.md#Expressions-Values-String-Subscription), 
[node](/Rascal.md#Expressions-Values-Node-Subscription),
[list](/Rascal.md#Expressions-Values-List-Subscription), 
[map](/Rascal.md#Expressions-Values-Map-Subscription), 
[tuple](/Rascal.md#Expressions-Values-Tuple-Subscription) and 
[relation](/Rascal.md#Expressions-Values-Relation-Subscription).
This error is generated when subscription is applied to a value for which it is not defined.

Remedies:

*  Use another operation than subscription to extract the values you want.
*  Use another type (that does support subscription) to represent your data.

### Examples 
Here are some correct uses of subscription:

```rascal-shell
rascal>"abc"[1];
str: "b"
rascal>[1,2,3][1];
int: 2
rascal>"f"(1,2,3)[1];
value: 2
rascal>("a":1, "b":2, "c":3)["b"]
int: 2
```
Here are some erroneous examples:

```rascal-shell
rascal>true[1];
|prompt:///|(5,1,<1,5>,<1,6>): subscript not supported on bool at |prompt:///|(5,1,<1,5>,<1,6>)
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedOperation/UnsupportedOperation.html|
ok
rascal>123[1];
|prompt:///|(4,1,<1,4>,<1,5>): subscript not supported on int at |prompt:///|(4,1,<1,4>,<1,5>)
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedOperation/UnsupportedOperation.html|
ok
rascal>{1,2,3}[1];
|prompt:///|(8,1,<1,8>,<1,9>): subscript not supported on set[int] at |prompt:///|(8,1,<1,8>,<1,9>)
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedOperation/UnsupportedOperation.html|
ok
```




## IllegalQualifiedDeclaration {#IllegalQualifiedDeclaration-IllegalQualifiedDeclaration}

### Synopsis 
Qualified names cannot be declared.



### Function 
       


### Description 
When the same name is declared in different modules, a qualified name can be used to refer to a specific version of that name.
This error is generated when a qualified name is used in a declaration.

Remedy: remove the qualification.

### Examples 
Using a qualified name gives an error:

```rascal-shell
rascal>data M::D = d();
|prompt:///|(5,4,<1,5>,<1,9>): Declaration of qualified names is not allowed
Advice: |http://tutor.rascal-mpl.org/Errors/Static/IllegalQualifiedDeclaration/IllegalQualifiedDeclaration.html|
ok
```
Without the qualification, this is correct:

```rascal-shell
rascal>data D = d();
ok
```




## InvalidDateTimeComparison {#InvalidDateTimeComparison-InvalidDateTimeComparison}

### Synopsis 
Attempt to compare a date with a time.



### Function 
       


### Description 
[datetime](/Rascal.md#Expressions-Values-DateTime) values may contain two components: date and time.
Datetime values that contain both a date and a time can be compared.
Dates can also be compared with dates, and times with times.
This error is generated when a date is compared with a time.

### Examples 
Comparing dates with dates:

```rascal-shell
rascal>$2013-07-15$ < $2014-07-15$
bool: true
```

Or with datetimes:

```rascal-shell
rascal>$2013-01-11T23:03:56.901+01:00$ < $2013-01-11T23:05:00.901+01:00$
bool: true
```
But mixing dates and times gives errors:

```rascal-shell
rascal>$2013-07-15$ < $T20:03:56.901+01:00$
|prompt:///|(15,21,<1,15>,<1,36>): Invalid datetime input: Error reading time, expected ':', found: 48
Advice: |http://tutor.rascal-mpl.org/Errors/Static/DateTimeSyntax/DateTimeSyntax.html|
ok
```




## ModuleImport {#ModuleImport-ModuleImport}

### Synopsis 
A Rascal module could not be imported.



### Function 
       


### Description 
Rascal programs are split up in modules.
An [import ]_Rascal:Statements-Import (broken link)_ statement is used to include one module in another.
This error indicates that a module import failed.
This can be caused by 

*  A misspelled name in the import statement.
*  Starting a Rascal console from the wrong directory.


Remedies:

*  Correct the mispelled name.
*  In Eclipse the safest way to execute a Rascal module is to select it in the Package Explorer, 
right click on it and then select `Run as Rascal Application`.

*  At the command line, change directory to where the toplevel module of your program is located and then execute the Rascal Shell.

### Examples 
Here is a correct import of the library module `List`:

```rascal-shell
rascal>import List;
ok
```
Here is the effect of a misspelled module name (assuming that you do not have a module `Lis`):

```rascal-shell
rascal>import Lis;
|prompt:///|(0,11,<1,0>,<1,11>): Could not import module Lis: can not find in search path
Advice: |http://tutor.rascal-mpl.org/Errors/Static/ModuleImport/ModuleImport.html|
ok
```




## UndeclaredJavaMethod {#UndeclaredJavaMethod-UndeclaredJavaMethod}

### Synopsis 
Attempt to call a non-existing Java method.



### Function 
       


### Description 

Rascal functions can be implemented in Java. This is the case for many functions in the standard library.
This requires these elements:

*  An abstract Rascal function declaration (= a function header without a body).
*  The keyword `java` should be part of the function header.
*  The function declaration is annotated (uing `javaClass`) with the name of the Java class that implements this function.


This error is generated when a method with the same name as the Rascal function
cannot be found in the mentioned Java class. Most likely, this is a missing or misspelled function/method name.

Remedy: Contact the Rascal developers:

*  Ask a question at [Rascal Ask site](http://ask.rascal-mpl.org/questions/).
*  Read the currently open issues at the Rascal's [issue tracker](https://github.com/cwi-swat/rascal/issues?state=open). If your problem has not yet been reported by someone else, please report it here.


If you are an expert developer and have implemented your own extension in Java, please check your own extension code first.


### Examples 
This is how the `size` function on lists is declared in the Rascal library:

```rascal-shell
rascal>@javaClass{org.rascalmpl.library.Prelude}
>>>>>>>public java int size(list[&T] lst);
int (list[&T]): function(|prompt:///|(0,77,<1,0>,<2,35>))
```
This is the result of misspelling the function name (`siz` instead of `size`):

```rascal-shell
rascal>@javaClass{org.rascalmpl.library.Prelude}
>>>>>>>public java int siz(list[&T] lst);
|prompt:///|(0,76,<1,0>,<2,34>): No such Java method: org.rascalmpl.library.Prelude.siz(io.usethesource.vallang.IList)
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredJavaMethod/UndeclaredJavaMethod.html|
ok
```



## UnguardedInsert {#UnguardedInsert-UnguardedInsert}

### Synopsis 
An `insert` occurs outside a `visit` expression.



### Function 
       


### Description 
An insert statement may only occur in the action part of a [pattern with action]_Rascal:Patterns-PatternWithAction (broken link)_, 
more precisely in a case in a 
[visit]_broken:Rascal:Expressions-Visit (ambiguous link)_ expression. 

Remedies:

*  Use an auxiliary variable and list or set operations to insert the value where you want.
*  Place the insert statement inside a visit.

### Examples 
Here is an example of the use of insert to swap the arguments of red nodes:

Our favorite data type, colored trees:

```rascal-shell
rascal>data CTree = leaf(int n) | red(CTree left, CTree right) | green(CTree left, CTree right);
ok
```
An example tree:

```rascal-shell
rascal>CTree T = red(green(leaf(1), red(leaf(2), leaf(3))), red(leaf(4), leaf(5)));
CTree: red(
green(
leaf(1),
red(
leaf(2),
leaf(3))),
red(
leaf(4),
leaf(5)))
```
A visit to swap the arguments of red nodes:

```rascal-shell
rascal>visit(T){ case red(CTree l, CTree r): insert red(r,l); }
CTree: red(
red(
leaf(5),
leaf(4)),
green(
leaf(1),
red(
leaf(3),
leaf(2))))
```
An error occurs when insert is used outside a visit:

```rascal-shell
rascal>insert red(leaf(1), leaf(2));
|prompt:///|(0,29,<1,0>,<1,29>): Insert statement outside a visit statement
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnguardedInsert/UnguardedInsert.html|
ok
```




## UnitializedVariable {#UnitializedVariable-UnitializedVariable}

### Synopsis 
Use of a variable that has not been initialized.



### Function 
       


### Description 
A [variable]_broken:Rascal:Declarations-Variable (ambiguous link)_ has to be initialized before it can be used.
This error is generated when an uninitialzed variable is used.

Remedy: assign a value to the variable before its use:

### Examples 
Using the uninitialized variable `x` gives an error:

```rascal-shell
rascal>x + 5;
|prompt:///|(0,1,<1,0>,<1,1>): Undeclared variable: x
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredVariable/UndeclaredVariable.html|
ok
```
This can be avoided by first initializing `x`:

```rascal-shell
rascal>x = 3;
int: 3
rascal>x + 5;
int: 8
```




## RedeclaredType {#RedeclaredType-RedeclaredType}

### Synopsis 
A type with the same name has been declared before.



### Function 
       


### Description 
Some declarations introduce new type names. Most important are an 
[algebraic data type]_broken:Rascal:Declarations-AlgebraicDataType (ambiguous link)_ and [alias]_broken:Rascal:Declarations-Alias (ambiguous link)_.
This error signals that the same type name is used for incompatible purposes.

Remedy: rename one of the type names.

### Examples 

```rascal-shell
rascal>data D = d(int x);
ok
rascal>alias D = str;
|prompt:///|(0,14,<1,0>,<1,14>): Illegal re-declaration of type: D
Advice: |http://tutor.rascal-mpl.org/Errors/Static/RedeclaredType/RedeclaredType.html|
ok
```


```rascal-shell
rascal>alias D = int;
ok
rascal>alias D = str;
|prompt:///|(0,14,<1,0>,<1,14>): Illegal re-declaration of type: D
Advice: |http://tutor.rascal-mpl.org/Errors/Static/RedeclaredType/RedeclaredType.html|
ok
```




## ModuleNameMismatch {#ModuleNameMismatch-ModuleNameMismatch}

### Synopsis 
Module name and file name are different.



### Function 
       


### Description 
A Rascal module has a name (the name that follows the `module` keyword) and it is stored in a file.
The (enforced) convention is that the name of the module (say `MyModule`) and the name of the file should be the same
(except fo the Rascal extension `.rsc`). Module `MyModule` should be stored in the file `MyModule.rsc`.
This error signals that this convention is violated.

Remedies:

*  Rename the module.
*  Rename the file.





## UndeclaredFunction {#UndeclaredFunction-UndeclaredFunction}

### Synopsis 
A function is called that has not been declared.



### Function 
       


### Description 
All functions, constructors and variables have to be declared before they can be used.
This error is generated when this rule is violated.

Remedies for functions:

*  Declare the function.
*  Declare the function as constructor of an (existing or new) [Rascal:AlgebraicDataType].
*  Import a module that declares the function (Did you import all necessary library modules?)

Remedies for variables:

*  Declare the variable.

### Examples 
Calling the undeclared function `triple` gives an error:

```rascal-shell
rascal>triple(5)
|prompt:///|(0,6,<1,0>,<1,6>): Undeclared variable: triple
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredVariable/UndeclaredVariable.html|
ok
```
We can remedy this by declaring the function:

```rascal-shell
rascal>int triple(int n) = 3 * n;
int (int): function(|prompt:///|(0,26,<1,0>,<1,26>))
rascal>triple(5)
int: 15
```

Calling the library function `size` gives an error if the proper library (in this case: `List`) is not imported

```rascal-shell
rascal>size([20, 1, 77]);
|prompt:///|(0,4,<1,0>,<1,4>): Undeclared variable: size
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredVariable/UndeclaredVariable.html|
ok
```
The solution is:

```rascal-shell
rascal>import List;
ok
rascal>size([20, 1, 77]);
int: 3
```
Another solution is to import the complete Rascal library at once:

```rascal-shell
rascal>import Prelude;
ok
rascal>size([20, 1, 77]);
int: 3
```

Using an undeclared variable gives an error:

```rascal-shell
rascal>n + 1;
|prompt:///|(0,1,<1,0>,<1,1>): Undeclared variable: n
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredVariable/UndeclaredVariable.html|
ok
```
A variable is introduced by just assigning to it (with or without its expected type):

```rascal-shell
rascal>n = 3;
int: 3
rascal>n + 1;
int: 4
```
Or equivalenty (with an expected type):

```rascal-shell
rascal>int n = 3;
int: 3
rascal>n + 1;
int: 4
```




## UndeclaredModule {#UndeclaredModule-UndeclaredModule}

### Synopsis 
Reference to a non-existing module.



### Function 
       


### Description 
This can, for example, occur in a qualified name.

Remedies:

*  Check that the offending module name is spelled correctly.
*  Create a module of that name.

### Examples 
Referring to the non-existing module `M` gives errors:

```rascal-shell
rascal>M::x = 3;
|prompt:///|(0,4,<1,0>,<1,4>): Undeclared module: M
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredModule/UndeclaredModule.html|
ok
rascal>M::f(3);
|prompt:///|(0,4,<1,0>,<1,4>): Undeclared module: M
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredModule/UndeclaredModule.html|
ok
```




## UndeclaredNonTerminal {#UndeclaredNonTerminal-UndeclaredNonTerminal}

### Synopsis 
A syntax rule uses an undeclared non-terminal.



### Function 
       


### Description 
All non-terminals that occur in a [syntax definition]_broken:Rascal:Declarations-SyntaxDefinition (ambiguous link)_
should be declared in some rule.
This error is generated when this is not the case.

Remedy: declare the offending non-terminal.

### Examples 

Here is an example where the non-terminal `Y` is not declared:

```rascal-shell
rascal>import ParseTree;
ok
rascal>syntax X = "a" Y;
ok
rascal>parse(#X, "ab");
|std:///ParseTree.rsc|(18855,5,<485,140>,<485,145>): Undeclared non-terminal: Y in module $GENERATED_PARSER$37351774
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredNonTerminal/UndeclaredNonTerminal.html|
ok
```


### Pitfalls 
The source location of the non-terminal is not yet available, so the error message mentions the module in which this occurs.


## MissingModifier {#MissingModifier-MissingModifier}

### Synopsis 
A modifier is missing in a declaration.



### Function 
       


### Description 

Rascal functions can be implemented in Java. This is the case for many functions in the standard library.
This requires these elements:

*  An abstract Rascal function declaration (= a function header without a body).
*  The keyword `java` should be part of the function header.
*  The function declaration is annotated (uing `javaClass`) with the name of the Java class that implements this function.


This error is generated when the `java` keyword is missing.

Remedy: Contact the Rascal developers:

*  Ask a question on StackOverflow using the http://stackoverflow.com/questions/tagged/rascal[Rascal Stackoverflow Tag].
*  Read the currently open issues at the Rascal's https://github.com/usethesource/rascal/issues?state=open[Issue Tracker on Github]. If your problem has not yet been reported by someone else, please report it here.


If you are an expert developer and have implemented your own extension in Java, please check your own extension code first.


### Examples 
This is how the `size` function on lists is declared in the Rascal library:

```rascal-shell
rascal>@javaClass{org.rascalmpl.library.Prelude}
>>>>>>>public java int size(list[&T] lst);
int (list[&T]): function(|prompt:///|(0,77,<1,0>,<2,35>))
```

This is what happens if the `java` keyword is missing:

```rascal-shell
rascal>@javaClass{org.rascalmpl.library.Prelude}
>>>>>>>public int size(list[&T] lst);
|prompt:///|(0,72,<1,0>,<2,30>): Missing modifier: java
Advice: |http://tutor.rascal-mpl.org/Errors/Static/MissingModifier/MissingModifier.html|
ok
```




## UndeclaredKeywordParameter {#UndeclaredKeywordParameter-UndeclaredKeywordParameter}

### Synopsis 
A function is called with a keyword parameter that was not declared in the function's declaration.



### Function 
       


### Description 
Rascal functions may have keyword parameters. This error is generated when a function call uses an undeclared keyword parameter.

Remedies:

*  Rename the keyword parameter in the call.
*  Add a new keyword parameter to the function.

### Examples 

```rascal-shell
rascal>int incr(int n, int delta=1) = n + delta;
int (int, int delta = ...): function(|prompt:///|(0,41,<1,0>,<1,41>))
```
Calling `incr` with a wrong keyword parameter gives an error:

```rascal-shell
rascal>incr(3, diff=5);
int: 4
```
This can be fixed by using the correct name for the keyword parameter:

```rascal-shell
rascal>incr(3, delta=5);
int: 8
```




## UndeclaredField {#UndeclaredField-UndeclaredField}

### Synopsis 
A field name is used that has not been declared.



### Function 
       


### Description 
Fields of [tuple](/Rascal.md#Expressions-Values-Tuple) (hence also of [relation](/Rascal.md#Expressions-Values-Relation)
 and [listrelation](/Rascal.md#Expressions-Values-ListRelation))
and constructors of [algebraic data types]_broken:Rascal:Declarations-AlgebraicDataType (ambiguous link)_ may have names.
This error is generated when a reference is made to an undeclared field.

Remedies:

*  Fix the field name in the reference.
*  Declare a new field as used in the reference.

### Examples 
Use of the undeclared field `gender`:

```rascal-shell
rascal>tuple[str name, int age] Jo = <"Jo", 33>;
tuple[str name,int age]: <"Jo",33>
rascal>Jo.gender;
|prompt:///|(0,2,<1,0>,<1,2>): Undeclared field: gender for tuple[str name,int age]
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredField/UndeclaredField.html|
ok
```
A similar example now expressed as ADT:

```rascal-shell
rascal>data Person = person(str name, int age);
ok
rascal>jo = person("Jo", 33);
Person: person("Jo",33)
rascal>jo.gender;
|prompt:///|(0,2,<1,0>,<1,2>): Undeclared field: gender for Person
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredField/UndeclaredField.html|
ok
```




## RedeclaredVariable {#RedeclaredVariable-RedeclaredVariable}

### Synopsis 
A variable with the same name has been declared in the same scope.



### Function 
       


### Description 
Remedy: rename one of the variables.

### Examples 

```rascal-shell
rascal>int n = 3;
int: 3
rascal>int n = 4;
|prompt:///|(4,5,<1,4>,<1,9>): Redeclared variable: n
Advice: |http://tutor.rascal-mpl.org/Errors/Static/RedeclaredVariable/RedeclaredVariable.html|
ok
```




## ArgumentMismatch {#ArgumentMismatch-ArgumentMismatch}

### Synopsis 
The called signature does not match any defined function.



### Function 
       


### Description 

A function has a name and a signature (the names and types of its arguments). 
This error is reported when a call of a function cannot be associated with a function declaration.

Remedies:

*  Modify the call so that the arguments match the function declaration.
*  Write a new definition for a function with the same name, that matches the argument types in the call.

### Examples 
Define a function `triple` that multiplies its argument by 3:

```rascal-shell
rascal>int triple(int x) = 3 * x;
int (int): function(|prompt:///|(0,26,<1,0>,<1,26>))
```
It works fine:

```rascal-shell
rascal>triple(5)
int: 15
```
Unless it is called with an argument of a wrong type:

```rascal-shell
rascal>triple([1,2,3])
|prompt:///|(12,1,<1,12>,<1,13>): CallFailed([[1,2,3]])
	at $shell$(|prompt:///|(0,9,<1,0>,<1,9>))
ok
```
We can define a new version of `triple` function that accepts lists:

```rascal-shell
rascal>list[int] triple(list[int] L) = [3 * x | x <- L];
list[int] (list[int]): function(|prompt:///|(0,49,<1,0>,<1,49>))
rascal>triple([1,2,3]);
list[int]: [3,6,9]
```




## UnguardedReturn {#UnguardedReturn-UnguardedReturn}

### Synopsis 
A return statement occurs outside a function body.



### Function 
       


### Description 
A [return]_broken:Rascal:Statements-Return (ambiguous link)_ statement is used to return a value from a function.
It is an error to use it outside a function body.

### Examples 

```rascal-shell
rascal>int triple(int n) { return 3 * n; }
int (int): function(|prompt:///|(0,35,<1,0>,<1,35>))
rascal>triple(5);
int: 15
```
Using return outside a function body gives an error:

```rascal-shell
rascal>return 3;
|prompt:///|(0,9,<1,0>,<1,9>): Return statement outside of function scope
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnguardedReturn/UnguardedReturn.html|
ok
```



## RedeclaredField {#RedeclaredField-RedeclaredField}

### Synopsis 
A field name is redeclared.



### Function 
       


### Description 
The definition of an [algebraic data type]_Rascal:Declarations-AlgebraicDatatype (broken link)_ consists of a number of constructor functions.
Each constructor has named fields but the same field name may only be used in different constructors
if it has the same type in all occurrences in the declaration.

Remedy: rename one of the fields in the declaration.

### Examples 
This is correct since all occurrences of `key` have type `int`:

```rascal-shell
rascal>data D = d1(int key) | d2(str name, int key);
ok
```
This is incorrect since `key` is used as `int` and as `str`.

```rascal-shell
rascal>data D = d1(int key) | d2(str key);
|prompt:///|(23,11,<1,23>,<1,34>): The field name key is illegally used for both str and int in type D
Advice: |http://tutor.rascal-mpl.org/Errors/Static/RedeclaredField/RedeclaredField.html|
ok
```
This can be corrected by choosing other names for the labels:

```rascal-shell
rascal>data D = d1(int intKey) | d2(str strKey);
ok
```

A tuple declaration with a duplicate field name also gives an error:

```rascal-shell
rascal>tuple[int x, str x] Q = <3,"abc">;
|prompt:///|(13,5,<1,13>,<1,18>): x
Advice: |http://tutor.rascal-mpl.org/Errors/Static/RedeclaredField/RedeclaredField.html|
ok
```




## UninitializedPatternMatch {#UninitializedPatternMatch-UninitializedPatternMatch}

### Synopsis 
Pattern matching has not been properly initialized.



### Function 
       


### Description 
[Pattern matching]_Rascal:Concepts-PatternMatching (broken link)_ requires two ingredients:

*  One of the many [patterns](/Rascal.md#Patterns-Patterns).
*  A non-void subject value to which the pattern is applied.

This error is generated when the subject is void.

Remedy: replace the subject by a non-void value.

### Examples 
here is a (contrived) example that produces this error:

```rascal-shell
rascal>void dummy() { return; }
void (): function(|prompt:///|(0,24,<1,0>,<1,24>))
rascal>int n := dummy();
|prompt:///|(9,5,<1,9>,<1,14>): Uninitialized pattern match: trying to match a value of the type 'void'
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UninitializedPatternMatch/UninitializedPatternMatch.html|
ok
```




## UndeclaredVariable {#UndeclaredVariable-UndeclaredVariable}

### Synopsis 
Use of a variable that has not been declared.



### Function 
       


### Description 
A variable can only be used when it has been declared and initialized.
This error is generated when this is not the case.

Remedy:

*  Rename the offending variable name into the name of an existing variable.
*  Introduce a new variable.

### Examples 
Here is an example where an undeclared variables occurs in list splicing:

```rascal-shell
rascal>[1, *x, 3]
|prompt:///|(5,1,<1,5>,<1,6>): Undeclared variable: x
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredVariable/UndeclaredVariable.html|
ok
```
The remedy is here:

```rascal-shell
rascal>x = 5;
int: 5
rascal>[1, *x, 3]
list[int]: [1,5,3]
```




## SyntaxError {#SyntaxError-SyntaxError}

### Synopsis 
Text in a module or entered via the command line violates the Rascal syntax.



### Function 
       


### Description 
This error is generated when a text is expected to be Rascal but does not comply with the Rascal syntax.

Remedy: Correct your text and check for the following:

*  All parentheses are balanced: `(...)`, `[...]`, `{...}`, `<...>`, `/.../`.
*  All multi-line comments are balanced: `/*...*/`.
*  All semi-colons are present.
*  All tests in `if`, `for`, `while` statement are surrounded by `(...)`.


When you are completely desparate and cannot find the syntax error, the following _binary search_ strategy may help:

*  Surround all text in the module (except the module header) with `/*` and `*/`. Now your module should parse. If not the syntax error is in the module header.
*  Move the upper comment symbol `/*` to the middle of the file. Now there are two possibilities:
   ** The module parses. The top part is correct and the syntax error is in the bottom part. 
      Move the `/*` marker to the middle of the bottom part and repeat.
   ** The module does not parse. The syntax error is in the top part.
      Move the `/*` marker to the middle of the top part and repeat.





## PartiallyLabeledFields {#PartiallyLabeledFields-PartiallyLabeledFields}

### Synopsis 
In a tuple or relation all fields should have names or none at all.



### Function 
       


### Description 
The fields in tuples and relations can optionally be labelled with a name.
There are only two legal situations:

*  All fields have a label.
*  No field has a label.


This error signals the case that thei fields are partially labelled.


### Examples 

```rascal-shell
rascal>tuple[int n, str] T;
|prompt:///|(6,5,<1,6>,<1,11>): either all fields must be labeled, or none.
Advice: |http://tutor.rascal-mpl.org/Errors/Static/PartiallyLabeledFields/PartiallyLabeledFields.html|
ok
rascal>rel[str name, int] R;
|prompt:///|(4,8,<1,4>,<1,12>): either all fields must be labeled, or none.
Advice: |http://tutor.rascal-mpl.org/Errors/Static/PartiallyLabeledFields/PartiallyLabeledFields.html|
ok
```



## UnguardedAppend {#UnguardedAppend-UnguardedAppend}

### Synopsis 
Append statement occurs outside a for/while statement.



### Function 
       


### Description 
The [append]_broken:Rascal:Statements-Append (ambiguous link)_ statement can be used inside a loop statement.
This error is generated when append occurs outside a loop.

Remedy: use List concatenation to append an element to a list outside a loop.

### Examples 
This is the typical use of `append`:

```rascal-shell
rascal>for(int i <- [1..5]) append i*i;
list[int]: [1,4,9,16]
```
Using append outside a loop gives an error:

```rascal-shell
rascal>append 3;
|prompt:///|(0,9,<1,0>,<1,9>): append statement without enclosing loop
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnguardedAppend/UnguardedAppend.html|
ok
```





