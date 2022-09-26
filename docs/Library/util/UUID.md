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
a [Location](../../Rascal/Expressions/Values/Location/index.md) (which is the preferred representation for encoding identities in Rascal)

#### Examples


```rascal-shell 
rascal>import util::UUID;
ok
```

The uuid() function generates a location with the authority showing the literal canonical UUID string

```rascal-shell ,continue
rascal>uuid()
loc: |uuid://a0b2bbc6-96c8-4fb3-8133-6df7280e057f|
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
  <4,16,|uuid://e43e6d1e-8dbf-4838-b5fc-300f747b5e14|>,
  <5,25,|uuid://ba6aacd3-85ce-44ea-b6a6-40c2d0360f20|>,
  <8,64,|uuid://eaf85c20-35bc-472f-90fb-c364486b3cab|>,
  <3,9,|uuid://05f31103-ee40-4440-aa44-4911ccc4905c|>,
  <10,100,|uuid://f6f9bf83-a21a-47be-9fd8-9e40cce861a6|>,
  <6,36,|uuid://0fffb1e0-9550-47b4-b198-595d7b05f832|>,
  <1,1,|uuid://20aac7ec-ecf8-4e11-abb0-e2a55585880e|>,
  <7,49,|uuid://621cfd64-7348-484b-acd4-377be21a1988|>,
  <9,81,|uuid://b7ebda1f-547a-4583-b5bc-e223d78d7517|>,
  <2,4,|uuid://6935f8ce-ff88-413b-b7ac-8e80b42183fe|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://81921872-6172-4b1d-a5ad-54841aee04ba|,
  <2,4>:|uuid://a8499834-5c0e-4d32-8bc7-7f4bd7f6b36c|,
  <7,49>:|uuid://f69498e6-876b-4ed8-9f5e-d73e7ea6bd2a|,
  <9,81>:|uuid://43db6bd5-6024-439f-a46b-0c10276d159a|,
  <8,64>:|uuid://cb4734de-403a-4f39-82d2-04d6bad70892|,
  <5,25>:|uuid://16bbbbb0-9f3a-4988-ac2d-52d6c9afb42e|,
  <4,16>:|uuid://ce7bd671-f19f-4901-9e0c-aa6ce731edd4|,
  <1,1>:|uuid://3f6f1ed3-88d7-41f7-8f8e-7f72a15f1bf0|,
  <10,100>:|uuid://2f27bf01-69b9-4219-9495-ac2870975235|,
  <3,9>:|uuid://50feb1c3-c98d-4b3f-a513-01d56979e33d|
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

