---
title: Node
keywords:
  - "("
  - ")"
---

#### Synopsis

Node values.

#### Syntax

`Exp₀ ( Exp₁, Exp₂, ..., FieldName₁ = Expr~1, FieldName₂ = Expr₂, ... )`

#### Types


|`Exp₀`  | `Exp₁` | `Exp₂` | ... | `Exp₀ ( Exp₁, Exp₂, ... )`  |
| --- | --- | --- | --- | --- |
| `str`      | `value`    | `value`    | ... | `node`                               |


#### Description

Values of type `node` represent untyped trees and are constructed as follows:

* the string value of _Exp₀_ is the node name;
* zero or more expressions of type `value` are the node\'s children.
* optionally, unordered named fields can be added as well.

The following are provided for nodes:
* [Equal](../../../../Rascal/Expressions/Values/Node/Equal/index.md)
* [GreaterThan](../../../../Rascal/Expressions/Values/Node/GreaterThan/index.md)
* [GreaterThanOrEqual](../../../../Rascal/Expressions/Values/Node/GreaterThanOrEqual/index.md)
* [LessThan](../../../../Rascal/Expressions/Values/Node/LessThan/index.md)
* [LessThanOrEqual](../../../../Rascal/Expressions/Values/Node/LessThanOrEqual/index.md)
* [NotEqual](../../../../Rascal/Expressions/Values/Node/NotEqual/index.md)
* [Slice](../../../../Rascal/Expressions/Values/Node/Slice/index.md)
* [Subscription](../../../../Rascal/Expressions/Values/Node/Subscription/index.md)

#### Examples

A node with name "my_node" and three arguments:

```rascal-shell ,continue
rascal>"my_node"(1, true, "abc");
node: "my_node"(1,true,"abc")
```
A nested node structure:

```rascal-shell ,continue
rascal>"my_node1"(1, "my_node2"(3.5, ["a", "b", "c"]), true);
node: "my_node1"(
  1,
  "my_node2"(
    3.5,
    ["a","b","c"]),
  true)
```
A node with named fields:

```rascal-shell ,continue
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

