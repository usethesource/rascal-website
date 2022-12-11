---
title: Enumerating
sidebar_position: 3
---

#### Synopsis

Enumerating values.

#### Description

Enumerating regards the enumeration of the values in a given (finite) domain, be it the elements in a list, the substrings of a string, 
or all the nodes in a tree. 
Each value that is enumerated is first matched against a pattern before it can possibly contribute to the result of 
the enumerator. An enumerator yields `true` as long as it has generated a new value, and `false` otherwise.

See [Enumerator](../../Rascal/Expressions/Values/Boolean/Enumerator/index.md) for details.

#### Examples

```rascal
int x <- { 1, 3, 5, 7, 11 }
int x <- [ 1 .. 10 ]
/asgStat(Id name, _) <- P
```

The first two produce the integer elements of a set of integers and a range of integers respectively. 
Observe that the left-hand side of an enumerator is a pattern, of which `int x` is a specific instance. 
The use of more general patterns is illustrated by the third enumerator that does a deep traversal 
(as denoted by the descendant operator `/`) of the complete program `P` (that is assumed to have a 
`PROGRAM` as value) and only yields statements that match the assignment pattern (`asgStat`).
Note the use of an anonymous variable at the `EXP` position in the pattern.

Let's practice some of these examples.


```rascal-shell 
rascal>int x <- {};
bool: false
```
The enumerator does not produce any value and returns `false`.


```rascal-shell ,error
rascal>int x <- {1, 3, 5, 7, 11 };
bool: true
rascal>x;
|prompt:///|(0,1,<1,0>,<1,1>): Undeclared variable: x
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredVariable/UndeclaredVariable.html|
ok
```
Well, this is a disappointing experience. The generator returned `true` since it did produce a value.
Apparently, we cannot inspect the value of the variable `x` that was bound.

Another example that results in an error:

```rascal-shell ,error
rascal>str x <- {1, 3, 5, 7, 11 };
|prompt:///|(22,2,<1,22>,<1,24>): Expected int, but got str
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnexpectedType/UnexpectedType.html|
ok
```
Here, the enumerator produces its first integer value, an attempt is made to assign this to variable `x` that is declared as string,
and an error results.

A more satisfying use is as follows:

```rascal-shell 
rascal>{ x * x | int x <- {1, 3, 5, 7, 11 }};
set[int]: {121,1,9,49,25}
```
When used inside [Comprehensions](../../Rascal/Expressions/Comprehensions/index.md), 
or [For](../../Rascal/Statements/For/index.md), [Do](../../Rascal/Statements/Do/index.md), or [While](../../Rascal/Statements/While/index.md) 
statement, all values of the generator will be produced and used.
The variables that are introduced by an enumerator are local to the construct in which the enumerator is used.
Here is a similar example:

```rascal-shell 
rascal>import IO;
ok
rascal>for(int x <- {1, 3, 5, 7, 11 })
>>>>>>>    println("x = <x>");
x = 5
x = 7
x = 1
x = 3
x = 11
list[void]: []
```

#### Pitfalls

The variables that are bound by an enumerator are local to the statement in which the enumerator is used.


