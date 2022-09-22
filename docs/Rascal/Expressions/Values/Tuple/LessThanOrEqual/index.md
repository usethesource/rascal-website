---
title: Tuple LessThanOrEqual
keywords:
  - "<="

---

#### Synopsis

Less than or equal operator on tuple values.

#### Syntax

`Exp<sub>1</sub> <= Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>`                      |  `Exp<sub>2</sub>`                      | `Exp<sub>1</sub> <= Exp<sub>2</sub>`  |
| --- | --- | --- |
| `tuple[ T<sub>11</sub>, T<sub>12</sub>, ... ]` |  `tuple[ T<sub>21</sub>, T<sub>22</sub>, ... ]` | `bool`                |


#### Description

Yields `true` if 

*  both tuples are equal, or
*  the left-most element in the tuple value of _Exp<sub>1</sub>_ that differs from the corresponding element in the tuple 
value of _Exp_<sub>2</sub> is less than that element in _Exp_<sub>2</sub>.


Otherwise the result if `false`.

#### Examples


```rascal-shell
rascal><1, "abc", true> <= <1, "abc", true>;
bool: true
rascal><1, "abc", true> <= <1, "def", true>;
bool: true
```


