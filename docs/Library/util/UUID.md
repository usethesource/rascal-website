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
loc: |uuid://8874ed36-51ec-4bce-b5f6-c359df1a61c0|
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
  <3,9,|uuid://bbb1e70d-672c-400a-979f-072431ceba15|>,
  <10,100,|uuid://6a112887-e41f-4022-9796-105e9defcd24|>,
  <8,64,|uuid://19c4d88f-ac62-43e4-b180-60c9124c36c4|>,
  <4,16,|uuid://b798d0ea-2b61-478e-8267-ab115f2c5c72|>,
  <1,1,|uuid://fa55e293-04ce-4387-8392-31451ff6fdca|>,
  <7,49,|uuid://807f83b9-aaf7-45a2-8ebf-5099d65542f1|>,
  <5,25,|uuid://b98a9884-68fc-4d31-9ff9-9f3485b4578b|>,
  <9,81,|uuid://8d312b51-3d4d-4353-84d0-568b38d68526|>,
  <2,4,|uuid://f34215d1-6c68-4b60-bbf2-8ca12acdcde2|>,
  <6,36,|uuid://c1dde29d-0314-4a1e-9f5f-0c698a902009|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://c1555cba-0adc-482f-8536-964925faaf69|,
  <2,4>:|uuid://7191ce50-9406-4ece-80ac-e28b9df391a7|,
  <7,49>:|uuid://6b3fdf82-3dae-45a0-b384-7b32d98b0989|,
  <9,81>:|uuid://5b72e1d6-5eba-4869-bd71-f155eed9c769|,
  <8,64>:|uuid://95db8d62-c21f-42a8-9716-08c0113232d7|,
  <5,25>:|uuid://d399beac-a0f0-4b0c-84be-45873e593626|,
  <4,16>:|uuid://a2c7e1ed-918d-4392-9799-e1998bbe64fd|,
  <1,1>:|uuid://6b28d0b0-3217-481e-9e5b-441e47c9d70c|,
  <10,100>:|uuid://672a5d65-e2f5-4fe5-9b2f-7a84bb361399|,
  <3,9>:|uuid://5324c30a-a748-4930-b2e0-5357fd42820c|
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

