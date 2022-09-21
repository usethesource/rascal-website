---
title: Empty Map
---

#### Synopsis

Illegal operation on an empty map.

#### Syntax

#### Types

`data RuntimeException = EmptyMap();`
       
#### Usage

`import Exception;` (only needed when `EmptyMap` is used in `catch`)

#### Description

Rascal provides many operations and functions on maps, see [map values](/docs//Rascal/Expressions/Values/Map)
and [map functions](/docs//Library/Map).
This error is generated when a function or operations cannot handle the empty map case.

Remedies: 

*  Guard the function or operation with a test on the empty map ([isEmpty](/docs//Library/Map#Map-isEmpty)) and 
  take alternative action in that case.
*  Catch the `EmptyMap` yourself, see [try catch](/docs//Rascal/Statements/TryCatch).

#### Examples

Import the `Map` library and introduce `M` with an empty map as value:

```rascal-shell
rascal>import Map;
ok
rascal>M = ();
map[void, void]: ()
```
Trying to get an arbitrary value from it gives an error:

```rascal-shell
rascal>getOneFrom(M);
|std:///Map.rsc|(2033,403,<103,0>,<122,41>): EmptyMap()
	at *** somewhere ***(|std:///Map.rsc|(2033,403,<103,0>,<122,41>))
	at getOneFrom(|prompt:///|(11,1,<1,11>,<1,12>))
ok
```
We can also catch the `EmptyMap` error. First import the Rascal exceptions (which are also included in `Prelude`)
and `IO`:

```rascal-shell
rascal>import Exception;
ok
rascal>import IO;
ok
rascal>try 
>>>>>>>  println(getOneFrom(M)); 
>>>>>>>catch EmptyMap(): 
>>>>>>>  println("Cannot use getOneFrom on empty map");
  println("Cannot use getOneFrom on empty map");
Cannot use getOneFrom on empty map
ok
```

#### Benefits


