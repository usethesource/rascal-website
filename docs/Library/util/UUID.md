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

```rascal-shell ,continue
rascal>uuid()
<<<<<<< HEAD
loc: |uuid://211d6dcd-f061-4592-87cb-a8f853c6c07a|
=======
loc: |uuid://eecae609-1ada-4763-b8e7-1a9f6fe6bdf3|
>>>>>>> 2a7f585b (all links end with a slash now..)
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
<<<<<<< HEAD
  <5,25,|uuid://fe36c949-5cfb-47e8-8d79-b132f1f3fd38|>,
  <4,16,|uuid://776dacee-35d8-4f02-875b-87e1e0e25d74|>,
  <9,81,|uuid://f8cdd849-4296-482a-a468-62ef64037a62|>,
  <8,64,|uuid://9487f13c-c715-4de2-8282-c0f343417599|>,
  <1,1,|uuid://54efb9e7-3642-4956-9a72-37c09f4f379f|>,
  <10,100,|uuid://8f195be3-a364-4492-8f5d-f9d9d10c452e|>,
  <6,36,|uuid://9d4189d1-23bb-4cf1-b078-d0b8e4bc5ff9|>,
  <2,4,|uuid://0ccba8ca-0cd6-438d-a6f2-64f2f4f2f416|>,
  <7,49,|uuid://0fe0293b-dc57-4afc-9862-7935c2629306|>,
  <3,9,|uuid://764e2808-3322-49cd-b14d-017537b57da7|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://ef95ab37-f516-4ae2-97d5-e719dad7201a|,
  <2,4>:|uuid://32f5621b-9beb-4d83-9872-f949220d2cfa|,
  <7,49>:|uuid://64b32d95-862e-45b1-82e7-a39618f62186|,
  <9,81>:|uuid://324cf989-dbee-4127-9b2e-cea8431d4ae2|,
  <8,64>:|uuid://5bff3d67-d9b4-4250-8c7a-a942c983272f|,
  <5,25>:|uuid://d0417a30-d431-4611-960c-0f1d3fffd1a5|,
  <4,16>:|uuid://71714301-f4a6-4a7c-8850-2aef02787d9a|,
  <1,1>:|uuid://4a087f95-8ecf-4b57-9c69-cb85968be286|,
  <10,100>:|uuid://0a064f8b-c9fd-4119-9556-ad9f5c89d73b|,
  <3,9>:|uuid://2500b772-f957-4ab6-af64-7424a712346d|
=======
  <10,100,|uuid://5525893a-8f05-4cce-842f-09e6e08de0e4|>,
  <4,16,|uuid://75b2df1a-7f38-494b-936a-74b1416cbf49|>,
  <7,49,|uuid://c1b5cbf9-f526-4c67-8a08-8aae22f4c917|>,
  <1,1,|uuid://84663df4-3367-4bae-9835-699ce56ab6b7|>,
  <2,4,|uuid://e7513f2b-ed78-403f-b4f6-ea9e97fcef26|>,
  <8,64,|uuid://4b527aa4-1521-4fd3-acec-82c4cf4fef0b|>,
  <5,25,|uuid://42a166af-d816-4388-8a3c-2b6a99134c05|>,
  <6,36,|uuid://4307936a-da75-4d85-a7ee-4d7600062a4b|>,
  <9,81,|uuid://54777631-e5b4-4021-b654-52f1cc3e7a2c|>,
  <3,9,|uuid://dfba0bee-b52d-4e96-8eaa-55e293d8e0c9|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://019796a7-48fb-4118-a236-4f88400d160a|,
  <2,4>:|uuid://9c1b1fb0-1ec5-4da5-aed0-2b00242cc5ed|,
  <7,49>:|uuid://d08f50b8-1322-44c6-9f02-15bd3260f569|,
  <9,81>:|uuid://57f1e8a0-43a9-4105-828e-5aa7477ec7d3|,
  <8,64>:|uuid://8144dae1-cf1c-4ab9-b412-f60d835f5519|,
  <5,25>:|uuid://70d82401-58da-44eb-b5ab-2389a5023258|,
  <4,16>:|uuid://469f5b7e-70a9-4042-b269-ee12d3465147|,
  <1,1>:|uuid://3fb0917a-e334-45b6-960c-9fe41746f5ac|,
  <10,100>:|uuid://f814cf8a-5a60-467e-ad40-7bace41e34f1|,
  <3,9>:|uuid://090b2d39-51c3-48f0-a675-75a1184c4137|
>>>>>>> 2a7f585b (all links end with a slash now..)
)
```
Note how uuid() should always generate a fresh value:

```rascal-shell ,continue
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

