---
title: Tuple
keywords:
  - "<"
  - ">"

---

#### Synopsis

Tuple values.

#### Syntax

`< Exp<sub>1</sub>, Exp<sub>2</sub>, ... >`

#### Types


| `Exp<sub>1</sub>`  | `Exp<sub>2</sub>`  |  ...  | `< Exp<sub>1</sub>, Exp<sub>2</sub>, ... >`  |
| --- | --- | --- | --- |
| `T<sub>1</sub>`    |  T<sub>2</sub>     | ...   | `tuple[T<sub>1</sub>, T<sub>2</sub>, ... ]`  |


#### Description

A tuple is a sequence of elements with the following properties:

*  Each element in a tuple (may) have a different type.

*  Each element of a tuple may have a label that can be used to select that element of the tuple.

*  Each tuple is fixed-width, i.e., has the same number of elements.


Tuples are represented by the type `tuple[T<sub>1</sub> L<sub>1</sub>, T<sub>2</sub> L<sub>2</sub>, ...]`, 
where _T_<sub>1</sub>, _T_<sub>2</sub>, ... are arbitrary types and _L_<sub>1</sub>, _L_<sub>2</sub>, ... are optional labels. 

The following operators are provided for tuples:
* ((Rascal:Expressions/Values/Tuple))
* ((Rascal:Expressions/Values/Tuple/Concatenation))
* ((Rascal:Expressions/Values/Tuple/Equal))
* ((Rascal:Expressions/Values/Tuple/FieldSelection))
* ((Rascal:Expressions/Values/Tuple/GreaterThan))
* ((Rascal:Expressions/Values/Tuple/GreaterThanOrEqual))
* ((Rascal:Expressions/Values/Tuple/LessThan))
* ((Rascal:Expressions/Values/Tuple/LessThanOrEqual))
* ((Rascal:Expressions/Values/Tuple/NotEqual))
* ((Rascal:Expressions/Values/Tuple/Subscription))

#### Examples


```rascal-shell
rascal>tuple[str first, str last, int age] P = <"Jo","Jones",35>;
tuple[str first,str last,int age]: <"Jo","Jones",35>
rascal>P.first;
str: "Jo"
rascal>P.first = "Bo";
tuple[str first,str last,int age]: <"Bo","Jones",35>
```


