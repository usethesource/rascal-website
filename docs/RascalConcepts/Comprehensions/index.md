---
title: Comprehensions
---

#### Synopsis

Comprehensions for generating values.

#### Description

Comprehensions are a notation inspired by mathematical [set-builder notation](http://en.wikipedia.org/wiki/Set-builder_notation)
and [list comprehensions](http://en.wikipedia.org/wiki/List_comprehension)
that help to write succinct definitions of lists and sets. They also resemble `SELECT` queries as found in a language like SQL quite a bit.

Rascal generalizes comprehensions in various ways. Comprehensions exist for lists, sets and maps, and even for general values.
A comprehension consists of an expression that determines the successive elements to be included in the 
result and a list of enumerators and tests (boolean expressions). 
The enumerators produce values and the tests filter them. 

See [Comprehensions](../../Rascal/Expressions/Comprehensions/index.md), 
[List Comprehension](../../Rascal/Expressions/Values/List/Comprehension/index.md), 
[Set Comprehension](../../Rascal/Expressions/Values/Set/Comprehension/index.md), and
[Map Comprehension](../../Rascal/Expressions/Values/Map/Comprehension/index.md) for details. Have a look at [Reducer](../../Rascal/Expressions/Reducer/index.md) to use a comprehesion to construct anything else but a list, set or map.

#### Examples

A standard example is


```rascal-shell 
rascal>{ x * x | int x <- [1 .. 10], x % 3 == 0 }
set[int]: {9,81,36}
```
i.e., the squares of the integers in the range `[ 1 .. 10 ]` that 
are divisible by 3. A more intriguing example (that we do not give in full detail) is

```rascal
{name | /asgStat(Id name, _) <- P}
```
which traverses program `P` (using the _descendant match_ operator `/`, see [Patterns](../../Rascal/Patterns/Node/index.md)) 
and constructs a set of all identifiers that occur on the left hand 
side of assignment statements in `P`.

#### Benefits

* Using comprehensions and pattern matching you can `query` any tree-like object and turn it into a graph or relation

#### Pitfalls

* Comprehensions can be arbitrarily nested, but that does not improve the readability of your code. Better split complex queries up into separate lines or even separate functions.

