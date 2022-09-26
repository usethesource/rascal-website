---
title: List Intersection
keywords:
  - "&"

---

#### Synopsis

Intersection of two lists.

#### Syntax

`Exp₁ & Exp₂`

#### Types

//

| `Exp₁`     |  `Exp₂`      | `Exp₁ & Exp₂`       |
| --- | --- | --- |
| `list[T₁]` |  `list[T₂]`  | `list[lub(T₁,T₂)]`  |


#### Description

Returns the intersection of the two list values of  _Exp_₁ and _Exp_₂, i.e.,
the list value of _Exp_₁ with all elements removed that do not occur in the list value of _Exp_₂.

#### Examples


```rascal-shell 
rascal>[1, 2, 3, 4, 5] & [4, 5, 6];
list[int]: [4,5]
```


