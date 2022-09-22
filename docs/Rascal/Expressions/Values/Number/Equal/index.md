---
title: Number Equal
keywords:
  - "=="

---

#### Synopsis

Equality operator on numeric values.

#### Syntax

`Exp<sub>1</sub> == Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>`  |  `Exp<sub>2</sub>` | `Exp<sub>1</sub> == Exp<sub>2</sub>`   |
| --- | --- | --- |
| `int`      |  `int`     | `bool`                 |
| `int`      |  `real`    | `bool`                 |
| `real`     |  `real`    | `bool`                 |


#### Description

Yields `true` if the value of both arguments is numerically equal, and `false` otherwise.

#### Examples


```rascal-shell
rascal>12 == 12
bool: true
rascal>12 == 12.0
bool: true
rascal>12 == 13
bool: false
rascal>12 == 13.0
bool: false
rascal>3.14 == 3.14
bool: true
rascal>3.14 == 3
bool: false
```


