---
title: Empty List
---

#### Synopsis

Illegal operation on an empty list.

#### Types

`data RuntimeException = EmptyList();`
       
#### Usage

`import Exception;` (only needed when `EmptyList` is used in `catch`)

#### Description

Rascal provides many operations and functions on lists, see [list values](../../../Rascal/Expressions/Values/List) 
and [list functions](../../../Library/List.md).
This error is generated when a function or operation cannot handle the empty list.

Remedies:

* Guard the function or operation with a test on the empty list ([isEmpty](../../../Library/List.md#List-isEmpty)) and 
  take alternative action in that case.
* Catch the `EmptyList` yourself, see [try catch](../../../Rascal/Statements/TryCatch).


#### Examples

Import the `List` library and introduce `L` with an empty list as value:

```rascal-shell
rascal>import List;
ok
rascal>L = [];
list[void]: []
```
Taking the head of an empty list gives an error:

```rascal-shell
rascal>head(L);
|std:///List.rsc|(4522,9,<195,38>,<195,47>): EmptyList()
	at head(|std:///List.rsc|(4484,52,<195,0>,<195,52>))
	at $shell$(|prompt:///|(0,8,<1,0>,<1,8>))
ok
```
This is the case when taking the tail as well:

```rascal-shell
rascal>tail(L);
|std:///List.rsc|(18315,9,<841,44>,<841,53>): EmptyList()
	at tail(|std:///List.rsc|(18271,58,<841,0>,<841,58>))
	at $shell$(|prompt:///|(0,8,<1,0>,<1,8>))
ok
```
We can also catch the `EmptyList` error. First import the Rascal exceptions (which are also included in `Prelude`)
and `IO`:

```rascal-shell
rascal>import Exception;
ok
rascal>import IO;
ok
rascal>try 
>>>>>>>  println(head(L)); 
>>>>>>>catch EmptyList(): 
>>>>>>>  println("Cannot take head of empty list");
  println("Cannot take head of empty list");
Cannot take head of empty list
ok
```


