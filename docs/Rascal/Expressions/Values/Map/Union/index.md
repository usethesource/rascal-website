---
title: Map Union
keywords:
  - "+"

---

#### Synopsis

Union of two maps.

#### Syntax

`Exp<sub>1</sub> + Exp<sub>2</sub>`

#### Types

| `Exp<sub>1</sub>`             |  `Exp<sub>2</sub>`             | `Exp<sub>1</sub> + Exp<sub>2</sub>`                             |
| --- | --- | --- |
| `map[TK<sub>1</sub>, TV<sub>1</sub>]` |  `map[TK<sub>2</sub>, TV<sub>2</sub>]` | `map[lub(TK<sub>1</sub>,TK<sub>2</sub>),lub(TK<sub>1</sub>,TK<sub>2</sub>) ]`   |


#### Description

The result is the union of the two map values of _Exp_<sub>1</sub> and _Exp_<sub>2</sub>.
If they have a pair with the same key in common, that key will be associated
in the union with the value associated with that key in _Exp_<sub>2</sub>.

#### Examples


```rascal-shell
rascal>("apple": 1, "pear": 2) + ("banana": 3, "kiwi": 4);
map[str, int]: ("banana":3,"pear":2,"kiwi":4,"apple":1)
rascal>("apple": 1, "pear": 2) + ("banana": 3, "apple": 4);
map[str, int]: ("banana":3,"pear":2,"apple":4)
```

#### Benefits

Map union is very suited for representing environment composition in interpreters.


