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
a [Location](/docs/Rascal/Expressions/Values/Location) (which is the preferred representation for encoding identities in Rascal)

#### Examples


```rascal-shell
rascal>import util::UUID;
ok
```

The uuid() function generates a location with the authority showing the literal canonical UUID string

```rascal-shell
rascal>uuid()
loc: |uuid://410e6471-8dcc-47bb-8cf0-b1374ca3b4c7|
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
  <2,4,|uuid://e585de30-57e1-4768-96a5-8342ddfd6e54|>,
  <4,16,|uuid://d6aa41d5-7c0a-4a39-9b35-0a8b7d67b620|>,
  <7,49,|uuid://c762e13e-f19d-4355-b62b-41832df51f53|>,
  <1,1,|uuid://625d1bea-a53f-48ea-b3c2-cecc4c778666|>,
  <5,25,|uuid://3fc36de8-d05f-4316-9196-a71edb4df55d|>,
  <6,36,|uuid://0713af36-ed04-425d-9c25-b289665ace1f|>,
  <8,64,|uuid://6a77ba2f-15cd-452a-a50e-11a111d15af2|>,
  <9,81,|uuid://bf905df4-20fb-4b9a-9355-b86b66de66c8|>,
  <10,100,|uuid://d146e4f0-0e50-49db-a9fe-1f68d41169cb|>,
  <3,9,|uuid://4836a156-3704-47f8-8c3c-92460a747b12|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://a06153b0-ad85-4353-a09f-7ba90019614b|,
  <2,4>:|uuid://66a0c4c0-6bca-49a6-8b8f-aa3dcbd24205|,
  <7,49>:|uuid://72ab1a43-9a66-4ce2-846a-a81c721c4bcb|,
  <9,81>:|uuid://31f597cb-ff72-4028-b593-b06ed04399bc|,
  <8,64>:|uuid://f254a6ae-f0b4-4a5d-883b-1e21985bd7b8|,
  <5,25>:|uuid://c7376f83-8a9c-4e3b-bc77-b9acf3c48194|,
  <4,16>:|uuid://922af4eb-2816-4d6e-8197-f8ae2de38154|,
  <1,1>:|uuid://e97d1f5c-370a-47fb-9c38-3ddbd4d31425|,
  <10,100>:|uuid://1cd33ed5-2603-4830-838d-eccd0b06211d|,
  <3,9>:|uuid://2545fd54-9548-44b5-b83e-98a06870986d|
)
```
Note how uuid() should always generate a fresh value:

```rascal-shell
rascal>assert uuid() != uuid(); 
bool: true
```

#### Benefits

*  [Location](/docs/Rascal/Expressions/Values/Location)s are used for identifying program elements or model elements in Rascal. The uuid() function provides
an quick-and-easy way of acquiring such an identity without having to design a naming scheme.

#### Pitfalls

*  UUIDs are a quick and dirty way of identifying data which may lead to hard to debug code. A naming scheme for [Location](/docs/Rascal/Expressions/Values/Location)s is better because it generates human readable
[Location](/docs/Rascal/Expressions/Values/Location)s which carry meaning. For example consider the difference in readability between these two values:
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

