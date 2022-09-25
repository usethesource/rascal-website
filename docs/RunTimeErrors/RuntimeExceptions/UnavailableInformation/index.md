---
title: Unavailable Information
---

#### Synopsis

Requested information is unavailable at runtime


#### Types

`data RuntimeException = UnavailableInformation(str message);`
       
#### Usage

`import Exception;` (only needed when `UnavailableInformation` is used in `catch`)

#### Description

Several datetypes may contain optional information that is not always available:

* In a [datetime](../../../Rascal/Expressions/Values/DateTime/index.md) value the date or the time may be missing.
* In a [location](../../../Rascal/Expressions/Values/Location/index.md) value, various fields are optional, 
  e.g., `port`, `offset`, `begin` and `end`.
  
This exception is thrown when optional information is not available.

#### Examples


```rascal-shell ,error
rascal>$2016-09-14$.hour;
|prompt:///|(0,12,<1,0>,<1,12>): Can not retrieve the hour on a date value
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedOperation/UnsupportedOperation.html|
ok
rascal>someLoc = |home:///abc.txt|;
loc: |home:///abc.txt|
rascal>someLoc.offset;
|prompt:///|(0,7,<1,0>,<1,7>): UnavailableInformation()
	at $shell$(|prompt:///|(0,15,<1,0>,<1,15>))
ok
```

