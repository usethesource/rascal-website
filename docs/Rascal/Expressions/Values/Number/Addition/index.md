---
title: Number Addition
keywords:
  - "+"

---

#### Synopsis

Addition on numeric values.

#### Syntax

`Exp<sub>1</sub> + Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>`  |  `Exp<sub>2</sub>` | `Exp<sub>1</sub> + Exp<sub>2</sub>`  |
| --- | --- | --- |
| `int`      |  `int`     | `int`                 |
| `int`      |  `real`    | `real`                |
| `real`     |  `real`    | `real`                |


#### Description

Yields the numerical sum of the values of _Exp_<sub>1</sub> and _Exp_<sub>2</sub>.

#### Examples


```rascal-shell
rascal>12 + 13
int: 25
rascal>12 + 13.5
real: 25.5
```


