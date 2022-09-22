---
title: DateTime Equal
keywords:
  - "=="

---

#### Synopsis

Equality on datetime values.

#### Syntax

`Exp<sub>1</sub> == Exp<sub>2</sub>`

#### Types

//

| `Exp<sub>1</sub>`      | `Exp<sub>2</sub>`      | `Exp<sub>1</sub> == Exp<sub>2</sub>`  |
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


