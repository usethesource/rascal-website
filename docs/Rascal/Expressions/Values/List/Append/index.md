---
title: List Append
keywords:
  - "+"

---

#### Synopsis

Append an element at the end of a list

#### Types

//

| `Exp₁`     |  `Exp₂`     | `Exp₁ + Exp₂`       |
| --- | --- | --- |
| `list[T₁]` |  `T₂`       | `list[lub(T₁,T₂)]`  |


#### Description

The operator `+` appends an element at the end of a list. The `+` is one of those [Operators](../../../../../Rascal/Expressions/Operators/index.md) which are overloaded. It can also mean [Insert](../../../../../Rascal/Expressions/Values/List/Insert/index.md) or [Concatenation](../../../../../Rascal/Expressions/Values/List/Concatenation/index.md) for example.

#### Examples


```rascal-shell 
rascal>[] + 1;
list[int]: [1]
rascal>[1] + 2;
list[int]: [1,2]
```

.Benefits:

.Pitfalls:

* If both operands of `+` are a list, then it acts as [Concatenation](../../../../../Rascal/Expressions/Values/List/Concatenation/index.md) 

This is concatenation:

```rascal-shell ,continue
rascal>[1] + [2]
list[int]: [1,2]
```

To append a list to a list, use extra brackets:

```rascal-shell ,continue
rascal>[1] + [[2]]
list[value]: [
  1,
  [2]
]
```


