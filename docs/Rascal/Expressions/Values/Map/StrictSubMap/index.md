---
title: Map StrictSubMap
keywords:
  - "<"

---

#### Synopsis

Strict submap operator on map values.

#### Syntax

`Exp₁ < Exp₂`

#### Types

| `Exp₁`            |  `Exp₂`             | `Exp₁ < Exp₂`  |
| --- | --- | --- |
| `map[TK₁,TV₂]` |  `map[TK₂, TV₂]` | `bool`                |


#### Description

Yields `true` if all key/value pairs in the map value of _Exp_₁ occur in the map value _Exp_₂
and the values of _Exp_₁ and _EXp_₂ are not equal, and `false` otherwise.

#### Examples


```rascal-shell 
rascal>("apple": 1, "pear": 2) < ("pear": 2, "apple": 1, "banana" : 3);
bool: true
rascal>("apple": 1, "pear": 2) < ("apple": 1, "banana" : 3);
bool: false
```


