---
title: Node NotEqual
keywords:
  - "!="
---

#### Synopsis

Not equal operator on node values.

#### Syntax

`Exp₁ != Exp₂`

#### Types


| `Exp₁`  |  `Exp₂` | `Exp₁ != Exp₂`  |
| --- | --- | --- |
| `node`     |  `node`    | `bool`                |


#### Description

Yields `true` if the node names of the values of _Exp_₁ and _Exp_₂ are unequal or
any of the children of each node is pairwise unequal, otherwise `true`.

#### Examples


```rascal-shell 
rascal>"f"(1, "abc", true) != "g"(1, "abc", true);
bool: true
rascal>"f"(1, "abc", true) != "f"(1, "abc", true);
bool: false
```


