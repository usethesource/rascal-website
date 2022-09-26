---
title: List in
keywords:
  - in

---

#### Synopsis

Membership test on list elements.

#### Syntax

`Exp₁ in Exp₂`

#### Types

//

| `Exp₁`           |  `Exp₂`      | `Exp₁ in Exp₂`  |
| --- | --- | --- |
| `T₁`  <: `T₂` |  `list[T₂]`  | `bool`               |


#### Description

Yields `true` if the value of Exp₁ occurs as element in the value of Exp₂ and `false` otherwise. 
The type of _Exp_₁ should be compatible with the element type of _Exp_₂.

#### Examples


```rascal-shell 
rascal>2 in [1, 2, 3];
bool: true
rascal>4 in [1, 2, 3];
bool: false
```


