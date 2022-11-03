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
loc: |uuid://22b3536c-3057-4103-ab5e-1b656ed687e8|
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
  <9,81,|uuid://9841c379-3713-41f4-9a69-e11a0d0e96d7|>,
  <7,49,|uuid://a9f0bc27-b028-44db-8bad-ec36a4e94671|>,
  <8,64,|uuid://7c02cce2-e1ad-4d54-97a6-3fe84b619a23|>,
  <1,1,|uuid://e139911d-7064-437e-91a6-c7f199066da3|>,
  <4,16,|uuid://10965784-c352-4dd9-bd65-329c053db7d1|>,
  <2,4,|uuid://b2d7a64d-0d64-441b-be90-b8743c3d8869|>,
  <10,100,|uuid://daf2f527-c295-47aa-b2dd-f3d7bc235ae1|>,
  <3,9,|uuid://9e00723d-01ad-4b0e-b4fd-42be4420b08f|>,
  <6,36,|uuid://5999a43f-c74f-483c-96fa-ead6d656ead7|>,
  <5,25,|uuid://9c86d470-87a2-4ea0-9cf1-9d305afdc18a|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://a9328576-d955-4a12-aec3-d49693b25b23|,
  <2,4>:|uuid://1cbb9f87-f8c8-4d91-b027-f3edd8331b7b|,
  <7,49>:|uuid://bd5ee218-2f12-4e42-a834-db908d23afa0|,
  <9,81>:|uuid://688e25c8-7a86-412d-8009-563ca059c39f|,
  <8,64>:|uuid://dab5174b-0f7c-4a3f-b89a-b3f79083badf|,
  <5,25>:|uuid://c4f14b6a-0916-4049-a7eb-8f1932c47463|,
  <4,16>:|uuid://96ee362d-e761-466c-8a7a-39688c67c2ab|,
  <1,1>:|uuid://55123295-0b0a-4acd-b860-98c94c2607f3|,
  <10,100>:|uuid://7308b1ff-58ac-4a48-acab-6831ff1c78ab|,
  <3,9>:|uuid://0051159d-47f7-4096-808e-95b28bfef036|
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

