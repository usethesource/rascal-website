---
title: Map Union
keywords:
  - "+"

---

#### Synopsis

Union of two maps.

#### Syntax

`Exp₁ + Exp₂`

#### Types

| `Exp₁`             |  `Exp₂`             | `Exp₁ + Exp₂`                             |
| --- | --- | --- |
| `map[TK₁, TV₁]` |  `map[TK₂, TV₂]` | `map[lub(TK₁,TK₂),lub(TK₁,TK₂) ]`   |


#### Description

The result is the union of the two map values of _Exp_₁ and _Exp_₂.
If they have a pair with the same key in common, that key will be associated
in the union with the value associated with that key in _Exp_₂.

#### Examples


```rascal-shell 
rascal>("apple": 1, "pear": 2) + ("banana": 3, "kiwi": 4);
map[str, int]: ("banana":3,"pear":2,"kiwi":4,"apple":1)
rascal>("apple": 1, "pear": 2) + ("banana": 3, "apple": 4);
map[str, int]: ("banana":3,"pear":2,"apple":4)
```

#### Benefits

Map union is very suited for representing environment composition in interpreters.


