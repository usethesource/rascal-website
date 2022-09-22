---
title: Rascal Standard Library
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
println("Hello Rascal!");
Hello Rascal!
ok
```

The [Library:module:IO](../Library/IO.md) module is otherwise most commonly used, because it contains [println](../Library/IO.md#IO-println).

The standard library has its own [Location](../Rascal/Expressions/Values/Location) scheme `std` which can be used to explore
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
  |std:///Traversal.rsc|,
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
* [Library:Analysis](../Library/analysis/index.md)
* [Library:Demo](../Library/demo/index.md)
* [Library:Index](../Library/lang/rascal/tutor/Indexer.md#lang::rascal::tutor::Indexer-Index)
* [Library:Lang](../Library/lang/index.md)
* [Library:Resource](../Library/resource/index.md)
* [Library:Util](../Library/util/index.md)
* [Library:module:Boolean](../Library/Boolean.md)
* [Library:module:Content](../Library/Content.md)
* [Library:module:Date time](../Library/DateTime.md)
* [Library:module:Exception](../Library/Exception.md)
* [Library:module:Grammar](../Library/Grammar.md)
* [Library:module:IO](../Library/IO.md)
* [Library:module:List](../Library/List.md)
* [Library:module:List relation](../Library/ListRelation.md)
* [Library:module:Location](../Library/Location.md)
* [Library:module:Map](../Library/Map.md)
* [Library:module:Message](../Library/Message.md)
* [Library:module:Node](../Library/Node.md)
* [Library:module:Parse tree](../Library/ParseTree.md)
* [Library:module:Prelude](../Library/Prelude.md)
* [Library:module:Relation](../Library/Relation.md)
* [Library:module:Set](../Library/Set.md)
* [Library:module:String](../Library/String.md)
* [Library:module:Traversal](../Library/Traversal.md)
* [Library:module:Type](../Library/Type.md)
* [Library:module:Value iO](../Library/ValueIO.md)

#### Benefits

* The standard library comes with "batteries included", a number of reusable data-types and data-structures for building code analysis and manipulation tools. See for example [analysis::m3::Core](../Library/analysis/m3/Core.md).
* Utility functions are sorted per data-type. So if you need something that operates on [List](../Rascal/Expressions/Values/List)then look in the [Library:module:List](../Library/List.md) module of the library. For [Set](../Rascal/Expressions/Values/Set) look in [Library:module:Set](../Library/Set.md), etc.
* To process [CSV](../Library/lang/csv/index.md), [XML](../Library/lang/xml/index.md), [JSON](../Library/lang/json/index.md), [YAML](../Library/lang/yaml/index.md) you will find utilities here, even support to access [SQL](../Library/resource/jdbc/JDBC.md) databases via JDBC.

#### Pitfalls

* [Prelude](../Library/Prelude.md) is a rather big collection of functions to have imported. It is sometimes better to cherry-pick the modules you need.
* Some languages in [Library:package:lang](../Library/lang/index.md) are not 100% tested and up-to-date. We are extracting these one-by-one to experimental library packages.

