---
title: Number Division
keywords:
  - "/"

---

#### Synopsis

Division on numeric values.

#### Syntax

`Exp₁ / Exp₂`

#### Types


| `Exp₁`  |  `Exp₂` | `Exp₁ / Exp₂`   |
| --- | --- | --- |
| `int`      |  `int`     | `int`                 |
| `int`      |  `real`    | `real`                |
| `real`     |  `real`    | `real`                |


#### Description

Yields the result of dividing the value of _Exp₁_ by the value of _Exp₂_.

#### Examples


```rascal-shell ,error
rascal>12 / 3
int: 4
rascal>10 / 3
int: 3
rascal>12 / 3.0
real: 4.
rascal>10 / 3.0
real: 3.333333333
rascal>12 / 0
|prompt:///|(5,1,<1,5>,<1,6>): ArithmeticException("/ by zero")
ok
```


