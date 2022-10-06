---
title: Rascal Standard Library
sidebar_position: 7.5
---

#### Synopsis

The Rascal Standard Library contains basic utility functions in relation to all built-in data structures,
reusable tools (intermediate formats) for analysis and visualization of software languages,
and language support for a number of common exchange formats and programming languages.

#### Description

The basic `Prelude` modules that contain utility functions for daily usage are right here in the 
root of the library. To include them all in one go, use the [Prelude](../Library/Prelude.md) module:


```rascal-shell 
rascal>import Prelude;
ok
rascal>println("Hello Rascal!");
Hello Rascal!
ok
```

The [IO](../Library/IO.md) module is otherwise most commonly used, because it contains [println](../Library/IO.md#IO-println).

The standard library has its own [Location](../Rascal/Expressions/Values/Location/index.md) scheme `std` which can be used to explore
its folder structure on the REPL. Note that source locations have auto-complete for the path component.


```rascal-shell 
rascal>|std:///|.ls
list[loc]: [
  |std:///String.rsc|,
  |std:///Location.rsc|,
  |std:///demo|,
  |std:///Prelude$Less.class|,
  |std:///Prelude$ReleasableCallback.class|,
  |std:///analysis|,
  |std:///Set.rsc|,
  |std:///util|,
  |std:///Node.rsc|,
  |std:///Exception.rsc|,
  |std:///Type.class|,
  |std:///Message.rsc|,
  |std:///Prelude$ByteBufferBackedInputStream.class|,
  |std:///Prelude$Sorting.class|,
  |std:///Prelude.class|,
  |std:///ValueIO.rsc|,
  |std:///Prelude$NodeComparator.class|,
  |std:///lang|,
  |std:///Type.rsc|,
  |std:///index.md|,
  |std:///Prelude$3.class|,
  |std:///Relation.rsc|,
  |std:///Prelude$Distance.class|,
  |std:///DateTime.rsc|,
  |std:///Boolean.rsc|,
  |std:///Prelude$1.class|,
  |std:///ListRelation.rsc|,
  |std:///List.rsc|,
  |std:///Prelude$4.class|,
  |std:///resource|,
  |std:///Content.rsc|,
  |std:///Grammar.rsc|,
  |std:///Prelude.rsc|,
  |std:///Prelude$Backtrack.class|,
  |std:///ParseTree.rsc|,
  |std:///Prelude$2.class|,
  |std:///IO.rsc|,
  |std:///Map.rsc|
]
```

These are the entry points to the entire library:
* [Boolean](../Library/Boolean.md)
* [Content](../Library/Content.md)
* [date time](../Library/DateTime.md)
* [Exception](../Library/Exception.md)
* [Grammar](../Library/Grammar.md)
* [IO](../Library/IO.md)
* [List](../Library/List.md)
* [list relation](../Library/ListRelation.md)
* [Location](../Library/Location.md)
* [Map](../Library/Map.md)
* [Message](../Library/Message.md)
* [Node](../Library/Node.md)
* [parse tree](../Library/ParseTree.md)
* [Prelude](../Library/Prelude.md)
* [Relation](../Library/Relation.md)
* [Set](../Library/Set.md)
* [String](../Library/String.md)
* [Type](../Library/Type.md)
* [value iO](../Library/ValueIO.md)
* [analysis](../Library/analysis/index.md)
* [demo](../Library/demo/index.md)
* [lang](../Library/lang/index.md)
* [resource](../Library/resource/index.md)
* [util](../Library/util/index.md)

#### Benefits

* The standard library comes with "batteries included", a number of reusable data-types and data-structures for building code analysis and manipulation tools. See for example [Core](../Library/analysis/m3/Core.md).
* Utility functions are sorted per data-type. So if you need something that operates on [List](../Rascal/Expressions/Values/List/index.md)then look in the [List](../Library/List.md) module of the library. For [Set](../Rascal/Expressions/Values/Set/index.md) look in [Set](../Library/Set.md), etc.
* To process [CSV](../Library/lang/csv/index.md), [XML](../Library/lang/xml/index.md), [JSON](../Library/lang/json/index.md), [YAML](../Library/lang/yaml/index.md) you will find utilities here, even support to access [SQL](../Library/resource/jdbc/JDBC.md) databases via JDBC.

#### Pitfalls

* [Prelude](../Library/Prelude.md) is a rather big collection of functions to have imported. It is sometimes better to cherry-pick the modules you need.
* Some languages in [lang](../Library/lang/index.md) are not 100% tested and up-to-date. We are extracting these one-by-one to experimental library packages.

