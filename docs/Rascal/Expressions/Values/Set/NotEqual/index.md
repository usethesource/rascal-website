---
title: Set NotEqual
keywords:
  - "!="
---

#### Synopsis

Not equal operator on set values.

#### Syntax

`Exp<sub>1</sub> != Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>`    |  `Exp<sub>2</sub>`    | `Exp<sub>1</sub> != Exp<sub>2</sub>`  |
| --- | --- | --- |
| `set[T<sub>1</sub>]` |  `set[T<sub>2</sub>]` | `bool`                |


#### Description

Yields `true` if both arguments are unequal sets and `false` otherwise.

#### Examples


```rascal-shell
rascal>{1, 2, 3} != {3, 2, 1};
bool: false
rascal>{1, 2, 3} != {1, 2};
bool: true
```


