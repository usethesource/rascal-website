---
title: Set Equal
keywords:
  - "=="

---

#### Synopsis

Equal operator on set values.

#### Syntax

`Exp<sub>1</sub> == Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>`    |  `Exp<sub>2</sub>`    | `Exp<sub>1</sub> == Exp<sub>2</sub>`  |
| --- | --- | --- |
| `set[T<sub>1</sub>]` |  `set[T<sub>2</sub>]` | `bool`                |


#### Function

#### Description

Yields `true` if both arguments are equal sets and `false` otherwise.

#### Examples


```rascal-shell
rascal>{1, 2, 3} == {3, 2, 1};
bool: true
rascal>{1, 2, 3} == {1, 2};
bool: false
```

#### Benefits


