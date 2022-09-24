---
title: Value NotEqual
keywords:
  - "!="

---

#### Synopsis

Not equal operator on values.

#### Syntax

`Exp~1~ != Exp~2~`

#### Types

| `Exp~1~`   | `Exp~2~` | `Exp~1~ != Exp~2~`  |
| --- | --- | --- |
| `value`     |  `value`  | `bool`                |

#### Description

Yields `true` if both arguments are not identical and `false` otherwise.

#### Examples

Introduce two variables `X`, `Y` and `Z` and force them to be of type `value`:

```rascal-shell ,continue
rascal>value X = "abc";
value: "abc"
rascal>value Y = "abc";
value: "abc"
rascal>value Z = 3.14;
value: 3.14
```
Now compare `X` and `Y` for inequality:

```rascal-shell ,continue
rascal>X != Y;
bool: false
```
and `X` and `Z`:

```rascal-shell ,continue
rascal>X != Z;
bool: true
```

