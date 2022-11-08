---
title: Field Assignment
keywords:
  - "["
  - "="
  - "]"
  - setter
  - set

---

#### Synopsis

Assignment to a field of a tuple or datatype.

#### Syntax

```rascal
Exp₁ [ FieldName = Exp₂ ]
```

#### Description

_Exp_₁ should evaluate to a tuple or a constructor with a field named _Name_. Statically the type should either be a assign the value of _Exp_₂ to that field

Field assignment applies to all values that have named components like tuples and constructors with named elements, and locations.  Field assignment returns a new value in which the named component has been replaced by a new value. _Name_ stands for itself and is not evaluated.

#### Examples


```rascal-shell 
rascal>node T = "name"(1, x="abc");
node: "name"(1,
  x="abc")
rascal>T[x = "def"];
node: "name"(1,
  x="def")
rascal>T
node: "name"(1,
  x="abc")
rascal>T = T[x="def"];
node: "name"(1,
  x="def")
rascal>T
node: "name"(1,
  x="def")
```

Observe that field assignment creates a new value with an updated field. The old value remains unchanged as can be seen from the unchanged value of T in the above example.

