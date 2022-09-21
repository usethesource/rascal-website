---
title: Comprehensions
---

#### Synopsis

Comprehensions for generating values.

#### Syntax

#### Types

#### Function

#### Description

Comprehensions are a notation inspired by mathematical [set-builder notation](http://en.wikipedia.org/wiki/Set-builder_notation)
and [list comprehensions](http://en.wikipedia.org/wiki/List_comprehension)
that help to write succinct definitions of lists and sets. They are also inspired by queries as found in a language like SQL.

Rascal generalizes comprehensions in various ways. Comprehensions exist for lists, sets and maps. 
A comprehension consists of an expression that determines the successive elements to be included in the 
result and a list of enumerators and tests (boolean expressions). 
The enumerators produce values and the tests filter them. 

See [Comprehensions](/docs/Rascal/Expressions/Comprehensions), 
[List Comprehension](/docs/Rascal/Expressions/Values/List/Comprehension), 
[Set Comprehension](/docs/Rascal/Expressions/Values/Set/Comprehension), and
[Map Comprehension](/docs/Rascal/Expressions/Values/Map/Comprehension) for details.

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
which traverses program `P` (using the _descendant match_ operator `/`, see [Patterns](/docs/Rascal/Patterns/Node)) 
and constructs a set of all identifiers that occur on the left hand 
side of assignment statements in `P`.

#### Benefits


