---
title: Assert
keywords:
  - assert

---

#### Synopsis

An executable assertion.

#### Syntax

*  `assert Exp~1~`
*  `assert Exp~1~ : Exp~2~`

#### Types


| `Exp~1~` | `Exp~2~`  |
| --- | --- |
| `bool`    | `str`      |


#### Description

An assert statement may occur everywhere where a declaration is allowed. It has two forms:

An assert statement consists of a Boolean expression _Exp_~1~ and an optional string expression _Exp_~2~
that serves as a identifying message for this assertion. 

When _Exp_~1~ evaluates to `false`, an `AssertionFailed` exception is thrown.

#### Examples


```rascal-shell ,error
rascal>assert 1==2 : "is never true";
|prompt:///|(14,15,<1,14>,<1,29>): AssertionFailed("is never true")
	at $shell$(|main://$shell$|)
ok
rascal>int div(int x, int y) {
>>>>>>>  assert y != 0 : "y must be non-zero";
>>>>>>>  return x / y;
>>>>>>>}
int (int, int): function(|prompt:///|(0,81,<1,0>,<4,1>))
rascal>div(4,0);
|prompt:///|(42,20,<2,18>,<2,38>): AssertionFailed("y must be non-zero")
	at div(|prompt:///|(0,81,<1,0>,<4,1>))
	at $shell$(|prompt:///|(0,9,<1,0>,<1,9>))
ok
```


