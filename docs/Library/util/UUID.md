---
title: "util::UUID"
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
a [Location](/Rascal/Expressions/Values/Location) (which is the preferred representation for encoding identities in Rascal)

#### Examples


```rascal-shell
rascal>import util::UUID;
ok
```

The uuid() function generates a location with the authority showing the literal canonical UUID string

```rascal-shell
rascal>uuid()
loc: |uuid://25265ae2-d167-4ffc-89d6-360e1d27f6cc|
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
  <3,9,|uuid://e23c4ec3-5b97-4bb9-af2f-b3697f9ef52a|>,
  <4,16,|uuid://97fe9e67-2018-4f87-a44f-1df9eead7902|>,
  <10,100,|uuid://48e89278-9330-41a3-badd-b91ac4ec7b1d|>,
  <8,64,|uuid://20863570-0e32-4e86-9553-179a70116eca|>,
  <9,81,|uuid://a5e6e122-a48a-4806-bdfc-8acdca8d5435|>,
  <6,36,|uuid://b30ea182-e683-460e-b346-19c3b9bd21b1|>,
  <2,4,|uuid://e5206a78-848b-4a00-a729-b15bb7dfde80|>,
  <7,49,|uuid://94ec3884-9b5d-44d8-be16-4d04cf8f578f|>,
  <1,1,|uuid://b4e025b8-153a-42cb-9935-668447c23dbb|>,
  <5,25,|uuid://cd4472a4-74f7-4885-aa19-0977df6a88f9|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://dce7ac53-bb31-49d2-b2fa-e740ff4eb71b|,
  <2,4>:|uuid://12fec3e5-1b98-49ee-b6c2-c5af49764c66|,
  <7,49>:|uuid://da54227f-5555-4eb8-bd00-9facfd35483f|,
  <9,81>:|uuid://826f2231-1dbc-4bc3-9bed-183135c87db2|,
  <8,64>:|uuid://8df7d938-1381-47be-b54c-7f9c0859604c|,
  <5,25>:|uuid://870f1c7a-a005-45d1-871a-87c5545a49e7|,
  <4,16>:|uuid://cabb379c-f2b5-4a7d-8734-77600459d344|,
  <1,1>:|uuid://94593023-a410-4a5c-8bad-d11fb429134f|,
  <10,100>:|uuid://8d1ac6e9-b5a4-4507-837c-83112fc052f1|,
  <3,9>:|uuid://59fce4c5-8440-4de3-9566-42e5c35316c3|
)
```
Note how uuid() should always generate a fresh value:

```rascal-shell
rascal>assert uuid() != uuid(); 
bool: true
```

#### Benefits

*  [Location](/Rascal/Expressions/Values/Location)s are used for identifying program elements or model elements in Rascal. The uuid() function provides
an quick-and-easy way of acquiring such an identity without having to design a naming scheme.

#### Pitfalls

*  UUIDs are a quick and dirty way of identifying data which may lead to hard to debug code. A naming scheme for [Location](/Rascal/Expressions/Values/Location)s is better because it generates human readable
[Location](/Rascal/Expressions/Values/Location)s which carry meaning. For example consider the difference in readability between these two values:
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

