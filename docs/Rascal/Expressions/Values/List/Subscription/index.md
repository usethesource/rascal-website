---
title: List Subscription
keywords:
  - "["
  - "]"

---

#### Synopsis

Retrieve a list element via its index.

#### Syntax

`Exp₁ [ Exp₂ ]`

#### Types

//

| `Exp₁`     | `Exp₂` | `Exp₁ [ Exp₂ ]` |
| --- | --- | --- |
| `list[T₁]` | `int`     | `T₁`              |


#### Description

List subscription uses the integer value of _Exp_₂ as index in the list value of _Exp_₁.
The value of _Exp_₂ should be greater or equal 0 and less than the number of elements in the list.
If this is not the case, the exception `IndexOutOfBounds` is thrown.

#### Examples

Introduce a list, assign it to L and retrieve the element with index 1:

```rascal-shell ,continue,error
rascal>L = [10, 20, 30];
list[int]: [10,20,30]
rascal>L[1];
int: 20
```
Explore an error case:

```rascal-shell ,continue,error
rascal>L[5];
|prompt:///|(2,1,<1,2>,<1,3>): IndexOutOfBounds(5)
	at $shell$(|prompt:///|(0,5,<1,0>,<1,5>))
ok
```


