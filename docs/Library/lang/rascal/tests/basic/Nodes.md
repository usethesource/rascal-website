---
title: "module lang::rascal::tests::basic::Nodes"
---

#### Usage

`import lang::rascal::tests::basic::Nodes;`


## function visitNode {#lang-rascal-tests-basic-Nodes-visitNode}

```rascal
test bool visitNode()

```

## function subscription {#lang-rascal-tests-basic-Nodes-subscription}

```rascal
test bool subscription(node N)

```

## function subscriptionWrapped {#lang-rascal-tests-basic-Nodes-subscriptionWrapped}

```rascal
test bool subscriptionWrapped(node N)

```

## function makeSlice {#lang-rascal-tests-basic-Nodes-makeSlice}

```rascal
list[value] makeSlice(list[value] L, int f, int s, int e)

```

## function sliceFirst1 {#lang-rascal-tests-basic-Nodes-sliceFirst1}

```rascal
test bool sliceFirst1(node N)

```

## function sliceFirst2 {#lang-rascal-tests-basic-Nodes-sliceFirst2}

```rascal
test bool sliceFirst2(node N)

```

## function sliceFirstSecond {#lang-rascal-tests-basic-Nodes-sliceFirstSecond}

```rascal
test bool sliceFirstSecond(node N)

```

## function sliceEnd {#lang-rascal-tests-basic-Nodes-sliceEnd}

```rascal
test bool sliceEnd(node N)

```

## function sliceSecondEnd {#lang-rascal-tests-basic-Nodes-sliceSecondEnd}

```rascal
test bool sliceSecondEnd(node N)

```

## function arbFirstEnd {#lang-rascal-tests-basic-Nodes-arbFirstEnd}

```rascal
tuple[int,int] arbFirstEnd(list[value] L)

```

## function sliceFirstSecondEnd {#lang-rascal-tests-basic-Nodes-sliceFirstSecondEnd}

```rascal
test bool sliceFirstSecondEnd(node N)

```

## function sliceFirstNegative {#lang-rascal-tests-basic-Nodes-sliceFirstNegative}

```rascal
test bool sliceFirstNegative(node N)

```

## function sliceEndNegative {#lang-rascal-tests-basic-Nodes-sliceEndNegative}

```rascal
test bool sliceEndNegative(node N)

```

## function sliceFirstNegativeSecondNegative {#lang-rascal-tests-basic-Nodes-sliceFirstNegativeSecondNegative}

```rascal
test bool sliceFirstNegativeSecondNegative(node N)

```

## function sliceSecondNegative {#lang-rascal-tests-basic-Nodes-sliceSecondNegative}

```rascal
test bool sliceSecondNegative(node N)

```

## function assignSlice1 {#lang-rascal-tests-basic-Nodes-assignSlice1}

```rascal
test bool assignSlice1()

```

## function assignSlice2 {#lang-rascal-tests-basic-Nodes-assignSlice2}

```rascal
test bool assignSlice2()

```

## function assignSlice3 {#lang-rascal-tests-basic-Nodes-assignSlice3}

```rascal
test bool assignSlice3()

```

## function assignSlice4 {#lang-rascal-tests-basic-Nodes-assignSlice4}

```rascal
test bool assignSlice4()

```

## function assignStep1 {#lang-rascal-tests-basic-Nodes-assignStep1}

```rascal
test bool assignStep1()

```

## function assignStep2 {#lang-rascal-tests-basic-Nodes-assignStep2}

```rascal
test bool assignStep2()

```

## function assignStep3 {#lang-rascal-tests-basic-Nodes-assignStep3}

```rascal
test bool assignStep3()

```

## function assignStep4 {#lang-rascal-tests-basic-Nodes-assignStep4}

```rascal
test bool assignStep4()

```

## function assignStep5 {#lang-rascal-tests-basic-Nodes-assignStep5}

```rascal
test bool assignStep5()

```

## function assignStep6 {#lang-rascal-tests-basic-Nodes-assignStep6}

```rascal
test bool assignStep6()

```

