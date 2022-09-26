---
title: Number Conditional
keywords:
  - "?"
  - ":"

---

#### Synopsis

Conditional expression for numeric values.

#### Syntax

`Exp₁ ? Exp₂ : Exp₃`

#### Types


| `Exp₁`   | `Exp₂`  |  `Exp₃` | `Exp₁ ? Exp₂ : Exp₃`   |
| --- | --- | --- | --- |
|  `bool`     | `int`      |  `int`     | `int`                           |
|  `bool`     | `int`      |  `real`    | `real`                          |
|  `bool`     | `real`     |  `real`    | `real`                          |


#### Description

If the value of _Exp_ is `true` then the value of _Exp_₁ else the value of _Exp_₂.

#### Examples


```rascal-shell 
rascal>(3 > 2) ? 10 : 20
int: 10
rascal>(3 > 20) ? 10 : 20
int: 20
```


