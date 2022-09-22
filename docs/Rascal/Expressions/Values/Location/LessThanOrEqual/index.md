---
title: Location LessThanOrEqual
keywords:
  - "<="

---

#### Synopsis

The less than or equal operator on location values.

#### Syntax

`Exp<sub>1</sub> <= Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>` | `Exp<sub>2</sub>` | `Exp<sub>1</sub> <= Exp<sub>2</sub>`  |
| --- | --- | --- |
| `loc`     |  `loc`    | `bool`                |


#### Description

Yields `true` if the location value of _Exp_<sub>1</sub> is textually contained
in the location value of _Exp_<sub>2</sub>, and `false` otherwise.


