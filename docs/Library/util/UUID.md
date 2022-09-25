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
a [Location](../../Rascal/Expressions/Values/Location/) (which is the preferred representation for encoding identities in Rascal)

#### Examples


```rascal-shell 
rascal>import util::UUID;
ok
```

The uuid() function generates a location with the authority showing the literal canonical UUID string

```rascal-shell ,continue
rascal>uuid()
loc: |uuid://56b7ebbc-5d03-4f0d-bbbd-5b505307868e|
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
  <2,4,|uuid://5cdc33f9-72d4-4566-becd-b5408d0986aa|>,
  <3,9,|uuid://88cdeb4f-b685-4c8c-a36c-263aaf9a0ba2|>,
  <6,36,|uuid://94e66ed0-2a09-42e3-9879-0b9bdbc7e49f|>,
  <5,25,|uuid://20a36eba-1695-4b71-8f5c-388a55026d67|>,
  <9,81,|uuid://7c1c09af-3ae9-4411-8ca1-226e657738e8|>,
  <1,1,|uuid://4b2e0f4f-c479-4fe5-b1e3-579dd9f3c2ae|>,
  <4,16,|uuid://961db006-c917-41f9-9e48-5ff4d05d5854|>,
  <10,100,|uuid://b29e003d-2813-47f3-b71e-79a27ab945ee|>,
  <8,64,|uuid://3a48de00-7be2-4e18-a8f2-7f5846b2b7ff|>,
  <7,49,|uuid://3e4968fa-c725-4bc4-ab13-794ed78b6d90|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://3addd2d8-62c1-4d0f-b1c9-ee81aaf7877c|,
  <2,4>:|uuid://a9f830b3-7bd6-428d-92a7-3a3ed75a5565|,
  <7,49>:|uuid://ed3b8892-a930-42d2-88e6-e4c24314b637|,
  <9,81>:|uuid://7c5570a3-af59-4f5f-a20e-c7bdba892ceb|,
  <8,64>:|uuid://55356c87-2169-403d-802d-e896a270084c|,
  <5,25>:|uuid://7e720dde-a1ba-439b-aaee-a8b55fc5b564|,
  <4,16>:|uuid://055d66a1-aea4-4b62-9815-21687fb157b5|,
  <1,1>:|uuid://feb8bdd3-c161-401a-b5a6-3b87c6cebafa|,
  <10,100>:|uuid://4a6a9697-5a18-4e8c-9a3f-bf10d4d4aeb4|,
  <3,9>:|uuid://696f1dae-b9f5-46dc-85a5-ae3a2a73ea11|
)
```
Note how uuid() should always generate a fresh value:

```rascal-shell ,continue
rascal>assert uuid() != uuid(); 
bool: true
```

#### Benefits

*  [Location](../../Rascal/Expressions/Values/Location/)s are used for identifying program elements or model elements in Rascal. The uuid() function provides
an quick-and-easy way of acquiring such an identity without having to design a naming scheme.

#### Pitfalls

*  UUIDs are a quick and dirty way of identifying data which may lead to hard to debug code. A naming scheme for [Location](../../Rascal/Expressions/Values/Location/)s is better because it generates human readable
[Location](../../Rascal/Expressions/Values/Location/)s which carry meaning. For example consider the difference in readability between these two values:
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

