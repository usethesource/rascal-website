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
loc: |uuid://f974ffa9-93f4-4c5e-8a72-5243a29a2cdc|
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
  <2,4,|uuid://b94318fb-dffe-4afb-bc4e-e45eddd3f22b|>,
  <9,81,|uuid://b4954fab-b195-4aeb-a8fa-f61fda571803|>,
  <5,25,|uuid://e806ee60-81ae-4e4f-8499-c775f70a3a7c|>,
  <7,49,|uuid://3d7449f5-ef98-4efb-a366-3ec98f9e3b76|>,
  <10,100,|uuid://866c853b-6c49-4787-b573-49fb7a513633|>,
  <3,9,|uuid://d441376f-0cd2-437c-9ebe-087438699ee0|>,
  <8,64,|uuid://ae5d4ff5-4ebf-40ba-a21a-c2f437aa47aa|>,
  <6,36,|uuid://799705a6-b81c-486d-8a3d-fce5c86d5f36|>,
  <4,16,|uuid://7db0a26b-b0f3-477e-9f4b-f595b3a09d71|>,
  <1,1,|uuid://7e209b6d-f060-4e59-8184-9b592583f73d|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://c3f6441c-5e52-455b-bc48-a313d99519ac|,
  <2,4>:|uuid://3a6505bc-48bf-46ec-9fea-c4c7ed285ac0|,
  <7,49>:|uuid://c4d51d06-3368-4c1a-8467-0e5f0963f0bf|,
  <9,81>:|uuid://0e82572a-bcad-48c5-ba72-44ef13e6aff1|,
  <8,64>:|uuid://c92c40ae-73fe-4819-83e2-ca21f3f9ac54|,
  <5,25>:|uuid://57fdc2d9-6f58-4867-b21a-568004c294d4|,
  <4,16>:|uuid://13a7996f-eb1b-4605-a9ad-339b28d4b9bd|,
  <1,1>:|uuid://06d57944-0423-45d3-b9cc-fc682a1c41e0|,
  <10,100>:|uuid://07726a81-cf95-47fe-a871-a5a9a5310553|,
  <3,9>:|uuid://ad9d5d28-6eea-44c8-adf7-8121a0fd59ae|
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

