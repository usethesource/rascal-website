---
title: Tuple Concatenation
keywords:
  - "+"

---

#### Synopsis

Concatenate two tuple values.

#### Syntax

`Exp<sub>1</sub> + Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>`                      |  `Exp2_`                      | `Exp<sub>1</sub> > Exp2_`                                 |
| --- | --- | --- |
| `tuple[ T<sub>11</sub>, T<sub>12</sub>, ... ]` |  `tuple[ T<sub>21</sub>, T<sub>22</sub>, ... ]` | `tuple[ T<sub>11</sub>, T<sub>12</sub>, ..., T<sub>21</sub>, T<sub>22</sub>, ... ]` |


#### Function

#### Description

Returns a tuple consisting of the concatenation of the tuple elements of _Exp_<sub>1</sub> and _Exp_<sub>2</sub>.

#### Examples


```rascal-shell
rascal><"abc", 1, 2.5> + <true, "def">;
tuple[str,int,real,bool,str]: <"abc",1,2.5,true,"def">
```

#### Benefits


