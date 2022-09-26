---
title: DateTime GreaterThanOrEqual
keywords:
  - ">="

---

#### Synopsis

Greater than or equal operator on datetime values.

#### Syntax

`Exp₁ >= Exp₂`

#### Types

//

| `Exp₁`      | `Exp₂`      | `Exp₁ >= Exp₂`  |
| --- | --- | --- |
| `datetime`     |  `datetime`    | `bool`                |


#### Description

Yields `true` if the `datetime` value of Exp₁ is later in time than the `datetime` value
of _Exp_₂ or if both values are equal, and `false` otherwise.

#### Examples


```rascal-shell 
rascal>$2011-07-15$ >= $2010-07-15$;
bool: true
rascal>$2010-07-15$ >= $2010-07-14$;
bool: true
```


