---
title: Map NotEqual
keywords:
  - "!="

---

#### Synopsis

Not equal operator on map values.

#### Syntax

`Exp<sub>1</sub> != Exp<sub>2</sub>`

#### Types

| `Exp<sub>1</sub>`            |  `Exp<sub>2</sub>`             | `Exp<sub>1</sub> != Exp<sub>2</sub>`  |
| --- | --- | --- |
| `map[TK<sub>1</sub>,TV<sub>2</sub>]` |  `map[TK<sub>2</sub>, TV<sub>2</sub>]` | `bool`                |


#### Description

Yields `true` if both arguments contain different key/value pairs, and `false` otherwise.

#### Examples


```rascal-shell
rascal>("apple": 1, "pear": 2) != ("apple": 1, "banana": 3);
bool: true
rascal>("apple": 1, "pear": 2) != ("pear": 2, "apple": 1);
bool: false
```


