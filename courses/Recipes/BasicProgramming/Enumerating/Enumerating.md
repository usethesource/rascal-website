---
title: Enumerating
---

#### Synopsis

Enumerating values.

#### Syntax

#### Types

#### Function

#### Description

Enumerating regards the enumeration of the values in a given (finite) domain, be it the elements in a list, the substrings of a string, 
or all the nodes in a tree. 
Each value that is enumerated is first matched against a pattern before it can possibly contribute to the result of 
the enumerator. An enumerator yields `true` as long as it has generated a new value, and `false` otherwise.

See [Enumerator]((Rascal:Boolean-Enumerator)) for details.

#### Examples

Without a conditional context, like ((Statements-If)) or ((Statements-For)) or ((Expressions-Comprehensions)), an enumerator simply finds the first element that matches against the left-hand side pattern and returns `true` if it can find it. In other words `<-` acts
like the logical quantifier `exists`:

```rascal
int x <- { 1, 3, 5, 7, 11 }
int x <- [ 1 .. 10 ]
/asgStat(Id name, _) <- P
```

The first two produce the integer elements of a set of integers and a range of integers. 
Observe that the left-hand side of an enumerator is a pattern, of which `int x` is a specific instance. 
The use of more general patterns is illustrated by the third enumerator that does a deep traversal 
(as denoted by the descendant operator `/`) of the complete program `P` (that is assumed to have a 
`PROGRAM` as value) and only yields statements that match the assignment pattern (`asgStat`).
Note the use of an anonymous variable at the `EXP` position in the pattern.

Let's practice some of these examples.

```rascal-shell
int x <- {};
```
The enumerator does not produce any value and returns `false`.

```rascal-shell,error
int x <- {1, 3, 5, 7, 11 };
x;
```
Well, this is a disappointing experience. The generator returned `true` since it did produce a value.
Apparently, we cannot inspect the value of the variable `x` that was bound.

Another example that results in an error:
```rascal-shell,error
str x <- {1, 3, 5, 7, 11 };
```
Here, the enumerator produces its first integer value, an attempt is made to assign this to variable `x` that is declared as string,
and an error results.

A more satisfying use is as follows:
```rascal-shell
{ x * x | int x <- {1, 3, 5, 7, 11 }};
```
When used inside [Comprehensions]((Rascal:Expressions-Comprehensions)), 
or [For]((Rascal:Statements-For)), [Do]((Rascal:Statements-Do)), or [While]((Rascal:Statements-While)) 
statement, all values of the generator will be produced and used.
The variables that are introduced by an enumerator are local to the construct in which the enumerator is used.
Here is a similar example:
```rascal-shell
import IO;
for(int x <- {1, 3, 5, 7, 11 })
    println("x = <x>");
```

Here you see how ((Statements-If)) is also a conditional context:
```rascal-shell
import IO;
if (int x <- [1,2,3,4], i % 2 == 0)
    println("an even <i>");
```

#### Benefits

* Any of the ((Patterns)) can be used on the left-hand side of `<-`
* Variables bound in conditional contexts can be used in the lexical scopes of those contexts and not outside. There exist no "null" references.  
* ((Statements-If)) finds the first element that satisfies all conditions, including the ((Patterns)), which is "exists" logic. 
* ((Statements-For)) and ((Expressions-Comprehensions)) iterate through all, which is "forall" logic.

#### Pitfalls

* The variables that are bound by an enumerator are local to the statement in which the enumerator is used.

