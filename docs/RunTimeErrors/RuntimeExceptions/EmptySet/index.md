---
title: Empty Set
---

#### Synopsis

Illegal operation on an empty set.

#### Syntax

#### Types

`data RuntimeException = EmptySet();`
       
#### Usage

`import Exception;` (only needed when `EmptySet` is used in `catch`)

#### Description

Rascal provides many operations and functions on sets, see [set values](/Rascal/Expressions/Values/Set)
and [set functions](/Library/Set).
This error is generated when a function or operations cannot handle the empty set.

Remedies:

*  Guard the function or operation with a test on the empty set ([isEmpty](/Library/Set#Set-isEmpty)) and 
  take alternative action in that case.
*  Catch the `EmptySet` yourself, see [try catch](/Rascal/Statements/TryCatch).

#### Examples

Import the `Set` library and introduce `S` with an empty set as value:

```rascal-shell
rascal>import Set;
ok
rascal>S = {};
set[void]: {}
```
Taking an element from an empty set gives an error:

```rascal-shell
rascal>getOneFrom(S);
|std:///Set.rsc|(6597,382,<329,0>,<346,38>): EmptySet()
	at *** somewhere ***(|std:///Set.rsc|(6597,382,<329,0>,<346,38>))
	at getOneFrom(|prompt:///|(11,1,<1,11>,<1,12>))
ok
```
We can also catch the `EmptySet` error. First import the Rascal exceptions (which are also included in `Prelude`)
and `IO`:

```rascal-shell
rascal>import Exception;
ok
rascal>import IO;
ok
rascal>try 
>>>>>>>  println(getOneFrom(S)); 
>>>>>>>catch EmptySet(): 
>>>>>>>  println("Cannot apply getOneFrom to empty set");
  println("Cannot apply getOneFrom to empty set");
Cannot apply getOneFrom to empty set
ok
```

#### Benefits


