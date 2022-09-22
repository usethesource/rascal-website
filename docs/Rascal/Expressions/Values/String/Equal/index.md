---
title: String Equal
keywords:
  - "=="

---

#### Synopsis

Equality operator on string values.

#### Syntax

`Exp<sub>1</sub> == Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>` | `Exp<sub>2</sub>` | `Exp<sub>1</sub> == Exp<sub>2</sub>`  |
| --- | --- | --- |
| `str`     |  `str`    | `bool`                |


#### Description

Yields `true` if both arguments are identical and `false` otherwise.

#### Examples


```rascal-shell
rascal>"abc" == "abc";
bool: true
rascal>"abc" == "defghi";
bool: false
```


