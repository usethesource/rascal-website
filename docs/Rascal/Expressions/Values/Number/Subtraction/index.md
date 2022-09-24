---
title: Number Subtraction
keywords:
  - "-"
---

#### Synopsis

Subtract two numeric values.

#### Syntax

`Exp~1~ - Exp~2~`

#### Types

| `Exp~1~` |  `Exp~2~` | `Exp~1~ - Exp~2~`  |
| --- | --- | --- |
| `int`     |  `int`     | `int`                |
| `int`     |  `real`    | `real`               |
| `real`    |  `real`    | `real`               |

#### Description

Yields the numerical result of subtracting the value of _Exp_~2~ from the value of _Exp_~1~.

#### Examples

```rascal-shell 
rascal>13 - 12
int: 1
rascal>13.5 - 12
real: 1.5
rascal>12 - 13
int: -1
rascal>12 - 13.5
real: -1.5
```

