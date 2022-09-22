---
title: Relation Composition
keywords:
  - o

---

#### Synopsis

Composition of two relation values.

#### Syntax

`Exp<sub>1</sub> o Exp<sub>2</sub>`

#### Types


|`Exp<sub>1</sub>`            | `Exp<sub>2</sub>`           | `Exp<sub>1</sub> o Exp<sub>2</sub>`  |
| --- | --- | --- |
| `rel[T<sub>1</sub>, T<sub>2</sub>]` | `rel[T<sub>2</sub>, T<sub>3</sub>]` | `rel[T<sub>1</sub>, T<sub>3</sub>]`  |


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


