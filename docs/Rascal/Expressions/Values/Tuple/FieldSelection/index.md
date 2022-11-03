---
title: Tuple FieldSelection
keywords:
  - "."
  - getter
  - get

---

#### Synopsis

Select a field from a  node by its field name.

#### Syntax

`Exp . Name`

#### Types


| `Exp`                                 | `Name` | `Exp . Name` |
| --- | --- | --- |
|`tuple[T₁ L₁, ..., Tₙ Lₙ`] | Lᵢ | Tᵢ  |


#### Description

Field selection applies to nodes with names keyword fields.
_Exp_ should evaluate to a node with field _Name_ and returns the value of that field.
_Name_ stands for itself and is not evaluated.

#### Examples


```rascal-shell 
rascal>tuple[int a, str b] T = <1,"hello">;
tuple[int a,str b]: <1,"hello">
rascal>T.a
int: 1
rascal>T.b
str: "hello"
```


