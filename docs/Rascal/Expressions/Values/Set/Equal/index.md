---
title: Set Equal
keywords:
  - "=="

---

#### Synopsis

Equal operator on set values.

#### Syntax

`Exp₁ == Exp₂`

#### Types


| `Exp₁`    |  `Exp₂`    | `Exp₁ == Exp₂`  |
| --- | --- | --- |
| `set[T₁]` |  `set[T₂]` | `bool`                |


#### Description

Yields `true` if both arguments are equal sets and `false` otherwise.

#### Examples


```rascal-shell 
rascal>{1, 2, 3} == {3, 2, 1};
bool: true
rascal>{1, 2, 3} == {1, 2};
bool: false
```


