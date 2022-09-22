---
title: List Intersection
keywords:
  - "&"

---

#### Synopsis

Intersection of two lists.

#### Syntax

`Exp<sub>1</sub> & Exp<sub>2</sub>`

#### Types

//

| `Exp<sub>1</sub>`     |  `Exp<sub>2</sub>`      | `Exp<sub>1</sub> & Exp<sub>2</sub>`       |
| --- | --- | --- |
| `list[T<sub>1</sub>]` |  `list[T<sub>2</sub>]`  | `list[lub(T<sub>1</sub>,T<sub>2</sub>)]`  |


#### Description

Returns the intersection of the two list values of  _Exp_<sub>1</sub> and _Exp_<sub>2</sub>, i.e.,
the list value of _Exp_<sub>1</sub> with all elements removed that do not occur in the list value of _Exp_<sub>2</sub>.

#### Examples


```rascal-shell
rascal>[1, 2, 3, 4, 5] & [4, 5, 6];
list[int]: [4,5]
```


