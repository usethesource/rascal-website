---
title: Invalid Use Of Date
---

#### Synopsis

Invalid of of a date at runtime

#### Types

`data RuntimeException = InvalidUseOfDate(str message);`
       
#### Usage

`import Exception;` (only needed when `InvalidUseOfDate` is used in `catch`)

#### Description

Thrown by operations on date values that
try to update unavailable information.

#### Examples

Setting the `hour` field on a date value throws an exception:

```rascal-shell ,error
rascal>NOW = $2016-09-18$;
datetime: $2016-09-18$
rascal>NOW.hour = 14;
|prompt:///|(11,2,<1,11>,<1,13>): Can not retrieve the hour on a date value
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedOperation/UnsupportedOperation.html|
ok
```

NOTE: Exception is not shown properly

