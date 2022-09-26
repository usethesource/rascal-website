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
loc: |uuid://a60bb3d5-2483-4164-8559-b53df58268a3|
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
  <10,100,|uuid://ea3c46a5-cdf7-4d58-805e-d5c5886cce20|>,
  <2,4,|uuid://b6f07694-c9a6-446b-85de-21da00c64791|>,
  <3,9,|uuid://51f8e51b-89d5-41d0-9d1e-8be0ecc70e5b|>,
  <8,64,|uuid://d82d0f04-6dff-4477-93ee-bfd0ac718816|>,
  <4,16,|uuid://7fd6dc5e-704d-4833-8ddc-dfef7609e714|>,
  <7,49,|uuid://7390579c-802b-462b-b0d9-4681b666af32|>,
  <5,25,|uuid://75e3707a-6b47-4f70-a48f-003a3db3bda4|>,
  <9,81,|uuid://0b7c1ee6-811d-4bcf-bc2c-7d315b107994|>,
  <1,1,|uuid://4b48bc47-262e-4cec-9686-c7b83bb9c104|>,
  <6,36,|uuid://67dcb1a6-03b5-43a9-9b5b-4a4942621eb7|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://dc8b5f10-7472-40ea-982f-c5248b0b0f58|,
  <2,4>:|uuid://bc5a9d45-4a39-49ff-b5fc-e02bda847123|,
  <7,49>:|uuid://d784bd40-433e-4980-9432-6d777c5f96d7|,
  <9,81>:|uuid://0f34b267-8b12-450d-909a-99aec4be1493|,
  <8,64>:|uuid://5cc3b7f6-36e5-46f2-83da-9f9d5a68eee4|,
  <5,25>:|uuid://ab984c0b-5d25-493c-99fb-0683cbdbb0ee|,
  <4,16>:|uuid://ce9bc90a-4ba5-493d-aa9b-6079e996ee81|,
  <1,1>:|uuid://958c678a-0620-4136-a762-f430c3ae42f5|,
  <10,100>:|uuid://f7b77396-c746-4455-8f59-94f24e566001|,
  <3,9>:|uuid://eabb8e92-7ee1-42eb-8262-10a11a8604d7|
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

