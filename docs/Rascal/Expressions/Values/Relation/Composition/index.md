---
title: Relation Composition
keywords:
  - o

---

#### Synopsis

Composition of two relation values.

#### Syntax

`Exp₁ o Exp₂`

#### Types


|`Exp₁`            | `Exp₂`           | `Exp₁ o Exp₂`  |
| --- | --- | --- |
| `rel[T₁, T₂]` | `rel[T₂, T₃]` | `rel[T₁, T₃]`  |


#### Description

Returns the composition of two binary relations.

#### Examples


```rascal-shell 
rascal>import Relation;
ok
rascal>{<1,10>, <2,20>, <3,15>} o {<10,100>, <20,200>};
rel[int,int]: {
  <1,100>,
  <2,200>
}
```

#### Pitfalls

We use the letter `o` as operator and this may conflict other defined names.


