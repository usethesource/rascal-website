---
title: String GreaterThan
keywords:
  - ">"

---

#### Synopsis

Greater than operator on string values.

#### Syntax

`Exp<sub>1</sub> > Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>` | `Exp<sub>2</sub>` | `Exp<sub>1</sub> > Exp<sub>2</sub>`  |
| --- | --- | --- |
| `str`     |  `str`    | `bool`                |


#### Description

Yields `true` if the string value of _Exp_<sub>1</sub> is strictly lexicographically greater
than the string value of _Exp_<sub>2</sub>, and `false` otherwise.

#### Examples


```rascal-shell
rascal>"abcdef" > "abc";
bool: true
rascal>"defghi" > "abcdef";
bool: true
rascal>"a" > "abc";
bool: false
```


