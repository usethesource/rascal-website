---
title: "module lang::rascal::tests::functionality::Pattern"
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

```rascal
test bool matchLiteral1()

```

## function matchLiteral2 {#lang-rascal-tests-functionality-Pattern-matchLiteral2}

```rascal
test bool matchLiteral2()

```

## function matchLiteral3 {#lang-rascal-tests-functionality-Pattern-matchLiteral3}

```rascal
test bool matchLiteral3()

```

## function matchLiteral4 {#lang-rascal-tests-functionality-Pattern-matchLiteral4}

```rascal
test bool matchLiteral4()

```

## function matchLiteral5 {#lang-rascal-tests-functionality-Pattern-matchLiteral5}

```rascal
test bool matchLiteral5()

```

## function matchLiteral6 {#lang-rascal-tests-functionality-Pattern-matchLiteral6}

```rascal
test bool matchLiteral6()

```

## function matchLiteral7 {#lang-rascal-tests-functionality-Pattern-matchLiteral7}

```rascal
test bool matchLiteral7()

```

## function matchLiteral8 {#lang-rascal-tests-functionality-Pattern-matchLiteral8}

```rascal
test bool matchLiteral8()

```

## function matchLiteral9 {#lang-rascal-tests-functionality-Pattern-matchLiteral9}

```rascal
test bool matchLiteral9()

```

## function matchLiteral10 {#lang-rascal-tests-functionality-Pattern-matchLiteral10}

```rascal
test bool matchLiteral10()

```

## function matchLiteral11 {#lang-rascal-tests-functionality-Pattern-matchLiteral11}

```rascal
test bool matchLiteral11()

```

## function matchLiteral12 {#lang-rascal-tests-functionality-Pattern-matchLiteral12}

```rascal
test bool matchLiteral12()

```

## function matchLiteral13 {#lang-rascal-tests-functionality-Pattern-matchLiteral13}

```rascal
test bool matchLiteral13()

```

## function matchLiteral14 {#lang-rascal-tests-functionality-Pattern-matchLiteral14}

```rascal
test bool matchLiteral14()

```

## function matchADT1 {#lang-rascal-tests-functionality-Pattern-matchADT1}

```rascal
test bool matchADT1()

```

## function matchADT2 {#lang-rascal-tests-functionality-Pattern-matchADT2}

```rascal
test bool matchADT2()

```

## function matchADT3 {#lang-rascal-tests-functionality-Pattern-matchADT3}

```rascal
test bool matchADT3()

```

## function matchADT4 {#lang-rascal-tests-functionality-Pattern-matchADT4}

```rascal
test bool matchADT4()

```

## function matchADT5 {#lang-rascal-tests-functionality-Pattern-matchADT5}

```rascal
test bool matchADT5()

```

## function matchADT6 {#lang-rascal-tests-functionality-Pattern-matchADT6}

```rascal
test bool matchADT6()

```

## function matchADT7 {#lang-rascal-tests-functionality-Pattern-matchADT7}

```rascal
test bool matchADT7()

```

## function matchADT8 {#lang-rascal-tests-functionality-Pattern-matchADT8}

```rascal
test bool matchADT8()

```

## function matchADTwithKeywords1 {#lang-rascal-tests-functionality-Pattern-matchADTwithKeywords1}

```rascal
test bool matchADTwithKeywords1()

```

## function matchADTwithKeywords2 {#lang-rascal-tests-functionality-Pattern-matchADTwithKeywords2}

```rascal
test bool matchADTwithKeywords2()

```

## function matchADTwithKeywords3 {#lang-rascal-tests-functionality-Pattern-matchADTwithKeywords3}

```rascal
test bool matchADTwithKeywords3()

```

## function matchADTwithKeywords4 {#lang-rascal-tests-functionality-Pattern-matchADTwithKeywords4}

```rascal
test bool matchADTwithKeywords4()

```

## function matchADTwithKeywords5 {#lang-rascal-tests-functionality-Pattern-matchADTwithKeywords5}

```rascal
test bool matchADTwithKeywords5()

```

## function matchNode1 {#lang-rascal-tests-functionality-Pattern-matchNode1}

```rascal
test bool matchNode1()

```

## function matchNode2 {#lang-rascal-tests-functionality-Pattern-matchNode2}

```rascal
test bool matchNode2()

```

## function matchNode3 {#lang-rascal-tests-functionality-Pattern-matchNode3}

```rascal
test bool matchNode3()

```

## function matchNode4 {#lang-rascal-tests-functionality-Pattern-matchNode4}

```rascal
test bool matchNode4()

```

