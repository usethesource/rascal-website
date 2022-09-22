---
title: "module analysis::grammars::Dependency"
---

#### Usage

`import analysis::grammars::Dependency;`


## function symbolDependencies {#analysis-grammars-Dependency-symbolDependencies}

* ``Graph[Symbol] symbolDependencies(Grammar g)``
* ``Graph[Symbol] symbolDependencies(GrammarDefinition d)``


  Compute the symbol dependency graph. This graph does not report intermediate nodes
  for regular expressions.

## function delabel {#analysis-grammars-Dependency-delabel}

* ``Symbol delabel(label(_, Symbol t))``
* ``default Symbol delabel(Symbol x)``

