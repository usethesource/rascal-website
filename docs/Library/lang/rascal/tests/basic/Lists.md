---
title: "lang::rascal::tests::basic::Lists"
---

#### Usage

`import lang::rascal::tests::basic::Lists;`


## function isConcat {#lang-rascal-tests-basic-Lists-isConcat}

* ``bool isConcat(list[&T] A, list[&T] B, list[&T] C)``

## function concat1 {#lang-rascal-tests-basic-Lists-concat1}

* ``test bool concat1(list[&T] A, list[&T] B)``

## function concat2 {#lang-rascal-tests-basic-Lists-concat2}

* ``test bool concat2(     &T  A, list[&T] B)``

## function concat3 {#lang-rascal-tests-basic-Lists-concat3}

* ``test bool concat3(list[&T] A,      &T  B)``

## function isElemProperlyRemoved {#lang-rascal-tests-basic-Lists-isElemProperlyRemoved}

* ``bool isElemProperlyRemoved(&T x, list[&T] A, list[&T] B)``

## function isDiff {#lang-rascal-tests-basic-Lists-isDiff}

* ``bool isDiff(list[&T] A, list[&T] B, list[&T] C)``

## function diff {#lang-rascal-tests-basic-Lists-diff}

* ``test bool diff(list[&T] A, list[&T] B)``

## function isEqual {#lang-rascal-tests-basic-Lists-isEqual}

* ``bool isEqual(list[&T] A, list[&T] B)``

## function equal1 {#lang-rascal-tests-basic-Lists-equal1}

* ``test bool equal1(list[&T] A)``

## function equal2 {#lang-rascal-tests-basic-Lists-equal2}

* ``test bool equal2(list[&T] A, list[&T] B)``

## function notEqual1 {#lang-rascal-tests-basic-Lists-notEqual1}

* ``test bool notEqual1(list[&T] A)``

## function notEqual2 {#lang-rascal-tests-basic-Lists-notEqual2}

* ``test bool notEqual2(list[&T] A, list[&T] B)``

## function isIn {#lang-rascal-tests-basic-Lists-isIn}

* ``bool isIn(&T x, list[&T] L)``

## function freq {#lang-rascal-tests-basic-Lists-freq}

* ``int freq(&T x, list[&T] L)``

## function mergeOrdered {#lang-rascal-tests-basic-Lists-mergeOrdered}

* ``list[&T] mergeOrdered(list[&T] A, list[&T] B)``

## function mergeUnOrdered {#lang-rascal-tests-basic-Lists-mergeUnOrdered}

* ``list[&T] mergeUnOrdered(list[&T] A, list[&T] B)``

## function inList {#lang-rascal-tests-basic-Lists-inList}

* ``test bool inList(list[&T] A, list[&T] B)``

## function notInList {#lang-rascal-tests-basic-Lists-notInList}

* ``test bool notInList(list[&T] A, &T x)``

## function intersection {#lang-rascal-tests-basic-Lists-intersection}

* ``test bool intersection(list[&T] A, list[&T] B)``

## function lesseq {#lang-rascal-tests-basic-Lists-lesseq}

* ``test bool lesseq(list[int] A, list[int] B)``

## function less {#lang-rascal-tests-basic-Lists-less}

* ``test bool less(list[int] A, list[int] B)``

## function greatereq {#lang-rascal-tests-basic-Lists-greatereq}

* ``test bool greatereq(list[int] A, list[int] B)``

## function greater {#lang-rascal-tests-basic-Lists-greater}

* ``test bool greater(list[int] A, list[int] B)``

## function splicing {#lang-rascal-tests-basic-Lists-splicing}

* ``test bool splicing(list[&T] A, list[&T] B)``

## function subscription {#lang-rascal-tests-basic-Lists-subscription}

* ``test bool subscription(list[int] L)``

## function subscriptionWrapped {#lang-rascal-tests-basic-Lists-subscriptionWrapped}

* ``test bool subscriptionWrapped(list[int] L)``

## function sliceFirst {#lang-rascal-tests-basic-Lists-sliceFirst}

* ``test bool sliceFirst(list[int] L)``

## function sliceFirst2 {#lang-rascal-tests-basic-Lists-sliceFirst2}

* ``test bool sliceFirst2(list[&T] L)``

## function makeSlice {#lang-rascal-tests-basic-Lists-makeSlice}

* ``list[int] makeSlice(list[int] L, int f, int s, int e)``

## function sliceFirstSecond {#lang-rascal-tests-basic-Lists-sliceFirstSecond}

