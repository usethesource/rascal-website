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
a [Location](/docs//Rascal/Expressions/Values/Location) (which is the preferred representation for encoding identities in Rascal)

#### Examples


```rascal-shell
rascal>import util::UUID;
ok
```

The uuid() function generates a location with the authority showing the literal canonical UUID string

```rascal-shell
rascal>uuid()
loc: |uuid://d0f5982c-ad3c-4484-bebc-1db35865cef3|
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
  <4,16,|uuid://fe1d0a08-fc56-4258-a289-4308baab2456|>,
  <2,4,|uuid://539d0c22-c1d7-4c0b-b5ef-37edc24c4701|>,
  <10,100,|uuid://320a24cc-386c-4be8-996b-4cbeeec4fed6|>,
  <3,9,|uuid://c8db36b6-9674-49f2-8927-195bbc57c06d|>,
  <7,49,|uuid://c2426409-e82b-40e3-b5e8-466c0c99fa12|>,
  <6,36,|uuid://848fbae7-6505-4caa-86b5-dbedba195f29|>,
  <8,64,|uuid://a2719b31-4cb6-40f4-85d2-30dade998066|>,
  <5,25,|uuid://6a817249-3a87-4cf2-9b1d-21c640b017ce|>,
  <1,1,|uuid://f7fc449c-4c39-49ac-9c02-b54b88cc68f7|>,
  <9,81,|uuid://d22c4959-1de4-473a-881a-aec49c6c8624|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://8e5b4877-cde3-473b-870d-c5d938af2815|,
  <2,4>:|uuid://f58a364f-d223-4fcd-a0e8-1d7fae89bb82|,
  <7,49>:|uuid://60369dd6-22d3-4304-b21d-14347e2895e9|,
  <9,81>:|uuid://469b45cd-5f1d-4e4a-b346-f2eb9bb396f6|,
  <8,64>:|uuid://457ab586-ead2-4ebe-accb-610c718ff586|,
  <5,25>:|uuid://1e138427-e64d-4045-a74b-622c1376fcf5|,
  <4,16>:|uuid://6c8f39c2-ccd4-413f-a78b-8e0d0db3aa7f|,
  <1,1>:|uuid://bfe3d651-f8bb-4ba2-a840-f80bd42f4e08|,
  <10,100>:|uuid://905d1548-5691-4def-bea3-768c70504775|,
  <3,9>:|uuid://2f45793a-aa03-449a-b343-fe1d97d9e3ce|
)
```
Note how uuid() should always generate a fresh value:

```rascal-shell
rascal>assert uuid() != uuid(); 
bool: true
```

#### Benefits

*  [Location](/docs//Rascal/Expressions/Values/Location)s are used for identifying program elements or model elements in Rascal. The uuid() function provides
an quick-and-easy way of acquiring such an identity without having to design a naming scheme.

#### Pitfalls

*  UUIDs are a quick and dirty way of identifying data which may lead to hard to debug code. A naming scheme for [Location](/docs//Rascal/Expressions/Values/Location)s is better because it generates human readable
[Location](/docs//Rascal/Expressions/Values/Location)s which carry meaning. For example consider the difference in readability between these two values:
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

