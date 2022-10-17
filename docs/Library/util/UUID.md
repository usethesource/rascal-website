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
loc: |uuid://8514d2d2-bb12-4b2a-a734-f5cebbf80188|
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
  <8,64,|uuid://8a8c0e0d-ac11-461f-811e-6ff3df810470|>,
  <1,1,|uuid://35c9a695-1a33-4517-9b0f-264f4bb7a824|>,
  <3,9,|uuid://31f6ba65-6527-4bb8-aac9-5a98d3956c91|>,
  <4,16,|uuid://b0556cfb-721c-4af7-8a29-66a8dbaefafa|>,
  <5,25,|uuid://6b976062-f13d-4e59-acac-acc021e69fe7|>,
  <7,49,|uuid://a272650d-ec59-4995-9119-685c44973073|>,
  <2,4,|uuid://f7a73f83-f530-4481-add3-06d904e8b12e|>,
  <6,36,|uuid://e47c3364-65f8-4d12-9334-662a20b2d076|>,
  <10,100,|uuid://5da0ad60-6a49-4e3e-8128-ff7ef88d6897|>,
  <9,81,|uuid://ca0e9918-6134-4801-b6db-6367545703e8|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://dc93f43e-7db7-4a52-859a-f472cf647e5e|,
  <2,4>:|uuid://f715b729-874d-49e7-976e-dfda4a5f859a|,
  <7,49>:|uuid://51cd6cb2-f0e1-47c8-940c-2b9f6dc05cc9|,
  <9,81>:|uuid://40d0b3f9-bec7-4e5e-8172-bd1cf8cdcfc7|,
  <8,64>:|uuid://5f6cb0d2-9d07-4cc2-bd79-132667d68ffc|,
  <5,25>:|uuid://7640ed10-e576-4eaa-8542-5393a42f96eb|,
  <4,16>:|uuid://597fcf75-adfb-48e5-aa00-b6ff7dba436c|,
  <1,1>:|uuid://5c226a45-b2dc-47ab-ae0d-5cf03aa1d33f|,
  <10,100>:|uuid://2786053e-8801-48a5-8928-92b93d629ce9|,
  <3,9>:|uuid://ed52279b-163e-4e0f-8172-64bea8111803|
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

