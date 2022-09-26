---
title: ListRelation Subscription
keywords:
  - "["
  - "]"

---

#### Synopsis

Indexing of a list relation via tuple values.

#### Syntax

*  `Exp₀ [ Exp₁, Exp₂, ... Expₙ]`

*  `Exp₀ [ Exp₁]`

## Variant 1


| `Exp₀`                          | `Exp₁` | `Exp₂` | ... | `Exp₀ [ Exp₁, Exp₂, ... ]`  |
| --- | --- | --- | --- | --- |
| `lrel[T₁, T₂, ... Tₘ]`    | `int`     |  `int`    | ... | `lrel[Tₙ, _Tₙ₊₁_, ... Tₘ]`    |


## Variant 2

| `Exp₀`                          | `Exp₁`     | `Exp₀ [ Exp₁ ]`             |
| --- | --- | --- |
|
| `lrel[T₁, T₂, ... Tₘ]`    | `list[T₁]` | `lrel[T₂, T₃, ... Tₘ]`   |


#### Description

ListRelation resulting from subscription of a ListRelation _Exp_₀.

## Variant 1

Subscription with the index values of _Exp_₁, _Exp_₂, .... 
The result is a ListRelation with all tuples that have these index values as first elements 
with the index values removed from the tuple. 
If the resulting tuple has only a single element, a list is returned instead of a relation. 
A wildcard `_` as index value matches all possible values at that index position.

## Variant 2

Subscription with a set of the index values of _Exp_₁.
The result is a ListRelation with all tuples that have these index values as first element
with the index values removed from the tuple. 

#### Examples


```rascal-shell 
rascal>R = [<1,10>, <2,20>, <1,11>, <3,30>, <2,21>];
lrel[int,int]: [
  <1,10>,
  <2,20>,
  <1,11>,
  <3,30>,
  <2,21>
]
rascal>R[1];
tuple[int,int]: <2,20>
rascal>R[{1}];
list[int]: [10,11]
rascal>R[{1, 2}];
list[int]: [10,20,11,21]
rascal>RR = [<1,10,100>,<1,11,101>,<2,20,200>,<2,22,202>,
>>>>>>>              <3,30,300>];
lrel[int,int,int]: [
  <1,10,100>,
  <1,11,101>,
  <2,20,200>,
  <2,22,202>,
  <3,30,300>
]
rascal>RR[1];
tuple[int,int,int]: <1,11,101>
rascal>RR[1,_];
list[int]: [100,101]
```
Introduce a relation with economic data and assign it to `GDP`:

```rascal-shell ,continue
rascal>lrel[str country, int year, int amount] GDP =
>>>>>>>[<"US", 2008, 14264600>, <"EU", 2008, 18394115>,
>>>>>>> <"Japan", 2008, 4923761>, <"US", 2007, 13811200>, 
>>>>>>> <"EU", 2007, 13811200>, <"Japan", 2007, 4376705>];
lrel[str country,int year,int amount]: [
  <"US",2008,14264600>,
  <"EU",2008,18394115>,
  <"Japan",2008,4923761>,
  <"US",2007,13811200>,
  <"EU",2007,13811200>,
  <"Japan",2007,4376705>
]
```
and then retrieve the information for the index `"Japan"`:

```rascal-shell ,continue
rascal>GDP["Japan"];
lrel[int,int]: [
  <2008,4923761>,
  <2007,4376705>
]
```
or rather for the indices `"Japan"` and `2008`:

```rascal-shell ,continue
rascal>GDP["Japan", 2008];
list[int]: [4923761]
```


