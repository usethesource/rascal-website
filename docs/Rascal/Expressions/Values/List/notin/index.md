---
title: List notin
keywords:
  - notin

---

#### Synopsis

Negated membership test on lists.

#### Syntax

`Exp<sub>1</sub> notin Exp<sub>2</sub>`

#### Types

//

| `Exp<sub>1</sub>`           |  `Exp<sub>2</sub>`      | `Exp<sub>1</sub> notin Exp<sub>2</sub>`  |
| --- | --- | --- |
| `T<sub>1</sub>`  <: `T<sub>2</sub>` |  `list[T<sub>2</sub>]`  | `bool`                   |


#### Function

#### Description

Yields `true` if the value of Exp<sub>1</sub> does not occur as element in the value of Exp<sub>2</sub> and `false` otherwise. 
The type of _Exp_<sub>1</sub> should be compatible with the element type of _Exp_<sub>2</sub>.

#### Examples


```rascal-shell
rascal>4 notin [1, 2, 3];
bool: true
rascal>2 notin [1, 2, 3];
bool: false
```

#### Benefits


