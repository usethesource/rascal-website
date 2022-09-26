---
title: Set StrictSuperSet
keywords:
  - ">"

---

#### Synopsis

Strict superset operator on set values.

#### Syntax

`Exp₁ > Exp₂`

#### Types


| `Exp₁`    |  `Exp₂`    | `Exp₁ > Exp₂`  |
| --- | --- | --- |
| `set[T₁]` |  `set[T₂]` | `bool`               |


#### Description

Yields `true` if the value of Exp₁ is a strict superset of the value of Exp₂, and `false` otherwise.

#### Examples


```rascal-shell 
rascal>{1, 2, 3, 4} > {3, 2, 1};
bool: true
rascal>{1, 2, 3, 4} > {4, 3, 2, 1};
bool: false
```


