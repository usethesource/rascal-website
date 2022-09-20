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
a [Location](/Rascal/Expressions/Values/Location) (which is the preferred representation for encoding identities in Rascal)

#### Examples


```rascal-shell
rascal>import util::UUID;
ok
```

The uuid() function generates a location with the authority showing the literal canonical UUID string

```rascal-shell
rascal>uuid()
loc: |uuid://f963d859-250e-4b23-a27e-43017cc16341|
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
  <1,1,|uuid://c64fe7f5-edfb-4722-9f28-66e9a7d51f91|>,
  <10,100,|uuid://57880350-ea33-4737-8664-004682774102|>,
  <8,64,|uuid://72fe6fc9-cf45-4e47-a9c7-2cdf91f6b28a|>,
  <6,36,|uuid://627e07e6-139f-4f73-a429-3041d0240951|>,
  <7,49,|uuid://dd426123-2de2-41f4-ad71-87bae5e6692a|>,
  <5,25,|uuid://2449cc50-1c96-44ad-9065-084ab729e5da|>,
  <9,81,|uuid://ea9076ab-d6e2-4f8c-866f-978542f71dba|>,
  <2,4,|uuid://a26abf01-c109-41ac-a74c-243cdb1e8420|>,
  <3,9,|uuid://5fbd1ec3-0504-420c-bd31-eb92f46d9d76|>,
  <4,16,|uuid://052f6343-e463-4357-9421-8c85451d9fa0|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://7d2de626-614d-4fd1-bace-dff1d4874082|,
  <2,4>:|uuid://3ef6f588-a902-4815-9f55-6b2391002ec1|,
  <7,49>:|uuid://c8aa00a9-25bf-4e45-a086-c6bba5afb4fd|,
  <9,81>:|uuid://f8f79646-64d8-4b98-9961-fdf32b49ece2|,
  <8,64>:|uuid://28f42c09-d46b-4d7e-9b4a-cd8e91ceb500|,
  <5,25>:|uuid://7059579b-19eb-41b9-a379-133fbe4a9609|,
  <4,16>:|uuid://3bf9d8f5-d57c-4082-bd51-411aecf51c82|,
  <1,1>:|uuid://41a27355-8830-4da4-bf04-9e5041693ef6|,
  <10,100>:|uuid://a8cbb236-2ebb-4cb7-a6eb-d4dd683cb229|,
  <3,9>:|uuid://4c7ebb38-c35b-41f0-b0da-d620805394df|
)
```
Note how uuid() should always generate a fresh value:

```rascal-shell
rascal>assert uuid() != uuid(); 
bool: true
```

#### Benefits

*  [Location](/Rascal/Expressions/Values/Location)s are used for identifying program elements or model elements in Rascal. The uuid() function provides
an quick-and-easy way of acquiring such an identity without having to design a naming scheme.

#### Pitfalls

*  UUIDs are a quick and dirty way of identifying data which may lead to hard to debug code. A naming scheme for [Location](/Rascal/Expressions/Values/Location)s is better because it generates human readable
[Location](/Rascal/Expressions/Values/Location)s which carry meaning. For example consider the difference in readability between these two values:
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

