---
title: List Subscription
keywords:
  - "["
  - "]"

---

#### Synopsis

Retrieve a list element via its index.

#### Syntax

`Exp<sub>1</sub> [ Exp<sub>2</sub> ]`

#### Types

//

| `Exp<sub>1</sub>`     | `Exp<sub>2</sub>` | `Exp<sub>1</sub> [ Exp<sub>2</sub> ]` |
| --- | --- | --- |
| `list[T<sub>1</sub>]` | `int`     | `T<sub>1</sub>`              |


#### Description

List subscription uses the integer value of _Exp_<sub>2</sub> as index in the list value of _Exp_<sub>1</sub>.
The value of _Exp_<sub>2</sub> should be greater or equal 0 and less than the number of elements in the list.
If this is not the case, the exception `IndexOutOfBounds` is thrown.

#### Examples

Introduce a list, assign it to L and retrieve the element with index 1:

```rascal-shell
rascal>L = [10, 20, 30];
list[int]: [10,20,30]
rascal>L[1];
int: 20
```
Explore an error case:

```rascal-shell
rascal>L[5];
|prompt:///|(2,1,<1,2>,<1,3>): IndexOutOfBounds(5)
	at $shell$(|prompt:///|(0,5,<1,0>,<1,5>))
ok
```


