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
loc: |uuid://436b4946-8161-43c7-ba0a-81c0da82481f|
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
  <4,16,|uuid://af4dd115-f93f-4bf0-be25-212ba7c1b1bd|>,
  <6,36,|uuid://134aa65c-aee9-42cc-98ce-01795e216b9d|>,
  <2,4,|uuid://084fd49c-9249-4934-952f-b3bad39d272a|>,
  <8,64,|uuid://d01de447-8805-4998-bb48-7e1f0011194e|>,
  <1,1,|uuid://ebfcaf40-cf46-4a2b-99a4-b7df6a218c21|>,
  <5,25,|uuid://cd93a4cb-9be7-4dd0-bbfb-aae86a5c431b|>,
  <7,49,|uuid://4d2e3f42-901f-4cf1-93b0-933dd2c7efdf|>,
  <3,9,|uuid://683a2d63-2007-4f1b-a7d6-46c7a2d9bdc7|>,
  <9,81,|uuid://8c56422c-382a-4acf-9874-34fe6c2916fe|>,
  <10,100,|uuid://d58a5b63-b839-463c-9201-ddee06075ccc|>
}
rascal>map[tuple[int i, int j] t, loc id] myUniqueMap = (<i,j>:uuid() | <i,j> <- myData );
map[tuple[int i,int j] t, loc id]: (
  <6,36>:|uuid://ecdf6b06-bcaf-4dda-93bb-79021823d86a|,
  <2,4>:|uuid://e9043ba1-49bd-4936-9e55-ef8338fe9299|,
  <7,49>:|uuid://61bcefa8-5162-4042-9510-fc0e16d7f245|,
  <9,81>:|uuid://389a5eb4-397c-41d5-9078-b45bf38bf509|,
  <8,64>:|uuid://866d2479-fe43-4635-b419-0fd650ccd2c0|,
  <5,25>:|uuid://df72e035-eaf4-43d5-8925-9f2d8d9f11a3|,
  <4,16>:|uuid://b6494fd8-d688-4cd9-8550-d6886be826e4|,
  <1,1>:|uuid://a67f5136-8df9-460c-a235-87281c516826|,
  <10,100>:|uuid://d6b39eec-b751-4b85-b2c3-0ed271189201|,
  <3,9>:|uuid://be9da460-6cf4-4780-8281-4168a7704937|
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

