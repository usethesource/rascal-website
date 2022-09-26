---
title: Node Equal
keywords:
  - "=="

---

#### Synopsis

Equal operator on node values.

#### Syntax

`Exp₁ == Exp₂`

#### Types

| `Exp₁`  |  `Exp₂` | `Exp₁ == Exp₂`  |
| --- | --- | --- |
| `node`     |  `node`    | `bool`                |


#### Description

Yields `true` if the node names of the values of _Exp_₁ and _Exp_₂ are equal and
the children of each node are pairwise equal, otherwise `false`.

#### Examples


```rascal-shell 
rascal>"f"(1, "abc", true) == "f"(1, "abc", true);
bool: true
rascal>"f"(1, "abc", true) == "f"(1, "def", true);
bool: false
```


