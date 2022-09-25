---
title: List
keywords:
  - "["
  - "]"

---

#### Synopsis

List values.

#### Syntax

`[ Exp~1~, Exp~2~, ... ]`

#### Types

//


|  `Exp~1~` |  `Exp~2~` |  ...  |  `[ Exp~1~, Exp~2~, ... ]`    |
| --- | --- | --- | --- |
| `T~1~`    | `T~2~`    |  ...  |  `list[lub(T~1~, T~2~, ... )]`  |


#### Description

A list is an ordered sequence of values and has the following properties:

*  All elements have the same static type.
*  The order of the elements matters.
*  A list may contain an element more than once.


The type of a list has the form `list[T]`,
where `T` is an arbitrary type.

When a value or variable of type list occurs inside a list, that list value is inserted as list element.
To achieve _splicing_ of these elements, i.e., the insertion of the elements of the list value rather than the whole list,
it has to be prefixed by the splice operator `*`.

The following operators are provided on list:
* [Append](../../../../Rascal/Expressions/Values/List/Append/)
* [Comprehension](../../../../Rascal/Expressions/Values/List/Comprehension/)
* [Concatenation](../../../../Rascal/Expressions/Values/List/Concatenation/)
* [Difference](../../../../Rascal/Expressions/Values/List/Difference/)
* [Equal](../../../../Rascal/Expressions/Values/List/Equal/)
* [Insert](../../../../Rascal/Expressions/Values/List/Insert/)
* [Intersection](../../../../Rascal/Expressions/Values/List/Intersection/)
* [NotEqual](../../../../Rascal/Expressions/Values/List/NotEqual/)
* [Product](../../../../Rascal/Expressions/Values/List/Product/)
* [Slice](../../../../Rascal/Expressions/Values/List/Slice/)
* [Splice](../../../../Rascal/Expressions/Values/List/Splice/)
* [StrictSubList](../../../../Rascal/Expressions/Values/List/StrictSubList/)
* [StrictSuperList](../../../../Rascal/Expressions/Values/List/StrictSuperList/)
* [SubList](../../../../Rascal/Expressions/Values/List/SubList/)
* [Subscription](../../../../Rascal/Expressions/Values/List/Subscription/)
* [SuperList](../../../../Rascal/Expressions/Values/List/SuperList/)
* [in](../../../../Rascal/Expressions/Values/List/in/)
* [notin](../../../../Rascal/Expressions/Values/List/notin/)

There are also [library functions](../../../../Library/List.md/) available for List.

#### Examples


```rascal-shell 
rascal>[1, 2, 3];
list[int]: [1,2,3]
rascal>[<1,10>, <2,20>, <3,30>];
lrel[int,int]: [
  <1,10>,
  <2,20>,
  <3,30>
]
rascal>[1, "b", 3];
list[value]: [1,"b",3]
rascal>[<"a",10>, <"b",20>, <"c",30>];
lrel[str,int]: [
  <"a",10>,
  <"b",20>,
  <"c",30>
]
rascal>[["a", "b"], ["c", "d", "e"]];
list[list[str]]: [
  ["a","b"],
  ["c","d","e"]
]
```
List splicing works as follows: by prefixing `L` by the splice operator, its elements are included as elements in the enclosing list:

```rascal-shell 
rascal>L = [1, 2, 3];
list[int]: [1,2,3]
rascal>[10, L, 20];
list[value]: [
  10,
  [1,2,3],
  20
]
rascal>[10, *L, 20];
list[int]: [10,1,2,3,20]
```


