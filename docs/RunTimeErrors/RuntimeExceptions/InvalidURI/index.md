---
title: Invalid URI
---

#### Synopsis

An invalid URI is created at runtime.

#### Types

`data RuntimeException = InvalidURI(str uri);`
       
#### Usage

`import Exception;` (only needed when `InvalidURI` is used in `catch`)

#### Description

Thrown by operations on [source locations](/docs//Rascal/Expressions/Values/Location) that would 
lead to an invalid URI part of a source location value.

#### Examples


```rascal-shell
rascal>someLoc = |home:///abc.txt|;
loc: |home:///abc.txt|
rascal>someLoc.scheme = "a:b";
|prompt:///|(17,5,<1,17>,<1,22>): ParseError(|prompt:///|(17,5,<1,17>,<1,22>))
	at $shell$(|main://$shell$|)
ok
```

Another well-known example is a missing path when using `//` (wrong) instead of `///` (good):

```rascal-shell
rascal>|home:///|;
loc: |home:///|
rascal>|home://|;
|prompt:///|(0,9,<1,0>,<1,9>): MalFormedURI("home://")
	at $shell$(|prompt:///|(0,10,<1,0>,<1,10>))
ok
```

