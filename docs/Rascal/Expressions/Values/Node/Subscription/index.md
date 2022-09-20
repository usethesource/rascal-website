---
title: Node Subscription
keywords:
  - "["
  - "]"
---

#### Synopsis

Retrieve an argument of a node via its index.

#### Syntax

`Exp<sub>1</sub> [ Exp<sub>2</sub> ]`

#### Types


| `Exp<sub>1</sub>`     | `Exp<sub>2</sub>` | `Exp<sub>1</sub> [ Exp<sub>2</sub> ]`  |
| --- | --- | --- |
| `node`        | `int`     | `value`                 |


#### Function

#### Description

Node subscription uses the integer value of _Exp_<sub>2</sub> as index in the argument list of the node value of _Exp_<sub>1</sub>.
The value of _Exp_<sub>2</sub> should be greater or equal 0 and less than the number of arguments of the node.
If this is not the case, the exception `IndexOutOfBounds` is thrown.

#### Examples


```rascal-shell
```
Introduce a node, assign it to F and retrieve the various arguments:

```rascal-shell
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

```rascal-shell
rascal>F[3];
|prompt:///|(2,1,<1,2>,<1,3>): IndexOutOfBounds(3)
	at $shell$(|prompt:///|(0,5,<1,0>,<1,5>))
ok
```

       

