---
title: ModuleImport
---

#### Synopsis

A Rascal module could not be imported.

#### Syntax

#### Types

#### Function
       
#### Usage

#### Description

Rascal programs are split up in modules.
An [import]((Rascal:Declarations-Import)) declaration is used to include one module in another.
This error indicates that a module import failed.
This can be caused by 

*  A misspelled name in the import statement.
*  Starting a Rascal console from the wrong directory.


Remedies:

*  Correct the mispelled name.
*  At the command line, change directory to where the toplevel module of your program is located and then execute the Rascal Shell.

#### Examples

Here is a correct import of the library module `List`:
```rascal-shell
import List;
```
Here is the effect of a misspelled module name (assuming that you do not have a module `Lis`):
```rascal-shell,error
import Lis;
```

#### Benefits

#### Pitfalls

