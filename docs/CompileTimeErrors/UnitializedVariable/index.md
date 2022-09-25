---
title: UnitializedVariable
---

#### Synopsis

Use of a variable that has not been initialized.

#### Description

A [variable](../../Rascal/Declarations/Variable/index.md) has to be initialized before it can be used.
This error is generated when an uninitialzed variable is used.

Remedy: assign a value to the variable before its use:

#### Examples

Using the uninitialized variable `x` gives an error:


```rascal-shell ,error
rascal>x
|prompt:///|(0,1,<1,0>,<1,1>): Undeclared variable: x
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredVariable/UndeclaredVariable.html|
ok
```

This can be avoided by first initializing `x` by an [Assignment](../../Rascal/Statements/Assignment/index.md):

```rascal-shell 
rascal>x = 3;
int: 3
rascal>x + 5;
int: 8
```

Or it can be avoided by declaring `x` using a [Variable](../../Rascal/Declarations/Variable/index.md):

```rascal-shell 
rascal>int x = 3;
int: 3
rascal>x + 5;
int: 8
```



