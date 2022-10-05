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
loc: |uuid://e4a55bd1-e50e-4739-8c60-52ccfd65cc8a|
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
  <4,16,|uuid://20193345-892c-477e-b998-371d24257265|>,
  <7,49,|uuid://8725f686-5425-46d5-8608-34c4cc45b715|>,
  <10,100,|uuid://5e9ae7a3-39cb-414c-b705-005bb0061422|>,
  <9,81,|uuid://abe5a877-2458-4dc1-964c-4becbaa86d68|>,
  <5,25,|uuid://3392f4ba-41f1-41a6-9f97-9da8e30bc64d|>,
  <1,1,|uuid://fe3aa98a-c3a6-4d68-8c4f-65757cee87b7|>,
  <3,9,|uuid://0b81d4ac-db8e-4dee-85b0-c1c2c5e6c624|>,
  <6,36,|uuid://e78aaa67-0a4a-476f-93ef-c5c2c08ecf95|>,
  <2,4,|uuid://83dee6b0-9d12-46b0-b0e3-d984c1d16f80|>,
  <8,64,|uuid://d9bf48b4-d99d-4a08-8f3a-96b2f098c766|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://ee99a58b-62db-4065-8049-04f4a61ea813|,
  <2,4>:|uuid://5bdeeefe-394a-4ae6-943a-80ad5fed0356|,
  <7,49>:|uuid://20ab8f72-0d1f-4530-828c-e99c055a08f7|,
  <9,81>:|uuid://ec308823-91b3-4a66-9efc-9a35755a632f|,
  <8,64>:|uuid://be43d87d-99bd-42fc-857d-cc622d41b02b|,
  <5,25>:|uuid://5697dfd2-82c4-4cf1-a989-024dc89551cb|,
  <4,16>:|uuid://e2eab911-a6cd-40d4-a2f0-68ec0f6b40af|,
  <1,1>:|uuid://13631999-45e5-4708-b85c-5ddff15f5ea5|,
  <10,100>:|uuid://eb99094c-5045-4d34-a980-393bd476144e|,
  <3,9>:|uuid://2a137b35-851d-46da-ab3b-a679e921b556|
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

