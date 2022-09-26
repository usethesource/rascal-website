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
loc: |uuid://571a2f3e-74c0-4193-9443-48eaa061ae41|
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
  <3,9,|uuid://8833d2a2-66b3-4eef-a98c-1c1c3386178d|>,
  <6,36,|uuid://18ba69f7-5671-4510-91e5-e431bb8d71a9|>,
  <9,81,|uuid://180389cc-4a6a-4ea2-8da9-5d960e7f9ddb|>,
  <1,1,|uuid://a88a5b92-b09d-4f34-9782-ff7e9fe301bc|>,
  <10,100,|uuid://de335bbe-08bc-41bf-b4e4-8a841720d30e|>,
  <2,4,|uuid://c4a8e6ee-f192-47f6-a2af-aed7bdb51fac|>,
  <7,49,|uuid://b5f67b42-aad1-483b-8dbe-d85c50e16a2e|>,
  <4,16,|uuid://c4aafa1f-a18b-4e58-8ac5-05c866f24610|>,
  <8,64,|uuid://2a990fa4-0edd-41ce-a697-69322fcc2aae|>,
  <5,25,|uuid://0ae0ad5f-77aa-4012-8ffa-39f83241f341|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://5303902f-f98a-4db8-9306-1bd4ac1da80f|,
  <2,4>:|uuid://1f46ce63-21d9-4f61-bfbd-9688c6290071|,
  <7,49>:|uuid://71b91f67-30c7-471a-88f9-049ecd62b095|,
  <9,81>:|uuid://6413668b-aff1-47b0-98eb-ed69779b9145|,
  <8,64>:|uuid://baa9b323-f4f7-474d-9385-c838aaafdc8c|,
  <5,25>:|uuid://d3903bc8-0441-4f1c-98aa-27a3c06dc554|,
  <4,16>:|uuid://2007953d-1bfb-47ed-9d8c-d9a6d856d9b5|,
  <1,1>:|uuid://28e96e08-f647-4651-b61b-3da0688f0ae0|,
  <10,100>:|uuid://28d92105-4bde-463e-8c5f-9163eb113d4e|,
  <3,9>:|uuid://96827d00-9b59-40b4-841e-5075e7ade443|
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

