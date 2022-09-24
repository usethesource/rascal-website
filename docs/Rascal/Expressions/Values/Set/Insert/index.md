---
title: Set Insert
keywords:
  - "+"

---

#### Synopsis

Add an element to a set.

#### Syntax

`Exp~1~ + Exp~2~`

#### Types

| `Exp~1~`    |  `Exp~2~`    | `Exp~1~ + Exp~2~`       |
| --- | --- | --- |
| `set[T~1~]` |  `T~2~`      | `set[lub(T~1~,T~2~)]`   |
| `T~1~`      |  `set[T~2~]` | `set[lub(T~1~,T~2~)]`   |

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

*  if both operands of `+` are a set then it acts as [Union](../../../../../Rascal/Expressions/Values/Set/Union).

