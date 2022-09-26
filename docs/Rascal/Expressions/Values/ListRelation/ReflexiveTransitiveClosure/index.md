---
title: ListRelation Reflexive Transitive Closure
keywords:
  - "*"

---

#### Synopsis

The reflexive transitive closure of a binary list relation.

#### Syntax

`Exp *`

#### Types


|`Exp`               | `Exp *`             |
| --- | --- |
| `lrel[T₁, T₂]` | `lrel[T₁, T₂]`  |


#### Description

Reflexive transitive closure is defined by repeated composition of a list relation.
If we define for a given list relation R:

*  `R₀ = `[<a, a>, <b, b> | <a, b> <- R];`
*  `R₁ = R`
*  `R₂ = R o R`
*  `R₃ = R o R₂`
*  `...`


then the reflexive transitive closure R* can be defined in two ways:
(also see [TransitiveClosure](../../../../../Rascal/Expressions/Values/ListRelation/TransitiveClosure/index.md)):

*  `R* = R₀ + R₁ + R₂ + R₃ + ...`
*  `R* = R₀ + R+`


#### Examples


```rascal-shell 
rascal>[<1,2>, <2,3>, <3,4>]*;
lrel[int,int]: [
  <1,2>,
  <2,3>,
  <3,4>,
  <1,3>,
  <2,4>,
  <1,4>,
  <4,4>,
  <3,3>,
  <2,2>,
  <1,1>
]
```


