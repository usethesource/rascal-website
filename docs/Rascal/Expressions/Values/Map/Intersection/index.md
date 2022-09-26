---
title: Map Intersection
keywords:
  - "&"

---

#### Synopsis

Intersection of two maps.

#### Syntax

`Exp₁ & Exp₂`

#### Types


| `Exp₁`    |  `Exp₂`      | `Exp₁ & Exp₂`      |
| --- | --- | --- |
| `map[T₁1, T12]` |  `set[T₂]`   | `set[lub(T₁,T₂)]`  |


#### Description

Returns the intersection of the two map values of _Exp_₁ and _Exp_₂, i.e., a map that contains the key/value pairs that
occur in both maps.

#### Examples


```rascal-shell 
rascal>("apple": 1, "pear": 2) & ("banana": 3, "apple": 1);
map[str, int]: ("apple":1)
rascal>("apple": 1, "pear": 2) & ("banana": 3, "apple": 4);
map[str, int]: ()
```