## function assignStep7 {#lang-rascal-tests-basic-Nodes-assignStep7}

```rascal
test bool assignStep7()

```

## function assignStep8 {#lang-rascal-tests-basic-Nodes-assignStep8}

```rascal
test bool assignStep8()

```

## function assignStep9 {#lang-rascal-tests-basic-Nodes-assignStep9}

```rascal
test bool assignStep9()

```

## function assignStep10 {#lang-rascal-tests-basic-Nodes-assignStep10}

```rascal
test bool assignStep10()

```

## function assignStep11 {#lang-rascal-tests-basic-Nodes-assignStep11}

```rascal
test bool assignStep11()

```

## function assignStep12 {#lang-rascal-tests-basic-Nodes-assignStep12}

```rascal
test bool assignStep12()

```

## function assignStep13 {#lang-rascal-tests-basic-Nodes-assignStep13}

```rascal
test bool assignStep13()

```

## function tstNode1 {#lang-rascal-tests-basic-Nodes-tstNode1}

```rascal
test bool tstNode1(node N)

```

## function tstNode2 {#lang-rascal-tests-basic-Nodes-tstNode2}

```rascal
test bool tstNode2(str name, list[value] children)

```

## data D {#lang-rascal-tests-basic-Nodes-D}

```rascal
data D  
     = d(int i, int j = 0)
     ;
```

## function testPositionalFieldOnNode {#lang-rascal-tests-basic-Nodes-testPositionalFieldOnNode}

```rascal
test bool testPositionalFieldOnNode()

```

## function testKeywordParameterOnNode {#lang-rascal-tests-basic-Nodes-testKeywordParameterOnNode}

```rascal
test bool testKeywordParameterOnNode()

```

## function testUnsetKeywordParameterOnNode {#lang-rascal-tests-basic-Nodes-testUnsetKeywordParameterOnNode}

```rascal
test bool testUnsetKeywordParameterOnNode()

```

## function testNonExistingFieldOnNode {#lang-rascal-tests-basic-Nodes-testNonExistingFieldOnNode}

```rascal
test bool testNonExistingFieldOnNode()

```

## function testNodeHasPositionalParameter {#lang-rascal-tests-basic-Nodes-testNodeHasPositionalParameter}

```rascal
test bool testNodeHasPositionalParameter()

```

## function testNodeHasKeywordParameter {#lang-rascal-tests-basic-Nodes-testNodeHasKeywordParameter}

```rascal
test bool testNodeHasKeywordParameter()

```

## function testNodeHasDefaultKeywordParameter {#lang-rascal-tests-basic-Nodes-testNodeHasDefaultKeywordParameter}

```rascal
test bool testNodeHasDefaultKeywordParameter()

```

## function testNodeIsPositionalParameterDefined {#lang-rascal-tests-basic-Nodes-testNodeIsPositionalParameterDefined}

```rascal
test bool testNodeIsPositionalParameterDefined()

```

## function testNodeIsKeywordParameterDefined {#lang-rascal-tests-basic-Nodes-testNodeIsKeywordParameterDefined}

```rascal
test bool testNodeIsKeywordParameterDefined()

```

## function testNodeDefaultKeywordParameterIsNotDefined {#lang-rascal-tests-basic-Nodes-testNodeDefaultKeywordParameterIsNotDefined}

```rascal
test bool testNodeDefaultKeywordParameterIsNotDefined()

```

## function testUnset {#lang-rascal-tests-basic-Nodes-testUnset}

```rascal
test bool testUnset(node n)

```

## function testUnsetRecNode {#lang-rascal-tests-basic-Nodes-testUnsetRecNode}

```rascal
test bool testUnsetRecNode(node v)

```

## function testUnsetRecValue {#lang-rascal-tests-basic-Nodes-testUnsetRecValue}

```rascal
test bool testUnsetRecValue(value v)

```

## function testUnsetRecInsideTuple {#lang-rascal-tests-basic-Nodes-testUnsetRecInsideTuple}

```rascal
test bool testUnsetRecInsideTuple()

```

