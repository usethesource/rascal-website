---
title: "module ListRelation"
---

#### Usage

`import ListRelation;`


#### Synopsis

Library functions for list relations.

#### Description

For operators on listrelations see [ListRelation](../Rascal/Expressions/Values/ListRelation/index.md) in the Rascal Language Reference.

The following functions are defined for list relations :
* [carrier](../Library/ListRelation.md#ListRelation-carrier)
* [carrierR](../Library/ListRelation.md#ListRelation-carrierR)
* [carrierX](../Library/ListRelation.md#ListRelation-carrierX)
* [complement](../Library/ListRelation.md#ListRelation-complement)
* [domain](../Library/ListRelation.md#ListRelation-domain)
* [domainR](../Library/ListRelation.md#ListRelation-domainR)
* [domainX](../Library/ListRelation.md#ListRelation-domainX)
* [groupDomainByRange](../Library/ListRelation.md#ListRelation-groupDomainByRange)
* [groupRangeByDomain](../Library/ListRelation.md#ListRelation-groupRangeByDomain)
* [ident](../Library/ListRelation.md#ListRelation-ident)
* [index](../Library/ListRelation.md#ListRelation-index)
* [invert](../Library/ListRelation.md#ListRelation-invert)
* [range](../Library/ListRelation.md#ListRelation-range)
* [rangeR](../Library/ListRelation.md#ListRelation-rangeR)
* [rangeX](../Library/ListRelation.md#ListRelation-rangeX)


## function carrier {#ListRelation-carrier}

* ``list[&T]  carrier (lrel[&T,&T] R)``
* ``list[&T]  carrier (lrel[&T,&T,&T] R)``
* ``list[&T]  carrier (lrel[&T,&T,&T,&T] R)``
* ``list[&T]  carrier (lrel[&T,&T,&T,&T,&T] R)``


#### Synopsis

Return the list of all elements in any tuple in a list relation.

#### Examples


```rascal-shell 
rascal>import ListRelation;
ok
rascal>carrier([<1,10>, <2,20>]);
list[int]: [1,10,2,20]
rascal>carrier([<1,10,100,1000>, <2,20,200,2000>]);
list[int]: [1,10,100,1000,2,20,200,2000]
```

## function carrierR {#ListRelation-carrierR}

* ``lrel[&T,&T] carrierR (lrel[&T,&T] R, set[&T] S)``
* ``lrel[&T,&T,&T] carrierR (lrel[&T,&T,&T] R, set[&T] S)``
* ``lrel[&T,&T,&T,&T] carrierR (lrel[&T,&T,&T,&T] R, set[&T] S)``
* ``lrel[&T,&T,&T,&T,&T] carrierR (lrel[&T,&T,&T,&T,&T] R, set[&T] S)``


#### Synopsis

A list relation restricted to certain element values in tuples.

#### Description

Returns list relation `R` restricted to tuples with elements in set `S`.

#### Examples


```rascal-shell 
rascal>import ListRelation;
ok
rascal>carrierR([<1,10>, <2,20>, <3,30>], {10, 1, 20});
lrel[int,int]: [<1,10>]
```

## function carrierX {#ListRelation-carrierX}

* ``lrel[&T,&T] carrierX (lrel[&T,&T] R, set[&T] S)``
* ``lrel[&T,&T,&T] carrierX (lrel[&T,&T,&T] R, set[&T] S)``
* ``lrel[&T,&T,&T,&T] carrierX (lrel[&T,&T,&T,&T] R, set[&T] S)``
* ``lrel[&T,&T,&T,&T,&T] carrierX (lrel[&T,&T,&T,&T,&T] R, set[&T] S)``


#### Synopsis

A list relation excluding tuples containing certain values.

#### Description

Returns list relation `R` excluding tuples with some element in `S`.

#### Examples


```rascal-shell 
rascal>import ListRelation;
ok
rascal>carrierX([<1,10>, <2,20>, <3,30>], {10, 1, 20});
lrel[int,int]: [<3,30>]
```

## function complement {#ListRelation-complement}

* ``lrel[&T0, &T1] complement(lrel[&T0, &T1] R)``
* ``lrel[&T0, &T1, &T2] complement(lrel[&T0, &T1, &T2] R)``
* ``lrel[&T0, &T1, &T2, &T3] complement(lrel[&T0, &T1, &T2, &T3] R)``
* ``lrel[&T0, &T1, &T2, &T3, &T4] complement(lrel[&T0, &T1, &T2, &T3, &T4] R)``


#### Synopsis

Complement of a list relation.

#### Description

Given a list relation `R` a new relation `U` can be constructed that contains
all possible tuples with element values that occur at corresponding tuple positions in `R`.
The function `complement` returns the complement of `R` relative to `U`, in other words: `U - R`.

#### Examples


```rascal-shell 
rascal>import ListRelation;
ok
```

Declare `R` and compute corresponding `U`:


```rascal-shell ,continue
rascal>R = [<1,10>, <2, 20>, <3, 30>];
lrel[int,int]: [
  <1,10>,
  <2,20>,
  <3,30>
]
rascal>U = domain(R) * range(R);
lrel[int,int]: [
  <1,10>,
  <1,20>,
  <1,30>,
  <2,10>,
  <2,20>,
  <2,30>,
  <3,10>,
  <3,20>,
  <3,30>
]
```

Here is the complement of `R` computed in two ways:

```rascal-shell ,continue
rascal>U - R;
lrel[int,int]: [
  <1,20>,
  <1,30>,
  <2,10>,
  <2,30>,
  <3,10>,
  <3,20>
]
rascal>complement([<1,10>, <2, 20>, <3, 30>]);
lrel[int,int]: [
  <1,20>,
  <1,30>,
  <2,10>,
  <2,30>,
  <3,10>,
  <3,20>
]
```

## function domain {#ListRelation-domain}

* ``list[&T0] domain(lrel[&T0,&T1]             R)``
* ``list[&T0] domain(lrel[&T0,&T1,&T2]         R)``
* ``list[&T0] domain(lrel[&T0,&T1,&T2,&T3]     R)``
* ``list[&T0] domain(lrel[&T0,&T1,&T2,&T3,&T4] R)``


#### Synopsis

Domain of a list relation: a list consisting of the first element of each tuple, uniquely.

#### Description

The domain can be seen as all possible inputs of the relation image operation. The
result contains elements (or tuples) in the order of appearance of the original relation,
but all occurences after the first occurrence of an element have been removed.

#### Examples


```rascal-shell 
rascal>import ListRelation;
ok
rascal>domain([<1,10>, <2,20>]);
list[int]: [1,2]
rascal>domain([<"mon", 1>, <"tue", 2>]);
list[str]: ["mon","tue"]
```

## function domainR {#ListRelation-domainR}

* ``lrel[&T0,&T1] domainR (lrel[&T0,&T1] R, set[&T0] S)``
* ``lrel[&T0,&T1,&T2] domainR (lrel[&T0,&T1,&T2] R, set[&T0] S)``
* ``lrel[&T0,&T1,&T2,&T3] domainR (lrel[&T0,&T1,&T2,&T3] R, set[&T0] S)``
* ``lrel[&T0,&T1,&T2,&T3,&T4] domainR (lrel[&T0,&T1,&T2,&T3,&T4] R, set[&T0] S)``
* ``lrel[&T0,&T1] domainR (lrel[&T0,&T1] R, list[&T0] L)``
* ``lrel[&T0,&T1,&T2] domainR (lrel[&T0,&T1,&T2] R, list[&T0] L)``
* ``lrel[&T0,&T1,&T2,&T3] domainR (lrel[&T0,&T1,&T2,&T3] R, list[&T0] L)``
* ``lrel[&T0,&T1,&T2,&T3,&T4] domainR (lrel[&T0,&T1,&T2,&T3,&T4] R, list[&T0] L)``


#### Synopsis

List relation restricted to certain domain elements.

#### Description

Restriction of a list relation `R` to tuples with first element in `S`.

#### Examples


```rascal-shell 
rascal>import ListRelation;
ok
rascal>domainR([<1,10>, <2,20>, <3,30>], {3, 1});
lrel[int,int]: [
  <1,10>,
  <3,30>
]
```

## function domainX {#ListRelation-domainX}

* ``lrel[&T0, &T1] domainX (lrel[&T0, &T1] R, set[&T0] S)``
* ``lrel[&T0, &T1, &T2] domainX (lrel[&T0, &T1, &T2] R, set[&T0] S)``
* ``lrel[&T0, &T1, &T2, &T3] domainX (lrel[&T0, &T1, &T2, &T3] R, set[&T0] S)``
* ``lrel[&T0, &T1, &T2, &T3, &T4] domainX (lrel[&T0, &T1, &T2, &T3, &T4] R, set[&T0] S)``


#### Synopsis

List relation excluding certain domain values.

#### Description

List relation `R` excluding tuples with first element in `S`.

#### Examples


```rascal-shell 
rascal>import ListRelation;
ok
rascal>domainX([<1,10>, <2,20>, <3,30>], {3, 1});
lrel[int,int]: [<2,20>]
```

## function groupDomainByRange {#ListRelation-groupDomainByRange}

* ``list[list[&U]] groupDomainByRange(lrel[&U dom, &T ran] input)``


#### Synopsis

Make sets of elements in the domain that relate to the same element in the range.

#### Examples


```rascal-shell 
rascal>import ListRelation;
ok
rascal>legs = [<"bird", 2>, <"dog", 4>, <"human", 2>, <"spider", 8>, <"millepede", 1000>, <"crab", 8>, <"cat", 4>];
lrel[str,int]: [
  <"bird",2>,
  <"dog",4>,
  <"human",2>,
  <"spider",8>,
  <"millepede",1000>,
  <"crab",8>,
  <"cat",4>
]
rascal>groupDomainByRange(legs);
list[list[str]]: [
  ["bird","human"],
  ["dog","cat"],
  ["spider","crab"],
  ["millepede"]
]
```

## function groupRangeByDomain {#ListRelation-groupRangeByDomain}

* ``list[list[&T]] groupRangeByDomain(lrel[&U dom, &T ran] input)``


#### Synopsis

Make sets of elements in the range that relate to the same element in the domain.

#### Description


```rascal-shell 
rascal>import ListRelation;
ok
rascal>skins = [<"bird", "feather">, <"dog", "fur">, <"tortoise", "shell">, <"human", "skin">, <"fish", "scale">, <"lizard", "scale">, <"crab", "shell">, <"cat", "fur">];
lrel[str,str]: [
  <"bird","feather">,
  <"dog","fur">,
  <"tortoise","shell">,
  <"human","skin">,
  <"fish","scale">,
  <"lizard","scale">,
  <"crab","shell">,
  <"cat","fur">
]
rascal>groupRangeByDomain(skins);
list[list[str]]: [
  ["feather"],
  ["fur"],
  ["shell"],
  ["skin"],
  ["scale"]
]
```

## function ident {#ListRelation-ident}

* ``lrel[&T, &T] ident (list[&T] S)``


#### Synopsis

The identity list relation.

#### Description

The identity list relation for set `S`.

#### Examples


```rascal-shell 
rascal>import ListRelation;
ok
rascal>ident(["mon", "tue", "wed"]);
lrel[str,str]: [
  <"mon","mon">,
  <"tue","tue">,
  <"wed","wed">
]
```

## function invert {#ListRelation-invert}

* ``lrel[            &T1,&T0] invert (lrel[&T0,&T1            ] R)``
* ``lrel[        &T2,&T1,&T0] invert (lrel[&T0,&T1,&T2        ] R)``
* ``lrel[    &T3,&T2,&T1,&T0] invert (lrel[&T0,&T1,&T2,&T3    ] R)``
* ``lrel[&T4,&T3,&T2,&T1,&T0] invert (lrel[&T0,&T1,&T2,&T3,&T4] R)``


#### Synopsis

Invert the tuples in a list relation.

#### Examples


```rascal-shell 
rascal>import ListRelation;
ok
rascal>invert([<1,10>, <2,20>]);
lrel[int,int]: [
  <10,1>,
  <20,2>
]
```

## function range {#ListRelation-range}

* ``list[&T1]             range (lrel[&T0,&T1]             R)``
* ``lrel[&T1,&T2]         range (lrel[&T0,&T1, &T2]        R)``
* ``lrel[&T1,&T2,&T3]     range (lrel[&T0,&T1,&T2,&T3]     R)``
* ``lrel[&T1,&T2,&T3,&T4] range (lrel[&T0,&T1,&T2,&T3,&T4] R)``


#### Synopsis

The range is composed of all but the first element of each tuple of a list relation, uniquely.

#### Description

The range can be seen as all the elements of in all possible images of the relation. The
result contains elements (or tuples) in the order of appearance of the original relation,
but all occurences after the first occurrence of an element have been removed.

#### Examples


```rascal-shell 
rascal>import ListRelation;
ok
rascal>range([<1,10>, <2,20>]);
list[int]: [10,20]
rascal>range([<"mon", 1>, <"tue", 2>]);
list[int]: [1,2]
```

## function rangeR {#ListRelation-rangeR}

* ``lrel[&T0,&T1] rangeR (lrel[&T0,&T1] R, set[&T1] S)``
* ``lrel[&T0,&T1] rangeR (lrel[&T0,&T1] R, list[&T1] L)``


#### Synopsis

List relation restricted to certain range values.

#### Description

Restriction of binary list relation `R` to tuples with second element in set `S`.

#### Examples


```rascal-shell 
rascal>import ListRelation;
ok
rascal>rangeR([<1,10>, <2,20>, <3,30>], {30, 10});
lrel[int,int]: [
  <1,10>,
  <3,30>
]
```

## function rangeX {#ListRelation-rangeX}

* ``lrel[&T0,&T1] rangeX (lrel[&T0,&T1] R, set[&T1] S)``
* ``lrel[&T0,&T1] rangeX (lrel[&T0,&T1] R, list[&T1] S)``

 
#### Synopsis

List relation excluding certain range values.

#### Description

Restriction of binary list relation `R` to tuples with second element not in set `S`.

#### Examples


```rascal-shell 
rascal>import ListRelation;
ok
rascal>rangeX([<1,10>, <2,20>, <3,30>], {30, 10});
lrel[int,int]: [<2,20>]
```

## function index {#ListRelation-index}

* ``map[&K, set[&V]] index(lrel[&K, &V] R)``


#### Synopsis

Listes a binary list relation as a map

#### Description

Converts a binary list relation to a map of the domain to a set of the range.

#### Examples


```rascal-shell 
rascal>import ListRelation;
ok
rascal>index([<1,10>, <2,20>, <3,30>, <30,10>]);
map[int, set[int]]: (
  1:{10},
  3:{30},
  2:{20},
  30:{10}
)
```

}

* ``map[&K, set[&V]] index(lrel[&K, &V] R)``


#### Synopsis

Listes a binary list relation as a map

#### Description

Converts a binary list relation to a map of the domain to a set of the range.

#### Examples


```rascal-shell 
rascal>import ListRelation;
ok
rascal>index([<1,10>, <2,20>, <3,30>, <30,10>]);
map[int, set[int]]: (
  1:{10},
  3:{30},
  2:{20},
  30:{10}
)
```

