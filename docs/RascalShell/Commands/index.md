---
title: Commands
sidebar_position: 3
---

#### Synopsis

RascalShell commands

#### Description

The RascalShell provides several built-in commands:

* [Clear](../../RascalShell/Commands/Clear/index.md)
* [Edit](../../RascalShell/Commands/Edit/index.md)
* [Help](../../RascalShell/Commands/Help/index.md)
* [Quit](../../RascalShell/Commands/Quit/index.md)
* [Set](../../RascalShell/Commands/Set/index.md)
* [Test](../../RascalShell/Commands/Test/index.md)

Next to these commands, the shell accepts all toplevel module [Declarations](../../Rascal/Declarations/index.md), [Statements](../../Rascal/Statements/index.md) and [Expressions](../../Rascal/Expressions/index.md).

#### Examples

Here we just show some random shell commands:


```rascal-shell 
rascal>int a = 0; // statement
int: 0
rascal>int f(int i) = 2 * i; // function declaration
int (int): function(|prompt:///|(0,21,<1,0>,<1,21>))
rascal>syntax Exp = Exp "+" Exp; // syntax declaration
ok
rascal>f(2) * f(2) // expression
int: 16
rascal>:help // builtin command
:help // builtin command
Welcome to the Rascal command shell.

Shell commands:
:help                      Prints this message
:quit or EOF               Quits the shell
:set <option> <expression> Sets an option
e.g. profiling    true/false
     tracing      true/false
     errors       true/false
:edit <modulename>         Opens an editor for that module
:test                      Runs all unit tests currently loaded

Example rascal statements and declarations:
1 + 1;                     Expressions simply print their output and (static) type
int a;                     Declarations allocate a name in the current scope
a = 1;                     Assignments store a value in a (optionally previously declared) variable
int a = 1;                 Declaration with initialization
import IO;                 Importing a module makes its public members available
println("Hello World")     Function calling

Please read the manual for further information
ok
```

