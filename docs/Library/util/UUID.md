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
loc: |uuid://814aa90f-1d31-4764-ba3e-8177672947f1|
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
  <7,49,|uuid://9e15ffc6-562c-4f68-900a-342424034eec|>,
  <9,81,|uuid://ca43f0d5-bb32-4b99-b24e-098c2f0caff8|>,
  <2,4,|uuid://7a903ee2-41b3-440e-a50b-019d320bdf54|>,
  <4,16,|uuid://6a23f521-0109-4d20-880b-cf884aefb075|>,
  <5,25,|uuid://02e0ca72-77ab-4b90-9742-d31a74fdeb49|>,
  <3,9,|uuid://54c3834f-e6fa-44af-9ecd-2dc25d38efb3|>,
  <1,1,|uuid://fe2d83ce-1cef-46b0-8d57-1caca174aa40|>,
  <10,100,|uuid://a6595eb9-c6e6-448d-89b1-3cccfc9fe6ba|>,
  <8,64,|uuid://70e50bcc-54ee-4a81-bb30-9e830bad8fc6|>,
  <6,36,|uuid://018ca732-c83e-4f1c-9351-f161e20ca573|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://0fe905c9-51f0-4495-9739-36839f9c15cc|,
  <2,4>:|uuid://94823ac1-a384-4ecf-8193-8d27e95610de|,
  <7,49>:|uuid://9e138c94-909f-434a-aa6b-aa65ae24d30d|,
  <9,81>:|uuid://39ec5976-cacb-400e-88b9-4316acc7de6b|,
  <8,64>:|uuid://45e7e8ae-b45b-402f-a661-5d27f2627f20|,
  <5,25>:|uuid://ee1f68fa-b8ca-4724-8ef4-dbb18866909a|,
  <4,16>:|uuid://9d6ebadb-c783-4dc2-bf72-0a3c96c79291|,
  <1,1>:|uuid://08ab4694-e15d-4bc4-bd1e-236128e81674|,
  <10,100>:|uuid://e2ee9f83-0137-4cc3-8a12-9aa63ecf407b|,
  <3,9>:|uuid://5e1a37fa-7f6a-41e4-9f53-3507d9bb6cf4|
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