* ``test bool sliceFirstSecond(list[int] L)``

## function sliceEmpty {#lang-rascal-tests-basic-Lists-sliceEmpty}

* ``test bool sliceEmpty(int from, int to)``

## function sliceOverEnd {#lang-rascal-tests-basic-Lists-sliceOverEnd}

* ``test bool sliceOverEnd()``

## function sliceEnd {#lang-rascal-tests-basic-Lists-sliceEnd}

* ``test bool sliceEnd(list[int] L)``

## function sliceSecondEnd {#lang-rascal-tests-basic-Lists-sliceSecondEnd}

* ``test bool sliceSecondEnd(list[int] L)``

## function arbFirstEnd {#lang-rascal-tests-basic-Lists-arbFirstEnd}

* ``tuple[int,int] arbFirstEnd(list[int] L)``

## function sliceFirstSecondEnd {#lang-rascal-tests-basic-Lists-sliceFirstSecondEnd}

* ``test bool sliceFirstSecondEnd(list[int] L)``

## function sliceFirstNegative {#lang-rascal-tests-basic-Lists-sliceFirstNegative}

* ``test bool sliceFirstNegative(list[int] L)``

## function sliceEndNegative {#lang-rascal-tests-basic-Lists-sliceEndNegative}

* ``test bool sliceEndNegative(list[int] L)``

## function sliceFirstNegativeSecondNegative {#lang-rascal-tests-basic-Lists-sliceFirstNegativeSecondNegative}

* ``test bool sliceFirstNegativeSecondNegative(list[int] L)``

## function sliceSecondNegative {#lang-rascal-tests-basic-Lists-sliceSecondNegative}

* ``test bool sliceSecondNegative(list[int] L)``

## function assignSlice1 {#lang-rascal-tests-basic-Lists-assignSlice1}

* ``test bool assignSlice1()``

## function assignSlice2 {#lang-rascal-tests-basic-Lists-assignSlice2}

* ``test bool assignSlice2()``

## function assignSlice3 {#lang-rascal-tests-basic-Lists-assignSlice3}

* ``test bool assignSlice3()``

## function assignSlice4 {#lang-rascal-tests-basic-Lists-assignSlice4}

* ``test bool assignSlice4()``

## function assignStep1 {#lang-rascal-tests-basic-Lists-assignStep1}

* ``test bool assignStep1()``

## function assignStep2 {#lang-rascal-tests-basic-Lists-assignStep2}

* ``test bool assignStep2()``

## function assignStep3 {#lang-rascal-tests-basic-Lists-assignStep3}

* ``test bool assignStep3()``

## function assignStep4 {#lang-rascal-tests-basic-Lists-assignStep4}

* ``test bool assignStep4()``

## function assignStep5 {#lang-rascal-tests-basic-Lists-assignStep5}

* ``test bool assignStep5()``

## function assignStep6 {#lang-rascal-tests-basic-Lists-assignStep6}

* ``test bool assignStep6()``

## function assignStep7 {#lang-rascal-tests-basic-Lists-assignStep7}

* ``test bool assignStep7()``

## function assignStep8 {#lang-rascal-tests-basic-Lists-assignStep8}

* ``test bool assignStep8()``

## function assignStep9 {#lang-rascal-tests-basic-Lists-assignStep9}

* ``test bool assignStep9()``

## function assignStep10 {#lang-rascal-tests-basic-Lists-assignStep10}

* ``test bool assignStep10()``

## function assignStep11 {#lang-rascal-tests-basic-Lists-assignStep11}

* ``test bool assignStep11()``

## function assignStep12 {#lang-rascal-tests-basic-Lists-assignStep12}

* ``test bool assignStep12()``

## function assignStep13 {#lang-rascal-tests-basic-Lists-assignStep13}

* ``test bool assignStep13()``

## function assignAdd1 {#lang-rascal-tests-basic-Lists-assignAdd1}

* ``test bool assignAdd1()``

## function assignAdd2 {#lang-rascal-tests-basic-Lists-assignAdd2}

* ``test bool assignAdd2()``

## function assignAdd3 {#lang-rascal-tests-basic-Lists-assignAdd3}

* ``test bool assignAdd3()``

## function assignAdd4 {#lang-rascal-tests-basic-Lists-assignAdd4}

* ``test bool assignAdd4()``

## function assignSub1 {#lang-rascal-tests-basic-Lists-assignSub1}

* ``test bool assignSub1()``

