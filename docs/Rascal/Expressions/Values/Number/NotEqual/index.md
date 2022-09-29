---
title: Number NotEqual
keywords:
  - "!="

---

#### Synopsis

Not equal operator on numeric values.

#### Syntax

`Exp₁ != Exp₂`

#### Types

| `Exp₁`  |  `Exp₂` | `Exp₁ != Exp₂`   |
| --- | --- | --- |
| `int`      |  `int`     | `bool`                 |
| `int`      |  `real`    | `bool`                 |
| `real`     |  `real`    | `bool`                 |


#### Description

Yields `true` if the value of both arguments is numerically unequal, and `false` otherwise.

#### Examples


```rascal-shell 
rascal>12 != 13
bool: true
rascal>12 != 12
bool: false
rascal>12 != 13.0
bool: true
rascal>12.0 != 13
bool: true
rascal>3.14 != 3
bool: true
rascal>3.14 != 3.14
bool: false
```

