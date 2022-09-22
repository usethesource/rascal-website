---
title: String GreaterThanOrEqual
keywords:
  - ">="

---

#### Synopsis

Greater than or equal operator on string values.

#### Syntax

`Exp<sub>1</sub> >= Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>` | `Exp<sub>2</sub>` | `Exp<sub>1</sub> >= Exp<sub>2</sub>`  |
| --- | --- | --- |
| `str`     |  `str`    | `bool`                |


#### Description

Yields `true` if the string value of _Exp_<sub>1</sub> is lexicographically greater
than the string value of _Exp_<sub>2</sub> or if both strings are equal, and `false` otherwise.

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


