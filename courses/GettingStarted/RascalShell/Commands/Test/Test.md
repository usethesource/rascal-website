---
title: Test Command
---

#### Synopsis

Run tests.

#### Syntax

* `:test`

#### Description

Run Rascal tests. The tests in all currently imported modules are executed and the results are reported
in the terminal.

#### Examples

Execute the tests in an imported module:

```rascal-shell
import lang::rascal::tests::library::String;
:test
```

