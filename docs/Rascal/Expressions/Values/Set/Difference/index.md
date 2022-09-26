---
title: Set Difference
keywords:
  - "-"
---

#### Synopsis

The difference between two sets.

#### Syntax

`Exp₁ - Exp₂`

#### Types


| `Exp₁`    |  `Exp₂`     | `Exp₁ - Exp₂`        |
| --- | --- | --- |
| `set[T₁]` |  `set[T₂]`  | `set[lub(T₁,T₂)]`    |
| `set[T₁]` |  `T₂`       | `set[lub(T₁,T₂)]`    |



#### Description

If both _Exp_₁ and _Exp_₂ have a set as value, the result is the difference of these two set values. 
If _Exp_₂ does not have a set as value, it is first converted to a set before the difference is computed.
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


