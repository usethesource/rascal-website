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

```rascal
Exp₁ [ FieldName = Exp₂ ]
```

#### Description

_Exp_₁ should evaluate to a tuple or a constructor with a field named _Name_. Statically the type should either be a assign the value of _Exp_₂ to that field

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


