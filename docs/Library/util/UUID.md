---
title: "util::UUID"
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
loc: |uuid://1cb66cf2-e97a-41ed-b055-693334c8354e|
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
  <5,25,|uuid://e24a537c-4052-43fc-af94-29695d5236e1|>,
  <8,64,|uuid://8b9f7071-284a-4a14-96f2-40f63d49c4b2|>,
  <7,49,|uuid://2dddcd18-ddf4-45e2-b471-3d3d733dd118|>,
  <10,100,|uuid://cedf3d12-af6e-4191-9523-2f23afbfac02|>,
  <4,16,|uuid://b55e0112-772c-4c66-ac88-88a34b561cd3|>,
  <1,1,|uuid://c57f120d-e5a5-4663-9e2e-0236f9b0a069|>,
  <3,9,|uuid://b4e94f0e-cbf5-4929-83f9-c44208643be0|>,
  <6,36,|uuid://243e500d-f5fb-4da8-87e4-09363bcbc9ce|>,
  <9,81,|uuid://10d34cd3-dc28-4bd7-a713-700789ef3970|>,
  <2,4,|uuid://66a24b32-7fd7-47ae-aac2-63b106fbe9e5|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://d53cdd2b-0541-4db6-899c-70a2a7cf06b0|,
  <2,4>:|uuid://9b6b255e-6ccb-4aa7-b0fd-9ff68f8d62ed|,
  <7,49>:|uuid://dd41539f-82eb-4f16-a22e-491d0910181c|,
  <9,81>:|uuid://aed6fdb9-36cc-4582-9d4f-c05f5d4f01c6|,
  <8,64>:|uuid://6ec03bf7-efd1-44af-9b76-88677f77bc7f|,
  <5,25>:|uuid://55d5bd02-265a-4eb7-9ec1-40f4163ed5bd|,
  <4,16>:|uuid://46608c8c-38dc-49cc-860e-1a1d223ae5d7|,
  <1,1>:|uuid://4f9e19c4-a7f0-49c0-87d9-2825256a9ee8|,
  <10,100>:|uuid://c8bc8117-c216-4ce4-a2ea-bfade42be23b|,
  <3,9>:|uuid://3dd2d135-5b01-4199-9bd7-34310df7fefe|
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

