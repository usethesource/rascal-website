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
loc: |uuid://125a763f-2eed-42e9-93c3-8a972394aa2a|
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
  <5,25,|uuid://31287733-143d-4b53-bc35-0a01ca12dea0|>,
  <1,1,|uuid://6d6fa54d-2249-4771-8be2-36e65815d19c|>,
  <6,36,|uuid://e83783d6-36db-43c7-8385-f61ff8e7f9b4|>,
  <7,49,|uuid://6a2bd4f6-0a46-4d7d-a8aa-935dde784685|>,
  <4,16,|uuid://79e377a9-5744-40a1-81db-061e9cdac456|>,
  <2,4,|uuid://d21e8236-45d4-47f2-9668-2760c35976ed|>,
  <3,9,|uuid://ceed6d20-80db-490f-9a94-f7baf60c0b93|>,
  <9,81,|uuid://d5fc8f14-e8ed-4549-950d-4f97be946135|>,
  <8,64,|uuid://3fde18d4-4e5e-4071-b9ef-1d062b2c39be|>,
  <10,100,|uuid://263e06ac-32ba-463e-84f4-801899d9023f|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://30d124cd-2272-4d0d-a5d3-c51455645264|,
  <2,4>:|uuid://2fc5af36-bfc8-433d-9f6a-ee4f436aa536|,
  <7,49>:|uuid://66fa3666-059e-4055-a85d-d754e4deec16|,
  <9,81>:|uuid://d67f2516-dc61-4dc9-a8fc-453c2a45977f|,
  <8,64>:|uuid://ac9b8093-c4ec-4337-94dc-537c2a74d86e|,
  <5,25>:|uuid://fa4d1979-b3a2-4e57-8d57-3b749c5a7d03|,
  <4,16>:|uuid://e8540d9d-c9e0-4d87-9765-244a69aa2ae3|,
  <1,1>:|uuid://e338ed7b-570e-496e-ad28-d296907170b7|,
  <10,100>:|uuid://5e76f1ee-81d4-4133-964f-fb7ecd9f6997|,
  <3,9>:|uuid://59b2feac-789f-42d4-927c-755aa289a6b2|
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

