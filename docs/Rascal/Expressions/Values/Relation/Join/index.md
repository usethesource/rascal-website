---
title: Relation Join
keywords:
  - join

---

#### Synopsis

Join two relation values.

#### Syntax

`Exp~1~ join Exp~2~`

#### Types

| `Exp~1~`                            |  `Exp~2~`                            | `Exp~1~ join Exp~2~`                                             |
| --- | --- | --- |
| `rel[ T~11~, T~12~, T~13~, ... ]` |  `rel[ T~21~, T~22~, T~23~, ... ]` | `rel[ T~11~, T~12~, T~13~, ..., T~21~, T~22~, T~23~, ... ]`  |

#### Description

Relation resulting from the natural join of the relation values of the two arguments.
This relation contains tuples that are the result from concatenating the elements from both arguments.

#### Examples

```rascal-shell 
rascal>{<1,2>, <10,20>} join {<2,3>};
rel[int,int,int,int]: {
  <1,2,2,3>,
  <10,20,2,3>
}
rascal>{<1,2>} join {3, 4};
rel[int,int,int]: {
  <1,2,3>,
  <1,2,4>
}
rascal>{<1,2>, <10,20>} join {<2,3>, <20,30>};
rel[int,int,int,int]: {
  <1,2,2,3>,
  <10,20,2,3>,
  <10,20,20,30>,
  <1,2,20,30>
}
```

