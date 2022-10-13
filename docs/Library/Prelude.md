---
title: "module Prelude"
---

#### Usage

`import Prelude;`

#### Synopsis

All basic utility functions in one handy module to import

#### Description


Unlike the module name suggests the Prelude module is _not_ automatically imported when Rascal is started.
All it is, is a handy combination of extended modules that will provide the utility functions most
Rascal programmers need in the [rascal shell](../../../../../../../../../RascalShell/index.md) or when scripting a module.

Prelude combines the following modules:

*  [Boolean](../../../../../../../../../Library/Boolean.md)
*  [date time](../../../../../../../../../Library/DateTime.md)
*  [Exception](../../../../../../../../../Library/Exception.md)
*  [IO](../../../../../../../../../Library/IO.md)
*  [List](../../../../../../../../../Library/List.md)
*  [Map](../../../../../../../../../Library/Map.md)
*  [Node](../../../../../../../../../Library/Node.md)
*  [parse tree](../../../../../../../../../Library/ParseTree.md)
*  [Relation](../../../../../../../../../Library/Relation.md)
*  [Set](../../../../../../../../../Library/Set.md)
*  [String](../../../../../../../../../Library/String.md)
*  [value iO](../../../../../../../../../Library/ValueIO.md)

#### Examples



```rascal-shell 
rascal>import Prelude;
ok
rascal>println("Hello World"); // from IO
Hello World
ok
rascal>size([1,2,3])           // from List
int: 3
rascal>size({1,2,1})           // from Set
int: 2
```

#### Benefits


* Prelude uses the [module extend](../../../../../../../../../Rascal/Declarations/Module/index.md) mechanism to make all the feature of the extended modules transitively available to an importing module.

#### Pitfalls


* Prelude combines many many function names and so the namespace of modules that import it is a bit crowded.


