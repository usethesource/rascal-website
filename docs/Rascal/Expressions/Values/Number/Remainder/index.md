---
title: Number Remainder
keywords:
  - "%"

---

#### Synopsis

Remainder of two integer values.

#### Syntax

`Exp~1~ % Exp~2~`

#### Types


| `Exp~1~`  |  `Exp~2~` | `Exp~1~ % Exp~2~`  |
| --- | --- | --- |
| `int`      |  `int`     | `int`                |


#### Description

Yields the remainder when dividing the of _Exp_~1~ by the value of _Exp_~2~.

#### Examples


```rascal-shell 
rascal>12 % 5
int: 2
rascal>12 % 6
int: 0
```

#### Pitfalls

Remainder is only defined on integers:

```rascal-shell ,error
rascal>13.5 % 6
ok
```


