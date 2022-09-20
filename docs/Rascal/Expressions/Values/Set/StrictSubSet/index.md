---
title: Set StrictSubSet
keywords:
  - "<"

---

#### Synopsis

Strict subset operator on set values.

#### Syntax

`Exp<sub>1</sub> < Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>`    |  `Exp<sub>2</sub>`    | `Exp<sub>1</sub> < Exp<sub>2</sub>`  |
| --- | --- | --- |
| `set[T<sub>1</sub>]` |  `set[T<sub>2</sub>]` | `bool`               |


#### Function

#### Description

Yields `true` if the value of Exp<sub>1</sub> is a strict subset of the value of Exp<sub>2</sub>,  and `false` otherwise.

#### Examples


```rascal-shell
rascal>{1, 2, 3} < {1, 2, 3, 4};
bool: true
rascal>{1, 2, 3} < {1, 3, 4};
bool: false
rascal>{1, 2, 3} < {1, 2, 3};
bool: false
```

#### Benefits


