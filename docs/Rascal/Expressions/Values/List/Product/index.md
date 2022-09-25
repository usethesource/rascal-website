---
title: List Product
keywords:
  - "*"

---

#### Synopsis

Compute the product of two lists.

#### Syntax

`Exp~1~ * Exp~2~`

#### Types


| `Exp~1~`     |  `Exp~2~`     | `Exp~1~ * Exp~2~`          |
| --- | --- | --- |
| `list[T~1~]` |  `list[T~2~]` | `list[tuple[T~1~,T~2~]]`   |


#### Description

Yields a list of tuples resulting from the product of the values of _Exp_~1~ and _Exp_~2~. 
It contains a tuple for each combination of values from both arguments.

#### Examples


```rascal-shell 
rascal>[1, 2, 3] * [4, 5, 6];
lrel[int,int]: [
  <1,4>,
  <1,5>,
  <1,6>,
  <2,4>,
  <2,5>,
  <2,6>,
  <3,4>,
  <3,5>,
  <3,6>
]
```
Here is a concise way to create a deck of cards:

```rascal-shell 
rascal>["clubs", "hearts", "diamonds", "spades"] * [1 .. 13];
lrel[str,int]: [
  <"clubs",1>,
  <"clubs",2>,
  <"clubs",3>,
  <"clubs",4>,
  <"clubs",5>,
  <"clubs",6>,
  <"clubs",7>,
  <"clubs",8>,
  <"clubs",9>,
  <"clubs",10>,
  <"clubs",11>,
  <"clubs",12>,
  <"hearts",1>,
  <"hearts",2>,
  <"hearts",3>,
  <"hearts",4>,
  <"hearts",5>,
  <"hearts",6>,
  <"hearts",7>,
  <"hearts",8>,
  <"hearts",9>,
  <"hearts",10>,
  <"hearts",11>,
  <"hearts",12>,
  <"diamonds",1>,
  <"diamonds",2>,
  <"diamonds",3>,
  <"diamonds",4>,
  <"diamonds",5>,
  <"diamonds",6>,
  <"diamonds",7>,
  <"diamonds",8>,
  <"diamonds",9>,
  <"diamonds",10>,
  <"diamonds",11>,
  <"diamonds",12>,
  <"spades",1>,
  <"spades",2>,
  <"spades",3>,
  <"spades",4>,
  <"spades",5>,
  <"spades",6>,
  <"spades",7>,
  <"spades",8>,
  <"spades",9>,
  <"spades",10>,
  <"spades",11>,
  <"spades",12>
]
```


