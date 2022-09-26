---
title: String NotEqual
keywords:
  - "!="
---

#### Synopsis

Not equal operator on string values.

#### Syntax

`Exp₁ != Exp₂`

#### Types


| `Exp₁` | `Exp₂` | `Exp₁ != Exp₂`  |
| --- | --- | --- |
| `str`     |  `str`    | `bool`                |


#### Description

Yields `true` if both arguments are not identical and `false` otherwise.

#### Examples


```rascal-shell 
rascal>"abc" != "defghi";
bool: true
rascal>"abc" != "abc";
bool: false
```


