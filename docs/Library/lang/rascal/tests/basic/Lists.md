---
title: "module lang::rascal::tests::basic::Lists"
---

#### Usage

`import lang::rascal::tests::basic::Lists;`


## function isConcat {#lang-rascal-tests-basic-Lists-isConcat}

```rascal
bool isConcat(list[&T] A, list[&T] B, list[&T] C)

```

## function concat1 {#lang-rascal-tests-basic-Lists-concat1}

```rascal
test bool concat1(list[&T] A, list[&T] B)

```

## function concat2 {#lang-rascal-tests-basic-Lists-concat2}

```rascal
test bool concat2(     &T  A, list[&T] B)

```

## function concat3 {#lang-rascal-tests-basic-Lists-concat3}

```rascal
test bool concat3(list[&T] A,      &T  B)

```

## function isElemProperlyRemoved {#lang-rascal-tests-basic-Lists-isElemProperlyRemoved}

```rascal
bool isElemProperlyRemoved(&T x, list[&T] A, list[&T] B)

```

## function isDiff {#lang-rascal-tests-basic-Lists-isDiff}

```rascal
bool isDiff(list[&T] A, list[&T] B, list[&T] C)

```

## function diff {#lang-rascal-tests-basic-Lists-diff}

```rascal
test bool diff(list[&T] A, list[&T] B)

```

## function isEqual {#lang-rascal-tests-basic-Lists-isEqual}

```rascal
bool isEqual(list[&T] A, list[&T] B)

```

## function equal1 {#lang-rascal-tests-basic-Lists-equal1}

```rascal
test bool equal1(list[&T] A)

```

## function equal2 {#lang-rascal-tests-basic-Lists-equal2}

```rascal
test bool equal2(list[&T] A, list[&T] B)

```

## function notEqual1 {#lang-rascal-tests-basic-Lists-notEqual1}

```rascal
test bool notEqual1(list[&T] A)

```

## function notEqual2 {#lang-rascal-tests-basic-Lists-notEqual2}

```rascal
test bool notEqual2(list[&T] A, list[&T] B)

```

## function isIn {#lang-rascal-tests-basic-Lists-isIn}

```rascal
bool isIn(&T x, list[&T] L)

```

## function freq {#lang-rascal-tests-basic-Lists-freq}

```rascal
int freq(&T x, list[&T] L)

```

## function mergeOrdered {#lang-rascal-tests-basic-Lists-mergeOrdered}

```rascal
list[&T] mergeOrdered(list[&T] A, list[&T] B)

```

## function mergeUnOrdered {#lang-rascal-tests-basic-Lists-mergeUnOrdered}

```rascal
list[&T] mergeUnOrdered(list[&T] A, list[&T] B)

```

## function inList {#lang-rascal-tests-basic-Lists-inList}

```rascal
test bool inList(list[&T] A, list[&T] B)

```

## function notInList {#lang-rascal-tests-basic-Lists-notInList}

```rascal
test bool notInList(list[&T] A, &T x)

```

## function intersection {#lang-rascal-tests-basic-Lists-intersection}

```rascal
test bool intersection(list[&T] A, list[&T] B)

```

## function lesseq {#lang-rascal-tests-basic-Lists-lesseq}

```rascal
test bool lesseq(list[int] A, list[int] B)

```

## function less {#lang-rascal-tests-basic-Lists-less}

```rascal
test bool less(list[int] A, list[int] B)

```

## function greatereq {#lang-rascal-tests-basic-Lists-greatereq}

```rascal
test bool greatereq(list[int] A, list[int] B)

```

## function greater {#lang-rascal-tests-basic-Lists-greater}

```rascal
test bool greater(list[int] A, list[int] B)

```

## function splicing {#lang-rascal-tests-basic-Lists-splicing}

```rascal
test bool splicing(list[&T] A, list[&T] B)

```

## function subscription {#lang-rascal-tests-basic-Lists-subscription}

```rascal
test bool subscription(list[int] L)

```

## function subscriptionWrapped {#lang-rascal-tests-basic-Lists-subscriptionWrapped}

```rascal
test bool subscriptionWrapped(list[int] L)

```

## function sliceFirst {#lang-rascal-tests-basic-Lists-sliceFirst}

```rascal
test bool sliceFirst(list[int] L)

```

## function sliceFirst2 {#lang-rascal-tests-basic-Lists-sliceFirst2}

```rascal
test bool sliceFirst2(list[&T] L)

```

## function makeSlice {#lang-rascal-tests-basic-Lists-makeSlice}

```rascal
list[int] makeSlice(list[int] L, int f, int s, int e)

```

## function sliceFirstSecond {#lang-rascal-tests-basic-Lists-sliceFirstSecond}

