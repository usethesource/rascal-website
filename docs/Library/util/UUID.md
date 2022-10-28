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
loc: |uuid://4491c76e-6efa-4a2c-82fb-094db1e5a057|
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
  <6,36,|uuid://cdfd671d-1a4e-4757-bfb2-cf06eb5e5cc0|>,
  <4,16,|uuid://db8127c8-2f5d-4432-82f6-c496a9848758|>,
  <8,64,|uuid://4ab9d838-1508-4a7f-bd00-b1061cca0927|>,
  <10,100,|uuid://bdccab61-3e4e-4c7f-a3f1-08904a868e19|>,
  <7,49,|uuid://fe964d4f-9800-46f4-be0e-a3d4734b2649|>,
  <9,81,|uuid://95939147-6e60-41c0-bad7-a09c20ee1bec|>,
  <3,9,|uuid://fbf8c0a5-a97f-4821-8db6-8430f3ea32ca|>,
  <2,4,|uuid://9dc96f8b-3d3b-4c9c-91b4-f17af408ca19|>,
  <1,1,|uuid://850944ef-3ff7-49cc-9d1d-80065fe825bd|>,
  <5,25,|uuid://33ce5df2-4ec8-49ad-8455-974e4cd9d83e|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://9536ae35-ed8b-4d09-8294-1b73ff87dc34|,
  <2,4>:|uuid://d2448710-361a-4649-9b22-7f310c9323d6|,
  <7,49>:|uuid://b42e76eb-8801-443b-a431-2ec88d1d70cf|,
  <9,81>:|uuid://ac3c6578-3684-48c8-b390-0acf70ef2ac1|,
  <8,64>:|uuid://f6f8668c-db98-4b9f-8a57-d0a50311f7c0|,
  <5,25>:|uuid://039af9fb-9471-4430-926d-cf59e25e1df5|,
  <4,16>:|uuid://a462143f-dad4-4813-8239-9132bf816e60|,
  <1,1>:|uuid://39b799df-4a5e-4381-b3de-7d4d9878bc36|,
  <10,100>:|uuid://6ed22474-ca68-4896-bf35-cebf38544a44|,
  <3,9>:|uuid://8ff90ef2-fc9e-4ba6-862e-b160d39a399d|
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

