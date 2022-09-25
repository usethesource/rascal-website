---
title: String NotEqual
keywords:
  - "!="
---

#### Synopsis

Not equal operator on string values.

#### Syntax

`Exp~1~ != Exp~2~`

#### Types


| `Exp~1~` | `Exp~2~` | `Exp~1~ != Exp~2~`  |
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


