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
loc: |uuid://0cb76ddf-e88a-41e5-a25e-0b5b29f564af|
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
  <6,36,|uuid://1f3f7fd8-becb-4650-a2ae-00ef38e409a4|>,
  <5,25,|uuid://a5e84f1b-e7f8-4b27-be4d-68e098be08f5|>,
  <3,9,|uuid://f6c30c58-49f1-4898-b05f-fa9e7fe91aa5|>,
  <7,49,|uuid://1a509251-ac9d-44ad-b392-6503f2bdce18|>,
  <8,64,|uuid://43cc11a3-2c5a-4810-89ec-d8c5ee5102d8|>,
  <4,16,|uuid://fb38731d-c175-493a-b6e5-6cb2c10c67e7|>,
  <1,1,|uuid://6d4a4a0c-69c9-4ee4-8f7e-361fe466417e|>,
  <2,4,|uuid://127d0ba3-7950-4c74-92c0-137450118883|>,
  <9,81,|uuid://393eb8ad-821a-4242-8b7f-a102b670fd55|>,
  <10,100,|uuid://f69b46a0-b3c8-4f2f-8997-7bd8807d5a5a|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://d5756949-9e67-435d-9eb9-274a62e77bba|,
  <2,4>:|uuid://95d3505c-39a4-4206-89df-2b7bfec1ef3a|,
  <7,49>:|uuid://f02d5d89-babe-4567-a817-2c0747a05392|,
  <9,81>:|uuid://70e114db-081f-4807-bd79-79f5d1b5a907|,
  <8,64>:|uuid://4c96f5db-b747-4afe-abe3-efe63d58cc7a|,
  <5,25>:|uuid://29aa7722-7fb2-4ab8-9059-0ff81cd153e1|,
  <4,16>:|uuid://2c4aab76-b434-46c6-b008-dcb9c5fdcfd2|,
  <1,1>:|uuid://b95d9a71-c651-4cc3-92a4-8d4a43855c0b|,
  <10,100>:|uuid://28e9d321-1d1b-44ee-bd1d-87e4972a1d45|,
  <3,9>:|uuid://2c436915-a0e9-441d-b772-56241d745901|
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

