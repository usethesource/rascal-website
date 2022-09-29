---
title: Empty Map
---

#### Synopsis

Illegal operation on an empty map.

#### Types

`data RuntimeException = EmptyMap();`
       
#### Usage

`import Exception;` (only needed when `EmptyMap` is used in `catch`)

#### Description

Rascal provides many operations and functions on maps, see [map values](../../../Rascal/Expressions/Values/Map/index.md)
and [map functions](../../../Library/Map.md).
This error is generated when a function or operations cannot handle the empty map case.

Remedies: 

*  Guard the function or operation with a test on the empty map ([isEmpty](../../../Library/Map.md#Map-isEmpty)) and 
  take alternative action in that case.
*  Catch the `EmptyMap` yourself, see [try catch](../../../Rascal/Statements/TryCatch/index.md).

#### Examples

Import the `Map` library and introduce `M` with an empty map as value:

```rascal-shell ,error
rascal>import Map;
ok
rascal>M = ();
map[void, void]: ()
```
Trying to get an arbitrary value from it gives an error:

```rascal-shell ,continue,error
rascal>getOneFrom(M);
|std:///Map.rsc|(2033,403,<103,0>,<122,41>): EmptyMap()
	at *** somewhere ***(|std:///Map.rsc|(2033,403,<103,0>,<122,41>))
	at getOneFrom(|prompt:///|(11,1,<1,11>,<1,12>))
ok
```
We can also catch the `EmptyMap` error. First import the Rascal exceptions (which are also included in `Prelude`)
and `IO`:

```rascal-shell ,continue,error
rascal>import Exception;
ok
rascal>import IO;
ok
rascal>try 
>>>>>>>  println(getOneFrom(M)); 
>>>>>>>catch EmptyMap(): 
>>>>>>>  println("Cannot use getOneFrom on empty map");
Cannot use getOneFrom on empty map
ok
```

