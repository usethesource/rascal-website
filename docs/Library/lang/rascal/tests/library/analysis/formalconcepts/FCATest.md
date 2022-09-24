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

* ``test bool numbersAreCorrect()``

## function createRel {#lang-rascal-tests-library-analysis-formalconcepts-FCATest-createRel}

* ``rel[&TObject, &TAttribute] createRel(set[&TObject] objects, set[&TAttribute] attributes, int combine)``

## function testNoMadeUpAttributes {#lang-rascal-tests-library-analysis-formalconcepts-FCATest-testNoMadeUpAttributes}

* ``test bool testNoMadeUpAttributes(set[&TObject] objects, set[&TAttribute] attributes, int combine)``

## function checkNoMadeUpAttributes {#lang-rascal-tests-library-analysis-formalconcepts-FCATest-checkNoMadeUpAttributes}

* ``bool checkNoMadeUpAttributes(rel[&TObject, &TAttribute] input)``

## function testNoUnRelatedConcepts {#lang-rascal-tests-library-analysis-formalconcepts-FCATest-testNoUnRelatedConcepts}

* ``test bool testNoUnRelatedConcepts(set[&TObject] objects, set[&TAttribute] attributes, int combine)``

## function checkNoUnRelatedConcepts {#lang-rascal-tests-library-analysis-formalconcepts-FCATest-checkNoUnRelatedConcepts}

* ``bool checkNoUnRelatedConcepts(rel[&TObject, &TAttribute] input)``

## function fcaHasExpectedOutput {#lang-rascal-tests-library-analysis-formalconcepts-FCATest-fcaHasExpectedOutput}

* ``test bool fcaHasExpectedOutput()``

