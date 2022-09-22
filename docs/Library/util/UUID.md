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

```rascal-shell
rascal>uuid()
loc: |uuid://dade67d7-e9a4-4502-8d96-80ec49cd036b|
```

Use it to relate identies to data objects, as in this example which adds a field to a relation:


```rascal-shell
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
  <3,9,|uuid://3d364708-61a6-44b9-a897-2ec84f7b5751|>,
  <7,49,|uuid://251f38ce-6225-4f3c-bd00-0201589e79fe|>,
  <8,64,|uuid://3dd380f6-b6dd-4a92-88ff-91000e6091c8|>,
  <4,16,|uuid://3b38bde4-fa4a-4a30-b465-e6a5f58133fd|>,
  <1,1,|uuid://5ca8ae7b-bf1c-4127-b7f0-d93c7a089d25|>,
  <10,100,|uuid://83c56006-afc6-46fc-9389-d14e2cc56915|>,
  <6,36,|uuid://930a0d92-b73d-4f67-b936-2f19ef208cb9|>,
  <5,25,|uuid://8a5e9e1e-4c41-40cb-ad88-299ac1eb7474|>,
  <9,81,|uuid://98882e70-3276-442f-b1bd-f917a541476a|>,
  <2,4,|uuid://7e80d58c-952b-408d-ac04-4fa0e7daef65|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://85eb7668-3d1f-4a3f-a1c0-eb501928da80|,
  <2,4>:|uuid://92500672-956f-4227-93fb-02f5502e77a5|,
  <7,49>:|uuid://aa742cfb-4519-4ae5-9837-6edf62b33635|,
  <9,81>:|uuid://361eecaf-0f20-4406-9b90-769c52f83f0c|,
  <8,64>:|uuid://60425959-66b0-45a4-a88f-827eb272a2b2|,
  <5,25>:|uuid://0c05f6a2-831d-43f8-a192-6c934bb6cdbd|,
  <4,16>:|uuid://fe547ca2-5d7c-46e0-95bd-23124c6b6fd0|,
  <1,1>:|uuid://3c01e73f-0c10-42bc-a6f3-b3ffcfb2a15a|,
  <10,100>:|uuid://21a9c69e-c8ec-43b7-b5fc-2c61b5017195|,
  <3,9>:|uuid://be4dcfc9-7410-4e5f-80db-0da59779fb9c|
)
```
Note how uuid() should always generate a fresh value:

```rascal-shell
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

