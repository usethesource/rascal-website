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
loc: |uuid://eb878f47-9d3c-4ecd-862d-a54b3bd7e7e2|
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
  <3,9,|uuid://74f80956-ca94-4712-9653-8af5a441712d|>,
  <7,49,|uuid://8c7478c4-8d91-4ce7-bb13-fd63d21c4647|>,
  <9,81,|uuid://ebfcd561-b57d-4cf9-903e-8a9583eba471|>,
  <10,100,|uuid://0743e9d1-858d-4f1f-883b-36bf6bce222a|>,
  <4,16,|uuid://b940c9b6-3255-4bf3-97f8-00fdf2af55d4|>,
  <6,36,|uuid://a5e546e9-5bbb-4c0b-9aae-1f3eb1a10093|>,
  <1,1,|uuid://ec23718d-6e44-4981-9286-8ddf3bebcf0d|>,
  <2,4,|uuid://602e4c88-1ca7-494c-a6c2-995eed4d5fe5|>,
  <8,64,|uuid://34879dcf-7356-4280-880b-1ed12d2bb0ee|>,
  <5,25,|uuid://3507d7ab-3013-429b-8065-e23935b7fd9e|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://b99c77d5-9fb8-4057-8f9f-4b99cb9e2091|,
  <2,4>:|uuid://ecbb5e98-5d9d-433f-a679-9aedd20a8e5d|,
  <7,49>:|uuid://0b96efbc-8bab-4d78-8d39-0401d4b1626a|,
  <9,81>:|uuid://a82ace98-c4a3-4143-8de8-0a7ca6f3fa0d|,
  <8,64>:|uuid://f39149b8-1e72-4e19-9468-74b46870e07a|,
  <5,25>:|uuid://883351be-19fa-47f6-a800-b9de850916d3|,
  <4,16>:|uuid://98fa34ae-5c87-4756-a280-6db4791c9042|,
  <1,1>:|uuid://c6201fbc-37ac-4d5c-808d-ba16c4063584|,
  <10,100>:|uuid://9af7543a-309a-482d-b7c9-7676d03d2baa|,
  <3,9>:|uuid://e672815d-58cf-4319-a72c-448568f8b7ec|
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