## function assignSub2 {#lang-rascal-tests-basic-Lists-assignSub2}

* ``test bool assignSub2()``

## function assignSub3 {#lang-rascal-tests-basic-Lists-assignSub3}

* ``test bool assignSub3()``

## function assignSub4 {#lang-rascal-tests-basic-Lists-assignSub4}

* ``test bool assignSub4()``

## function assignProd1 {#lang-rascal-tests-basic-Lists-assignProd1}

* ``test bool assignProd1()``

## function assignProd2 {#lang-rascal-tests-basic-Lists-assignProd2}

* ``test bool assignProd2()``

## function assignProd3 {#lang-rascal-tests-basic-Lists-assignProd3}

* ``test bool assignProd3()``

## function assignProd4 {#lang-rascal-tests-basic-Lists-assignProd4}

* ``test bool assignProd4()``

## function AssignFromEnd1 {#lang-rascal-tests-basic-Lists-AssignFromEnd1}

* ``test bool AssignFromEnd1()``

## function AssignFromEnd2 {#lang-rascal-tests-basic-Lists-AssignFromEnd2}

* ``test bool AssignFromEnd2()``

## function AssignFromEnd3 {#lang-rascal-tests-basic-Lists-AssignFromEnd3}

* ``test bool AssignFromEnd3()``

## function tstDelete {#lang-rascal-tests-basic-Lists-tstDelete}

* ``test bool tstDelete(list[&T] L)``

## function tstDrop {#lang-rascal-tests-basic-Lists-tstDrop}

* ``test bool tstDrop(list[&T] L)``

## function tstDup {#lang-rascal-tests-basic-Lists-tstDup}

* ``test bool tstDup(list[&T] L)``

## function tstGetOneFrom {#lang-rascal-tests-basic-Lists-tstGetOneFrom}

* ``test bool tstGetOneFrom(list[&T] L)``

## function tstHead {#lang-rascal-tests-basic-Lists-tstHead}

* ``test bool tstHead(list[&T] L)``

## function tstHeadN {#lang-rascal-tests-basic-Lists-tstHeadN}

* ``test bool tstHeadN(list[&T] L)``

## function tstHeadTail {#lang-rascal-tests-basic-Lists-tstHeadTail}

* ``test bool tstHeadTail(list[&T] L)``

## function tstIndex {#lang-rascal-tests-basic-Lists-tstIndex}

* ``test bool tstIndex(list[int] L)``

## function tstIndexOf {#lang-rascal-tests-basic-Lists-tstIndexOf}

* ``test bool tstIndexOf(list[int] L)``

## function tstInsertAt {#lang-rascal-tests-basic-Lists-tstInsertAt}

* ``test bool tstInsertAt(list[&T] L, &T e)``

## function simplerIntercalateWithNegativeMatch {#lang-rascal-tests-basic-Lists-simplerIntercalateWithNegativeMatch}

* ``test bool simplerIntercalateWithNegativeMatch()``

## function tstIntercalate {#lang-rascal-tests-basic-Lists-tstIntercalate}

* ``test bool tstIntercalate(str sep, list[value] L)``

## function tstIsEmpty {#lang-rascal-tests-basic-Lists-tstIsEmpty}

* ``test bool tstIsEmpty(list[&T] L)``

## function tstLast {#lang-rascal-tests-basic-Lists-tstLast}

* ``test bool tstLast(list[&T] L)``

## function tstLastIndexOf {#lang-rascal-tests-basic-Lists-tstLastIndexOf}

* ``test bool tstLastIndexOf(list[int] L)``

## function tstMapper {#lang-rascal-tests-basic-Lists-tstMapper}

* ``test bool tstMapper(list[int] L)``

## function tstMax {#lang-rascal-tests-basic-Lists-tstMax}

* ``test bool tstMax(list[int] L)``

## function tstMerge {#lang-rascal-tests-basic-Lists-tstMerge}

* ``test bool tstMerge(list[int] L, list[int] R)``

## function tstMin {#lang-rascal-tests-basic-Lists-tstMin}

* ``test bool tstMin(list[int] L)``

## function tstMix {#lang-rascal-tests-basic-Lists-tstMix}

* ``test bool tstMix(list[&T] L, list[&U] R)``

## function factorial {#lang-rascal-tests-basic-Lists-factorial}

* ``int factorial(int n)``

## function tstPermutations {#lang-rascal-tests-basic-Lists-tstPermutations}

* ``test bool tstPermutations(list[int] L)``

