---
title: Number GreaterThan
keywords:
  - ">"

---

#### Synopsis

Greater than operator on numeric values.

#### Syntax

`Exp~1~ > Exp~2~`

#### Types

| `Exp~1~`  |  `Exp~2~` | `Exp~1~ > Exp~2~`   |
| --- | --- | --- |
| `int`      |  `int`     | `bool`                |
| `int`      |  `real`    | `bool`                |
| `real`     |  `real`    | `bool`                |

#### Description

Yields `true` if the value of Exp~1~ is numerically greater than the value of Exp~2~, and `false` otherwise.

#### Examples

```rascal-shell 
rascal>13 > 12
bool: true
rascal>12 > 13
bool: false
rascal>13.5 > 12
bool: true
rascal>12.5 > 13
bool: false
```

