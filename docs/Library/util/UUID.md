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

```rascal-shell
rascal>uuid()
loc: |uuid://d72d92b0-1a1b-41b4-87bc-2915cce5cce0|
```

Use it to relate identies to data objects, as in this example which adds a field to a relation:


```rascal-shell
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
  <1,1,|uuid://6e219a03-7f4d-4821-aed1-0c121d994f2a|>,
  <6,36,|uuid://01f9cb1c-6c7c-4d3a-b385-ff041f23614d|>,
  <3,9,|uuid://cd8b8b75-0080-4d49-902c-bdf037089694|>,
  <2,4,|uuid://d0ff224b-10fb-4cd4-950e-e9ae24ba2942|>,
  <4,16,|uuid://f3ef5e4c-2f5a-4166-8e54-a99ba28bceb2|>,
  <9,81,|uuid://c26cb018-42f4-478f-ba08-cee41ceb3309|>,
  <5,25,|uuid://39699cc1-2d9b-4706-8d37-779127c82fcf|>,
  <10,100,|uuid://b4e6f400-987b-4364-b555-6ab123cc0aca|>,
  <8,64,|uuid://42ee1abe-61f8-412e-b2f6-c037c2dfe6c5|>,
  <7,49,|uuid://8c455d9c-ac6a-43bb-a78c-4718f74cb70c|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://c0884fae-8c6b-495b-aedf-51d81a1ff2e3|,
  <2,4>:|uuid://19ff72d0-05f7-40bf-b758-c020e7f47b16|,
  <7,49>:|uuid://348556a0-1e8a-406d-8f2d-396d9b9ada29|,
  <9,81>:|uuid://4edf13b7-4623-41f8-91f2-45c79347b689|,
  <8,64>:|uuid://c6b15cb8-305f-4568-a922-b5c07617b908|,
  <5,25>:|uuid://636cb50a-a27f-4018-9acc-8ff712c544ff|,
  <4,16>:|uuid://f513f612-d204-4941-aae0-090db33e79e5|,
  <1,1>:|uuid://63a9ddc4-a8b4-49b3-90e2-3d66853f02c0|,
  <10,100>:|uuid://c19bad02-9bbe-4ee7-bd36-4031cc359944|,
  <3,9>:|uuid://114a72b5-5a33-4fe4-8167-53846517ae26|
)
```
Note how uuid() should always generate a fresh value:

```rascal-shell
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

