---
title: "module lang::rascal::tests::functionality::TryCatch"
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

```rascal
int classify(value v)

```

## function duplicate {#lang-rascal-tests-functionality-TryCatch-duplicate}

```rascal
value duplicate(value v)

```

## function dfin {#lang-rascal-tests-functionality-TryCatch-dfin}

```rascal
value dfin(value v)

```

## function divide {#lang-rascal-tests-functionality-TryCatch-divide}

```rascal
int divide(int x, int y) throws divide_by_zero

```

## function safeDivide {#lang-rascal-tests-functionality-TryCatch-safeDivide}

```rascal
int safeDivide(int x, int y)

```

## function catchStackThrow {#lang-rascal-tests-functionality-TryCatch-catchStackThrow}

```rascal
int catchStackThrow(int i)

```

## function catchStack {#lang-rascal-tests-functionality-TryCatch-catchStack}

```rascal
value catchStack()

```

## function testCatchStack {#lang-rascal-tests-functionality-TryCatch-testCatchStack}

```rascal
test bool testCatchStack()

```

## function testClassify1 {#lang-rascal-tests-functionality-TryCatch-testClassify1}

```rascal
test bool testClassify1()

```

## function testClassify2 {#lang-rascal-tests-functionality-TryCatch-testClassify2}

```rascal
test bool testClassify2()

```

## function testClassify3 {#lang-rascal-tests-functionality-TryCatch-testClassify3}

```rascal
test bool testClassify3()

```

## function testClassify4 {#lang-rascal-tests-functionality-TryCatch-testClassify4}

```rascal
test bool testClassify4()

```

## function testDuplicate1 {#lang-rascal-tests-functionality-TryCatch-testDuplicate1}

```rascal
test bool testDuplicate1()

```

## function testDuplicate2 {#lang-rascal-tests-functionality-TryCatch-testDuplicate2}

```rascal
test bool testDuplicate2()

```

## function testDuplicate3 {#lang-rascal-tests-functionality-TryCatch-testDuplicate3}

```rascal
test bool testDuplicate3()

```

## function testDuplicate4 {#lang-rascal-tests-functionality-TryCatch-testDuplicate4}

```rascal
test bool testDuplicate4()

```

## function testDFin1 {#lang-rascal-tests-functionality-TryCatch-testDFin1}

```rascal
test bool testDFin1()

```

## function testDFin2 {#lang-rascal-tests-functionality-TryCatch-testDFin2}

```rascal
test bool testDFin2()

```

## function testDFin3 {#lang-rascal-tests-functionality-TryCatch-testDFin3}

```rascal
test bool testDFin3()

```

## function testDFin4 {#lang-rascal-tests-functionality-TryCatch-testDFin4}

```rascal
test bool testDFin4()

```

## function testDivide1 {#lang-rascal-tests-functionality-TryCatch-testDivide1}

```rascal
test bool testDivide1()

```

## function testDivide2 {#lang-rascal-tests-functionality-TryCatch-testDivide2}

```rascal
test bool testDivide2()

```

## function testDivide3 {#lang-rascal-tests-functionality-TryCatch-testDivide3}

```rascal
test bool testDivide3()

```

## function emptyListException1 {#lang-rascal-tests-functionality-TryCatch-emptyListException1}

```rascal
test bool emptyListException1()

```

## function emptyMapException1 {#lang-rascal-tests-functionality-TryCatch-emptyMapException1}

```rascal
test bool emptyMapException1()

```

## function emptySetException1 {#lang-rascal-tests-functionality-TryCatch-emptySetException1}

```rascal
test bool emptySetException1()

```

## function indexOutOfBoundsException1 {#lang-rascal-tests-functionality-TryCatch-indexOutOfBoundsException1}

```rascal
test bool indexOutOfBoundsException1()

```

## function pathNotFoundException1 {#lang-rascal-tests-functionality-TryCatch-pathNotFoundException1}

```rascal
test bool pathNotFoundException1()

```

## function emptyTryStatement {#lang-rascal-tests-functionality-TryCatch-emptyTryStatement}

```rascal
test bool emptyTryStatement()

```

## function emptyTryBlock {#lang-rascal-tests-functionality-TryCatch-emptyTryBlock}

```rascal
test bool emptyTryBlock()

```

## function emptyCatchStatement1 {#lang-rascal-tests-functionality-TryCatch-emptyCatchStatement1}

```rascal
test bool emptyCatchStatement1()

```

## function f_using_empty_catch {#lang-rascal-tests-functionality-TryCatch-f_using_empty_catch}

```rascal
int f_using_empty_catch()

```

## function emptyCatchStatement2 {#lang-rascal-tests-functionality-TryCatch-emptyCatchStatement2}

```rascal
test bool emptyCatchStatement2()

```

## function emptyCatchAndFinallyBlock {#lang-rascal-tests-functionality-TryCatch-emptyCatchAndFinallyBlock}

```rascal
test bool emptyCatchAndFinallyBlock()

```

## function f_using_finally1 {#lang-rascal-tests-functionality-TryCatch-f_using_finally1}

```rascal
int f_using_finally1()

```

## function finally1 {#lang-rascal-tests-functionality-TryCatch-finally1}

```rascal
test bool finally1()

```

## function f_using_finally2 {#lang-rascal-tests-functionality-TryCatch-f_using_finally2}

```rascal
int f_using_finally2()

```

## function finally2 {#lang-rascal-tests-functionality-TryCatch-finally2}

```rascal
test bool finally2()

```

