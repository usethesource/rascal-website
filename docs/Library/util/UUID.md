---
title: "module util::UUID"
---

#### Usage

`import util::UUID;`


## function uuid {#util-UUID-uuid}

```rascal
loc uuid()

```


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
loc: |uuid://437d0596-6136-4a52-b7ce-1d3e3b762787|
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
  <7,49,|uuid://b8c43563-68ab-457b-9e11-faa7b067cf7c|>,
  <4,16,|uuid://1fc7699f-0841-4e35-9690-48552cc7be72|>,
  <1,1,|uuid://63c122ec-fb6e-4602-aa8a-b9bdc3c697e2|>,
  <8,64,|uuid://d6ee8239-7d0e-4831-b1bb-14f6ce60434f|>,
  <3,9,|uuid://7ceb76ea-01c7-49d0-bf38-0297fa6a85eb|>,
  <9,81,|uuid://66a90449-cb73-4758-b3f2-27d2b57a6bc4|>,
  <5,25,|uuid://e06435a7-d660-417a-ba7e-1c140c2d1130|>,
  <10,100,|uuid://2307e92b-7bb5-4078-bd86-dd0ed20eaf97|>,
  <2,4,|uuid://62de2b1e-246e-4624-839b-6e0d7c80bbce|>,
  <6,36,|uuid://4c94cef3-f4b9-490a-a984-abf9956f0d50|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://0056c80e-742d-4a7b-84ff-332db28b8f3f|,
  <2,4>:|uuid://5c7ebd2c-ea29-4ea5-b21d-6ee56ce0acdc|,
  <7,49>:|uuid://b8095c92-6a49-40b6-9d1a-6b85dd89fa11|,
  <9,81>:|uuid://19280971-071a-4207-98af-e8cd7a06823b|,
  <8,64>:|uuid://a63d2928-8d21-4659-a717-473246886bdf|,
  <5,25>:|uuid://8a973cea-513c-4f6e-80ea-b5d7c0b740d7|,
  <4,16>:|uuid://bc0ca101-5410-44d9-b2c2-29eb5fe29b37|,
  <1,1>:|uuid://fef61713-3141-409c-9400-f439ef5af2ab|,
  <10,100>:|uuid://6e5f2c84-5875-4f68-a369-d2f2baa003d3|,
  <3,9>:|uuid://84173573-36f4-4a46-94f6-d89ab22bcc0e|
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

```rascal
int uuidi()

```


#### Synopsis

see [uuid], this function does the same except return the UUID as an int.

#### Pitfalls

*  beware that this integer is almost guaranteed to use 128 bits, so communicating it outside of
Rascal should not be done via a Java 32-bit integer.

