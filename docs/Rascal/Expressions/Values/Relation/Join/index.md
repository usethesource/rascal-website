---
title: Relation Join
keywords:
  - join

---

#### Synopsis

Join two relation values.

#### Syntax

`Exp<sub>1</sub> join Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>`                            |  `Exp<sub>2</sub>`                            | `Exp<sub>1</sub> join Exp<sub>2</sub>`                                             |
| --- | --- | --- |
| `rel[ T<sub>11</sub>, T<sub>12</sub>, T<sub>13</sub>, ... ]` |  `rel[ T<sub>21</sub>, T<sub>22</sub>, T<sub>23</sub>, ... ]` | `rel[ T<sub>11</sub>, T<sub>12</sub>, T<sub>13</sub>, ..., T<sub>21</sub>, T<sub>22</sub>, T<sub>23</sub>, ... ]`  |


#### Function

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

#### Benefits


