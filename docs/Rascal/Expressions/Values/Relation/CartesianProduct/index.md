---
title: Relation CartesianProduct
keywords:
  - "*"

---

#### Synopsis

Cartesian product of two relation values.

#### Syntax

`Exp<sub>1</sub> * Exp<sub>2</sub>`

#### Types


|`Exp<sub>1</sub>`      | `Exp<sub>2</sub>`     | `Exp<sub>1</sub> * Exp<sub>2</sub>`   |
| --- | --- | --- |
| `set[T<sub>1</sub>]`  | `set[T<sub>2</sub>]`  | `rel[T<sub>1</sub>, T<sub>2</sub>]`   |


#### Function

#### Description

Returns a binary relation that is the [Cartesian product](http://en.wikipedia.org/wiki/Cartesian_product) of two sets.

#### Examples


```rascal-shell
rascal>{1, 2, 3} * {9};
rel[int,int]: {
  <1,9>,
  <3,9>,
  <2,9>
}
rascal>{1, 2, 3} * {10, 11};
rel[int,int]: {
  <1,10>,
  <1,11>,
  <3,10>,
  <3,11>,
  <2,10>,
  <2,11>
}
```

#### Benefits


