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

*  `[ Exp<sub>1</sub> .. Exp<sub>3</sub> ]`
*  `[ Exp<sub>1</sub>, Exp<sub>2</sub> .. Exp<sub>3</sub> ]`

#### Types

#### Function

#### Description

Ranges are a shorthand for describing lists of integers from 
_Exp_<sub>1</sub> up to (exclusive) _Exp_<sub>3</sub> with increments of 1.
When _Exp_<sub>2</sub> is present it is taken as the second element of the list
and _Exp_<sub>2</sub> - _Exp_<sub>1</sub> is used as increment for the subsequent list elements.

A range with integer expressions is identical to a list [Slice](/docs//Rascal/Expressions/Values/List/Slice).
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


