---
title: Throw
keywords:
  - throw

---

#### Synopsis

Throw any value as an exception up the call stack.

#### Syntax

`throw Exp`

#### Description

A throw statement causes the immediate abortion of the execution of the current function with _Exp_ \'s value as exception value.
The exception can be caught by a [Try Catch](../../../Rascal/Statements/TryCatch) statement in the current function or in one of its callers.
If the exception is not caught, the execution of the Rascal program is terminated. The following rules apply:

*  The static type of _Exp_ should be `RuntimeException`, see [RuntimeException](../../../Library/Exception.md#Exception-RuntimeException).

*  The Rascal program may contain data declarations that extend the type `RuntimeException`.

#### Examples

Here is a a variant of string concatenation for ball haters:

```rascal-shell
rascal>str conc(str x, str y){ if("ball" in {x, y}) throw "I hate balls"; return x + y; }
str (str, str): function(|prompt:///|(0,82,<1,0>,<1,82>))
rascal>conc("fairy", "tale");
str: "fairytale"
rascal>conc("foot", "ball");
|prompt:///|(51,14,<1,51>,<1,65>): "I hate balls"
	at conc(|prompt:///|(24,43,<1,24>,<1,67>))
	at $shell$(|prompt:///|(0,21,<1,0>,<1,21>))
ok
```



