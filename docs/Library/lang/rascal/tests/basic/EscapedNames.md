---
title: "module lang::rascal::tests::basic::EscapedNames"
---

#### Usage

`import lang::rascal::tests::basic::EscapedNames;`


## function escapedGlobal {#lang-rascal-tests-basic-EscapedNames-escapedGlobal}

```rascal
test bool escapedGlobal()

```

## function \twice {#lang-rascal-tests-basic-EscapedNames-\twice}

```rascal
int \twice(int n)

```

## function \do-twice {#lang-rascal-tests-basic-EscapedNames-\do-twice}

```rascal
int \do-twice(int n)

```

## function escapedFunctionName1 {#lang-rascal-tests-basic-EscapedNames-escapedFunctionName1}

```rascal
test bool escapedFunctionName1()

```

## function escapedFunctionName2 {#lang-rascal-tests-basic-EscapedNames-escapedFunctionName2}

```rascal
test bool escapedFunctionName2()

```

## function escapedFunctionName3 {#lang-rascal-tests-basic-EscapedNames-escapedFunctionName3}

```rascal
test bool escapedFunctionName3()

```

## function same1 {#lang-rascal-tests-basic-EscapedNames-same1}

```rascal
int same1(int \a)

```

## function same2 {#lang-rascal-tests-basic-EscapedNames-same2}

```rascal
int same2(int \a)

```

## function same3 {#lang-rascal-tests-basic-EscapedNames-same3}

```rascal
int same3(int \an-a)

```

## function escapedPositionalFormal1 {#lang-rascal-tests-basic-EscapedNames-escapedPositionalFormal1}

```rascal
test bool escapedPositionalFormal1()

```

## function escapedPositionalFormal2 {#lang-rascal-tests-basic-EscapedNames-escapedPositionalFormal2}

```rascal
test bool escapedPositionalFormal2()

```

## function escapedPositionalFormal3 {#lang-rascal-tests-basic-EscapedNames-escapedPositionalFormal3}

```rascal
test bool escapedPositionalFormal3()

```

## function samekw1 {#lang-rascal-tests-basic-EscapedNames-samekw1}

```rascal
int samekw1(int \n = 42)

```

## function samekw2 {#lang-rascal-tests-basic-EscapedNames-samekw2}

```rascal
int samekw2(int \n = 42)

```

## function samekw3 {#lang-rascal-tests-basic-EscapedNames-samekw3}

```rascal
int samekw3(int \a-n = 42)

```

## function escapedKeywordFormal1 {#lang-rascal-tests-basic-EscapedNames-escapedKeywordFormal1}

```rascal
test bool escapedKeywordFormal1()

```

## function escapedKeywordFormal2 {#lang-rascal-tests-basic-EscapedNames-escapedKeywordFormal2}

```rascal
test bool escapedKeywordFormal2()

```

## function escapedKeywordFormal3 {#lang-rascal-tests-basic-EscapedNames-escapedKeywordFormal3}

```rascal
test bool escapedKeywordFormal3()

```

## data D1 {#lang-rascal-tests-basic-EscapedNames-D1}

```rascal
data D1  
     = d1()
     ;
```

## data \D2 {#lang-rascal-tests-basic-EscapedNames-\D2}

```rascal
data \D2  
     = d2()
     ;
```

## data \A-D3 {#lang-rascal-tests-basic-EscapedNames-\A-D3}

```rascal
data \A-D3  
     = d3()
     ;
```

## function escapedADTName1 {#lang-rascal-tests-basic-EscapedNames-escapedADTName1}

```rascal
test bool escapedADTName1()

```

## function escapedADTName2 {#lang-rascal-tests-basic-EscapedNames-escapedADTName2}

```rascal
test bool escapedADTName2()

```

## function escapedADTName3 {#lang-rascal-tests-basic-EscapedNames-escapedADTName3}

```rascal
test bool escapedADTName3()

```

## function escapedADTName4 {#lang-rascal-tests-basic-EscapedNames-escapedADTName4}

```rascal
test bool escapedADTName4()

```

## data E1 {#lang-rascal-tests-basic-EscapedNames-E1}

```rascal
data E1  
     = e1()
     ;
```

## data E2 {#lang-rascal-tests-basic-EscapedNames-E2}

```rascal
data E2  
     = \an-e2()
     ;
```

## function escapedConstructorName1 {#lang-rascal-tests-basic-EscapedNames-escapedConstructorName1}

```rascal
test bool escapedConstructorName1()

```

## function escapedConstructorName2 {#lang-rascal-tests-basic-EscapedNames-escapedConstructorName2}

```rascal
test bool escapedConstructorName2()

```

## data F1 {#lang-rascal-tests-basic-EscapedNames-F1}

