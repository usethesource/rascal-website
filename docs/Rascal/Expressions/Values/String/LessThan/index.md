---
title: String LessThan
keywords:
  - "<"

---

#### Synopsis

Less than operator on string values.

#### Syntax

`Exp~1~ < Exp~2~`

#### Types

| `Exp~1~` | `Exp~2~` | `Exp~1~ < Exp~2~`  |
| --- | --- | --- |
| `str`     |  `str`    | `bool`                |

#### Description

Yields `true` if the string value of _Exp_~1~ is strictly lexicographically less
than the string value of _Exp_~2~, and `false` otherwise.

#### Examples

```rascal-shell 
rascal>"abc" < "abcdef";
bool: true
rascal>"abc" < "defghi";
bool: true
rascal>"abc" < "a";
bool: false
```

