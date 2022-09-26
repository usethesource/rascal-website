---
title: List SubList
keywords:
  - "<="

---

#### Synopsis

The sublist operator on lists.

#### Syntax

`Exp₁ <= Exp₂`

#### Types


| `Exp₁`     |  `Exp₂`     | `Exp₁ <= Exp₂`  |
| --- | --- | --- |
| `list[T₁]` |  `list[T₂]` | `bool`                |


#### Description

Yields `true` if the value of Exp₁ is equal to or a sublist of the value of Exp₂,  and `false` otherwise.

#### Examples


```rascal-shell 
rascal>[1, 2, 3] <= [1, 2, 3, 4];
bool: true
rascal>[1, 2, 3] <= [1, 2, 3];
bool: true
rascal>[1, 3, 5] <= [1, 2, 3, 4, 5];
bool: true
```


