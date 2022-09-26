---
title: DateTime NotEqual
keywords:
  - "!="

---

#### Synopsis

Not equal operator on datetime values.

#### Syntax

`Exp₁ != Exp₂`

#### Types

| `Exp₁`      | `Exp₂`      | `Exp₁ != Exp₂`  |
| --- | --- | --- |
| `datetime`     |  `datetime`    | `bool`                |


#### Description

Yields `true` if both arguments are different `datetime` values and `false` otherwise.

#### Examples


```rascal-shell 
rascal>$2010-07-15$ != $2010-07-14$;
bool: true
rascal>$2010-07-15$ != $2010-07-15$;
bool: false
```


