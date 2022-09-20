---
title: String Subscription
keywords:
  - "["
  - "]"
---

#### Synopsis

Retrieve a substring via its index.

#### Syntax

`Exp<sub>1</sub> [ Exp<sub>2</sub> ]`

#### Types


| `Exp<sub>1</sub>`     | `Exp<sub>2</sub>` | `Exp<sub>1</sub> [ Exp<sub>2</sub> ]`  |
| --- | --- | --- |
| `str`         | `int`     | `str`                  |


#### Function

#### Description

String subscription uses the integer value of _Exp_<sub>2</sub> as index in the string value of _Exp_<sub>1</sub>.
The value of _Exp_<sub>2</sub> should be greater or equal 0 and less than the number of characters in the string.
If this is not the case, the exception `IndexOutOfBounds` is thrown.

#### Examples

Introduce a string, assign it to S and retrieve the element with index 1:

```rascal-shell
rascal>S = "abc";
str: "abc"
rascal>S[1];
str: "b"
```
Explore an error case:

```rascal-shell
rascal>S[5];
|prompt:///|(2,1,<1,2>,<1,3>): IndexOutOfBounds(5)
	at $shell$(|prompt:///|(0,5,<1,0>,<1,5>))
ok
```

       

