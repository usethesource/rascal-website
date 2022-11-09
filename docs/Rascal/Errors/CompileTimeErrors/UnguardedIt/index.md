---
title: UnguardedIt
---

#### Synopsis

The special variable `it` occurs outside a reducer expression.

#### Description

A [reducer](../../../../Rascal/Expressions/Reducer/index.md) is used to reduce all elements in a collection to a sngle value.
The special variable `it` represents the currently reduced value and can be modified inside the reducer.
This error is generated when `it` i used otuside the a reducer.

Remedies:

*  You have accidentially used a variable with the name `it`; rename your variable to something else.
*  Place the expression that contains `it` in a reducer expression.

#### Examples

This is correct way to add all elements in a list:

```rascal-shell 
rascal>(0 | it + n | int n <- [1,5,9] )
int: 15
```
Using `it` outside a reducer gives an error:

```rascal-shell ,error
rascal>it + 3
|prompt:///|(0,2,<1,0>,<1,2>): Use of 'it' special variable is only allowed within reducers
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnguardedIt/UnguardedIt.html|
ok
```


