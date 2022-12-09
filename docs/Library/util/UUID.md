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
loc: |uuid://5e58ef2c-5e86-448e-9082-d1aa9d409104|
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
  <2,4,|uuid://a8ec0f4c-8f6c-4b00-8ca0-b651db376a62|>,
  <3,9,|uuid://a4b03883-032c-45e1-b84c-9e04d7f91c5d|>,
  <6,36,|uuid://043ec074-7ea3-4b45-983e-bd246cce8f3d|>,
  <1,1,|uuid://1bef9182-a9d3-4bb6-a209-d4c4bcfbe48b|>,
  <10,100,|uuid://f5bdc84f-9633-423c-ae0a-e9fd40a8c38e|>,
  <7,49,|uuid://64050992-f9cf-4219-8cdb-31c6d1d92fe2|>,
  <5,25,|uuid://10168ff8-127e-45c1-9b74-a9113e2acf0e|>,
  <9,81,|uuid://40625eeb-16f9-4148-97b5-26de7bf51709|>,
  <8,64,|uuid://ba47f525-d888-44f7-a3d3-95c5f6838f56|>,
  <4,16,|uuid://8b4504ce-63a5-4bb0-86b6-a34181aed031|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://c3d84f34-0e69-4e95-b2a0-6341ad1c7df1|,
  <2,4>:|uuid://20b25aee-29b0-4860-9b0f-00d6ae4a1d50|,
  <7,49>:|uuid://277830f7-a52c-4b15-9740-d0b37d288592|,
  <9,81>:|uuid://aab95152-590d-4c36-a7a4-e402d5e38452|,
  <8,64>:|uuid://fbb92fae-b5b2-4fbe-9289-743d1dcc7070|,
  <5,25>:|uuid://0b974e14-660c-4d77-8361-2c41f4d0d8b0|,
  <4,16>:|uuid://4e19a068-e299-40a0-89ed-cf2fa2821147|,
  <1,1>:|uuid://2bc17fd0-e604-429a-9eaf-abb12bf6e9ec|,
  <10,100>:|uuid://dcd44bba-ed61-40f3-b8a0-2bd639ecb5bd|,
  <3,9>:|uuid://0a98bf72-1ff9-4df4-b868-23e4b0273c8e|
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

