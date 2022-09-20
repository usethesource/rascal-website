---
title: Set SubSet
keywords:
  - "<="

---

#### Synopsis

Subset operator on set values.

#### Syntax

`Exp<sub>1</sub> <= Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>`    |  `Exp<sub>2</sub>`    | `Exp<sub>1</sub> <= Exp<sub>2</sub>`   |
| --- | --- | --- |
| `set[T<sub>1</sub>]` |  `set[T<sub>2</sub>]` | `bool`                 |


#### Function

#### Description

Yields `true` if the value of SetExp<sub>1</sub> is a subset of the value of SetExp<sub>2</sub>, and `false` otherwise.

#### Examples


```rascal-shell
rascal>{1, 2, 3} <= {1, 2, 3, 4};
bool: true
rascal>{1, 2, 3} <= {1, 2, 3};
bool: true
```

#### Benefits


