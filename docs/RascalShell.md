## Document preparation issues

The following issues have been detected while preparing this draft document. It is not ready for publication.

1. [warning] |project://rascal/src/org/rascalmpl/courses/RascalShell/Commands/Commands.md|:10,0 Ambiguous concept link: RascalShell:Commands-Test resolves to all of {"/RascalShell.md#Commands-Test","#Commands-Test"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/RascalShell/Commands/Commands.md|:10,0 Ambiguous concept link: RascalShell:Commands-Quit resolves to all of {"#Commands-Quit","/RascalShell.md#Commands-Quit"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/RascalShell/Commands/Commands.md|:10,0 Ambiguous concept link: RascalShell:Commands-Clear resolves to all of {"#Commands-Clear","/RascalShell.md#Commands-Clear"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/RascalShell/Commands/Commands.md|:10,0 Ambiguous concept link: RascalShell:Commands-Edit resolves to all of {"#Commands-Edit","/RascalShell.md#Commands-Edit"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/RascalShell/Commands/Commands.md|:10,0 Ambiguous concept link: RascalShell:Commands-Set resolves to all of {"#Commands-Set","/RascalShell.md#Commands-Set"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/RascalShell/Commands/Commands.md|:10,0 Ambiguous concept link: RascalShell:Commands-Help resolves to all of {"#Commands-Help","/RascalShell.md#Commands-Help"}
1. [error] |project://rascal/src/org/rascalmpl/courses/RascalShell/Commands/Edit/Edit.md|:12,0 Code execution failed

## Rascal Shell {#RascalShell}

### Synopsis 
The interactive Rascal commandline shell

### Details 
REPL

### Description 

The Rascal shell is an interactive console -- or if you prefer a Command Line Interface (CLI) or
Read Eval Print Loop (REPL) -- for entering and executing 
Rascal _expressions_, _statements_ and _declarations_.

Next to Rascal language expressions, the shell features a number of specific commands available
only in the shell:

