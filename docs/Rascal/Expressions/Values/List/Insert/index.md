---
title: List Insert
keywords:
  - "+"

---

#### Synopsis

add an element in front of a list

#### Types

//

| `Exp<sub>1</sub>`     |  `Exp<sub>2</sub>`     | `Exp<sub>1</sub> + Exp<sub>2</sub>`       |
| --- | --- | --- |
| `T<sub>1</sub>`       |  `list[T<sub>2</sub>]` | `list[lub(T<sub>1</sub>,T<sub>2</sub>)]`  |


#### Description

The `+` operator can insert an element in front of a list. Note that `+` is one of the [Operators](../../../../../Rascal/Expressions/Operators) that is overloaded, it is also [Concatenation](../../../../../Rascal/Expressions/Values/List/Concatenation) and [Append](../../../../../Rascal/Expressions/Values/List/Append) for example.

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

*  If the first operand before the `+` is a list, `+` acts as [Concatenation](../../../../../Rascal/Expressions/Values/List/Concatenation) and not as [Insert](../../../../../Rascal/Expressions/Values/List/Insert)

This is concatenation:

```rascal-shell
rascal>[1] + [2]
list[int]: [1,2]
```
To insert a list as an element, use extra brackets:

```rascal-shell
rascal>[[1]] + [2]
list[value]: [
  [1],
  2
]
```


