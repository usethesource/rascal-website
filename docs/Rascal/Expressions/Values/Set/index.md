---
title: Set
keywords:
  - "{"
  - "}"
---

#### Synopsis

Set values.

#### Syntax

`{ Exp~1~, Exp~2~, ... }`

#### Types


|  `Exp~1~` |  `Exp~2~` |  ...  |  `{ Exp~1~, Exp~2~, ... }`    |
| --- | --- | --- | --- |
| _T~1~_    | _T~2~_    |  ...  |  set[ lub(_T~1~_, _T~2~_, ... ) ]  |


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
* [Comprehension](../../../../Rascal/Expressions/Values/Set/Comprehension/index.md)
* [Difference](../../../../Rascal/Expressions/Values/Set/Difference/index.md)
* [Equal](../../../../Rascal/Expressions/Values/Set/Equal/index.md)
* [Insert](../../../../Rascal/Expressions/Values/Set/Insert/index.md)
* [Intersection](../../../../Rascal/Expressions/Values/Set/Intersection/index.md)
* [NotEqual](../../../../Rascal/Expressions/Values/Set/NotEqual/index.md)
* [Product](../../../../Rascal/Expressions/Values/Set/Product/index.md)
* [Splice](../../../../Rascal/Expressions/Values/Set/Splice/index.md)
* [StrictSubSet](../../../../Rascal/Expressions/Values/Set/StrictSubSet/index.md)
* [StrictSuperSet](../../../../Rascal/Expressions/Values/Set/StrictSuperSet/index.md)
* [SubSet](../../../../Rascal/Expressions/Values/Set/SubSet/index.md)
* [SuperSet](../../../../Rascal/Expressions/Values/Set/SuperSet/index.md)
* [Union](../../../../Rascal/Expressions/Values/Set/Union/index.md)
* [in](../../../../Rascal/Expressions/Values/Set/in/index.md)
* [notin](../../../../Rascal/Expressions/Values/Set/notin/index.md)

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

```rascal-shell ,continue
rascal>S = {1, 2, 3};
set[int]: {1,3,2}
```
and observe how the value of `S` is added as single element in another set:

```rascal-shell ,continue
rascal>{10, S, 20};
set[value]: {10,20,{1,3,2}}
```
or how its elements are added as elements to the other set:

```rascal-shell ,continue
rascal>{10, *S, 20};
set[int]: {10,1,3,20,2}
```


