---
title: Location GreaterThan
keywords:
  - ">"

---

#### Synopsis

The greater than operator on location values.

#### Syntax

`Exp~1~ > Exp~2~`

#### Types


| `Exp~1~` | `Exp~2~` | `Exp~1~ > Exp~2~`  |
| --- | --- | --- |
| `loc`     |  `loc`    | `bool`                |


#### Function

#### Description

Yields `true` if the location value of _Exp_~1~ strictly textually encloses
the location value of _Exp_~2~, and `false` otherwise. 

* If the URI's are _not_ the same, then it always returns `false`
* Otherwise it is checked whether or not the offset of `Exp~1` starts before or on
the offset of `Exp~2` _and_ the offset plus the length of `Exp~1` is larger than or equal
to the offset plus the length of `Exp~2`.

#### Examples

#### Benefits

#### Pitfalls

