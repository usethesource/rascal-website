---
title: Map Composition
keywords:
  - o

---

#### Synopsis

Composition of two map values.

#### Syntax

`Exp<sub>1</sub> o Exp<sub>2</sub>`

#### Types

|`Exp<sub>1</sub>`            | `Exp<sub>2</sub>`           | `Exp<sub>1</sub> o Exp<sub>2</sub>`  |
| --- | --- | --- |
| `map[T<sub>1</sub>, T<sub>2</sub>]` | `map[T<sub>2</sub>, T<sub>3</sub>]` | `map[T<sub>1</sub>, T<sub>3</sub>]`  |


#### Function

#### Description

Returns the composition of two maps.

#### Examples


```rascal-shell
rascal>import Map;
ok
rascal>("one" : 1, "two" : 2) o (1 : 10, 2 : 20);
map[str, int]: ("one":10,"two":20)
```

#### Benefits

#### Pitfalls

We use the letter `o` as operator and this may conflict other defined names.

