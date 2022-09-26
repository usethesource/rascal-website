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

`{ Exp₁, Exp₂, ... | Gen₁, Gen₂, ... }`

#### Types


| `Exp₁` | `Exp₂` | ... | `{ Exp₁, Exp₂, ... \| Gen₁, Gen₂, ... }`  |
| --- | --- | --- | --- | --- |
| `T₁`   | `T₂`   | ... | `set[ lub( T₁, T₂, ... ) ]`                    |


#### Description

A set comprehension consists of a number of contributing expressions _Exp_₁, _Exp_₂, ... and a number of
generators _Gen_₁, _Gen_₂, _Gen_₃, ... that are evaluated as described in [Comprehensions](../../../../../Rascal/Expressions/Comprehensions/index.md).

#### Examples


```rascal-shell 
rascal>{ N * N | int N <- [0 .. 10]};
set[int]: {16,64,1,9,81,4,0,49,36,25}
rascal>{ N * N | int N <- [0 .. 10], N % 3 == 0};
set[int]: {9,81,0,36}
```


