---
title: "module lang::rascal::tests::basic::Sets"
---

#### Usage

`import lang::rascal::tests::basic::Sets;`


## function eqSet {#lang-rascal-tests-basic-Sets-eqSet}

```rascal
test bool eqSet(value a, value b)

```

## function elemInAorB {#lang-rascal-tests-basic-Sets-elemInAorB}

```rascal
bool elemInAorB(&T x, set[&T] A, set[&T] B)

```

## function isUnion {#lang-rascal-tests-basic-Sets-isUnion}

```rascal
bool isUnion(set[&T] A, set[&T] B, set[&T] C)

```

## function union1 {#lang-rascal-tests-basic-Sets-union1}

```rascal
test bool union1(set[&T] A, set[&T] B)

```

## function union2 {#lang-rascal-tests-basic-Sets-union2}

```rascal
test bool union2(     &T A, set[&T] B)

```

## function union3 {#lang-rascal-tests-basic-Sets-union3}

```rascal
test bool union3(set[&T] A,      &T B)

```

## function elemInAandNotInB {#lang-rascal-tests-basic-Sets-elemInAandNotInB}

```rascal
bool elemInAandNotInB(&T x, set[&T] A, set[&T] B)

```

## function isDiff {#lang-rascal-tests-basic-Sets-isDiff}

```rascal
bool isDiff(set[&T] A, set[&T] B, set[&T] C)

```

## function diff {#lang-rascal-tests-basic-Sets-diff}

```rascal
test bool diff(set[&T] A, set[&T] B)

```

## function isEqual {#lang-rascal-tests-basic-Sets-isEqual}

```rascal
bool isEqual(set[&T] A, set[&T] B)

```

## function equal1 {#lang-rascal-tests-basic-Sets-equal1}

```rascal
test bool equal1(set[&T] A)

```

## function equal2 {#lang-rascal-tests-basic-Sets-equal2}

```rascal
test bool equal2(set[int] A, set[int] B)

```

## function notEqual1 {#lang-rascal-tests-basic-Sets-notEqual1}

```rascal
test bool notEqual1(set[&T] A)

```

## function notEqual2 {#lang-rascal-tests-basic-Sets-notEqual2}

```rascal
test bool notEqual2(set[int] A, set[int] B)

```

## function intersection {#lang-rascal-tests-basic-Sets-intersection}

```rascal
test bool intersection(set[&T] A, set[&T] B)

```

## function lesseq {#lang-rascal-tests-basic-Sets-lesseq}

```rascal
test bool lesseq(set[int] A, set[int] B)

```

## function less {#lang-rascal-tests-basic-Sets-less}

```rascal
test bool less(set[int] A, set[int] B)

```

## function greatereq {#lang-rascal-tests-basic-Sets-greatereq}

```rascal
test bool greatereq(set[int] A, set[int] B)

```

## function greater {#lang-rascal-tests-basic-Sets-greater}

```rascal
test bool greater(set[int] A, set[int] B)

```

## function tst_in {#lang-rascal-tests-basic-Sets-tst_in}

```rascal
test bool tst_in(int A, set[int] B)

```

## function tst_notin {#lang-rascal-tests-basic-Sets-tst_notin}

```rascal
test bool tst_notin(int A, set[int] B)

```

## function splicing {#lang-rascal-tests-basic-Sets-splicing}

```rascal
test bool splicing(set[&T] A, set[&T] B)

```

## function similar {#lang-rascal-tests-basic-Sets-similar}

```rascal
bool similar(int a, int b)

```

## function getClass {#lang-rascal-tests-basic-Sets-getClass}

```rascal
int getClass(int a)

```

## function tst_classify {#lang-rascal-tests-basic-Sets-tst_classify}

```rascal
test bool tst_classify(set[int] S)

```

## function tst_getOneFrom {#lang-rascal-tests-basic-Sets-tst_getOneFrom}

```rascal
test bool tst_getOneFrom(set[&A] S)

```

## function tst_group1 {#lang-rascal-tests-basic-Sets-tst_group1}

```rascal
test bool tst_group1(set[int] S)

```

## function tst_group2 {#lang-rascal-tests-basic-Sets-tst_group2}

```rascal
test bool tst_group2(set[int] S)

```

## function tst_index1 {#lang-rascal-tests-basic-Sets-tst_index1}

```rascal
test bool tst_index1(set[int] S)

```

## function tst_index2 {#lang-rascal-tests-basic-Sets-tst_index2}

```rascal
test bool tst_index2(set[int] S)

```

## function tst_index3 {#lang-rascal-tests-basic-Sets-tst_index3}

```rascal
test bool tst_index3(set[int] S)

```

## function tst_max {#lang-rascal-tests-basic-Sets-tst_max}

```rascal
test bool tst_max(set[int] S)

```

## function tst_min {#lang-rascal-tests-basic-Sets-tst_min}

```rascal
test bool tst_min(set[int] S)

```

## function tst_size {#lang-rascal-tests-basic-Sets-tst_size}

```rascal
test bool tst_size(set[int] S)

```

## function tst_sort {#lang-rascal-tests-basic-Sets-tst_sort}

```rascal
test bool tst_sort(set[int] S)

```

## function tst_sum {#lang-rascal-tests-basic-Sets-tst_sum}

```rascal
test bool tst_sum(set[int] S)

```

## function tst_takeOneFrom {#lang-rascal-tests-basic-Sets-tst_takeOneFrom}

```rascal
test bool tst_takeOneFrom(set[int] S)

```

## function tst_toList {#lang-rascal-tests-basic-Sets-tst_toList}

```rascal
test bool tst_toList(set[int] S)

```

## function tst_toMap {#lang-rascal-tests-basic-Sets-tst_toMap}

```rascal
test bool tst_toMap(rel[int, int] S)

```

## data X {#lang-rascal-tests-basic-Sets-X}

```rascal
data X  
     = y(int y)
     ;
```

## function tst_toMapUnique {#lang-rascal-tests-basic-Sets-tst_toMapUnique}

```rascal
test bool tst_toMapUnique(set[int] D, set[int] R)

```

## function dtstDifference {#lang-rascal-tests-basic-Sets-dtstDifference}

```rascal
test bool dtstDifference(set[&T] s)

```

## function dtstIntersection {#lang-rascal-tests-basic-Sets-dtstIntersection}

```rascal
test bool dtstIntersection(set[&T] s)

```

