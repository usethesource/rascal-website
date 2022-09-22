---
title: "util::UUID"
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
a [Location](/docs/Rascal/Expressions/Values/Location) (which is the preferred representation for encoding identities in Rascal)

#### Examples


```rascal-shell
rascal>import util::UUID;
ok
```

The uuid() function generates a location with the authority showing the literal canonical UUID string

```rascal-shell
rascal>uuid()
loc: |uuid://242c7161-8c0e-4d9e-a6e3-a91ace66545d|
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
  <7,49,|uuid://952fc971-79cf-43ac-940b-de0c3856bd81|>,
  <9,81,|uuid://7f9006ca-9d63-4669-abe0-3a67e0384031|>,
  <5,25,|uuid://a4470cb0-4e06-4e78-ab24-327ea5a61b40|>,
  <1,1,|uuid://264c61da-cb0e-4e85-b0ae-1cbf079b07fa|>,
  <2,4,|uuid://3f77fc3b-0a4c-494f-b9a8-0123a38b9427|>,
  <3,9,|uuid://0faed17d-f127-40d7-ac54-666c0b99b716|>,
  <4,16,|uuid://772b9279-647e-439a-839d-700b9b34c35e|>,
  <6,36,|uuid://4f3d37d4-cb17-48af-85f9-d7e592a29aed|>,
  <10,100,|uuid://d1ec46cb-e094-43b1-98bc-3eede512f922|>,
  <8,64,|uuid://a481d0c4-12cd-4249-a070-6abf619afb5e|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://3d273f21-3406-45a8-803e-294701480e6d|,
  <2,4>:|uuid://503e6e1a-927d-41a5-8f9a-85fe8145e01b|,
  <7,49>:|uuid://996bb49c-694f-40cc-a5ec-8f16bf8a8c1b|,
  <9,81>:|uuid://7ea67083-c719-4115-9b23-02229bf663a2|,
  <8,64>:|uuid://bf0065a8-3e4e-4079-91ed-ed540b4d7970|,
  <5,25>:|uuid://efdaba38-643d-486d-8767-7570ee3b9b0b|,
  <4,16>:|uuid://1987bed7-44b6-4ae7-986c-97a58faab564|,
  <1,1>:|uuid://f0d91fdd-d2fd-42e4-b544-ba8476d10962|,
  <10,100>:|uuid://ab99cb71-e13c-4b98-853f-d2bdd1664d6a|,
  <3,9>:|uuid://a1ff2b5f-5b3a-4602-bf32-2f6a2a26e84e|
)
```
Note how uuid() should always generate a fresh value:

```rascal-shell
rascal>assert uuid() != uuid(); 
bool: true
```

#### Benefits

*  [Location](/docs/Rascal/Expressions/Values/Location)s are used for identifying program elements or model elements in Rascal. The uuid() function provides
an quick-and-easy way of acquiring such an identity without having to design a naming scheme.

#### Pitfalls

*  UUIDs are a quick and dirty way of identifying data which may lead to hard to debug code. A naming scheme for [Location](/docs/Rascal/Expressions/Values/Location)s is better because it generates human readable
[Location](/docs/Rascal/Expressions/Values/Location)s which carry meaning. For example consider the difference in readability between these two values:
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