```rascal
data F1  
     = f1(int n)
     ;
```

## data F2 {#lang-rascal-tests-basic-EscapedNames-F2}

```rascal
data F2  
     = f2(int \a-n)
     ;
```

## function escapedPositionalField1 {#lang-rascal-tests-basic-EscapedNames-escapedPositionalField1}

```rascal
test bool escapedPositionalField1()

```

## function escapedPositionalField2 {#lang-rascal-tests-basic-EscapedNames-escapedPositionalField2}

```rascal
test bool escapedPositionalField2()

```

## function escapedPositionalField3 {#lang-rascal-tests-basic-EscapedNames-escapedPositionalField3}

```rascal
test bool escapedPositionalField3()

```

## data G1 {#lang-rascal-tests-basic-EscapedNames-G1}

```rascal
data G1  
     = g1(int n = 42)
     ;
```

## data G2 {#lang-rascal-tests-basic-EscapedNames-G2}

```rascal
data G2  
     = g2(int \n = 42)
     ;
```

## data G3 {#lang-rascal-tests-basic-EscapedNames-G3}

```rascal
data G3  
     = g3(int \a-n = 42)
     ;
```

## function escapedkeywordField1a {#lang-rascal-tests-basic-EscapedNames-escapedkeywordField1a}

```rascal
test bool escapedkeywordField1a()

```

## function escapedkeywordField1b {#lang-rascal-tests-basic-EscapedNames-escapedkeywordField1b}

```rascal
test bool escapedkeywordField1b()

```

## function escapedkeywordField1c {#lang-rascal-tests-basic-EscapedNames-escapedkeywordField1c}

```rascal
test bool escapedkeywordField1c()

```

## function escapedkeywordField1d {#lang-rascal-tests-basic-EscapedNames-escapedkeywordField1d}

```rascal
test bool escapedkeywordField1d()

```

## function escapedkeywordField2a {#lang-rascal-tests-basic-EscapedNames-escapedkeywordField2a}

```rascal
test bool escapedkeywordField2a()

```

## function escapedkeywordField2b {#lang-rascal-tests-basic-EscapedNames-escapedkeywordField2b}

```rascal
test bool escapedkeywordField2b()

```

## function escapedkeywordField2c {#lang-rascal-tests-basic-EscapedNames-escapedkeywordField2c}

```rascal
test bool escapedkeywordField2c()

```

## function escapedkeywordField2d {#lang-rascal-tests-basic-EscapedNames-escapedkeywordField2d}

```rascal
test bool escapedkeywordField2d()

```

## function escapedkeywordField3 {#lang-rascal-tests-basic-EscapedNames-escapedkeywordField3}

```rascal
test bool escapedkeywordField3()

```

## function escapedkeywordFieldNode {#lang-rascal-tests-basic-EscapedNames-escapedkeywordFieldNode}

```rascal
test bool escapedkeywordFieldNode()

```

## data H1 {#lang-rascal-tests-basic-EscapedNames-H1}

```rascal
data H1[&T]  
     = h1(&T n)
     ;
```

## data H2 {#lang-rascal-tests-basic-EscapedNames-H2}

```rascal
data H2[&\T]  
     = h2(&T n)
     ;
```

## data H3 {#lang-rascal-tests-basic-EscapedNames-H3}

```rascal
data H3[&\T]  
     = h3(&\T n)
     ;
```

## data H4 {#lang-rascal-tests-basic-EscapedNames-H4}

```rascal
data H4[&T]  
     = h4(&\T n)
     ;
```

## function escapedTypeParameter1 {#lang-rascal-tests-basic-EscapedNames-escapedTypeParameter1}

```rascal
test bool escapedTypeParameter1()

```

## function escapedTypeParameter2 {#lang-rascal-tests-basic-EscapedNames-escapedTypeParameter2}

```rascal
test bool escapedTypeParameter2()

```

## function escapedTypeParameter3 {#lang-rascal-tests-basic-EscapedNames-escapedTypeParameter3}

```rascal
test bool escapedTypeParameter3()

```

## function escapedTypeParameter4 {#lang-rascal-tests-basic-EscapedNames-escapedTypeParameter4}

```rascal
test bool escapedTypeParameter4()

```

## alias A {#lang-rascal-tests-basic-EscapedNames-A}

```rascal
int

```

## alias \B {#lang-rascal-tests-basic-EscapedNames-\B}

```rascal
int

```

## alias C {#lang-rascal-tests-basic-EscapedNames-C}

```rascal
B

```

## function escapedAlias1 {#lang-rascal-tests-basic-EscapedNames-escapedAlias1}

```rascal
test bool escapedAlias1()

```

## function escapedAlias2 {#lang-rascal-tests-basic-EscapedNames-escapedAlias2}

