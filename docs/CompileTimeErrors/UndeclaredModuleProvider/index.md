---
title: UndeclaredModuleProvider
---

#### Synopsis

A scheme is used in a location for wich no provider has been registered.

#### Description

[Locations](../../Rascal/Expressions/Values/Location) provide very flexible ways to access files and external data sources.
There any many protocols (called _schemes_) that can be used (e.g., `file`, `http`, `home` and many others).
This error is generated when an unknown scheme is used.

Remedy: Use an existing scheme.

#### Examples

Misspelling the scheme for Rascal's standard library (which is `std`) gives an error when the location is used:

```rascal-shell
rascal>import IO;
ok
rascal>readFileLines(|standard:///demo/basic/Hello.rsc|);
|std:///IO.rsc|(15532,773,<663,0>,<685,24>): IO("Unsupported scheme \'standard\'")
	at *** somewhere ***(|std:///IO.rsc|(15532,773,<663,0>,<685,24>))
	at readFileLines(|prompt:///|(14,34,<1,14>,<1,48>))
ok
```
This is fixed by using the proper scheme name:

```rascal-shell
rascal>readFileLines(|std:///demo/basic/Hello.rsc|);
list[str]: ["@license{","  Copyright (c) 2009-2015 CWI","  All rights reserved. This program and the accompanying materials","  are made available under the terms of the Eclipse Public License v1.0","  which accompanies this distribution, and is available at","  http://www.eclipse.org/legal/epl-v10.html","}","@contributor{Jurgen J. Vinju - Jurgen.Vinju@cwi.nl - CWI}","@contributor{Paul Klint - Paul.Klint@cwi.nl - CWI}","module demo::basic::Hello","","import IO;","","void hello() {","   println(\"Hello world, this is my first Rascal program\");","}"]
```


