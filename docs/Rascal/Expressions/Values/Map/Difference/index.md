---
title: Map Difference
keywords:
  - "-"
---

#### Synopsis

The difference between two maps.

#### Syntax

`Exp₁ - Exp₂`

#### Types


| `Exp₁`             |  `Exp₂`             | `Exp₁ - Exp₂`                             |
| --- | --- | --- |
| `map[TK₁, TV₁]` |  `map[TK₂, TV₂]` | `map[lub(TK₁,TK₂),lub(TK₁,TK₂)]`   |


#### Description

The result is the difference of the two map values of _Exp_₁ and _Exp_₂,
i.e. a map with all pairs in _Exp_₁ that do have a key that does not occur in _Exp_₂.

#### Examples


```rascal-shell 
rascal>("apple": 1, "pear": 2) - ("banana": 3, "apple": 4);
map[str, int]: ("pear":2)
```


