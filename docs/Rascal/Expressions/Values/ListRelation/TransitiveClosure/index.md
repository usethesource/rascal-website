---
title: ListRelation Transitive Closure
keywords:
  - "+"

---

#### Synopsis

Transitive closure on binary list relation values.

#### Syntax

`Exp +`

#### Types


|`Exp`               | `Exp +`            |
| --- | --- |
| `lrel[T₁, T₂]` | `lrel[T₁, T₂]`  |


#### Description

Returns the transitive closure of a binary listrelation.
Transitive closure is defined by repeated composition of a relation.
If we define for a given relation R:

*  `R₁ = R`
*  `R₂ = R o R`
*  `R₃ = R o R₂`
*  `...`


then the transitive closure R+ can be defined as

*  `R+ = R₁ + R₂ + R₃ + ...`


#### Examples


```rascal-shell 
rascal>[<1,2>, <2,3>, <3,4>]+;
lrel[int,int]: [
  <1,2>,
  <2,3>,
  <3,4>,
  <1,3>,
  <2,4>,
  <1,4>
]
```


