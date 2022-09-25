---
title: Number Multiplication
keywords:
  - "*"

---

#### Synopsis

Multiply two numeric values.

#### Syntax

`Exp~1~ * Exp~2~`

#### Types


| `Exp~1~` |  `Exp~2~` | `Exp~1~ * Exp~2~`  |
| --- | --- | --- |
| `int`     |  `int`     | `int`                |
| `int`     |  `real`    | `real`               |
| `real`    |  `real`    | `real`               |


#### Description

Yields the result of multiplying the values of _Exp~1~_ and _Exp~2~_.

#### Examples


```rascal-shell 
rascal>12 * 13
int: 156
rascal>12 * 13.5
real: 162.0
rascal>-12*13
int: -156
```


