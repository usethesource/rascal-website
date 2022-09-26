---
title: Location GreaterThan
keywords:
  - ">"

---

#### Synopsis

The greater than operator on location values.

#### Syntax

`Exp₁ > Exp₂`

#### Types


| `Exp₁` | `Exp₂` | `Exp₁ > Exp₂`  |
| --- | --- | --- |
| `loc`     |  `loc`    | `bool`                |


#### Description

Yields `true` if the location value of _Exp_₁ strictly textually encloses
the location value of _Exp_₂, and `false` otherwise.


