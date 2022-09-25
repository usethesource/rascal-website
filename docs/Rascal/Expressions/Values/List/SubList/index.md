---
title: List SubList
keywords:
  - "<="

---

#### Synopsis

The sublist operator on lists.

#### Syntax

`Exp~1~ <= Exp~2~`

#### Types


| `Exp~1~`     |  `Exp~2~`     | `Exp~1~ <= Exp~2~`  |
| --- | --- | --- |
| `list[T~1~]` |  `list[T~2~]` | `bool`                |


#### Description

Yields `true` if the value of Exp~1~ is equal to or a sublist of the value of Exp~2~,  and `false` otherwise.

#### Examples


```rascal-shell 
rascal>[1, 2, 3] <= [1, 2, 3, 4];
bool: true
rascal>[1, 2, 3] <= [1, 2, 3];
bool: true
rascal>[1, 3, 5] <= [1, 2, 3, 4, 5];
bool: true
```


