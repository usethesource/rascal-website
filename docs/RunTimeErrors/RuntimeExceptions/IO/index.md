---
title: IO
---

#### Synopsis

An input/output operation caused an error.

#### Types

`data RuntimeException = IO(str message);`
       
#### Usage

`import Exception;` (only needed when `IO` is used in `catch`)

#### Description

This error can be generated for many reasons.

First there may be a problem in the [location](../../../Rascal/Expressions/Values/Location/) that is used.
It maybe that the _schemes_ is not supported.
Examples of supported schemes include `http`, `file`, `home`, `std`, `rascal` and `project`.
It can also be the case that the _host_ that occurs in the location cannot be found.

Second, while trying to open the file things can go wrong like insufficient access rights

Finally, actual reading or writing can fail (device failure, device full, and the like).

Remedies:

*  Check for any errors in the location you are using.
*  Check that you are allowed to read or write the resource indicated by the location.
*  Catch `IO` using a [try catch](../../../Rascal/Statements/TryCatch/).

#### Examples

Import the `IO` library and attempt to use a non-existing scheme:

```rascal-shell ,error
rascal>import IO;
ok
rascal>readFile(|myScheme:///example.rsc|);
|std:///IO.rsc|(12843,1654,<586,0>,<623,24>): IO("Unsupported scheme \'myScheme\'")
	at *** somewhere ***(|std:///IO.rsc|(12843,1654,<586,0>,<623,24>))
	at readFile(|prompt:///|(9,25,<1,9>,<1,34>))
ok
```
We can catch this `IO` error. First import the Rascal exceptions (which are also included in `Prelude`):

```rascal-shell ,continue,error
rascal>import Exception;
ok
rascal>try 
>>>>>>>  readFileLines(|myScheme:///example.rsc|); 
>>>>>>>catch IO(msg): 
>>>>>>>  println("This did not work: <msg>");
  println("This did not work: <msg>");
This did not work: Unsupported scheme 'myScheme'
ok
```

