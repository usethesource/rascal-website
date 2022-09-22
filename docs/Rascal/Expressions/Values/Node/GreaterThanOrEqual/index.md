---
title: Node GreaterThanOrEqual
keywords:
  - ">="
---

#### Synopsis

Greater than or equal operator on node values.

#### Syntax

`Exp<sub>1</sub> >= Exp<sub>2</sub>`

#### Types

| `Exp<sub>1</sub>` |  `Exp<sub>2</sub>` | `Exp<sub>1</sub> >= Exp<sub>2</sub>`  |
| --- | --- | --- |
| `node`    |  `node`    | `bool`                |


#### Description

Comparison on nodes is defined by a lexicographic ordering. Node `N = F(N<sub>1</sub>, ..., N~n~)` is greater than or equal node 
`N = G(M<sub>1</sub>, ..., M~m~)` when:
*  _N_ is equal to _M_, or
*  _F_ is lexicographically greater than _G_, or _F_ is equal to _G_ and `n > m`.

#### Examples


```rascal-shell
rascal>"g"(3) >= "f"(10, "abc");
bool: true
rascal>"f"(10, "abc") >= "f"(10);
bool: true
rascal>"f"(10, "abc") >= "f"(10, "abc");
bool: true
```


