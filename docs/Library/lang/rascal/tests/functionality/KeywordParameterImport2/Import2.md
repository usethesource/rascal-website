---
title: "module lang::rascal::tests::functionality::KeywordParameterImport2::Import2"
---

#### Usage

`import lang::rascal::tests::functionality::KeywordParameterImport2::Import2;`


## data L {#lang-rascal-tests-functionality-KeywordParameterImport2-Import2-L}

```rascal
data L (str e = "e", str f = e + e) 
     = n(str g = f + f)
     ;
```

## data L {#lang-rascal-tests-functionality-KeywordParameterImport2-Import2-L}

```rascal
data L (str h = "") 
     = p()
     ;
```

## function createN2 {#lang-rascal-tests-functionality-KeywordParameterImport2-Import2-createN2}

```rascal
L createN2()

```

## function createP2 {#lang-rascal-tests-functionality-KeywordParameterImport2-Import2-createP2}

```rascal
L createP2()

```