```rascal
test bool sliceFirstSecond(list[int] L)

```

## function sliceEmpty {#lang-rascal-tests-basic-Lists-sliceEmpty}

```rascal
test bool sliceEmpty(int from, int to)

```

## function sliceOverEnd {#lang-rascal-tests-basic-Lists-sliceOverEnd}

```rascal
test bool sliceOverEnd()

```

## function sliceEnd {#lang-rascal-tests-basic-Lists-sliceEnd}

```rascal
test bool sliceEnd(list[int] L)

```

## function sliceSecondEnd {#lang-rascal-tests-basic-Lists-sliceSecondEnd}

```rascal
test bool sliceSecondEnd(list[int] L)

```

## function arbFirstEnd {#lang-rascal-tests-basic-Lists-arbFirstEnd}

```rascal
tuple[int,int] arbFirstEnd(list[int] L)

```

## function sliceFirstSecondEnd {#lang-rascal-tests-basic-Lists-sliceFirstSecondEnd}

```rascal
test bool sliceFirstSecondEnd(list[int] L)

```

## function sliceFirstNegative {#lang-rascal-tests-basic-Lists-sliceFirstNegative}

```rascal
test bool sliceFirstNegative(list[int] L)

```

## function sliceEndNegative {#lang-rascal-tests-basic-Lists-sliceEndNegative}

```rascal
test bool sliceEndNegative(list[int] L)

```

## function sliceFirstNegativeSecondNegative {#lang-rascal-tests-basic-Lists-sliceFirstNegativeSecondNegative}

```rascal
test bool sliceFirstNegativeSecondNegative(list[int] L)

```

## function sliceSecondNegative {#lang-rascal-tests-basic-Lists-sliceSecondNegative}

```rascal
test bool sliceSecondNegative(list[int] L)

```

## function assignSlice1 {#lang-rascal-tests-basic-Lists-assignSlice1}

```rascal
test bool assignSlice1()

```

## function assignSlice2 {#lang-rascal-tests-basic-Lists-assignSlice2}

```rascal
test bool assignSlice2()

```

## function assignSlice3 {#lang-rascal-tests-basic-Lists-assignSlice3}

```rascal
test bool assignSlice3()

```

## function assignSlice4 {#lang-rascal-tests-basic-Lists-assignSlice4}

```rascal
test bool assignSlice4()

```

## function assignStep1 {#lang-rascal-tests-basic-Lists-assignStep1}

```rascal
test bool assignStep1()

```

## function assignStep2 {#lang-rascal-tests-basic-Lists-assignStep2}

```rascal
test bool assignStep2()

```

## function assignStep3 {#lang-rascal-tests-basic-Lists-assignStep3}

```rascal
test bool assignStep3()

```

## function assignStep4 {#lang-rascal-tests-basic-Lists-assignStep4}

```rascal
test bool assignStep4()

```

## function assignStep5 {#lang-rascal-tests-basic-Lists-assignStep5}

```rascal
test bool assignStep5()

```

## function assignStep6 {#lang-rascal-tests-basic-Lists-assignStep6}

```rascal
test bool assignStep6()

```

## function assignStep7 {#lang-rascal-tests-basic-Lists-assignStep7}

```rascal
test bool assignStep7()

```

## function assignStep8 {#lang-rascal-tests-basic-Lists-assignStep8}

```rascal
test bool assignStep8()

```

## function assignStep9 {#lang-rascal-tests-basic-Lists-assignStep9}

```rascal
test bool assignStep9()

```

## function assignStep10 {#lang-rascal-tests-basic-Lists-assignStep10}

```rascal
test bool assignStep10()

```

## function assignStep11 {#lang-rascal-tests-basic-Lists-assignStep11}

```rascal
test bool assignStep11()

```

## function assignStep12 {#lang-rascal-tests-basic-Lists-assignStep12}

```rascal
test bool assignStep12()

```

## function assignStep13 {#lang-rascal-tests-basic-Lists-assignStep13}

```rascal
test bool assignStep13()

```

## function assignAdd1 {#lang-rascal-tests-basic-Lists-assignAdd1}

```rascal
test bool assignAdd1()

```

## function assignAdd2 {#lang-rascal-tests-basic-Lists-assignAdd2}

```rascal
test bool assignAdd2()

```

## function assignAdd3 {#lang-rascal-tests-basic-Lists-assignAdd3}

```rascal
test bool assignAdd3()

```

## function assignAdd4 {#lang-rascal-tests-basic-Lists-assignAdd4}

```rascal
test bool assignAdd4()

```

## function assignSub1 {#lang-rascal-tests-basic-Lists-assignSub1}

```rascal
test bool assignSub1()

```

