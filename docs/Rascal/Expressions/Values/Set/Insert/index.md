---
title: Set Insert
keywords:
  - "+"

---

#### Synopsis

Add an element to a set.

#### Syntax

`Exp<sub>1</sub> + Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>`    |  `Exp<sub>2</sub>`    | `Exp<sub>1</sub> + Exp<sub>2</sub>`       |
| --- | --- | --- |
| `set[T<sub>1</sub>]` |  `T<sub>2</sub>`      | `set[lub(T<sub>1</sub>,T<sub>2</sub>)]`   |
| `T<sub>1</sub>`      |  `set[T<sub>2</sub>]` | `set[lub(T<sub>1</sub>,T<sub>2</sub>)]`   |


#### Function

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

#### Benefits

#### Pitfalls

*  if both operands of `+` are a set then it acts as [Union](/docs/Rascal/Expressions/Values/Set/Union).


