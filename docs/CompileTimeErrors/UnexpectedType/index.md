---
title: UnexpectedType
---

#### Synopsis

A value of a different type was expected.

#### Description

This error signals an incompatibility between expected type and actual type.
Some of the situations in which this may occur are
[assert](../../Rascal/Statements/Assert), [variable](../../Rascal/Declarations/Variable),
[solve](../../Rascal/Statements/Solve).

Remedy: adjust the actual type to the expected type.

#### Examples

Declaring variable `n` as `int` and assigning it a `str` value gives an error:

```rascal-shell
rascal>int n = "abc";
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
ok
```


