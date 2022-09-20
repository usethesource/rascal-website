---
title: "lang::rascal::tests::functionality::CommonKeywordParameter4::B"
---

#### Usage

`import lang::rascal::tests::functionality::CommonKeywordParameter4::B;`


## data D {#lang-rascal-tests-functionality-CommonKeywordParameter4-B-D}

```rascal
data D (int nn = -3, D m = d1(nn))
```

```rascal
data D (int mm = -4, D p = d2("b",nn=mm).m)
```

