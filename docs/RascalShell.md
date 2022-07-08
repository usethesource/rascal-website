---
sidebar_position: 7
title: Rascal Shell
---

**Synopsis.**

The interactive Rascal commandline shell

**Description.**

The Rascal shell is an interactive console — or if you prefer a Command Line Interface (CLI) or Read Eval Print Loop
(REPL) — for entering and executing Rascal *expressions*, *statements* and *declarations*.

Next to Rascal language expressions, the shell features a number of specific commands available only in the shell:

  - [Read Eval Print Loop (REPL)](#RascalShell-REPL):

  - [Commands](#RascalShell-Commands): RascalShell commands.

  - [Command Completion](#RascalShell-Completion): Context-dependent command completion.

  - [Command History](#RascalShell-History): Use the command history.

  - [Keyboard Shortcuts](#RascalShell-Keyboard): Keybord shortcuts.

## Read Eval Print Loop (REPL)

**Synopsis.**

The Rascal Read Eval Print Loop (REPL)

**Description.**

The Rascal shell is an interactive console to experiment with Rascal code. You can write your own expressions,
statements and declarations right there. Or, you can import library modules and try out their functionality.

**Examples.**

Rascal code can be a trivial expression

```rascal-shell
1+2
```

Or a more complex list comprehension:

```rascal-shell
[ n * n | int n <- [0..10] ]
```

Or importing a module and using a function declared in it:

```rascal-shell
import List;
size([ n * n | int n <- [0..10] ])
```

Another use is to declare variables

```rascal-shell
int x = 2;
int y = 3;
```

and use them later on:

```rascal-shell
x * y
```

  - Rascal is quite demanding as far as the proper placement of semicolons (`;`) is concerned.

  - Rascal is a statically typed language but we have not released the type checker yet. Sometimes this is confusing
    because the interpreter will try to run otherwise broken code and produce an error message.

## Commands

**Synopsis.**

RascalShell commands

**Description.**

The RascalShell provides several built-in commands:

  - [Clear Command](#Commands-Clear): Clear all break points.

  - [Edit Command](#Commands-Edit): Open an editor for a Rascal module.

  - [Help Command](#Commands-Help): Get a reminder of the shell commands.

  - [Quit Command](#Commands-Quit): Quit the RascalShell.

  - [Set Command](#Commands-Set): Set parameters that control options of RascalShell.

  - [Test Command](#Commands-Test): Run tests.

### Clear Command

**Synopsis.**

Clear all break points.

**Syntax.**

`clear`

**Description.**

Removes all break points.

### Edit Command

**Synopsis.**

Open an editor for a Rascal module

  - `:edit ModuleName`

**Description.**

```rascal-shell
import IO;
:edit IO
```

### Help Command

**Synopsis.**

Get a reminder of the shell commands.

  - `:help`

**Description.**

```rascal-shell
:help
```

### Quit Command

**Synopsis.**

Quit the RascalShell.

  - `:quit`

  - <span class="keycombo">Ctrl+d</span> or Eof

**Description.**

Typing `:quit` or <span class="keycombo">Ctrl+d</span> will end the execution of the shell.

### Set Command

**Synopsis.**

Set parameters that control options of RascalShell.

  - `:set`

  - `:set Option TrueOrFalse`

**Description.**

The shell provides a number of options to control its behaviour. The `set` command manages their value.

In the first form, the list of current settings is printed.

In the second form a specific option is set to true or false.

The options are:

  - `profiling`: record execution times while executing subsequent Rascal code and print the results after each
    RascalShell command.

  - `tracing`: while executing Rascal code, print a trace of all function calls.

  - `errors`: print more diagnostic stack traces if available (of internal functionality)

**Examples.**

Turn `tracing` on and execute a function:

```rascal-shell
import demo::basic::Factorial;
:set tracing true
fac(5)
```

Turn trace off and execute the same function:

```rascal-shell
:set tracing false
fac(5)
```

**Pitfalls.**

The `set` command is completely unrelated to Rascal’s built-in `set` type.

### Test Command

**Synopsis.**

Run tests.

  - `:test`

**Description.**

Run Rascal tests. The tests in all currently imported modules are executed and the results are reported in the terminal.

**Examples.**

Execute the tests in an imported module:

```rascal-shell
import demo::basic::Factorial;
test
```

Execute the tests in the `Integers` module in the Rascal test suite:

```rascal-shell
test lang::rascal::tests::basic::Integers
```

## Command Completion

**Synopsis.**

Context-dependent command completion.

**Description.**

RascalShell provides context-dependent command completion. Typing Tab autocompletes from the current cursor position and
will show all possible completions (or will directly add the completion when this is unique).

## Command History

**Synopsis.**

Use the command history.

**Description.**

RascalShell provides a history of previously entered commands. This can be accessed as follows:

|                                      |                                                              |
| ------------------------------------ | ------------------------------------------------------------ |
| ↑                                    | Show previous command in history; Type Return to execute it. |
| ↓                                    | Next command in history; Type Return to execute it.          |
| <span class="keycombo">Ctrl+r</span> | (After search text) Search backward in history.              |
| <span class="keycombo">Ctrl+s</span> | (After search text) Forward search in history                |

**Examples.**

```rascal-shell
a = 1;
b = 2;
c = 3;
```

Typing ↑ will then show the text (not followed by Return\!):

```rascal
rascal>c = 3;
```

Typing Return will reexecute `c = 3`.

Typing the letter `a` (the search text in this example) followed by <span class="keycombo">Ctrl+r</span> will show the
text:

```rascal
(reverse-i-search)`a': a = 3;
```

And again, typing Return will reexecute `a = 3`.

## Keyboard Shortcuts

**Synopsis.**

Keybord shortcuts.

**Description.**

When handling console input, RascalShell supports a subset of the shortcuts provided by [GNU
Readline](https://en.wikipedia.org/wiki/GNU_Readline)

Some convenient shortcuts are:

|                                      |                                                                                 |
| ------------------------------------ | ------------------------------------------------------------------------------- |
| <span class="keycombo">Ctrl+a</span> | Move cursor to begin of line.                                                   |
| <span class="keycombo">Ctrl+d</span> | EOF marker, closes the current RascalShell (equivalent to the command (`quit`). |
| <span class="keycombo">Ctrl+e</span> | Move cursor to end of line.                                                     |
| <span class="keycombo">Ctrl+k</span> | Kill remainder of line after cursor.                                            |
| <span class="keycombo">Ctrl+l</span> | Clear screen.                                                                   |
