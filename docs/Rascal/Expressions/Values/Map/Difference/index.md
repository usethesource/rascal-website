---
title: Map Difference
keywords:
  - "-"
---

#### Synopsis

The difference between two maps.

#### Syntax

`Exp<sub>1</sub> - Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>`             |  `Exp<sub>2</sub>`             | `Exp<sub>1</sub> - Exp<sub>2</sub>`                             |
| --- | --- | --- |
| `map[TK<sub>1</sub>, TV<sub>1</sub>]` |  `map[TK<sub>2</sub>, TV<sub>2</sub>]` | `map[lub(TK<sub>1</sub>,TK<sub>2</sub>),lub(TK<sub>1</sub>,TK<sub>2</sub>)]`   |


#### Description

The result is the difference of the two map values of _Exp_<sub>1</sub> and _Exp_<sub>2</sub>,
i.e. a map with all pairs in _Exp_<sub>1</sub> that do have a key that does not occur in _Exp_<sub>2</sub>.

#### Examples


```rascal-shell
rascal>("apple": 1, "pear": 2) - ("banana": 3, "apple": 4);
map[str, int]: ("pear":2)
```


