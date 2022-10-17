---
title: "module List"
---

#### Usage

`import List;`


#### Synopsis

Library functions for lists.

#### Description

For operators on lists see [List](../Rascal/Expressions/Values/List/index.md) in the Rascal Language Reference.

The following functions are available for lists:
* [concat](../Library/List.md#List-concat)
* [delete](../Library/List.md#List-delete)
* [distribution](../Library/List.md#List-distribution)
* [drop](../Library/List.md#List-drop)
* [dup](../Library/List.md#List-dup)
* [elementAt](../Library/List.md#List-elementAt)
* [getFirstFrom](../Library/List.md#List-getFirstFrom)
* [getOneFrom](../Library/List.md#List-getOneFrom)
* [head](../Library/List.md#List-head)
* [headTail](../Library/List.md#List-headTail)
* [index](../Library/List.md#List-index)
* [indexOf](../Library/List.md#List-indexOf)
* [insertAt](../Library/List.md#List-insertAt)
* [intercalate](../Library/List.md#List-intercalate)
* [intersperse](../Library/List.md#List-intersperse)
* [isEmpty](../Library/List.md#List-isEmpty)
* [isSorted](../Library/List.md#List-isSorted)
* [itoString](../Library/List.md#List-itoString)
* [last](../Library/List.md#List-last)
* [lastIndexOf](../Library/List.md#List-lastIndexOf)
* [mapper](../Library/List.md#List-mapper)
* [max](../Library/List.md#List-max)
* [merge](../Library/List.md#List-merge)
* [min](../Library/List.md#List-min)
* [mix](../Library/List.md#List-mix)
* [permutations](../Library/List.md#List-permutations)
* [permutationsBag](../Library/List.md#List-permutationsBag)
* [pop](../Library/List.md#List-pop)
* [prefix](../Library/List.md#List-prefix)
* [push](../Library/List.md#List-push)
* [reducer](../Library/List.md#List-reducer)
* [remove](../Library/List.md#List-remove)
* [removeFromBag](../Library/List.md#List-removeFromBag)
* [reverse](../Library/List.md#List-reverse)
* [shuffle](../Library/List.md#List-shuffle)
* [size](../Library/List.md#List-size)
* [slice](../Library/List.md#List-slice)
* [sort](../Library/List.md#List-sort)
* [split](../Library/List.md#List-split)
* [sum](../Library/List.md#List-sum)
* [tail](../Library/List.md#List-tail)
* [take](../Library/List.md#List-take)
* [takeOneFrom](../Library/List.md#List-takeOneFrom)
* [takeWhile](../Library/List.md#List-takeWhile)
* [toMap](../Library/List.md#List-toMap)
* [toMapUnique](../Library/List.md#List-toMapUnique)
* [toRel](../Library/List.md#List-toRel)
* [toSet](../Library/List.md#List-toSet)
* [toString](../Library/List.md#List-toString)
* [top](../Library/List.md#List-top)
* [unzip2](../Library/List.md#List-unzip2)
* [unzip3](../Library/List.md#List-unzip3)
* [upTill](../Library/List.md#List-upTill)
* [zip2](../Library/List.md#List-zip2)
* [zip3](../Library/List.md#List-zip3)


## function concat {#List-concat}

* ``list[&T] concat(list[list[&T]] xxs)``


#### Synopsis

Concatenate a list of lists.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>concat([]);
list[void]: []
rascal>concat([[]]);
list[void]: []
rascal>concat([[1]]);
list[int]: [1]
rascal>concat([[1],[],[2,3]]);
list[int]: [1,2,3]
rascal>concat([[1,2],[3],[4,5],[]]);
list[int]: [1,2,3,4,5]
```

## function delete {#List-delete}

* ``list[&T] delete(list[&T] lst, int n)``


#### Synopsis

Delete an element from a list.

#### Description

Delete the `n`-th element from a list. A new list without the `n`-th element is returned as result.
The `IndexOutOfBounds` exception is thrown when n is not a valid index.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>delete([1, 2, 3], 1);
list[int]: [1,3]
rascal>delete(["zebra", "elephant", "snake", "owl"], 2);
list[str]: ["zebra","elephant","owl"]
```

## function distribution {#List-distribution}

* ``map[&T element, int occurs] distribution(list[&T] lst)``


#### Synopsis

Get the distribution of the elements of the list. That
is how often does each element occur in the list? 

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>distribution([4,4,4,3,1,2,1,1,3,4]);
map[int element, int occurs]: (1:3,3:2,2:1,4:4)
```

## function drop {#List-drop}

* ``list[&T] drop(int n, list[&T] lst)``


#### Synopsis

Drop elements from the head of a list.

#### Description

Drop `n` elements (or `size(lst)` elements if `size(lst) < n`) from the head of `lst`.
See [take](../Library/List.md#List-take) to get elements from the head of a list].

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>drop(2, [5, 1, 7, 3]);
list[int]: [7,3]
rascal>drop(10, [5, 1, 7, 3]);
list[int]: []
rascal>drop(2, ["zebra", "elephant", "snake", "owl"]);
list[str]: ["snake","owl"]
```

## function dup {#List-dup}

* ``list[&T] dup(list[&T] lst)``

#### Synopsis

Remove multiple occurrences of elements in a list. The first occurrence remains.

#### Examples



```rascal-shell 
rascal>import List;
ok
rascal>dup([3, 1, 5, 3, 1, 7, 1, 2]);
list[int]: [3,1,5,7,2]
```

## function elementAt {#List-elementAt}

* ``&T elementAt(list[&T] lst, int index)``

## function getOneFrom {#List-getOneFrom}

* ``&T getOneFrom(list[&T] lst)``


#### Synopsis

Pick a random element from a list.

#### Description

Get an arbitrary element from a list. See [takeOneFrom](../Library/List.md#List-takeOneFrom) for a function that also removes the selected element.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>getOneFrom(["zebra", "elephant", "snake", "owl"]);
str: "owl"
rascal>getOneFrom(["zebra", "elephant", "snake", "owl"]);
str: "owl"
rascal>getOneFrom(["zebra", "elephant", "snake", "owl"]);
str: "zebra"
```

## function getFirstFrom {#List-getFirstFrom}

* ``&T getFirstFrom([&T f, *&T _])``
* ``&T getFirstFrom(list[&T] _ :[])``


#### Synopsis

Pick first element from a list.

#### Description

Get the first element from a list. As opposed to [getOneFrom](../Library/List.md#List-getOneFrom) this function always returns the same (first) list element.

## function head {#List-head}

* ``&T head([&T h, *&T _])``
* ``&T head(list[&T] _:[])``
* ``list[&T] head(list[&T] lst, int n) throws IndexOutOfBounds``


#### Synopsis

Get the first element(s) from a list.

#### Description

* Returns the first element of a list or throws `EmptyList` when the list is empty. 
  This is identical to [top](../Library/List.md#List-top).
* Returns the first `n` elements of a list or throws `IndexOutOfBounds` when the list is too short. 
  This is similar to [take](../Library/List.md#List-take).

#### Examples


```rascal-shell ,error
rascal>import List;
ok
```
Get the first element:

```rascal-shell ,continue,error
rascal>head([1, 2, 3]);
int: 1
rascal>head(["zebra", "elephant", "snake", "owl"]);
str: "zebra"
```
An exception is thrown when taking the head of an empty list:

```rascal-shell ,continue,error
rascal>head([]);
|std:///List.rsc|(4522,9,<195,38>,<195,47>): EmptyList()
	at head(|std:///List.rsc|(4484,52,<195,0>,<195,52>))
	at $shell$(|prompt:///|(0,9,<1,0>,<1,9>))
ok
```
Get the first n elements:

```rascal-shell ,continue,error
rascal>head([1, 2, 3, 4], 2);
list[int]: [1,2]
rascal>head(["zebra", "elephant", "snake", "owl"], 2);
list[str]: ["zebra","elephant"]
```
An exception is thrown when the second argument exceeds the length of the list:

```rascal-shell ,continue,error
rascal>head([1, 2, 3, 5], 5);
|std:///List.rsc|(4576,113,<198,0>,<199,71>): IndexOutOfBounds(4)
	at *** somewhere ***(|std:///List.rsc|(4576,113,<198,0>,<199,71>))
	at head(|prompt:///|(19,1,<1,19>,<1,20>))
ok
```

## function headTail {#List-headTail}

* ``tuple[&T, list[&T]] headTail([&T h, *&T t])``
* ``tuple[&T, list[&T]] headTail(list[&T] _:[])``


#### Synopsis

Split a list in a head and a tail.

#### Description

This function is identical to [pop](../Library/List.md#List-pop).

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>headTail([3, 1, 4, 5]);
tuple[int,list[int]]: <3,[1,4,5]>
rascal>pop([3, 1, 4, 5]);
tuple[int,list[int]]: <3,[1,4,5]>
rascal>headTail(["zebra", "elephant", "snake", "owl"]);
tuple[str,list[str]]: <"zebra",["elephant","snake","owl"]>
```

## function index {#List-index}

* ``list[int] index(list[&T] lst)``


#### Synopsis

A list of legal index values of a list.

#### Description

Returns a list of all legal index values for a given list `lst`.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>index([1, 3, 5]);
list[int]: [0,1,2]
rascal>index(["zebra", "elephant", "snake", "owl"]);
list[int]: [0,1,2,3]
```

#### Benefits

This function is useful in [for](../Rascal/Statements/For/index.md) loops over lists.

## function indexOf {#List-indexOf}

* ``int indexOf(list[&T] lst, &T elt)``


#### Synopsis

Index of first occurrence of an element in a list.

#### Description

Return index of first occurrence of `elt` in `lst`, or `-1` if `elt` is not found.
Also see [lastIndexOf](../Library/List.md#List-lastIndexOf).

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>indexOf([3, 1, 4, 5], 4);
int: 2
rascal>indexOf([3, 1, 4, 5], 7);
int: -1
rascal>indexOf(["zebra", "elephant", "snake", "owl"], "snake");
int: 2
rascal>indexOf(["zebra", "elephant", "snake", "owl"], "eagle");
int: -1
```

## function insertAt {#List-insertAt}

* ``list[&T] insertAt(list[&T] lst, int n, &T elm) throws IndexOutOfBounds``


#### Synopsis

Insert an element at a specific position in a list.

#### Description

Returns a new list with the value of `elm` inserted at index position `n` of the old list.

#### Examples


```rascal-shell ,error
rascal>import List;
ok
rascal>insertAt([1,2,3], 1, 5);
list[int]: [1,5,2,3]
rascal>insertAt(["zebra", "elephant", "snake", "owl"], 2, "eagle");
list[str]: ["zebra","elephant","eagle","snake","owl"]
```
An exception is thrown when the index position is outside the list:

```rascal-shell ,continue,error
rascal>insertAt([1,2,3], 10, 5);
|std:///List.rsc|(6047,579,<273,0>,<294,83>): IndexOutOfBounds(10)
	at *** somewhere ***(|std:///List.rsc|(6047,579,<273,0>,<294,83>))
	at insertAt(|prompt:///|(22,1,<1,22>,<1,23>))
ok
```

## function intercalate {#List-intercalate}

* ``str intercalate(str sep, list[value] l)``


#### Synopsis

Join a list of values into a string separated by a separator.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>intercalate("/", [3]);
str: "3"
rascal>intercalate("/", [3, 1, 4, 5]);
str: "3/1/4/5"
rascal>intercalate(", ", [3, 1, 4, 5]);
str: "3, 1, 4, 5"
rascal>intercalate(", ", ["zebra", "elephant", "snake", "owl"]);
str: "zebra, elephant, snake, owl"
```

## function intersperse {#List-intersperse}

* ``list[&T] intersperse(&T sep, list[&T] xs)``


#### Synopsis

Intersperses a list of values with a separator.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>intersperse(", ", ["a","b","c"]);
list[str]: ["a",", ","b",", ","c"]
rascal>intersperse(0, [1, 2, 3]);
list[int]: [1,0,2,0,3]
rascal>intersperse(1, []);
list[int]: []
rascal>intersperse([], [1]);
list[value]: [1]
```

## function isEmpty {#List-isEmpty}

* ``bool isEmpty(list[&T] lst)``


#### Synopsis

Test whether a list is empty.

#### Description

Returns `true` when a list is empty and `false` otherwise.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>isEmpty([]);
bool: true
rascal>isEmpty([1, 2, 3]);
bool: false
```

## function last {#List-last}

* ``&T last([*&T _, &T l])``
* ``&T last(list[&T] _:[])``


#### Synopsis

Return the last element of a list, if any.

#### Description

Also see [tail](../Library/List.md#List-tail) that returns a list of one or more of the last elements of a list.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>last([1]);
int: 1
rascal>last([3, 1, 4, 5]);
int: 5
rascal>last(["zebra", "elephant", "snake", "owl"]);
str: "owl"
rascal>tail([3, 1, 4, 5]);
list[int]: [1,4,5]
```

## function lastIndexOf {#List-lastIndexOf}

* ``int lastIndexOf(list[&T] lst, &T elt)``


#### Synopsis

Return index of last occurrence of elt in lst, or -1 if elt is not found.

#### Description

Also see [indexOf](../Library/List.md#List-indexOf).

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>lastIndexOf([3, 1, 4, 5, 4], 4);
int: 4
rascal>lastIndexOf([3, 1, 4, 5, 4], 7);
int: -1
rascal>lastIndexOf(["zebra", "owl", "elephant", "snake", "owl"], "owl");
int: 4
```

## function mapper {#List-mapper}

* ``list[&U] mapper(list[&T] lst, &U (&T) fn)``


#### Synopsis

Apply a function to all list elements and return list of results.

#### Description

Apply a function `fn` to each element of `lst` and return the list of results.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>int incr(int x) { return x + 1; }
int (int): function(|prompt:///|(0,33,<1,0>,<1,33>))
rascal>mapper([1, 2, 3, 4], incr);
list[int]: [2,3,4,5]
```

## function max {#List-max}

* ``&T max([&T h, *&T t])``
* ``&T max(list[&T] _:[])``


#### Synopsis

Determine the largest element in a list.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>max([1, 3, 5, 2, 4]);
int: 5
rascal>max(["zebra", "elephant", "snake", "owl"]);
str: "zebra"
```

## function merge {#List-merge}

* ``list[&T] merge(list[&T] left, list[&T] right)``
* ``list[&T] merge(list[&T] left, list[&T] right, bool (&T a, &T b) lessOrEqual)``


#### Synopsis

Merge the elements of two sorted lists into one list.

#### Description

Merge the elements of two sorted lists into one list using the built-in ordering between values.
Optional, a comparison function `lessOrEqual` may be given for a user-defined ordering between values.


#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>merge([1, 3, 5], [2, 7, 9, 15]);
list[int]: [1,2,3,5,7,9,15]
rascal>merge(["ape", "elephant", "owl", "snale", "zebra"], ["apple", "berry", "orange", "pineapple"]);
list[str]: ["ape","apple","berry","elephant","orange","owl","pineapple","snale","zebra"]
```
Merge two lists of strings and use their length as ordering:

```rascal-shell ,continue
rascal>import String;
ok
rascal>merge(["ape", "owl", "snale", "zebra", "elephant"], ["apple", "berry", "orange", "pineapple"], bool(str x, str y){ return size(x) <= size(y); });
list[str]: ["ape","owl","snale","zebra","apple","berry","orange","elephant","pineapple"]
```

## function min {#List-min}

* ``&T min([&T h, *&T t])``
* ``&T min(list[&T] _: [])``


#### Synopsis

Determine the smallest element in a list.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>min([1, 3, 5, 2, 4]);
int: 1
rascal>min(["zebra", "elephant", "snake", "owl"]);
str: "elephant"
```

## function mix {#List-mix}

* ``list[&T] mix(list[&T] l, list[&T] r)``


#### Synopsis

Mix the elements of two lists.

#### Description

Let n be the minimum of the length of the two lists `l` and `r`.
`mix` returns a list in which the first `n` elements are taken alternately from the left and the right list,
followed by the remaining elements of the longest list.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>mix([3, 1, 7, 5, 9], [15, 25, 35]);
list[int]: [3,15,1,25,7,35,5,9]
rascal>mix([3, 1, 7], [15, 25, 35, 45, 55]);
list[int]: [3,15,1,25,7,35,45,55]
rascal>mix([3, 1, 7], ["elephant", "snake"]);
list[value]: [3,"elephant",1,"snake",7]
```

## function permutations {#List-permutations}

* ``set[list[&T]] permutations(list[&T] lst)``


#### Synopsis

Compute all permutations of a list.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>permutations([1,2,3]);
set[list[int]]: {
  [3,2,1],
  [1,2,3],
  [2,1,3],
  [1,3,2],
  [2,3,1],
  [3,1,2]
}
```

## function permutationsBag {#List-permutationsBag}

* ``set[list[&T]] permutationsBag(map[&T element, int occurs] b)``

## function pop {#List-pop}

* ``tuple[&T, list[&T]] pop(list[&T] lst)``


#### Synopsis

Pop top element from list, return a tuple.
#### Description

This function is identical to [head tail](../Library/List.md#List-headTail).
Also see [push](../Library/List.md#List-push) and [top](../Library/List.md#List-top).

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>pop([3, 1, 4, 5]);
tuple[int,list[int]]: <3,[1,4,5]>
rascal>headTail([3, 1, 4, 5]);
tuple[int,list[int]]: <3,[1,4,5]>
rascal>pop(["zebra", "elephant", "snake", "owl"]);
tuple[str,list[str]]: <"zebra",["elephant","snake","owl"]>
```

## function prefix {#List-prefix}

* ``list[&T] prefix(list[&T] lst)``


#### Synopsis

Return all but the last element of a list.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>prefix([3, 1, 4, 5]);
list[int]: [3,1,4]
rascal>prefix([]);
list[void]: []
rascal>prefix(["zebra", "elephant", "snake", "owl"]);
list[str]: ["zebra","elephant","snake"]
```

## function push {#List-push}

* ``list[&T] push(&T elem, list[&T] lst)``


#### Synopsis

Push an element in front of a list.

#### Description

Also see [pop](../Library/List.md#List-pop) and [top](../Library/List.md#List-top).

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>push(7, [3, 1, 4, 5]);
list[int]: [7,3,1,4,5]
rascal>push("eagle", ["zebra", "elephant", "snake", "owl"]);
list[str]: ["eagle","zebra","elephant","snake","owl"]
```

## function reducer {#List-reducer}

* ``&T reducer(list[&T] lst, &T (&T, &T) fn, &T unit)``


#### Synopsis

Apply a function to successive elements of list and combine the results (__deprecated__).

#### Description

Apply the function `fn` to successive elements of list `lst` starting with `unit`.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>int add(int x, int y) { return x + y; }
int (int, int): function(|prompt:///|(0,39,<1,0>,<1,39>))
rascal>reducer([10, 20, 30, 40], add, 0); 
int: 100
```

#### Pitfalls

WARNING:
This function is *deprecated*, use a [reducer](../Rascal/Expressions/Reducer/index.md) instead.

## function remove {#List-remove}

* ``list[&T] remove(list[&T] lst, int indexToDelete)``

## function removeFromBag {#List-removeFromBag}

* ``map[&T element, int occurs] removeFromBag(map[&T element, int occurs] b, &T el)``
* ``map[&T element, int occurs] removeFromBag(map[&T element, int occurs] b, &T el, int nr)``

## function reverse {#List-reverse}

* ``list[&T] reverse(list[&T] lst)``


#### Synopsis

Reverse a list.

#### Description

Returns a list with the elements of `lst` in reverse order.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>reverse([1,4,2,3]);
list[int]: [3,2,4,1]
rascal>reverse(["zebra", "elephant", "snake", "owl"]);
list[str]: ["owl","snake","elephant","zebra"]
```

## function size {#List-size}

* ``int size(list[&T] lst)``


#### Synopsis

Determine the number of elements in a list.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>size([20, 10, 30]);
int: 3
rascal>size(["zebra", "elephant", "snake", "owl"]);
int: 4
```

## function slice {#List-slice}

* ``list[&T] slice(list[&T] lst, int begin, int len)``


#### Synopsis

Compute a sublist of a list.

#### Description

Returns a sublist of `lst` from index `start` of length `len`.

NOTE: In most cases it is better to use the built-in [slice](../Rascal/Expressions/Values/List/Slice/index.md) notation,
see the example below.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>slice([10, 20, 30, 40, 50, 60], 2, 3);
list[int]: [30,40,50]
rascal>slice(["zebra", "elephant", "snake", "owl"], 1, 2);
list[str]: ["elephant","snake"]
```
Here are the equivalent expressions using the slice notation:

```rascal-shell 
rascal>[10, 20, 30, 40, 50, 60][2 .. 5];
list[int]: [30,40,50]
rascal>["zebra", "elephant", "snake", "owl"][1 .. 3];
list[str]: ["elephant","snake"]
```
WARNING: In the slice notation the upper bound is exclusive.

## function sort {#List-sort}

* ``list[&T] sort(list[&T] lst)``
* ``list[&T] sort(list[&T] l, bool (&T a, &T b) less)``


#### Synopsis

Sort the elements of a list.

#### Description

Sort the elements of a list:

*  Use the built-in ordering on values to compare list elements.
*  Give an additional `lessThan` function that will be used to compare elements.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>import String;
ok
rascal>sort([10, 4, -2, 11, 100, 5]);
list[int]: [-2,4,5,10,11,100]
rascal>fruits = ["mango", "strawberry", "pear", "pineapple", "banana", "grape", "kiwi"];
list[str]: ["mango","strawberry","pear","pineapple","banana","grape","kiwi"]
rascal>sort(fruits);
list[str]: ["banana","grape","kiwi","mango","pear","pineapple","strawberry"]
rascal>sort(fruits, bool(str a, str b){ return size(a) > size(b); });
list[str]: ["strawberry","pineapple","banana","grape","mango","pear","kiwi"]
```

## function isSorted {#List-isSorted}

* ``bool isSorted(list[&T] l, bool (&T a, &T b) less = bool (&T a, &T b) { return a < b; })``


#### Synopsis

Check whether a list is sorted or not.

#### Description

Checks whether or not a list is sorted by searching for any out-of-order elements.
The empty list is defined to be "sorted" and what sorted means is defined the
higher-order parameter "less" which should implement a partial-order relation
between the two parameters.

## function shuffle {#List-shuffle}

* ``list[&T] shuffle(list[&T] l)``
* ``list[&T] shuffle(list[&T] l, int seed)``


#### Synopsis

Shuffle a list.

#### Description

Returns a random (unbiased) shuffled list.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>shuffle([1,4,2,3]);
list[int]: [1,2,3,4]
rascal>shuffle(["zebra", "elephant", "snake", "owl"]);
list[str]: ["snake","owl","elephant","zebra"]
```

## function split {#List-split}

* ``tuple[list[&T],list[&T]] split(list[&T] l)``


#### Synopsis

Split a list into two halves.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>split([3, 1, 4, 5, 7]);
tuple[list[int],list[int]]: <[3,1],[4,5,7]>
rascal>split(["zebra", "elephant", "snake", "owl"]);
tuple[list[str],list[str]]: <["zebra","elephant"],["snake","owl"]>
```

## function sum {#List-sum}

* ``(&T <:num) sum([(&T <: num) hd, *(&T <: num) tl])``
* ``(&T <:num) sum(list[&T] _: [])``


#### Synopsis

Sum the elements of a list.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>sum([3, 1, 4, 5]);
int: 13
rascal>sum([3, 1.5, 4, 5]);
num: 13.5
```

## function tail {#List-tail}

* ``list[&T] tail([&T _, *&T t])``
* ``list[&T] tail(list[&T] _:[])``
* ``list[&T] tail(list[&T] lst, int len) throws IndexOutOfBounds``


#### Synopsis

Get the tail element(s) from a list.

#### Description

*  Return a list consisting of all but the first element of `lst`.
*  Return a list consisting of the last `n` elements of `lst`.

#### Examples


```rascal-shell ,error
```
All but first element:

```rascal-shell ,continue,error
rascal>import List;
ok
rascal>tail([10,20,30]);
list[int]: [20,30]
```
Try an error case:

```rascal-shell ,continue,error
rascal>tail([]);
|std:///List.rsc|(18315,9,<841,44>,<841,53>): EmptyList()
	at tail(|std:///List.rsc|(18271,58,<841,0>,<841,58>))
	at $shell$(|prompt:///|(0,9,<1,0>,<1,9>))
ok
```
Last n elements:

```rascal-shell ,continue,error
rascal>tail([10, 20, 30, 40, 50, 60], 3);
list[int]: [40,50,60]
```
Try an error case:

```rascal-shell ,continue,error
rascal>tail([10, 20, 30, 40, 50, 60], 10);
|std:///List.rsc|(18332,115,<843,0>,<844,73>): IndexOutOfBounds(4)
	at *** somewhere ***(|std:///List.rsc|(18332,115,<843,0>,<844,73>))
	at tail(|prompt:///|(31,2,<1,31>,<1,33>))
ok
```

## function take {#List-take}

* ``list[&T] take(int n, list[&T] lst)``


#### Synopsis

Get number of elements from the head of a list.

#### Description

Get `n` elements (or `size(lst)` elements if `size(lst) < n`) from the head of the list.
See [drop](../Library/List.md#List-drop) to remove elements from the head of a list.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>take(2, [3, 1, 4, 5]);
list[int]: [3,1]
rascal>take(6, [3, 1, 4, 5]);
list[int]: [3,1,4,5]
rascal>take(2, ["zebra", "elephant", "snake", "owl"]);
list[str]: ["zebra","elephant"]
```

## function takeOneFrom {#List-takeOneFrom}

* ``tuple[&T, list[&T]] takeOneFrom(list[&T] lst)``


#### Synopsis

Remove an arbitrary element from a list, returns the element and the modified list.

#### Description

Select an arbitrary element from `lst`, and return a tuple consisting of:

*  the selected element, and 
*  a new list consisting of all elements of `lst` except the selected element.


See [getOneFrom](../Library/List.md#List-getOneFrom) to only selected an element from a list.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>takeOneFrom([10,20,30,40,50]);
tuple[int,list[int]]: <40,[10,20,30,50]>
rascal>takeOneFrom([10,20,30,40,50]);
tuple[int,list[int]]: <40,[10,20,30,50]>
rascal>takeOneFrom([10,20,30,40,50]);
tuple[int,list[int]]: <30,[10,20,40,50]>
rascal>takeOneFrom(["zebra", "elephant", "snake", "owl"]);
tuple[str,list[str]]: <"zebra",["elephant","snake","owl"]>
rascal>takeOneFrom(["zebra", "elephant", "snake", "owl"]);
tuple[str,list[str]]: <"elephant",["zebra","snake","owl"]>
rascal>takeOneFrom(["zebra", "elephant", "snake", "owl"]);
tuple[str,list[str]]: <"snake",["zebra","elephant","owl"]>
```

## function takeWhile {#List-takeWhile}

* ``list[&T] takeWhile(list[&T] lst, bool (&T a) take)``


#### Synopsis

Take elements from the front of the list as long as a predicate is true.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>bool isEven(int a) = a mod 2 == 0;
bool (int): function(|prompt:///|(0,34,<1,0>,<1,34>))
rascal>takeWhile([2,4,6,8,1,2,3,4,5],isEven);
list[int]: [2,4,6,8]
```

## function toMap {#List-toMap}

* ``map[&A,list[&B]] toMap(list[tuple[&A, &B]] lst) throws MultipleKey``


#### Synopsis

Convert a list of pairs to a map; first elements are associated with a set of second elements.

#### Description

Convert a list of tuples to a map in which the first element of each tuple is 
associated with the set of second elements from all tuples with the same first element. Keys should be unique.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>toMap([<1,10>, <1, 11>, <2, 20>, <3, 30>, <3, 31>]);
map[int, list[int]]: (
  1:[10,11],
  3:[30,31],
  2:[20]
)
```

#### Pitfalls

`toMap` collects all values in tuples with the same first value in a set.
Contrast this with `toMapUnique` that associates each first tuple value with the second tuple value,
but imposes the constraint that those keys are unique.

## function toMapUnique {#List-toMapUnique}

* ``map[&A,&B] toMapUnique(list[tuple[&A, &B]] lst) throws MultipleKey``


#### Synopsis

Convert a list of tuples to a map; result must be a map.

#### Description

Convert a list of tuples to a map; result must be a map.

#### Examples


```rascal-shell ,error
rascal>import List;
ok
rascal>toMapUnique([<1,10>, <2, 20>, <3, 30>]);
map[int, int]: (1:10,3:30,2:20)
```
Let's explore an error case:

```rascal-shell ,continue,error
rascal>toMapUnique([<1,10>, <1, 11>, <2, 20>, <3, 30>]);
|std:///List.rsc|(20860,663,<941,0>,<966,79>): MultipleKey(1,10,11)
	at *** somewhere ***(|std:///List.rsc|(20860,663,<941,0>,<966,79>))
	at toMapUnique(|prompt:///|(43,2,<1,43>,<1,45>))
ok
```

#### Pitfalls

The keys in a map are unique by definition.
`toMapUnique` throws a `MultipleKey` exception when the list contains more than one tuple with the same first value.

## function top {#List-top}

* ``&T top([&T t, *&T _])``


#### Synopsis

Take the top element of a list.
#### Description

This function is identical to [head](../Library/List.md#List-head).
Also see [pop](../Library/List.md#List-pop) and [push](../Library/List.md#List-push).

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>top([3, 1, 4, 5]);
int: 3
rascal>top(["zebra", "elephant", "snake", "owl"]);
str: "zebra"
```

## function toRel {#List-toRel}

* ``rel[&T,&T] toRel(list[&T] lst)``


#### Synopsis

Convert a list to a relation.
#### Description

  Convert a list to relation, where each tuple encodes which elements are followed by each other.
  This function will return an empty relation for empty lists and for singleton lists.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>toRel([3, 1, 4, 5]);
rel[int,int]: {
  <1,4>,
  <3,1>,
  <4,5>
}
rascal>toRel(["zebra", "elephant", "snake", "owl"]);
rel[str,str]: {
  <"snake","owl">,
  <"zebra","elephant">,
  <"elephant","snake">
}
```

## function toSet {#List-toSet}

* ``set[&T] toSet(list[&T] lst)``


#### Synopsis

Convert a list to a set.

#### Description

Convert `lst` to a set.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>toSet([10, 20, 30, 40]);
set[int]: {10,40,20,30}
rascal>toSet(["zebra", "elephant", "snake", "owl"]);
set[str]: {"snake","owl","zebra","elephant"}
```
Note that the same can be done using splicing

```rascal-shell ,continue
rascal>l = [10,20,30,40];
list[int]: [10,20,30,40]
rascal>s = {*l};
set[int]: {10,40,20,30}
```

## function toString {#List-toString}

* ``str toString(list[&T] lst)``


#### Synopsis

Convert a list to a string.

#### Description

Convert `lst` to a string.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>toString([10, 20, 30]);
str: "[10,20,30]"
rascal>toString(["zebra", "elephant", "snake", "owl"]);
str: "[\"zebra\",\"elephant\",\"snake\",\"owl\"]"
```

## function itoString {#List-itoString}

* ``str itoString(list[&T] lst)``


#### Synopsis

Convert a list to an indented string.

#### Description

Convert `lst` to a indented string.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>itoString([10, 20, 30]);
str: "[10,20,30]"
rascal>itoString(["zebra", "elephant", "snake", "owl"]);
str: "[\"zebra\",\"elephant\",\"snake\",\"owl\"]"
```

## function unzip2 {#List-unzip2}

* ``tuple[list[&T],list[&U]] unzip2(list[tuple[&T,&U]] lst)``


#### Synopsis

Make a pair (triple) of lists from a list of pairs (triples).

#### Description

Also see [unzip3](../Library/List.md#List-unzip3);

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>unzip2([<3,"thirty">, <1,"ten">, <4,"forty">]);
tuple[list[int],list[str]]: <[3,1,4],["thirty","ten","forty"]>
rascal>unzip3([<3,"thirty",300>, <1,"ten",100>, <4,"forty",400>]);
tuple[list[int],list[str],list[int]]: <[3,1,4],["thirty","ten","forty"],[300,100,400]>
```

## function unzip3 {#List-unzip3}

* ``tuple[list[&T],list[&U],list[&V]] unzip3(list[tuple[&T,&U,&V]] lst)``

## function upTill {#List-upTill}

* ``list[int] upTill(int n)``


#### Synopsis

Returns the list 0,1..n-1.
#### Description

Returns the list `0`, `1`, .., `n-1`, this is slightly faster than `[0..n]`, since the returned values are shared.

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>upTill(10);
list[int]: [0,1,2,3,4,5,6,7,8,9]
```

## function zip2 {#List-zip2}

* ``list[tuple[&T first, &U second]] zip2(list[&T] a, list[&U] b)``


#### Synopsis

Make a list of pairs from two (three) lists of the same length.

#### Description

Also see [unzip3](../Library/List.md#List-unzip3).

#### Examples


```rascal-shell 
rascal>import List;
ok
rascal>zip2([3, 1, 4], ["thirty", "ten", "forty"]);
lrel[int first,str second]: [
  <3,"thirty">,
  <1,"ten">,
  <4,"forty">
]
rascal>zip3([3, 1, 4], ["thirty", "ten", "forty"], [300, 100, 400]);
lrel[int first,str second,int third]: [
  <3,"thirty",300>,
  <1,"ten",100>,
  <4,"forty",400>
]
```

## function zip3 {#List-zip3}

* ``list[tuple[&T first, &U second, &V third]] zip3(list[&T] a, list[&U] b, list[&V] c)``

