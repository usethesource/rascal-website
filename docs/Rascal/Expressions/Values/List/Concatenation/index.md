---
title: List Concatenation
keywords:
  - "+"

---

#### Synopsis

Concatenate two lists.

#### Syntax

`Exp<sub>1</sub> + Exp<sub>2</sub>`

#### Types

//

| `Exp<sub>1</sub>`     |  `Exp<sub>2</sub>`     | `Exp<sub>1</sub> + Exp<sub>2</sub>`       |
| --- | --- | --- |
| `list[T<sub>1</sub>]` |  `list[T<sub>2</sub>]` | `list[lub(T<sub>1</sub>,T<sub>2</sub>)]`  |



#### Function

#### Description

The `+` operator concatenates the elements of the two lists in order of appearance. 

Note that the same operator is overloaded for [Insert](/docs//Rascal/Expressions/Values/List/Insert) and [Append](/docs//Rascal/Expressions/Values/List/Append).

#### Examples


```rascal-shell
rascal>[1, 2, 3] + [4, 5, 6];
list[int]: [1,2,3,4,5,6]
rascal>[] + [1]
list[int]: [1]
rascal>[1] + []
list[int]: [1]
rascal>[1] + [2] + [3]
list[int]: [1,2,3]
```

And overloaded usage for insert and append looks like:

```rascal-shell
rascal>1 + []
list[int]: [1]
rascal>[] + 1
list[int]: [1]
```

#### Benefits


