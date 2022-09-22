---
title: "module lang::rascal::tests::basic::SolvedIssues"
---

#### Usage

`import lang::rascal::tests::basic::SolvedIssues;`


In this test module we collect test cases that are associated with bugs from the past.
This is just to make sure the bugs are not re-introduced accidentally.


## function emptySetEquals1 {#lang-rascal-tests-basic-SolvedIssues-emptySetEquals1}

* ``test bool emptySetEquals1(set[value] x, set[value] y)``

## function emptySetEquals2 {#lang-rascal-tests-basic-SolvedIssues-emptySetEquals2}

* ``test bool emptySetEquals2(map[value,value] x, map[value,value] y)``

## data X {#lang-rascal-tests-basic-SolvedIssues-X}

```rascal
data X  
     = n(set[node] nn)
     ;
```

## function infiniteMatcher {#lang-rascal-tests-basic-SolvedIssues-infiniteMatcher}

* ``test bool infiniteMatcher()``

## data Exp {#lang-rascal-tests-basic-SolvedIssues-Exp}

```rascal
data Exp  
     = a(int x, int y = 5)
     ;
```

## function inferKWparamType {#lang-rascal-tests-basic-SolvedIssues-inferKWparamType}

* ``test bool inferKWparamType()``

## function checkComparableOnElementsBreak {#lang-rascal-tests-basic-SolvedIssues-checkComparableOnElementsBreak}

* ``test bool checkComparableOnElementsBreak()``

## function nodeSetMatch {#lang-rascal-tests-basic-SolvedIssues-nodeSetMatch}

* ``test bool nodeSetMatch()``

