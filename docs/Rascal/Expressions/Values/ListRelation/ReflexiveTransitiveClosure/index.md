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
| `lrel[T<sub>1</sub>, T<sub>2</sub>]` | `lrel[T<sub>1</sub>, T<sub>2</sub>]`  |


#### Description

Reflexive transitive closure is defined by repeated composition of a list relation.
If we define for a given list relation R:

*  `R<sub>0</sub> = `[<a, a>, <b, b> | <a, b> <- R];`
*  `R<sub>1</sub> = R`
*  `R<sub>2</sub> = R o R`
*  `R<sub>3</sub> = R o R<sub>2</sub>`
*  `...`


then the reflexive transitive closure R* can be defined in two ways:
(also see [Transitive closure](../../../../../Rascal/Expressions/Values/ListRelation/TransitiveClosure)):

*  `R* = R<sub>0</sub> + R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> + ...`
*  `R* = R<sub>0</sub> + R+`


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


