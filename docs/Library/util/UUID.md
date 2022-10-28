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
loc: |uuid://4d12d141-f9ab-42ac-9b27-090783bd59a2|
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
  <9,81,|uuid://f95f69a8-9066-48b8-a0eb-f8dd0b035391|>,
  <5,25,|uuid://463b86ba-16f0-4b1b-9115-0bd90e6372e8|>,
  <2,4,|uuid://69708587-c76b-4cce-8351-5e83b882d39f|>,
  <3,9,|uuid://cd59670f-50d0-424d-8e92-5b6417ab7b28|>,
  <6,36,|uuid://2bdc3b29-87cb-45c3-8c5b-2c5c6c7afee3|>,
  <4,16,|uuid://4c61e2bc-9f68-4a01-a678-75600f9ed52b|>,
  <8,64,|uuid://af4abaac-96c4-4321-b35b-974166e3910b|>,
  <10,100,|uuid://a7211a6d-d51a-440e-aed1-87ba369f3411|>,
  <7,49,|uuid://c0be01a7-7660-413e-bdb5-ae6d0571c001|>,
  <1,1,|uuid://4b80471e-3aa4-4f15-afe1-27d3208116cd|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://6c559398-5803-446a-acdc-758f25b6cd8a|,
  <2,4>:|uuid://b7895ac0-0601-43b3-aa11-43dd8b49c4f3|,
  <7,49>:|uuid://3eef86e8-ae23-43de-a8d8-94318842d449|,
  <9,81>:|uuid://fb69f84b-da54-4f14-9d78-69c145eaa953|,
  <8,64>:|uuid://b149be4b-8a4b-4afa-ad96-df16f4c59bd5|,
  <5,25>:|uuid://521dab95-29d9-40bf-9e8e-8e613dbf9fc2|,
  <4,16>:|uuid://3c38ec0c-734e-4bee-a85d-2161af065af5|,
  <1,1>:|uuid://0ee6d0cc-1740-4b67-8a03-6f1bba21287b|,
  <10,100>:|uuid://1460f0b9-e848-4a3f-b389-c86713745f16|,
  <3,9>:|uuid://2454f277-8b3d-4619-b8b9-4274cb7b262d|
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

