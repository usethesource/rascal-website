---
title: Boolean Match
keywords:
  - ":="

---

#### Synopsis

Match a pattern against an expression.

#### Syntax

`Pat := Exp`

#### Types

//

| `Pat`      | `Exp` |`Pat := Exp` |
| --- | --- | --- |
| [Patterns](/docs//Rascal/Patterns) | `value` | `bool`         |


#### Function

#### Description

See [Pattern Matching](/docs//RascalConcepts/PatternMatching) for an introduction to pattern matching and [Patterns](/docs//Rascal/Patterns) for a complete description.

#### Examples


```rascal-shell
rascal>123 := 456;
bool: false
rascal>[10, *n, 50] := [10, 20, 30, 40, 50];
bool: true
rascal>{10, *int n, 50} := {50, 40, 30, 30, 10};
bool: true
```
#### Benefits


