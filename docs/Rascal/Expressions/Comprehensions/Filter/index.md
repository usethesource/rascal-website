---
title: Filter
---

#### Synopsis

Filter values in a [list comprehension](../../../../Rascal/Expressions/Values/List/Comprehension/index.md), [set comprehension](../../../../Rascal/Expressions/Values/Set/Comprehension/index.md) or [map comprehension](../../../../Rascal/Expressions/Values/Map/Comprehension/index.md), a [Reducer](../../../../Rascal/Expressions/Reducer/index.md), and in the conditions of [For](../../../../Rascal/Statements/For/index.md), [While](../../../../Rascal/Statements/While/index.md) and [If](../../../../Rascal/Statements/If/index.md).

#### Syntax

`Exp`

#### Types

| `Exp`  |
| --- |
| `bool`   |


#### Description

A  filter is a boolean-valued expression. 
If the evaluation of the filter gives `true` this indicates that the current combination of generated values up 
to this filter is still desired and execution continues with subsequent generators. 
If the evaluation gives `false` this indicates that the current combination of values is undesired, 
and that another combination should be tried by going back to the previous generator.

#### Examples

Adding a filter to a comprehension, may restrict the values that are included in the result of the comprehension:

```rascal-shell 
rascal>[ X * X | int X <- [1, 2, 3, 4, 5, 6] ];
list[int]: [1,4,9,16,25,36]
rascal>[ X * X | int X <- [1, 2, 3, 4, 5, 6], X % 3 == 0 ];
list[int]: [9,36]
```
Filters can also be applied to values produced by several generators:

```rascal-shell ,continue
rascal>[<X, Y> | int X <- [0 .. 10], int Y <- [0 .. 10], X + Y == 10]
lrel[int,int]: [
  <1,9>,
  <2,8>,
  <3,7>,
  <4,6>,
  <5,5>,
  <6,4>,
  <7,3>,
  <8,2>,
  <9,1>
]
```


