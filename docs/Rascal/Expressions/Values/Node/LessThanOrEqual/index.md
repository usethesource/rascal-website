---
title: Node LessThanOrEqual
keywords:
  - "<="

---

#### Synopsis

Less than or equal operator on node values.

#### Syntax

`Exp<sub>1</sub> <= Exp<sub>2</sub>`

#### Types

| `Exp<sub>1</sub>` |  `Exp<sub>2</sub>` | `Exp<sub>1</sub> <= Exp<sub>2</sub>`  |
| --- | --- | --- |
| `node`    |  `node`    | `bool`                |


#### Function

#### Description

Comparison on nodes is defined by a lexicographic ordering. Node `N = F(N<sub>1</sub>, ..., N~n~)` is less than or equal node 
`N = G(M<sub>1</sub>, ..., M~m~)` when:
*  _N_ is equal to _M_, or
*  _F_ is lexicographically less than _G_, or _F_ is equal to _G_ and `n < m`.

#### Examples


```rascal-shell
rascal>"f"(10, "abc") <= "f"(10, "abc");
bool: true
rascal>"f"(10) <= "f"(10, "abc");
bool: true
```

#### Benefits


