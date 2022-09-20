---
title: Set in
keywords:
  - in

---

#### Synopsis

Membership test on set values.

#### Syntax

`Exp<sub>1</sub> in Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>`           |  `Exp<sub>2</sub>`     | `Exp<sub>1</sub> in Exp<sub>2</sub>`  |
| --- | --- | --- |
| `T<sub>1</sub>`  <: `T<sub>2</sub>` |  `set[T<sub>2</sub>]`  | `bool`                |


#### Function

#### Description

Yields `true` if the value of Exp<sub>1</sub> occurs as element in the value of Exp<sub>2</sub> and `false` otherwise. The type of _Exp_<sub>1</sub> should be compatible with the element type of _Exp_<sub>2</sub>.

#### Examples


```rascal-shell
rascal>2 in {1, 2, 3};
bool: true
rascal>4 in {1, 2, 3};
bool: false
```

#### Benefits


