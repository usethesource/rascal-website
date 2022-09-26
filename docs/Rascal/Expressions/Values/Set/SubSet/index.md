---
title: Set SubSet
keywords:
  - "<="

---

#### Synopsis

Subset operator on set values.

#### Syntax

`Exp₁ <= Exp₂`

#### Types


| `Exp₁`    |  `Exp₂`    | `Exp₁ <= Exp₂`   |
| --- | --- | --- |
| `set[T₁]` |  `set[T₂]` | `bool`                 |


#### Description

Yields `true` if the value of SetExp₁ is a subset of the value of SetExp₂, and `false` otherwise.

#### Examples


```rascal-shell 
rascal>{1, 2, 3} <= {1, 2, 3, 4};
bool: true
rascal>{1, 2, 3} <= {1, 2, 3};
bool: true
```


