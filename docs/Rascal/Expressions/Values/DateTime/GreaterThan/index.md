---
title: DateTime GreaterThan
keywords:
  - ">"

---

#### Synopsis

Greater than operator on datetime values.

#### Syntax

`Exp₁ > Exp₂`

#### Types

//

| `Exp₁`      | `Exp₂`      | `Exp₁ > Exp₂`  |
| --- | --- | --- |
| `datetime`     |  `datetime`    | `bool`               |


#### Description

Yields `true` if the `datetime` value of Exp₁ is later in time than the `datetime` value
of _Exp_₂, and `false` otherwise.

#### Examples


```rascal-shell 
rascal>$2010-07-15$ > $2010-07-14$;
bool: true
rascal>$2011-07-15$ > $2010-07-15$;
bool: true
```


