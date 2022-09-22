---
title: "module lang::rascal::grammar::analyze::Dependency"
---

#### Usage

`import lang::rascal::grammar::analyze::Dependency;`


## function symbolDependencies {#lang-rascal-grammar-analyze-Dependency-symbolDependencies}

* ``Graph[Symbol] symbolDependencies(Grammar g)``
* ``Graph[Symbol] symbolDependencies(GrammarDefinition d)``


  Compute the symbol dependency graph. This graph does not report intermediate nodes
  for regular expressions.

