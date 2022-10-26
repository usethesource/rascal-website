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

This function generates a UUID, see <http://en.wikipedia.org/wiki/Universally_unique_identifier>.
Since UUIDs are useful to assign an opaque and unique identity to data, the function returns
a [Location](../../Rascal/Expressions/Values/Location/index.md) (which is the preferred representation for encoding identities in Rascal)

#### Examples


```rascal-shell 
rascal>import util::UUID;
ok
```

The uuid() function generates a location with the authority showing the literal canonical UUID string

```rascal-shell ,continue
rascal>uuid()
loc: |uuid://6a21a668-366e-47d1-853a-a9d733a6a9c3|
```

Use it to relate identies to data objects, as in this example which adds a field to a relation:


```rascal-shell ,continue
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
  <5,25,|uuid://5e1352ef-1ffe-4d52-ac1e-faad8287254d|>,
  <2,4,|uuid://edbf21b6-cc35-465e-9567-c7c7691ca56b|>,
  <9,81,|uuid://e7f1cf66-03c1-4e6a-97ea-988c20e2b0e0|>,
  <3,9,|uuid://c2f77f1d-1dc9-41fe-a698-d55c3e3704a3|>,
  <7,49,|uuid://ad101061-826f-4733-8676-8a0fd6a93737|>,
  <8,64,|uuid://055dce2e-2f19-47e4-9d11-8e9af762aa44|>,
  <6,36,|uuid://60e4bf33-9477-4867-a3e3-b232b9d7118f|>,
  <1,1,|uuid://fab18388-604b-4dad-bc7f-cbd0d05b5df9|>,
  <4,16,|uuid://84987877-f6c7-4a58-a4f9-272c2d73bc48|>,
  <10,100,|uuid://75662e89-b8bb-4e8e-9760-27c8f480241d|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://0963e9ff-4ebc-4a0e-9ddb-c0772ec8a4d6|,
  <2,4>:|uuid://8bc828c3-ea76-4734-8861-1ef721e0beeb|,
  <7,49>:|uuid://0a3a86e1-fcf2-40d2-9fcc-0bd9cd559e69|,
  <9,81>:|uuid://89f07bbd-166c-4b88-b12e-079f79cdfbf0|,
  <8,64>:|uuid://729e118c-d732-44cf-bdbf-c10a9feacfb9|,
  <5,25>:|uuid://0db68bac-3ebf-4148-9667-3bb39be9eb0f|,
  <4,16>:|uuid://a93d6895-612e-4f38-8505-5ef86c879759|,
  <1,1>:|uuid://83191837-ccf7-47dd-9b3d-a403d61e6966|,
  <10,100>:|uuid://84e88f5a-c8c9-401a-b141-5395a06293af|,
  <3,9>:|uuid://601c7a85-12b6-4ba5-bb9f-63ba319a9e43|
)
```
Note how uuid() should always generate a fresh value:

```rascal-shell ,continue
rascal>assert uuid() != uuid(); 
bool: true
```

#### Benefits

*  [Location](../../Rascal/Expressions/Values/Location/index.md)s are used for identifying program elements or model elements in Rascal. The uuid() function provides
an quick-and-easy way of acquiring such an identity without having to design a naming scheme.

#### Pitfalls

*  UUIDs are a quick and dirty way of identifying data which may lead to hard to debug code. A naming scheme for [Location](../../Rascal/Expressions/Values/Location/index.md)s is better because it generates human readable
[Location](../../Rascal/Expressions/Values/Location/index.md)s which carry meaning. For example consider the difference in readability between these two values:
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

