---
title: Relation Subscription
keywords:
  - "["
  - "]"
---

#### Syntax

* `Exp~0~ [Exp~1~, Exp~2~, ..., Exp~n~]`
* `Exp~0~ [Exp~1~]`

#### Synopsis

Indexing of a relation via tuple values.

##### Single Value Variant 1

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| `_Exp~0~`                         | `Exp~1~` | `Exp~2~` | ... | `Exp0_ [ Exp~1~, Exp~2~, ... ]`  |
| `rel[T~1~, T~2~, ... T~m~]`    | `int`     |  `int`    | ... | `rel[T~n~, _T~n+1~_, ... T~m~]`  |

##### Set of Values Variant 

| `Exp~0~`                         | `Exp~1~`     | `Exp~0~ [ Exp~1~ ]`             |
| --- | --- | --- |
| `rel[T~1~, T~2~, ... T~m~]`    | `set[T~1~]`  | `rel[T~2~, T~2~, ... T~m~]`    |

#### Description

Relation resulting from subscription of a relation _Exp_~0~.

##### Single Value Variant

Subscription with the index values of _Exp_~1~, _Exp_~2~, .... 
The result is a relation with all tuples that have these index values as first elements 
with the index values removed from the tuple. 
If the resulting tuple has only a single element, a set is returned instead of a relation. 
A wildcard `_` as index value matches all possible values at that index position.

##### Set of Values Variant 

Subscription with a set of the index values of _Exp_~1~.
The result is a relation with all tuples that have these index values as first element
with the index values removed from the tuple. 

#### Examples

```rascal-shell 
rascal>R = {<1,10>, <2,20>, <1,11>, <3,30>, <2,21>};
rel[int,int]: {
  <3,30>,
  <1,10>,
  <1,11>,
  <2,20>,
  <2,21>
}
rascal>R[1];
set[int]: {10,11}
rascal>R[{1}];
set[int]: {10,11}
rascal>R[{1, 2}];
set[int]: {10,20,11,21}
rascal>RR = {<1,10,100>,<1,11,101>,<2,20,200>,<2,22,202>,
>>>>>>>              <3,30,300>};
rel[int,int,int]: {
  <1,10,100>,
  <3,30,300>,
  <1,11,101>,
  <2,20,200>,
  <2,22,202>
}
rascal>RR[1];
rel[int,int]: {
  <10,100>,
  <11,101>
}
rascal>RR[1,_];
set[int]: {100,101}
```
Introduce a relation with economic data and assign it to `GDP`:

```rascal-shell ,continue
rascal>rel[str country, int year, int amount] GDP =
>>>>>>>{<"US", 2008, 14264600>, <"EU", 2008, 18394115>,
>>>>>>> <"Japan", 2008, 4923761>, <"US", 2007, 13811200>, 
>>>>>>> <"EU", 2007, 13811200>, <"Japan", 2007, 4376705>};
rel[str country,int year,int amount]: {
  <"EU",2007,13811200>,
  <"US",2007,13811200>,
  <"Japan",2007,4376705>,
  <"US",2008,14264600>,
  <"Japan",2008,4923761>,
  <"EU",2008,18394115>
}
```
and then retrieve the information for the index `"Japan"`:

```rascal-shell ,continue
rascal>GDP["Japan"];
rel[int,int]: {
  <2007,4376705>,
  <2008,4923761>
}
```
or rather for the indices `"Japan"` and `2008`:

```rascal-shell ,continue
rascal>GDP["Japan", 2008];
set[int]: {4923761}
```

