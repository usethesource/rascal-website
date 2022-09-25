---
title: Tuple Equal
keywords:
  - "=="

---

#### Synopsis

Equality operator on tuple values.

#### Syntax

`Exp~1~ == Exp~2~`

#### Types


| `Exp~1~`                      |  `Exp~2~`                      | `Exp~1~ == Exp~2~` |
| --- | --- | --- |
| `tuple[ T~11~, T~12~, ... ]` |  `tuple[ T~21~, T~22~, ... ]` | `bool`              |


#### Description

Yields `true` if both tuples are identical and `false` otherwise.

#### Examples


```rascal-shell 
rascal><1, "abc", true> == <1, "abc", true>;
bool: true
```


