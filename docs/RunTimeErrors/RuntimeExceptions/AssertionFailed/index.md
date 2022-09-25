---
title: Assertion Failed
---

#### Synopsis

An assertion in the Rascal code is false.

#### Function

`data RuntimeException = AssertionFailed(str label);`

       
#### Description

An [Assert](../../../Rascal/Statements/Assert/index.md) statement can be used to check assumptions during the execution of a Rascal program.
This error is generated if an assertion is not true.

Remedies:

*  Modify your code to make the assertion true.
*  Modify your assertion to reflect the current behaviour of your code.
*  Catch the `AssertionFailed` yourself, see [try catch](../../../Rascal/Statements/TryCatch/index.md).


#### Examples

A false assertion gives an error:

```rascal-shell ,error
rascal>assert 3 > 4;
|prompt:///|(0,13,<1,0>,<1,13>): AssertionFailed()
	at $shell$(|main://$shell$|)
ok
```
Define a function that only increments positive integers:

```rascal-shell ,continue,error
rascal>int incrPositive(int n) { assert n > 0: "n should be greater than 0"; return n + 1; }
int (int): function(|prompt:///|(0,85,<1,0>,<1,85>))
```
Calling it with a positive integer is fine:

```rascal-shell ,continue,error
rascal>incrPositive(3);
int: 4
```
But a negative argument gives an error:

```rascal-shell ,continue,error
rascal>incrPositive(-3);
|prompt:///|(40,28,<1,40>,<1,68>): AssertionFailed("n should be greater than 0")
	at incrPositive(|prompt:///|(0,85,<1,0>,<1,85>))
	at $shell$(|prompt:///|(0,17,<1,0>,<1,17>))
ok
```
We can also catch the `AssertionFailed` error. First import the Rascal exceptions (which are also included in `Prelude`)
and `IO`:

```rascal-shell ,continue,error
rascal>import Exception;
ok
rascal>import IO;
ok
rascal>try println(incrPositive(-3)); catch AssertionFailed(msg): println("incrPositive: <msg>");
try println(incrPositive(-3)); catch AssertionFailed(msg): println("incrPositive: <msg>");
incrPositive: n should be greater than 0
ok
```

#### Benefits

* Enables the precise expression of assumptions in your code.
* Asserts are actually executed when the compiler option 
  `enableAsserts` is set to true (by default set to `false`).
* In the RascalShell, `enableAsserts` is always true.


