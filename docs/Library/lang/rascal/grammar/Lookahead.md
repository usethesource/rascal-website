---
title: "module lang::rascal::grammar::Lookahead"
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

```rascal
Grammar computeLookaheads(Grammar G, rel[Symbol,Symbol] extra)

```


  This function wraps productions with their single character lookahead sets for 
  parser generation.
  
  'extra' contains extra lookahead symbols per symbol

## function compileLookaheads {#lang-rascal-grammar-Lookahead-compileLookaheads}

```rascal
Grammar compileLookaheads(Grammar G)

```


  This function evaluates lookahead sets to obtain an optimal production selection automaton
  As a side-effect it also needs to replace priority ordering and associativity by the simple choice operator!  

## function order {#lang-rascal-grammar-Lookahead-order}

```rascal
list[CharRange] order(list[CharRange] x)

```

## function optimizeLookaheads {#lang-rascal-grammar-Lookahead-optimizeLookaheads}

```rascal
Production optimizeLookaheads(Symbol rhs, set[Production] alts)

```

## function optimizeLookaheadsOld {#lang-rascal-grammar-Lookahead-optimizeLookaheadsOld}

```rascal
Production optimizeLookaheadsOld(Symbol rhs, set[Production] alts)

```

## function intersect {#lang-rascal-grammar-Lookahead-intersect}

```rascal
set[Symbol] intersect(set[Symbol] u1, set[Symbol] u2)

```

## function diff {#lang-rascal-grammar-Lookahead-diff}

```rascal
set[Symbol] diff(set[Symbol] u1, set[Symbol] u2)

```

## function removeLabels {#lang-rascal-grammar-Lookahead-removeLabels}

```rascal
Grammar removeLabels(Grammar G)

```

## function removeLabel {#lang-rascal-grammar-Lookahead-removeLabel}

```rascal
Symbol removeLabel(Symbol s)

```

## function removeLabels {#lang-rascal-grammar-Lookahead-removeLabels}

```rascal
list[Symbol] removeLabels(list[Symbol] syms)

```

## function usedSymbols {#lang-rascal-grammar-Lookahead-usedSymbols}

```rascal
set[Symbol] usedSymbols(Grammar G)

```

## function definedSymbols {#lang-rascal-grammar-Lookahead-definedSymbols}

```rascal
set[Symbol] definedSymbols(Grammar G)

```

## function terminalSymbols {#lang-rascal-grammar-Lookahead-terminalSymbols}

```rascal
set[Symbol] terminalSymbols(Grammar G)

```

## alias SymbolUse {#lang-rascal-grammar-Lookahead-SymbolUse}

```rascal
map[Symbol, set[Symbol]]

```

## function first {#lang-rascal-grammar-Lookahead-first}

```rascal
set[Symbol] first(list[Symbol] symbols, SymbolUse FIRST)

SymbolUse first(Grammar G)

```

## function follow {#lang-rascal-grammar-Lookahead-follow}

```rascal
SymbolUse follow(Grammar G,  SymbolUse FIRST)

```

## function firstAndFollow {#lang-rascal-grammar-Lookahead-firstAndFollow}

```rascal
tuple[SymbolUse, SymbolUse] firstAndFollow(Grammar G)

```

## function mergeCC {#lang-rascal-grammar-Lookahead-mergeCC}

```rascal
SymbolUse mergeCC(SymbolUse su)

set[Symbol] mergeCC(set[Symbol] su)

```

