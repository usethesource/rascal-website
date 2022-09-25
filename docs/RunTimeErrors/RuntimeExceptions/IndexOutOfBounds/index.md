---
title: Index Out Of Bounds
---

#### Synopsis

Index is out of bounds.

#### Types

`data RuntimeException = IndexOutOfBounds(int index)`

#### Usage

`import Exception;` (only needed when `IndexOutOfBounds` is used in `catch`)

#### Description

Subscription is possible on various ordered types, including [list](../../../Rascal/Expressions/Values/List/Subscription/index.md),
link:{RascaLangl}#Tuple-Subscription[tuple], and
[node](../../../Rascal/Expressions/Values/Node/Subscription/index.md).
This error is generated when a subscript is out of bounds for the value that is being subscripted.

Remedies:

* Guard the subscription with a test that the index is within bounds.
* Make your code less dependent on index values. Suggestions:
  ** Use the [index](../../../Library/List.md#List-index) to produce all legal indices of a list. 
     Instead of `for(int i <- [0..size(L)]) { ... }` use `for(int i <- index(L)) { ... }`.
  ** Use a [list slice](../../../Rascal/Expressions/Values/List/Slice/index.md) to automate part of the index computation.
*  Catch the `IndexOutOfBounds` yourself, see [try catch](../../../Rascal/Statements/TryCatch/index.md).


#### Examples

Initialize a list `L`:

```rascal-shell ,continue,error
rascal>L = [0, 10, 20, 30, 40];
list[int]: [0,10,20,30,40]
```
The legal indices are 0, 1, 2, 3, 4, so index 5 gives an error:

```rascal-shell ,continue,error
rascal>L[5];
|prompt:///|(2,1,<1,2>,<1,3>): IndexOutOfBounds(5)
	at $shell$(|prompt:///|(0,5,<1,0>,<1,5>))
ok
```
We can catch the `IndexOutOfBounds` error. First import the Rascal exceptions (which are also included in `Prelude`)
and `IO`:

```rascal-shell ,continue,error
rascal>import Exception;
ok
rascal>import IO;
ok
rascal>try 
>>>>>>>  L[5]; 
>>>>>>>catch IndexOutOfBounds(msg):
>>>>>>>  println("The message is: <msg>");
  println("The message is: <msg>");
The message is: 5
ok
```



