---
title: String Concatenation
keywords:
  - "+"

---

#### Synopsis

Concatenate two strings.

#### Syntax

`Exp₁ + Exp₂`

#### Types


| `Exp₁` | `Exp₂` | `Exp₁ + Exp₂`  |
| --- | --- | --- |
| `str`     | `str`     | `str`                |


#### Description

Concatenates the string values of _Exp_₁ and _Exp_₂.

Note that to concatenate other types of values into a string, you can use [String](../../../../../Rascal/Expressions/Values/String/index.md) interpolation.

#### Examples


```rascal-shell 
rascal>"abc" + "def";
str: "abcdef"
```


