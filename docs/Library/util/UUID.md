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
loc: |uuid://c58f477c-a37d-4877-a80b-446dbd42484f|
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
  <6,36,|uuid://7a0a5039-1673-4dac-8f3a-22b030fb41de|>,
  <1,1,|uuid://198362f5-60fc-41c8-830d-ec45f6af2fd0|>,
  <10,100,|uuid://df541114-8169-4b5f-951d-3eebe8dc3669|>,
  <8,64,|uuid://1d859c32-50a7-4bf8-a30d-ff1780e97d2f|>,
  <5,25,|uuid://e7b10154-8e16-4392-bc92-f0b6061d0c1d|>,
  <2,4,|uuid://c830ed3e-a422-423d-8080-e7c46d0645de|>,
  <4,16,|uuid://7711d79d-3b9f-4e34-9baa-9ddb93c3c176|>,
  <9,81,|uuid://de7dc398-8bd2-4b32-aee2-c341bf86f0c0|>,
  <7,49,|uuid://5a8e440e-1896-4326-b776-b21b577253f8|>,
  <3,9,|uuid://6d65e1a9-070a-4348-86f7-e72e0dc51ccf|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://395e6821-3d0b-413a-ad80-7c8785e18096|,
  <2,4>:|uuid://e9f7d2b3-b35e-4326-8941-789052d7dfe4|,
  <7,49>:|uuid://0a83031b-1811-4d55-bd42-09aa7aab05e2|,
  <9,81>:|uuid://9d14f505-8b44-4190-ba36-578422290ec6|,
  <8,64>:|uuid://a33c1d53-48bd-4602-8024-079c43fc192f|,
  <5,25>:|uuid://112e10a1-0d2e-4c0e-900a-e69376a83b4a|,
  <4,16>:|uuid://4180bb91-c55c-4205-a708-06e3382242ed|,
  <1,1>:|uuid://846325cf-f867-4045-8345-20f4ff0699e0|,
  <10,100>:|uuid://bf021b93-d450-456a-94dc-431f8d607aa6|,
  <3,9>:|uuid://e98ffdcd-cc5c-4bcd-a314-783a52dbc30e|
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

