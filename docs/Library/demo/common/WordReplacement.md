---
title: "module demo::common::WordReplacement"
---

#### Usage

`import demo::common::WordReplacement;`

#### Synopsis

Demonstrate capitalizing all words in a string


## function capitalize {#demo-common-WordReplacement-capitalize}

* ``str capitalize(str word:/^<letter:[a-z]><rest:.*>/)``
* ``default str capitalize(str word)``

#### Synopsis

capitalize: convert first letter of a word to uppercase, if it was lowercase

## function capitalize1 {#demo-common-WordReplacement-capitalize1}

* ``test bool capitalize1()``

## function capitalize2 {#demo-common-WordReplacement-capitalize2}

* ``test bool capitalize2()``

## function capAll1 {#demo-common-WordReplacement-capAll1}

* ``str capAll1(str S)``

#### Synopsis

Version 1: capAll1: using a while loop

## function tstCapAll1 {#demo-common-WordReplacement-tstCapAll1}

* ``test bool tstCapAll1()``

## function capAll2 {#demo-common-WordReplacement-capAll2}

* ``str capAll2(str S)``

#### Synopsis

Version 2: capAll2: using visit

## function tstCapAll2 {#demo-common-WordReplacement-tstCapAll2}

* ``test bool tstCapAll2()``

