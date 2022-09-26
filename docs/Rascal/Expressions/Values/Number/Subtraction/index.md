---
title: Number Subtraction
keywords:
  - "-"
---

#### Synopsis

Subtract two numeric values.

#### Syntax

`Exp₁ - Exp₂`

#### Types


| `Exp₁` |  `Exp₂` | `Exp₁ - Exp₂`  |
| --- | --- | --- |
| `int`     |  `int`     | `int`                |
| `int`     |  `real`    | `real`               |
| `real`    |  `real`    | `real`               |


#### Description

Yields the numerical result of subtracting the value of _Exp_₂ from the value of _Exp_₁.

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


