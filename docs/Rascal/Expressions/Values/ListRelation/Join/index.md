---
title: ListRelation Join
keywords:
  - join

---

#### Synopsis

Join two list relation values.

#### Syntax

`Exp<sub>1</sub> join Exp<sub>2</sub>`

#### Types

//


| `Exp<sub>1</sub>`                               |  `Exp<sub>2</sub>`                               | `Exp<sub>1</sub> join Exp<sub>2</sub>`                                              |
| --- | --- | --- |
| `lrel[ T<sub>11</sub>, T<sub>12</sub>, T<sub>13</sub>, ... ]` |  `lrel[ T<sub>21</sub>, T<sub>22</sub>, T<sub>23</sub>, ... ]` | `lrel[ T<sub>11</sub>, T<sub>12</sub>, T<sub>13</sub>, ..., T<sub>21</sub>, T<sub>22</sub>, T<sub>23</sub>, ... ]`  |


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


