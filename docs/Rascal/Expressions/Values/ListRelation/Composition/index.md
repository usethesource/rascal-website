---
title: ListRelation Composition
keywords:
  - o

---

#### Synopsis

Composition of two list relation values.

#### Syntax

`Exp₁ o Exp₂`

#### Types

//

|`Exp₁`             | `Exp₂`            | `Exp₁ o Exp₂`  |
| --- | --- | --- |
| `lrel[T₁, T₂]` | `lrel[T₂, T₃]` | `lrel[T₁, T₃]` |


#### Description

Returns the composition of two binary list relations.

#### Examples


```rascal-shell 
rascal>[<1,10>, <2,20>, <3,15>] o [<10,100>, <20,200>];
lrel[int,int]: [
  <1,100>,
  <2,200>
]
```

#### Pitfalls

We use the letter `o` as operator and this may conflict other defined names.