* [Rascal shell:REPL](/RascalShell.md#REPL-REPL)
* [Rascal shell:Completion](/RascalShell.md#Completion-Completion)
* [Rascal shell:History](/RascalShell.md#History-History)
* [Rascal shell:Commands](/RascalShell.md#Commands-Commands)
* [Rascal shell:Keyboard](/RascalShell.md#Keyboard-Keyboard)

## Read Eval Print Loop (REPL) {#REPL-REPL}

### Synopsis 

The Rascal Read Eval Print Loop (REPL)

### Description 

The Rascal shell is an interactive console to experiment with Rascal code. You can write
your own expressions, statements and declarations right there. Or, you can import library
modules and try out their functionality.

### Examples 

Rascal code can be a trivial expression

```rascal-shell
rascal>1+2
int: 3
```
Or a more complex list comprehension:

```rascal-shell
rascal>[ n * n | int n <- [0..10] ]
list[int]: [0,1,4,9,16,25,36,49,64,81]
```
Or importing a module and using a function declared in it:

```rascal-shell
rascal>import List;
ok
rascal>size([ n * n | int n <- [0..10] ])
int: 10
```
Another use is to declare variables

```rascal-shell
rascal>int x = 2;
int: 2
rascal>int y = 3;
int: 3
```
and use them later on:

```rascal-shell
rascal>x * y
int: 6
```

### Pitfalls 

* Rascal is quite demanding as far as the proper placement of semicolons (`;`) is concerned.
* Rascal is a statically typed language but we have not released the type checker yet. Sometimes this
is confusing because the interpreter will try to run otherwise broken code and produce an error message.

## Command Completion {#Completion-Completion}

### Synopsis 
Context-dependent command completion.

### Description 

RascalShell provides context-dependent command completion.
Typing `Tab` autocompletes from the current cursor position and will show all possible completions
(or will directly add the completion when this is unique).

## Command History {#History-History}

### Synopsis 
Use the command history.

### Description 

RascalShell provides a history of previously entered commands. This can be accessed as follows:

|keystroke | description|
| ---- | ---- |
| `↑`| Show previous command in history; Type `Return` to execute it. |
| `↓` | Next command in history; Type `Return` to execute it. |
| `Ctrl+r`       |(After search text) Search backward in history. |
| `Ctrl+s`       | (After search text) Forward search in history |

### Examples 


```rascal-shell
rascal>a = 1;
int: 1
rascal>b = 2;
int: 2
rascal>c = 3;
int: 3
```
Typing `↑` will then show the text (not followed by `Return`!):

```rascal
rascal>c = 3;
```
Typing `Return` will reexecute `c = 3`.

Typing the letter `a` (the search text in this example) followed by `Ctrl+r` will show the text:

```rascal
(reverse-i-search)`a': a = 3;
```
And again, typing `Return` will re-execute `a = 3`.

## Commands {#Commands-Commands}

### Synopsis 
RascalShell commands

### Description 

The RascalShell provides several built-in commands:

* _broken:RascalShell:Commands-Test (ambiguous link)_
* _broken:RascalShell:Commands-Quit (ambiguous link)_
* _broken:RascalShell:Commands-Clear (ambiguous link)_
* _broken:RascalShell:Commands-Edit (ambiguous link)_
* _broken:RascalShell:Commands-Set (ambiguous link)_
* _broken:RascalShell:Commands-Help (ambiguous link)_

## Test Command {#Commands-Test}

### Synopsis 
Run tests.

### Syntax 
* `:test`

### Description 

Run Rascal tests. The tests in all currently imported modules are executed and the results are reported
in the terminal.

### Examples 

Execute the tests in an imported module:


```rascal-shell
rascal>import demo::basic::Factorial;
ok
rascal>test
```

Execute the tests in the `Integers` module in the Rascal test suite:

```rascal-shell
>>>>>>>test lang::rascal::tests::basic::Integers
```

## Quit Command {#Commands-Quit}

### Synopsis 
Quit the RascalShell.

### Syntax 
* `:quit`
* `Ctrl+d` or `Eof`

### Description 

Typing `:quit` or `Ctrl+d` will end the execution of the shell.

## Clear Command {#Commands-Clear}

### Synopsis 
Clear all break points.

### Syntax 
`clear`

### Description 
Removes all break points.

## Edit Command {#Commands-Edit}

### Synopsis 
Open an editor for a Rascal module

### Syntax 
* `:edit ModuleName`  

### Description 


```rascal-shell
>>>>>>>import IO;
```
:::danger
Rascal code execution failed (unexpectedly) during compilation of this documentation.
<pre>
              ^ Parse error here
</pre>
:::

```rascal-shell
ok
rascal>:edit IO
:edit IO
The current Rascal execution environment does not know how to start an editor.
ok
```

## Set Command {#Commands-Set}

### Synopsis 
Set parameters that control options of RascalShell.

### Syntax 
* `:set`
* `:set Option TrueOrFalse`

### Description 

The shell provides a number of options to control its behaviour.
The `set` command manages their value.

In the first form, the list of current settings is printed.

In the second form a specific option is set to true or false.

The options are:

* `profiling`: record execution times while executing subsequent Rascal code and print
  the results after each RascalShell command.
* `tracing`: while executing Rascal code, print a trace of all function calls.
* `errors`: print more diagnostic stack traces if available (of internal functionality)

### Examples 
Turn `tracing` on and execute a function:

```rascal-shell
rascal>import demo::basic::Factorial;
ok
rascal>:set tracing true
ok
rascal>fac(5)
fac(5)
call  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Factorial::fac(5)
call  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Factorial::fac(4)
call  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Factorial::fac(3)
call  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Factorial::fac(2)
call  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Factorial::fac(1)
call  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Factorial::fac(0)
return>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Factorial::fac:1
return>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Factorial::fac:1
return>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Factorial::fac:2
return>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Factorial::fac:6
return>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Factorial::fac:24
return>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Factorial::fac:120
int: 120
```

Turn trace off and execute the same function:


```rascal-shell
rascal>:set tracing false
ok
rascal>fac(5)
int: 120
```

### Pitfalls 
The `set` command is completely unrelated to Rascal's built-in `set` type.

## Help Command {#Commands-Help}

### Synopsis 
Get a reminder of the shell commands.

### Syntax 
* `:help`  

### Description 


```rascal-shell
rascal>:help
:help
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

## Keyboard Shortcuts {#Keyboard-Keyboard}

### Synopsis 
Keybord shortcuts.

### Description 

When handling console input, RascalShell supports a subset of the shortcuts provided by
https://en.wikipedia.org/wiki/GNU_Readline[GNU Readline]

Some convenient shortcuts are:


| `Ctrl+a`  | Move cursor to begin of line. |
| --- | --- |
| `Ctrl+d`  | EOF marker, closes the current RascalShell (equivalent to the |
   command (`quit`). |
| `Ctrl+e`  | Move cursor to end of line. |
| `Ctrl+k`  | Kill remainder of line after cursor. |
| `Ctrl+l`  | Clear screen. |

 

