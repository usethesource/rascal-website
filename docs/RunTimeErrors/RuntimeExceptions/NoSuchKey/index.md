---
title: No Such Key
---

#### Synopsis

A map does not contain a requested key.

#### Types

`data RuntimeException = NoSuchKey(value v);`
       
#### Usage

`import Exception;` (only needed when `NoSuchKey` is used in `catch`)

#### Description

Rascal provides many operations and functions on maps, 
see [map values](../../../Rascal/Expressions/Values/Map/) and [map functions](../../../Library/Map.md/).
This error is generated when a function or operation cannot find a requested key value in a map.

Remedies: 

*  Use the 
   [isDefined](../../../Rascal/Expressions/Values/Boolean/IsDefined/) and 
   [ifDefinedElse](../../../Rascal/Expressions/Values/Boolean/IfDefinedElse/) operator to guard a lookup in a map.
*  Catch the `NoSuchKey` yourself, see [try catch](../../../Rascal/Statements/TryCatch/).

#### Examples

Import the `Map` and `IO` libraries and introduce map `M`:

```rascal-shell ,error
rascal>import Map;
ok
rascal>import IO;
ok
rascal>M = ("a" : 1, "b" : 2);
map[str, int]: ("a":1,"b":2)
```
Indexing `M` with a non-existing key gives an error:

```rascal-shell ,continue,error
rascal>M["c"]
|prompt:///|(2,3,<1,2>,<1,5>): NoSuchKey("c")
	at $shell$(|prompt:///|(0,23,<1,0>,<1,23>))
ok
```
Use the postfix isDefined operator `?` to test whether the value is defined:

```rascal-shell ,continue,error
rascal>if(M["c"]?) println("defined"); else println("not defined");
if(M["c"]?) println("defined"); else println("not defined");
not defined
ok
```
Or use the binary ifDefinedElse operator `?` to return an alternative value
when the value of `M["c"]` is undefined:

```rascal-shell ,continue,error
rascal>M["c"] ? 3
int: 3
```
Yet another solution is to use try/catch.
First we import the Rascal exceptions (which are also included in `Prelude`):

```rascal-shell ,continue,error
rascal>import Exception;
ok
rascal>try println(M["c"]); catch NoSuchKey(k): println("Key <k> does not exist");
try println(M["c"]); catch NoSuchKey(k): println("Key <k> does not exist");
Key c does not exist
ok
```

