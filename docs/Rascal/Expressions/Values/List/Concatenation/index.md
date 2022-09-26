---
title: List Concatenation
keywords:
  - "+"

---

#### Synopsis

Concatenate two lists.

#### Syntax

`Exp₁ + Exp₂`

#### Types

//

| `Exp₁`     |  `Exp₂`     | `Exp₁ + Exp₂`       |
| --- | --- | --- |
| `list[T₁]` |  `list[T₂]` | `list[lub(T₁,T₂)]`  |



#### Description

The `+` operator concatenates the elements of the two lists in order of appearance. 

Note that the same operator is overloaded for [Insert](../../../../../Rascal/Expressions/Values/List/Insert/index.md) and [Append](../../../../../Rascal/Expressions/Values/List/Append/index.md).

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


