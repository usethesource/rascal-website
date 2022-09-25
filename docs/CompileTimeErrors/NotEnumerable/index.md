---
title: NotEnumerable
---

#### Synopsis

A value that cannot be enumerated is used in an enumerator.

#### Description

An [enumerator](../../Rascal/Expressions/Comprehensions/Enumerator/index.md) like `int n <- V` is used in 
[comprehensions](../../Rascal/Expressions/Comprehensions/index.md) to enumerate the values in `V`.
This error is produced when `V` is a value that does not support enumeration.
This is typically the case for atomic values like numbers, Booleans and Strings,

Remedy: modify the expression in the enumerator to return a value that supports enumeration.

#### Examples


```rascal-shell ,error
rascal>int x <- 17
|prompt:///|(9,2,<1,9>,<1,11>): int is not enumerable
Advice: |http://tutor.rascal-mpl.org/Errors/Static/NotEnumerable/NotEnumerable.html|
ok
rascal>b <- true
|prompt:///|(5,4,<1,5>,<1,9>): bool is not enumerable
Advice: |http://tutor.rascal-mpl.org/Errors/Static/NotEnumerable/NotEnumerable.html|
ok
```


