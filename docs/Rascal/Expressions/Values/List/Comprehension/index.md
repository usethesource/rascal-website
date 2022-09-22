---
title: List Comprehension
keywords:
  - "["
  - "|"
  - "]"

---

#### Synopsis

A list comprehension generates a list value.

#### Syntax

`[ Exp<sub>1</sub>, Exp<sub>2</sub>, ... | Gen<sub>1</sub>, Gen<sub>2</sub>, ... ]`

#### Types


| `Exp<sub>1</sub>` | `Exp<sub>2</sub>` | ... | `[ Exp<sub>1</sub>, Exp<sub>2</sub>, ... \| Gen<sub>1</sub>, Gen<sub>2</sub>, ... ]`  |
| --- | --- | --- | --- | --- |
| `T<sub>1</sub>`   | `T<sub>2</sub>`   | ... | `list[ lub( T<sub>1</sub>, T<sub>2</sub>, ... ) ]`                   |


#### Description

A list comprehension consists of a number of contributing expressions _Exp_<sub>1</sub>, _Exp_<sub>2</sub>, ... and a number of
generators _Gen_<sub>1</sub>, _Gen_<sub>2</sub>, _Gen_<sub>3</sub>, ... that are evaluated as described in [Comprehensions](../../../../../Rascal/Expressions/Comprehensions).

#### Examples

Computing a list of squares of the numbers from 0 to 10 that are divisible by 3:

```rascal-shell
rascal>[n * n | int n <- [0 .. 10], n % 3 == 0];
list[int]: [0,9,36,81]
```
But we can also include the relevant `n` in the resulting list:

```rascal-shell
rascal>[n, n * n | int n <- [0 .. 10], n % 3 == 0];
list[int]: [0,0,3,9,6,36,9,81]
```


