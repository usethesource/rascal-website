---
title: "module lang::rascal::tests::extends1::TYPE"
---

#### Usage

`import lang::rascal::tests::extends1::TYPE;`


## data SYM {#lang-rascal-tests-extends1-TYPE-SYM}

```rascal
data SYM  
     = A()
     | B()
     | Z()
     ;
```

## function comparable {#lang-rascal-tests-extends1-TYPE-comparable}

* ``bool comparable(SYM s, SYM t)``

## function subtype {#lang-rascal-tests-extends1-TYPE-subtype}

* ``bool subtype(A(), B())``
* ``default bool subtype(SYM s, SYM t)``

## function TPcomparable1 {#lang-rascal-tests-extends1-TYPE-TPcomparable1}

* ``test bool TPcomparable1()``

## function TPcomparable2 {#lang-rascal-tests-extends1-TYPE-TPcomparable2}

* ``test bool TPcomparable2()``

## function TPsubtype1 {#lang-rascal-tests-extends1-TYPE-TPsubtype1}

* ``test bool TPsubtype1()``

