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
| `lrel[T<sub>1</sub>, T<sub>2</sub>]` | `lrel[T<sub>1</sub>, T<sub>2</sub>]`  |


#### Function

#### Description

Returns the transitive closure of a binary listrelation.
Transitive closure is defined by repeated composition of a relation.
If we define for a given relation R:

*  `R<sub>1</sub> = R`
*  `R<sub>2</sub> = R o R`
*  `R<sub>3</sub> = R o R<sub>2</sub>`
*  `...`


then the transitive closure R+ can be defined as

*  `R+ = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> + ...`


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

#### Benefits


