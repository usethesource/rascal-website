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
loc: |uuid://51dec1ac-01fd-40ae-bdb9-c7075cca9a08|
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
  <7,49,|uuid://3cfbf66c-ea76-468f-97d6-e073c0c389cd|>,
  <8,64,|uuid://0258467b-933e-45f9-9656-d0027af90b3e|>,
  <5,25,|uuid://f63d32d0-5ca6-4cb6-a768-ade02a0df197|>,
  <1,1,|uuid://a048bba3-2aa0-49a1-95e3-f7460eb6a096|>,
  <10,100,|uuid://14a5afea-0979-4ebc-8e32-129ef3af7940|>,
  <2,4,|uuid://76e8ae7b-1da5-4f21-9bf1-056beadca0be|>,
  <6,36,|uuid://2a9517a7-357f-469d-a782-051594f19835|>,
  <4,16,|uuid://3abd8c7c-d571-4645-9c01-154e772ec513|>,
  <9,81,|uuid://830aab92-8c2b-46a7-8e96-c4bd450de8ac|>,
  <3,9,|uuid://b557b3d3-fe3b-4c4b-bec9-b50dedb2edba|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://20bc54e4-f5f3-498d-a29a-95578748d557|,
  <2,4>:|uuid://72f18fdb-d47f-421b-8504-25db49ea2601|,
  <7,49>:|uuid://a4572992-8247-4ffb-99ae-5d060599e46d|,
  <9,81>:|uuid://b460cb20-0d5f-40de-b97a-cb3159ce34f4|,
  <8,64>:|uuid://719778d8-047a-416e-80dd-be7fac943a5b|,
  <5,25>:|uuid://2c917f0a-bc82-4a10-9d4b-87a39c7f94b9|,
  <4,16>:|uuid://3bb6e903-060d-4e70-9d2a-8677a13aec4a|,
  <1,1>:|uuid://ef676b18-ad09-4b0d-98cf-192d41abd736|,
  <10,100>:|uuid://953abdcd-86e9-4725-a20f-3fe55935c54b|,
  <3,9>:|uuid://eb1c8a60-40d5-4963-a339-41a845677c68|
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

