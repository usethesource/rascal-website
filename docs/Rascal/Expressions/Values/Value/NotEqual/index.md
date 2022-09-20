---
title: Value NotEqual
keywords:
  - "!="

---

#### Synopsis

Not equal operator on values.

#### Syntax

`Exp<sub>1</sub> != Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>`   | `Exp<sub>2</sub>` | `Exp<sub>1</sub> != Exp<sub>2</sub>`  |
| --- | --- | --- |
| `value`     |  `value`  | `bool`                |


#### Function

#### Description

Yields `true` if both arguments are not identical and `false` otherwise.

#### Examples

Introduce two variables `X`, `Y` and `Z` and force them to be of type `value`:

```rascal-shell
rascal>value X = "abc";
value: "abc"
rascal>value Y = "abc";
value: "abc"
rascal>value Z = 3.14;
value: 3.14
```
Now compare `X` and `Y` for inequality:

```rascal-shell
rascal>X != Y;
bool: false
```
and `X` and `Z`:

```rascal-shell
rascal>X != Z;
bool: true
```

#### Benefits


