---
title: Tuple GreaterThan
keywords:
  - ">"

---

#### Synopsis

Greater than operator on tuple values.

#### Syntax

`Exp₁ > Exp₂`

#### Types


| `Exp₁`                      |  `Exp₂`                      | `Exp₁ > Exp₂`  |
| --- | --- | --- |
| `tuple[ T₁₁, T₁₂, ... ]` |  `tuple[ T₂₁, T₂₂, ... ]` | `bool`                |


#### Description

Yields `true` if 

*  both tuples are not equal, and
*  the left-most element in the tuple value of _Exp₁_ that differs from the corresponding element in the tuple 
value of _Exp_₂ is greater than that element in _Exp_₂.


Otherwise the result if `false`.

#### Examples


```rascal-shell 
rascal><1, "def", true> > <1, "abc", true>;
bool: true
```


