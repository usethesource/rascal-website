---
title: Subscription
keywords:
  - "["
  - "]"
  - "="

---

#### Synopsis

Assign a single element of a structured value.

#### Description

Let _V_ be the current value of _Assignable_. The value of _Exp_~1~ is used as index in _V_ and 
the value of _Exp_~2~ replaces the original value at that index position. 
The result is a new value _V_' that is assigned to the _Assignable_.

#### Examples

```rascal-shell 
```
Assignable has a list value:

```rascal-shell ,continue
rascal>L = [10,20,30];
list[int]: [10,20,30]
rascal>P = L;
list[int]: [10,20,30]
rascal>L[1] = 200;
list[int]: [10,200,30]
```
Observe that `P` is unchanged:

```rascal-shell ,continue
rascal>P;
list[int]: [10,20,30]
```
Assignable has a map value:

```rascal-shell ,continue
rascal>M = ("abc": 1, "def" : 2);
map[str, int]: ("abc":1,"def":2)
rascal>M["def"] = 3;
map[str, int]: ("abc":1,"def":3)
```
Assignable has a tuple value:

```rascal-shell ,continue
rascal>T = <1, "abc", true>;
tuple[int,str,bool]: <1,"abc",true>
rascal>T[1] = "def";
tuple[int,str,bool]: <1,"def",true>
```
NOTE: See https://github.com/usethesource/rascal/issues/948

