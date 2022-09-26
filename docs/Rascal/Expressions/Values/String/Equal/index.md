---
title: String Equal
keywords:
  - "=="

---

#### Synopsis

Equality operator on string values.

#### Syntax

`Exp₁ == Exp₂`

#### Types


| `Exp₁` | `Exp₂` | `Exp₁ == Exp₂`  |
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


