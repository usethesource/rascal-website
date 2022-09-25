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
a [Location](../../Rascal/Expressions/Values/Location/index.md) (which is the preferred representation for encoding identities in Rascal)

#### Examples


```rascal-shell 
rascal>import util::UUID;
ok
```

The uuid() function generates a location with the authority showing the literal canonical UUID string

```rascal-shell ,continue
rascal>uuid()
loc: |uuid://1b4e203a-8fe2-4a22-9ecc-6aebfceffd96|
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
  <3,9,|uuid://1d113ff5-93a6-4c9e-9d72-876e4076e3c8|>,
  <10,100,|uuid://39564051-0c5a-44e0-b38b-925d494f75bf|>,
  <7,49,|uuid://05f566ac-8c56-456c-aa4e-7c9a43e3a9bb|>,
  <4,16,|uuid://323b68e3-45dd-489b-8a02-a3eddb39acdc|>,
  <1,1,|uuid://90d496d6-b946-4a56-91e7-ea67a6c92a8d|>,
  <5,25,|uuid://94804ba1-5791-42d5-8438-470aef9ba725|>,
  <8,64,|uuid://f6a49c2a-297e-4655-8857-91bd4f45fae5|>,
  <2,4,|uuid://3caad7f8-bf70-4c16-bdde-c16eb1438c01|>,
  <6,36,|uuid://b3919950-892d-46e4-9eb2-dd9ae81618fa|>,
  <9,81,|uuid://708b3f70-524e-4589-9678-c943c86eba45|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://d7b89fe2-304c-4ac0-bbcb-eecf246467e6|,
  <2,4>:|uuid://b627f9b5-b5aa-463a-b427-1045b3d8904d|,
  <7,49>:|uuid://f5c4db73-b1b4-4aa3-bb4d-53d15045edd9|,
  <9,81>:|uuid://54961659-67f7-4875-8e3e-aedb76092998|,
  <8,64>:|uuid://d8e4d6d3-0fc7-4822-89d0-8dfaf47eb287|,
  <5,25>:|uuid://08979368-1d01-4f3a-a7b8-e483a24fd580|,
  <4,16>:|uuid://6f6dcbac-7ed3-41e2-8875-22062aab740e|,
  <1,1>:|uuid://fe7a0c5c-ffd8-4421-86f4-3720498f7dcb|,
  <10,100>:|uuid://e4271507-72b2-4a83-96d6-d56268529f48|,
  <3,9>:|uuid://006957f4-f65d-4dca-9591-e78178eef695|
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

