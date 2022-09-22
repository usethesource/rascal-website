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

`( KeyExp<sub>1</sub> : ValExp<sub>1</sub>, KeyExp<sub>2</sub> : ValExp<sub>2</sub>, ... )`

#### Types


| `KeyExp<sub>1</sub>` | `ValExp<sub>1</sub>` | `KeyExp<sub>2</sub>` | `ValExp<sub>2</sub>` | ... | `( KeyExp<sub>1</sub> : ValExp<sub>1</sub>, KeyExp<sub>2</sub> : ValExp<sub>2</sub>, ... )`   |
| --- | --- | --- | --- | --- | --- |
| `TK<sub>1</sub>`     |  `TV<sub>1</sub>`    |  `TK<sub>2</sub>`    | `TV<sub>2</sub>`     | ... | `map[lub(TK<sub>1</sub>, TK<sub>2</sub>, ... ) , lub(TV<sub>1</sub>, TV<sub>2</sub>, ... )]`  |


#### Description

A map is a set of key/value pairs and has the following properties:

*  Key and value may have different static types.

*  A key can only occur once.


Maps resemble functions rather than relations in the sense that only a single value can be associated with each key.

The following functions are provided for maps:

* [Map](../../../../Rascal/Expressions/Values/Map)
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


