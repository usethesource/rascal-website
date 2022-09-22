---
title: Set StrictSuperSet
keywords:
  - ">"

---

#### Synopsis

Strict superset operator on set values.

#### Syntax

`Exp<sub>1</sub> > Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>`    |  `Exp<sub>2</sub>`    | `Exp<sub>1</sub> > Exp<sub>2</sub>`  |
| --- | --- | --- |
| `set[T<sub>1</sub>]` |  `set[T<sub>2</sub>]` | `bool`               |


#### Description

Yields `true` if the value of Exp<sub>1</sub> is a strict superset of the value of Exp<sub>2</sub>, and `false` otherwise.

#### Examples


```rascal-shell
rascal>{1, 2, 3, 4} > {3, 2, 1};
bool: true
rascal>{1, 2, 3, 4} > {4, 3, 2, 1};
bool: false
```


