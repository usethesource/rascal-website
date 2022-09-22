---
title: ListRelation CartesianProduct
keywords:
  - "*"

---

#### Synopsis

Cartesian product of two list relation values.

#### Syntax

`Exp<sub>1</sub> * Exp<sub>2</sub>`

#### Types


|`Exp<sub>1</sub>`      | `Exp<sub>2</sub>`     | `Exp<sub>1</sub> * Exp<sub>2</sub>`   |
| --- | --- | --- |
| `list[T<sub>1</sub>]` | `list[T<sub>2</sub>]` | `lrel[T<sub>1</sub>, T<sub>2</sub>]`  |


#### Description

Returns a binary relation that is the [Cartesian product](http://en.wikipedia.org/wiki/Cartesian_product) of two lists.

#### Examples


```rascal-shell
rascal>[1, 2, 3] * [9];
lrel[int,int]: [
  <1,9>,
  <2,9>,
  <3,9>
]
rascal>[1, 2, 3] * [10, 11];
lrel[int,int]: [
  <1,10>,
  <1,11>,
  <2,10>,
  <2,11>,
  <3,10>,
  <3,11>
]
```


