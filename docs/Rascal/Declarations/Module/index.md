---
title: Module Declaration
keywords:
  - module

sidebar_position: 0
---

#### Synopsis

Declare a module.

#### Syntax

```rascal
module Package::Name      ❶  

Import₁      ❷  
Extend₁ 
...
Importₙ
Extendₙ

SyntaxDefinition₁      ❸  
...
SyntaxDefinition₂

Declaration₁      ❹  
...
Declarationₙ
```

#### Description

A module declaration consists of:

* ❶   A module name consisting of `::`-separated package names followed by `::Name`
* ❷  Zero or more [Import](../../../Rascal/Declarations/Import/index.md)s or [Extend](../../../Rascal/Declarations/Extend/index.md)s
* ❸  Zero or more [syntax definition](../../../Rascal/Declarations/SyntaxDefinition/index.md)s
* ❹  Zero or more declarations of [Variable](../../../Rascal/Declarations/Variable/index.md)s, [./Function](../../../Rascal/Declarations/Function/index.md)s or [./algebraic data type](../../../Rascal/Declarations/AlgebraicDataType/index.md)s

The [Import](../../../Rascal/Declarations/Import/index.md), [Extend](../../../Rascal/Declarations/Extend/index.md) and [syntax definition](../../../Rascal/Declarations/SyntaxDefinition/index.md) are positioned at the top of the module because they are used internally to generate parsers for the [./concrete syntax](../../../Rascal/Expressions/ConcreteSyntax/index.md), [Patterns](../../../Rascal/Patterns/index.md) and [Expressions](../../../Rascal/Expressions/index.md) used in [Variable](../../../Rascal/Declarations/Variable/index.md)s, [./Function](../../../Rascal/Declarations/Function/index.md)s and [./algebraic data type](../../../Rascal/Declarations/AlgebraicDataType/index.md)s.

The module name _Name_ will be used when the current module is imported in another module. 
A module name is in general a qualified name of the form:
```rascal
_Name₁_::_Name₂_:: ... ::_Nameₙ_
```
which corresponds to a path relative to the root of the current workspace.

The constituents of a module are shown in the figure below.

![module-parts.png](/assets/Rascal/Declarations/Module/module-parts.png)


An [Import](../../../Rascal/Declarations/Import/index.md) declares other modules that are used by the current module.
Following imports, a module may contain declarations (in arbitrary order, but a [Syntax Definition](../../../Rascal/Declarations/SyntaxDefinition/index.md) can
occur directly following the imports) for:

*  [Syntax Definition](../../../Rascal/Declarations/SyntaxDefinition/index.md)
*  [Variable](../../../Rascal/Declarations/Variable/index.md)
*  [Function](../../../Rascal/Declarations/Function/index.md)
*  [./Algebraic Data Type](../../../Rascal/Declarations/AlgebraicDataType/index.md)
*  [Alias](../../../Rascal/Declarations/Alias/index.md)
*  [Annotation](../../../Rascal/Declarations/Annotation/index.md)
*  [Tag](../../../Rascal/Declarations/Tag/index.md)


Each declaration may contain a `private` or `public` keyword that determines 
the _visibility_ of the declared entity. 

The entities that are _visible inside_ a module are

*  The private or public entities declared in the module itself.

*  The public entities declared in any imported module.


The only entities that are _visible outside_ the module, are the public entities declared in the module itself. If different imported modules declare the same visible name, it can be disambiguated by explicitly qualifying it with its module name:

```rascal
_Module_ :: _Name_
```

Each module resides in a separate file with extension `.rsc`.

#### Examples

Here is the `Hello` module:


```rascal 

module demo::basic::Hello

import IO;

void hello() {
   println("Hello world, this is my first Rascal program!");
}

```

                
It defines a module with the name `demo::basic::Hello` and imports the [IO](../../../Library/IO.md) library.
Finally, it declares the `hello` function.

The actual source of this module can be found in `library/demo/basic/Hello.rsc` in the Rascal sources.

More ways to write this example are discussed in the [Hello](../../../Recipes/Basic/Hello/index.md) example in [Recipes](../../../Recipes/index.md).


