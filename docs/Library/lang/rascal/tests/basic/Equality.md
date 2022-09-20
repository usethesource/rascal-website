---
title: "lang::rascal::tests::basic::Equality"
---

#### Usage

`import lang::rascal::tests::basic::Equality;`


## function canonicalTypes {#lang-rascal-tests-basic-Equality-canonicalTypes}

* ``test bool canonicalTypes(&T x, &Y y)``

## function canonicalTypesRegression1 {#lang-rascal-tests-basic-Equality-canonicalTypesRegression1}

* ``test bool canonicalTypesRegression1()``

## function canonicalTypesRegression2 {#lang-rascal-tests-basic-Equality-canonicalTypesRegression2}

* ``test bool canonicalTypesRegression2()``

## function canonicalTypesRegression3 {#lang-rascal-tests-basic-Equality-canonicalTypesRegression3}

* ``test bool canonicalTypesRegression3()``

## function reflexEq1 {#lang-rascal-tests-basic-Equality-reflexEq1}

* ``test bool reflexEq1(value x)``

## function transEq1 {#lang-rascal-tests-basic-Equality-transEq1}

* ``test bool transEq1(value x, value y, value z)``

## function commutativeEq1 {#lang-rascal-tests-basic-Equality-commutativeEq1}

* ``test bool commutativeEq1(value x, value y)``

## function reflexEq2 {#lang-rascal-tests-basic-Equality-reflexEq2}

* ``test bool reflexEq2(value x)``

## function transEq2 {#lang-rascal-tests-basic-Equality-transEq2}

* ``test bool transEq2(value x, value y, value z)``

## function commutativeEq2 {#lang-rascal-tests-basic-Equality-commutativeEq2}

* ``test bool commutativeEq2(value x, value y)``

## function allEqualValuesMatch {#lang-rascal-tests-basic-Equality-allEqualValuesMatch}

* ``test bool allEqualValuesMatch(node a, node b)``

## function noMatchImpliesUnequal {#lang-rascal-tests-basic-Equality-noMatchImpliesUnequal}

* ``test bool noMatchImpliesUnequal(node a, node b)``

## function matchIsEqualityModuloKeywordFields {#lang-rascal-tests-basic-Equality-matchIsEqualityModuloKeywordFields}

* ``test bool matchIsEqualityModuloKeywordFields(node x, node y)``

## function transEqSame {#lang-rascal-tests-basic-Equality-transEqSame}

* ``test bool transEqSame(&Same x, &Same y, &Same z)``

## function commutativeEqSame {#lang-rascal-tests-basic-Equality-commutativeEqSame}

* ``test bool commutativeEqSame(&Same x, &Same y)``

## function reflexLTE {#lang-rascal-tests-basic-Equality-reflexLTE}

* ``test bool reflexLTE(value x)``

## function antiSymmetricLTE {#lang-rascal-tests-basic-Equality-antiSymmetricLTE}

* ``test bool antiSymmetricLTE(value x, value y)``

## function transLTE {#lang-rascal-tests-basic-Equality-transLTE}

* ``test bool transLTE(value x, value y, value z)``

## function antiSymmetricLTESame {#lang-rascal-tests-basic-Equality-antiSymmetricLTESame}

* ``test bool antiSymmetricLTESame(&Same <: node x , &Same <: node y)``

## function transLTESame {#lang-rascal-tests-basic-Equality-transLTESame}

* ``test bool transLTESame(&Same <: node x, &Same <: node y, &Same <: node z)``

## function antiSymmetricLTEWithKeywordParamsLt1 {#lang-rascal-tests-basic-Equality-antiSymmetricLTEWithKeywordParamsLt1}

* ``test bool antiSymmetricLTEWithKeywordParamsLt1()``

## function antiSymmetricLTEWithKeywordParamsLt2 {#lang-rascal-tests-basic-Equality-antiSymmetricLTEWithKeywordParamsLt2}

* ``test bool antiSymmetricLTEWithKeywordParamsLt2()``

## function antiSymmetricLTEWithKeywordParamsEq {#lang-rascal-tests-basic-Equality-antiSymmetricLTEWithKeywordParamsEq}

* ``test bool antiSymmetricLTEWithKeywordParamsEq()``

