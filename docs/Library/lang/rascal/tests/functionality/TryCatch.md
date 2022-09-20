---
title: "lang::rascal::tests::functionality::TryCatch"
---

#### Usage

`import lang::rascal::tests::functionality::TryCatch;`


## data NODEA {#lang-rascal-tests-functionality-TryCatch-NODEA}

```rascal
data NODEA  
     = fA(int N)
     ;
```

## data NODEB {#lang-rascal-tests-functionality-TryCatch-NODEB}

```rascal
data NODEB  
     = fB(int N)
     | dB(NODEB a, NODEB b)
     ;
```

## data NODEC {#lang-rascal-tests-functionality-TryCatch-NODEC}

```rascal
data NODEC  
     = fC(int N)
     | fin(value V)
     | dC(NODEC a)
     | dC(NODEC a, NODEC b)
     ;
```

## data Exception {#lang-rascal-tests-functionality-TryCatch-Exception}

```rascal
data Exception  
     = divide_by_zero()
     ;
```

## function classify {#lang-rascal-tests-functionality-TryCatch-classify}

* ``int classify(value v)``

## function duplicate {#lang-rascal-tests-functionality-TryCatch-duplicate}

* ``value duplicate(value v)``

## function dfin {#lang-rascal-tests-functionality-TryCatch-dfin}

* ``value dfin(value v)``

## function divide {#lang-rascal-tests-functionality-TryCatch-divide}

* ``int divide(int x, int y) throws divide_by_zero``

## function safeDivide {#lang-rascal-tests-functionality-TryCatch-safeDivide}

* ``int safeDivide(int x, int y)``

## function catchStackThrow {#lang-rascal-tests-functionality-TryCatch-catchStackThrow}

* ``int catchStackThrow(int i)``

## function catchStack {#lang-rascal-tests-functionality-TryCatch-catchStack}

* ``value catchStack()``

## function testCatchStack {#lang-rascal-tests-functionality-TryCatch-testCatchStack}

* ``test bool testCatchStack()``

## function testClassify1 {#lang-rascal-tests-functionality-TryCatch-testClassify1}

* ``test bool testClassify1()``

## function testClassify2 {#lang-rascal-tests-functionality-TryCatch-testClassify2}

* ``test bool testClassify2()``

## function testClassify3 {#lang-rascal-tests-functionality-TryCatch-testClassify3}

* ``test bool testClassify3()``

## function testClassify4 {#lang-rascal-tests-functionality-TryCatch-testClassify4}

* ``test bool testClassify4()``

## function testDuplicate1 {#lang-rascal-tests-functionality-TryCatch-testDuplicate1}

* ``test bool testDuplicate1()``

## function testDuplicate2 {#lang-rascal-tests-functionality-TryCatch-testDuplicate2}

* ``test bool testDuplicate2()``

## function testDuplicate3 {#lang-rascal-tests-functionality-TryCatch-testDuplicate3}

* ``test bool testDuplicate3()``

## function testDuplicate4 {#lang-rascal-tests-functionality-TryCatch-testDuplicate4}

* ``test bool testDuplicate4()``

## function testDFin1 {#lang-rascal-tests-functionality-TryCatch-testDFin1}

* ``test bool testDFin1()``

## function testDFin2 {#lang-rascal-tests-functionality-TryCatch-testDFin2}

* ``test bool testDFin2()``

## function testDFin3 {#lang-rascal-tests-functionality-TryCatch-testDFin3}

* ``test bool testDFin3()``

## function testDFin4 {#lang-rascal-tests-functionality-TryCatch-testDFin4}

* ``test bool testDFin4()``

## function testDivide1 {#lang-rascal-tests-functionality-TryCatch-testDivide1}

* ``test bool testDivide1()``

## function testDivide2 {#lang-rascal-tests-functionality-TryCatch-testDivide2}

* ``test bool testDivide2()``

## function testDivide3 {#lang-rascal-tests-functionality-TryCatch-testDivide3}

* ``test bool testDivide3()``

## function emptyListException1 {#lang-rascal-tests-functionality-TryCatch-emptyListException1}

* ``test bool emptyListException1()``

## function emptyMapException1 {#lang-rascal-tests-functionality-TryCatch-emptyMapException1}

* ``test bool emptyMapException1()``

## function emptySetException1 {#lang-rascal-tests-functionality-TryCatch-emptySetException1}

* ``test bool emptySetException1()``

## function indexOutOfBoundsException1 {#lang-rascal-tests-functionality-TryCatch-indexOutOfBoundsException1}

* ``test bool indexOutOfBoundsException1()``

## function pathNotFoundException1 {#lang-rascal-tests-functionality-TryCatch-pathNotFoundException1}

* ``test bool pathNotFoundException1()``

## function emptyTryStatement {#lang-rascal-tests-functionality-TryCatch-emptyTryStatement}

* ``test bool emptyTryStatement()``

## function emptyTryBlock {#lang-rascal-tests-functionality-TryCatch-emptyTryBlock}

* ``test bool emptyTryBlock()``

## function emptyCatchStatement1 {#lang-rascal-tests-functionality-TryCatch-emptyCatchStatement1}

* ``test bool emptyCatchStatement1()``

## function f_using_empty_catch {#lang-rascal-tests-functionality-TryCatch-f_using_empty_catch}

* ``int f_using_empty_catch()``

## function emptyCatchStatement2 {#lang-rascal-tests-functionality-TryCatch-emptyCatchStatement2}

* ``test bool emptyCatchStatement2()``

## function emptyCatchAndFinallyBlock {#lang-rascal-tests-functionality-TryCatch-emptyCatchAndFinallyBlock}

* ``test bool emptyCatchAndFinallyBlock()``

## function f_using_finally1 {#lang-rascal-tests-functionality-TryCatch-f_using_finally1}

* ``int f_using_finally1()``

## function finally1 {#lang-rascal-tests-functionality-TryCatch-finally1}

* ``test bool finally1()``

## function f_using_finally2 {#lang-rascal-tests-functionality-TryCatch-f_using_finally2}

* ``int f_using_finally2()``

## function finally2 {#lang-rascal-tests-functionality-TryCatch-finally2}

* ``test bool finally2()``

