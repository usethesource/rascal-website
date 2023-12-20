---
title: UndeclaredKeywordParameter
---

#### Synopsis

A function is called with a keyword parameter that was not declared in the function's declaration.

#### Syntax

#### Types

#### Function
       
#### Usage

#### Description

Rascal functions may have keyword parameters. This error is generated when a function call uses an undeclared keyword parameter.

Remedies:

*  Rename the keyword parameter in the call.
*  Add a new keyword parameter to the function.

#### Examples

```rascal-shell
int incr(int n, int delta=1) = n + delta;
```
Calling `incr` with a wrong keyword parameter gives a **warning**:
```rascal-shell,continue
incr(3, diff=5);
```

:::info
The warning that is normally printed is not included in this document.
:::

This can be fixed by using the correct name for the keyword parameter:
```rascal-shell,continue
incr(3, delta=5);
```

#### Benefits

#### Pitfalls

