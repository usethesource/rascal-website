---
title: NonWellformedType
---

#### Synopsis

A type in a declaration is not wellformed.

#### Description

Types should respect some structural rules and this error signals a violation of these rules.
Examples of violations are:

*  a non-parametric type has parameters.
*  a parametric type has an incorrect number of parameters.

Remedy: correct the type.

#### Examples

```rascal-shell ,error
rascal>bool[int] x;
ok
rascal>list[int,str] l;
|prompt:///|(0,4,<1,0>,<1,4>): Non-well-formed type: list should have exactly one type argument, like list[value]
Advice: |http://tutor.rascal-mpl.org/Errors/Static/NonWellformedType/NonWellformedType.html|
ok
rascal>map[str, int, int]  m;
|prompt:///|(0,3,<1,0>,<1,3>): Non-well-formed type: map should have exactly two type arguments, like map[value,value]
Advice: |http://tutor.rascal-mpl.org/Errors/Static/NonWellformedType/NonWellformedType.html|
ok
rascal>set[int,str] s;
|prompt:///|(0,3,<1,0>,<1,3>): Non-well-formed type: set should have exactly one type argument, like set[value]
Advice: |http://tutor.rascal-mpl.org/Errors/Static/NonWellformedType/NonWellformedType.html|
ok
```

