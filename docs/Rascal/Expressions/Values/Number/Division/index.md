---
title: Number Division
keywords:
  - "/"

---

#### Synopsis

Division on numeric values.

#### Syntax

`Exp~1~ / Exp~2~`

#### Types


| `Exp~1~`  |  `Exp~2~` | `Exp~1~ / Exp~2~`   |
| --- | --- | --- |
| `int`      |  `int`     | `int`                 |
| `int`      |  `real`    | `real`                |
| `real`     |  `real`    | `real`                |


#### Description

Yields the result of dividing the value of _Exp~1~_ by the value of _Exp~2~_.

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


