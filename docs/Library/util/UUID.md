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
loc: |uuid://29ce91e8-ae05-4813-9ee2-693b6b3e63a4|
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
  <1,1,|uuid://cfff40f7-be40-4dfb-aec0-09bc8217fe95|>,
  <4,16,|uuid://3ccd555c-0c3d-43db-8217-a45f87229afe|>,
  <5,25,|uuid://94ffd745-ff4c-472e-ab33-21c1f5196e5f|>,
  <2,4,|uuid://c990c892-ba40-4e30-9251-2ea61ab69ead|>,
  <6,36,|uuid://068e49a6-a5c0-4099-a0b5-c2c14071b66e|>,
  <8,64,|uuid://d5edc259-6e58-4c1a-993c-c6aa8132fa00|>,
  <7,49,|uuid://ae54758e-9988-4601-b7e5-2b77f1c226ba|>,
  <10,100,|uuid://1daf313e-f822-4031-a056-e7a2a1f6e48a|>,
  <3,9,|uuid://83ad3b39-7cf9-43b8-b7a9-eba80c8c7a9f|>,
  <9,81,|uuid://da5f059e-2724-431e-8b32-ae1ac81c0d9f|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://6945a532-17fb-4ef0-9ee5-da8b4f09fe0e|,
  <2,4>:|uuid://55dc1abe-e22c-414d-8782-aa21cfc36490|,
  <7,49>:|uuid://b1f15986-06c9-4472-967f-a4af38d89d81|,
  <9,81>:|uuid://e8edda1a-6a9c-42f5-8e59-904c005f4236|,
  <8,64>:|uuid://e4839175-74df-4ec9-b93a-a8c9f9326080|,
  <5,25>:|uuid://417ccc7b-8750-49ee-801f-e290547ba867|,
  <4,16>:|uuid://cbd4b509-577a-4a80-83b6-324ed1a34d65|,
  <1,1>:|uuid://c1ee3beb-30f4-46c0-b91a-cc11191b57d6|,
  <10,100>:|uuid://5c2d8189-a6f4-4778-acba-102905a8d825|,
  <3,9>:|uuid://26c9f98b-85ce-4be1-8aa6-9e80b3c7fef0|
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

