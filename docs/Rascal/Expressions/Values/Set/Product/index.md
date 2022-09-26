---
title: Set Product
keywords:
  - "*"
---

#### Synopsis

The product of two set values.

#### Syntax

`Exp₁ * Exp₂`

#### Types


| `Exp₁`    |  `Exp₂`    | `Exp₁ * Exp₂`  |
| --- | --- | --- |
| `set[T₁]` |  `set[T₂]` | `rel[T₁,T₂]`   |


#### Description

Yields a relation resulting from the product of the values of _Exp_₁ and _Exp_₂. It contains a tuple for each combination of values from both arguments.

#### Examples


```rascal-shell 
rascal>{1, 2, 3} * {4, 5, 6};
rel[int,int]: {
  <1,5>,
  <1,4>,
  <1,6>,
  <3,5>,
  <3,4>,
  <3,6>,
  <2,5>,
  <2,4>,
  <2,6>
}
```
A card deck can be created as follows:

```rascal-shell 
rascal>{"clubs", "hearts", "diamonds", "spades"} * {1,2,3,4,5,6,7,8,9,10,11,12,13};
rel[str,int]: {
  <"hearts",10>,
  <"hearts",7>,
  <"hearts",1>,
  <"hearts",3>,
  <"hearts",13>,
  <"hearts",9>,
  <"hearts",2>,
  <"hearts",4>,
  <"hearts",11>,
  <"hearts",6>,
  <"hearts",12>,
  <"hearts",5>,
  <"hearts",8>,
  <"spades",10>,
  <"spades",7>,
  <"spades",1>,
  <"spades",3>,
  <"spades",13>,
  <"spades",9>,
  <"spades",2>,
  <"spades",4>,
  <"spades",11>,
  <"spades",6>,
  <"spades",12>,
  <"spades",5>,
  <"spades",8>,
  <"clubs",10>,
  <"clubs",7>,
  <"clubs",1>,
  <"clubs",3>,
  <"clubs",13>,
  <"clubs",9>,
  <"clubs",2>,
  <"clubs",4>,
  <"clubs",11>,
  <"clubs",6>,
  <"clubs",12>,
  <"clubs",5>,
  <"clubs",8>,
  <"diamonds",10>,
  <"diamonds",7>,
  <"diamonds",1>,
  <"diamonds",3>,
  <"diamonds",13>,
  <"diamonds",9>,
  <"diamonds",2>,
  <"diamonds",4>,
  <"diamonds",11>,
  <"diamonds",6>,
  <"diamonds",12>,
  <"diamonds",5>,
  <"diamonds",8>
}
```


