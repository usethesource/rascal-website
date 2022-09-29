---
title: List Equal
keywords:
  - "=="

---

#### Synopsis

Equality on lists.

#### Syntax

`Exp₁ == Exp₂`

#### Types

//

| `Exp₁`     |  `Exp₂`     | `Exp₁ == Exp₂`  |
| --- | --- | --- |
| `list[T₁]` |  `list[T₂]` | `bool`                |


#### Description

Yields `true` if both arguments are equal lists and `false` otherwise.

#### Examples


```rascal-shell 
rascal>[1, 2, 3] == [1, 2, 3];
bool: true
rascal>[1, 2, 3] == [3, 2, 1];
bool: false
```

