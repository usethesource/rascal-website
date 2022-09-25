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
| [Patterns](../../../../../Rascal/Patterns/index.md) | `value` | `bool`         |


#### Description

See [Pattern Matching](../../../../../RascalConcepts/PatternMatching/index.md) for an introduction to pattern matching and [Patterns](../../../../../Rascal/Patterns/index.md) for a complete description.

#### Examples


```rascal-shell 
rascal>123 := 456;
bool: false
rascal>[10, *n, 50] := [10, 20, 30, 40, 50];
bool: true
rascal>{10, *int n, 50} := {50, 40, 30, 30, 10};
bool: true
```