## function assignSub2 {#lang-rascal-tests-basic-Lists-assignSub2}

```rascal
test bool assignSub2()

```

## function assignSub3 {#lang-rascal-tests-basic-Lists-assignSub3}

```rascal
test bool assignSub3()

```

## function assignSub4 {#lang-rascal-tests-basic-Lists-assignSub4}

```rascal
test bool assignSub4()

```

## function assignProd1 {#lang-rascal-tests-basic-Lists-assignProd1}

```rascal
test bool assignProd1()

```

## function assignProd2 {#lang-rascal-tests-basic-Lists-assignProd2}

```rascal
test bool assignProd2()

```

## function assignProd3 {#lang-rascal-tests-basic-Lists-assignProd3}

```rascal
test bool assignProd3()

```

## function assignProd4 {#lang-rascal-tests-basic-Lists-assignProd4}

```rascal
test bool assignProd4()

```

## function AssignFromEnd1 {#lang-rascal-tests-basic-Lists-AssignFromEnd1}

```rascal
test bool AssignFromEnd1()

```

## function AssignFromEnd2 {#lang-rascal-tests-basic-Lists-AssignFromEnd2}

```rascal
test bool AssignFromEnd2()

```

## function AssignFromEnd3 {#lang-rascal-tests-basic-Lists-AssignFromEnd3}

```rascal
test bool AssignFromEnd3()

```

## function tstDelete {#lang-rascal-tests-basic-Lists-tstDelete}

```rascal
test bool tstDelete(list[&T] L)

```

## function tstDrop {#lang-rascal-tests-basic-Lists-tstDrop}

```rascal
test bool tstDrop(list[&T] L)

```

## function tstDup {#lang-rascal-tests-basic-Lists-tstDup}

```rascal
test bool tstDup(list[&T] L)

```

## function tstGetOneFrom {#lang-rascal-tests-basic-Lists-tstGetOneFrom}

```rascal
test bool tstGetOneFrom(list[&T] L)

```

## function tstHead {#lang-rascal-tests-basic-Lists-tstHead}

```rascal
test bool tstHead(list[&T] L)

```

## function tstHeadN {#lang-rascal-tests-basic-Lists-tstHeadN}

```rascal
test bool tstHeadN(list[&T] L)

```

## function tstHeadTail {#lang-rascal-tests-basic-Lists-tstHeadTail}

```rascal
test bool tstHeadTail(list[&T] L)

```

## function tstIndex {#lang-rascal-tests-basic-Lists-tstIndex}

```rascal
test bool tstIndex(list[int] L)

```

## function tstIndexOf {#lang-rascal-tests-basic-Lists-tstIndexOf}

```rascal
test bool tstIndexOf(list[int] L)

```

## function tstInsertAt {#lang-rascal-tests-basic-Lists-tstInsertAt}

```rascal
test bool tstInsertAt(list[&T] L, &T e)

```

## function simplerIntercalateWithNegativeMatch {#lang-rascal-tests-basic-Lists-simplerIntercalateWithNegativeMatch}

```rascal
test bool simplerIntercalateWithNegativeMatch()

```

## function tstIntercalate {#lang-rascal-tests-basic-Lists-tstIntercalate}

```rascal
test bool tstIntercalate(str sep, list[value] L)

```

## function tstIsEmpty {#lang-rascal-tests-basic-Lists-tstIsEmpty}

```rascal
test bool tstIsEmpty(list[&T] L)

```

## function tstLast {#lang-rascal-tests-basic-Lists-tstLast}

```rascal
test bool tstLast(list[&T] L)

```

## function tstLastIndexOf {#lang-rascal-tests-basic-Lists-tstLastIndexOf}

```rascal
test bool tstLastIndexOf(list[int] L)

```

## function tstMapper {#lang-rascal-tests-basic-Lists-tstMapper}

```rascal
test bool tstMapper(list[int] L)

```

## function tstMax {#lang-rascal-tests-basic-Lists-tstMax}

```rascal
test bool tstMax(list[int] L)

```

## function tstMerge {#lang-rascal-tests-basic-Lists-tstMerge}

```rascal
test bool tstMerge(list[int] L, list[int] R)

```

## function tstMin {#lang-rascal-tests-basic-Lists-tstMin}

```rascal
test bool tstMin(list[int] L)

```

## function tstMix {#lang-rascal-tests-basic-Lists-tstMix}

```rascal
test bool tstMix(list[&T] L, list[&U] R)

```

## function factorial {#lang-rascal-tests-basic-Lists-factorial}

```rascal
int factorial(int n)

```

## function tstPermutations {#lang-rascal-tests-basic-Lists-tstPermutations}

```rascal
test bool tstPermutations(list[int] L)

```

