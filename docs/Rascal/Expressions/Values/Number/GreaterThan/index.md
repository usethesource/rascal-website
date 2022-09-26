---
title: Number GreaterThan
keywords:
  - ">"

---

#### Synopsis

Greater than operator on numeric values.

#### Syntax

`Exp₁ > Exp₂`

#### Types


| `Exp₁`  |  `Exp₂` | `Exp₁ > Exp₂`   |
| --- | --- | --- |
| `int`      |  `int`     | `bool`                |
| `int`      |  `real`    | `bool`                |
| `real`     |  `real`    | `bool`                |


#### Description

Yields `true` if the value of Exp₁ is numerically greater than the value of Exp₂, and `false` otherwise.

#### Examples


```rascal-shell 
rascal>13 > 12
bool: true
rascal>12 > 13
bool: false
rascal>13.5 > 12
bool: true
rascal>12.5 > 13
bool: false
```


