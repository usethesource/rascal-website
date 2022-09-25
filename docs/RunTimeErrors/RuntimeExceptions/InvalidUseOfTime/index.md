---
title: Invalid Use Of Time
---

#### Synopsis

Invalid use of a time value at runtime


#### Types

`data RuntimeException = InvalidUseOfTime(str message);`
       
#### Usage

`import Exception;` (only needed when `InvalidUseOfTime` is used in `catch`)

#### Description

Thrown by operations on time values that
try to update unavailable information.

#### Examples

Setting the `year` field on a time value throws an exception:

```rascal-shell ,error
rascal>NOW = $T20:11:01.463+00:00$;
ok
rascal>NOW.year = 2020;
|prompt:///|(0,3,<1,0>,<1,3>): Undeclared variable: NOW
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredVariable/UndeclaredVariable.html|
ok
```

NOTE: Exception is not shown properly

