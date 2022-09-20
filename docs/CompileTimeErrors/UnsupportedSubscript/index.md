---
title: UnsupportedSubscript
---

#### Synopsis

A subscript is applied to a value that does not support it.

#### Syntax

#### Types

#### Function
       
#### Usage

#### Description

Subscription is available for values of various types including: 
[string](/Rascal/Expressions/Values/String/Subscription), 
[node](/Rascal/Expressions/Values/Node/Subscription),
[list](/Rascal/Expressions/Values/List/Subscription), 
[map](/Rascal/Expressions/Values/Map/Subscription), 
[tuple](/Rascal/Expressions/Values/Tuple/Subscription) and 
[relation](/Rascal/Expressions/Values/Relation/Subscription).
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

```rascal-shell
rascal>true[1];
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

#### Benefits


