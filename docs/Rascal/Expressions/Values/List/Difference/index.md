---
title: List Difference
keywords:
  - "-"
---

#### Synopsis

The difference between two lists.

#### Syntax

`Exp<sub>1</sub> - Exp<sub>2</sub>`

#### Types

//

| `Exp<sub>1</sub>`     |  `Exp<sub>2</sub>`     | `Exp<sub>1</sub> - Exp<sub>2</sub>`        |
| --- | --- | --- |
| `list[T<sub>1</sub>]` |  `list[T<sub>2</sub>]` | `list[lub(T<sub>1</sub>,T<sub>2</sub>)]`   |
| `list[T<sub>1</sub>]` |  `T<sub>2</sub>`       | `list[lub(T<sub>1</sub>,T<sub>2</sub>)]`   |



#### Function

#### Description

If both _Exp_<sub>1</sub> and _Exp_<sub>2</sub> have a list as value, the result is the difference of these two list values. 
If _Exp_<sub>2</sub> does not have a list as value, it is first converted to a list before the difference is computed.
The difference is computed by taking the successive elements of the second list and
removing the first occurrence of that element in the first list. 

#### Examples


```rascal-shell
rascal>[1, 2, 3, 4] - [1, 2, 3];
list[int]: [4]
rascal>[1, 2, 3, 4] - [3];
list[int]: [1,2,4]
rascal>[1, 2, 3, 4] - 3;
list[int]: [1,2,4]
rascal>[1, 2, 3, 4] - [5, 6, 7];
list[int]: [1,2,3,4]
rascal>[1, 2, 3, 1, 2, 3] - [1];
list[int]: [2,3,1,2,3]
rascal>[1, 2, 3, 1, 2, 3] - [1, 2];
list[int]: [3,1,2,3]
```

#### Benefits


