---
title: Map SubMap
keywords:
  - "<="

---

#### Synopsis

Submap operator on map values.

#### Syntax

`Exp₁ <= Exp₂`

#### Types

| `Exp₁`            |  `Exp₂`             | `Exp₁ <= Exp₂`  |
| --- | --- | --- |
| `map[TK₁,TV₂]` |  `map[TK₂, TV₂]` | `bool`                |


#### Description

Yields `true` if all key/value pairs in the map value of _Exp_₁ occur in the map value _Exp_₂
or the values of _Exp_₁ and _Exp_₂ are equal, and `false` otherwise.

#### Examples


```rascal-shell 
rascal>("apple": 1, "pear": 2) <= ("pear": 2, "apple": 1);
bool: true
rascal>("apple": 1, "pear": 2) <= ("pear": 2, "apple": 1, "banana" : 3);
bool: true
rascal>("apple": 1, "pear": 2) <= ("apple": 1, "banana" : 3);
bool: false
```


