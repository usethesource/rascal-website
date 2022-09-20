---
title: ListRelation Composition
keywords:
  - o

---

#### Synopsis

Composition of two list relation values.

#### Syntax

`Exp<sub>1</sub> o Exp<sub>2</sub>`

#### Types

//

|`Exp<sub>1</sub>`             | `Exp<sub>2</sub>`            | `Exp<sub>1</sub> o Exp<sub>2</sub>`  |
| --- | --- | --- |
| `lrel[T<sub>1</sub>, T<sub>2</sub>]` | `lrel[T<sub>2</sub>, T<sub>3</sub>]` | `lrel[T<sub>1</sub>, T<sub>3</sub>]` |


#### Function

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

#### Benefits

#### Pitfalls

We use the letter `o` as operator and this may conflict other defined names.


