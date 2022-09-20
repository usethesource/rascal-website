---
title: "lang::rascal::tests::basic::Matching"
---

#### Usage

`import lang::rascal::tests::basic::Matching;`


## data T1 {#lang-rascal-tests-basic-Matching-T1}

```rascal
data T1  
     = \int()
     | \void()
     | string(str s)
     ;
```

## data T2 {#lang-rascal-tests-basic-Matching-T2}

```rascal
data T2  
     = \int()
     | \void()
     | string(str s)
     ;
```

## function incomparableTypesButNonEmptyIntersectionCanMatch {#lang-rascal-tests-basic-Matching-incomparableTypesButNonEmptyIntersectionCanMatch}

* ``test bool incomparableTypesButNonEmptyIntersectionCanMatch()``

## function tstQNameInPatternInt {#lang-rascal-tests-basic-Matching-tstQNameInPatternInt}

* ``test bool tstQNameInPatternInt()``

## function prefixShouldHaveEffect {#lang-rascal-tests-basic-Matching-prefixShouldHaveEffect}

* ``test bool prefixShouldHaveEffect()``

## function tstQNameInPatternVoid {#lang-rascal-tests-basic-Matching-tstQNameInPatternVoid}

* ``test bool tstQNameInPatternVoid()``

## function tstQNameInSwitchInt {#lang-rascal-tests-basic-Matching-tstQNameInSwitchInt}

* ``test bool tstQNameInSwitchInt()``

## function tstQNameInSwitchVoid {#lang-rascal-tests-basic-Matching-tstQNameInSwitchVoid}

* ``test bool tstQNameInSwitchVoid()``

## function tstQNameInSwitchString {#lang-rascal-tests-basic-Matching-tstQNameInSwitchString}

* ``test bool tstQNameInSwitchString()``

## function fT1 {#lang-rascal-tests-basic-Matching-fT1}

* ``bool fT1(T1::\int())``
* ``bool fT1(T1::\void())``
* ``bool fT1(T1::string(str _))``
* ``default bool fT1(value _)``

## function fT2 {#lang-rascal-tests-basic-Matching-fT2}

* ``bool fT2(T2::\int())``
* ``bool fT2(T2::\void())``
* ``bool fT2(T2::string(str _))``
* ``default bool fT2(value _)``

## function tstQNameinFun1Int {#lang-rascal-tests-basic-Matching-tstQNameinFun1Int}

* ``test bool tstQNameinFun1Int()``

## function tstQNameinFun2Int {#lang-rascal-tests-basic-Matching-tstQNameinFun2Int}

* ``test bool tstQNameinFun2Int()``

## function tstQNameinFun1Void {#lang-rascal-tests-basic-Matching-tstQNameinFun1Void}

* ``test bool tstQNameinFun1Void()``

## function tstQNameinFun2Void {#lang-rascal-tests-basic-Matching-tstQNameinFun2Void}

* ``test bool tstQNameinFun2Void()``

## function tstQNameinFun1String {#lang-rascal-tests-basic-Matching-tstQNameinFun1String}

* ``test bool tstQNameinFun1String()``

## function tstQNameinFun2String {#lang-rascal-tests-basic-Matching-tstQNameinFun2String}

* ``test bool tstQNameinFun2String()``

## function deepMatchKeywordParameter {#lang-rascal-tests-basic-Matching-deepMatchKeywordParameter}

* ``test bool deepMatchKeywordParameter()``

## data IG {#lang-rascal-tests-basic-Matching-IG}

```rascal
data IG  
     = ig(int x = 1)
     ;
```

## function ignoreKeywordParameter1 {#lang-rascal-tests-basic-Matching-ignoreKeywordParameter1}

* ``test bool ignoreKeywordParameter1()``

## function ignoreKeywordParameter2 {#lang-rascal-tests-basic-Matching-ignoreKeywordParameter2}

* ``test bool ignoreKeywordParameter2()``

## function ignoreKeywordParameter3 {#lang-rascal-tests-basic-Matching-ignoreKeywordParameter3}

* ``test bool ignoreKeywordParameter3()``

## function ignoreKeywordParameter4 {#lang-rascal-tests-basic-Matching-ignoreKeywordParameter4}

* ``test bool ignoreKeywordParameter4()``

## function ignoreKeywordParameter5 {#lang-rascal-tests-basic-Matching-ignoreKeywordParameter5}

* ``test bool ignoreKeywordParameter5()``

## function ignoreKeywordParameter6 {#lang-rascal-tests-basic-Matching-ignoreKeywordParameter6}

* ``test bool ignoreKeywordParameter6()``

## function ignoreKeywordParameter7 {#lang-rascal-tests-basic-Matching-ignoreKeywordParameter7}

* ``test bool ignoreKeywordParameter7()``

## function ignoreKeywordParameter8 {#lang-rascal-tests-basic-Matching-ignoreKeywordParameter8}

* ``test bool ignoreKeywordParameter8()``

## function ignoreKeywordParameter9 {#lang-rascal-tests-basic-Matching-ignoreKeywordParameter9}

* ``test bool ignoreKeywordParameter9()``

## function ignoreKeywordParameter10 {#lang-rascal-tests-basic-Matching-ignoreKeywordParameter10}

* ``test bool ignoreKeywordParameter10()``

## function ignoreKeywordParameter11 {#lang-rascal-tests-basic-Matching-ignoreKeywordParameter11}

* ``test bool ignoreKeywordParameter11()``

## function ignoreKeywordParameter12 {#lang-rascal-tests-basic-Matching-ignoreKeywordParameter12}

* ``test bool ignoreKeywordParameter12()``

## function ignoreKeywordParameter13 {#lang-rascal-tests-basic-Matching-ignoreKeywordParameter13}

* ``test bool ignoreKeywordParameter13()``

## function ignoreKeywordParameter14 {#lang-rascal-tests-basic-Matching-ignoreKeywordParameter14}

* ``test bool ignoreKeywordParameter14()``

