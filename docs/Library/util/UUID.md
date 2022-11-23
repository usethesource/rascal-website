---
title: "module util::UUID"
---

#### Usage

`import util::UUID;`


## function uuid {#util-UUID-uuid}

```rascal
loc uuid()

```


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
loc: |uuid://bd6c5bf1-b9e5-4b68-b84e-51573ab084c9|
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
  <1,1,|uuid://2672e78b-a1f3-4f0d-a93d-73cc17d8d195|>,
  <10,100,|uuid://0b60780b-609f-4c3c-aad0-cbe76dffd43b|>,
  <8,64,|uuid://9fe4f07b-0364-40cd-afbc-5ec096bce853|>,
  <4,16,|uuid://bac1bed5-909d-4e9d-bd28-bdec33bcbed2|>,
  <5,25,|uuid://6d1a4039-13a4-4a2f-8cdf-725a91fdd9b4|>,
  <3,9,|uuid://aebd1727-ebc9-402b-aa56-a586fedf78cf|>,
  <7,49,|uuid://83c4d2e7-3a30-49b5-bfa1-f7b79f4a33ab|>,
  <6,36,|uuid://d5597304-9078-4d66-9456-611644cf7fd8|>,
  <9,81,|uuid://88ffa34c-bd01-4a51-bd05-cfbdd8cb9b7c|>,
  <2,4,|uuid://ff8ed843-fdf6-4550-a837-d545dd294d51|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://fd4a633a-67fd-4536-be1b-b058de212392|,
  <2,4>:|uuid://26f0b0c2-535d-4750-8eb3-c313700dad77|,
  <7,49>:|uuid://b50c5f9b-1122-4dcd-a2e7-629470b36e08|,
  <9,81>:|uuid://9dfeef8e-f5c3-4a8a-be7e-d9daa6bc938f|,
  <8,64>:|uuid://7e7fe942-3572-4fb0-bad5-ba853a1e9815|,
  <5,25>:|uuid://edf995cd-bb6d-4d3d-96d1-ecd38c0e0c6f|,
  <4,16>:|uuid://e807bcc3-c936-4c46-94d0-a666029edb50|,
  <1,1>:|uuid://0a2cd18d-4e00-431f-96ef-58b5049abd73|,
  <10,100>:|uuid://ba5b5d0b-4d84-49dd-ba84-4326274b1c68|,
  <3,9>:|uuid://e34f2a0a-ba3c-4ac6-9d6d-de29704c1097|
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

```rascal
int uuidi()

```


#### Synopsis

see [uuid], this function does the same except return the UUID as an int.

#### Pitfalls

*  beware that this integer is almost guaranteed to use 128 bits, so communicating it outside of
Rascal should not be done via a Java 32-bit integer.

