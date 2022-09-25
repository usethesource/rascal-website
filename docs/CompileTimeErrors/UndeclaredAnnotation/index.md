---
title: UndeclaredAnnotation
---

#### Synopsis

An annotation is used that has not been declared.

#### Description

An [annotation](../../Rascal/Declarations/Annotation/) can be used to add information to an instance of an
[algebraic data type](../../Rascal/Declarations/AlgebraicDataType/).
An annotation has to declared beforehand. This error is generated when an undeclared annotation is used.

Remedies:

*  Declare the annotation.
*  Use an already declared annotation.

#### Examples

This is correct:

```rascal-shell ,error
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

```rascal-shell ,continue,error
rascal>piece @ qual;
```


