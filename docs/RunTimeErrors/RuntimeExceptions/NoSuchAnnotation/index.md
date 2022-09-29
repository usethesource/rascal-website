---
title: No Such Annotation
---

#### Synopsis

Annotation without a value.

#### Types

`data RuntimeException = NoSuchAnnotation(str label);`
       
#### Usage

`import Exception;` (only needed when `NoSuchAnnotation` is used in `catch`)


#### Description

An [annotation](../../../Rascal/Declarations/Annotation/index.md) can be associated with any node value
(including any [algebraic data type](../../../Rascal/Declarations/AlgebraicDataType/index.md)).
This error is generated when the value of an annotation is requested but has not been defined.

Remedies:

*  Ensure that the annotation value is properly initialized for all relevant parts of the node value. 
*  Use the 
   [isDefined](../../../Rascal/Expressions/Values/Boolean/IsDefined/index.md) and 
   [ifDefinedElse](../../../Rascal/Expressions/Values/Boolean/IfDefinedElse/index.md) operators to check whether the annotation value 
   is set and act accordingly.
*  Catch the `NoSuchAnnotation yourself`, see [try catch](../../../Rascal/Statements/TryCatch/index.md).

#### Examples

INFO: Eliminate the double [red]##Error: Error:##


```rascal-shell ,error
rascal>data Fruit = apple(int n) | orange(int n);
ok
rascal>anno str Fruit @ quality;
ok
rascal>piece = orange(13);
Fruit: orange(13)
rascal>piece@quality;
|prompt:///|(0,5,<1,0>,<1,5>): NoSuchAnnotation("quality")
	at $shell$(|prompt:///|(0,14,<1,0>,<1,14>))
ok
```
Use the unary postfix operator isDefined `?` to check whether the `quality` annotation is set:

```rascal-shell ,continue,error
rascal>piece@quality?;
bool: false
```
Use the ternary operator ifDefinedElse `?` to compute an alternative value when the `quality` annotation is not set:

```rascal-shell ,continue,error
rascal>piece@quality ? "no quality value";
str: "no quality value"
```
We can also catch the `NoSuchAnnotation` error. First import the Rascal exceptions (which are also included in `Prelude`)
and `IO`:

```rascal-shell ,continue,error
rascal>import Exception;
ok
rascal>import IO;
ok
rascal>try piece@quality; catch NoSuchAnnotation(l): println("No such annotation: <l>");
No such annotation: quality
ok
```
Finally, we can just assign a value to the `quality` annotation:

```rascal-shell ,continue,error
rascal>piece@quality = "excellent";
Fruit: orange(13,quality="excellent")
rascal>piece@quality;
str: "excellent"
```

#### Pitfalls

WARNING: Using white space around the `@` confuses the Rascal parser

