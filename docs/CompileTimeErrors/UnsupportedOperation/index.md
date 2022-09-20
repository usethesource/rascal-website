---
title: UnsupportedOperation
---

#### Synopsis

Attempt to apply a operation to a value for which the operation is not defined.

#### Syntax

#### Types

#### Function
       
#### Usage

#### Description

This error is generated when an unsupported operation is applied to (a combination of) values.
There can be many causes for this as illustrated below.

Remedies: 

*  Change the operation to another operations that is supported on the given values.
*  Change the values so that the operation can be applied to them.
*  Rewrite the expression compleye to get the effect you intended.

#### Examples


```rascal-shell
rascal>L = [1,2,3];
list[int]: [1,2,3]
```
Division is not supported on lists:

```rascal-shell
rascal>[1, 2, 3] / 4;
|prompt:///|(12,1,<1,12>,<1,13>): division not supported on list[int] and int
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedOperation/UnsupportedOperation.html|
ok
```
Combined multiplication and assignment is not supported either:

```rascal-shell
rascal>L *= 3;
|prompt:///|(5,1,<1,5>,<1,6>): multiplication not supported on list[int] and list[int]
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedOperation/UnsupportedOperation.html|
ok
```
Taking the time from a date-only value is not supported:

```rascal-shell
rascal>$2010-07-15$.justTime;
|prompt:///|(0,12,<1,0>,<1,12>): Can not retrieve the time component of a date value
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedOperation/UnsupportedOperation.html|
ok
```
Calling an integer as a function is not supported:

```rascal-shell
rascal>17(3, "abc");
|prompt:///|(6,5,<1,6>,<1,11>): A value of type int is not something you can call like a function, a constructor or a closure.
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedOperation/UnsupportedOperation.html|
ok
```

#### Benefits


