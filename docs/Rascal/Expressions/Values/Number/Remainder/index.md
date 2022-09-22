---
title: Number Remainder
keywords:
  - "%"

---

#### Synopsis

Remainder of two integer values.

#### Syntax

`Exp<sub>1</sub> % Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>`  |  `Exp<sub>2</sub>` | `Exp<sub>1</sub> % Exp<sub>2</sub>`  |
| --- | --- | --- |
| `int`      |  `int`     | `int`                |


#### Description

Yields the remainder when dividing the of _Exp_<sub>1</sub> by the value of _Exp_<sub>2</sub>.

#### Examples


```rascal-shell
rascal>12 % 5
int: 2
rascal>12 % 6
int: 0
```

#### Pitfalls

Remainder is only defined on integers:

```rascal-shell
rascal>13.5 % 6
ok
```


