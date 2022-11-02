---
title: Throw
keywords:
  - throw
  - exception
---

#### Synopsis

Throw any value as an exception up the call stack.

#### Syntax

```rascal
throw Exp;
```

#### Description

A throw statement causes the immediate abortion of the execution of the current function with _Exp_ \'s value as exception value.
The exception can be caught by a [Try Catch](../../../Rascal/Statements/TryCatch/index.md) statement in the current function or in one of its callers.
If the exception is not caught, the execution of the Rascal program is terminated. The following rules apply:

* Although it is not necessary, it is a coding standard to use the [./algebraic data type](../../../Rascal/Declarations/AlgebraicDataType/index.md) `RuntimeException`, see [RuntimeException](../../../Library/Exception.md#Exception-RuntimeException) to throw as _Exp_.
* Use new [./algebraic data type](../../../Rascal/Declarations/AlgebraicDataType/index.md) data declarations that extend the type `RuntimeException` to create your own exception kinds.
* In general _Exp_ can be any value. 

See [try catch](../../../Rascal/Statements/TryCatch/index.md) for handling thrown values.

#### Examples

Here is a variant of string concatenation for ball haters:

```rascal-shell ,error
rascal>str conc(str x, str y) { 
>>>>>>>  if ("ball" in {x, y}) 
>>>>>>>    throw "I hate balls"; 
>>>>>>>  return x + y; 
>>>>>>>}
str (str, str): function(|prompt:///|(0,96,<1,0>,<5,1>))
rascal>conc("fairy", "tale");
str: "fairytale"
rascal>conc("foot", "ball");
|prompt:///|(61,14,<3,10>,<3,24>): "I hate balls"
	at conc(|prompt:///|(28,52,<2,2>,<4,2>))
	at $shell$(|prompt:///|(0,21,<1,0>,<1,21>))
ok
```

Here we throw an integer:

```rascal-shell ,error
rascal>import List;
ok
rascal>aList = [1,2,3];
list[int]: [1,2,3]
rascal>if (size(aList) == 3) {
>>>>>>>  throw size(aList);
>>>>>>>}
|prompt:///|(37,5,<2,13>,<2,18>): 3
	at $shell$(|prompt:///|(22,24,<1,22>,<3,1>))
ok
```

Here we throw a constructor of [RuntimeException](../../../Library/Exception.md#Exception-RuntimeException):

```rascal-shell ,error
rascal>import Exception;
ok
```
highlight-next-line
```rascal-shell
rascal>data RuntimeException = facUndefinedOn(int cause);
ok
rascal>int fac(int n) {
>>>>>>>  if (n < 0) {
```
highlight-next-line
```rascal-shell
>>>>>>>    throw facUndefinedOn(n);
>>>>>>>  }
>>>>>>>  else if (n == 0) {
>>>>>>>    return 1;
>>>>>>>  }
>>>>>>>  else {
>>>>>>>    return n * fac(n - 1);
>>>>>>>  }
>>>>>>>}
int (int): function(|prompt:///|(0,145,<1,0>,<11,1>))
rascal>fac(-1)
|prompt:///|(57,1,<3,25>,<3,26>): facUndefinedOn(-1)
	at fac(|prompt:///|(30,34,<2,13>,<4,3>))
	at $shell$(|prompt:///|(0,145,<1,0>,<11,1>))
ok
```


