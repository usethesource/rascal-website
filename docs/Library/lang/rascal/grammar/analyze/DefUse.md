---
title: "module lang::rascal::grammar::analyze::DefUse"
---

#### Usage

`import lang::rascal::grammar::analyze::DefUse;`


## function definable {#lang-rascal-grammar-analyze-DefUse-definable}

```rascal
bool definable(Symbol s)

```

## function usedAndDefined {#lang-rascal-grammar-analyze-DefUse-usedAndDefined}

```rascal
tuple[set[Symbol] used, set[Symbol] defined] usedAndDefined(Grammar g)

```

## function usedNotDefined {#lang-rascal-grammar-analyze-DefUse-usedNotDefined}

```rascal
set[Symbol] usedNotDefined(Grammar g)

```

## function definedNotUsed {#lang-rascal-grammar-analyze-DefUse-definedNotUsed}

```rascal
set[Symbol] definedNotUsed(Grammar g)

```

