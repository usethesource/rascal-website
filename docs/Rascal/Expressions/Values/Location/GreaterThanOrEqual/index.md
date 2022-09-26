---
title: Location GreaterThanOrEqual
keywords:
  - ">="

---

#### Synopsis

The greater than or equal operator on location values.

#### Syntax

`Exp₁ >= Exp₂`

#### Types


| `Exp₁` | `Exp₂` | `Exp₁ >= Exp₂`  |
| --- | --- | --- |
| `loc`     |  `loc`    | `bool`                |


#### Description

Yields `true` if the location value of _Exp_₁ textually encloses
the location value of _Exp_₂, and `false` otherwise.


