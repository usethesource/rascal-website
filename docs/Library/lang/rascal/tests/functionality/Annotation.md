---
title: "module lang::rascal::tests::functionality::Annotation"
---

#### Usage

`import lang::rascal::tests::functionality::Annotation;`


## data F {#lang-rascal-tests-functionality-Annotation-F}

```rascal
data F  
     = f()
     | f(int n)
     | g(int n)
     | deep(F f)
     ;
```

## data AN {#lang-rascal-tests-functionality-Annotation-AN}

```rascal
data AN  
     = an(int n)
     ;
```

## function boolannotations1 {#lang-rascal-tests-functionality-Annotation-boolannotations1}

* ``test bool boolannotations1()``

## function boolannotations2 {#lang-rascal-tests-functionality-Annotation-boolannotations2}

* ``test bool boolannotations2()``

## function boolannotations3 {#lang-rascal-tests-functionality-Annotation-boolannotations3}

* ``test bool boolannotations3()``

## function boolannotations4 {#lang-rascal-tests-functionality-Annotation-boolannotations4}

* ``test bool boolannotations4()``

## function boolannotations5 {#lang-rascal-tests-functionality-Annotation-boolannotations5}

* ``test bool boolannotations5()``

## function boolannotations6 {#lang-rascal-tests-functionality-Annotation-boolannotations6}

* ``test bool boolannotations6()``

## function boolannotations7 {#lang-rascal-tests-functionality-Annotation-boolannotations7}

* ``test bool boolannotations7()``

## function boolannotations8 {#lang-rascal-tests-functionality-Annotation-boolannotations8}

* ``test bool boolannotations8()``

## function accessAnnoAsKeywordField {#lang-rascal-tests-functionality-Annotation-accessAnnoAsKeywordField}

* ``test bool accessAnnoAsKeywordField()``

## function accessAnnoUpdateAsKeywordField {#lang-rascal-tests-functionality-Annotation-accessAnnoUpdateAsKeywordField}

* ``test bool accessAnnoUpdateAsKeywordField()``

## function checkAnnoExistsAsKeywordField {#lang-rascal-tests-functionality-Annotation-checkAnnoExistsAsKeywordField}

* ``test bool checkAnnoExistsAsKeywordField()``

## function KeywordFieldUpdateVisibleAsAnno {#lang-rascal-tests-functionality-Annotation-KeywordFieldUpdateVisibleAsAnno}

* ``test bool KeywordFieldUpdateVisibleAsAnno()``

## function KeywordAssignVisibleViaAnno1 {#lang-rascal-tests-functionality-Annotation-KeywordAssignVisibleViaAnno1}

* ``test bool KeywordAssignVisibleViaAnno1()``

## function KeywordAssignVisibleViaAnno2 {#lang-rascal-tests-functionality-Annotation-KeywordAssignVisibleViaAnno2}

* ``test bool KeywordAssignVisibleViaAnno2()``

## function unavailableAnno1 {#lang-rascal-tests-functionality-Annotation-unavailableAnno1}

* ``test bool unavailableAnno1()``

## function unavailableAnno2 {#lang-rascal-tests-functionality-Annotation-unavailableAnno2}

* ``test bool unavailableAnno2()``

