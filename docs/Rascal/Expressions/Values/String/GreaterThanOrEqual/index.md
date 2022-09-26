---
title: String GreaterThanOrEqual
keywords:
  - ">="

---

#### Synopsis

Greater than or equal operator on string values.

#### Syntax

`Exp₁ >= Exp₂`

#### Types


| `Exp₁` | `Exp₂` | `Exp₁ >= Exp₂`  |
| --- | --- | --- |
| `str`     |  `str`    | `bool`                |


#### Description

Yields `true` if the string value of _Exp_₁ is lexicographically greater
than the string value of _Exp_₂ or if both strings are equal, and `false` otherwise.

#### Examples


```rascal-shell 
rascal>"abc" >= "abc";
bool: true
rascal>"abcdef" >= "abc";
bool: true
rascal>"defghi" >= "abcdef";
bool: true
rascal>"a" >= "abc";
bool: false
```


