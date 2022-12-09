---
title: "module util::UUID"
---

#### Usage

`import util::UUID;`


## function uuid {#util-UUID-uuid}

```rascal
loc uuid()

```


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
loc: |uuid://e5205daa-f76b-4e3a-9722-db04608221f1|
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
  <4,16,|uuid://aa053c85-1640-4c87-a87e-bae2da3ce5c3|>,
  <1,1,|uuid://0441d24d-da14-4d7e-b1cb-9911e37c6ee2|>,
  <8,64,|uuid://d9312e17-688b-4c39-96ea-81cc13f0db6c|>,
  <10,100,|uuid://ed544a3f-cad7-4649-8878-9b7b2d00d0cb|>,
  <5,25,|uuid://56532449-3f64-4987-b499-be7f52404b07|>,
  <6,36,|uuid://67d532e6-79fb-46da-8472-d36e0ee5fc62|>,
  <9,81,|uuid://3bf26cdc-fa4c-4ffd-87fb-9241255ae263|>,
  <7,49,|uuid://b94d644c-9e2c-4665-99a4-65e84aceb2f4|>,
  <3,9,|uuid://642f1b12-bb2a-4ab6-9646-f93b5f4c03a0|>,
  <2,4,|uuid://fdc0a78d-5aa9-453c-bc89-6e15828e362c|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://e6f3a354-0044-493c-a66d-5d19ed072737|,
  <2,4>:|uuid://b998bdb6-3cb2-4428-abd8-d39b835a30a1|,
  <7,49>:|uuid://b304b822-f835-4d74-8471-832e6c8ef8f7|,
  <9,81>:|uuid://62f9065d-90c3-4b07-b140-22bce4096134|,
  <8,64>:|uuid://dba958d2-81b0-4626-8d2b-7df66da37de1|,
  <5,25>:|uuid://bd6fef72-3764-4ad6-a8c3-3cc2f5eaa802|,
  <4,16>:|uuid://869300f4-7721-4ec2-8ff5-85bd43c71a99|,
  <1,1>:|uuid://45e534ff-e74c-47cb-b616-64f140a0220d|,
  <10,100>:|uuid://597ebe1d-7c7e-4ad5-9922-22054e30aa5d|,
  <3,9>:|uuid://a14f3d92-e0f5-4bed-8a00-194111270a62|
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

```rascal
int uuidi()

```


#### Synopsis

see [uuid], this function does the same except return the UUID as an int.

#### Pitfalls

*  beware that this integer is almost guaranteed to use 128 bits, so communicating it outside of
Rascal should not be done via a Java 32-bit integer.

