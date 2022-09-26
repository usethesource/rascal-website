---
title: Map notin
keywords:
  - notin

---

#### Synopsis

Negated membership test on the keys of a map.

#### Syntax

`Exp₁ notin Exp₂`

#### Types

| `Exp₁`           |  `Exp₂`         | `Exp₁ notin Exp₂`  |
| --- | --- | --- |
| `T₁`  <: `TK`  |  `map[TK, TV]` | `bool`                |


#### Description

Yields `true` if the value of Exp₁ does not occur as key in the map value of Exp₂ and `false` otherwise. 
The type of _Exp_₁ should be compatible with the key type _TK_ of _Exp_₂.

#### Examples


```rascal-shell 
rascal>"pineapple" notin ("apple": 1, "pear": 2);
bool: true
rascal>"pear" notin ("apple": 1, "pear": 2);
bool: false
```


