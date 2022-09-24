---
title: "module demo::basic::Bubble"
---

#### Usage

`import demo::basic::Bubble;`

#### Synopsis

Variations on Bubble Sort

#### Description

Rascal allows for very different programming styles, ranging 
from classical procedural style with structured programming 
constructor to pure function programming and algebraic specification.

In this demo we show how the "Bubble Sort" algorithm can 
be implemented in Rascal in different ways. None is a priori
"better" than the other. Just different. Pick your poison!

## function sort1 {#demo-basic-Bubble-sort1}

* ``list[int] sort1(list[int] numbers)``

#### Synopsis

sort1: uses list indexing, a for-loop and a (complex) assignment

## function sort2 {#demo-basic-Bubble-sort2}

* ``list[int] sort2(list[int] numbers)``

#### Synopsis

sort2 uses list matching, a switch and recursion instead of assignment

## function sort3 {#demo-basic-Bubble-sort3}

* ``list[int] sort3(list[int] numbers)``

#### Synopsis

sort3: uses list matching, while and an assignment

## function sort4 {#demo-basic-Bubble-sort4}

* ``list[int] sort4(list[int] numbers)``

#### Synopsis

sort4: uses list matching, solve, list concatentation, and assignment

## function sort5 {#demo-basic-Bubble-sort5}

* ``list[int] sort5([*int nums1, int p, *int nums2, int q, *int nums3])``
* ``default list[int] sort5(list[int] x)``

#### Synopsis

sort5: using recursion instead of iteration, and splicing instead of concat

## function sort6 {#demo-basic-Bubble-sort6}

* ``list[int] sort6([*int nums1, int p, *int nums2, int q, *int nums3])``
* ``default list[int] sort6(list[int] x)``

#### Synopsis

sort6: inlines the condition into a when, and uses overloading with a default function.

## function isSorted {#demo-basic-Bubble-isSorted}

* ``bool isSorted(list[int] lst)``

## function sorted1a {#demo-basic-Bubble-sorted1a}

* ``test bool sorted1a()``

## function sorted1b {#demo-basic-Bubble-sorted1b}

* ``test bool sorted1b()``

## function sorted1c {#demo-basic-Bubble-sorted1c}

* ``test bool sorted1c()``

## function sorted1d {#demo-basic-Bubble-sorted1d}

* ``test bool sorted1d()``

## function sorted1e {#demo-basic-Bubble-sorted1e}

* ``test bool sorted1e()``

## function sorted2 {#demo-basic-Bubble-sorted2}

* ``test bool sorted2(list[int] lst)``

## function sorted3 {#demo-basic-Bubble-sorted3}

* ``test bool sorted3(list[int] lst)``

## function sorted4 {#demo-basic-Bubble-sorted4}

* ``test bool sorted4(list[int] lst)``

## function sorted5 {#demo-basic-Bubble-sorted5}

* ``test bool sorted5(list[int] lst)``

## function sorted6 {#demo-basic-Bubble-sorted6}

* ``test bool sorted6(list[int] lst)``

