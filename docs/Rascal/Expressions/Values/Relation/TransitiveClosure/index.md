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
| `rel[T₁, T₂]` | `rel[T₁, T₂]`  |


#### Description

Returns the transitive closure of a binary relation.
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
We can also define transitive closure ourselves (this is not faster):

```rascal-shell ,continue
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


