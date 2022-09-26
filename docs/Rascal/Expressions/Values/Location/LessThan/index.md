---
title: Location LessThan
keywords:
  - "<"

---

#### Synopsis

The less than operator on location values.

#### Syntax

`Exp₁ < Exp₂`

#### Types


| `Exp₁` | `Exp₂` | `Exp₁ < Exp₂`  |
| --- | --- | --- |
| `loc`     |  `loc`    | `bool`                |


#### Description

Yields `true` if the location value of _Exp_₁ is strictly textually contained
in the location value of _Exp_₂, and `false` otherwise.


