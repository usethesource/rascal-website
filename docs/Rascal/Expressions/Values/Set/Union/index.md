---
title: Set Union
keywords:
  - "+"

---

#### Synopsis

Union of two set values.

#### Types

| `Exp₁`    |  `Exp₂`    | `Exp₁ + Exp₂`       |
| --- | --- | --- |
| `set[T₁]` |  `set[T₂]` | `set[lub(T₁,T₂)]`   |


#### Description

The `+` operator computes set union if both operands are sets. If one of the operands is not a set, it acts as [Insert](../../../../../Rascal/Expressions/Values/Set/Insert/index.md) instead.

#### Examples


```rascal-shell 
rascal>{1, 2, 3} + {4, 5, 6};
set[int]: {5,1,3,2,4,6}
rascal>{1,2,3} + {2,3,4};
set[int]: {1,3,2,4}
rascal>{1, 2, 3} + {3};
set[int]: {1,3,2}
rascal>{2} + { 2, 3, 4};
set[int]: {3,2,4}
```


