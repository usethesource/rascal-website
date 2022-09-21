---
title: "Set"
---

#### Usage

`import Set;`


#### Synopsis

Library functions for sets.

#### Usage

#### Description

For operators on sets see [Set](/docs/Rascal/Expressions/Values/Set) in the Rascal Language Reference.

The following functions are defined for sets:
* [Library:function:Set::classify](/docs/Library/Set#Set-classify)
* [Library:function:Set::get first from](/docs/Library/Set#Set-getFirstFrom)
* [Library:function:Set::get one from](/docs/Library/Set#Set-getOneFrom)
* [Library:function:Set::group](/docs/Library/Set#Set-group)
* [Library:function:Set::index](/docs/Library/Set#Set-index)
* [Library:function:Set::is empty](/docs/Library/Set#Set-isEmpty)
* [Library:function:Set::ito string](/docs/Library/Set#Set-itoString)
* [Library:function:Set::jaccard](/docs/Library/Set#Set-jaccard)
* [Library:function:Set::mapper](/docs/Library/Set#Set-mapper)
* [Library:function:Set::max](/docs/Library/Set#Set-max)
* [Library:function:Set::min](/docs/Library/Set#Set-min)
* [Library:function:Set::power](/docs/Library/Set#Set-power)
* [Library:function:Set::power1](/docs/Library/Set#Set-power1)
* [Library:function:Set::reducer](/docs/Library/Set#Set-reducer)
* [Library:function:Set::size](/docs/Library/Set#Set-size)
* [Library:function:Set::sort](/docs/Library/Set#Set-sort)
* [Library:function:Set::sum](/docs/Library/Set#Set-sum)
* [Library:function:Set::take first from](/docs/Library/Set#Set-takeFirstFrom)
* [Library:function:Set::take one from](/docs/Library/Set#Set-takeOneFrom)
* [Library:function:Set::to list](/docs/Library/Set#Set-toList)
* [Library:function:Set::to map](/docs/Library/Set#Set-toMap)
* [Library:function:Set::to map unique](/docs/Library/Set#Set-toMapUnique)
* [Library:function:Set::to string](/docs/Library/Set#Set-toString)
* [Library:function:Set::top](/docs/Library/Set#Set-top)
* [Library:function:Set::union](/docs/Library/Set#Set-union)


## function classify {#Set-classify}

* ``map[&K,set[&V]] classify(set[&V] input, &K (&V) getClass)``


#### Synopsis

Classify elements in a set.

#### Examples

We classify animals by their number of legs.

```rascal-shell
rascal>import Set;
ok
```
Create a map from animals to number of legs.

```rascal-shell
rascal>legs = ("bird": 2, "dog": 4, "human": 2, "snake": 0, "spider": 8, "millepede": 1000, "crab": 8, "cat": 4);
map[str, int]: ("snake":0,"spider":8,"human":2,"crab":8,"cat":4,"bird":2,"dog":4,"millepede":1000)
```
Define function `nLegs` that returns the number of legs for each animal (or `0` when the animal is unknown):

```rascal-shell
rascal>int nLegs(str animal){
>>>>>>>    return legs[animal] ? 0;
>>>>>>>}
int (str): function(|prompt:///|(0,53,<1,0>,<3,1>))
```
Now classify a set of animals:

```rascal-shell
rascal>classify({"bird", "dog", "human", "spider", "millepede", "zebra", "crab", "cat"}, nLegs);
map[int, set[str]]: (
  8:{"spider","crab"},
  2:{"human","bird"},
  4:{"cat","dog"},
  1000:{"millepede"},
  0:{"zebra"}
)
```

## function group {#Set-group}

* ``set[set[&T]] group(set[&T] input, bool (&T a, &T b) similar)``


#### Synopsis

Group elements in a set given an equivalence function.

#### Examples

We classify animals by their number of legs.

```rascal-shell
rascal>import Set;
ok
```
Create a map from animals to number of legs.

```rascal-shell
rascal>legs = ("bird": 2, "dog": 4, "human": 2, "snake": 0, "spider": 8, "millepede": 1000, "crab": 8, "cat": 4);
map[str, int]: ("snake":0,"spider":8,"human":2,"crab":8,"cat":4,"bird":2,"dog":4,"millepede":1000)
```
Define function `nLegs` that returns the number of legs fro each animal (or `0` when the animal is unknown):

```rascal-shell
rascal>int nLegs(str animal){
>>>>>>>    return legs[animal] ? 0;
>>>>>>>}
int (str): function(|prompt:///|(0,53,<1,0>,<3,1>))
rascal>bool similar(str a, str b) = nLegs(a) == nLegs(b);
bool (str, str): function(|prompt:///|(0,50,<1,0>,<1,50>))
```
Now group a set of animals:

```rascal-shell
rascal>group({"bird", "dog", "human", "spider", "millepede", "zebra", "crab", "cat"}, similar);
set[set[str]]: {
  {"spider"},
  {"zebra"},
  {"human"},
  {"crab"},
  {"cat"},
  {"bird"},
  {"dog"},
  {"millepede"}
}
```
WARNING: check compiler.

## function index {#Set-index}

* ``map[&T,int] index(set[&T] s)``


#### Synopsis

Map set elements to a fixed index.

#### Examples


```rascal-shell
rascal>import Set;
ok
rascal>index({"elephant", "zebra", "snake"});
map[str, int]: ("snake":0,"zebra":1,"elephant":2)
```

## function isEmpty {#Set-isEmpty}

* ``bool isEmpty(set[&T] st)``


#### Synopsis

Test whether a set is empty.

#### Description

Yields `true` if `s` is empty, and `false` otherwise.

#### Examples


```rascal-shell
rascal>import Set;
ok
rascal>isEmpty({1, 2, 3});
bool: false
rascal>isEmpty({});
bool: true
```

## function mapper {#Set-mapper}

* ``set[&U] mapper(set[&T] st, &U (&T) fn)``


#### Synopsis

Apply a function to all set elements and return set of results.

#### Description

Return a set obtained by applying function `fn` to all elements of set `s`.

#### Examples


```rascal-shell
rascal>import Set;
ok
rascal>int incr(int x) { return x + 1; }
int (int): function(|prompt:///|(0,33,<1,0>,<1,33>))
rascal>mapper({1, 2, 3, 4}, incr);
set[int]: {5,3,2,4}
```

## function max {#Set-max}

* ``&T max(set[&T] st)``


#### Synopsis

Determine the largest element of a set.

#### Examples


```rascal-shell
rascal>import Set;
ok
rascal>max({1, 3, 5, 2, 4});
int: 5
rascal>max({"elephant", "zebra", "snake"});
str: "zebra"
```

## function min {#Set-min}

* ``&T min(set[&T] st)``


#### Synopsis

Determine the smallest element of a set.

#### Examples


```rascal-shell
rascal>import Set;
ok
rascal>min({1, 3, 5, 4, 2});
int: 1
```


#### Synopsis

Smallest element of a set.

#### Examples


```rascal-shell
rascal>import Set;
ok
rascal>min({1, 3, 5, 2, 4});
int: 1
rascal>min({"elephant", "zebra", "snake"});
str: "elephant"
```

## function power {#Set-power}

* ``set[set[&T]] power(set[&T] st)``


#### Synopsis

Determine the powerset of a set.

#### Description

Returns a set with all subsets of `s`.

#### Examples


```rascal-shell
rascal>import Set;
ok
rascal>power({1,2,3,4});
set[set[int]]: {
  {},
  {1,2,4},
  {1},
  {3,2,4},
  {3},
  {1,3,2,4},
  {1,3},
  {2},
  {4},
  {1,2},
  {1,4},
  {3,2},
  {3,4},
  {1,3,2},
  {1,3,4},
  {2,4}
}
```

## function power1 {#Set-power1}

* ``set[set[&T]] power1(set[&T] st)``


#### Synopsis

The powerset (excluding the empty set) of a set value.

#### Description

Returns all subsets (excluding the empty set) of `s`.

#### Examples


```rascal-shell
rascal>import Set;
ok
rascal>power1({1,2,3,4});
set[set[int]]: {
  {1,2,4},
  {1},
  {3,2,4},
  {3},
  {1,3,2,4},
  {1,3},
  {2},
  {4},
  {1,2},
  {1,4},
  {3,2},
  {3,4},
  {1,3,2},
  {1,3,4},
  {2,4}
}
```

## function reducer {#Set-reducer}

* ``&T reducer(set[&T] st, &T (&T,&T) fn, &T unit)``
* ``&T reducer(set[&T] _:{})``


#### Synopsis

Apply a function to successive elements of a set and combine the results (__deprecated__).

#### Description

Apply the function `fn` to successive elements of set `s` starting with `unit`.

#### Examples


```rascal-shell
rascal>import Set;
ok
rascal>int add(int x, int y) { return x + y; }
int (int, int): function(|prompt:///|(0,39,<1,0>,<1,39>))
rascal>reducer({10, 20, 30, 40}, add, 0); 
int: 100
```

#### Pitfalls

WARNING: This function is *deprecated*, use a [reducer](/docs/Rascal/Expressions/Reducer) instead.

## function size {#Set-size}

* ``int size(set[&T] st)``


#### Synopsis

Determine the number of elements in a set.

#### Examples


```rascal-shell
rascal>import Set;
ok
rascal>size({1,2,3,4});
int: 4
rascal>size({"elephant", "zebra", "snake"});
int: 3
rascal>size({});
int: 0
```

## function sum {#Set-sum}

* ``(&T <:num) sum(set[(&T <:num)] _:{})``
* ``default (&T <:num) sum({(&T <: num) e, *(&T <: num) r})``

## function getOneFrom {#Set-getOneFrom}

* ``&T getOneFrom(set[&T] st)``


#### Synopsis

Pick an arbitrary element from a set.

#### Description

#### Examples


```rascal-shell
rascal>import Set;
ok
rascal>getOneFrom({"elephant", "zebra", "snake"});
str: "snake"
rascal>getOneFrom({"elephant", "zebra", "snake"});
str: "zebra"
rascal>getOneFrom({"elephant", "zebra", "snake"});
str: "snake"
rascal>getOneFrom({"elephant", "zebra", "snake"});
str: "zebra"
```

## function getFirstFrom {#Set-getFirstFrom}

* ``&T getFirstFrom({&T f, *&T _})``
* ``&T getFirstFrom(set[&T] _:{})``


#### Synopsis

Get "first" element from a set.

#### Description

Get "first" element of a set. Of course, sets are unordered and do not have a first element.
However, we may assume that sets are internally ordered in some way and this ordering is reproducible.
Applying `getFirstFrom` on the same set will always returns the same element.

#### Benefits

This function helps to make set-based code more deterministic, for instance, for testing purposes.

## function takeOneFrom {#Set-takeOneFrom}

* ``tuple[&T, set[&T]] takeOneFrom(set[&T] st)``


#### Synopsis

Remove an arbitrary element from a set, returns the element and a set without that element.

#### Description

Remove an arbitrary element from set `s` and return a tuple consisting of the element and a set without that element.
 Also see [get one from](/docs/Library/Set/Set-getOneFrom).

#### Examples


```rascal-shell
rascal>import Set;
ok
rascal>takeOneFrom({1, 2, 3, 4});
tuple[int,set[int]]: <1,{3,2,4}>
rascal>takeOneFrom({1, 2, 3, 4});
tuple[int,set[int]]: <3,{1,2,4}>
rascal>takeOneFrom({1, 2, 3, 4});
tuple[int,set[int]]: <3,{1,2,4}>
```

## function takeFirstFrom {#Set-takeFirstFrom}

* ``tuple[&T, set[&T]] takeFirstFrom({&T f, *&T r})``
* ``tuple[&T, set[&T]] takeFirstFrom(set[&T] _:{})``


#### Synopsis

Remove "first" element from a set, returns the element and a set without that element.

#### Description

element of a set.

## function toList {#Set-toList}

* ``list[&T] toList(set[&T] st)``


#### Synopsis

Convert a set to a list.

#### Examples


```rascal-shell
rascal>import Set;
ok
rascal>toList({1, 2, 3, 4});
list[int]: [1,3,2,4]
rascal>toList({"elephant", "zebra", "snake"});
list[str]: ["snake","zebra","elephant"]
```
Note that the same result can be obtained using splicing:

```rascal-shell
rascal>s = {1,2,3,4};
set[int]: {1,3,2,4}
rascal>l = [*s];
list[int]: [1,3,2,4]
```

#### Pitfalls

Recall that the elements of a set are unordered and that there is no guarantee in which order the set elements will be placed in the resulting list.

## function toMap {#Set-toMap}

* ``map[&A,set[&B]] toMap(rel[&A, &B] st)``


#### Synopsis

Convert a set of tuples to a map; each key is associated with a set of values.

#### Description

Convert a set of tuples to a map in which the first element of each tuple 
is associated with the set of second elements of all tuples with the same first element.

#### Examples


```rascal-shell
rascal>import Set;
ok
rascal>toMap({<"a", 1>, <"b", 2>, <"a", 10>});
map[str, set[int]]: (
  "a":{10,1},
  "b":{2}
)
```

## function toMapUnique {#Set-toMapUnique}

* ``map[&A,&B] toMapUnique(rel[&A, &B] st) throws MultipleKey``


#### Synopsis

Convert a set of tuples to a map (provided that there are no multiple keys).

#### Description

Convert a set of tuples to a map. The result should be a legal map (i.e., without multiple keys).

#### Examples


```rascal-shell
rascal>import Set;
ok
rascal>toMapUnique({<"a", 1>, <"b", 2>, <"c", 10>});
map[str, int]: ("a":1,"b":2,"c":10)
```
Now explore an erroneous example:

```rascal-shell
rascal>toMapUnique({<"a", 1>, <"b", 2>, <"a", 10>});
|std:///Set.rsc|(9297,543,<442,0>,<462,70>): MultipleKey("a",10,1)
	at *** somewhere ***(|std:///Set.rsc|(9297,543,<442,0>,<462,70>))
	at toMapUnique(|prompt:///|(39,2,<1,39>,<1,41>))
ok
```

## function toString {#Set-toString}

* ``str toString(set[&T] st)``


#### Synopsis

Convert a set to a string.

#### Examples


```rascal-shell
rascal>import Set;
ok
rascal>toString({1, 2, 3});
str: "{1,3,2}"
rascal>toString({"elephant", "zebra", "snake"});
str: "{\"snake\",\"zebra\",\"elephant\"}"
```

#### Pitfalls

Recall that the elements of a set are unordered and that there is no guarantee in which order the set elements will be placed in the resulting string.

## function itoString {#Set-itoString}

* ``str itoString(set[&T] st)``


#### Synopsis

Convert a set to an indented string.

#### Examples


```rascal-shell
rascal>import Set;
ok
rascal>toString({1, 2, 3});
str: "{1,3,2}"
rascal>toString({"elephant", "zebra", "snake"});
str: "{\"snake\",\"zebra\",\"elephant\"}"
```

#### Pitfalls

Recall that the elements of a set are unordered and that there is no guarantee in which order the set elements will be placed in the resulting string.

## function sort {#Set-sort}

* ``list[&T] sort(set[&T] s)``
* ``list[&T] sort(set[&T] l, bool (&T a, &T b) less)``

 
#### Synopsis

Sort the elements of a set.

Sort the elements of a set:

*  Use the built-in ordering on values to compare list elements.
*  Give an additional `lessThan` function that will be used to compare elements. 

This function `lessThan` (<) function should implement a strict partial order, meaning:

*  that it is not reflexive, i.e. never `a < a`
*  is anti-symmetric, i.e. never `a < b && b < a`.
*  is transitive, i.e. if `a < b` and `b < c` then `a < c`.

#### Examples


```rascal-shell
rascal>import Set;
ok
rascal>import String;
ok
rascal>sort({10, 4, -2, 11, 100, 5});
list[int]: [-2,4,5,10,11,100]
rascal>fruits = {"mango", "strawberry", "pear", "pineapple", "banana", "grape", "kiwi"};
set[str]: {"mango","banana","pear","pineapple","grape","strawberry","kiwi"}
rascal>sort(fruits);
list[str]: ["banana","grape","kiwi","mango","pear","pineapple","strawberry"]
rascal>sort(fruits, bool(str a, str b){ return size(a) > size(b); });
list[str]: ["strawberry","pineapple","banana","mango","grape","kiwi","pear"]
```

## function top {#Set-top}

* ``list[&T] top(int k, set[&T] l, bool (&T a, &T b) less)``
* ``list[&T] top(int k, set[&T] l)``


.Synopsis Produce the smallest `k` elements of a set as sorted by the `less` function

#### Description

This function is fast if `k` is relatively small, say 10 out of a 1000 elements.
It operates in O(n*k) time where n is the size of the set.
 
If `k` is a larger value, say `k > 10`, then it's perhaps better to just sort the entire set 
using the asympotically faster (n*log^2(n)) sort function and take the first `k` elements of the resulting list.

If `k` is a negative number, `top` will return the largest `abs(k)` elements of the set instead of the smallest.

## function union {#Set-union}

* ``set[&T] union(set[set[&T]] sets)``


#### Synopsis

Flatten a set of sets into a single set.  

## function jaccard {#Set-jaccard}

* ``real jaccard(set[value] x, set[value] y)``


#### Synopsis

Compute the Jaccard similarity between two sets.

