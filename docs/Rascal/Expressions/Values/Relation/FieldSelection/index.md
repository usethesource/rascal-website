---
title: Relation FieldSelection
keywords:
  - "."

---

#### Synopsis

Select a field (column) from a relation value.

#### Syntax

`Exp . Name`

#### Types


|`Exp`                                | `Exp . Name`  |
| --- | --- |
| `rel[T<sub>1</sub> L<sub>1</sub>, T<sub>2</sub> L<sub>2</sub>, ... ]` | `set[T~i~]`      |


#### Function

#### Description

_Exp_ should evaluate to a relation that has an _i_-th field label _L_~i~ that is identical to _Name_.
Return a set with all values of that field.
_Name_ stands for itself and is not evaluated.

#### Examples


```rascal-shell
rascal>rel[str street, int nm] R = {<"abc", 1>, <"abc", 2>, <"def", 4>, <"def", 5>};
rel[str street,int nm]: {
  <"abc",1>,
  <"abc",2>,
  <"def",5>,
  <"def",4>
}
rascal>R.street;
set[str]: {"abc","def"}
```

#### Benefits


