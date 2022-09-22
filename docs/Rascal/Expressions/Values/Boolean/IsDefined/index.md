---
title: Boolean IsDefined
keywords:
  - "?"

---

#### Synopsis

Test whether the value of an expression is defined.

#### Syntax

`Exp ?`

#### Types

//

| `Exp` | `Exp ?`  |
| --- | --- |
|  `T`   |   `bool`      |


#### Description

If no exception is generated during the evaluation of _Exp_, 
the result is `true`. Otherwise, it is `false`.

#### Examples


```rascal-shell
rascal>T = ("a" : 1, "b" : 2);
map[str, int]: ("a":1,"b":2)
rascal>T["b"]?
bool: true
rascal>T["c"]?
bool: false
rascal>L = [10, 20, 30];
list[int]: [10,20,30]
rascal>L[1]?
bool: true
rascal>L[5]?
bool: false
```


