---
title: Set Intersection
keywords:
  - "&"
---

#### Synopsis

Intersection of two sets.

#### Syntax

`Exp₁ & Exp₂`

#### Types


| `Exp₁`    |  `Exp₂`      | `Exp₁ & Exp₂`      |
| --- | --- | --- |
| `set[T₁]` |  `set[T₂]`   | `set[lub(T₁,T₂)]`  |


#### Description

Returns the intersection of the two set values of _Exp_₁ and _Exp_₂.
The intersection consists of the common elements of both sets.

#### Examples


```rascal-shell 
rascal>{1, 2, 3, 4, 5} & {4, 5, 6};
set[int]: {5,4}
```


