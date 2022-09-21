---
title: Invalid Use Of Location
---

#### Synopsis

Invalid use of a source location at runtime.

#### Types

`data RuntimeException = InvalidUseOfLocation(str message);`
       
#### Usage

`import Exception;` (only needed when `InvalidUseOfLocation` is used in `catch`)

#### Description

Thrown by operations on [source locations](/docs/Rascal/Expressions/Values/Location) that would 
lead to an inconsistent or incomplete location value.

#### Examples


```rascal-shell
rascal>someLoc = |home:///abc.txt|;
loc: |home:///abc.txt|
rascal>someLoc.begin = <1, 2>;
|prompt:///|(20,1,<1,20>,<1,21>): UnavailableInformation()
	at $shell$(|main://$shell$|)
ok
```

