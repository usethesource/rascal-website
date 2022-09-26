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
loc: |uuid://ee0ad9b3-2fc9-4f47-8f48-34920144560d|
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
  <9,81,|uuid://9bfa9bdf-9078-4867-82c6-b05976d7ee93|>,
  <6,36,|uuid://bdf001a4-afc9-4be0-a804-8e7276ffde4b|>,
  <3,9,|uuid://e1b63e8b-d0bb-4903-8815-8146a35c684d|>,
  <8,64,|uuid://f5550536-1b8f-42d9-b710-415325a0cc6a|>,
  <1,1,|uuid://e18814ba-332a-4c7c-8a27-fcbcb54b9724|>,
  <4,16,|uuid://cc58adf1-697e-457b-9c5a-970c8aee9c4a|>,
  <10,100,|uuid://d96ef65a-ae72-434a-b8e1-d06fff71b553|>,
  <5,25,|uuid://44851529-bb57-4159-afda-b4476e4f610d|>,
  <2,4,|uuid://bb64a1e0-8466-40d0-80d7-fbb07fcd7a01|>,
  <7,49,|uuid://e08e8eb6-d6ea-4292-a740-000473c2ac5b|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://047d43c3-4650-48b4-9059-18aeec0efb7b|,
  <2,4>:|uuid://dd0c5899-9788-4202-aa0c-70ac5928cce5|,
  <7,49>:|uuid://2580005c-7995-4f39-939a-bd89ad4e6348|,
  <9,81>:|uuid://98149424-1dbe-4339-965c-4f7c7ec91981|,
  <8,64>:|uuid://128b26c5-4d40-40df-b4c1-7643ea05d7df|,
  <5,25>:|uuid://459efdd8-71b7-4f01-ba16-35084febb3fa|,
  <4,16>:|uuid://42ccfde0-909a-4cd6-9503-a7f77480e27e|,
  <1,1>:|uuid://909218e7-0d28-4245-8436-3c8234ab5b6b|,
  <10,100>:|uuid://9ffa1d83-d72a-4f6f-93fb-97ee78a2f5df|,
  <3,9>:|uuid://308f6859-567e-481e-86a6-97eb07f6af80|
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

