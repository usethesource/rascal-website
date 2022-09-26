---
title: Tuple FieldSelection
keywords:
  - "."

---

#### Synopsis

Select a field from a tuple by its field name.

#### Syntax

`Exp . Name`

#### Types


| `Exp`                                 | `Name` | `Exp . Name` |
| --- | --- | --- |
|`tuple[ T₁ L₁, T₂ L₂, ... ]` |  `Lᵢ` | `Tᵢ`         |


#### Description

Field selection applies to tuples with named elements.
_Exp_ should evaluate to a tuple with field _Name_ and returns the value of that field.
_Name_ stands for itself and is not evaluated.

#### Examples


```rascal-shell 
rascal>tuple[int key, str val] T = <1, "abc">;
tuple[int key,str val]: <1,"abc">
rascal>T.val;
str: "abc"
```


