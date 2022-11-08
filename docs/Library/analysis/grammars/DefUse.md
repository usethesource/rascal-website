---
title: "module analysis::grammars::DefUse"
---

#### Usage

`import analysis::grammars::DefUse;`


## function definable {#analysis-grammars-DefUse-definable}

```rascal
bool definable(Symbol s)

```

## function usedAndDefined {#analysis-grammars-DefUse-usedAndDefined}

```rascal
tuple[set[Symbol] used, set[Symbol] defined] usedAndDefined(Grammar g)

```

## function usedNotDefined {#analysis-grammars-DefUse-usedNotDefined}

```rascal
set[Symbol] usedNotDefined(Grammar g)

```

## function definedNotUsed {#analysis-grammars-DefUse-definedNotUsed}

```rascal
set[Symbol] definedNotUsed(Grammar g)

```

