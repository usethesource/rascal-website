---
title: Set Intersection
keywords:
  - "&"
---

#### Synopsis

Intersection of two sets.

#### Syntax

`Exp<sub>1</sub> & Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>`    |  `Exp<sub>2</sub>`      | `Exp<sub>1</sub> & Exp<sub>2</sub>`      |
| --- | --- | --- |
| `set[T<sub>1</sub>]` |  `set[T<sub>2</sub>]`   | `set[lub(T<sub>1</sub>,T<sub>2</sub>)]`  |


#### Function

#### Description

Returns the intersection of the two set values of _Exp_<sub>1</sub> and _Exp_<sub>2</sub>.
The intersection consists of the common elements of both sets.

#### Examples


```rascal-shell
rascal>{1, 2, 3, 4, 5} & {4, 5, 6};
set[int]: {5,4}
```

#### Benefits


