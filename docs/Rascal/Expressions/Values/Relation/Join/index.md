---
title: Relation Join
keywords:
  - join

---

#### Synopsis

Join two relation values.

#### Syntax

`Exp₁ join Exp₂`

#### Types


| `Exp₁`                            |  `Exp₂`                            | `Exp₁ join Exp₂`                                             |
| --- | --- | --- |
| `rel[ T₁₁, T₁₂, T₁₃, ... ]` |  `rel[ T₂₁, T₂₂, T₂₃, ... ]` | `rel[ T₁₁, T₁₂, T₁₃, ..., T₂₁, T₂₂, T₂₃, ... ]`  |


#### Description

Relation resulting from the natural join of the relation values of the two arguments.
This relation contains tuples that are the result from concatenating the elements from both arguments.

#### Examples


```rascal-shell 
rascal>{<1,2>, <10,20>} join {<2,3>};
rel[int,int,int,int]: {
  <1,2,2,3>,
  <10,20,2,3>
}
rascal>{<1,2>} join {3, 4};
rel[int,int,int]: {
  <1,2,3>,
  <1,2,4>
}
rascal>{<1,2>, <10,20>} join {<2,3>, <20,30>};
rel[int,int,int,int]: {
  <1,2,2,3>,
  <10,20,2,3>,
  <10,20,20,30>,
  <1,2,20,30>
}
```


