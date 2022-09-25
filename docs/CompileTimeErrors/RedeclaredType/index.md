---
title: RedeclaredType
---

#### Synopsis

A type with the same name has been declared before.

#### Description

Some declarations introduce new type names. Most important are an 
[algebraic data type](../../Rascal/Declarations/AlgebraicDataType/index.md) and [alias](../../Rascal/Declarations/Alias/index.md).
This error signals that the same type name is used for incompatible purposes.

Remedy: rename one of the type names.

#### Examples


```rascal-shell ,error
rascal>data D = d(int x);
ok
rascal>alias D = str;
|prompt:///|(0,14,<1,0>,<1,14>): Illegal re-declaration of type: D
Advice: |http://tutor.rascal-mpl.org/Errors/Static/RedeclaredType/RedeclaredType.html|
ok
```


```rascal-shell ,error
rascal>alias D = int;
ok
rascal>alias D = str;
|prompt:///|(0,14,<1,0>,<1,14>): Illegal re-declaration of type: D
Advice: |http://tutor.rascal-mpl.org/Errors/Static/RedeclaredType/RedeclaredType.html|
ok
```


