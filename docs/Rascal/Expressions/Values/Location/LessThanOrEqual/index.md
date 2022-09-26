---
title: Location LessThanOrEqual
keywords:
  - "<="

---

#### Synopsis

The less than or equal operator on location values.

#### Syntax

`Exp₁ <= Exp₂`

#### Types


| `Exp₁` | `Exp₂` | `Exp₁ <= Exp₂`  |
| --- | --- | --- |
| `loc`     |  `loc`    | `bool`                |


#### Description

Yields `true` if the location value of _Exp_₁ is textually contained
in the location value of _Exp_₂, and `false` otherwise.


