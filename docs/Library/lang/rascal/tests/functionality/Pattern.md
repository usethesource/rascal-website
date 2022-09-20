---
title: "lang::rascal::tests::functionality::Pattern"
---

#### Usage

`import lang::rascal::tests::functionality::Pattern;`


## data F {#lang-rascal-tests-functionality-Pattern-F}

```rascal
data F  
     = f(int N)
     | f(int N, int M)
     | f(int N, value f, bool B)
     | g(str S)
     ;
```

## data F1 {#lang-rascal-tests-functionality-Pattern-F1}

```rascal
data F1  
     = f1(int N, int M = 10, bool B = false)
     | f1(str S)
     ;
```

## function matchLiteral1 {#lang-rascal-tests-functionality-Pattern-matchLiteral1}

* ``test bool matchLiteral1()``

## function matchLiteral2 {#lang-rascal-tests-functionality-Pattern-matchLiteral2}

* ``test bool matchLiteral2()``

## function matchLiteral3 {#lang-rascal-tests-functionality-Pattern-matchLiteral3}

* ``test bool matchLiteral3()``

## function matchLiteral4 {#lang-rascal-tests-functionality-Pattern-matchLiteral4}

* ``test bool matchLiteral4()``

## function matchLiteral5 {#lang-rascal-tests-functionality-Pattern-matchLiteral5}

* ``test bool matchLiteral5()``

## function matchLiteral6 {#lang-rascal-tests-functionality-Pattern-matchLiteral6}

* ``test bool matchLiteral6()``

## function matchLiteral7 {#lang-rascal-tests-functionality-Pattern-matchLiteral7}

* ``test bool matchLiteral7()``

## function matchLiteral8 {#lang-rascal-tests-functionality-Pattern-matchLiteral8}

* ``test bool matchLiteral8()``

## function matchLiteral9 {#lang-rascal-tests-functionality-Pattern-matchLiteral9}

* ``test bool matchLiteral9()``

## function matchLiteral10 {#lang-rascal-tests-functionality-Pattern-matchLiteral10}

* ``test bool matchLiteral10()``

## function matchLiteral11 {#lang-rascal-tests-functionality-Pattern-matchLiteral11}

* ``test bool matchLiteral11()``

## function matchLiteral12 {#lang-rascal-tests-functionality-Pattern-matchLiteral12}

* ``test bool matchLiteral12()``

## function matchLiteral13 {#lang-rascal-tests-functionality-Pattern-matchLiteral13}

* ``test bool matchLiteral13()``

## function matchLiteral14 {#lang-rascal-tests-functionality-Pattern-matchLiteral14}

* ``test bool matchLiteral14()``

## function matchADT1 {#lang-rascal-tests-functionality-Pattern-matchADT1}

* ``test bool matchADT1()``

## function matchADT2 {#lang-rascal-tests-functionality-Pattern-matchADT2}

* ``test bool matchADT2()``

## function matchADT3 {#lang-rascal-tests-functionality-Pattern-matchADT3}

* ``test bool matchADT3()``

## function matchADT4 {#lang-rascal-tests-functionality-Pattern-matchADT4}

* ``test bool matchADT4()``

## function matchADT5 {#lang-rascal-tests-functionality-Pattern-matchADT5}

* ``test bool matchADT5()``

## function matchADT6 {#lang-rascal-tests-functionality-Pattern-matchADT6}

* ``test bool matchADT6()``

## function matchADT7 {#lang-rascal-tests-functionality-Pattern-matchADT7}

* ``test bool matchADT7()``

## function matchADT8 {#lang-rascal-tests-functionality-Pattern-matchADT8}

* ``test bool matchADT8()``

## function matchADTwithKeywords1 {#lang-rascal-tests-functionality-Pattern-matchADTwithKeywords1}

* ``test bool matchADTwithKeywords1()``

## function matchADTwithKeywords2 {#lang-rascal-tests-functionality-Pattern-matchADTwithKeywords2}

* ``test bool matchADTwithKeywords2()``

## function matchADTwithKeywords3 {#lang-rascal-tests-functionality-Pattern-matchADTwithKeywords3}

* ``test bool matchADTwithKeywords3()``

## function matchADTwithKeywords4 {#lang-rascal-tests-functionality-Pattern-matchADTwithKeywords4}

* ``test bool matchADTwithKeywords4()``

## function matchADTwithKeywords5 {#lang-rascal-tests-functionality-Pattern-matchADTwithKeywords5}

* ``test bool matchADTwithKeywords5()``

