---
title: "module lang::rascal::tests::basic::Equality"
---

#### Usage

`import lang::rascal::tests::basic::Equality;`


## function canonicalTypes {#lang-rascal-tests-basic-Equality-canonicalTypes}

```rascal
test bool canonicalTypes(&T x, &Y y)

```

## function canonicalTypesRegression1 {#lang-rascal-tests-basic-Equality-canonicalTypesRegression1}

```rascal
test bool canonicalTypesRegression1()

```

## function canonicalTypesRegression2 {#lang-rascal-tests-basic-Equality-canonicalTypesRegression2}

```rascal
test bool canonicalTypesRegression2()

```

## function canonicalTypesRegression3 {#lang-rascal-tests-basic-Equality-canonicalTypesRegression3}

```rascal
test bool canonicalTypesRegression3()

```

## function reflexEq1 {#lang-rascal-tests-basic-Equality-reflexEq1}

```rascal
test bool reflexEq1(value x)

```

## function transEq1 {#lang-rascal-tests-basic-Equality-transEq1}

```rascal
test bool transEq1(value x, value y, value z)

```

## function commutativeEq1 {#lang-rascal-tests-basic-Equality-commutativeEq1}

```rascal
test bool commutativeEq1(value x, value y)

```

## function reflexEq2 {#lang-rascal-tests-basic-Equality-reflexEq2}

```rascal
test bool reflexEq2(value x)

```

## function transEq2 {#lang-rascal-tests-basic-Equality-transEq2}

```rascal
test bool transEq2(value x, value y, value z)

```

## function commutativeEq2 {#lang-rascal-tests-basic-Equality-commutativeEq2}

```rascal
test bool commutativeEq2(value x, value y)

```

## function allEqualValuesMatch {#lang-rascal-tests-basic-Equality-allEqualValuesMatch}

```rascal
test bool allEqualValuesMatch(node a, node b)

```

## function noMatchImpliesUnequal {#lang-rascal-tests-basic-Equality-noMatchImpliesUnequal}

```rascal
test bool noMatchImpliesUnequal(node a, node b)

```

## function matchIsEqualityModuloKeywordFields {#lang-rascal-tests-basic-Equality-matchIsEqualityModuloKeywordFields}

```rascal
test bool matchIsEqualityModuloKeywordFields(node x, node y)

```

## function transEqSame {#lang-rascal-tests-basic-Equality-transEqSame}

```rascal
test bool transEqSame(&Same x, &Same y, &Same z)

```

## function commutativeEqSame {#lang-rascal-tests-basic-Equality-commutativeEqSame}

```rascal
test bool commutativeEqSame(&Same x, &Same y)

```

## function reflexLTE {#lang-rascal-tests-basic-Equality-reflexLTE}

```rascal
test bool reflexLTE(value x)

```

## function antiSymmetricLTE {#lang-rascal-tests-basic-Equality-antiSymmetricLTE}

```rascal
test bool antiSymmetricLTE(value x, value y)

```

## function transLTE {#lang-rascal-tests-basic-Equality-transLTE}

```rascal
test bool transLTE(value x, value y, value z)

```

## function antiSymmetricLTESame {#lang-rascal-tests-basic-Equality-antiSymmetricLTESame}

```rascal
test bool antiSymmetricLTESame(&Same <: node x , &Same <: node y)

```

## function transLTESame {#lang-rascal-tests-basic-Equality-transLTESame}

```rascal
test bool transLTESame(&Same <: node x, &Same <: node y, &Same <: node z)

```

## function antiSymmetricLTEWithKeywordParamsLt1 {#lang-rascal-tests-basic-Equality-antiSymmetricLTEWithKeywordParamsLt1}

```rascal
test bool antiSymmetricLTEWithKeywordParamsLt1()

```

## function antiSymmetricLTEWithKeywordParamsLt2 {#lang-rascal-tests-basic-Equality-antiSymmetricLTEWithKeywordParamsLt2}

```rascal
test bool antiSymmetricLTEWithKeywordParamsLt2()

```

## function antiSymmetricLTEWithKeywordParamsEq {#lang-rascal-tests-basic-Equality-antiSymmetricLTEWithKeywordParamsEq}

```rascal
test bool antiSymmetricLTEWithKeywordParamsEq()

```

## function numTotalLTE1 {#lang-rascal-tests-basic-Equality-numTotalLTE1}

