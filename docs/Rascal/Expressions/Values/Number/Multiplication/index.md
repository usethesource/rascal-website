---
title: Number Multiplication
keywords:
  - "*"

---

#### Synopsis

Multiply two numeric values.

#### Syntax

`Exp<sub>1</sub> * Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>` |  `Exp<sub>2</sub>` | `Exp<sub>1</sub> * Exp<sub>2</sub>`  |
| --- | --- | --- |
| `int`     |  `int`     | `int`                |
| `int`     |  `real`    | `real`               |
| `real`    |  `real`    | `real`               |


#### Description

Yields the result of multiplying the values of _Exp<sub>1</sub>_ and _Exp<sub>2</sub>_.

#### Examples


```rascal-shell
rascal>12 * 13
int: 156
rascal>12 * 13.5
real: 162.0
rascal>-12*13
int: -156
```


