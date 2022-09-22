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
loc: |uuid://645b0a5a-972e-437d-b962-e8dc7ee6ff81|
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
  <9,81,|uuid://21515e39-2e2c-42ab-8319-0f7a933f8acc|>,
  <3,9,|uuid://98f2fcf1-96ea-4e09-937f-f5c8c5f09517|>,
  <10,100,|uuid://ff4b4e35-91d5-4623-ae87-12ca0d887947|>,
  <8,64,|uuid://1c115c7f-9d37-441d-a445-b2ae7fa64f2f|>,
  <6,36,|uuid://cb0ed2a3-9236-4b5b-bd28-fabe44e58ce6|>,
  <7,49,|uuid://cc5663bf-1b38-4c8b-9118-3b635ecf71dd|>,
  <1,1,|uuid://9a583b91-dc81-4b69-8ccb-33e65df52ac1|>,
  <2,4,|uuid://c7666121-8687-4d65-b8d3-1c1beb8067cc|>,
  <5,25,|uuid://13189172-6212-462e-9ce2-fee7711ebedf|>,
  <4,16,|uuid://e5f025d7-5170-4e41-8759-96abb84443d4|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://8f657b70-9b17-4621-a1a7-c3b1450f2494|,
  <2,4>:|uuid://0a42348f-09e9-4dd3-841e-221b8bd6d909|,
  <7,49>:|uuid://a2fcabbd-9dd7-4dc2-a1b0-72f9db7f46a6|,
  <9,81>:|uuid://b7a4ab3b-8a1c-4407-ad82-c925180e7cd9|,
  <8,64>:|uuid://e8f848ab-dcf0-4f43-92b7-39539075c0a0|,
  <5,25>:|uuid://18288a4b-9fc5-458e-ae7b-9b789e71fcf3|,
  <4,16>:|uuid://af4b0a97-d553-402d-ae6e-17febcc51a39|,
  <1,1>:|uuid://e74dca61-c6e6-476f-9644-a6dd0af6177a|,
  <10,100>:|uuid://75e5f4ac-408d-4cd0-8e4e-9041d5401693|,
  <3,9>:|uuid://1becedba-2441-4d47-8e56-3fa47e186bde|
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

