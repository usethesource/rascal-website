---
title: Value LessThanOrEqual
keywords:
  - "<="

---

#### Synopsis

Less than or equal operator on values.

#### Syntax

`Exp<sub>1</sub> <= Exp<sub>2</sub>`

#### Types


| `Exp<sub>1</sub>` | `Exp<sub>2</sub>` | `Exp<sub>1</sub> <= Exp<sub>2</sub>`  |
| --- | --- | --- |
| `value`   |  `value`  | `bool`                |


#### Description

By brute force, a total less than operator between two values _V_<sub>1</sub> and _V_<sub>2</sub> of arbitrary types _T_<sub>1</sub> and _T_<sub>2</sub> is defined:

*  If the types _T<sub>1</sub>_ and _T<sub>2</sub>_ can be compared then _V<sub>1</sub>_ less than _V<sub>2</sub>_ is used.

*  Otherwise values are ordered according their type name, for instance, `int` is smaller than `list`, and `map` is smaller than `rel`.


Less than or equal yields `true` if the value of _Exp_<sub>1</sub> is strictly less
than (according to the ordering defined above) the value of _Exp_<sub>2</sub> or if both values are equal, and `false` otherwise.

#### Examples

Introduce two variables `X`, `Y` and `Z` and force them to be of type `value`:

```rascal-shell
rascal>value X = "abc";
value: "abc"
rascal>value Y = "def";
value: "def"
rascal>value Z = 3.14;
value: 3.14
```
Now compare `X` and `Y`:

```rascal-shell
rascal>X <= Y;
bool: true
```
and `X` and `Z`:

```rascal-shell
rascal>X <= Z;
bool: false
```