## function tstPop {#lang-rascal-tests-basic-Lists-tstPop}

* ``test bool tstPop(list[value] L)``

## function tstPrefix {#lang-rascal-tests-basic-Lists-tstPrefix}

* ``test bool tstPrefix(list[value] L)``

## function tstPush {#lang-rascal-tests-basic-Lists-tstPush}

* ``test bool tstPush(value elem, list[value] L)``

## function tstReverse {#lang-rascal-tests-basic-Lists-tstReverse}

* ``test bool tstReverse(list[&T] L)``

## function tstSize {#lang-rascal-tests-basic-Lists-tstSize}

* ``test bool tstSize(list[&T] L)``

## function tstSort {#lang-rascal-tests-basic-Lists-tstSort}

* ``test bool tstSort(list[int] L)``

## function tstSplit {#lang-rascal-tests-basic-Lists-tstSplit}

* ``test bool tstSplit(list[&T] L)``

## function tstSum {#lang-rascal-tests-basic-Lists-tstSum}

* ``test bool tstSum(list[int] L)``

## function tstTail {#lang-rascal-tests-basic-Lists-tstTail}

* ``test bool tstTail(list[&T] L)``

## function tstTailN {#lang-rascal-tests-basic-Lists-tstTailN}

* ``test bool tstTailN(list[&T] L)``

## function tstTake {#lang-rascal-tests-basic-Lists-tstTake}

* ``test bool tstTake(list[&T] L)``

## function tstTakeOneFrom {#lang-rascal-tests-basic-Lists-tstTakeOneFrom}

* ``test bool tstTakeOneFrom(list[int] L)``

## function isEven {#lang-rascal-tests-basic-Lists-isEven}

* ``bool isEven(int a)``

## function takeEven {#lang-rascal-tests-basic-Lists-takeEven}

* ``list[int] takeEven(list[int] L)``

## function tstTakeWhile {#lang-rascal-tests-basic-Lists-tstTakeWhile}

* ``test bool tstTakeWhile(list[int] L)``

## function tstToMapUnique {#lang-rascal-tests-basic-Lists-tstToMapUnique}

* ``test bool tstToMapUnique(list[tuple[&A, &B]] L)``

## function tstTop {#lang-rascal-tests-basic-Lists-tstTop}

* ``test bool tstTop(list[&T] L)``

## function tstToRel {#lang-rascal-tests-basic-Lists-tstToRel}

* ``test bool tstToRel(list[&T] L)``

## function tstToSet {#lang-rascal-tests-basic-Lists-tstToSet}

* ``test bool tstToSet(list[&T] L)``

## function tstToString {#lang-rascal-tests-basic-Lists-tstToString}

* ``test bool tstToString(list[value] L)``

## function tstUnzip2 {#lang-rascal-tests-basic-Lists-tstUnzip2}

* ``test bool tstUnzip2(list[tuple[&A, &B]] L)``

## function tstUnzip3 {#lang-rascal-tests-basic-Lists-tstUnzip3}

* ``test bool tstUnzip3(list[tuple[&A, &B, &C]] L)``

## function tstUpTill {#lang-rascal-tests-basic-Lists-tstUpTill}

* ``test bool tstUpTill(int n)``

## function tstZip {#lang-rascal-tests-basic-Lists-tstZip}

* ``test bool tstZip(list[&T] L)``

## function dtstSlice {#lang-rascal-tests-basic-Lists-dtstSlice}

* ``test bool dtstSlice(list[&T] lst)``

## function dtstDelete {#lang-rascal-tests-basic-Lists-dtstDelete}

* ``test bool dtstDelete(list[&T] lst)``

## function dtstDrop {#lang-rascal-tests-basic-Lists-dtstDrop}

* ``test bool dtstDrop(list[&T] lst)``

## function dtstHead {#lang-rascal-tests-basic-Lists-dtstHead}

* ``test bool dtstHead(list[&T] lst)``

## function dtstTail {#lang-rascal-tests-basic-Lists-dtstTail}

* ``test bool dtstTail(list[&T] lst)``

## function dtstPrefix {#lang-rascal-tests-basic-Lists-dtstPrefix}

* ``test bool dtstPrefix(list[&T] lst)``

## function dtstDifference {#lang-rascal-tests-basic-Lists-dtstDifference}

* ``test bool dtstDifference(list[&T] lst)``

## function dtstIntersection {#lang-rascal-tests-basic-Lists-dtstIntersection}

* ``test bool dtstIntersection(list[&T] lst)``