## function numTotalLTE1 {#lang-rascal-tests-basic-Equality-numTotalLTE1}

* ``test bool numTotalLTE1(num x, num y)``

## function numAntiSymmetricLTE {#lang-rascal-tests-basic-Equality-numAntiSymmetricLTE}

* ``test bool numAntiSymmetricLTE(num x, num y)``

## function numTransLTE {#lang-rascal-tests-basic-Equality-numTransLTE}

* ``test bool numTransLTE(num x, num y, num z)``

## function numValueReflex {#lang-rascal-tests-basic-Equality-numValueReflex}

* ``test bool numValueReflex(num x)``

## function intTotalLTE {#lang-rascal-tests-basic-Equality-intTotalLTE}

* ``test bool intTotalLTE(int x, int y)``

## function intAntiSymmetricLTE {#lang-rascal-tests-basic-Equality-intAntiSymmetricLTE}

* ``test bool intAntiSymmetricLTE(int x, int y)``

## function intTransLTE {#lang-rascal-tests-basic-Equality-intTransLTE}

* ``test bool intTransLTE(int x, int y, int z)``

## function intValueReflex {#lang-rascal-tests-basic-Equality-intValueReflex}

* ``test bool intValueReflex(int x)``

## function realTotalLTE {#lang-rascal-tests-basic-Equality-realTotalLTE}

* ``test bool realTotalLTE(real x, real y)``

## function realAntiSymmetricLTE {#lang-rascal-tests-basic-Equality-realAntiSymmetricLTE}

* ``test bool realAntiSymmetricLTE(real x, real y)``

## function realTransLTE {#lang-rascal-tests-basic-Equality-realTransLTE}

* ``test bool realTransLTE(real x, real y, real z)``

## function realValueReflex {#lang-rascal-tests-basic-Equality-realValueReflex}

* ``test bool realValueReflex(real x)``

## function ratTotalLTE {#lang-rascal-tests-basic-Equality-ratTotalLTE}

* ``test bool ratTotalLTE(rat x, rat y)``

## function ratAntiSymmetricLTE {#lang-rascal-tests-basic-Equality-ratAntiSymmetricLTE}

* ``test bool ratAntiSymmetricLTE(rat x, rat y)``

## function ratTransLTE {#lang-rascal-tests-basic-Equality-ratTransLTE}

* ``test bool ratTransLTE(rat x, rat y, rat z)``

## function ratValueReflex {#lang-rascal-tests-basic-Equality-ratValueReflex}

* ``test bool ratValueReflex(rat x)``

## function numTotalLTE2 {#lang-rascal-tests-basic-Equality-numTotalLTE2}

* ``test bool numTotalLTE2(str x, str y)``

## function strAntiSymmetricLTE {#lang-rascal-tests-basic-Equality-strAntiSymmetricLTE}

* ``test bool strAntiSymmetricLTE(str x, str y)``

## function strTransLTE {#lang-rascal-tests-basic-Equality-strTransLTE}

* ``test bool strTransLTE(str x, str y, str z)``

## function strValueReflex {#lang-rascal-tests-basic-Equality-strValueReflex}

* ``test bool strValueReflex(rat x)``

## function listReflexLTE {#lang-rascal-tests-basic-Equality-listReflexLTE}

* ``test bool listReflexLTE(list[value] x)``

## function listAntiSymmetricLTE {#lang-rascal-tests-basic-Equality-listAntiSymmetricLTE}

* ``test bool listAntiSymmetricLTE(list[value] x, list[value] y)``

## function listTransLTE {#lang-rascal-tests-basic-Equality-listTransLTE}

* ``test bool listTransLTE(list[value] x, list[value] y, list[value] z)``

## function subsetOrdering1 {#lang-rascal-tests-basic-Equality-subsetOrdering1}

* ``test bool subsetOrdering1(set[value] x, set[value] y)``

## function subsetOrdering2 {#lang-rascal-tests-basic-Equality-subsetOrdering2}

* ``test bool subsetOrdering2(set[value] x, set[value] y)``

## function setReflexLTE1 {#lang-rascal-tests-basic-Equality-setReflexLTE1}

* ``test bool setReflexLTE1(set[value] x)``

