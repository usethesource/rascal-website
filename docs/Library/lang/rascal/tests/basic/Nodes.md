---
title: "module lang::rascal::tests::basic::Nodes"
---

#### Usage

`import lang::rascal::tests::basic::Nodes;`


## function visitNode {#lang-rascal-tests-basic-Nodes-visitNode}

* ``test bool visitNode()``

## function subscription {#lang-rascal-tests-basic-Nodes-subscription}

* ``test bool subscription(node N)``

## function subscriptionWrapped {#lang-rascal-tests-basic-Nodes-subscriptionWrapped}

* ``test bool subscriptionWrapped(node N)``

## function makeSlice {#lang-rascal-tests-basic-Nodes-makeSlice}

* ``list[value] makeSlice(list[value] L, int f, int s, int e)``

## function sliceFirst1 {#lang-rascal-tests-basic-Nodes-sliceFirst1}

* ``test bool sliceFirst1(node N)``

## function sliceFirst2 {#lang-rascal-tests-basic-Nodes-sliceFirst2}

* ``test bool sliceFirst2(node N)``

## function sliceFirstSecond {#lang-rascal-tests-basic-Nodes-sliceFirstSecond}

* ``test bool sliceFirstSecond(node N)``

## function sliceEnd {#lang-rascal-tests-basic-Nodes-sliceEnd}

* ``test bool sliceEnd(node N)``

## function sliceSecondEnd {#lang-rascal-tests-basic-Nodes-sliceSecondEnd}

* ``test bool sliceSecondEnd(node N)``

## function arbFirstEnd {#lang-rascal-tests-basic-Nodes-arbFirstEnd}

* ``tuple[int,int] arbFirstEnd(list[value] L)``

## function sliceFirstSecondEnd {#lang-rascal-tests-basic-Nodes-sliceFirstSecondEnd}

* ``test bool sliceFirstSecondEnd(node N)``

## function sliceFirstNegative {#lang-rascal-tests-basic-Nodes-sliceFirstNegative}

* ``test bool sliceFirstNegative(node N)``

## function sliceEndNegative {#lang-rascal-tests-basic-Nodes-sliceEndNegative}

* ``test bool sliceEndNegative(node N)``

## function sliceFirstNegativeSecondNegative {#lang-rascal-tests-basic-Nodes-sliceFirstNegativeSecondNegative}

* ``test bool sliceFirstNegativeSecondNegative(node N)``

## function sliceSecondNegative {#lang-rascal-tests-basic-Nodes-sliceSecondNegative}

* ``test bool sliceSecondNegative(node N)``

## function assignSlice1 {#lang-rascal-tests-basic-Nodes-assignSlice1}

* ``test bool assignSlice1()``

## function assignSlice2 {#lang-rascal-tests-basic-Nodes-assignSlice2}

* ``test bool assignSlice2()``

## function assignSlice3 {#lang-rascal-tests-basic-Nodes-assignSlice3}

* ``test bool assignSlice3()``

## function assignSlice4 {#lang-rascal-tests-basic-Nodes-assignSlice4}

* ``test bool assignSlice4()``

## function assignStep1 {#lang-rascal-tests-basic-Nodes-assignStep1}

* ``test bool assignStep1()``

## function assignStep2 {#lang-rascal-tests-basic-Nodes-assignStep2}

* ``test bool assignStep2()``

## function assignStep3 {#lang-rascal-tests-basic-Nodes-assignStep3}

* ``test bool assignStep3()``

## function assignStep4 {#lang-rascal-tests-basic-Nodes-assignStep4}

* ``test bool assignStep4()``

## function assignStep5 {#lang-rascal-tests-basic-Nodes-assignStep5}

* ``test bool assignStep5()``

## function assignStep6 {#lang-rascal-tests-basic-Nodes-assignStep6}

* ``test bool assignStep6()``

## function assignStep7 {#lang-rascal-tests-basic-Nodes-assignStep7}

* ``test bool assignStep7()``

## function assignStep8 {#lang-rascal-tests-basic-Nodes-assignStep8}

* ``test bool assignStep8()``

## function assignStep9 {#lang-rascal-tests-basic-Nodes-assignStep9}

* ``test bool assignStep9()``

## function assignStep10 {#lang-rascal-tests-basic-Nodes-assignStep10}

* ``test bool assignStep10()``

## function assignStep11 {#lang-rascal-tests-basic-Nodes-assignStep11}

* ``test bool assignStep11()``

## function assignStep12 {#lang-rascal-tests-basic-Nodes-assignStep12}

* ``test bool assignStep12()``

## function assignStep13 {#lang-rascal-tests-basic-Nodes-assignStep13}

* ``test bool assignStep13()``

## function tstNode1 {#lang-rascal-tests-basic-Nodes-tstNode1}

* ``test bool tstNode1(node N)``

## function tstNode2 {#lang-rascal-tests-basic-Nodes-tstNode2}

* ``test bool tstNode2(str name, list[value] children)``

## data D {#lang-rascal-tests-basic-Nodes-D}

```rascal
data D  
     = d(int i, int j = 0)
     ;
```

## function testPositionalFieldOnNode {#lang-rascal-tests-basic-Nodes-testPositionalFieldOnNode}

* ``test bool testPositionalFieldOnNode()``

## function testKeywordParameterOnNode {#lang-rascal-tests-basic-Nodes-testKeywordParameterOnNode}

* ``test bool testKeywordParameterOnNode()``

## function testUnsetKeywordParameterOnNode {#lang-rascal-tests-basic-Nodes-testUnsetKeywordParameterOnNode}

* ``test bool testUnsetKeywordParameterOnNode()``

## function testNonExistingFieldOnNode {#lang-rascal-tests-basic-Nodes-testNonExistingFieldOnNode}

* ``test bool testNonExistingFieldOnNode()``

## function testNodeHasPositionalParameter {#lang-rascal-tests-basic-Nodes-testNodeHasPositionalParameter}

* ``test bool testNodeHasPositionalParameter()``

## function testNodeHasKeywordParameter {#lang-rascal-tests-basic-Nodes-testNodeHasKeywordParameter}

* ``test bool testNodeHasKeywordParameter()``

## function testNodeHasDefaultKeywordParameter {#lang-rascal-tests-basic-Nodes-testNodeHasDefaultKeywordParameter}

* ``test bool testNodeHasDefaultKeywordParameter()``

## function testNodeIsPositionalParameterDefined {#lang-rascal-tests-basic-Nodes-testNodeIsPositionalParameterDefined}

* ``test bool testNodeIsPositionalParameterDefined()``

## function testNodeIsKeywordParameterDefined {#lang-rascal-tests-basic-Nodes-testNodeIsKeywordParameterDefined}

* ``test bool testNodeIsKeywordParameterDefined()``

## function testNodeDefaultKeywordParameterIsNotDefined {#lang-rascal-tests-basic-Nodes-testNodeDefaultKeywordParameterIsNotDefined}

* ``test bool testNodeDefaultKeywordParameterIsNotDefined()``

## function testUnset {#lang-rascal-tests-basic-Nodes-testUnset}

* ``test bool testUnset(node n)``

## function testUnsetRecNode {#lang-rascal-tests-basic-Nodes-testUnsetRecNode}

* ``test bool testUnsetRecNode(node v)``

## function testUnsetRecValue {#lang-rascal-tests-basic-Nodes-testUnsetRecValue}

* ``test bool testUnsetRecValue(value v)``

## function testUnsetRecInsideTuple {#lang-rascal-tests-basic-Nodes-testUnsetRecInsideTuple}

* ``test bool testUnsetRecInsideTuple()``

