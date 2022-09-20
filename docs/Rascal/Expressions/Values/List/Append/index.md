---
title: List Append
keywords:
  - "+"

---

#### Synopsis

Append an element at the end of a list

#### Syntax

#### Types

//

| `Exp<sub>1</sub>`     |  `Exp<sub>2</sub>`     | `Exp<sub>1</sub> + Exp<sub>2</sub>`       |
| --- | --- | --- |
| `list[T<sub>1</sub>]` |  `T<sub>2</sub>`       | `list[lub(T<sub>1</sub>,T<sub>2</sub>)]`  |


#### Function

#### Description

The operator `+` appends an element at the end of a list. The `+` is one of those [Operators](/Rascal/Expressions/Operators) which are overloaded. It can also mean [Insert](/Rascal/Expressions/Values/List/Insert) or [Concatenation](/Rascal/Expressions/Values/List/Concatenation) for example.

#### Examples


```rascal-shell
rascal>[] + 1;
list[int]: [1]
rascal>[1] + 2;
list[int]: [1,2]
```

.Benefits:

.Pitfalls:

* If both operands of `+` are a list, then it acts as [Concatenation](/Rascal/Expressions/Values/List/Concatenation) 

This is concatenation:

```rascal-shell
rascal>[1] + [2]
list[int]: [1,2]
```

To append a list to a list, use extra brackets:

```rascal-shell
rascal>[1] + [[2]]
list[value]: [
  1,
  [2]
]
```


