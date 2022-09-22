---
title: List StrictSubList
keywords:
  - "<"

---

#### Synopsis

The strict sublist operator on lists.

#### Syntax

`Exp<sub>1</sub> < Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>`     |  `Exp<sub>2</sub>`     | `Exp<sub>1</sub> < Exp<sub>2</sub>`  |
| --- | --- | --- |
| `list[T<sub>1</sub>]` |  `list[T<sub>2</sub>]` | `bool`               |


#### Description

Yields `true` if the value of Exp<sub>1</sub> is a strict sublist of the value of Exp<sub>2</sub>,  and `false` otherwise.

#### Examples


```rascal-shell
rascal>[1, 2, 3] < [1, 2, 3, 4];
bool: true
rascal>[1, 2, 3, 4] < [1, 2, 3, 4];
bool: false
rascal>[1, 3, 5] < [1, 2, 3, 4, 5]
bool: true
```