## function tstPop {#lang-rascal-tests-basic-Lists-tstPop}

```rascal
test bool tstPop(list[value] L)

```

## function tstPrefix {#lang-rascal-tests-basic-Lists-tstPrefix}

```rascal
test bool tstPrefix(list[value] L)

```

## function tstPush {#lang-rascal-tests-basic-Lists-tstPush}

```rascal
test bool tstPush(value elem, list[value] L)

```

## function tstReverse {#lang-rascal-tests-basic-Lists-tstReverse}

```rascal
test bool tstReverse(list[&T] L)

```

## function tstSize {#lang-rascal-tests-basic-Lists-tstSize}

```rascal
test bool tstSize(list[&T] L)

```

## function tstSort {#lang-rascal-tests-basic-Lists-tstSort}

```rascal
test bool tstSort(list[int] L)

```

## function tstSplit {#lang-rascal-tests-basic-Lists-tstSplit}

```rascal
test bool tstSplit(list[&T] L)

```

## function tstSum {#lang-rascal-tests-basic-Lists-tstSum}

```rascal
test bool tstSum(list[int] L)

```

## function tstTail {#lang-rascal-tests-basic-Lists-tstTail}

```rascal
test bool tstTail(list[&T] L)

```

## function tstTailN {#lang-rascal-tests-basic-Lists-tstTailN}

```rascal
test bool tstTailN(list[&T] L)

```

## function tstTake {#lang-rascal-tests-basic-Lists-tstTake}

```rascal
test bool tstTake(list[&T] L)

```

## function tstTakeOneFrom {#lang-rascal-tests-basic-Lists-tstTakeOneFrom}

```rascal
test bool tstTakeOneFrom(list[int] L)

```

## function isEven {#lang-rascal-tests-basic-Lists-isEven}

```rascal
bool isEven(int a)

```

## function takeEven {#lang-rascal-tests-basic-Lists-takeEven}

```rascal
list[int] takeEven(list[int] L)

```

## function tstTakeWhile {#lang-rascal-tests-basic-Lists-tstTakeWhile}

```rascal
test bool tstTakeWhile(list[int] L)

```

## function tstToMapUnique {#lang-rascal-tests-basic-Lists-tstToMapUnique}

```rascal
test bool tstToMapUnique(list[tuple[&A, &B]] L)

```

## function tstTop {#lang-rascal-tests-basic-Lists-tstTop}

```rascal
test bool tstTop(list[&T] L)

```

## function tstToRel {#lang-rascal-tests-basic-Lists-tstToRel}

```rascal
test bool tstToRel(list[&T] L)

```

## function tstToSet {#lang-rascal-tests-basic-Lists-tstToSet}

```rascal
test bool tstToSet(list[&T] L)

```

## function tstToString {#lang-rascal-tests-basic-Lists-tstToString}

```rascal
test bool tstToString(list[value] L)

```

## function tstUnzip2 {#lang-rascal-tests-basic-Lists-tstUnzip2}

```rascal
test bool tstUnzip2(list[tuple[&A, &B]] L)

```

## function tstUnzip3 {#lang-rascal-tests-basic-Lists-tstUnzip3}

```rascal
test bool tstUnzip3(list[tuple[&A, &B, &C]] L)

```

## function tstUpTill {#lang-rascal-tests-basic-Lists-tstUpTill}

```rascal
test bool tstUpTill(int n)

```

## function tstZip {#lang-rascal-tests-basic-Lists-tstZip}

```rascal
test bool tstZip(list[&T] L)

```

## function dtstSlice {#lang-rascal-tests-basic-Lists-dtstSlice}

```rascal
test bool dtstSlice(list[&T] lst)

```

## function dtstDelete {#lang-rascal-tests-basic-Lists-dtstDelete}

```rascal
test bool dtstDelete(list[&T] lst)

```

## function dtstDrop {#lang-rascal-tests-basic-Lists-dtstDrop}

```rascal
test bool dtstDrop(list[&T] lst)

```

## function dtstHead {#lang-rascal-tests-basic-Lists-dtstHead}

```rascal
test bool dtstHead(list[&T] lst)

```

## function dtstTail {#lang-rascal-tests-basic-Lists-dtstTail}

```rascal
test bool dtstTail(list[&T] lst)

```

## function dtstPrefix {#lang-rascal-tests-basic-Lists-dtstPrefix}

```rascal
test bool dtstPrefix(list[&T] lst)

```

## function dtstDifference {#lang-rascal-tests-basic-Lists-dtstDifference}

```rascal
test bool dtstDifference(list[&T] lst)

```

## function dtstIntersection {#lang-rascal-tests-basic-Lists-dtstIntersection}

```rascal
test bool dtstIntersection(list[&T] lst)

```

