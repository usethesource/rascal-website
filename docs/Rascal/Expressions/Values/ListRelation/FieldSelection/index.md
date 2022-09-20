---
title: ListRelation FieldSelection
keywords:
  - "."

---

#### Synopsis

Select a field (column) from a list relation value.

#### Syntax

`Exp . Name`

#### Types


|`Exp`                                 | `Exp . Name`  |
| --- | --- |
|
| `lrel[T<sub>1</sub> L<sub>1</sub>, T<sub>2</sub> L<sub>2</sub>, ... ]` | `list[T~i~]`     |


#### Function

#### Description

_Exp_ should evaluate to a list relation that has an _i_-th field label _L_~i~ that is identical to _Name_.
Return a list with all values of that field.
_Name_ stands for itself and is not evaluated.

#### Examples


```rascal-shell
rascal>lrel[str street, int nm] R = [<"abc", 1>, <"abc", 2>, <"def", 4>, <"def", 5>];
lrel[str street,int nm]: [
  <"abc",1>,
  <"abc",2>,
  <"def",4>,
  <"def",5>
]
rascal>R.street;
list[str]: ["abc","abc","def","def"]
```

#### Benefits


