---
title: "module lang::rascal::tests::functionality::VisitOptimized"
---

#### Usage

`import lang::rascal::tests::functionality::VisitOptimized;`


## data Bool {#lang-rascal-tests-functionality-VisitOptimized-Bool}

```rascal
data Bool  
     = \true()
     | \false()
     | \and(Bool lhs, Bool rhs)
     | \or(Bool lhs, Bool rhs)
     | \not(Bool arg)
     | \cond(Bool cond, Bool lhs, Bool rhs)
     | \null()
     ;
```

## function reduce {#lang-rascal-tests-functionality-VisitOptimized-reduce}

```rascal
Bool reduce(Bool b)

```

## function normal {#lang-rascal-tests-functionality-VisitOptimized-normal}

```rascal
bool normal(\false())

bool normal(\true())

bool normal(null())

default bool normal(Bool _)

```

## function allExamplesNormalAfterVisit {#lang-rascal-tests-functionality-VisitOptimized-allExamplesNormalAfterVisit}

```rascal
test bool allExamplesNormalAfterVisit()

```

