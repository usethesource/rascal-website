---
title: Set StrictSubSet
keywords:
  - "<"

---

#### Synopsis

Strict subset operator on set values.

#### Syntax

`Exp₁ < Exp₂`

#### Types


| `Exp₁`    |  `Exp₂`    | `Exp₁ < Exp₂`  |
| --- | --- | --- |
| `set[T₁]` |  `set[T₂]` | `bool`               |


#### Description

Yields `true` if the value of Exp₁ is a strict subset of the value of Exp₂,  and `false` otherwise.

#### Examples


```rascal-shell 
rascal>{1, 2, 3} < {1, 2, 3, 4};
bool: true
rascal>{1, 2, 3} < {1, 3, 4};
bool: false
rascal>{1, 2, 3} < {1, 2, 3};
bool: false
```


