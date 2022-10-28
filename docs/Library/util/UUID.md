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
loc: |uuid://61505292-1ad8-4d28-99a7-0fc7d281f072|
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
  <2,4,|uuid://a14dccbe-c70d-4540-baa6-63ed9fbfc437|>,
  <1,1,|uuid://9c52ebb5-c8a3-4770-8b57-b88b8331a9a0|>,
  <3,9,|uuid://5baf87a7-60ff-4a5b-91f3-985093a44244|>,
  <7,49,|uuid://f0589f57-131a-46e7-967e-e58ce940148e|>,
  <5,25,|uuid://09ce1350-d549-4a9d-8369-fa11b339d8d0|>,
  <10,100,|uuid://84383d5f-c425-4507-885e-d8d1f96a308c|>,
  <4,16,|uuid://393cc8d3-03ec-409d-8dd7-3306defae2db|>,
  <9,81,|uuid://c69b1dfd-4b4f-4837-89c1-34a9123230d9|>,
  <6,36,|uuid://5f3cac6a-7799-4cd0-b19a-1e287fb2d427|>,
  <8,64,|uuid://280f217e-0650-4013-8b8e-0f7183d4d72d|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://82d891dd-ff2f-4621-ad45-68ab1d4e7a24|,
  <2,4>:|uuid://46af22c0-5030-4a38-9833-d5188fbe7deb|,
  <7,49>:|uuid://9ee21166-688f-4139-98b8-051de9829e53|,
  <9,81>:|uuid://f592a896-86ee-4637-8457-b1c596386fd8|,
  <8,64>:|uuid://8ec1ba0d-48d4-485b-9b49-c79b7b7fc893|,
  <5,25>:|uuid://f2f63cea-7057-4dfc-9f84-aa8d39d49904|,
  <4,16>:|uuid://c253e4a3-53e2-4e40-8597-aa62f71ec9cb|,
  <1,1>:|uuid://b8e0fa51-c796-4561-908b-d30502c9e0a2|,
  <10,100>:|uuid://9027616c-1bfd-435c-92a1-c924248ae56e|,
  <3,9>:|uuid://50568e59-a2bf-425b-af52-49ac9a3fbf77|
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

