---
title: ListRelation Join
keywords:
  - join

---

#### Synopsis

Join two list relation values.

#### Syntax

`Exp~1~ join Exp~2~`

#### Types

//

| `Exp~1~`                               |  `Exp~2~`                               | `Exp~1~ join Exp~2~`                                              |
| --- | --- | --- |
| `lrel[ T~11~, T~12~, T~13~, ... ]` |  `lrel[ T~21~, T~22~, T~23~, ... ]` | `lrel[ T~11~, T~12~, T~13~, ..., T~21~, T~22~, T~23~, ... ]`  |

#### Description

ListRelation resulting from the natural join of the list relation values of the two arguments.
This list relation contains tuples that are the result from concatenating the elements from both arguments.

#### Examples

```rascal-shell 
rascal>[<1,2>, <10,20>] join [<2,3>];
lrel[int,int,int,int]: [
  <1,2,2,3>,
  <10,20,2,3>
]
rascal>[<1,2>] join [3, 4];
lrel[int,int,int]: [
  <1,2,3>,
  <1,2,4>
]
rascal>[<1,2>, <10,20>] join [<2,3>, <20,30>];
lrel[int,int,int,int]: [
  <1,2,2,3>,
  <1,2,20,30>,
  <10,20,2,3>,
  <10,20,20,30>
]
```

