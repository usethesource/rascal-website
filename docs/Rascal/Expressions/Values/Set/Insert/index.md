---
title: Set Insert
keywords:
  - "+"

---

#### Synopsis

Add an element to a set.

#### Syntax

`Exp₁ + Exp₂`

#### Types


| `Exp₁`    |  `Exp₂`    | `Exp₁ + Exp₂`       |
| --- | --- | --- |
| `set[T₁]` |  `T₂`      | `set[lub(T₁,T₂)]`   |
| `T₁`      |  `set[T₂]` | `set[lub(T₁,T₂)]`   |


#### Description

The `+` operator will add elements to sets.

#### Examples


```rascal-shell 
rascal>{1, 2, 3} + 4;
set[int]: {1,3,2,4}
rascal>1 + { 2, 3, 4};
set[int]: {1,3,2,4}
rascal>{1} + 1;
set[int]: {1}
rascal>1 + {1};
set[int]: {1}
```

#### Pitfalls

*  if both operands of `+` are a set then it acts as [Union](../../../../../Rascal/Expressions/Values/Set/Union/index.md).


