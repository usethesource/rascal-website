---
title: Number Negation
keywords:
  - "-"
---

#### Synopsis

Negate a numeric value.

#### Syntax

`- Exp`

#### Types

| `Exp`  |  `- Exp`  |
| --- | --- |
| `int`    |  `int`      |
| `real`   |  `real`     |

#### Description

Yields the negated values of _Exp_.

#### Examples

```rascal-shell 
rascal>-12
int: -12
rascal>-13.5
real: -13.5
rascal>- -12
int: 12
```

