---
title: "lang::rascal::tests::functionality::KeywordParameterImport2::Import1"
---

#### Usage

`import lang::rascal::tests::functionality::KeywordParameterImport2::Import1;`


## data L {#lang-rascal-tests-functionality-KeywordParameterImport2-Import1-L}

```rascal
data L (int a = 1, int b = 2 * a) 
     = l(int c = 2 * b)
     ;
```

## data L {#lang-rascal-tests-functionality-KeywordParameterImport2-Import1-L}

```rascal
data L (int d = -1) 
     = m()
     ;
```

## function createL1 {#lang-rascal-tests-functionality-KeywordParameterImport2-Import1-createL1}

* ``L createL1()``

## function createM1 {#lang-rascal-tests-functionality-KeywordParameterImport2-Import1-createM1}

* ``L createM1()``

