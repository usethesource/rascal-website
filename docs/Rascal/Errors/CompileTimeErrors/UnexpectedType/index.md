---
title: UnexpectedType
---

#### Synopsis

A value of a different type was expected.

#### Description

This error signals an incompatibility between expected type and actual type.
Some of the situations in which this may occur are
[assert](../../../../Rascal/Statements/Assert/index.md), [variable](../../../../Rascal/Declarations/Variable/index.md),
[solve](../../../../Rascal/Statements/Solve/index.md).

Remedy: adjust the actual type to the expected type.

#### Examples

Declaring variable `n` as `int` and assigning it a `str` value gives an error:

```rascal-shell ,error
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

```rascal-shell ,error
rascal>assert 3;
|prompt:///|(0,9,<1,0>,<1,9>): Expected bool, but got int
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnexpectedType/UnexpectedType.html|
ok
```


