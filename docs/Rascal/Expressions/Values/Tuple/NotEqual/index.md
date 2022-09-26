---
title: Tuple NotEqual
keywords:
  - "!="
---

#### Synopsis

Not equal operator on tuple values.

#### Syntax

`Exp₁ != Exp₂`

#### Types


| `Exp₁`                      |  `Exp₂`                      | `Exp₁ != Exp₂`  |
| --- | --- | --- |
| `tuple[ T₁₁, T₁₂, ... ]` |  `tuple[ T₂₁, T₂₂, ... ]` | `bool`                |


#### Description

Yields `true` if both tuples are not identical and `false` otherwise.

#### Examples


```rascal-shell 
rascal><1, "abc", true> != <1, "abc">;
bool: true
rascal><1, "abc", true> != <1, "abc", true>;
bool: false
```