## function matchNode1 {#lang-rascal-tests-functionality-Pattern-matchNode1}

* ``test bool matchNode1()``

## function matchNode2 {#lang-rascal-tests-functionality-Pattern-matchNode2}

* ``test bool matchNode2()``

## function matchNode3 {#lang-rascal-tests-functionality-Pattern-matchNode3}

* ``test bool matchNode3()``

## function matchNode4 {#lang-rascal-tests-functionality-Pattern-matchNode4}

* ``test bool matchNode4()``

## function matchNode5 {#lang-rascal-tests-functionality-Pattern-matchNode5}

* ``test bool matchNode5()``

## function matchNode6 {#lang-rascal-tests-functionality-Pattern-matchNode6}

* ``test bool matchNode6()``

## function matchNode7 {#lang-rascal-tests-functionality-Pattern-matchNode7}

* ``test bool matchNode7()``

## function matchNode8 {#lang-rascal-tests-functionality-Pattern-matchNode8}

* ``test bool matchNode8()``

## function matchNode9 {#lang-rascal-tests-functionality-Pattern-matchNode9}

* ``test bool matchNode9()``

## function matchNode10 {#lang-rascal-tests-functionality-Pattern-matchNode10}

* ``test bool matchNode10()``

## function matchNode11 {#lang-rascal-tests-functionality-Pattern-matchNode11}

* ``test bool matchNode11()``

## function matchNode12 {#lang-rascal-tests-functionality-Pattern-matchNode12}

* ``test bool matchNode12()``

## function matchNode13 {#lang-rascal-tests-functionality-Pattern-matchNode13}

* ``test bool matchNode13()``

## function matchNodeWithKeywords1 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords1}

* ``test bool matchNodeWithKeywords1()``

## function matchNodeWithKeywords2 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords2}

* ``test bool matchNodeWithKeywords2()``

## function matchNodeWithKeywords3 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords3}

* ``test bool matchNodeWithKeywords3()``

## function matchNodeWithKeywords4 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords4}

* ``test bool matchNodeWithKeywords4()``

## function matchNodeWithKeywords5 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords5}

* ``test bool matchNodeWithKeywords5()``

## function matchNodeWithKeywords6 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords6}

* ``test bool matchNodeWithKeywords6()``

## function matchNodeWithKeywords7 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords7}

* ``test bool matchNodeWithKeywords7()``

## function matchNodeWithKeywords8 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords8}

* ``test bool matchNodeWithKeywords8()``

## function matchNodeWithKeywords9 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords9}

* ``test bool matchNodeWithKeywords9()``

## function matchNodeWithKeywords10 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords10}

* ``test bool matchNodeWithKeywords10()``

## function matchNodeWithKeywords11 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords11}

* ``test bool matchNodeWithKeywords11()``

## function matchNodeWithKeywords12 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords12}

* ``test bool matchNodeWithKeywords12()``

## function matchNodeWithKeywords13 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords13}

* ``test bool matchNodeWithKeywords13()``

## function matchNodeWithKeywords14 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords14}

* ``test bool matchNodeWithKeywords14()``

## function matchNodeWithKeywords15 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords15}

* ``test bool matchNodeWithKeywords15()``

## function matchNodeWithKeywords16 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords16}

* ``test bool matchNodeWithKeywords16()``

## function matchVariable1 {#lang-rascal-tests-functionality-Pattern-matchVariable1}

* ``test bool matchVariable1()``

## function matchVariable2 {#lang-rascal-tests-functionality-Pattern-matchVariable2}

* ``test bool matchVariable2()``

## function matchVariable3 {#lang-rascal-tests-functionality-Pattern-matchVariable3}

* ``test bool matchVariable3()``

## function matchVariable4 {#lang-rascal-tests-functionality-Pattern-matchVariable4}

* ``test bool matchVariable4()``

## function matchVariable5 {#lang-rascal-tests-functionality-Pattern-matchVariable5}

* ``test bool matchVariable5()``

## function matchVariable6 {#lang-rascal-tests-functionality-Pattern-matchVariable6}

* ``test bool matchVariable6()``

## function matchTypedVariableBecomes1 {#lang-rascal-tests-functionality-Pattern-matchTypedVariableBecomes1}

* ``test bool matchTypedVariableBecomes1()``

## function matchVariableBecomes1 {#lang-rascal-tests-functionality-Pattern-matchVariableBecomes1}

* ``test bool matchVariableBecomes1()``

