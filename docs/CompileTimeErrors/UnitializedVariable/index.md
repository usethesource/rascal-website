---
title: UnitializedVariable
---

#### Synopsis

Use of a variable that has not been initialized.

#### Syntax

#### Types

#### Function
       
#### Usage

#### Description

A [variable](/Rascal/Declarations/Variable) has to be initialized before it can be used.
This error is generated when an uninitialzed variable is used.

Remedy: assign a value to the variable before its use:

#### Examples

Using the uninitialized variable `x` gives an error:

```rascal-shell
rascal>x + 5;
ok
```
This can be avoided by first initializing `x`:

```rascal-shell
rascal>x = 3;
int: 3
rascal>x + 5;
int: 8
```

#### Benefits


