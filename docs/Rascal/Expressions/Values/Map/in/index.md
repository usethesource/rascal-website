---
title: Map in
keywords:
  - in

---

#### Synopsis

Membership test on the keys of a map.

#### Syntax

`Exp₁ in Exp₂`

#### Types

| `Exp₁`           |  `Exp₂`         | `Exp₁ in Exp₂`  |
| --- | --- | --- |
| `T₁`  <: `TK`  |  `map[TK, TV]` | `bool`                |


#### Description

Yields `true` if the value of Exp₁ occurs as key in the map value of Exp₂ and `false` otherwise. 
The type of _Exp_₁ should be compatible with the key type _TK_ of _Exp_₂.

#### Examples


```rascal-shell 
rascal>"pear" in ("apple": 1, "pear": 2);
bool: true
rascal>"pineapple" in ("apple": 1, "pear": 2);
bool: false
```


