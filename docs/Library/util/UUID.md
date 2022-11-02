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
loc: |uuid://71230549-7f57-4690-8a21-1be109395bfe|
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
  <6,36,|uuid://60c7fb11-4f2a-4783-8513-146826b5f1e0|>,
  <1,1,|uuid://a0e8c9c3-6756-4058-97f6-a4f6e57dcbf4|>,
  <5,25,|uuid://1b2816d1-d6cd-40e1-bd93-07efb09ad4ab|>,
  <7,49,|uuid://02e0fca4-60eb-4361-a220-aa393d13002d|>,
  <3,9,|uuid://f3f0f5f1-581c-455a-8aba-c1b03e61cb00|>,
  <9,81,|uuid://1dccc8f4-29ba-4109-a945-da08c056591d|>,
  <8,64,|uuid://b077e21a-8a99-4be6-b1a0-f2efd25577b8|>,
  <4,16,|uuid://1b587985-a370-4fcf-b8a8-abdc20295ed1|>,
  <2,4,|uuid://aef3f12d-eec4-41ad-af8f-7e2f45be64b5|>,
  <10,100,|uuid://f79ebd90-274a-44e8-a7a0-076bf48782fd|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://ad159b51-8b89-4832-a464-76c65aad4099|,
  <2,4>:|uuid://5a5e370b-239e-400c-b9d3-b616e4e095ad|,
  <7,49>:|uuid://77fccda0-ef09-469d-a753-36ab074f5a71|,
  <9,81>:|uuid://179f7115-4bf2-48dc-a91b-70142419bb3f|,
  <8,64>:|uuid://b2f1e8ee-b27b-4a3d-890e-38e0eda7194c|,
  <5,25>:|uuid://5317a699-59b6-41f2-8c32-2f21f540bd3f|,
  <4,16>:|uuid://87fb119d-a259-41d3-99dc-dabc54783f6f|,
  <1,1>:|uuid://c81fa666-7952-4b2e-a8fd-9b88e18e2bc9|,
  <10,100>:|uuid://eb921e2b-b13b-4b2e-8676-1595ab416460|,
  <3,9>:|uuid://f3cb5cb6-9e74-4c16-a0e5-5a6961bb566a|
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

