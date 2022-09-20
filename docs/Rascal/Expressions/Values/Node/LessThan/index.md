---
title: Node LessThan
keywords:
  - "<"

---

#### Synopsis

Less than operator on node values.

#### Syntax

`Exp<sub>1</sub> < Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>` |  `Exp<sub>2</sub>` | `Exp<sub>1</sub> < Exp<sub>2</sub>`  |
| --- | --- | --- |
| `node`    |  `node`    | `bool`               |


#### Function

#### Description

Comparison on nodes is defined by a lexicographic ordering. Node `N = F(N<sub>1</sub>, ..., N~n~)` is less than node 
`N = G(M<sub>1</sub>, ..., M~m~)` when:
*  _N_ is not equal to _M_, and
*  _F_ is lexicographically less than _G_, or _F_ is equal to _G_ and `n < m`.

#### Examples


```rascal-shell
rascal>"f"(10, "abc") < "g"(3);
bool: true
rascal>"f"(10) < "f"(10, "abc");
bool: true
```

#### Benefits


