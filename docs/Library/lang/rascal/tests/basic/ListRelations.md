---
title: "module lang::rascal::tests::basic::ListRelations"
---

#### Usage

`import lang::rascal::tests::basic::ListRelations;`


## function product {#lang-rascal-tests-basic-ListRelations-product}

```rascal
test bool product(list[&A]X, list[&B] Y)

```

## function composition {#lang-rascal-tests-basic-ListRelations-composition}

```rascal
test bool composition(lrel[int, str]X, lrel[str, int] Y)

```

## function selection {#lang-rascal-tests-basic-ListRelations-selection}

```rascal
test bool selection(lrel[&A fa, &B fb] X)

```

## function \join {#lang-rascal-tests-basic-ListRelations-\join}

```rascal
test bool \join(lrel[&A, &B]X, lrel[&B, &C, &D] Y)

```

## function subscription1 {#lang-rascal-tests-basic-ListRelations-subscription1}

```rascal
test bool subscription1(lrel[&A, &B, &C] X)

```

## function subscription2 {#lang-rascal-tests-basic-ListRelations-subscription2}

```rascal
test bool subscription2(lrel[int,str] X)

```

## function tclosure {#lang-rascal-tests-basic-ListRelations-tclosure}

```rascal
test bool tclosure(lrel[int, int] X)

```

## function squeeze {#lang-rascal-tests-basic-ListRelations-squeeze}

```rascal
list[&T] squeeze(list[&T] xs)

```

## function rtclosure {#lang-rascal-tests-basic-ListRelations-rtclosure}

```rascal
test bool rtclosure(lrel[int, int] X)

```

## function sample {#lang-rascal-tests-basic-ListRelations-sample}

```rascal
set[int] sample(lrel[int, int] X)

```

## function tst_carrier {#lang-rascal-tests-basic-ListRelations-tst_carrier}

```rascal
test bool tst_carrier(lrel[int, int] X)

```

## function tst_carrierR {#lang-rascal-tests-basic-ListRelations-tst_carrierR}

```rascal
test bool tst_carrierR(lrel[int, int] X)

```

## function tst_carrierX {#lang-rascal-tests-basic-ListRelations-tst_carrierX}

```rascal
test bool tst_carrierX(lrel[int, int] X)

```

## function tst_complement {#lang-rascal-tests-basic-ListRelations-tst_complement}

```rascal
test bool tst_complement(lrel[int, int] X)

```

## function tst_domain {#lang-rascal-tests-basic-ListRelations-tst_domain}

```rascal
test bool tst_domain(lrel[int, int] X)

```

## function tst_domainR {#lang-rascal-tests-basic-ListRelations-tst_domainR}

```rascal
test bool tst_domainR(lrel[int, int] X)

```

## function tst_domainX {#lang-rascal-tests-basic-ListRelations-tst_domainX}

```rascal
test bool tst_domainX(lrel[int, int] X)

```

## function tst_ident {#lang-rascal-tests-basic-ListRelations-tst_ident}

```rascal
test bool tst_ident(list[int] X)

```

## function tst_invert {#lang-rascal-tests-basic-ListRelations-tst_invert}

```rascal
test bool tst_invert(lrel[int, int] X)

```

## function tst_range {#lang-rascal-tests-basic-ListRelations-tst_range}

```rascal
test bool tst_range(lrel[int, int] X)

```

## function tst_rangeR {#lang-rascal-tests-basic-ListRelations-tst_rangeR}

```rascal
test bool tst_rangeR(lrel[int, int] X)

```

## function tst_rangeX {#lang-rascal-tests-basic-ListRelations-tst_rangeX}

```rascal
test bool tst_rangeX(lrel[int, int] X)

```

