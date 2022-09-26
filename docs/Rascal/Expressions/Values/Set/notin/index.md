---
title: Set notin
keywords:
  - notin

---

#### Synopsis

Negated membership test on set values.

#### Syntax

`Exp₁ notin Exp₂`

#### Types


| `Exp₁`           |  `Exp₂`    | `Exp₁ notin Exp₂`  |
| --- | --- | --- |
| `T₁`  <: `T₂` |  `set[T₂]` | `bool`                   |


#### Description

Yields `true` if the value of Exp₁ does not occur as element in the value of Exp₂ and `false` otherwise. The type of _Exp_₁ should be compatible with the element type of _Exp_₂.

#### Examples


```rascal-shell 
rascal>4 notin {1, 2, 3};
bool: true
rascal>4 notin {1, 2, 3, 4};
bool: false
```


