---
title: String NotEqual
keywords:
  - "!="
---

#### Synopsis

Not equal operator on string values.

#### Syntax

`Exp<sub>1</sub> != Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>` | `Exp<sub>2</sub>` | `Exp<sub>1</sub> != Exp<sub>2</sub>`  |
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


