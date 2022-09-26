---
title: List StrictSuperList
keywords:
  - ">"

---

#### Synopsis

The strict super list operator on lists.

#### Syntax

`Exp₁ > Exp₂`

#### Types

//

| `Exp₁`     |  `Exp₂`     | `Exp₁ > Exp₂`  |
| --- | --- | --- |
| `list[T₁]` |  `list[T₂]` | `bool`               |


#### Description

Yields `true` if the value of Exp₂ is a strict sublist of the value of Exp₁,  and `false` otherwise.

#### Examples


```rascal-shell 
rascal>[1, 2, 3, 4] > [1, 2, 3];
bool: true
rascal>[1, 2, 3, 4] > [1, 2, 3, 4];
bool: false
rascal>[1, 2, 3, 4] > [1, 2, 3];
bool: true
rascal>[1, 2, 3, 4, 5] > [1, 3, 5]
bool: true
```