## function matchVariableBecomesEquality1 {#lang-rascal-tests-functionality-Pattern-matchVariableBecomesEquality1}

* ``test bool matchVariableBecomesEquality1()``

## function matchVariableBecomesEquality2 {#lang-rascal-tests-functionality-Pattern-matchVariableBecomesEquality2}

* ``test bool matchVariableBecomesEquality2()``

## function doubleVariableBecomes1 {#lang-rascal-tests-functionality-Pattern-doubleVariableBecomes1}

* ``test bool doubleVariableBecomes1()``

## function doubleVariableBecomes2 {#lang-rascal-tests-functionality-Pattern-doubleVariableBecomes2}

* ``test bool doubleVariableBecomes2()``

## function antiPattern1 {#lang-rascal-tests-functionality-Pattern-antiPattern1}

* ``test bool antiPattern1()``

## function antiPattern2 {#lang-rascal-tests-functionality-Pattern-antiPattern2}

* ``test bool antiPattern2()``

## function antiPattern3 {#lang-rascal-tests-functionality-Pattern-antiPattern3}

* ``test bool antiPattern3()``

## function antiPattern4 {#lang-rascal-tests-functionality-Pattern-antiPattern4}

* ``test bool antiPattern4()``

## function antiPattern5 {#lang-rascal-tests-functionality-Pattern-antiPattern5}

* ``test bool antiPattern5()``

## function antiPattern6 {#lang-rascal-tests-functionality-Pattern-antiPattern6}

* ``test bool antiPattern6()``

## function antiPattern7 {#lang-rascal-tests-functionality-Pattern-antiPattern7}

* ``test bool antiPattern7()``

## function antiPattern8 {#lang-rascal-tests-functionality-Pattern-antiPattern8}

* ``test bool antiPattern8()``

## function antiPattern9 {#lang-rascal-tests-functionality-Pattern-antiPattern9}

* ``test bool antiPattern9()``

## function antiPattern10 {#lang-rascal-tests-functionality-Pattern-antiPattern10}

* ``test bool antiPattern10()``

## function antiPattern11 {#lang-rascal-tests-functionality-Pattern-antiPattern11}

* ``test bool antiPattern11()``

## function antiPattern12 {#lang-rascal-tests-functionality-Pattern-antiPattern12}

* ``test bool antiPattern12()``

## function antiPattern13 {#lang-rascal-tests-functionality-Pattern-antiPattern13}

* ``test bool antiPattern13()``

## function antiPattern14 {#lang-rascal-tests-functionality-Pattern-antiPattern14}

* ``test bool antiPattern14()``

## function antiPattern15 {#lang-rascal-tests-functionality-Pattern-antiPattern15}

* ``test bool antiPattern15()``

## function antiPattern16 {#lang-rascal-tests-functionality-Pattern-antiPattern16}

* ``test bool antiPattern16()``

## function antiPattern17 {#lang-rascal-tests-functionality-Pattern-antiPattern17}

* ``test bool antiPattern17()``

## function antiPattern18 {#lang-rascal-tests-functionality-Pattern-antiPattern18}

* ``test bool antiPattern18()``

## function antiPattern19 {#lang-rascal-tests-functionality-Pattern-antiPattern19}

* ``test bool antiPattern19()``

## function antiPattern20 {#lang-rascal-tests-functionality-Pattern-antiPattern20}

* ``test bool antiPattern20()``

## function antiPattern21 {#lang-rascal-tests-functionality-Pattern-antiPattern21}

* ``test bool antiPattern21()``

## function antiPattern22 {#lang-rascal-tests-functionality-Pattern-antiPattern22}

* ``test bool antiPattern22()``

## function matchInLoop1 {#lang-rascal-tests-functionality-Pattern-matchInLoop1}

* ``test bool matchInLoop1()``

## function matchInLoop2 {#lang-rascal-tests-functionality-Pattern-matchInLoop2}

* ``test bool matchInLoop2()``

## function nodeMatchBacktracking {#lang-rascal-tests-functionality-Pattern-nodeMatchBacktracking}

* ``test bool nodeMatchBacktracking()``

## function tupleMatchBacktracking {#lang-rascal-tests-functionality-Pattern-tupleMatchBacktracking}

* ``test bool tupleMatchBacktracking()``

## function switchListOnValue1 {#lang-rascal-tests-functionality-Pattern-switchListOnValue1}

* ``test bool switchListOnValue1()``

## function switchSetOnValue1 {#lang-rascal-tests-functionality-Pattern-switchSetOnValue1}

* ``test bool switchSetOnValue1()``

