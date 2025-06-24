---
title: Command Completion
---

#### Synopsis

Context-dependent command completion.

#### Description

RascalShell provides context-dependent command completion.
Typing the `<TAB>` key autocompletes from the current cursor position and will show all possible completions
(or will directly add the completion when this is unique).

#### Benefits

* Auto-completion works well for incomplete ((Value-Location))s, like `|home:///` + `<TAB>` will list the contents of your home directory.
* Auto-completion knows the currently loaded modules.
* Auto-completion knows variables and function names in the scope of the ((REPL)).
