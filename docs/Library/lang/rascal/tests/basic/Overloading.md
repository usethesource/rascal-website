---
title: "module lang::rascal::tests::basic::Overloading"
---

#### Usage

`import lang::rascal::tests::basic::Overloading;`


## function overloading1 {#lang-rascal-tests-basic-Overloading-overloading1}

* ``test bool overloading1()``

## function overloading2 {#lang-rascal-tests-basic-Overloading-overloading2}

* ``test bool overloading2()``

## data D {#lang-rascal-tests-basic-Overloading-D}

```rascal
data D  
     = d(str s)
     | d(int n)
     | d()
     ;
```

## function constructorDynamicMatch {#lang-rascal-tests-basic-Overloading-constructorDynamicMatch}

* ``test bool constructorDynamicMatch()``

triggers issue #1234

## data D3 {#lang-rascal-tests-basic-Overloading-D3}

```rascal
data D3  
     = d3(str s)
     | d3(int n)
     | d3()
     ;
```

## function overloading3a {#lang-rascal-tests-basic-Overloading-overloading3a}

* ``test bool overloading3a()``

## function overloading3b {#lang-rascal-tests-basic-Overloading-overloading3b}

* ``test bool overloading3b()``

## function overloadingDynamicCall {#lang-rascal-tests-basic-Overloading-overloadingDynamicCall}

* ``test bool overloadingDynamicCall()``

## data D4 {#lang-rascal-tests-basic-Overloading-D4}

```rascal
data D4  
     = d4(str s)
     | d4(int n)
     | d4()
     ;
```

## function overloadingMatcha {#lang-rascal-tests-basic-Overloading-overloadingMatcha}

* ``test bool overloadingMatcha()``

## function overloadingMatchb {#lang-rascal-tests-basic-Overloading-overloadingMatchb}

* ``test bool overloadingMatchb()``

## function overloadingPlusBacktracking1 {#lang-rascal-tests-basic-Overloading-overloadingPlusBacktracking1}

* ``test bool overloadingPlusBacktracking1()``

## function overloadingPlusBacktracking2 {#lang-rascal-tests-basic-Overloading-overloadingPlusBacktracking2}

* ``test bool overloadingPlusBacktracking2()``

## function overloadingPlusPolymorphism1 {#lang-rascal-tests-basic-Overloading-overloadingPlusPolymorphism1}

* ``test bool overloadingPlusPolymorphism1()``

## function overloadingPlusPolymorphism2 {#lang-rascal-tests-basic-Overloading-overloadingPlusPolymorphism2}

* ``test bool overloadingPlusPolymorphism2()``

## function overloadingPlusVarArgs {#lang-rascal-tests-basic-Overloading-overloadingPlusVarArgs}

* ``test bool overloadingPlusVarArgs()``

## function overloadingPlusVarArgsSpecialCase {#lang-rascal-tests-basic-Overloading-overloadingPlusVarArgsSpecialCase}

* ``test bool overloadingPlusVarArgsSpecialCase()``

## function singletonSetWithMap {#lang-rascal-tests-basic-Overloading-singletonSetWithMap}

* ``bool singletonSetWithMap({()})``
* ``default bool singletonSetWithMap(value _)``

## function callSingletonSetWithMap {#lang-rascal-tests-basic-Overloading-callSingletonSetWithMap}

* ``test bool callSingletonSetWithMap()``

## data F {#lang-rascal-tests-basic-Overloading-F}

```rascal
data F  
     = fff(str s, int n)
     | fff(int n, str s)
     ;
```

## function getN1 {#lang-rascal-tests-basic-Overloading-getN1}

* ``int getN1(fff(str s, n))``

## function getN2 {#lang-rascal-tests-basic-Overloading-getN2}

* ``int getN2(fff(n, str s))``

## function overloadedCons1 {#lang-rascal-tests-basic-Overloading-overloadedCons1}

* ``test bool overloadedCons1(str s, int n)``

## function overloadedCons2 {#lang-rascal-tests-basic-Overloading-overloadedCons2}

* ``test bool overloadedCons2(str s, int n)``

