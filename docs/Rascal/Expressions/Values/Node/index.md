---
title: Node
keywords:
  - "("
  - ")"
---

#### Synopsis

Node values.

#### Syntax

`Exp<sub>0</sub> ( Exp<sub>1</sub>, Exp<sub>2</sub>, ..., FieldName<sub>1</sub> = Expr~1, _FieldName<sub>2</sub> = Expr~2, ... )`

#### Types


|`Exp<sub>0</sub>`  | `Exp<sub>1</sub>` | `Exp<sub>2</sub>` | ... | `Exp<sub>0</sub> ( Exp<sub>1</sub>, Exp<sub>2</sub>, ... )`  |
| --- | --- | --- | --- | --- |
| `str`      | `value`    | `value`    | ... | `node`                               |


#### Usage

#### Function

#### Description

Values of type `node` represent untyped trees and are constructed as follows:

* the string value of _Exp<sub>0</sub>_ is the node name;
* zero or more expressions of type `value` are the node\'s children.
* optionally, unordered named fields can be added as well.

The following are provided for nodes:
* ((Rascal:Expressions/Values/Node))
* ((Rascal:Expressions/Values/Node/Equal))
* ((Rascal:Expressions/Values/Node/GreaterThan))
* ((Rascal:Expressions/Values/Node/GreaterThanOrEqual))
* ((Rascal:Expressions/Values/Node/LessThan))
* ((Rascal:Expressions/Values/Node/LessThanOrEqual))
* ((Rascal:Expressions/Values/Node/NotEqual))
* ((Rascal:Expressions/Values/Node/Slice))
* ((Rascal:Expressions/Values/Node/Subscription))

#### Examples

A node with name "my_node" and three arguments:

```rascal-shell
rascal>"my_node"(1, true, "abc");
node: "my_node"(1,true,"abc")
```
A nested node structure:

```rascal-shell
rascal>"my_node1"(1, "my_node2"(3.5, ["a", "b", "c"]), true);
node: "my_node1"(
  1,
  "my_node2"(
    3.5,
    ["a","b","c"]),
  true)
```
A node with named fields:

```rascal-shell
rascal>"my_node2"(1,2,size=2,age=24);
node: "my_node2"(1,2,
  size=2,
  age=24)
```

#### Benefits

* nodes are untyped and can be used to quickly import untyped data into Rascal
* pattern matching on nodes is quite expressive

#### Pitfalls

* the lack of types at run-time makes pattern matching on node possibly inaccurate (you might match more than you think)

