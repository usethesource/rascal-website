---
title: Node Subscription
keywords:
  - "["
  - "]"
---

#### Synopsis

Retrieve an argument of a node via its index.

#### Syntax

`Exp~1~ [ Exp~2~ ]`

#### Types

| `Exp~1~`     | `Exp~2~` | `Exp~1~ [ Exp~2~ ]`  |
| --- | --- | --- |
| `node`        | `int`     | `value`                 |

#### Description

Node subscription uses the integer value of _Exp_~2~ as index in the argument list of the node value of _Exp_~1~.
The value of _Exp_~2~ should be greater or equal 0 and less than the number of arguments of the node.
If this is not the case, the exception `IndexOutOfBounds` is thrown.

#### Examples

```rascal-shell ,error
```
Introduce a node, assign it to F and retrieve the various arguments:

```rascal-shell ,continue,error
rascal>F = "f"(1, "abc", false);
node: "f"(1,"abc",false)
rascal>F[0]
value: 1
rascal>F[1]
value: "abc"
rascal>F[2]
value: false
```
Explore an error case:

```rascal-shell ,continue,error
rascal>F[3];
|prompt:///|(2,1,<1,2>,<1,3>): IndexOutOfBounds(3)
	at $shell$(|prompt:///|(0,5,<1,0>,<1,5>))
ok
```

