---
title: Set Union
keywords:
  - "+"

---

#### Synopsis

Union of two set values.

#### Types

| `Exp<sub>1</sub>`    |  `Exp<sub>2</sub>`    | `Exp<sub>1</sub> + Exp<sub>2</sub>`       |
| --- | --- | --- |
| `set[T<sub>1</sub>]` |  `set[T<sub>2</sub>]` | `set[lub(T<sub>1</sub>,T<sub>2</sub>)]`   |


#### Description

The `+` operator computes set union if both operands are sets. If one of the operands is not a set, it acts as [Insert](../../../../../Rascal/Expressions/Values/Set/Insert) instead.

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


