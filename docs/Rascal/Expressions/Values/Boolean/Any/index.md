---
title: Boolean Any
keywords:
  - any

---

#### Synopsis

Any combination of argument values is true.

#### Syntax

`any ( Exp₁, Exp₂, ... )`

#### Types

//


| `Exp₁` | `Exp₂` | ... | `any ( Exp₁, Exp₂, ... )`  |
| --- | --- | --- | --- |
|`bool`     | `bool`    | ... | `bool`                           |


#### Description

Yields `true` when at least one combination of values of _Exp_ᵢ is true.

#### Examples


```rascal-shell 
rascal>any(int n <- [1 .. 10], n % 2 == 0);
bool: true
```


