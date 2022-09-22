---
title: Tuple NotEqual
keywords:
  - "!="
---

#### Synopsis

Not equal operator on tuple values.

#### Syntax

`Exp<sub>1</sub> != Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>`                      |  `Exp<sub>2</sub>`                      | `Exp<sub>1</sub> != Exp<sub>2</sub>`  |
| --- | --- | --- |
| `tuple[ T<sub>11</sub>, T<sub>12</sub>, ... ]` |  `tuple[ T<sub>21</sub>, T<sub>22</sub>, ... ]` | `bool`                |


#### Description

Yields `true` if both tuples are not identical and `false` otherwise.

#### Examples


```rascal-shell
rascal><1, "abc", true> != <1, "abc">;
bool: true
rascal><1, "abc", true> != <1, "abc", true>;
bool: false
```


