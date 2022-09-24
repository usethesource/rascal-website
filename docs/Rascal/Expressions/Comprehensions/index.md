---
title: Comprehensions
keywords:
  - "["
  - "]"
  - "{"
  - "}"
  - "("
  - ")"
  - "|"
  - "<-"

---

#### Synopsis

Comprehensions provide a concise notation to conditionally generate new values.

#### Description

Comprehensions are defined for the following types:

*  `list`, see [Comprehension](../../../Rascal/Expressions/Values/List/Comprehension),
*  `set`, see [Comprehension](../../../Rascal/Expressions/Values/Set/Comprehension),
*  `map`, see [Comprehension](../../../Rascal/Expressions/Values/Map/Comprehension).

The syntax varies slightly for each type, but comprehensions have the following common elements:

*  A _generator_ can come in two flavours:
**  an _enumerator_ that generates all the values in some subject value.
**  a _filter_ that performs an arbitrary test on previously generated values.

*  One or more _contributing expressions_ that are added to the list, set or map that is being constructed.

The contributing expressions are evaluated for all possible values of the enumerators that are not
excluded by a test. When a filter fails, execution continues with the preceding enumerator (if any).

Each enumerator may introduce new variables that can be used in subsequent generators as well as in the contributing expressions.
A generator can use the variables introduced by preceding generators. 

#### Examples

A list comprehension:

```rascal-shell 
rascal>[ 3 * X | int X <- [1 .. 10] ];
list[int]: [3,6,9,12,15,18,21,24,27]
```
A list comprehension with a filter:

```rascal-shell ,continue
rascal>[ 3 * X | int X <- [1 .. 10], X > 5];
list[int]: [18,21,24,27]
```
A list comprehension with multiple contributing expressions:

```rascal-shell ,continue
rascal>[X, X * X | int X <- [1, 2, 3, 4, 5], X >= 3];
list[int]: [3,9,4,16,5,25]
```
A set comprehension with a filter:

```rascal-shell ,continue
rascal>{X | int X <- {1, 2, 3, 4, 5}, X >= 3};
set[int]: {5,3,4}
```
A set comprehension that constructs a relation:

```rascal-shell ,continue
rascal>{<X, Y> | int X <- {1, 2, 3}, int Y <- {2, 3, 4}, X >= Y};
rel[int,int]: {
  <2,2>,
  <3,3>,
  <3,2>
}
rascal>{<Y, X> | <int X, int Y> <- {<1,10>, <2,20>}};
rel[int,int]: {
  <10,1>,
  <20,2>
}
```
Introduce a map of `fruits` and use a map comprehension to filter fruits with an associated value larger than 10:

```rascal-shell ,continue
rascal>fruits = ("pear" : 1, "apple" : 3, "banana" : 0, "berry" : 25, "orange": 35);
map[str, int]: ("banana":0,"pear":1,"orange":35,"berry":25,"apple":3)
rascal>(fruit : fruits[fruit] | fruit <- fruits, fruits[fruit] > 10);
map[str, int]: ("orange":35,"berry":25)
```

See [Comprehension](../../../Rascal/Expressions/Values/List/Comprehension), [Comprehension](../../../Rascal/Expressions/Values/Set/Comprehension), or [Comprehension](../../../Rascal/Expressions/Values/Map/Comprehension) for more examples.

