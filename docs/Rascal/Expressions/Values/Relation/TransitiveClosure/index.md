---
title: Relation TransitiveClosure
keywords:
  - "+"

---

#### Synopsis

Transitive closure on binary relation values.

#### Syntax

`Exp +`

#### Types


|`Exp`              | `Exp +`            |
| --- | --- |
| `rel[T<sub>1</sub>, T<sub>2</sub>]` | `rel[T<sub>1</sub>, T<sub>2</sub>]`  |


#### Function

#### Description

Returns the transitive closure of a binary relation.
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
rascal>{<1,2>, <2,3>, <3,4>}+;
rel[int,int]: {
  <3,4>,
  <1,3>,
  <1,2>,
  <1,4>,
  <2,3>,
  <2,4>
}
```
We can also simply (but not necessarily efficiently) define transitive closure ourselves:

```rascal-shell
rascal>rel[int,int] tclosure(rel[int,int] R) {
>>>>>>>   tc = R;
>>>>>>>   while(true){
>>>>>>>      tc1 = tc;
>>>>>>>      tc += tc o R;
>>>>>>>      if(tc1 == tc)
>>>>>>>         return tc;
>>>>>>>   }
>>>>>>>}
rel[int,int] (rel[int,int]): function(|prompt:///|(0,149,<1,0>,<9,1>))
rascal>tclosure({<1,2>, <2,3>, <3,4>});
rel[int,int]: {
  <3,4>,
  <1,3>,
  <1,2>,
  <1,4>,
  <2,3>,
  <2,4>
}
```

#### Benefits


