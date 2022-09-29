---
title: Help at the command line
keywords:
  - help
  - quit
  - exit

sidebar_position: 0
---

#### Synopsis

Get help when using Rascal at the command line (CLI, REPL, [rascal shell](../../RascalShell/index.md))

#### Description

While using the command line interface you can get help like so:


```rascal-shell 
rascal>:help
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

To quit the repl use `:quit`
  

