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
| `rel[T<sub>1</sub>, T<sub>2</sub>]` | `rel[T<sub>1</sub>, T<sub>2</sub>]`  |


#### Function

#### Description

Reflexive transitive closure is defined by repeated composition of a relation.
If we define for a given relation R:

*  `R<sub>0</sub> = {<a, a>, <b, b> | <a, b> <- R}`
*  `R<sub>1</sub> = R`
*  `R<sub>2</sub> = R o R`
*  `R<sub>3</sub> = R o R<sub>2</sub>`
*  `...`

then the reflexive transitive closure R* can be defined in two ways:
(also see [Transitive closure](/Rascal/Expressions/Values/Relation/TransitiveClosure)):

*  `R* = R<sub>0</sub> + R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> + ...`
*  `R* = R<sub>0</sub> + R+`


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

#### Benefits


