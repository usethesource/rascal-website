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
| `rel[T~1~, T~2~]` | `rel[T~1~, T~2~]`  |


#### Description

Returns the transitive closure of a binary relation.
Transitive closure is defined by repeated composition of a relation.
If we define for a given relation R:

*  `R~1~ = R`
*  `R~2~ = R o R`
*  `R~3~ = R o R~2~` 
*  `...`


then the transitive closure R+ can be defined as

*  `R+ = R~1~ + R~2~ + R~3~ + ...`


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


