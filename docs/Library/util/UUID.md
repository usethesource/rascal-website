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
loc: |uuid://d065a67b-a0d8-4e13-97ad-a5cf31a198a0|
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
  <7,49,|uuid://76a6fd7e-f84a-43fb-9508-9240a8e2819c|>,
  <4,16,|uuid://378c2637-23bf-4dd0-8896-d079c6377138|>,
  <10,100,|uuid://9752a733-079d-4299-a880-24883660f8db|>,
  <2,4,|uuid://c5ec519e-da1b-44dc-b294-ca88ab520753|>,
  <9,81,|uuid://62bf5ce4-3200-4dc4-92d0-adbe38153478|>,
  <8,64,|uuid://8c812022-4123-40db-b810-9fad535cc277|>,
  <3,9,|uuid://5c6f8734-5069-4f82-a582-e037dfbb987a|>,
  <5,25,|uuid://d3c7afb0-8e63-4b6a-adb6-4b1fef5a8cc7|>,
  <1,1,|uuid://e2791490-b481-46e8-9caa-938b777fcd73|>,
  <6,36,|uuid://73e962eb-9436-4149-8f0b-fff446590448|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://4c38996a-05e9-4ea7-ab3e-2b1f65fe6a6f|,
  <2,4>:|uuid://43856302-831b-4421-8216-8eecffd3e2c2|,
  <7,49>:|uuid://b5b8bfd5-28ae-4414-8dc4-5b88ee390d62|,
  <9,81>:|uuid://fea1ed61-bb5a-4657-9b9e-05ff47fe21ec|,
  <8,64>:|uuid://30c1af4a-7e38-45db-8271-ff6039551505|,
  <5,25>:|uuid://b8c379e4-2980-4330-80d5-7c89d282d12e|,
  <4,16>:|uuid://8bdb50f6-10c2-43d4-8952-0c0315cf2a16|,
  <1,1>:|uuid://ed735838-1892-4126-b2e1-b17235ca5843|,
  <10,100>:|uuid://0c165800-16e4-45aa-87cd-6c3038e26c0c|,
  <3,9>:|uuid://bad29cf5-5300-4b63-a215-a320f832c813|
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

