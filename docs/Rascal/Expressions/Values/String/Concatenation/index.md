---
title: String Concatenation
keywords:
  - "+"

---

#### Synopsis

Concatenate two strings.

#### Syntax

`Exp<sub>1</sub> + Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>` | `Exp<sub>2</sub>` | `Exp<sub>1</sub> + Exp<sub>2</sub>`  |
| --- | --- | --- |
| `str`     | `str`     | `str`                |


#### Function

#### Description

Concatenates the string values of _Exp_<sub>1</sub> and _Exp_<sub>2</sub>.

Note that to concatenate other types of values into a string, you can use [String](/Rascal/Expressions/Values/String) interpolation.

#### Examples


```rascal-shell
rascal>"abc" + "def";
str: "abcdef"
```

#### Benefits


