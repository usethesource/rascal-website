---
title: Map Intersection
keywords:
  - "&"

---

#### Synopsis

Intersection of two maps.

#### Syntax

`Exp~1~ & Exp~2~`

#### Types

| `Exp~1~`    |  `Exp~2~`      | `Exp~1~ & Exp~2~`      |
| --- | --- | --- |
| `map[T~1~1, T12]` |  `set[T~2~]`   | `set[lub(T~1~,T~2~)]`  |

#### Description

Returns the intersection of the two map values of _Exp_~1~ and _Exp_~2~, i.e., a map that contains the key/value pairs that
occur in both maps.

#### Examples

```rascal-shell 
rascal>("apple": 1, "pear": 2) & ("banana": 3, "apple": 1);
map[str, int]: ("apple":1)
rascal>("apple": 1, "pear": 2) & ("banana": 3, "apple": 4);
map[str, int]: ()
```

