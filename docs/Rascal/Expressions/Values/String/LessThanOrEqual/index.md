---
title: String LessThanOrEqual
keywords:
  - "<="

---

#### Synopsis

Less than or equal operator on string values.

#### Syntax

`Exp<sub>1</sub> <= Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>` | `Exp<sub>2</sub>` | `Exp<sub>1</sub> <= Exp<sub>2</sub>`  |
| --- | --- | --- |
| `str`     |  `str`    | `bool`                |


#### Description

Yields `true` if the string value of _Exp_<sub>1</sub> is lexicographically less
than the string value of _Exp_<sub>2</sub> or if both string are equal, and `false` otherwise.

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


