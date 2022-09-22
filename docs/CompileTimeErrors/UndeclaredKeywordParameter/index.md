---
title: UndeclaredKeywordParameter
---

#### Synopsis

A function is called with a keyword parameter that was not declared in the function's declaration.

#### Description

Rascal functions may have keyword parameters. This error is generated when a function call uses an undeclared keyword parameter.

Remedies:

*  Rename the keyword parameter in the call.
*  Add a new keyword parameter to the function.

#### Examples


```rascal-shell
rascal>int incr(int n, int delta=1) = n + delta;
int (int, int delta = ...): function(|prompt:///|(0,41,<1,0>,<1,41>))
```
Calling `incr` with a wrong keyword parameter gives an error:

```rascal-shell
rascal>incr(3, diff=5);
int: 4
```
This can be fixed by using the correct name for the keyword parameter:

```rascal-shell
rascal>incr(3, delta=5);
int: 8
```


