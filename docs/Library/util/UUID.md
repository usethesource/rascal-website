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
loc: |uuid://02de3b14-7b92-45c7-bde7-dea2d5923fd8|
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
  <7,49,|uuid://b1a39568-c51a-45fb-afed-b939de02faac|>,
  <8,64,|uuid://4e1ee423-cbe3-4e1c-9894-44dee1b56e0b|>,
  <9,81,|uuid://10d7d09e-398f-459a-834a-09ab343a56dc|>,
  <3,9,|uuid://40714c28-8207-43b4-a8d5-32a789498384|>,
  <6,36,|uuid://279c5947-dbf2-4007-b8db-ef5f8fc50c23|>,
  <1,1,|uuid://c0057ab1-f8f2-43ab-b84a-e605ebdbe474|>,
  <5,25,|uuid://5227551f-2319-4e78-973f-b5803efa4f81|>,
  <2,4,|uuid://6f0620fc-ba44-48ec-b16f-5f0363e10763|>,
  <4,16,|uuid://31130800-9f2e-4a2f-aa56-624bb43e8dca|>,
  <10,100,|uuid://f9e68fed-2e17-4a4c-a3fb-8bba6365e0c0|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://ff3c13df-e6c4-406b-9a15-cb5ae672229d|,
  <2,4>:|uuid://64aebff1-2788-4d57-9e89-95b76ff5b5e0|,
  <7,49>:|uuid://dc91a31d-0e60-4bff-8ce0-f91ce20b0bd9|,
  <9,81>:|uuid://33e19366-e638-448c-af68-9f133547e706|,
  <8,64>:|uuid://fe39ac78-0f8c-4f86-9446-f5e08eeb5c75|,
  <5,25>:|uuid://da81aa9a-d8a1-46ed-a666-3638be33c886|,
  <4,16>:|uuid://d3fd8c61-5bdc-4745-b152-e8bfaa19745e|,
  <1,1>:|uuid://27c47acb-bb77-4714-903a-ddb8bff6bf0a|,
  <10,100>:|uuid://d3574615-23d5-4a6c-a648-b64e81df20ec|,
  <3,9>:|uuid://9c2de822-7639-4a90-ae75-079c41d3f9ac|
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