```rascal
test bool numTotalLTE1(num x, num y)

```

## function numAntiSymmetricLTE {#lang-rascal-tests-basic-Equality-numAntiSymmetricLTE}

```rascal
test bool numAntiSymmetricLTE(num x, num y)

```

## function numTransLTE {#lang-rascal-tests-basic-Equality-numTransLTE}

```rascal
test bool numTransLTE(num x, num y, num z)

```

## function numValueReflex {#lang-rascal-tests-basic-Equality-numValueReflex}

```rascal
test bool numValueReflex(num x)

```

## function intTotalLTE {#lang-rascal-tests-basic-Equality-intTotalLTE}

```rascal
test bool intTotalLTE(int x, int y)

```

## function intAntiSymmetricLTE {#lang-rascal-tests-basic-Equality-intAntiSymmetricLTE}

```rascal
test bool intAntiSymmetricLTE(int x, int y)

```

## function intTransLTE {#lang-rascal-tests-basic-Equality-intTransLTE}

```rascal
test bool intTransLTE(int x, int y, int z)

```

## function intValueReflex {#lang-rascal-tests-basic-Equality-intValueReflex}

```rascal
test bool intValueReflex(int x)

```

## function realTotalLTE {#lang-rascal-tests-basic-Equality-realTotalLTE}

```rascal
test bool realTotalLTE(real x, real y)

```

## function realAntiSymmetricLTE {#lang-rascal-tests-basic-Equality-realAntiSymmetricLTE}

```rascal
test bool realAntiSymmetricLTE(real x, real y)

```

## function realTransLTE {#lang-rascal-tests-basic-Equality-realTransLTE}

```rascal
test bool realTransLTE(real x, real y, real z)

```

## function realValueReflex {#lang-rascal-tests-basic-Equality-realValueReflex}

```rascal
test bool realValueReflex(real x)

```

## function ratTotalLTE {#lang-rascal-tests-basic-Equality-ratTotalLTE}

```rascal
test bool ratTotalLTE(rat x, rat y)

```

## function ratAntiSymmetricLTE {#lang-rascal-tests-basic-Equality-ratAntiSymmetricLTE}

```rascal
test bool ratAntiSymmetricLTE(rat x, rat y)

```

## function ratTransLTE {#lang-rascal-tests-basic-Equality-ratTransLTE}

```rascal
test bool ratTransLTE(rat x, rat y, rat z)

```

## function ratValueReflex {#lang-rascal-tests-basic-Equality-ratValueReflex}

```rascal
test bool ratValueReflex(rat x)

```

## function numTotalLTE2 {#lang-rascal-tests-basic-Equality-numTotalLTE2}

```rascal
test bool numTotalLTE2(str x, str y)

```

## function strAntiSymmetricLTE {#lang-rascal-tests-basic-Equality-strAntiSymmetricLTE}

```rascal
test bool strAntiSymmetricLTE(str x, str y)

```

## function strTransLTE {#lang-rascal-tests-basic-Equality-strTransLTE}

```rascal
test bool strTransLTE(str x, str y, str z)

```

## function strValueReflex {#lang-rascal-tests-basic-Equality-strValueReflex}

```rascal
test bool strValueReflex(rat x)

```

## function listReflexLTE {#lang-rascal-tests-basic-Equality-listReflexLTE}

```rascal
test bool listReflexLTE(list[value] x)

```

## function listAntiSymmetricLTE {#lang-rascal-tests-basic-Equality-listAntiSymmetricLTE}

```rascal
test bool listAntiSymmetricLTE(list[value] x, list[value] y)

```

## function listTransLTE {#lang-rascal-tests-basic-Equality-listTransLTE}

```rascal
test bool listTransLTE(list[value] x, list[value] y, list[value] z)

```

## function subsetOrdering1 {#lang-rascal-tests-basic-Equality-subsetOrdering1}

```rascal
test bool subsetOrdering1(set[value] x, set[value] y)

```

## function subsetOrdering2 {#lang-rascal-tests-basic-Equality-subsetOrdering2}

```rascal
test bool subsetOrdering2(set[value] x, set[value] y)

```

## function setReflexLTE1 {#lang-rascal-tests-basic-Equality-setReflexLTE1}

```rascal
test bool setReflexLTE1(set[value] x)

```

## function setAntiSymmetricLTE1 {#lang-rascal-tests-basic-Equality-setAntiSymmetricLTE1}

