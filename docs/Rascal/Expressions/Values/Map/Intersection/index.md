---
title: Map Intersection
keywords:
  - "&"

---

#### Synopsis

Intersection of two maps.

#### Syntax

`Exp<sub>1</sub> & Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>`    |  `Exp<sub>2</sub>`      | `Exp<sub>1</sub> & Exp<sub>2</sub>`      |
| --- | --- | --- |
| `map[T<sub>1</sub>1, T12]` |  `set[T<sub>2</sub>]`   | `set[lub(T<sub>1</sub>,T<sub>2</sub>)]`  |


#### Function

#### Description

Returns the intersection of the two map values of _Exp_<sub>1</sub> and _Exp_<sub>2</sub>, i.e., a map that contains the key/value pairs that
occur in both maps.

#### Examples


```rascal-shell
rascal>("apple": 1, "pear": 2) & ("banana": 3, "apple": 1);
map[str, int]: ("apple":1)
rascal>("apple": 1, "pear": 2) & ("banana": 3, "apple": 4);
map[str, int]: ()
```

#### Benefits


