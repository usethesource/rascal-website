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
|`tuple[ T<sub>1</sub> L<sub>1</sub>, T<sub>2</sub> L<sub>2</sub>, ... ]` |  `L~i~` | `T~i~`         |


#### Function

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

#### Benefits


