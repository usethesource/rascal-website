---
title: Map Equal
keywords:
  - "=="

---

#### Synopsis

Equality operator on maps.

#### Syntax

`Exp₁ == Exp₂`

#### Types

| `Exp₁`            |  `Exp₂`             | `Exp₁ == Exp₂`  |
| --- | --- | --- |
| `map[TK₁,TV₂]` |  `map[TK₂, TV₂]` | `bool`                |


#### Description

Yields `true` if both arguments contain the same key/value pairs, and `false` otherwise.

#### Examples


```rascal-shell 
rascal>("apple": 1, "pear": 2) == ("pear": 2, "apple": 1);
bool: true
rascal>("apple": 1, "pear": 2) == ("apple": 1, "banana": 3) 
bool: false
```


