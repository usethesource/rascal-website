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
loc: |uuid://ee1d3a7e-d6e9-4fe6-9058-0987745f5b8c|
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
  <2,4,|uuid://56904670-e32e-43d1-aeac-13437858bfe5|>,
  <1,1,|uuid://1bb15798-17ae-4e2d-87e9-b2f50207735f|>,
  <4,16,|uuid://a37c9e9e-a238-4c57-a2c3-e38ea484dab7|>,
  <8,64,|uuid://7aafa2b6-7e1f-4e14-8da2-f70da0e89d04|>,
  <9,81,|uuid://753d02b2-1696-46b9-8546-1f268f471bfa|>,
  <5,25,|uuid://57bb1b95-6a2a-4523-9e5a-35e49d01c71c|>,
  <10,100,|uuid://57af4e1c-ae3c-4406-83ae-cbdbfdb9f860|>,
  <7,49,|uuid://5d037eaa-f737-490d-9e97-bbd6115766df|>,
  <3,9,|uuid://64ec88b4-ecf1-43b9-9480-ac2f4de40b14|>,
  <6,36,|uuid://a3e71dc4-7c05-475f-9787-f37247959868|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://d24a93d7-5f6b-4711-abe1-d0dbac52ec7a|,
  <2,4>:|uuid://f2357059-8892-45cf-ade6-f6c85f1c826b|,
  <7,49>:|uuid://587a7fb6-4be7-4d6a-9027-44dff2004f68|,
  <9,81>:|uuid://67af8255-e62b-4e29-b652-2ae71f93a30c|,
  <8,64>:|uuid://a11f439f-9d02-491d-b663-5716dbf833a7|,
  <5,25>:|uuid://5653f5ec-9cb4-4037-aaa8-91400aa60f77|,
  <4,16>:|uuid://c0c2b8a8-9188-4752-b1f5-25158e1fb24f|,
  <1,1>:|uuid://dbdcd8e3-95e2-4cb4-bef5-393baa7a381d|,
  <10,100>:|uuid://9d41fff1-58ba-497b-81af-b36d164fdcfe|,
  <3,9>:|uuid://4fde6c5a-ef4e-492a-9686-ffb8d79950df|
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

