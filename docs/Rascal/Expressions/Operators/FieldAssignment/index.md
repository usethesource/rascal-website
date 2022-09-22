---
title: Field Assignment
keywords:
  - "["
  - "="
  - "]"

---

#### Synopsis

Assignment to a field of a tuple or datatype.

#### Syntax

`Exp<sub>1</sub> [ Name = Exp<sub>2</sub> ]`

#### Description

_Exp_<sub>1</sub> should evaluate to a tuple or datatype with a field _Name_; assign the value of _Exp_<sub>2</sub> to that field

Field assignment applies to all values that have named components like tuples and relations with named elements, data types, and locations. 
Field assignment returns a new value in which the named component has been replaced by a new value.
_Name_ stands for itself and is not evaluated.

#### Examples


```rascal-shell
rascal>tuple[int key, str val] T = <1, "abc">;
tuple[int key,str val]: <1,"abc">
rascal>T[val = "def"];
tuple[int key,str val]: <1,"def">
rascal> T;
tuple[int key,str val]: <1,"abc">
```

Observe that field assignment creates a new value with an updated field. The old value remains unchanged as can be seen from the unchanged value of T in the above example.


