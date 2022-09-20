---
title: "lang::rascal::grammar::definition::Regular"
---

#### Usage

`import lang::rascal::grammar::definition::Regular;`


## function expandRegularSymbols {#lang-rascal-grammar-definition-Regular-expandRegularSymbols}

* ``Grammar expandRegularSymbols(Grammar G)``

## function expand {#lang-rascal-grammar-definition-Regular-expand}

* ``set[Production] expand(Symbol s)``

## function makeRegularStubs {#lang-rascal-grammar-definition-Regular-makeRegularStubs}

* ``Grammar makeRegularStubs(Grammar g)``
* ``set[Production] makeRegularStubs(set[Production] prods)``

## function getRegular {#lang-rascal-grammar-definition-Regular-getRegular}

* ``set[Symbol] getRegular(Symbol s)``

## function isRegular {#lang-rascal-grammar-definition-Regular-isRegular}

* ``default bool isRegular(Symbol s)``
* ``bool isRegular(opt(Symbol _))``
* ``bool isRegular(iter(Symbol _))``
* ``bool isRegular(\iter-star(Symbol _))``
* ``bool isRegular(\iter-seps(Symbol _, list[Symbol] _))``
* ``bool isRegular(\iter-star-seps(Symbol _, list[Symbol] _))``
* ``bool isRegular(alt(set[Symbol] _))``
* ``bool isRegular(seq(list[Symbol] _))``
* ``bool isRegular(empty())``

