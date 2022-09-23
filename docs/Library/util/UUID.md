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
loc: |uuid://fee2da1b-d32a-42c0-b6dc-52a183c6c3ab|
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
  <10,100,|uuid://857a23f0-54df-47e6-84d3-3dd8ce6f2a76|>,
  <4,16,|uuid://252b086f-1c1b-4917-9ba4-1191bc46b2ba|>,
  <8,64,|uuid://aa5650bc-c2ad-4694-939b-79de80f882b7|>,
  <7,49,|uuid://f39100d0-a3d6-420d-a8f5-50953d8ec8d8|>,
  <3,9,|uuid://09df5de2-ab66-4928-be77-1c296251ed00|>,
  <2,4,|uuid://81ec000a-749d-44da-b9e1-afaf3212c242|>,
  <5,25,|uuid://1ebf7996-93bc-4620-bc0a-6c2f89cb2830|>,
  <1,1,|uuid://df64a814-1f35-4269-9855-59d1a5ba3aeb|>,
  <6,36,|uuid://d2bcf9b8-4925-4b05-b220-0224b49c6249|>,
  <9,81,|uuid://0a93beda-fce9-4ff7-9468-70e7f1725cce|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://9a64e969-8c38-4dd9-883f-dab07c727b30|,
  <2,4>:|uuid://d5186019-2a3d-4930-b946-d58115eddcc8|,
  <7,49>:|uuid://96543b13-62c5-485d-8e6d-d285623006ef|,
  <9,81>:|uuid://384da723-c706-405e-9179-d58fcf02afb7|,
  <8,64>:|uuid://237aa631-80da-442b-b2b0-a4e784721f80|,
  <5,25>:|uuid://c7dd131e-73ed-44b7-9b7d-ad52df97fd0b|,
  <4,16>:|uuid://e0b28346-9182-4042-94e7-3eaebfec97db|,
  <1,1>:|uuid://358d7da7-35fc-412c-b723-fe2a63566606|,
  <10,100>:|uuid://bc2cb601-f35e-4ff8-8757-0c9da91fc639|,
  <3,9>:|uuid://3024ac65-d443-428d-a395-a8fb5e500ec5|
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

