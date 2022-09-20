---
title: Set Difference
keywords:
  - "-"
---

#### Synopsis

The difference between two sets.

#### Syntax

`Exp<sub>1</sub> - Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>`    |  `Exp<sub>2</sub>`     | `Exp<sub>1</sub> - Exp<sub>2</sub>`        |
| --- | --- | --- |
| `set[T<sub>1</sub>]` |  `set[T<sub>2</sub>]`  | `set[lub(T<sub>1</sub>,T<sub>2</sub>)]`    |
| `set[T<sub>1</sub>]` |  `T<sub>2</sub>`       | `set[lub(T<sub>1</sub>,T<sub>2</sub>)]`    |



#### Function

#### Description

If both _Exp_<sub>1</sub> and _Exp_<sub>2</sub> have a set as value, the result is the difference of these two set values. 
If _Exp_<sub>2</sub> does not have a set as value, it is first converted to a set before the difference is computed.
The difference is computed by removing all elements of the second set from the first set.

#### Examples


```rascal-shell
rascal>{1, 2, 3, 4} - {1, 2, 3};
set[int]: {4}
rascal>{1, 2, 3, 4} - {3};
set[int]: {1,2,4}
rascal>{1, 2, 3, 4} - 3;
set[int]: {1,2,4}
rascal>{1, 2, 3, 4} - {5, 6, 7};
set[int]: {1,3,2,4}
```

#### Benefits


