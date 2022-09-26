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

`[ Exp₁, Exp₂, ... | Gen₁, Gen₂, ... ]`

#### Types


| `Exp₁` | `Exp₂` | ... | `[ Exp₁, Exp₂, ... \| Gen₁, Gen₂, ... ]`  |
| --- | --- | --- | --- | --- |
| `T₁`   | `T₂`   | ... | `list[ lub( T₁, T₂, ... ) ]`                   |


#### Description

A list comprehension consists of a number of contributing expressions _Exp_₁, _Exp_₂, ... and a number of
generators _Gen_₁, _Gen_₂, _Gen_₃, ... that are evaluated as described in [Comprehensions](../../../../../Rascal/Expressions/Comprehensions/index.md).

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


