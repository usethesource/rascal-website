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
a [Location](../../Rascal/Expressions/Values/Location/index.md) (which is the preferred representation for encoding identities in Rascal)

#### Examples


```rascal-shell 
rascal>import util::UUID;
ok
```

The uuid() function generates a location with the authority showing the literal canonical UUID string

```rascal-shell ,continue
rascal>uuid()
loc: |uuid://3e1d248e-7328-4e37-97a5-de8bebc1e670|
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
  <8,64,|uuid://37fd5901-cd43-431f-a900-eb83f709157b|>,
  <7,49,|uuid://8be5ee25-c86e-404c-b696-2cce2104fbdb|>,
  <3,9,|uuid://c1574ff4-7e4a-4301-8b36-aff3ce418a81|>,
  <4,16,|uuid://e31ccc40-1797-4fbe-8b32-31cb0d252906|>,
  <6,36,|uuid://d99d85d5-b35f-4e86-8044-e05f93651cd0|>,
  <9,81,|uuid://280ed956-e8b0-4093-bd5c-8c04aa161f53|>,
  <10,100,|uuid://b854ece8-a7a0-4e08-af5e-0df2af9e4c3a|>,
  <2,4,|uuid://27d280c2-433c-4d32-8f8a-ae2f9c9d90e1|>,
  <1,1,|uuid://27b33836-f2d9-4f2e-93d2-7ebcdc1b2314|>,
  <5,25,|uuid://e2999ade-0531-41b5-a4e4-a1cb36a592e7|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://d1387313-0d3a-4910-ae8c-56407aebd29c|,
  <2,4>:|uuid://0e61d44c-6d9f-48f1-be76-fa1069892535|,
  <7,49>:|uuid://7abcac6c-6698-43ec-8e3c-4d0fbfdd0d24|,
  <9,81>:|uuid://b9e47b2c-4948-425e-90f9-786c72a15569|,
  <8,64>:|uuid://7fe46248-07b0-4d7a-a828-631b9f37d604|,
  <5,25>:|uuid://ff244ecc-2b04-4f05-888b-b7ad4acf9981|,
  <4,16>:|uuid://02442197-07fa-47f9-90f5-30ec448abb78|,
  <1,1>:|uuid://a92f8774-1f62-4d3e-ba8e-09a719cd71f8|,
  <10,100>:|uuid://af476dd4-5792-457a-a544-2a71e60fed64|,
  <3,9>:|uuid://ad8a4671-c541-432d-82b6-93699e35c39b|
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

