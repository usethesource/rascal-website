---
title: "module lang::java::\\syntax::Java18"
---

#### Usage

`import lang::java::\syntax::Java18;`


This Java grammar is based on the following references:

* https://docs.oracle.com/javase/specs/jls/se8/html/jls-19.html
* https://github.com/antlr/grammars-v4/blob/master/java8/Java8.g4
* Rascal Java15 grammar

#### Benefits

* the grammar is well-annotated with the source information

#### Pitfalls

* the grammar contains too many non-terminals for the expression sub-language (priorities and associativities
are still encoded with non-terminals)
* same for the Statements; too many non-terminals for handy use with concrete-syntax patterns
* the grammar is not well tested


