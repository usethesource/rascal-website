---
title: List Splice
keywords:
  - "*"

---

#### Synopsis

Splice the elements of a list in an enclosing list.

#### Types

//


|`Exp` | `Exp<sub>1</sub>`|  `Exp~n~` | `[Exp<sub>1</sub>, ..., Exp, ..., Exp~n~]`  |
| --- | --- | --- | --- |
|`T`   | `T<sub>1</sub>`  |  `T~n~`   | `list[lub(T<sub>1</sub>, ..., T, ...,T~n~)]`     |


#### Description

The operator `*` splices the elements of a list in an enclosing list.

#### Examples

Consider the following list in which the list `[10, 20, 30]` occurs as list element. It has as type `list[value]`:

```rascal-shell
rascal>[1, 2, [10, 20, 30], 3, 4];
list[value]: [
  1,
  2,
  [10,20,30],
  3,
  4
]
```
The effect of splicing the same list element in the enclosing list gives a flat list of type `list[int]`:

```rascal-shell
rascal>[1, 2, *[10, 20, 30], 3, 4];
list[int]: [1,2,10,20,30,3,4]
```
The same example can be written as:

```rascal-shell
rascal>L = [10, 20, 30];
list[int]: [10,20,30]
rascal>[1, 2, *L, 3, 4];
list[int]: [1,2,10,20,30,3,4]
```

#### Benefits

in which nested lists are handled.


