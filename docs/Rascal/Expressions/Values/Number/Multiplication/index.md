---
title: Number Multiplication
keywords:
  - "*"

---

#### Synopsis

Multiply two numeric values.

#### Syntax

`Exp₁ * Exp₂`

#### Types


| `Exp₁` |  `Exp₂` | `Exp₁ * Exp₂`  |
| --- | --- | --- |
| `int`     |  `int`     | `int`                |
| `int`     |  `real`    | `real`               |
| `real`    |  `real`    | `real`               |


#### Description

Yields the result of multiplying the values of _Exp₁_ and _Exp₂_.

#### Examples


```rascal-shell 
rascal>12 * 13
int: 156
rascal>12 * 13.5
real: 162.0
rascal>-12*13
int: -156
```


