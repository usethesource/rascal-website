---
title: String LessThanOrEqual
keywords:
  - "<="

---

#### Synopsis

Less than or equal operator on string values.

#### Syntax

`Exp₁ <= Exp₂`

#### Types


| `Exp₁` | `Exp₂` | `Exp₁ <= Exp₂`  |
| --- | --- | --- |
| `str`     |  `str`    | `bool`                |


#### Description

Yields `true` if the string value of _Exp_₁ is lexicographically less
than the string value of _Exp_₂ or if both string are equal, and `false` otherwise.

#### Examples


```rascal-shell 
rascal>"abc" <= "abc";
bool: true
rascal>"abc" <= "abcdef";
bool: true
rascal>"abc" <= "defghi";
bool: true
rascal>"abc" <= "a";
bool: false
```


