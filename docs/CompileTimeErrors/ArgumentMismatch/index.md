---
title: ArgumentMismatch
---

#### Synopsis

The called signature does not match any defined function.

#### Description

A function has a name and a signature (the names and types of its arguments). 
This error is reported when a call of a function cannot be associated with a function declaration.

Remedies:

*  Modify the call so that the arguments match the function declaration.
*  Write a new definition for a function with the same name, that matches the argument types in the call.

#### Examples

Define a function `triple` that multiplies its argument by 3:

```rascal-shell
rascal>int triple(int x) = 3 * x;
int (int): function(|prompt:///|(0,26,<1,0>,<1,26>))
```
It works fine:

```rascal-shell
rascal>triple(5)
int: 15
```
Unless it is called with an argument of a wrong type:

```rascal-shell
rascal>triple([1,2,3])
|prompt:///|(12,1,<1,12>,<1,13>): CallFailed([[1,2,3]])
	at $shell$(|prompt:///|(0,9,<1,0>,<1,9>))
ok
```
We can define a new version of `triple` function that accepts lists:

```rascal-shell
rascal>list[int] triple(list[int] L) = [3 * x | x <- L];
list[int] (list[int]): function(|prompt:///|(0,49,<1,0>,<1,49>))
rascal>triple([1,2,3]);
list[int]: [3,6,9]
```


