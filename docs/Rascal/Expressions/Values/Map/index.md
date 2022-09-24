---
title: Map
keywords:
  - "("
  - ":"
  - ")"

---

#### Synopsis

Map values.

#### Syntax

`( KeyExp~1~ : ValExp~1~, KeyExp~2~ : ValExp~2~, ... )`

#### Types

| `KeyExp~1~` | `ValExp~1~` | `KeyExp~2~` | `ValExp~2~` | ... | `( KeyExp~1~ : ValExp~1~, KeyExp~2~ : ValExp~2~, ... )`   |
| --- | --- | --- | --- | --- | --- |
| `TK~1~`     |  `TV~1~`    |  `TK~2~`    | `TV~2~`     | ... | `map[lub(TK~1~, TK~2~, ... ) , lub(TV~1~, TV~2~, ... )]`  |

#### Description

A map is a set of key/value pairs and has the following properties:

*  Key and value may have different static types.

*  A key can only occur once.

Maps resemble functions rather than relations in the sense that only a single value can be associated with each key.

The following functions are provided for maps:

* [Composition](../../../../Rascal/Expressions/Values/Map/Composition)
* [Comprehension](../../../../Rascal/Expressions/Values/Map/Comprehension)
* [Difference](../../../../Rascal/Expressions/Values/Map/Difference)
* [Equal](../../../../Rascal/Expressions/Values/Map/Equal)
* [Intersection](../../../../Rascal/Expressions/Values/Map/Intersection)
* [NotEqual](../../../../Rascal/Expressions/Values/Map/NotEqual)
* [StrictSubMap](../../../../Rascal/Expressions/Values/Map/StrictSubMap)
* [StrictSuperMap](../../../../Rascal/Expressions/Values/Map/StrictSuperMap)
* [SubMap](../../../../Rascal/Expressions/Values/Map/SubMap)
* [Subscription](../../../../Rascal/Expressions/Values/Map/Subscription)
* [SuperMap](../../../../Rascal/Expressions/Values/Map/SuperMap)
* [Union](../../../../Rascal/Expressions/Values/Map/Union)
* [in](../../../../Rascal/Expressions/Values/Map/in)
* [notin](../../../../Rascal/Expressions/Values/Map/notin)

#### Examples

```rascal-shell 
rascal>("pear" : 1, "apple" : 3, "banana" : 0);
map[str, int]: ("banana":0,"pear":1,"apple":3)
```

