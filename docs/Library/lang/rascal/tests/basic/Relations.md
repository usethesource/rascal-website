---
title: "module lang::rascal::tests::basic::Relations"
---

#### Usage

`import lang::rascal::tests::basic::Relations;`


## function product {#lang-rascal-tests-basic-Relations-product}

```rascal
test bool product(set[&A]X, set[&B] Y)

```

## function composition {#lang-rascal-tests-basic-Relations-composition}

```rascal
test bool composition(rel[int, str]X, rel[str, int] Y)

```

## function selection {#lang-rascal-tests-basic-Relations-selection}

```rascal
test bool selection(rel[&A fa, &B fb] X)

```

## function \join {#lang-rascal-tests-basic-Relations-\join}

```rascal
test bool \join(rel[&A, &B]X, rel[&B, &C, &D] Y)

```

## function subscription {#lang-rascal-tests-basic-Relations-subscription}

```rascal
test bool subscription(rel[&A, &B, &C] X)

```

## function tclosure {#lang-rascal-tests-basic-Relations-tclosure}

```rascal
test bool tclosure(rel[&A, &A] X)

```

## function rtclosure {#lang-rascal-tests-basic-Relations-rtclosure}

```rascal
test bool rtclosure(rel[int, int] X)

```

## function sample {#lang-rascal-tests-basic-Relations-sample}

```rascal
set[int] sample(rel[int, int] X)

```

## function tst_carrier {#lang-rascal-tests-basic-Relations-tst_carrier}

```rascal
test bool tst_carrier(rel[int, int] X)

```

## function tst_carrierR {#lang-rascal-tests-basic-Relations-tst_carrierR}

```rascal
test bool tst_carrierR(rel[int, int] X)

```

## function tst_carrierX {#lang-rascal-tests-basic-Relations-tst_carrierX}

```rascal
test bool tst_carrierX(rel[int, int] X)

```

## function tst_complement {#lang-rascal-tests-basic-Relations-tst_complement}

```rascal
test bool tst_complement(rel[int, int] X)

```

## function tst_domain {#lang-rascal-tests-basic-Relations-tst_domain}

```rascal
test bool tst_domain(rel[int, int] X)

```

## function tst_domainR {#lang-rascal-tests-basic-Relations-tst_domainR}

```rascal
test bool tst_domainR(rel[int, int] X)

```

## function tst_domainX {#lang-rascal-tests-basic-Relations-tst_domainX}

```rascal
test bool tst_domainX(rel[int, int] X)

```

## function tst_ident {#lang-rascal-tests-basic-Relations-tst_ident}

```rascal
test bool tst_ident(set[int] X)

```

## function tst_invert {#lang-rascal-tests-basic-Relations-tst_invert}

```rascal
test bool tst_invert(rel[int, int] X)

```

## function tst_range {#lang-rascal-tests-basic-Relations-tst_range}

```rascal
test bool tst_range(rel[int, int] X)

```

## function tst_rangeR {#lang-rascal-tests-basic-Relations-tst_rangeR}

```rascal
test bool tst_rangeR(rel[int, int] X)

```

## function tst_rangeX {#lang-rascal-tests-basic-Relations-tst_rangeX}

```rascal
test bool tst_rangeX(rel[int, int] X)

```

