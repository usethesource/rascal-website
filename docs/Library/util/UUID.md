---
title: "module util::UUID"
---

#### Usage

`import util::UUID;`


## function uuid {#util-UUID-uuid}

* ``loc uuid()``


#### Synopsis

generates a unique identifier shaped as a `loc`

#### Description

This function generates a UUID, see http://en.wikipedia.org/wiki/Universally_unique_identifier.
Since UUIDs are useful to assign an opaque and unique identity to data, the function returns
a [Location](../../Rascal/Expressions/Values/Location) (which is the preferred representation for encoding identities in Rascal)

#### Examples


```rascal-shell
rascal>import util::UUID;
ok
```

The uuid() function generates a location with the authority showing the literal canonical UUID string

```rascal-shell
rascal>uuid()
loc: |uuid://d76370a8-82ee-438a-9c4f-7a4ddaef99be|
```

Use it to relate identies to data objects, as in this example which adds a field to a relation:


```rascal-shell
rascal>myData = { <i,i*i> | i <- [1..11] }; 
rel[int,int]: {
  <10,100>,
  <7,49>,
  <1,1>,
  <3,9>,
  <9,81>,
  <2,4>,
  <4,16>,
  <6,36>,
  <5,25>,
  <8,64>
}
rascal>rel[int n, int square, loc id] myUniqueData = { <i,j,uuid()> | <i,j> <- myData };
rel[int n,int square,loc id]: {
  <1,1,|uuid://3df559b0-78ef-4819-a6c5-fcd770329986|>,
  <7,49,|uuid://b612bbd1-5090-484d-88db-80274a4c6dda|>,
  <2,4,|uuid://cd259bf9-5044-4640-89a9-a8f449ff8d17|>,
  <6,36,|uuid://fdaf3c0b-878a-4b5b-9e2d-cc6fe7c250a3|>,
  <9,81,|uuid://400f00ce-700f-4175-9be7-9c3cbee2c9a2|>,
  <8,64,|uuid://8d424110-1777-49e2-81f1-58d506a610ee|>,
  <10,100,|uuid://2aea7756-4ffb-47ec-867b-16f5f73923de|>,
  <3,9,|uuid://f8f5b1c3-7cda-43ff-8632-de65c9aed21a|>,
  <4,16,|uuid://4dc9f916-06d3-4a3e-80d4-ea9b6da4030f|>,
  <5,25,|uuid://0db99d3f-4fb5-4237-b58b-3143d916eb11|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://c24ac4be-8dcd-4c84-a01f-3f2982f089ff|,
  <2,4>:|uuid://dd6f11cd-1104-470a-9d03-0b4607e65348|,
  <7,49>:|uuid://8a883f31-ffec-4c35-95b4-84d3305777a2|,
  <9,81>:|uuid://f7c81be5-8e15-4344-8241-63dd7cb5f197|,
  <8,64>:|uuid://a2597edb-fca9-4011-9fc6-94ba528dfe7b|,
  <5,25>:|uuid://c6d2aa4c-4bf6-4b2f-b861-89ccdd8fe37c|,
  <4,16>:|uuid://e7a2c26a-6449-4710-a79a-fc47a0f53213|,
  <1,1>:|uuid://a31d6700-b3d0-4083-813d-7fd08a0baced|,
  <10,100>:|uuid://9a88a5b4-cb9d-4b98-a53f-b9e522e22d66|,
  <3,9>:|uuid://9540e146-3215-4509-ba3b-2442e0368ec2|
)
```
Note how uuid() should always generate a fresh value:

```rascal-shell
rascal>assert uuid() != uuid(); 
bool: true
```

#### Benefits

*  [Location](../../Rascal/Expressions/Values/Location)s are used for identifying program elements or model elements in Rascal. The uuid() function provides
an quick-and-easy way of acquiring such an identity without having to design a naming scheme.

#### Pitfalls

*  UUIDs are a quick and dirty way of identifying data which may lead to hard to debug code. A naming scheme for [Location](../../Rascal/Expressions/Values/Location)s is better because it generates human readable
[Location](../../Rascal/Expressions/Values/Location)s which carry meaning. For example consider the difference in readability between these two values:
`|uuid://47fdcd64-4fd0-41a1-8aa3-61c5b272c3fc|` and `|java+class:///java/lang/Object|`. Both may lead to the same 
results in your computation, but if we print either of them out, one of them is opaque and the other is transparent. A transparent naming scheme is preferable for
debugging purposes.

## function uuidi {#util-UUID-uuidi}

* ``int uuidi()``


#### Synopsis

see [uuid], this function does the same except return the UUID as an int.

#### Pitfalls

*  beware that this integer is almost guaranteed to use 128 bits, so communicating it outside of
Rascal should not be done via a Java 32-bit integer.

