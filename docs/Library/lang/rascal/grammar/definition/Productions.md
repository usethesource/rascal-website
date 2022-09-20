---
title: "lang::rascal::grammar::definition::Productions"
---

#### Usage

`import lang::rascal::grammar::definition::Productions;`


## function syntax2grammar {#lang-rascal-grammar-definition-Productions-syntax2grammar}

* ``Grammar syntax2grammar(set[SyntaxDefinition] defs)``

## function rule2prod {#lang-rascal-grammar-definition-Productions-rule2prod}

* ``tuple[set[Production] prods, Maybe[Symbol] \start] rule2prod(SyntaxDefinition sd)``

## function prod2prod {#lang-rascal-grammar-definition-Productions-prod2prod}

* ``Production prod2prod(Symbol nt, Prod p)``

## function associativity {#lang-rascal-grammar-definition-Productions-associativity}

* ``Production associativity(Symbol nt, nothing(), Production p)``
* ``default Production associativity(Symbol nt, just(Associativity a), Production p)``

