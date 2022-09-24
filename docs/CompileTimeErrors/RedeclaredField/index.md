---
title: RedeclaredField
---

#### Synopsis

A field name is redeclared.

#### Description

The definition of an [algebraic data type](../../Rascal/Declarations/AlgebraicDataType/) consists of a number of constructor functions.
Each constructor has named fields but the same field name may only be used in different constructors
if it has the same type in all occurrences in the declaration.

Remedy: rename one of the fields in the declaration.

#### Examples

This is correct since all occurrences of `key` have type `int`:

```rascal-shell 
rascal>data D = d1(int key) | d2(str name, int key);
ok
```
This is incorrect since `key` is used as `int` and as `str`.

```rascal-shell ,error
rascal>data D = d1(int key) | d2(str key);
ok
```
This can be corrected by choosing other names for the labels:

```rascal-shell 
rascal>data D = d1(int intKey) | d2(str strKey);
ok
```

A tuple declaration with a duplicate field name also gives an error:

```rascal-shell ,error
rascal>tuple[int x, str x] Q = <3,"abc">;
ok
```

