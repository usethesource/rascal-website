---
title: List Concatenation
keywords:
  - "+"

---

#### Synopsis

Concatenate two lists.

#### Syntax

`Exp~1~ + Exp~2~`

#### Types

//

| `Exp~1~`     |  `Exp~2~`     | `Exp~1~ + Exp~2~`       |
| --- | --- | --- |
| `list[T~1~]` |  `list[T~2~]` | `list[lub(T~1~,T~2~)]`  |

#### Description

The `+` operator concatenates the elements of the two lists in order of appearance. 

Note that the same operator is overloaded for [Insert](../../../../../Rascal/Expressions/Values/List/Insert) and [Append](../../../../../Rascal/Expressions/Values/List/Append).

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

