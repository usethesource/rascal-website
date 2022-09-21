---
title: IsDefined
keywords:
  - "?"
---

#### Synopsis

Assign but replace if value is not defined.

#### Syntax

#### Types

#### Function
       
#### Usage

#### Description

First the value of _Exp_<sub>1</sub> is determined and if that is defined it is assigned to _Assignable_. 
Otherwise, the value of _Exp_<sub>2</sub> is assigned to _Assignable_.

Values which can be undefined are:
* in [Map](/docs//Rascal/Expressions/Values/Map)s where the key is _not_ set
* values of [Annotation](/docs//Rascal/Declarations/Annotation) which are not present.
* values of [Function](/docs//Rascal/Declarations/Function)'s keyword parameters which have not been provided, but are set to default.
* values of [Constructor](/docs//Rascal/Expressions/Values/Constructor)'s keyword parameters which have not been provided, but are computed by defaults.

No other values can be used in an undefined state, so the ? operator does not make sense on undefined or uninitialized variables for example.

#### Examples


```rascal-shell
rascal>M = ("Andy": 1, "Brian" : 2);
map[str, int]: ("Andy":1,"Brian":2)
```
Using an `isDefined` assignable can we increment a non-existing entry:

```rascal-shell
rascal>M["SomebodyElse"] ? 0 += 1;
map[str, int]: ("Andy":1,"Brian":2,"SomebodyElse":1)
rascal>M["SomebodyElse"];
int: 1
```
And if we increment an existing entry the ? has no effect:

```rascal-shell
rascal>M["Andy"] ? 0 += 1;
map[str, int]: ("Andy":2,"Brian":2,"SomebodyElse":1)
rascal>M["Andy"]
int: 2
```

#### Benefits

* short notation that inline initialization of map values, keyword fields or annotations without having to write a lot of boilerplate if-then-else statements. 


