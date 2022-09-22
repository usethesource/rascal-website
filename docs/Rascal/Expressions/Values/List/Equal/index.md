---
title: List Equal
keywords:
  - "=="

---

#### Synopsis

Equality on lists.

#### Syntax

`Exp<sub>1</sub> == Exp<sub>2</sub>`

#### Types

//

| `Exp<sub>1</sub>`     |  `Exp<sub>2</sub>`     | `Exp<sub>1</sub> == Exp<sub>2</sub>`  |
| --- | --- | --- |
| `list[T<sub>1</sub>]` |  `list[T<sub>2</sub>]` | `bool`                |


#### Description

Yields `true` if both arguments are equal lists and `false` otherwise.

#### Examples


```rascal-shell
rascal>[1, 2, 3] == [1, 2, 3];
bool: true
rascal>[1, 2, 3] == [3, 2, 1];
bool: false
```


