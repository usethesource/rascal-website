---
title: Set
keywords:
  - "{"
  - "}"
---

#### Synopsis

Set values.

#### Syntax

`{ Exp<sub>1</sub>, Exp<sub>2</sub>, ... }`

#### Types


|  `Exp<sub>1</sub>` |  `Exp<sub>2</sub>` |  ...  |  `{ Exp<sub>1</sub>, Exp<sub>2</sub>, ... }`    |
| --- | --- | --- | --- |
| _T<sub>1</sub>_    | _T<sub>2</sub>_    |  ...  |  set[ lub(_T<sub>1</sub>_, _T<sub>2</sub>_, ... ) ]  |


#### Description

A set is an unordered sequence of values and has the following properties:

*  All elements have the same static type.
*  The order of the elements does not matter.
*  A set contains an element only once. In other words, duplicate elements are eliminated and no 
  matter how many times an element is added to a set, it will occur in it only once.


The type of a set has the form `set[T]`,
where `T` is an arbitrary type.

When a value or variable of type set occurs inside a set, that set value is inserted as set element. 
To achieve splicing of these elements, i.e., the insertion of the elements of the set value rather than the whole set,
it has to be prefixed by the splice operator `*`.

The following operators are provided on sets:
* ((Rascal:Expressions/Values/Set))
* ((Rascal:Expressions/Values/Set/Comprehension))
* ((Rascal:Expressions/Values/Set/Difference))
* ((Rascal:Expressions/Values/Set/Equal))
* ((Rascal:Expressions/Values/Set/Insert))
* ((Rascal:Expressions/Values/Set/Intersection))
* ((Rascal:Expressions/Values/Set/NotEqual))
* ((Rascal:Expressions/Values/Set/Product))
* ((Rascal:Expressions/Values/Set/Splice))
* ((Rascal:Expressions/Values/Set/StrictSubSet))
* ((Rascal:Expressions/Values/Set/StrictSuperSet))
* ((Rascal:Expressions/Values/Set/SubSet))
* ((Rascal:Expressions/Values/Set/SuperSet))
* ((Rascal:Expressions/Values/Set/Union))
* ((Rascal:Expressions/Values/Set/in))
* ((Rascal:Expressions/Values/Set/notin))

There are also [library functions](../../../../Library/Set.md) available for Sets.
##  Set types 


```rascal-shell
rascal>{1, 2, 3};
set[int]: {1,3,2}
rascal>{<1,10>, <2,20>, <3,30>};
rel[int,int]: {
  <1,10>,
  <3,30>,
  <2,20>
}
rascal>{1, "b", 3};
set[value]: {"b",1,3}
rascal>{<"a", 10>, <"b", 20>, <"c", 30>}
rel[str,int]: {
  <"a",10>,
  <"b",20>,
  <"c",30>
}
rascal>{{"a", "b"}, {"c", "d", "e"}}
set[set[str]]: {
  {"a","b"},
  {"c","d","e"}
}
```
Note that

*  `{1, 2, 3}` and `{3, 2, 1}` are identical sets (since order is not relevant).
*  `{1, 2, 3}` and `{1, 2, 3, 1}` are also identical sets (since duplication is not relevant).



##  Set splicing 

Introduce a set variable `S`

```rascal-shell
rascal>S = {1, 2, 3};
set[int]: {1,3,2}
```
and observe how the value of `S` is added as single element in another set:

```rascal-shell
rascal>{10, S, 20};
set[value]: {10,20,{1,3,2}}
```
or how its elements are added as elements to the other set:

```rascal-shell
rascal>{10, *S, 20};
set[int]: {10,1,3,20,2}
```