## function setAntiSymmetricLTE1 {#lang-rascal-tests-basic-Equality-setAntiSymmetricLTE1}

* ``test bool setAntiSymmetricLTE1(set[value] x, set[value] y)``

## function setTransLTE1 {#lang-rascal-tests-basic-Equality-setTransLTE1}

* ``test bool setTransLTE1(set[value] x, set[value] y, set[value] z)``

## function submapOrdering1 {#lang-rascal-tests-basic-Equality-submapOrdering1}

* ``test bool submapOrdering1(map[value,value] x, map[value,value] y)``

## function submapOrdering2 {#lang-rascal-tests-basic-Equality-submapOrdering2}

* ``test bool submapOrdering2(map[value,value]x, map[value,value] y)``

## function setReflexLTE2 {#lang-rascal-tests-basic-Equality-setReflexLTE2}

* ``test bool setReflexLTE2(map[value,value] x)``

## function setAntiSymmetricLTE2 {#lang-rascal-tests-basic-Equality-setAntiSymmetricLTE2}

* ``test bool setAntiSymmetricLTE2(map[value,value] x, map[value,value] y)``

## function setTransLTE2 {#lang-rascal-tests-basic-Equality-setTransLTE2}

* ``test bool setTransLTE2(map[value,value] x, map[value,value] y, map[value,value] z)``

## function locReflexLTE {#lang-rascal-tests-basic-Equality-locReflexLTE}

* ``test bool locReflexLTE(loc x)``

## function locAntiSymmetricLTE {#lang-rascal-tests-basic-Equality-locAntiSymmetricLTE}

* ``test bool locAntiSymmetricLTE(loc x, loc y)``

## function locTransLTE {#lang-rascal-tests-basic-Equality-locTransLTE}

* ``test bool locTransLTE(loc x, loc y, loc z)``

## function intToReal1 {#lang-rascal-tests-basic-Equality-intToReal1}

* ``test bool intToReal1(int i)``

## function ratToReal1 {#lang-rascal-tests-basic-Equality-ratToReal1}

* ``test bool ratToReal1(rat r)``

## function intToReal2 {#lang-rascal-tests-basic-Equality-intToReal2}

* ``test bool intToReal2(int i)``

## function ratToReal2 {#lang-rascal-tests-basic-Equality-ratToReal2}

* ``test bool ratToReal2(rat r)``

## function intToReal3 {#lang-rascal-tests-basic-Equality-intToReal3}

* ``test bool intToReal3(int i)``

## function ratToReal3 {#lang-rascal-tests-basic-Equality-ratToReal3}

* ``test bool ratToReal3(rat r)``

## function lessIntReal {#lang-rascal-tests-basic-Equality-lessIntReal}

* ``test bool lessIntReal(int i)``

## function lessRatReal {#lang-rascal-tests-basic-Equality-lessRatReal}

* ``test bool lessRatReal(int i)``

## function differentElements {#lang-rascal-tests-basic-Equality-differentElements}

* ``test bool differentElements(int i)``

## function differentElement2 {#lang-rascal-tests-basic-Equality-differentElement2}

* ``test bool differentElement2(int i, rat r)``

## function differentElement3 {#lang-rascal-tests-basic-Equality-differentElement3}

* ``test bool differentElement3(int i, real r)``

## function differentKeys1 {#lang-rascal-tests-basic-Equality-differentKeys1}

* ``test bool differentKeys1(int i,real r)``

## function differentKeys2 {#lang-rascal-tests-basic-Equality-differentKeys2}

* ``test bool differentKeys2(int i,rat r)``

## function differentKeys3 {#lang-rascal-tests-basic-Equality-differentKeys3}

* ``test bool differentKeys3(int i)``

## function eqImpliesEquals {#lang-rascal-tests-basic-Equality-eqImpliesEquals}

* ``test bool eqImpliesEquals(value x, value y)``

## function nonComparabilityImpliesNonEq {#lang-rascal-tests-basic-Equality-nonComparabilityImpliesNonEq}

* ``test bool nonComparabilityImpliesNonEq(value x, value y)``

## function comparabilityImpliesEquivalence {#lang-rascal-tests-basic-Equality-comparabilityImpliesEquivalence}

* ``test bool comparabilityImpliesEquivalence(value x, value y)``

