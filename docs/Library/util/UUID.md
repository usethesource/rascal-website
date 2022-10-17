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
loc: |uuid://92dc4126-9e23-452c-9b66-7b6774bfd73f|
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
  <8,64,|uuid://66421c14-9409-4612-b064-422915f5249d|>,
  <5,25,|uuid://3c76cbf2-82c3-4373-a3ca-a01e1e933843|>,
  <4,16,|uuid://ec919e95-dee8-4777-b586-19e2a288ab04|>,
  <3,9,|uuid://2e7eedcf-d13d-436d-ac12-c1f09aa2d9cd|>,
  <10,100,|uuid://5049ea53-a265-4589-8041-562c6dc77feb|>,
  <9,81,|uuid://4b1eb718-e16a-47b5-a151-3498537ad1a7|>,
  <6,36,|uuid://077de39c-3319-4c20-9904-a004441eb38e|>,
  <2,4,|uuid://d6d0451a-92ef-487a-99ca-6280db44508e|>,
  <7,49,|uuid://0b6f20e2-f356-4259-a722-4bfb6c04ffc5|>,
  <1,1,|uuid://51a2b7c7-a436-4d23-ac23-8c4fb0ee906d|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://ab66d646-2776-4016-a1b4-07a4a3af95c5|,
  <2,4>:|uuid://87b0f4a9-5778-42a9-b35b-1135169f8eaf|,
  <7,49>:|uuid://2a62d173-0b3c-4876-b843-3526659dde3d|,
  <9,81>:|uuid://1af0652b-0bff-4480-812b-f5f939629273|,
  <8,64>:|uuid://7a52751e-fddd-49c2-8a06-80deafa60a4e|,
  <5,25>:|uuid://cf66545c-4440-452d-a3b7-c0c678303369|,
  <4,16>:|uuid://c0be7a0f-7d60-4ee9-b78d-ebd7ff8c91b5|,
  <1,1>:|uuid://814ac003-e3c6-4b8d-b844-a6e685d86c0f|,
  <10,100>:|uuid://c9506eec-8597-45a3-b48c-7a7879a244ae|,
  <3,9>:|uuid://636f9b26-5829-42ae-8c48-c9913b61c75c|
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

