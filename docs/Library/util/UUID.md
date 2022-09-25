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

```rascal-shell ,continue
rascal>uuid()
loc: |uuid://c3b71446-800d-46f7-a495-0c2da9ce6fd5|
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
  <10,100,|uuid://0d6b957c-fbb7-453b-995f-2353fdd3135b|>,
  <3,9,|uuid://3d8c5516-e499-41cd-a887-d79be4741258|>,
  <6,36,|uuid://e147393b-d856-422a-946d-7fb380cafe64|>,
  <1,1,|uuid://c553e180-0a57-4576-8fda-c87fe3b14896|>,
  <4,16,|uuid://75e2417d-38ca-4bbd-9ac2-982abe49335d|>,
  <5,25,|uuid://095c5b2c-1210-47b3-a900-1a69aa410acf|>,
  <9,81,|uuid://96a12f50-69f5-4db5-ad42-2b5aa5e1f79e|>,
  <8,64,|uuid://3b0eb8b1-b6bb-4d77-8985-2098fc5faf96|>,
  <7,49,|uuid://ab6a59b6-9769-4c50-9cca-e21b5be3ea0e|>,
  <2,4,|uuid://5ce973ad-4684-4806-8594-049341b3b355|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://78f720f9-be11-4827-a5fa-c643507a1124|,
  <2,4>:|uuid://95eadbdc-5dfd-4efd-9017-e53515940556|,
  <7,49>:|uuid://58d846d0-6cf9-4f76-82cc-722ecd736754|,
  <9,81>:|uuid://535b8046-a4d9-430f-b83c-8c178de6a888|,
  <8,64>:|uuid://d3043880-8047-4efd-a803-ead9a30284df|,
  <5,25>:|uuid://d83676aa-93ad-4fa9-a2cc-f3ab57ddf88c|,
  <4,16>:|uuid://f5329626-fdde-4fae-a728-c81c6dae383b|,
  <1,1>:|uuid://54c63b4c-462a-4b18-96ba-d863e189e1b6|,
  <10,100>:|uuid://18edc47c-29c8-480c-9f42-ff48749c3ae4|,
  <3,9>:|uuid://04a1ff35-3643-4521-9dfd-e55194914ca9|
)
```
Note how uuid() should always generate a fresh value:

```rascal-shell ,continue
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

