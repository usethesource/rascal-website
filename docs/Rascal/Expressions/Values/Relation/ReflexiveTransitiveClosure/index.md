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
| `rel[T₁, T₂]` | `rel[T₁, T₂]`  |


#### Description

Reflexive transitive closure is defined by repeated composition of a relation.
If we define for a given relation R:

*  `R₀ = {<a, a>, <b, b> | <a, b> <- R}`
*  `R₁ = R`
*  `R₂ = R o R`
*  `R₃ = R o R₂`
*  `...`

then the reflexive transitive closure R* can be defined in two ways:
(also see [TransitiveClosure](../../../../../Rascal/Expressions/Values/Relation/TransitiveClosure/index.md)):

*  `R* = R₀ + R₁ + R₂ + R₃ + ...`
*  `R* = R₀ + R+`


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


