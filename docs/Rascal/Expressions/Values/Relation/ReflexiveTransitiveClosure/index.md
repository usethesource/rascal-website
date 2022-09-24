---
title: Relation ReflexiveTransitiveClosure
keywords:
  - "*"

---

#### Synopsis

The reflexive transitive closure of a binary relation.

#### Syntax

`Exp *`

#### Types

|`Exp`              | `Exp *`            |
| --- | --- |
| `rel[T~1~, T~2~]` | `rel[T~1~, T~2~]`  |

#### Description

Reflexive transitive closure is defined by repeated composition of a relation.
If we define for a given relation R:

*  `R~0~ = {<a, a>, <b, b> | <a, b> <- R}`
*  `R~1~ = R`
*  `R~2~ = R o R`
*  `R~3~ = R o R~2~`
*  `...`

then the reflexive transitive closure R* can be defined in two ways:
(also see [TransitiveClosure](../../../../../Rascal/Expressions/Values/Relation/TransitiveClosure)):

*  `R* = R~0~ + R~1~ + R~2~ + R~3~ + ...`
*  `R* = R~0~ + R+`

#### Examples

```rascal-shell 
rascal>{<1,2>, <2,3>, <3,4>}*;
rel[int,int]: {
  <4,4>,
  <1,1>,
  <1,3>,
  <1,2>,
  <1,4>,
  <3,3>,
  <3,4>,
  <2,3>,
  <2,2>,
  <2,4>
}
```

