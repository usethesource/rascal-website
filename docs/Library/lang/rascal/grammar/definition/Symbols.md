---
title: "lang::rascal::grammar::definition::Symbols"
---

#### Usage

`import lang::rascal::grammar::definition::Symbols;`


## function striprec {#lang-rascal-grammar-definition-Symbols-striprec}

* ``default Symbol striprec(Symbol s_ori)``

## function strip {#lang-rascal-grammar-definition-Symbols-strip}

* ``Symbol strip(label(str _, Symbol s))``
* ``Symbol strip(conditional(Symbol s, set[Condition] _))``
* ``default Symbol strip(Symbol s)``

## function match {#lang-rascal-grammar-definition-Symbols-match}

* ``bool match(Symbol checked, Symbol referenced)``

## function delabel {#lang-rascal-grammar-definition-Symbols-delabel}

* ``Symbol delabel(Symbol s)``

## function sym2symbol {#lang-rascal-grammar-definition-Symbols-sym2symbol}

* ``Symbol sym2symbol(Sym sym)``

## function args2symbols {#lang-rascal-grammar-definition-Symbols-args2symbols}

* ``list[Symbol] args2symbols(Sym* args)``

## function separgs2symbols {#lang-rascal-grammar-definition-Symbols-separgs2symbols}

* ``list[Symbol] separgs2symbols({Sym ","}+ args)``

## function \seq {#lang-rascal-grammar-definition-Symbols-\seq}

* ``Symbol \seq([*Symbol a, \seq(list[Symbol] b), *Symbol c])``

## function \alt {#lang-rascal-grammar-definition-Symbols-\alt}

* ``Symbol \alt({*Symbol a, \alt(set[Symbol] b)})``

## function \conditional {#lang-rascal-grammar-definition-Symbols-\conditional}

* ``Symbol \conditional(\conditional(Symbol s, set[Condition] cs1), set[Condition] cs2)``
* ``Symbol \conditional(Symbol s, set[Condition] cs)``

