---
title: Number Addition
keywords:
  - "+"

---

#### Synopsis

Addition on numeric values.

#### Syntax

`Exp₁ + Exp₂`

#### Types


| `Exp₁`  |  `Exp₂` | `Exp₁ + Exp₂`  |
| --- | --- | --- |
| `int`      |  `int`     | `int`                 |
| `int`      |  `real`    | `real`                |
| `real`     |  `real`    | `real`                |


#### Description

Yields the numerical sum of the values of _Exp_₁ and _Exp_₂.

#### Examples


```rascal-shell 
rascal>12 + 13
int: 25
rascal>12 + 13.5
real: 25.5
```


