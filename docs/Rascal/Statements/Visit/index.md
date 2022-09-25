---
title: Visit
keywords:
  - visit

---

#### Synopsis

The [Visit](../../../Rascal/Expressions/Visit/index.md) expression can also be used directly as a statement

#### Syntax

See [Visit](../../../Rascal/Expressions/Visit/index.md).

#### Description

See [Visit](../../../Rascal/Expressions/Visit/index.md) for the details.

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


