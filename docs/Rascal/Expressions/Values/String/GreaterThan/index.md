---
title: String GreaterThan
keywords:
  - ">"

---

#### Synopsis

Greater than operator on string values.

#### Syntax

`Exp₁ > Exp₂`

#### Types


| `Exp₁` | `Exp₂` | `Exp₁ > Exp₂`  |
| --- | --- | --- |
| `str`     |  `str`    | `bool`                |


#### Description

Yields `true` if the string value of _Exp_₁ is strictly lexicographically greater
than the string value of _Exp_₂, and `false` otherwise.

#### Examples


```rascal-shell 
rascal>"abcdef" > "abc";
bool: true
rascal>"defghi" > "abcdef";
bool: true
rascal>"a" > "abc";
bool: false
```


