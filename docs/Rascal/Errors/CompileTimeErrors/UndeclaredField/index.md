---
title: UndeclaredField
---

#### Synopsis

A field name is used that has not been declared.

#### Description

Fields of [tuple](../../../../Rascal/Expressions/Values/Tuple/index.md) (hence also of [relation](../../../../Rascal/Expressions/Values/Relation/index.md)
 and [listrelation](../../../../Rascal/Expressions/Values/ListRelation/index.md))
and constructors of [algebraic data types](../../../../Rascal/Declarations/AlgebraicDataType/index.md) may have names.
This error is generated when a reference is made to an undeclared field.

Remedies:

*  Fix the field name in the reference.
*  Declare a new field as used in the reference.

#### Examples

Use of the undeclared field `gender`:

```rascal-shell ,error
rascal>tuple[str name, int age] Jo = <"Jo", 33>;
tuple[str name,int age]: <"Jo",33>
rascal>Jo.gender;
|prompt:///|(0,2,<1,0>,<1,2>): Undeclared field: gender for tuple[str name,int age]
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredField/UndeclaredField.html|
ok
```
A similar example now expressed as ADT:

```rascal-shell ,error
rascal>data Person = person(str name, int age);
ok
rascal>jo = person("Jo", 33);
Person: person("Jo",33)
rascal>jo.gender;
|prompt:///|(0,2,<1,0>,<1,2>): Undeclared field: gender for Person
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredField/UndeclaredField.html|
ok
```


