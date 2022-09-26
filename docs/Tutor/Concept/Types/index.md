---
title: Types
---

#### Synopsis

Part of the synopsis that describes any types or typing rules introduced by this concept.

#### Syntax

```
#### Types

_MarkedText_
```

#### Description

The `Types` section describes any types that are involved in the concept that is described.
The description can be just text, but in many cases a table is useful to describe types.


#### Examples

Here is a type description of an if-then-else statement:

```
#### Types

| `Exp` | `if ( Exp ) Statement;`  |
``` | 
| `bool`  |  `void`                      |



| `Exp` | `Statement₁` | `Statement₂` | `if ( Exp ) Statement₁ else Statement₂;`  |
| --- | --- | --- | --- |
| `bool`  |  T₁        | T₂         | `lub(T₁, T₂)`                               |

----

The result will be displayed as:

#### Types

| `Exp` | `if ( Exp ) Statement;`  |
| --- | --- |
| `bool`  |  `void`                      |



| `Exp` | `Statement₁` | `Statement₂` | `if ( Exp ) Statement₁ else Statement₂;`  |
| --- | --- | --- | --- |
| `bool`  |  T₁        | T₂         | `lub(T₁, T₂)`                               |


#### Benefits

* The reader gets an immediate overview of how to use an expression or a function

#### Pitfalls

* There may be many different ways of using an operator, combinatorially many, which can not be explored visually in a list or a table.
* These type signatures are written manually and not generated from source (yet)

