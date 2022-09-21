---
title: Set Comprehension
keywords:
  - "{"
  - "|"
  - "}"
---

#### Synopsis

A set comprehension generates a set value.

#### Syntax

`{ Exp<sub>1</sub>, Exp<sub>2</sub>, ... | Gen<sub>1</sub>, Gen<sub>2</sub>, ... }`

#### Types


| `Exp<sub>1</sub>` | `Exp<sub>2</sub>` | ... | `{ Exp<sub>1</sub>, Exp<sub>2</sub>, ... \| Gen<sub>1</sub>, Gen<sub>2</sub>, ... }`  |
| --- | --- | --- | --- | --- |
| `T<sub>1</sub>`   | `T<sub>2</sub>`   | ... | `set[ lub( T<sub>1</sub>, T<sub>2</sub>, ... ) ]`                    |


#### Function

#### Description

A set comprehension consists of a number of contributing expressions _Exp_<sub>1</sub>, _Exp_<sub>2</sub>, ... and a number of
generators _Gen_<sub>1</sub>, _Gen_<sub>2</sub>, _Gen_<sub>3</sub>, ... that are evaluated as described in [Comprehensions](/docs//Rascal/Expressions/Comprehensions).

#### Examples


```rascal-shell
rascal>{ N * N | int N <- [0 .. 10]};
set[int]: {16,64,1,9,81,4,0,49,36,25}
rascal>{ N * N | int N <- [0 .. 10], N % 3 == 0};
set[int]: {9,81,0,36}
```

#### Benefits


