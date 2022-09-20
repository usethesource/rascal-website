---
title: Map in
keywords:
  - in

---

#### Synopsis

Membership test on the keys of a map.

#### Syntax

`Exp<sub>1</sub> in Exp<sub>2</sub>`

#### Types

| `Exp<sub>1</sub>`           |  `Exp<sub>2</sub>`         | `Exp<sub>1</sub> in Exp<sub>2</sub>`  |
| --- | --- | --- |
| `T<sub>1</sub>`  <: `TK`  |  `map[TK, TV]` | `bool`                |


#### Function

#### Description

Yields `true` if the value of Exp<sub>1</sub> occurs as key in the map value of Exp<sub>2</sub> and `false` otherwise. 
The type of _Exp_<sub>1</sub> should be compatible with the key type _TK_ of _Exp_<sub>2</sub>.

#### Examples


```rascal-shell
rascal>"pear" in ("apple": 1, "pear": 2);
bool: true
rascal>"pineapple" in ("apple": 1, "pear": 2);
bool: false
```

#### Benefits