```rascal
test bool escapedAlias2()

```

## function escapedAlias3 {#lang-rascal-tests-basic-EscapedNames-escapedAlias3}

```rascal
test bool escapedAlias3()

```

## function escapedAlias4 {#lang-rascal-tests-basic-EscapedNames-escapedAlias4}

```rascal
test bool escapedAlias4()

```

## function escapedAlias5 {#lang-rascal-tests-basic-EscapedNames-escapedAlias5}

```rascal
test bool escapedAlias5()

```

## function escapedAlias6 {#lang-rascal-tests-basic-EscapedNames-escapedAlias6}

```rascal
test bool escapedAlias6()

```

## function escapedPatternName1a {#lang-rascal-tests-basic-EscapedNames-escapedPatternName1a}

```rascal
test bool escapedPatternName1a()

```

## function escapedPatternName1b {#lang-rascal-tests-basic-EscapedNames-escapedPatternName1b}

```rascal
test bool escapedPatternName1b()

```

## function escapedPatternName2a {#lang-rascal-tests-basic-EscapedNames-escapedPatternName2a}

```rascal
test bool escapedPatternName2a()

```

## function escapedPatternName2b {#lang-rascal-tests-basic-EscapedNames-escapedPatternName2b}

```rascal
test bool escapedPatternName2b()

```

## function escapedPatternName3a {#lang-rascal-tests-basic-EscapedNames-escapedPatternName3a}

```rascal
test bool escapedPatternName3a()

```

## function escapedPatternName3b {#lang-rascal-tests-basic-EscapedNames-escapedPatternName3b}

```rascal
test bool escapedPatternName3b()

```

## function escapedPatternName4a {#lang-rascal-tests-basic-EscapedNames-escapedPatternName4a}

```rascal
test bool escapedPatternName4a()

```

## function escapedPatternName4b {#lang-rascal-tests-basic-EscapedNames-escapedPatternName4b}

```rascal
test bool escapedPatternName4b()

```

## function escapedPatternName5a {#lang-rascal-tests-basic-EscapedNames-escapedPatternName5a}

```rascal
test bool escapedPatternName5a()

```

## function escapedPatternName5b {#lang-rascal-tests-basic-EscapedNames-escapedPatternName5b}

```rascal
test bool escapedPatternName5b()

```

## function escapedPatternName6a {#lang-rascal-tests-basic-EscapedNames-escapedPatternName6a}

```rascal
test bool escapedPatternName6a()

```

## function escapedPatternName6b {#lang-rascal-tests-basic-EscapedNames-escapedPatternName6b}

```rascal
test bool escapedPatternName6b()

```

## function escapedPatternName7a {#lang-rascal-tests-basic-EscapedNames-escapedPatternName7a}

```rascal
test bool escapedPatternName7a()

```

## function escapedPatternName7b {#lang-rascal-tests-basic-EscapedNames-escapedPatternName7b}

```rascal
test bool escapedPatternName7b()

```

## function escapedPatternName8a {#lang-rascal-tests-basic-EscapedNames-escapedPatternName8a}

```rascal
test bool escapedPatternName8a()

```

## function escapedPatternName8b {#lang-rascal-tests-basic-EscapedNames-escapedPatternName8b}

```rascal
test bool escapedPatternName8b()

```

## function escapedPatternName9a {#lang-rascal-tests-basic-EscapedNames-escapedPatternName9a}

```rascal
test bool escapedPatternName9a()

```

## function escapedPatternName9b {#lang-rascal-tests-basic-EscapedNames-escapedPatternName9b}

```rascal
test bool escapedPatternName9b()

```

## function escapedPatternName10a {#lang-rascal-tests-basic-EscapedNames-escapedPatternName10a}

```rascal
test bool escapedPatternName10a()

```

## function escapedPatternName10b {#lang-rascal-tests-basic-EscapedNames-escapedPatternName10b}

```rascal
test bool escapedPatternName10b()

```

## function escapedPatternName11a {#lang-rascal-tests-basic-EscapedNames-escapedPatternName11a}

```rascal
test bool escapedPatternName11a()

```

## function escapedPatternName11b {#lang-rascal-tests-basic-EscapedNames-escapedPatternName11b}

```rascal
test bool escapedPatternName11b()

```

## function escapedWhileLabel {#lang-rascal-tests-basic-EscapedNames-escapedWhileLabel}

```rascal
test bool escapedWhileLabel()

```

## function escapedDoLabel {#lang-rascal-tests-basic-EscapedNames-escapedDoLabel}

```rascal
test bool escapedDoLabel()

```

## function escapedForLabel {#lang-rascal-tests-basic-EscapedNames-escapedForLabel}

```rascal
test bool escapedForLabel()

```

