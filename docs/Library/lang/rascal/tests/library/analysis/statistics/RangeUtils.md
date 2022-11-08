---
title: "module lang::rascal::tests::library::analysis::statistics::RangeUtils"
---

#### Usage

`import lang::rascal::tests::library::analysis::statistics::RangeUtils;`


## function abs {#lang-rascal-tests-library-analysis-statistics-RangeUtils-abs}

```rascal
list[&T <: num] abs(list[&T <: num] nums)

```

## function assureRange {#lang-rascal-tests-library-analysis-statistics-RangeUtils-assureRange}

```rascal
(&T<:num) assureRange(&T <: num n, num low, num high)

list[&T <: num] assureRange(list[&T <: num] nums, num low, num high)

```

## function makeSmallerThanInt {#lang-rascal-tests-library-analysis-statistics-RangeUtils-makeSmallerThanInt}

```rascal
int makeSmallerThanInt(int n, int limit)

```

## function makeSmallerThanReal {#lang-rascal-tests-library-analysis-statistics-RangeUtils-makeSmallerThanReal}

```rascal
real makeSmallerThanReal(real n, int limit)

```

## function makeSmallerThanRat {#lang-rascal-tests-library-analysis-statistics-RangeUtils-makeSmallerThanRat}

```rascal
rat makeSmallerThanRat(rat n, int limit)

```

## function makeSmallerThan {#lang-rascal-tests-library-analysis-statistics-RangeUtils-makeSmallerThan}

```rascal
&T <: num makeSmallerThan(&T <: num n, int limit)

list[&T <: num] makeSmallerThan(list[&T <: num] nums, int limit)

```

