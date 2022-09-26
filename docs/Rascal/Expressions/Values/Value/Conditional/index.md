---
title: Value Conditional
keywords:
  - "?"
  - ":"

---

#### Synopsis

Conditional expression on values.

#### Syntax

`Exp₁ ? Exp₂ : Exp₃`

#### Types


| `Exp₁`  | `Exp₂` | `Exp₃` | `Exp₁ ? Exp₂ : Exp₃`  |
| --- | --- | --- | --- |
|   `bool`   | `T₂`   | `T₃`   | `lub(T₂,T₃)`             |


#### Description

Yields the value of _Exp_₂ if the value of _Exp_₁ is `true` and the value of _Exp_₃ otherwise.
The result type is the _least upper bound_ (also known as `lub`, see [StaticTyping](../../../../../Rascal/Declarations/StaticTyping/index.md)) of the types of _Exp_₂ and _Exp_₃.

#### Examples


```rascal-shell 
rascal>( 3 > 2 ) ? 30 : 40;
int: 30
rascal>( 3 < 2 ) ? "abc" : {3, 4};
set[int]: {3,4}
```


