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
loc: |uuid://eda39d51-341b-47e6-bc11-acc6b3fd4a96|
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
  <1,1,|uuid://6b18c979-32c4-4be6-b3c7-6648c3e58e3d|>,
  <10,100,|uuid://cb12283a-d8bb-459f-b902-0d19de7e9753|>,
  <4,16,|uuid://86553634-602d-4f79-93a6-2030b745fdff|>,
  <7,49,|uuid://d2dbb2c1-f5f7-4f23-a8ca-2014fb2a89d6|>,
  <3,9,|uuid://2a501fb6-0311-4422-8859-22e1dfbaeab6|>,
  <5,25,|uuid://24ec0c38-a7d4-4587-8a56-9b448d959e46|>,
  <6,36,|uuid://282cc731-1def-466b-83a9-ffd9563e0ed1|>,
  <8,64,|uuid://a15eacb4-6471-4a3c-a54f-3e93ec2b3f0e|>,
  <2,4,|uuid://fa1d4ca4-baf1-4f1d-a887-aa724a1fb196|>,
  <9,81,|uuid://f65cf5c2-7ef8-4ea4-9c97-1cb4b5d95ef9|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://5dd14b05-4154-4c4f-b2ce-32aa75e6b98b|,
  <2,4>:|uuid://13c8059c-7b49-4f48-9c82-d860dac203c4|,
  <7,49>:|uuid://ad58932b-febc-48b3-beaf-6d1ac09f888c|,
  <9,81>:|uuid://f7a2a6c6-8d2e-48ad-a65b-895e60c25547|,
  <8,64>:|uuid://8425f2cc-33aa-425c-9ac0-18c2b0d90a4c|,
  <5,25>:|uuid://816e0fb2-3f59-4d2a-b1b4-d6075ccdb67a|,
  <4,16>:|uuid://c69bf81f-1fa8-4b1f-8ce9-63db2998734c|,
  <1,1>:|uuid://103973ba-1224-4418-9879-fd2fff421e32|,
  <10,100>:|uuid://1c6cfe89-e5b6-473e-9ec0-fd8a5b049132|,
  <3,9>:|uuid://5050d80c-30f9-4d86-b8df-5d5ae12127e9|
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

