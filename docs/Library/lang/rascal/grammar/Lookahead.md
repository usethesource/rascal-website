---
title: "lang::rascal::grammar::Lookahead"
---

#### Usage

`import lang::rascal::grammar::Lookahead;`


## data Production {#lang-rascal-grammar-Lookahead-Production}

```rascal
data Production  
     = lookahead(Symbol def, set[Symbol] classes, Production production)
     ;
```

## data Symbol {#lang-rascal-grammar-Lookahead-Symbol}

```rascal
data Symbol  
     = eoi()
     ;
```

## data Grammar {#lang-rascal-grammar-Lookahead-Grammar}

```rascal
data Grammar  
     = simple(set[Symbol] starts, set[Production] productions)
     ;
```

## function computeLookaheads {#lang-rascal-grammar-Lookahead-computeLookaheads}

* ``Grammar computeLookaheads(Grammar G, rel[Symbol,Symbol] extra)``


  This function wraps productions with their single character lookahead sets for 
  parser generation.
  
  'extra' contains extra lookahead symbols per symbol

## function compileLookaheads {#lang-rascal-grammar-Lookahead-compileLookaheads}

* ``Grammar compileLookaheads(Grammar G)``


  This function evaluates lookahead sets to obtain an optimal production selection automaton
  As a side-effect it also needs to replace priority ordering and associativity by the simple choice operator!  

## function order {#lang-rascal-grammar-Lookahead-order}

* ``list[CharRange] order(list[CharRange] x)``

## function optimizeLookaheads {#lang-rascal-grammar-Lookahead-optimizeLookaheads}

* ``Production optimizeLookaheads(Symbol rhs, set[Production] alts)``

## function optimizeLookaheadsOld {#lang-rascal-grammar-Lookahead-optimizeLookaheadsOld}

* ``Production optimizeLookaheadsOld(Symbol rhs, set[Production] alts)``

## function intersect {#lang-rascal-grammar-Lookahead-intersect}

* ``set[Symbol] intersect(set[Symbol] u1, set[Symbol] u2)``

## function diff {#lang-rascal-grammar-Lookahead-diff}

* ``set[Symbol] diff(set[Symbol] u1, set[Symbol] u2)``

## function removeLabels {#lang-rascal-grammar-Lookahead-removeLabels}

* ``Grammar removeLabels(Grammar G)``

## function removeLabel {#lang-rascal-grammar-Lookahead-removeLabel}

* ``Symbol removeLabel(Symbol s)``

## function removeLabels {#lang-rascal-grammar-Lookahead-removeLabels}

* ``list[Symbol] removeLabels(list[Symbol] syms)``

## function usedSymbols {#lang-rascal-grammar-Lookahead-usedSymbols}

* ``set[Symbol] usedSymbols(Grammar G)``

## function definedSymbols {#lang-rascal-grammar-Lookahead-definedSymbols}

* ``set[Symbol] definedSymbols(Grammar G)``

## function terminalSymbols {#lang-rascal-grammar-Lookahead-terminalSymbols}

* ``set[Symbol] terminalSymbols(Grammar G)``

## alias SymbolUse {#lang-rascal-grammar-Lookahead-SymbolUse}

* `map[Symbol, set[Symbol]]`

## function first {#lang-rascal-grammar-Lookahead-first}

* ``set[Symbol] first(list[Symbol] symbols, SymbolUse FIRST)``
* ``SymbolUse first(Grammar G)``

## function follow {#lang-rascal-grammar-Lookahead-follow}

* ``SymbolUse follow(Grammar G,  SymbolUse FIRST)``

## function firstAndFollow {#lang-rascal-grammar-Lookahead-firstAndFollow}

* ``tuple[SymbolUse, SymbolUse] firstAndFollow(Grammar G)``

## function mergeCC {#lang-rascal-grammar-Lookahead-mergeCC}

* ``SymbolUse mergeCC(SymbolUse su)``
* ``set[Symbol] mergeCC(set[Symbol] su)``

