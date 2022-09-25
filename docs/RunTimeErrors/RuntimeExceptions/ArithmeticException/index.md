---
title: Arithmetic Exception
---

#### Synopsis

An arithmetic exception occurred.

#### Types

`data RuntimeException = ArithmeticException(str message);`
       
#### Usage

`import Exception;` (only needed when `ArithmeticException` is used in `catch`)

#### Description

This error is generated when an illegal arithmetic operation occurs or when
a numeric function  is called with an out-of-range argument.

Remedies:

*  Check the validity of the argument before you call the function or apply the operator.
*  Catch the `ArithmeticException` yourself, see [try catch](../../../Rascal/Statements/TryCatch/index.md) statement.

#### Examples

Division by 0 gives an error:

```rascal-shell ,error
rascal>3/0;
|prompt:///|(2,1,<1,2>,<1,3>): ArithmeticException("/ by zero")
ok
```
Giving an out-of-range argument to a mathematical function also gives an error:

```rascal-shell ,error
rascal>import util::Math;
ok
rascal>tan(-550000000000000000000000);
|std:///util/Math.rsc|(10935,264,<622,0>,<640,28>): ArithmeticException("x should be between -(pi/2) and (pi/2)")
	at *** somewhere ***(|std:///util/Math.rsc|(10935,264,<622,0>,<640,28>))
	at tan(|prompt:///|(5,24,<1,5>,<1,29>))
ok
```
We can also catch the `ArithmeticException` error. First import the Rascal exceptions (which are also included in `Prelude`)
and `IO`:

```rascal-shell ,error
rascal>import Exception;
ok
rascal>import IO;
ok
rascal>try println(3/0); catch ArithmeticException(msg): println("The message is: <msg>");
try println(3/0); catch ArithmeticException(msg): println("The message is: <msg>");
The message is: / by zero
ok
```


