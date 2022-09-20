---
title: Number LessThanOrEqual
keywords:
  - "<="

---

#### Synopsis

Less than or equal operator on numeric values.

#### Syntax

`Exp<sub>1</sub> <= Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>` |  `Exp<sub>2</sub>` | `Exp<sub>1</sub> <= Exp<sub>2</sub>`  |
| --- | --- | --- |
| `int`     |  `int`     | `bool`                |
| `int`     |  `real`    | `bool`                |
| `real`    |  `real`    | `bool`                |


#### Function

#### Description

Yields `true` if the value of Exp<sub>1</sub> is numerically less than or equal to the value of Exp<sub>2</sub>, and `false` otherwise.

#### Examples


```rascal-shell
rascal>13 <= 12
bool: false
rascal>12 <= 13
bool: true
rascal>13.5 <= 12
bool: false
rascal>12.5 <= 13
bool: true
```

#### Benefits


