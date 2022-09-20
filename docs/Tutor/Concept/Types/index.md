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

#### Types

#### Function

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



| `Exp` | `Statement<sub>1</sub>` | `Statement<sub>2</sub>` | `if ( Exp ) Statement<sub>1</sub> else Statement<sub>2</sub>;`  |
| --- | --- | --- | --- |
| `bool`  |  T<sub>1</sub>        | T<sub>2</sub>         | `lub(T<sub>1</sub>, T<sub>2</sub>)`                               |

----

The result will be displayed as:

#### Types

| `Exp` | `if ( Exp ) Statement;`  |
| --- | --- |
| `bool`  |  `void`                      |



| `Exp` | `Statement<sub>1</sub>` | `Statement<sub>2</sub>` | `if ( Exp ) Statement<sub>1</sub> else Statement<sub>2</sub>;`  |
| --- | --- | --- | --- |
| `bool`  |  T<sub>1</sub>        | T<sub>2</sub>         | `lub(T<sub>1</sub>, T<sub>2</sub>)`                               |


#### Benefits


