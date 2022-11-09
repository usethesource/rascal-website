---
title: UnsupportedSubscript
---

#### Synopsis

A subscript is applied to a value that does not support it.

#### Description

Subscription is available for values of various types including: 
[string](../../../../Rascal/Expressions/Values/String/Subscription/index.md), 
[node](../../../../Rascal/Expressions/Values/Node/Subscription/index.md),
[list](../../../../Rascal/Expressions/Values/List/Subscription/index.md), 
[map](../../../../Rascal/Expressions/Values/Map/Subscription/index.md), 
[tuple](../../../../Rascal/Expressions/Values/Tuple/Subscription/index.md) and 
[relation](../../../../Rascal/Expressions/Values/Relation/Subscription/index.md).
This error is generated when subscription is applied to a value for which it is not defined.

Remedies:

*  Use another operation than subscription to extract the values you want.
*  Use another type (that does support subscription) to represent your data.

#### Examples

Here are some correct uses of subscription:

```rascal-shell 
rascal>"abc"[1];
str: "b"
rascal>[1,2,3][1];
int: 2
rascal>"f"(1,2,3)[1];
value: 2
rascal>("a":1, "b":2, "c":3)["b"]
int: 2
```
Here are some erroneous examples:

```rascal-shell ,error
rascal>true[1];
|prompt:///|(5,1,<1,5>,<1,6>): subscript not supported on bool at |prompt:///|(5,1,<1,5>,<1,6>)
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedOperation/UnsupportedOperation.html|
ok
rascal>123[1];
|prompt:///|(4,1,<1,4>,<1,5>): subscript not supported on int at |prompt:///|(4,1,<1,4>,<1,5>)
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedOperation/UnsupportedOperation.html|
ok
rascal>{1,2,3}[1];
|prompt:///|(8,1,<1,8>,<1,9>): subscript not supported on set[int] at |prompt:///|(8,1,<1,8>,<1,9>)
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedOperation/UnsupportedOperation.html|
ok
```


