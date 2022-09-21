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
loc: |uuid://1afcffab-6814-4d34-ba2e-beea99df1da9|
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
  <3,9,|uuid://b70380a0-424f-4f60-9a23-2c1379bff450|>,
  <6,36,|uuid://b26784cb-71da-49ff-8e5d-34b9b767ed38|>,
  <10,100,|uuid://9f184c09-221a-428b-a712-1f0cacb5d8ef|>,
  <4,16,|uuid://6588766e-de16-43f2-86d2-d7fba63cbe2a|>,
  <8,64,|uuid://71ffcbd9-155c-42ac-af0f-35302ea97daa|>,
  <9,81,|uuid://4478803f-2eb7-4d78-8cf2-2fea59599fd6|>,
  <5,25,|uuid://89aed3d1-a490-4fb5-b1f7-1986934a52ca|>,
  <7,49,|uuid://5b0ced48-bbcf-426c-85a5-6a6a755addda|>,
  <1,1,|uuid://9d37aae6-be18-44a0-99e3-8c4d596e9d3a|>,
  <2,4,|uuid://b1fa34d1-640e-4a51-be72-7cf23c66746d|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://bd1389dc-8252-44ce-b7a5-1420906e5289|,
  <2,4>:|uuid://b74c156b-3737-4443-b5ba-073a4bd640fc|,
  <7,49>:|uuid://3710549b-21b3-4bc9-964c-9d31a532439c|,
  <9,81>:|uuid://ca25f09b-71d3-4bbc-8b72-34cc82d1d67e|,
  <8,64>:|uuid://0047e791-a9a6-47d0-954a-987c97f2335e|,
  <5,25>:|uuid://22430518-73e1-452c-a158-f6a142be5fb0|,
  <4,16>:|uuid://06d5a071-769b-4191-accf-ebf5a09b1fc9|,
  <1,1>:|uuid://2e986248-7d18-4dd6-a318-073ff8077b31|,
  <10,100>:|uuid://afdcd5f8-e6a2-4dc7-b0af-647067100399|,
  <3,9>:|uuid://4472fb59-8991-41b1-951a-0f9cf3358f62|
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

