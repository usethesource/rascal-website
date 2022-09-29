---
title: Boolean All
keywords:
  - all

---

#### Synopsis

All argument expressions are true.

#### Syntax

`all ( Exp₁, Exp₂, ... )`

#### Types

//

| `Exp₁` | `Exp₂` | ... | `all ( Exp₁, Exp₂, ... )` |
| --- | --- | --- | --- |
|`bool`     | `bool`    | ... | `bool`                           |


#### Description

Yields `true` when all combinations of values of _Exp_ᵢ are true.

#### Examples

Are all integers 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 even?

```rascal-shell ,continue
rascal>all(int n <- [1 .. 10], n % 2 == 0);
bool: false
```
Are all integers 0, 2, 4, 6, 8, 10 even?

```rascal-shell ,continue
rascal>all(int n <- [0, 2 .. 10], n % 2 == 0);
bool: true
```

When one of the _Exp_ᵢ enumerates the elements of an empty list, `all` always returns `true`:

```rascal-shell 
rascal>all(int n <- [], n > 0);
bool: false
```

#### Pitfalls

WARNING: The Rascal interpreter and compiler give different results on an empty list. 
The interpreter returns `fals` for the abo eexample.
