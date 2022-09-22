---
title: Rascal Standard Library
---

#### Synopsis

The Rascal Standard Library contains basic utility functions in relation to all built-in data structures,
reusable tools (intermediate formats) for analysis and visualization of software languages,
and language support for a number of common exchange formats and programming languages.

#### Description

The basic `Prelude` modules that contain utility functions for daily usage are right here in the 
root of the library. To include them all in one go, use the [Prelude](../Library/Prelude) module:


```rascal-shell
rascal>import Prelude;
ok
rascal>println("Hello Rascal!");
println("Hello Rascal!");
Hello Rascal!
ok
```

The [Library:module:IO](../Library/IO) module is otherwise most commonly used, because it contains [println](../Library/IO#IO-println).


#### Benefits

* The standard library comes with "batteries included", a number of reusable data-types and data-structures for building code analysis and manipulation tools. See for example [analysis::m3::Core](../Library/analysis/m3/Core).
* Utility functions are sorted per data-type. So if you need something that operates on [List](../Rascal/Expressions/Values/List)then look in the [Library:module:List](../Library/List) module of the library. For [Set](../Rascal/Expressions/Values/Set) look in [Library:module:Set](../Library/Set), etc.
* To process [CSV](../Library/lang/csv/index.md), [XML](lang::xml)), [JSON](lang::json), [YAML](lang::yaml) you will find utilities here, even support to access [SQL](../Library/resource/jdbc/JDBC.md) databases via JDBC.

#### Pitfalls

* [Prelude](../Library/Prelude) is a rather big collection of functions to have imported. It is sometimes better to cherry-pick the modules you need.
* Some languages in [Library:package:lang](../Library/lang/index.md) are not 100% tested and up-to-date. We are extracting these one-by-one to experimental library packages.

