---
title: List Insert
keywords:
  - "+"

---

#### Synopsis

add an element in front of a list

#### Types

//

| `Exp₁`     |  `Exp₂`     | `Exp₁ + Exp₂`       |
| --- | --- | --- |
| `T₁`       |  `list[T₂]` | `list[lub(T₁,T₂)]`  |


#### Description

The `+` operator can insert an element in front of a list. Note that `+` is one of the [Operators](../../../../../Rascal/Expressions/Operators/index.md) that is overloaded, it is also [Concatenation](../../../../../Rascal/Expressions/Values/List/Concatenation/index.md) and [Append](../../../../../Rascal/Expressions/Values/List/Append/index.md) for example.

#### Examples


```rascal-shell 
rascal>1 + []
list[int]: [1]
rascal>1 + [2]
list[int]: [1,2]
rascal>1 + [2,3]
list[int]: [1,2,3]
```

#### Pitfalls

*  If the first operand before the `+` is a list, `+` acts as [Concatenation](../../../../../Rascal/Expressions/Values/List/Concatenation/index.md) and not as [Insert](../../../../../Rascal/Expressions/Values/List/Insert/index.md)

This is concatenation:

```rascal-shell ,continue
rascal>[1] + [2]
list[int]: [1,2]
```
To insert a list as an element, use extra brackets:

```rascal-shell ,continue
rascal>[[1]] + [2]
list[value]: [
  [1],
  2
]
```


