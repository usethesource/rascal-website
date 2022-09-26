---
title: Tuple Concatenation
keywords:
  - "+"

---

#### Synopsis

Concatenate two tuple values.

#### Syntax

`Exp₁ + Exp₂`

#### Types


| `Exp₁`                      |  `Exp2_`                      | `Exp₁ > Exp2_`                                 |
| --- | --- | --- |
| `tuple[ T₁₁, T₁₂, ... ]` |  `tuple[ T₂₁, T₂₂, ... ]` | `tuple[ T₁₁, T₁₂, ..., T₂₁, T₂₂, ... ]` |


#### Description

Returns a tuple consisting of the concatenation of the tuple elements of _Exp_₁ and _Exp_₂.

#### Examples


```rascal-shell 
rascal><"abc", 1, 2.5> + <true, "def">;
tuple[str,int,real,bool,str]: <"abc",1,2.5,true,"def">
```


