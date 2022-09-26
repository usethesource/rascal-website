---
title: IsDefined
keywords:
  - "?"
---

#### Synopsis

Assign but replace if value is not defined.

#### Description

First the value of _Exp_₁ is determined and if that is defined it is assigned to _Assignable_. 
Otherwise, the value of _Exp_₂ is assigned to _Assignable_.

Values which can be undefined are:
* in [Map](../../../../Rascal/Expressions/Values/Map/index.md)s where the key is _not_ set
* values of [Annotation](../../../../Rascal/Declarations/Annotation/index.md) which are not present.
* values of [Function](../../../../Rascal/Declarations/Function/index.md)'s keyword parameters which have not been provided, but are set to default.
* values of [Constructor](../../../../Rascal/Expressions/Values/Constructor/index.md)'s keyword parameters which have not been provided, but are computed by defaults.

No other values can be used in an undefined state, so the ? operator does not make sense on undefined or uninitialized variables for example.

#### Examples


```rascal-shell 
rascal>M = ("Andy": 1, "Brian" : 2);
map[str, int]: ("Andy":1,"Brian":2)
```
Using an `isDefined` assignable can we increment a non-existing entry:

```rascal-shell ,continue
rascal>M["SomebodyElse"] ? 0 += 1;
map[str, int]: ("Andy":1,"Brian":2,"SomebodyElse":1)
rascal>M["SomebodyElse"];
int: 1
```
And if we increment an existing entry the ? has no effect:

```rascal-shell ,continue
rascal>M["Andy"] ? 0 += 1;
map[str, int]: ("Andy":2,"Brian":2,"SomebodyElse":1)
rascal>M["Andy"]
int: 2
```

#### Benefits

* short notation that inline initialization of map values, keyword fields or annotations without having to write a lot of boilerplate if-then-else statements. 


