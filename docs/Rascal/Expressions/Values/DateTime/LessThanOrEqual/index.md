---
title: DateTime LessThanOrEqual
keywords:
  - "<="

---

#### Synopsis

Less than or equal operator on datetime values.

#### Syntax

`Exp<sub>1</sub> <= Exp<sub>2</sub>`

#### Types

//

| `Exp<sub>1</sub>`      | `Exp<sub>2</sub>`      | `Exp<sub>1</sub> <= Exp<sub>2</sub>`  |
| --- | --- | --- |
| `datetime`     |  `datetime`    | `bool`                |


#### Function

#### Description

Yields `true` if the `datetime` value of Exp<sub>1</sub> is earlier in time than the `datetime` value
of _Exp_<sub>2</sub> or if the values of _Exp_<sub>1</sub> and _Exp_<sub>2</sub> are equal, and `false` otherwise.

#### Examples


```rascal-shell
rascal>$2010-07-15$ <= $2010-07-15$;
bool: true
rascal>$2011-07-15$ <= $2010-07-14$;
bool: false
```

#### Benefits


