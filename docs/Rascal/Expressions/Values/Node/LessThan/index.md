---
title: Node LessThan
keywords:
  - "<"

---

#### Synopsis

Less than operator on node values.

#### Syntax

`Exp₁ < Exp₂`

#### Types


| `Exp₁` |  `Exp₂` | `Exp₁ < Exp₂`  |
| --- | --- | --- |
| `node`    |  `node`    | `bool`               |


#### Description

Comparison on nodes is defined by a lexicographic ordering. Node `N = F(N₁, ..., Nₙ)` is less than node 
`N = G(M₁, ..., Mₘ)` when:
*  _N_ is not equal to _M_, and
*  _F_ is lexicographically less than _G_, or _F_ is equal to _G_ and `n < m`.

#### Examples


```rascal-shell 
rascal>"f"(10, "abc") < "g"(3);
bool: true
rascal>"f"(10) < "f"(10, "abc");
bool: true
```


