---
title: UnguardedFail
---

#### Synopsis

Use of `fail` statement outside a condtional context.

#### Description

A [fail](../../Rascal/Statements/Fail/index.md) statement is only allowed inside conditional statements.
This error is generated when `fail` is used outside a conditional context.

Remedies:

*  Surround the `fail` statement by a conditional conditional statement.
*  Replace the `fail` statement by a [Throw](../../Rascal/Statements/Throw/index.md) statement.
*  replace the `fail` statement by a [Return](../../Rascal/Statements/Return/index.md) statement.

#### Examples

Here is a correct (albeit not very useful) use of `fail` where the pattern match `int N := 35` acts as guard:

```rascal-shell 
rascal>if(int N := 35){ if(N > 10) fail; }
ok
```
Any condition (non only one using pattern matching) can act as guard:

```rascal-shell ,continue
rascal>if(true) { fail; }
ok
```
An error occurs when `fail` is used outside a conditional context:

```rascal-shell ,error
rascal>fail;
|prompt:///|(0,5,<1,0>,<1,5>): Use of fail outside a conditional context
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnguardedFail/UnguardedFail.html|
ok
```


