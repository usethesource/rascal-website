---
title: Number Conditional
keywords:
  - "?"
  - ":"

---

#### Synopsis

Conditional expression for numeric values.

#### Syntax

`Exp<sub>1</sub> ? Exp<sub>2</sub> : Exp<sub>3</sub>`

#### Types


| `Exp<sub>1</sub>`   | `Exp<sub>2</sub>`  |  `Exp<sub>3</sub>` | `Exp<sub>1</sub> ? Exp<sub>2</sub> : Exp<sub>3</sub>`   |
| --- | --- | --- | --- |
|  `bool`     | `int`      |  `int`     | `int`                           |
|  `bool`     | `int`      |  `real`    | `real`                          |
|  `bool`     | `real`     |  `real`    | `real`                          |


#### Description

If the value of _Exp_ is `true` then the value of _Exp_<sub>1</sub> else the value of _Exp_<sub>2</sub>.

#### Examples


```rascal-shell
rascal>(3 > 2) ? 10 : 20
int: 10
rascal>(3 > 20) ? 10 : 20
int: 20
```


