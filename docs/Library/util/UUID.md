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
loc: |uuid://8a26f2e1-b82e-4802-adfc-c8b30665d9b5|
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
  <5,25,|uuid://7c4cec51-f78c-4464-a42b-2e106f19c477|>,
  <9,81,|uuid://f5cbd526-0e39-496e-979d-27740e9eca21|>,
  <4,16,|uuid://3f0cb3c4-cb65-402a-945c-a4e92f2342d5|>,
  <10,100,|uuid://a238cf56-6c14-443e-8a64-a7557617fcb2|>,
  <3,9,|uuid://9a99978f-e3d8-4233-8dc8-21d654dc47fd|>,
  <7,49,|uuid://b73ef76b-c277-4cd8-a328-f3793c4b2fb6|>,
  <1,1,|uuid://9440a533-c892-419c-93f0-07249f450812|>,
  <2,4,|uuid://ce03f25d-e811-49ea-ad83-6cd7fc73a7ca|>,
  <6,36,|uuid://9ae1ab35-275b-4339-b158-c9659842fa84|>,
  <8,64,|uuid://66ac837b-0a58-405b-ab94-6693bff0fb1c|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://47f1286a-f6df-40b3-ad4d-f652114e7363|,
  <2,4>:|uuid://5cb08b0d-067b-4236-84f7-1215b5a37bc6|,
  <7,49>:|uuid://564aa0bc-82ab-421c-8b3b-335c31eaf9d3|,
  <9,81>:|uuid://d9fbb197-af1a-428e-a0cf-966114bfe3b6|,
  <8,64>:|uuid://3e37505c-b69d-4a43-9f2b-fc9138bbb19b|,
  <5,25>:|uuid://99876c7b-0c9c-4bd8-86a9-21acbd1a196f|,
  <4,16>:|uuid://5027cedd-8d5f-4075-a965-e2d49ba0c849|,
  <1,1>:|uuid://f05341cc-d902-463d-bff4-487cf3729bc0|,
  <10,100>:|uuid://388635f9-f487-42b4-b802-2c7bc0adf0a8|,
  <3,9>:|uuid://e6299f69-27c0-42fd-92dd-42696f76c7f0|
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

