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
loc: |uuid://b816ef3d-2337-4fb4-83ca-bdeb3ddfba02|
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
  <1,1,|uuid://f5b92ff7-3435-4594-9168-d610e2bb031e|>,
  <8,64,|uuid://c808e9d1-e5e9-4a08-81ba-8ddb87d20fa2|>,
  <10,100,|uuid://acaad3d9-c9da-499a-a5db-2ffe9af694ab|>,
  <9,81,|uuid://4605c658-2913-4a02-bf41-fd820601e528|>,
  <4,16,|uuid://7674cefd-e773-4ab4-9a51-6ac2f06cd97b|>,
  <2,4,|uuid://5dae78a5-f02b-4529-a461-4b1b611d48b3|>,
  <3,9,|uuid://cc217f17-5f19-4fe3-8981-26463feb178e|>,
  <7,49,|uuid://8ff3511f-da85-4873-9547-1170660cbe06|>,
  <6,36,|uuid://30413dd9-d51f-4dd9-8640-bb191ab3cb36|>,
  <5,25,|uuid://0debe66a-957e-4e30-bc41-f7b2cb2f2ce2|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://9649f5d1-b8cb-41ab-93ec-6c3196c172f5|,
  <2,4>:|uuid://abee06f5-dc4f-47db-be75-8bde333a0d62|,
  <7,49>:|uuid://787545e9-a061-4c8e-8c65-c0bba8ce381b|,
  <9,81>:|uuid://304a1d7f-0d94-48b7-93f3-cf25666a3be6|,
  <8,64>:|uuid://43c69d15-e97d-4f0d-9077-41834e1c3745|,
  <5,25>:|uuid://8e9cd094-3a37-4c66-907d-a85ea0c34529|,
  <4,16>:|uuid://65da5eca-15a0-4ea0-9852-b382b65809b6|,
  <1,1>:|uuid://16f7032e-6412-4115-866f-92e04e960655|,
  <10,100>:|uuid://2fa0570b-43ac-492b-a7fb-1b95efe826b1|,
  <3,9>:|uuid://e4ce4538-01c3-45c9-9abe-d3689703bc9e|
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

