---
title: Node Equal
keywords:
  - "=="

---

#### Synopsis

Equal operator on node values.

#### Syntax

`Exp<sub>1</sub> == Exp<sub>2</sub>`

#### Types

| `Exp<sub>1</sub>`  |  `Exp<sub>2</sub>` | `Exp<sub>1</sub> == Exp<sub>2</sub>`  |
| --- | --- | --- |
| `node`     |  `node`    | `bool`                |


#### Description

Yields `true` if the node names of the values of _Exp_<sub>1</sub> and _Exp_<sub>2</sub> are equal and
the children of each node are pairwise equal, otherwise `false`.

#### Examples


```rascal-shell
rascal>"f"(1, "abc", true) == "f"(1, "abc", true);
bool: true
rascal>"f"(1, "abc", true) == "f"(1, "def", true);
bool: false
```


