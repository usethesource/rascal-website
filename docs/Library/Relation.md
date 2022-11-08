---
title: "module Relation"
---

#### Usage

`import Relation;`


#### Synopsis

Library functions for relations.

#### Description

For operators on relations see [Relation](../Rascal/Expressions/Values/Relation/index.md) in the Rascal Language Reference.

The following functions are defined for relations:
* [carrier](../Library/Relation.md#Relation-carrier)
* [carrierR](../Library/Relation.md#Relation-carrierR)
* [carrierX](../Library/Relation.md#Relation-carrierX)
* [complement](../Library/Relation.md#Relation-complement)
* [domain](../Library/Relation.md#Relation-domain)
* [domainR](../Library/Relation.md#Relation-domainR)
* [domainX](../Library/Relation.md#Relation-domainX)
* [groupDomainByRange](../Library/Relation.md#Relation-groupDomainByRange)
* [groupRangeByDomain](../Library/Relation.md#Relation-groupRangeByDomain)
* [ident](../Library/Relation.md#Relation-ident)
* [index](../Library/Relation.md#Relation-index)
* [invert](../Library/Relation.md#Relation-invert)
* [range](../Library/Relation.md#Relation-range)
* [rangeR](../Library/Relation.md#Relation-rangeR)
* [rangeX](../Library/Relation.md#Relation-rangeX)


## function carrier {#Relation-carrier}

```rascal
set[&T]  carrier (rel[&T,&T] R)

set[&T]  carrier (rel[&T,&T,&T] R)

set[&T]  carrier (rel[&T,&T,&T,&T] R)

set[&T]  carrier (rel[&T,&T,&T,&T,&T] R)

```


#### Synopsis

Return the set of all elements in any tuple in a relation.

#### Examples


```rascal-shell 
rascal>import Relation;
ok
rascal>carrier({<1,10>, <2,20>});
set[int]: {10,1,20,2}
rascal>carrier({<1,10,100,1000>, <2,20,200,2000>});
set[int]: {10,200,20,2,100,1000,1,2000}
```

## function carrierR {#Relation-carrierR}

```rascal
rel[&T,&T] carrierR (rel[&T,&T] R, set[&T] S)

rel[&T,&T,&T] carrierR (rel[&T,&T,&T] R, set[&T] S)

rel[&T,&T,&T,&T] carrierR (rel[&T,&T,&T,&T] R, set[&T] S)

rel[&T,&T,&T,&T,&T] carrierR (rel[&T,&T,&T,&T,&T] R, set[&T] S)

```


#### Synopsis

A relation restricted to certain element values in tuples.

#### Description

Returns relation `R` restricted to tuples with elements in set `S`.

#### Examples


```rascal-shell 
rascal>import Relation;
ok
rascal>carrierR({<1,10>, <2,20>, <3,30>}, {10, 1, 20});
rel[int,int]: {<1,10>}
```

## function carrierX {#Relation-carrierX}

```rascal
rel[&T,&T] carrierX (rel[&T,&T] R, set[&T] S)

rel[&T,&T,&T] carrierX (rel[&T,&T,&T] R, set[&T] S)

rel[&T,&T,&T,&T] carrierX (rel[&T,&T,&T,&T] R, set[&T] S)

rel[&T,&T,&T,&T,&T] carrierX (rel[&T,&T,&T,&T,&T] R, set[&T] S)

```


#### Synopsis

A relation excluded tuples containing certain values.

#### Description

Returns relation `R` excluding tuples with some element in `S`.

#### Examples


```rascal-shell 
rascal>import Relation;
ok
rascal>carrierX({<1,10>, <2,20>, <3,30>}, {10, 1, 20});
rel[int,int]: {<3,30>}
```


#### Synopsis

A relation excluding tuples that contain certain element values.

#### Examples


```rascal-shell 
rascal>import Relation;
ok
rascal>carrierX({<1,10>, <2,20>, <3,30>}, {10, 1, 20});
rel[int,int]: {<3,30>}
```

## function complement {#Relation-complement}

```rascal
rel[&T0, &T1] complement(rel[&T0, &T1] R)

rel[&T0, &T1, &T2] complement(rel[&T0, &T1, &T2] R)

rel[&T0, &T1, &T2, &T3] complement(rel[&T0, &T1, &T2, &T3] R)

rel[&T0, &T1, &T2, &T3, &T4] complement(rel[&T0, &T1, &T2, &T3, &T4] R)

```


#### Synopsis

Complement of a relation.

#### Description

Given a relation `R` a new relation `U` can be constructed that contains
all possible tuples with element values that occur at corresponding tuple positions in `R`.
The function `complement` returns the complement of `R` relative to `U`, in other words: `U - R`.

#### Examples


```rascal-shell 
rascal>import Relation;
ok
```
Declare `R` and compute corresponding `U`:

```rascal-shell ,continue
rascal>R = {<1,10>, <2, 20>, <3, 30>};
rel[int,int]: {
  <1,10>,
  <3,30>,
  <2,20>
}
rascal>U = domain(R) * range(R);
rel[int,int]: {
  <1,10>,
  <1,20>,
  <1,30>,
  <3,10>,
  <3,20>,
  <3,30>,
  <2,10>,
  <2,20>,
  <2,30>
}
```
Here is the complement of `R` computed in two ways:

```rascal-shell ,continue
rascal>U - R;
rel[int,int]: {
  <1,20>,
  <1,30>,
  <3,10>,
  <3,20>,
  <2,10>,
  <2,30>
}
rascal>complement({<1,10>, <2, 20>, <3, 30>});
rel[int,int]: {
  <1,20>,
  <1,30>,
  <3,10>,
  <3,20>,
  <2,10>,
  <2,30>
}
```

## function domain {#Relation-domain}

```rascal
set[&T0] domain (rel[&T0,&T1] R)

set[&T0] domain (rel[&T0,&T1,&T2] R)

set[&T0] domain (rel[&T0,&T1,&T2,&T3] R)

set[&T0] domain (rel[&T0,&T1,&T2,&T3,&T4] R)

```


#### Synopsis

Domain of a  relation: a set consisting of the first element of each tuple.

#### Examples


```rascal-shell 
rascal>import Relation;
ok
rascal>domain({<1,10>, <2,20>});
set[int]: {1,2}
rascal>domain({<"mon", 1>, <"tue", 2>});
set[str]: {"tue","mon"}
```

## function domainR {#Relation-domainR}

```rascal
rel[&T0,&T1] domainR (rel[&T0,&T1] R, set[&T0] S)

rel[&T0,&T1,&T2] domainR (rel[&T0,&T1,&T2] R, set[&T0] S)

rel[&T0,&T1,&T2,&T3] domainR (rel[&T0,&T1,&T2,&T3] R, set[&T0] S)

rel[&T0,&T1,&T2,&T3,&T4] domainR (rel[&T0,&T1,&T2,&T3,&T4] R, set[&T0] S)

```


#### Synopsis

Relation restricted to certain domain elements.

#### Description

Restriction of a relation `R` to tuples with first element in `S`.

#### Examples


```rascal-shell 
rascal>import Relation;
ok
rascal>domainR({<1,10>, <2,20>, <3,30>}, {3, 1});
rel[int,int]: {
  <1,10>,
  <3,30>
}
```

## function domainX {#Relation-domainX}

```rascal
rel[&T0,&T1] domainX (rel[&T0,&T1] R, set[&T0] S)

rel[&T0,&T1,&T2] domainX (rel[&T0,&T1,&T2] R, set[&T0] S)

rel[&T0,&T1,&T2,&T3] domainX (rel[&T0,&T1,&T2,&T3] R, set[&T0] S)

rel[&T0,&T1,&T2,&T3,&T4] domainX (rel[&T0,&T1,&T2,&T3,&T4] R, set[&T0] S)

```


#### Synopsis

Relation excluding certain domain values.

#### Description

Relation `R` excluded tuples with first element in `S`.

#### Examples


```rascal-shell 
rascal>import Relation;
ok
rascal>domainX({<1,10>, <2,20>, <3,30>}, {3, 1});
rel[int,int]: {<2,20>}
```

## function groupDomainByRange {#Relation-groupDomainByRange}

```rascal
set[set[&U]] groupDomainByRange(rel[&U dom, &T ran] input)

```


#### Synopsis

Make sets of elements in the domain that relate to the same element in the range.

#### Examples


```rascal-shell 
rascal>import Relation;
ok
rascal>legs = {<"bird", 2>, <"dog", 4>, <"human", 2>, <"spider", 8>, <"millepede", 1000>, <"crab", 8>, <"cat", 4>};
rel[str,int]: {
  <"spider",8>,
  <"human",2>,
  <"crab",8>,
  <"cat",4>,
  <"bird",2>,
  <"dog",4>,
  <"millepede",1000>
}
rascal>groupDomainByRange(legs);
set[set[str]]: {
  {"human","bird"},
  {"cat","dog"},
  {"spider","crab"},
  {"millepede"}
}
```

## function groupRangeByDomain {#Relation-groupRangeByDomain}

```rascal
set[set[&T]] groupRangeByDomain(rel[&U dom, &T ran] input)

```


#### Synopsis

Make sets of elements in the range that relate to the same element in the domain.

#### Description


```rascal-shell 
rascal>import Relation;
ok
rascal>skins = {<"bird", "feather">, <"dog", "fur">, <"tortoise", "shell">, <"human", "skin">, <"fish", "scale">, <"lizard", "scale">, <"crab", "shell">, <"cat", "fur">};
rel[str,str]: {
  <"tortoise","shell">,
  <"human","skin">,
  <"crab","shell">,
  <"fish","scale">,
  <"bird","feather">,
  <"dog","fur">,
  <"lizard","scale">,
  <"cat","fur">
}
rascal>groupRangeByDomain(skins);
set[set[str]]: {
  {"scale"},
  {"shell"},
  {"skin"},
  {"feather"},
  {"fur"}
}
```

## function ident {#Relation-ident}

```rascal
rel[&T, &T] ident (set[&T] S)

```


#### Synopsis

The identity relation.

#### Description

The identity relation for set `S`.

#### Examples


```rascal-shell 
rascal>import Relation;
ok
rascal>ident({"mon", "tue", "wed"});
rel[str,str]: {
  <"tue","tue">,
  <"mon","mon">,
  <"wed","wed">
}
```

## function invert {#Relation-invert}

```rascal
rel[&T1, &T0] invert (rel[&T0, &T1] R)

rel[&T2, &T1, &T0] invert (rel[&T0, &T1, &T2] R)

rel[&T3, &T2, &T1, &T0] invert (rel[&T0, &T1, &T2, &T3] R)

rel[&T4, &T3, &T2, &T1, &T0] invert (rel[&T0, &T1, &T2, &T3, &T4] R)

```


#### Synopsis

Invert the tuples in a relation.

#### Examples


```rascal-shell 
rascal>import Relation;
ok
rascal>invert({<1,10>, <2,20>});
rel[int,int]: {
  <10,1>,
  <20,2>
}
```

## function range {#Relation-range}

```rascal
set[&T1] range (rel[&T0,&T1] R)

rel[&T1,&T2] range (rel[&T0,&T1, &T2] R)

rel[&T1,&T2,&T3] range (rel[&T0,&T1,&T2,&T3] R)

rel[&T1,&T2,&T3,&T4] range (rel[&T0,&T1,&T2,&T3,&T4] R)

```


#### Synopsis

The range (i.e., all but the first element of each tuple) of a relation.

#### Examples


```rascal-shell 
rascal>import Relation;
ok
rascal>range({<1,10>, <2,20>});
set[int]: {10,20}
rascal>range({<"mon", 1>, <"tue", 2>});
set[int]: {1,2}
```

## function rangeR {#Relation-rangeR}

```rascal
rel[&T0,&T1] rangeR (rel[&T0,&T1] R, set[&T2] S)

```


#### Synopsis

Relation restricted to certain range values.

#### Description

Restriction of binary relation `R` to tuples with second element in set `S`.

#### Examples


```rascal-shell 
rascal>import Relation;
ok
rascal>rangeR({<1,10>, <2,20>, <3,30>}, {30, 10});
rel[int,int]: {
  <1,10>,
  <3,30>
}
```

## function rangeX {#Relation-rangeX}

```rascal
rel[&T0,&T1] rangeX (rel[&T0,&T1] R, set[&T2] S)

```

 
#### Synopsis

Relation excluding certain range values.

#### Description

Restriction of binary relation `R` to tuples with second element not in set `S`.

#### Examples


```rascal-shell 
rascal>import Relation;
ok
rascal>rangeX({<1,10>, <2,20>, <3,30>}, {30, 10});
rel[int,int]: {<2,20>}
```

## function index {#Relation-index}

```rascal
map[&K, set[&V]] index(rel[&K, &V] R)

```


#### Synopsis

Indexes a binary relation as a map

#### Description

Converts a binary relation to a map of the domain to a set of the range.

#### Examples


```rascal-shell 
rascal>import Relation;
ok
rascal>index({<1,10>, <2,20>, <3,30>, <30,10>});
map[int, set[int]]: (
  1:{10},
  3:{30},
  2:{20},
  30:{10}
)
```

