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
loc: |uuid://f9d51cc2-ad9e-4d96-b375-4ca56db9aa1c|
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
  <2,4,|uuid://6ee3d08d-ed78-4298-8c04-a23ce7751e06|>,
  <1,1,|uuid://05ff3768-bee6-4992-a3ff-c789dab20d0e|>,
  <6,36,|uuid://f6f1e819-657b-48ee-89ab-74539d70f8d5|>,
  <10,100,|uuid://e9803083-7cf6-462f-b73e-cf7e1445757a|>,
  <8,64,|uuid://9e5df388-fb8f-41a3-828a-92a69da26178|>,
  <5,25,|uuid://d233fda1-4e4d-4d3c-b25e-b9dbd4af3795|>,
  <7,49,|uuid://83648803-a25e-4ce7-8a8c-0fc10cb9a05e|>,
  <3,9,|uuid://81a9b102-dd6e-4ded-b526-5e35eaed3448|>,
  <4,16,|uuid://925b8be4-1a7c-4b4a-8251-b1c2dd2b0289|>,
  <9,81,|uuid://d107ad3e-cd26-4114-b02f-1df461833850|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://a6c44411-9c11-4229-b346-ec22d3239ef2|,
  <2,4>:|uuid://beaabf8d-3c33-48d8-b51c-9d636394fbf4|,
  <7,49>:|uuid://f6511cb7-b0e1-40d9-8a35-e5d69900ea26|,
  <9,81>:|uuid://d2c51d54-b2cd-4ba0-8a41-08df07311e03|,
  <8,64>:|uuid://877fda31-dba3-4a31-8627-fe98b245f3b9|,
  <5,25>:|uuid://b6805103-3cec-46c2-9d1c-245784d3b197|,
  <4,16>:|uuid://b1ae6407-4c90-42f1-a1d1-d78d95cf16f8|,
  <1,1>:|uuid://422b76d4-89e2-4f15-9ad3-71e1263a562e|,
  <10,100>:|uuid://34234206-cba1-4337-a3d3-f0c93d3345a0|,
  <3,9>:|uuid://70146250-2331-4179-a2d4-4285c761c7cd|
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

