---
title: "lang::rascal::tests::basic::Relations"
---

#### Usage

`import lang::rascal::tests::basic::Relations;`


## function product {#lang-rascal-tests-basic-Relations-product}

* ``test bool product(set[&A]X, set[&B] Y)``

## function composition {#lang-rascal-tests-basic-Relations-composition}

* ``test bool composition(rel[int, str]X, rel[str, int] Y)``

## function selection {#lang-rascal-tests-basic-Relations-selection}

* ``test bool selection(rel[&A fa, &B fb] X)``

## function \join {#lang-rascal-tests-basic-Relations-\join}

* ``test bool \join(rel[&A, &B]X, rel[&B, &C, &D] Y)``

## function subscription {#lang-rascal-tests-basic-Relations-subscription}

* ``test bool subscription(rel[&A, &B, &C] X)``

## function tclosure {#lang-rascal-tests-basic-Relations-tclosure}

* ``test bool tclosure(rel[&A, &A] X)``

## function rtclosure {#lang-rascal-tests-basic-Relations-rtclosure}

* ``test bool rtclosure(rel[int, int] X)``

## function sample {#lang-rascal-tests-basic-Relations-sample}

* ``set[int] sample(rel[int, int] X)``

## function tst_carrier {#lang-rascal-tests-basic-Relations-tst_carrier}

* ``test bool tst_carrier(rel[int, int] X)``

## function tst_carrierR {#lang-rascal-tests-basic-Relations-tst_carrierR}

* ``test bool tst_carrierR(rel[int, int] X)``

## function tst_carrierX {#lang-rascal-tests-basic-Relations-tst_carrierX}

* ``test bool tst_carrierX(rel[int, int] X)``

## function tst_complement {#lang-rascal-tests-basic-Relations-tst_complement}

* ``test bool tst_complement(rel[int, int] X)``

## function tst_domain {#lang-rascal-tests-basic-Relations-tst_domain}

* ``test bool tst_domain(rel[int, int] X)``

## function tst_domainR {#lang-rascal-tests-basic-Relations-tst_domainR}

* ``test bool tst_domainR(rel[int, int] X)``

## function tst_domainX {#lang-rascal-tests-basic-Relations-tst_domainX}

* ``test bool tst_domainX(rel[int, int] X)``

## function tst_ident {#lang-rascal-tests-basic-Relations-tst_ident}

* ``test bool tst_ident(set[int] X)``

## function tst_invert {#lang-rascal-tests-basic-Relations-tst_invert}

* ``test bool tst_invert(rel[int, int] X)``

## function tst_range {#lang-rascal-tests-basic-Relations-tst_range}

* ``test bool tst_range(rel[int, int] X)``

## function tst_rangeR {#lang-rascal-tests-basic-Relations-tst_rangeR}

* ``test bool tst_rangeR(rel[int, int] X)``

## function tst_rangeX {#lang-rascal-tests-basic-Relations-tst_rangeX}

* ``test bool tst_rangeX(rel[int, int] X)``

