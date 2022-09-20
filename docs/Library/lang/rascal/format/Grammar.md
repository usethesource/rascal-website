---
title: "lang::rascal::format::Grammar"
---

#### Usage

`import lang::rascal::format::Grammar;`


  Convert the Rascal internal grammar representation format (Grammar) to 
  a syntax definition in Rascal source code.


## function definition2disk {#lang-rascal-format-Grammar-definition2disk}

* ``void definition2disk(loc prefix, GrammarDefinition def)``

## function definition2rascal {#lang-rascal-format-Grammar-definition2rascal}

* ``str definition2rascal(GrammarDefinition def)``

## function module2rascal {#lang-rascal-format-Grammar-module2rascal}

* ``str module2rascal(GrammarModule m)``

## function grammar2rascal {#lang-rascal-format-Grammar-grammar2rascal}

* ``str grammar2rascal(Grammar g, str name)``
* ``str grammar2rascal(Grammar g)``

## function cleanIdentifiers {#lang-rascal-format-Grammar-cleanIdentifiers}

* ``Grammar cleanIdentifiers(Grammar g)``

## function grammar2rascal {#lang-rascal-format-Grammar-grammar2rascal}

* ``str grammar2rascal(Grammar g, list[Symbol] _/*nonterminals*/)``

## function same {#lang-rascal-format-Grammar-same}

* ``bool same(Production p, Production q)``

## function topProd2rascal {#lang-rascal-format-Grammar-topProd2rascal}

* ``str topProd2rascal(Production p)``

## function layoutname {#lang-rascal-format-Grammar-layoutname}

* ``str layoutname(Symbol s)``

## function alt2r {#lang-rascal-format-Grammar-alt2r}

* ``str alt2r(Symbol _def, Production p, str sep = "=")``

## function alt2rascal {#lang-rascal-format-Grammar-alt2rascal}

* ``str alt2rascal(Production p:prod(def,_,_))``
* ``str alt2rascal(Production p:priority(def,_))``
* ``str alt2rascal(Production p:\associativity(def,a,_))``
* ``str alt2rascal(Production p:regular(_))``
* ``default str alt2rascal(Production p)``

## function prod2rascal {#lang-rascal-format-Grammar-prod2rascal}

* ``str prod2rascal(Production p)``

## function associativity {#lang-rascal-format-Grammar-associativity}

* ``str associativity(\left())``
* ``str associativity(\right())``
* ``str associativity(\assoc())``
* ``str associativity(\non-assoc())``

## function reserved {#lang-rascal-format-Grammar-reserved}

* ``str reserved(str name)``

## function noAttrs {#lang-rascal-format-Grammar-noAttrs}

* ``test bool noAttrs()``

## function AttrsAndCons {#lang-rascal-format-Grammar-AttrsAndCons}

* ``test bool AttrsAndCons()``

## function CC {#lang-rascal-format-Grammar-CC}

* ``test bool CC()``

## function Prio {#lang-rascal-format-Grammar-Prio}

* ``test bool Prio()``

## function attr2mod {#lang-rascal-format-Grammar-attr2mod}

* ``str attr2mod(Attr a)``

## function symbol2rascal {#lang-rascal-format-Grammar-symbol2rascal}

* ``str symbol2rascal(Symbol sym)``

## function iterseps2rascal {#lang-rascal-format-Grammar-iterseps2rascal}

* ``str iterseps2rascal(Symbol sym, list[Symbol] seps, str iter)``

## function params2rascal {#lang-rascal-format-Grammar-params2rascal}

* ``str params2rascal(list[Symbol] params)``

## function cc2rascal {#lang-rascal-format-Grammar-cc2rascal}

* ``str cc2rascal(list[CharRange] ranges)``

## function range2rascal {#lang-rascal-format-Grammar-range2rascal}

* ``str range2rascal(CharRange r)``

