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
loc: |uuid://6f96d8ab-0884-4c09-bc3b-67bf6e1b0ad7|
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
  <1,1,|uuid://8cda9ff0-bb8e-4bb7-a3dc-93a43d9d5a21|>,
  <4,16,|uuid://409f61dd-50ad-4b79-983a-c38ef538622e|>,
  <2,4,|uuid://8bb3c859-21ad-4390-a78f-dca315ae9c6a|>,
  <10,100,|uuid://47f407c0-96be-4433-bdba-b26a132ab031|>,
  <3,9,|uuid://d9356b75-a726-4bd4-a36c-178cab0c28dd|>,
  <5,25,|uuid://1635bf6a-1a80-42e5-bc2d-942c1d7fd26e|>,
  <7,49,|uuid://beef210b-3d20-47f7-bee8-344e31808559|>,
  <9,81,|uuid://4f0e0cfe-f642-4b19-84c9-a8b35191e1ba|>,
  <8,64,|uuid://038fcffe-ddf7-410d-bd69-eb404c5d3f40|>,
  <6,36,|uuid://06fec74d-9889-47cc-a66c-3aab927afb84|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://34f4222f-2819-4283-ad32-9a8afdc1a4c7|,
  <2,4>:|uuid://a8861dc6-ac6d-4beb-8d06-f3ba0add98a0|,
  <7,49>:|uuid://1e573e37-ada7-4f81-9d8f-d9c1636da8e3|,
  <9,81>:|uuid://ee182450-b49a-4f4e-8fe9-6237ab778b36|,
  <8,64>:|uuid://9928f697-730f-42cb-a1eb-471178e61c55|,
  <5,25>:|uuid://3a21fc00-5997-4f37-b04e-0b0bc40e7d97|,
  <4,16>:|uuid://3637f4ff-0e80-4fd0-879c-043b3e89694a|,
  <1,1>:|uuid://1603c0b7-202f-4a2b-b9a1-3a081957bccb|,
  <10,100>:|uuid://3808cbef-4d3b-465f-96a5-c42fdde9f73b|,
  <3,9>:|uuid://171e97aa-cd7b-4f26-8b57-95ec62397bb2|
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

