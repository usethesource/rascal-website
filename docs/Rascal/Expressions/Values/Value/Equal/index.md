---
title: Value Equal
keywords:
  - "=="

---

#### Synopsis

Equal operator on values.

#### Syntax

`Exp<sub>1</sub> == Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>`   | `Exp<sub>2</sub>` | `Exp<sub>1</sub> == Exp<sub>2</sub>`  |
| --- | --- | --- |
| `value`     |  `value`  | `bool`                |


#### Description

Yields `true` if both arguments are identical and `false` otherwise.

#### Examples


```rascal-shell
```
Introduce two variables `X`, `Y` and `Z` and force them to be of type `value`:

```rascal-shell
rascal>value X = "abc";
value: "abc"
rascal>value Y = "abc";
value: "abc"
rascal>value Z = 3.14;
value: 3.14
```
Now compare `X` and `Y` for equality:

```rascal-shell
rascal>X == Y;
bool: true
```
and `X` and `Z`:

```rascal-shell
rascal>X == Z;
bool: false
```


