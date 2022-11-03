---
title: Constructor FieldSelection
keywords:
  - "."
  - fields
  - getter
  - get
  - keyword fields
  - default fields
---

#### Synopsis

Select a field from a constructor by its field name.

#### Syntax

`Exp . Name`

#### Types


| `Exp`                                 | `Name` | `Exp . Name` |
| --- | --- | --- |
|`cons(T₁ L₁, T₂ L₂, ... )` |  `Lᵢ` | `Tᵢ`         |


#### Description

Field selection applies to constructors with named elements such as fields and keyword fields.
_Exp_ should evaluate to a tuple with field _Name_ and returns the value of that field.
_Name_ stands for itself and is not evaluated.

Because the types of field names are known statically, field projection for constructors produces
values of precise types. This is unlike [FieldSelection](../../../../../Rascal/Expressions/Values/Node/FieldSelection/index.md) where the resulting type is always `value`.

Constructor keyword fields have `default` expressions which can be dependent on each other and
on the positional fields (by name). They are computed lazily upon request.

#### Examples


```rascal-shell 
rascal>data Example = example(int key, str val="<key>");      ❶  
ok
rascal>t = example(42);
Example: example(42)
rascal>t.key = 2;
Example: example(2)
rascal>t.val
str: "2"
rascal>t.key += 2;
Example: example(4)
rascal>t.val
str: "4"
```

* ❶  `val` is a keyword field with a default value computed from the positional field `key`.

#### Benefits

* constructors with fields are a versatile way of modeling and storing hierarchical data


