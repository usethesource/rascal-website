---
title: Map SubMap
keywords:
  - "<="

---

#### Synopsis

Submap operator on map values.

#### Syntax

`Exp<sub>1</sub> <= Exp<sub>2</sub>`

#### Types

| `Exp<sub>1</sub>`            |  `Exp<sub>2</sub>`             | `Exp<sub>1</sub> <= Exp<sub>2</sub>`  |
| --- | --- | --- |
| `map[TK<sub>1</sub>,TV<sub>2</sub>]` |  `map[TK<sub>2</sub>, TV<sub>2</sub>]` | `bool`                |


#### Function

#### Description

Yields `true` if all key/value pairs in the map value of _Exp_<sub>1</sub> occur in the map value _Exp_<sub>2</sub>
or the values of _Exp_<sub>1</sub> and _Exp_<sub>2</sub> are equal, and `false` otherwise.

#### Examples


```rascal-shell
rascal>("apple": 1, "pear": 2) <= ("pear": 2, "apple": 1);
bool: true
rascal>("apple": 1, "pear": 2) <= ("pear": 2, "apple": 1, "banana" : 3);
bool: true
rascal>("apple": 1, "pear": 2) <= ("apple": 1, "banana" : 3);
bool: false
```

#### Benefits


