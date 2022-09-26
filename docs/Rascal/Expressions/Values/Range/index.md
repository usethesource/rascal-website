---
title: Range
keywords:
  - "["
  - ".."
  - "]"
---

#### Synopsis

Numeric range of values.

#### Syntax

*  `[ Exp₁ .. Exp₃ ]`
*  `[ Exp₁, Exp₂ .. Exp₃ ]`

#### Description

Ranges are a shorthand for describing lists of integers from 
_Exp_₁ up to (exclusive) _Exp_₃ with increments of 1.
When _Exp_₂ is present it is taken as the second element of the list
and _Exp_₂ - _Exp_₁ is used as increment for the subsequent list elements.

A range with integer expressions is identical to a list [Slice](../../../../Rascal/Expressions/Values/List/Slice/index.md).
However, a range may also contain numeric expressions that are not integers.

#### Examples


```rascal-shell 
rascal>[1 .. 10];
list[int]: [1,2,3,4,5,6,7,8,9]
rascal>[1, 3 .. 10];
list[int]: [1,3,5,7,9]
rascal>[0.5, 3.2 .. 10];
list[real]: [0.5,3.2,5.9,8.6]
rascal>[1, -2 .. -10];
list[int]: [1,-2,-5,-8]
```

#### Benefits

Ranges are mostly used to loop over ranges of integers.

#### Pitfalls

In some cases ranges are empty where one could have expected at least one element:

```rascal-shell 
rascal>[1, 3 .. -10];
list[int]: []
```


