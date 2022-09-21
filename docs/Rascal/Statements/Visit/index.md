---
title: Visit
keywords:
  - visit

---

#### Synopsis

The [Visit](/docs//Rascal/Expressions/Visit) expression can also be used directly as a statement

#### Syntax

See [Visit](/docs//Rascal/Expressions/Visit).

#### Types

#### Function

#### Description

See [Visit](/docs//Rascal/Expressions/Visit) for the details.

#### Examples


```rascal-shell
rascal>x = [[1],[2],[3]];
list[list[int]]: [
  [1],
  [2],
  [3]
]
rascal>if (true) {
```
this visit is a nested statement in an if block:
```rascal-shell
>>>>>>>  visit (x) {
>>>>>>>    case int i => i + 1
>>>>>>>  }
>>>>>>>}
list[list[int]]: [
  [2],
  [3],
  [4]
]
```

#### Benefits


