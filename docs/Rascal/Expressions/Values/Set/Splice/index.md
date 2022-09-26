---
title: Set Splice
keywords:
  - "*"
---

#### Synopsis

Splice the elements of a set in an enclosing set.

#### Types


|`Exp` | `Exp₁`|  `Expₙ` | `{Exp₁, ..., Exp, ..., Expₙ}`  |
| --- | --- | --- | --- |
|`T`   | `T₁`  |  `Tₙ`   | `set[lub(T₁, ..., T, ...,Tₙ)]`     |


#### Description

The operator `*` splices the elements of a set in an enclosing set.

#### Examples

Consider the following set in which the set `{10, 20, 30}` occurs as set element. It has as type `set[value]`:

```rascal-shell ,continue
rascal>{1, 2, {10, 20, 30}, 3, 4};
set[value]: {3,2,4,1,{10,20,30}}
```
The effect of splicing the same set element in the enclosing set gives a flat list of type `set[int]`:

```rascal-shell ,continue
rascal>{1, 2, *{10, 20, 30}, 3, 4};
set[int]: {10,1,3,20,2,4,30}
```
The same example can be written as:

```rascal-shell ,continue
rascal>S = {10, 20, 30};
set[int]: {10,20,30}
rascal>{1, 2, *S, 3, 4};
set[int]: {10,1,3,20,2,4,30}
```


