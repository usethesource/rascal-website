---
title: Map Composition
keywords:
  - o

---

#### Synopsis

Composition of two map values.

#### Syntax

`Exp₁ o Exp₂`

#### Types

|`Exp₁`            | `Exp₂`           | `Exp₁ o Exp₂`  |
| --- | --- | --- |
| `map[T₁, T₂]` | `map[T₂, T₃]` | `map[T₁, T₃]`  |


#### Description

Returns the composition of two maps.

#### Examples


```rascal-shell 
rascal>import Map;
ok
rascal>("one" : 1, "two" : 2) o (1 : 10, 2 : 20);
map[str, int]: ("one":10,"two":20)
```

#### Pitfalls

We use the letter `o` as operator and this may conflict other defined names.

