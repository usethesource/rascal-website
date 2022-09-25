---
title: "module lang::rascal::tutor::repl::TutorCommandExecutor"
---

#### Usage

`import lang::rascal::tutor::repl::TutorCommandExecutor;`


## data CommandExecutor {#lang-rascal-tutor-repl-TutorCommandExecutor-CommandExecutor}

```rascal
data CommandExecutor  
     = executor(
        PathConfig pcfg,
        str () prompt,
        void () reset,
        map[str mimeType, str content] (str command) eval
  )
     ;
```

#### Synopsis

A closure-based object wrapper for Rascal REPL

#### Description


Using an instance of CommandExecutor you can simulate the exact interactions
between a Rascal [REPL](../../../../../RascalShell/REPL/index.md) user and the REPL. 

This was created to implement documentation pages with example REPL runs.

## function createExecutor {#lang-rascal-tutor-repl-TutorCommandExecutor-createExecutor}

* ``CommandExecutor createExecutor(PathConfig pcfg)``

#### Synopsis

Instantiates a [command executor](../../../../../Library/lang/rascal/tutor/repl/TutorCommandExecutor.md#lang::rascal::tutor::repl::TutorCommandExecutor-CommandExecutor) to simulate a REPL

#### Examples


It's funny that the current example is also executed by a CommandExecutor of the tutor compiler.
Here we use to show how it works:

```rascal-shell
import lang::rascal::tutor::repl::TutorCommandExecutor;
import util::Reflective;
e = createExecutor(pathConfig());
// now we can find the current prompt:
e.prompt();
// and evaluate an assignment
e.eval("x = 1;");
// look what a continuation prompt looks like:
e.eval("println(\"abc\"")
e.prompt()
// finish the command we started
e.eval(")")

## function executorSmokeTest {#lang-rascal-tutor-repl-TutorCommandExecutor-executorSmokeTest}

* ``test bool executorSmokeTest()``

