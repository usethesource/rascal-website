---
title: Boolean Any
keywords:
  - any

---

#### Synopsis

Any combination of argument values is true.

#### Syntax

`any ( Exp<sub>1</sub>, Exp<sub>2</sub>, ... )`

#### Types

//


| `Exp<sub>1</sub>` | `Exp<sub>2</sub>` | ... | `any ( Exp<sub>1</sub>, Exp<sub>2</sub>, ... )`  |
| --- | --- | --- | --- |
|`bool`     | `bool`    | ... | `bool`                           |


#### Description

Yields `true` when at least one combination of values of _Exp_~i~ is true.

#### Examples


```rascal-shell
rascal>any(int n <- [1 .. 10], n % 2 == 0);
bool: true
```


