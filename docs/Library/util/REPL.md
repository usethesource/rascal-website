---
title: "module util::REPL"
---

#### Usage

`import util::REPL;`


## alias Completion {#util-REPL-Completion}

* `tuple[int offset, list[str] suggestions]`

## data REPL {#util-REPL-REPL}

```rascal
data REPL  
     = repl(
     str title = "", 
     str welcome = "", 
     str prompt = "\n\>",
     str quit = "", 
     loc history = |home:///.term-repl-history|, 
     Content (str command) handler = echo,
     Completion(str line, int cursor) completor = noSuggestions,
     str () stacktrace = str () { return ""; }
   )
     ;
```

## function echo {#util-REPL-echo}

* ``Content echo(str line)``

## function noSuggestions {#util-REPL-noSuggestions}

* ``Completion noSuggestions(str _, int _)``

## alias Terminal {#util-REPL-Terminal}

* `tuple[void() run, void(str) send]`

## function newREPL {#util-REPL-newREPL}

* ``Terminal newREPL(REPL repl,       // filling in defaults from the repl constructor, for use in the Java code:   str title = repl.title,    str welcome = repl.welcome,    str prompt = repl.prompt,    str quit = repl.quit,   loc history = repl.history,   Content (str ) handler = repl.handler,   Completion(str , int) completor = repl.completor,   str () stacktrace = repl.stacktrace)``

## function startREPL {#util-REPL-startREPL}

* ``void startREPL(REPL repl,       // filling in defaults from the repl constructor, for use in the Java code:   str title = repl.title,    str welcome = repl.welcome,    str prompt = repl.prompt,    str quit = repl.quit,   loc history = repl.history,   Content (str ) handler = repl.handler,   Completion(str , int) completor = repl.completor,   str () stacktrace = repl.stacktrace)``

