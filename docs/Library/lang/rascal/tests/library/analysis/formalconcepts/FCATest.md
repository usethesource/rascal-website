---
title: "module lang::rascal::tests::library::analysis::formalconcepts::FCATest"
---

#### Usage

`import lang::rascal::tests::library::analysis::formalconcepts::FCATest;`


## data IntProperties {#lang-rascal-tests-library-analysis-formalconcepts-FCATest-IntProperties}

```rascal
data IntProperties  
     = composite()
     | even()
     | odd()
     | prime()
     | square()
     ;
```

## function numbersAreCorrect {#lang-rascal-tests-library-analysis-formalconcepts-FCATest-numbersAreCorrect}

```rascal
test bool numbersAreCorrect()

```

## function createRel {#lang-rascal-tests-library-analysis-formalconcepts-FCATest-createRel}

```rascal
rel[&TObject, &TAttribute] createRel(set[&TObject] objects, set[&TAttribute] attributes, int combine)

```

## function testNoMadeUpAttributes {#lang-rascal-tests-library-analysis-formalconcepts-FCATest-testNoMadeUpAttributes}

```rascal
test bool testNoMadeUpAttributes(set[&TObject] objects, set[&TAttribute] attributes, int combine)

```

## function checkNoMadeUpAttributes {#lang-rascal-tests-library-analysis-formalconcepts-FCATest-checkNoMadeUpAttributes}

```rascal
bool checkNoMadeUpAttributes(rel[&TObject, &TAttribute] input)

```

## function testNoUnRelatedConcepts {#lang-rascal-tests-library-analysis-formalconcepts-FCATest-testNoUnRelatedConcepts}

```rascal
test bool testNoUnRelatedConcepts(set[&TObject] objects, set[&TAttribute] attributes, int combine)

```

## function checkNoUnRelatedConcepts {#lang-rascal-tests-library-analysis-formalconcepts-FCATest-checkNoUnRelatedConcepts}

```rascal
bool checkNoUnRelatedConcepts(rel[&TObject, &TAttribute] input)

```

## function fcaHasExpectedOutput {#lang-rascal-tests-library-analysis-formalconcepts-FCATest-fcaHasExpectedOutput}

```rascal
test bool fcaHasExpectedOutput()

```

