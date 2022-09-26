---
title: String LessThan
keywords:
  - "<"

---

#### Synopsis

Less than operator on string values.

#### Syntax

`Exp₁ < Exp₂`

#### Types


| `Exp₁` | `Exp₂` | `Exp₁ < Exp₂`  |
| --- | --- | --- |
| `str`     |  `str`    | `bool`                |


#### Description

Yields `true` if the string value of _Exp_₁ is strictly lexicographically less
than the string value of _Exp_₂, and `false` otherwise.

#### Examples


```rascal-shell 
rascal>"abc" < "abcdef";
bool: true
rascal>"abc" < "defghi";
bool: true
rascal>"abc" < "a";
bool: false
```


