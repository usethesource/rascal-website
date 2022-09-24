---
title: "module Map"
---

#### Usage

`import Map;`

#### Synopsis

Library functions for maps.

#### Description

For operators on maps see [Map](../Rascal/Expressions/Values/Map/) in the Rascal Language Reference.

The following functions are defined for maps:
* [delete](../Library/Map.md#Map-delete)
* [domain](../Library/Map.md#Map-domain)
* [domainR](../Library/Map.md#Map-domainR)
* [domainX](../Library/Map.md#Map-domainX)
* [getOneFrom](../Library/Map.md#Map-getOneFrom)
* [invert](../Library/Map.md#Map-invert)
* [invertUnique](../Library/Map.md#Map-invertUnique)
* [isEmpty](../Library/Map.md#Map-isEmpty)
* [itoString](../Library/Map.md#Map-itoString)
* [mapper](../Library/Map.md#Map-mapper)
* [range](../Library/Map.md#Map-range)
* [rangeR](../Library/Map.md#Map-rangeR)
* [rangeX](../Library/Map.md#Map-rangeX)
* [size](../Library/Map.md#Map-size)
* [toList](../Library/Map.md#Map-toList)
* [toRel](../Library/Map.md#Map-toRel)
* [toString](../Library/Map.md#Map-toString)

## function delete {#Map-delete}

* ``map[&K,&V] delete(map[&K,&V] m, &K k)``

#### Synopsis

Delete a key from a map.

#### Description

Returns the map `m` minus the key `k`.

#### Examples

```rascal-shell 
rascal>import Map;
ok
rascal>delete(("apple":1,"pear":2), "apple");
map[str, int]: ("pear":2)
```

## function domain {#Map-domain}

* ``set[&K] domain(map[&K, &V] M)``

#### Synopsis

Determine the domain (set of keys) of a map.

#### Description

Returns the domain (set of keys) of map `M`.

#### Examples

```rascal-shell 
rascal>import Map;
ok
rascal>domain(("apple": 1, "pear": 2));
set[str]: {"pear","apple"}
```

## function domainR {#Map-domainR}

* ``map[&K, &V] domainR(map[&K, &V] M, set[&K] S)``

#### Synopsis

Map restricted to certain keys.

#### Description

Return the map `M` restricted to pairs with key in `S`.

#### Examples

```rascal-shell 
rascal>import Map;
ok
rascal>domainR(("apple": 1, "pear": 2, "orange": 3), {"apple", "pear"});
map[str, int]: ("pear":2,"apple":1)
```

## function domainX {#Map-domainX}

* ``map[&K, &V] domainX(map[&K, &V] M, set[&K] S)``

#### Synopsis

Map with certain keys excluded.

#### Description

Return the map `M` restricted to pairs with key not in `S`.

#### Examples

```rascal-shell 
rascal>import Map;
ok
rascal>domainX(("apple": 1, "pear": 2, "orange": 3), {"apple", "pear"});
map[str, int]: ("orange":3)
```

## function getOneFrom {#Map-getOneFrom}

* ``&K getOneFrom(map[&K, &V] M)``

#### Synopsis

Get a n arbitrary key from a map.

#### Description

Returns an arbitrary key of map `M`.

#### Examples

```rascal-shell 
rascal>import Map;
ok
rascal>getOneFrom(("apple": 1, "pear": 2, "pineapple": 3));
<<<<<<< HEAD
str: "pineapple"
rascal>getOneFrom(("apple": 1, "pear": 2, "pineapple": 3));
str: "pear"
rascal>getOneFrom(("apple": 1, "pear": 2, "pineapple": 3));
str: "pineapple"
=======
str: "apple"
rascal>getOneFrom(("apple": 1, "pear": 2, "pineapple": 3));
str: "pear"
rascal>getOneFrom(("apple": 1, "pear": 2, "pineapple": 3));
str: "pear"
>>>>>>> 2a7f585b (all links end with a slash now..)
```

## function invert {#Map-invert}

* ``map[&V, set[&K]] invert(map[&K, &V] M)``

#### Synopsis

Invert the (key,value) pairs in a map.

#### Description

Returns inverted map in which each value in the old map `M` is associated with a set of key values from the old map.
Also see [invert unique](../Library/Map.md#Map-invertUnique).

#### Examples

```rascal-shell 
rascal>import Map;
ok
rascal>invert(("apple": 1, "pear": 2, "orange": 1));
map[int, set[str]]: (
  1:{"orange","apple"},
  2:{"pear"}
)
```

## function invertUnique {#Map-invertUnique}

* ``map[&V, &K] invertUnique(map[&K, &V] M)``

#### Synopsis

Invert the (key,value) pairs in a map.

#### Description

Returns a map with key and value inverted; the result should be a map.
If the initial map contains duplicate values,
the `MultipleKey` exception is raised since
an attempt is made to create a map where more than one 
value would be associated with the same key.

Also see [invert](../Library/Map.md#Map-invert) and [Exception](../Library/Exception.md).

#### Examples

```rascal-shell ,error
rascal>import Map;
ok
rascal>invertUnique(("apple": 1, "pear": 2, "orange": 3));
map[int, str]: (1:"apple",3:"orange",2:"pear")
```
Here is an examples that generates an exception:

```rascal-shell ,continue,error
rascal>invertUnique(("apple": 1, "pear": 2, "orange": 1));
|std:///Map.rsc|(2854,732,<144,0>,<171,54>): MultipleKey(1,"apple","orange")
	at *** somewhere ***(|std:///Map.rsc|(2854,732,<144,0>,<171,54>))
	at invertUnique(|prompt:///|(47,1,<1,47>,<1,48>))
ok
```

## function isEmpty {#Map-isEmpty}

* ``bool isEmpty(map[&K, &V] M)``

#### Synopsis

Test whether a map is empty.

#### Description

Returns `true` if map `M` is empty, and `false` otherwise.

#### Examples

```rascal-shell 
rascal>import Map;
ok
rascal>isEmpty(());
bool: true
rascal>isEmpty(("apple": 1, "pear": 2, "orange": 3));
bool: false
```

## function mapper {#Map-mapper}

* ``map[&K, &V] mapper(map[&K, &V] M, &L (&K) F, &W (&V) G)``

#### Synopsis

Apply a function to all (key, value) pairs in a map.

#### Description

Apply the functions `F` and `G` to each key/value pair in a map and return the transformed map.

#### Examples

```rascal-shell 
rascal>import Map;
ok
rascal>str prefix(str s) { return "X" + s; }
str (str): function(|prompt:///|(0,37,<1,0>,<1,37>))
rascal>int incr(int x) { return x + 1; }
int (int): function(|prompt:///|(0,33,<1,0>,<1,33>))
rascal>mapper(("apple": 1, "pear": 2, "orange": 3), prefix, incr);
map[str, int]: ("Xapple":2,"Xorange":4,"Xpear":3)
```

## function range {#Map-range}

* ``set[&V] range(map[&K, &V] M)``

#### Synopsis

The range (set of values that correspond to its keys) of a map.

#### Description

Returns the range (set of values) of map `M`.

#### Examples

```rascal-shell 
rascal>import Map;
ok
rascal>range(("apple": 1, "pear": 2));
set[int]: {1,2}
```

## function rangeR {#Map-rangeR}

* ``map[&K, &V] rangeR(map[&K, &V] M, set[&V] S)``

#### Synopsis

Map restricted to certain values in (key,values) pairs.

#### Description

Returns the map restricted to pairs with values in `S`.

#### Examples

```rascal-shell 
rascal>import Map;
ok
rascal>rangeR(("apple": 1, "pear": 2, "orange": 3), {2, 3});
map[str, int]: ("pear":2,"orange":3)
```

## function rangeX {#Map-rangeX}

* ``map[&K, &V] rangeX(map[&K, &V] M, set[&V] S)``

#### Synopsis

Map with certain values in (key,value) pairs excluded.

#### Description

Returns the map restricted to pairs with values not in `S`.

#### Examples

```rascal-shell 
rascal>import Map;
ok
rascal>rangeX(("apple": 1, "pear": 2, "orange": 3), {2, 3});
map[str, int]: ("apple":1)
```

## function size {#Map-size}

* ``int size(map[&K, &V] M)``

#### Synopsis

Number of (key, value) pairs in a map.

#### Description

Returns the number of pairs in map `M`.

#### Examples

```rascal-shell 
rascal>import Map;
ok
rascal>size(("apple": 1, "pear": 2, "orange": 3));
int: 3
```

## function toList {#Map-toList}

* ``list[tuple[&K, &V]] toList(map[&K, &V] M)``

#### Synopsis

Convert a map to a list of tuples.

#### Examples

```rascal-shell 
rascal>import Map;
ok
rascal>toList(("apple": 1, "pear": 2, "orange": 3));
lrel[str,int]: [
  <"apple",1>,
  <"orange",3>,
  <"pear",2>
]
```

## function toRel {#Map-toRel}

* ``rel[&K,&V] toRel(map[&K, set[&V]] M)``
* ``rel[&K,&V] toRel(map[&K, list[&V]] M)``
* ``default java rel[&K, &V] toRel(map[&K, &V] M)``

#### Synopsis

Convert a map to a relation.

#### Examples

```rascal-shell 
rascal>import Map;
ok
rascal>toRel(("apple": 1, "pear": 2, "orange": 3));
rel[str,int]: {
  <"pear",2>,
  <"orange",3>,
  <"apple",1>
}
```

## function toString {#Map-toString}

* ``str toString(map[&K, &V] M)``

#### Synopsis

Convert a map to a string.

#### Examples

```rascal-shell 
rascal>import Map;
ok
rascal>toString(("apple": 1, "pear": 2, "orange": 3));
str: "(\"pear\":2,\"orange\":3,\"apple\":1)"
```

## function itoString {#Map-itoString}

* ``str itoString(map[&K, &V] M)``

#### Synopsis

Convert a map to a indented string.

#### Examples

```rascal-shell 
rascal>import Map;
ok
rascal>itoString(("apple": 1, "pear": 2, "orange": 3));
str: "(\"pear\":2,\"orange\":3,\"apple\":1)"
```