## function matchNode5 {#lang-rascal-tests-functionality-Pattern-matchNode5}

```rascal
test bool matchNode5()

```

## function matchNode6 {#lang-rascal-tests-functionality-Pattern-matchNode6}

```rascal
test bool matchNode6()

```

## function matchNode7 {#lang-rascal-tests-functionality-Pattern-matchNode7}

```rascal
test bool matchNode7()

```

## function matchNode8 {#lang-rascal-tests-functionality-Pattern-matchNode8}

```rascal
test bool matchNode8()

```

## function matchNode9 {#lang-rascal-tests-functionality-Pattern-matchNode9}

```rascal
test bool matchNode9()

```

## function matchNode10 {#lang-rascal-tests-functionality-Pattern-matchNode10}

```rascal
test bool matchNode10()

```

## function matchNode11 {#lang-rascal-tests-functionality-Pattern-matchNode11}

```rascal
test bool matchNode11()

```

## function matchNode12 {#lang-rascal-tests-functionality-Pattern-matchNode12}

```rascal
test bool matchNode12()

```

## function matchNode13 {#lang-rascal-tests-functionality-Pattern-matchNode13}

```rascal
test bool matchNode13()

```

## function matchNodeWithKeywords1 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords1}

```rascal
test bool matchNodeWithKeywords1()

```

## function matchNodeWithKeywords2 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords2}

```rascal
test bool matchNodeWithKeywords2()

```

## function matchNodeWithKeywords3 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords3}

```rascal
test bool matchNodeWithKeywords3()

```

## function matchNodeWithKeywords4 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords4}

```rascal
test bool matchNodeWithKeywords4()

```

## function matchNodeWithKeywords5 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords5}

```rascal
test bool matchNodeWithKeywords5()

```

## function matchNodeWithKeywords6 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords6}

```rascal
test bool matchNodeWithKeywords6()

```

## function matchNodeWithKeywords7 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords7}

```rascal
test bool matchNodeWithKeywords7()

```

## function matchNodeWithKeywords8 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords8}

```rascal
test bool matchNodeWithKeywords8()

```

## function matchNodeWithKeywords9 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords9}

```rascal
test bool matchNodeWithKeywords9()

```

## function matchNodeWithKeywords10 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords10}

```rascal
test bool matchNodeWithKeywords10()

```

## function matchNodeWithKeywords11 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords11}

```rascal
test bool matchNodeWithKeywords11()

```

## function matchNodeWithKeywords12 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords12}

```rascal
test bool matchNodeWithKeywords12()

```

## function matchNodeWithKeywords13 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords13}

```rascal
test bool matchNodeWithKeywords13()

```

## function matchNodeWithKeywords14 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords14}

```rascal
test bool matchNodeWithKeywords14()

```

## function matchNodeWithKeywords15 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords15}

```rascal
test bool matchNodeWithKeywords15()

```

## function matchNodeWithKeywords16 {#lang-rascal-tests-functionality-Pattern-matchNodeWithKeywords16}

```rascal
test bool matchNodeWithKeywords16()

```

## function matchVariable1 {#lang-rascal-tests-functionality-Pattern-matchVariable1}

```rascal
test bool matchVariable1()

```

## function matchVariable2 {#lang-rascal-tests-functionality-Pattern-matchVariable2}

```rascal
test bool matchVariable2()

```

## function matchVariable3 {#lang-rascal-tests-functionality-Pattern-matchVariable3}

```rascal
test bool matchVariable3()

```

## function matchVariable4 {#lang-rascal-tests-functionality-Pattern-matchVariable4}

```rascal
test bool matchVariable4()

```

## function matchVariable5 {#lang-rascal-tests-functionality-Pattern-matchVariable5}

```rascal
test bool matchVariable5()

```

## function matchVariable6 {#lang-rascal-tests-functionality-Pattern-matchVariable6}

```rascal
test bool matchVariable6()

```

## function matchTypedVariableBecomes1 {#lang-rascal-tests-functionality-Pattern-matchTypedVariableBecomes1}

```rascal
test bool matchTypedVariableBecomes1()

```

## function matchVariableBecomes1 {#lang-rascal-tests-functionality-Pattern-matchVariableBecomes1}

```rascal
test bool matchVariableBecomes1()

```

## function matchVariableBecomesEquality1 {#lang-rascal-tests-functionality-Pattern-matchVariableBecomesEquality1}

```rascal
test bool matchVariableBecomesEquality1()

```

