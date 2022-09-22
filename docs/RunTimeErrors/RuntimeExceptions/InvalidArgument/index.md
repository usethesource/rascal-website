---
title: Invalid Argument
---

#### Synopsis

A function or operation is applied to an invalid argument value.

#### Types

`data RuntimeException = InvalidArgument() | InvalidArgument(value v) | InvalidArgument(value v, str message);`
       
#### Usage

`import Exception;` (only needed when `InvalidArgument` is used in `catch`)

#### Description

This error is generated when a function or operation is applied to a value that it does not expect.

Remedies:

*  Check the value or values to which you apply the function or operation.

#### Examples

Changing the month of a [DateTime](../../../Rascal/Expressions/Values/DateTime) to an illegal month (13):

```rascal-shell
rascal>NOW = $2013-01-13T22:16:51.740+01:00$;
datetime: $2013-01-13T22:16:51.740+01:00$
rascal>NOW.month = 13;
|prompt:///|(12,2,<1,12>,<1,14>): IllegalArgument(13,"Cannot create date with provided values.")
ok
```

Setting the offset in a location to a negative value:

```rascal-shell
rascal>someLoc = |home:///abc.txt|;
loc: |home:///abc.txt|
rascal>someLoc.offset = -1;
|prompt:///|(18,1,<1,18>,<1,19>): UnavailableInformation()
	at $shell$(|main://$shell$|)
ok
```


