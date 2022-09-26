---
title: Tuple
keywords:
  - "<"
  - ">"

---

#### Synopsis

Tuple values.

#### Syntax

`< Exp₁, Exp₂, ... >`

#### Types


| `Exp₁`  | `Exp₂`  |  ...  | `< Exp₁, Exp₂, ... >`  |
| --- | --- | --- | --- |
| `T₁`    |  T₂     | ...   | `tuple[T₁, T₂, ... ]`  |


#### Description

A tuple is a sequence of elements with the following properties:

*  Each element in a tuple (may) have a different type.

*  Each element of a tuple may have a label that can be used to select that element of the tuple.

*  Each tuple is fixed-width, i.e., has the same number of elements.


Tuples are represented by the type `tuple[T₁ L₁, T₂ L₂, ...]`, 
where _T_₁, _T_₂, ... are arbitrary types and _L_₁, _L_₂, ... are optional labels. 

The following operators are provided for tuples:
* [Concatenation](../../../../Rascal/Expressions/Values/Tuple/Concatenation/index.md)
* [Equal](../../../../Rascal/Expressions/Values/Tuple/Equal/index.md)
* [FieldSelection](../../../../Rascal/Expressions/Values/Tuple/FieldSelection/index.md)
* [GreaterThan](../../../../Rascal/Expressions/Values/Tuple/GreaterThan/index.md)
* [GreaterThanOrEqual](../../../../Rascal/Expressions/Values/Tuple/GreaterThanOrEqual/index.md)
* [LessThan](../../../../Rascal/Expressions/Values/Tuple/LessThan/index.md)
* [LessThanOrEqual](../../../../Rascal/Expressions/Values/Tuple/LessThanOrEqual/index.md)
* [NotEqual](../../../../Rascal/Expressions/Values/Tuple/NotEqual/index.md)
* [Subscription](../../../../Rascal/Expressions/Values/Tuple/Subscription/index.md)

#### Examples


```rascal-shell 
rascal>tuple[str first, str last, int age] P = <"Jo","Jones",35>;
tuple[str first,str last,int age]: <"Jo","Jones",35>
rascal>P.first;
str: "Jo"
rascal>P.first = "Bo";
tuple[str first,str last,int age]: <"Bo","Jones",35>
```