## function matchVariableBecomesEquality2 {#lang-rascal-tests-functionality-Pattern-matchVariableBecomesEquality2}

```rascal
test bool matchVariableBecomesEquality2()

```

## function doubleVariableBecomes1 {#lang-rascal-tests-functionality-Pattern-doubleVariableBecomes1}

```rascal
test bool doubleVariableBecomes1()

```

## function doubleVariableBecomes2 {#lang-rascal-tests-functionality-Pattern-doubleVariableBecomes2}

```rascal
test bool doubleVariableBecomes2()

```

## function antiPattern1 {#lang-rascal-tests-functionality-Pattern-antiPattern1}

```rascal
test bool antiPattern1()

```

## function antiPattern2 {#lang-rascal-tests-functionality-Pattern-antiPattern2}

```rascal
test bool antiPattern2()

```

## function antiPattern3 {#lang-rascal-tests-functionality-Pattern-antiPattern3}

```rascal
test bool antiPattern3()

```

## function antiPattern4 {#lang-rascal-tests-functionality-Pattern-antiPattern4}

```rascal
test bool antiPattern4()

```

## function antiPattern5 {#lang-rascal-tests-functionality-Pattern-antiPattern5}

```rascal
test bool antiPattern5()

```

## function antiPattern6 {#lang-rascal-tests-functionality-Pattern-antiPattern6}

```rascal
test bool antiPattern6()

```

## function antiPattern7 {#lang-rascal-tests-functionality-Pattern-antiPattern7}

```rascal
test bool antiPattern7()

```

## function antiPattern8 {#lang-rascal-tests-functionality-Pattern-antiPattern8}

```rascal
test bool antiPattern8()

```

## function antiPattern9 {#lang-rascal-tests-functionality-Pattern-antiPattern9}

```rascal
test bool antiPattern9()

```

## function antiPattern10 {#lang-rascal-tests-functionality-Pattern-antiPattern10}

```rascal
test bool antiPattern10()

```

## function antiPattern11 {#lang-rascal-tests-functionality-Pattern-antiPattern11}

```rascal
test bool antiPattern11()

```

## function antiPattern12 {#lang-rascal-tests-functionality-Pattern-antiPattern12}

```rascal
test bool antiPattern12()

```

## function antiPattern13 {#lang-rascal-tests-functionality-Pattern-antiPattern13}

```rascal
test bool antiPattern13()

```

## function antiPattern14 {#lang-rascal-tests-functionality-Pattern-antiPattern14}

```rascal
test bool antiPattern14()

```

## function antiPattern15 {#lang-rascal-tests-functionality-Pattern-antiPattern15}

```rascal
test bool antiPattern15()

```

## function antiPattern16 {#lang-rascal-tests-functionality-Pattern-antiPattern16}

```rascal
test bool antiPattern16()

```

## function antiPattern17 {#lang-rascal-tests-functionality-Pattern-antiPattern17}

```rascal
test bool antiPattern17()

```

## function antiPattern18 {#lang-rascal-tests-functionality-Pattern-antiPattern18}

```rascal
test bool antiPattern18()

```

## function antiPattern19 {#lang-rascal-tests-functionality-Pattern-antiPattern19}

```rascal
test bool antiPattern19()

```

## function antiPattern20 {#lang-rascal-tests-functionality-Pattern-antiPattern20}

```rascal
test bool antiPattern20()

```

## function antiPattern21 {#lang-rascal-tests-functionality-Pattern-antiPattern21}

```rascal
test bool antiPattern21()

```

## function antiPattern22 {#lang-rascal-tests-functionality-Pattern-antiPattern22}

```rascal
test bool antiPattern22()

```

## function matchInLoop1 {#lang-rascal-tests-functionality-Pattern-matchInLoop1}

```rascal
test bool matchInLoop1()

```

## function matchInLoop2 {#lang-rascal-tests-functionality-Pattern-matchInLoop2}

```rascal
test bool matchInLoop2()

```

## function nodeMatchBacktracking {#lang-rascal-tests-functionality-Pattern-nodeMatchBacktracking}

```rascal
test bool nodeMatchBacktracking()

```

## function tupleMatchBacktracking {#lang-rascal-tests-functionality-Pattern-tupleMatchBacktracking}

```rascal
test bool tupleMatchBacktracking()

```

## function switchListOnValue1 {#lang-rascal-tests-functionality-Pattern-switchListOnValue1}

```rascal
test bool switchListOnValue1()

```

## function switchSetOnValue1 {#lang-rascal-tests-functionality-Pattern-switchSetOnValue1}

```rascal
test bool switchSetOnValue1()

```

