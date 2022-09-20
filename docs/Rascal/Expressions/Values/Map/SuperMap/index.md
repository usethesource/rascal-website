---
title: Map SuperMap
keywords:
  - ">="

---

#### Synopsis

Supermap operator on map values.

#### Syntax

`Exp<sub>1</sub> >= Exp<sub>2</sub>`

#### Types

| `Exp<sub>1</sub>`            |  `Exp<sub>2</sub>`             | `Exp<sub>1</sub> >= Exp<sub>2</sub>`  |
| --- | --- | --- |
| `map[TK<sub>1</sub>,TV<sub>2</sub>]` |  `map[TK<sub>2</sub>, TV<sub>2</sub>]` | `bool`                |


#### Function

#### Description

Yields `true` if all key/value pairs in the map value of _Exp_<sub>2</sub> occur in the map value _Exp_<sub>1</sub>
or the values of _Exp_<sub>1</sub> and _Exp_<sub>2</sub> are equal, and `false` otherwise.

#### Examples


```rascal-shell
rascal>("pear": 2, "apple": 1) >= ("apple": 1, "pear": 2);
bool: true
rascal>("pear": 2, "apple": 1, "banana" : 3) >= ("apple": 1, "pear": 2);
bool: true
rascal>("apple": 1, "banana" : 3) >= ("apple": 1, "pear": 2);
bool: false
```

#### Benefits


