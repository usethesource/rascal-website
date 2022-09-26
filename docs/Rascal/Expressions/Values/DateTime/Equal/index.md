---
title: DateTime Equal
keywords:
  - "=="

---

#### Synopsis

Equality on datetime values.

#### Syntax

`Exp₁ == Exp₂`

#### Types

//

| `Exp₁`      | `Exp₂`      | `Exp₁ == Exp₂`  |
| --- | --- | --- |
| `datetime`     |  `datetime`    | `bool`                |


#### Description

Yields `true` if both arguments are identical `datetime` values and `false` otherwise.

#### Examples


```rascal-shell 
rascal>$2010-07-15$ == $2010-07-15$;
bool: true
rascal>$2010-07-15$ == $2010-07-14$;
bool: false
```


