---
title: "module lang::rascal::grammar::definition::Names"
---

#### Usage

`import lang::rascal::grammar::definition::Names;`


## function resolve {#lang-rascal-grammar-definition-Names-resolve}

* ``Grammar resolve(Grammar d)``

All uses of names are initially labeled 'sort', while declarations put
them in four classes: normal, lex, keywords and layout. This function will
mark all uses accordingly such that the proper interpretation can be done
by semantic processing of parse trees

## function unescape {#lang-rascal-grammar-definition-Names-unescape}

* ``str unescape(str name)``

