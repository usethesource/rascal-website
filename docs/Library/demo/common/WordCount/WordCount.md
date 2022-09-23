---
title: "module demo::common::WordCount::WordCount"
---

#### Usage

`import demo::common::WordCount::WordCount;`

#### Synopsis

demonstrates different ways of counting words in a string

#### Description


This not only demonstrates counting words using regular expressions and pattern matching with backtracking,
but also highlights the use of functions as parameters to other functions (higher-order functions)
and the concept of [Reducer](../../../../Rascal/Expressions/Reducer)s.


## function wordCount {#demo-common-WordCount-WordCount-wordCount}

* ``int wordCount(list[str] input, int (str s) countInLine)``

#### Synopsis

Count the total amount of words in a list of strings

#### Description


wordCount takes a list of strings and a `countInLine` function
that is applied to each line. The total number of words is returned

## function wordCountReduce {#demo-common-WordCount-WordCount-wordCountReduce}

* ``int wordCountReduce(list[str] input, int (str s) countInline)``

#### Synopsis

Count the total amount of words in a list of strings

#### Description


wordCountReduce takes a list of strings and a `countInLine` function
that is applied to each line. The total number of words is returned.
It uses a [Reducer](../../../../Rascal/Expressions/Reducer) instead of a for loop for brevity.

## function wordCountMapSum {#demo-common-WordCount-WordCount-wordCountMapSum}

* ``int wordCountMapSum(list[str] input, int (str s) countInLine)``

#### Synopsis

Count the total amount of words in a list of strings

#### Description


wordCountMapSum takes a list of strings and a `countInLine` function
that is applied to each line. The total number of words is returned.
It uses a traditional -in functional programming- `map` ((List::mapper) and [sum](../../../../Library/List.md#List-sum) functions from the [Library](../../../../Library/).

## function tstWordCount1 {#demo-common-WordCount-WordCount-tstWordCount1}

* ``test bool tstWordCount1()``

## function tstWordCount2 {#demo-common-WordCount-WordCount-tstWordCount2}

* ``test bool tstWordCount2()``

## function tstWordCount3 {#demo-common-WordCount-WordCount-tstWordCount3}

* ``test bool tstWordCount3()``

## function tstWordCount4 {#demo-common-WordCount-WordCount-tstWordCount4}

* ``test bool tstWordCount4(str txt)``

## function tstWordCount5 {#demo-common-WordCount-WordCount-tstWordCount5}

* ``test bool tstWordCount5(str txt)``

## function tstWordCount6 {#demo-common-WordCount-WordCount-tstWordCount6}

* ``test bool tstWordCount6(str txt)``

