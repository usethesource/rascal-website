---
title: Node NotEqual
keywords:
  - "!="
---

#### Synopsis

Not equal operator on node values.

#### Syntax

`Exp<sub>1</sub> != Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>`  |  `Exp<sub>2</sub>` | `Exp<sub>1</sub> != Exp<sub>2</sub>`  |
| --- | --- | --- |
| `node`     |  `node`    | `bool`                |


#### Description

Yields `true` if the node names of the values of _Exp_<sub>1</sub> and _Exp_<sub>2</sub> are unequal or
any of the children of each node is pairwise unequal, otherwise `true`.

#### Examples


```rascal-shell
rascal>"f"(1, "abc", true) != "g"(1, "abc", true);
bool: true
rascal>"f"(1, "abc", true) != "f"(1, "abc", true);
bool: false
```


