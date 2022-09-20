---
title: Value Conditional
keywords:
  - "?"
  - ":"

---

#### Synopsis

Conditional expression on values.

#### Syntax

`Exp<sub>1</sub> ? Exp<sub>2</sub> : Exp<sub>3</sub>`

#### Types


| `Exp<sub>1</sub>`  | `Exp<sub>2</sub>` | `Exp<sub>3</sub>` | `Exp<sub>1</sub> ? Exp<sub>2</sub> : Exp<sub>3</sub>`  |
| --- | --- | --- | --- |
|   `bool`   | `T<sub>2</sub>`   | `T<sub>3</sub>`   | `lub(T<sub>2</sub>,T<sub>3</sub>)`             |


#### Function

#### Description

Yields the value of _Exp_<sub>2</sub> if the value of _Exp_<sub>1</sub> is `true` and the value of _Exp_<sub>3</sub> otherwise.
The result type is the _least upper bound_ (also known as `lub`, see [Static typing](/Rascal/Declarations/StaticTyping)) of the types of _Exp_<sub>2</sub> and _Exp_<sub>3</sub>.

#### Examples


```rascal-shell
rascal>( 3 > 2 ) ? 30 : 40;
int: 30
rascal>( 3 < 2 ) ? "abc" : {3, 4};
set[int]: {3,4}
```

#### Benefits


