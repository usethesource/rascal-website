---
title: Map NotEqual
keywords:
  - "!="

---

#### Synopsis

Not equal operator on map values.

#### Syntax

`Exp₁ != Exp₂`

#### Types

| `Exp₁`            |  `Exp₂`             | `Exp₁ != Exp₂`  |
| --- | --- | --- |
| `map[TK₁,TV₂]` |  `map[TK₂, TV₂]` | `bool`                |


#### Description

Yields `true` if both arguments contain different key/value pairs, and `false` otherwise.

#### Examples


```rascal-shell 
rascal>("apple": 1, "pear": 2) != ("apple": 1, "banana": 3);
bool: true
rascal>("apple": 1, "pear": 2) != ("pear": 2, "apple": 1);
bool: false
```


