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
loc: |uuid://a5721be9-a557-42f1-a1fd-6e2448c20fa1|
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
  <2,4,|uuid://279a648d-d448-492d-b518-2668e36d8895|>,
  <4,16,|uuid://4cfd06f8-96c0-4417-a2f8-23f5ec69859d|>,
  <9,81,|uuid://a1d36637-8df6-4f04-9b09-d99066f2d498|>,
  <10,100,|uuid://2c0fc509-afc4-4abf-82b4-4dd169913658|>,
  <3,9,|uuid://24fd028e-7277-488b-ab94-07df49307517|>,
  <1,1,|uuid://2063cd62-1a07-442c-bffb-50fe99a69ee5|>,
  <8,64,|uuid://dc297613-c4cc-4bdd-822d-6fef967c41f1|>,
  <5,25,|uuid://807bd530-416d-4be9-b9ae-6bbff9fb2c9d|>,
  <6,36,|uuid://5ccf3b80-8726-43b0-af44-1e8c10ba5ef7|>,
  <7,49,|uuid://bdc07045-7fcc-4fa8-8554-de36fef49021|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://3d328dd3-97f5-45f8-acc2-3eb9f29ff8fc|,
  <2,4>:|uuid://0afaae09-48d5-4674-9534-60fe8e478b42|,
  <7,49>:|uuid://f32b0f42-0677-4295-8003-f0425ead0024|,
  <9,81>:|uuid://ecb877b9-391d-4ba8-828f-5c3d996d4e83|,
  <8,64>:|uuid://806389e9-7ce3-4f10-8256-5ab3d9d6ee3d|,
  <5,25>:|uuid://852ab858-0330-4341-8c4d-4cf4725020ec|,
  <4,16>:|uuid://d8bb97cf-be9c-4c6d-a04a-c4a110e8993d|,
  <1,1>:|uuid://101b39bf-57b0-4072-8a43-674f1cae7bd9|,
  <10,100>:|uuid://684821a4-c35b-4403-87f3-82aa92accaa4|,
  <3,9>:|uuid://7ec5a608-19a4-4d48-a74d-5a59e0e95cd8|
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