```rascal
test bool setAntiSymmetricLTE1(set[value] x, set[value] y)

```

## function setTransLTE1 {#lang-rascal-tests-basic-Equality-setTransLTE1}

```rascal
test bool setTransLTE1(set[value] x, set[value] y, set[value] z)

```

## function submapOrdering1 {#lang-rascal-tests-basic-Equality-submapOrdering1}

```rascal
test bool submapOrdering1(map[value,value] x, map[value,value] y)

```

## function submapOrdering2 {#lang-rascal-tests-basic-Equality-submapOrdering2}

```rascal
test bool submapOrdering2(map[value,value]x, map[value,value] y)

```

## function setReflexLTE2 {#lang-rascal-tests-basic-Equality-setReflexLTE2}

```rascal
test bool setReflexLTE2(map[value,value] x)

```

## function setAntiSymmetricLTE2 {#lang-rascal-tests-basic-Equality-setAntiSymmetricLTE2}

```rascal
test bool setAntiSymmetricLTE2(map[value,value] x, map[value,value] y)

```

## function setTransLTE2 {#lang-rascal-tests-basic-Equality-setTransLTE2}

```rascal
test bool setTransLTE2(map[value,value] x, map[value,value] y, map[value,value] z)

```

## function locReflexLTE {#lang-rascal-tests-basic-Equality-locReflexLTE}

```rascal
test bool locReflexLTE(loc x)

```

## function locAntiSymmetricLTE {#lang-rascal-tests-basic-Equality-locAntiSymmetricLTE}

```rascal
test bool locAntiSymmetricLTE(loc x, loc y)

```

## function locTransLTE {#lang-rascal-tests-basic-Equality-locTransLTE}

```rascal
test bool locTransLTE(loc x, loc y, loc z)

```

## function intToReal1 {#lang-rascal-tests-basic-Equality-intToReal1}

```rascal
test bool intToReal1(int i)

```

## function ratToReal1 {#lang-rascal-tests-basic-Equality-ratToReal1}

```rascal
test bool ratToReal1(rat r)

```

## function intToReal2 {#lang-rascal-tests-basic-Equality-intToReal2}

```rascal
test bool intToReal2(int i)

```

## function ratToReal2 {#lang-rascal-tests-basic-Equality-ratToReal2}

```rascal
test bool ratToReal2(rat r)

```

## function intToReal3 {#lang-rascal-tests-basic-Equality-intToReal3}

```rascal
test bool intToReal3(int i)

```

## function ratToReal3 {#lang-rascal-tests-basic-Equality-ratToReal3}

```rascal
test bool ratToReal3(rat r)

```

## function lessIntReal {#lang-rascal-tests-basic-Equality-lessIntReal}

```rascal
test bool lessIntReal(int i)

```

## function lessRatReal {#lang-rascal-tests-basic-Equality-lessRatReal}

```rascal
test bool lessRatReal(int i)

```

## function differentElements {#lang-rascal-tests-basic-Equality-differentElements}

```rascal
test bool differentElements(int i)

```

## function differentElement2 {#lang-rascal-tests-basic-Equality-differentElement2}

```rascal
test bool differentElement2(int i, rat r)

```

## function differentElement3 {#lang-rascal-tests-basic-Equality-differentElement3}

```rascal
test bool differentElement3(int i, real r)

```

## function differentKeys1 {#lang-rascal-tests-basic-Equality-differentKeys1}

```rascal
test bool differentKeys1(int i,real r)

```

## function differentKeys2 {#lang-rascal-tests-basic-Equality-differentKeys2}

```rascal
test bool differentKeys2(int i,rat r)

```

## function differentKeys3 {#lang-rascal-tests-basic-Equality-differentKeys3}

```rascal
test bool differentKeys3(int i)

```

## function eqImpliesEquals {#lang-rascal-tests-basic-Equality-eqImpliesEquals}

```rascal
test bool eqImpliesEquals(value x, value y)

```

## function nonComparabilityImpliesNonEq {#lang-rascal-tests-basic-Equality-nonComparabilityImpliesNonEq}

```rascal
test bool nonComparabilityImpliesNonEq(value x, value y)

```

## function comparabilityImpliesEquivalence {#lang-rascal-tests-basic-Equality-comparabilityImpliesEquivalence}

```rascal
test bool comparabilityImpliesEquivalence(value x, value y)

```

