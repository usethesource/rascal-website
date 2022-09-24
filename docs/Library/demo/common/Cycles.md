---
title: "module demo::common::Cycles"
---

#### Usage

`import demo::common::Cycles;`

## function cycles {#demo-common-Cycles-cycles}

* ``rel[int, set[int]] cycles(rel[int,int] graph)``

## function isProperCycle {#demo-common-Cycles-isProperCycle}

* ``bool isProperCycle(rel[int,int] graph, int n, set[int] C)``

## function subCycles {#demo-common-Cycles-subCycles}

* ``set[set[int]] subCycles (rel[int,int] graph, int n, set[int] Cycle)``

## function allSubCycles {#demo-common-Cycles-allSubCycles}

* ``rel[int, set[set[int]]] allSubCycles(rel[int,int] graph, rel[int, set[int]] Cycles)``

## function t1 {#demo-common-Cycles-t1}

* ``test bool t1()``

## function t2 {#demo-common-Cycles-t2}

* ``test bool t2()``

## function t3 {#demo-common-Cycles-t3}

* ``test bool t3()``

