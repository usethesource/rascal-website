---
title: Value GreaterThanOrEqual
keywords:
  - ">="

---

#### Synopsis

Greater than or equal operator on values.

#### Syntax

`Exp₁ >= Exp₂`

#### Types


| `Exp₁` | `Exp₂` | `Exp₁ >= Exp₂` |
| --- | --- | --- |
| `value`   |  `value`  | `bool`               |


#### Description

By brute force, a total less than operator between two values _V_₁ and _V_₂ of arbitrary types _T_₁ and _T_₂ is defined:

*  If the types _T₁_ and _T₂_ can be compared then _V₁_ less than _V₂_ is used.

*  Otherwise values are ordered according their type name, for instance, `int` is smaller than `list`, and `map` is smaller than `rel`.


Greater than or equal yields `true` if the value of _Exp_₂ is strictly less
than (according to the ordering defined above) the value of _Exp_₁ or if both values are equal, and `false` otherwise.

#### Examples

Introduce two variables `X`, `Y` and `Z` and force them to be of type `value`:

```rascal-shell ,continue
rascal>value X = "def";
value: "def"
rascal>value Y = "abc";
value: "abc"
rascal>value Z = 3.14;
value: 3.14
```
Now compare `X` and `Y`:

```rascal-shell ,continue
rascal>X >= Y;
bool: true
```
and `X` and `Z`:

```rascal-shell ,continue
rascal>X >= Z;
bool: false
```


