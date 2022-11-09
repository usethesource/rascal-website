---
title: UnexpectedKeywordArgumentType
---

#### Synopsis

The actual value of a keyword argument is not compatible with its declared type.

#### Description

Functions may be declared to have keyword parameters. Each keyword parameters has a type, a name and a default value.
This error is generated when the declared type and the actual type of the keyword parameter are not compatible.

Remedies:

*  Change the type of the keyword parameter in the call.
*  Change the type of the keyword parameter in the function declaration.

#### Examples

Declare `incr` function with keyword parameter `delta` of type `int`:

```rascal-shell ,error
rascal>int incr(int x, int delta = 1) = n + delta;
int (int, int delta = ...): function(|prompt:///|(0,43,<1,0>,<1,43>))
```
Erroneous use of `delta` with a string value:

```rascal-shell ,continue,error
rascal>incr(3, delta="more");
|prompt:///|(0,21,<1,0>,<1,21>): Expected int, but got str
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnexpectedType/UnexpectedType.html|
ok
```


