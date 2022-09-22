---
title: Number Subtraction
keywords:
  - "-"
---

#### Synopsis

Subtract two numeric values.

#### Syntax

`Exp<sub>1</sub> - Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>` |  `Exp<sub>2</sub>` | `Exp<sub>1</sub> - Exp<sub>2</sub>`  |
| --- | --- | --- |
| `int`     |  `int`     | `int`                |
| `int`     |  `real`    | `real`               |
| `real`    |  `real`    | `real`               |


#### Description

Yields the numerical result of subtracting the value of _Exp_<sub>2</sub> from the value of _Exp_<sub>1</sub>.

#### Examples


```rascal-shell
rascal>13 - 12
int: 1
rascal>13.5 - 12
real: 1.5
rascal>12 - 13
int: -1
rascal>12 - 13.5
real: -1.5
```


