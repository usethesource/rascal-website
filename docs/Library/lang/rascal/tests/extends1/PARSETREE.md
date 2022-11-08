---
title: "module lang::rascal::tests::extends1::PARSETREE"
---

#### Usage

`import lang::rascal::tests::extends1::PARSETREE;`


## data SYM {#lang-rascal-tests-extends1-PARSETREE-SYM}

```rascal
data SYM  
     = C()
     | D()
     | SORT(SYM sym)
     | TREE()
     ;
```

## function subtype {#lang-rascal-tests-extends1-PARSETREE-subtype}

```rascal
bool subtype(A(), C())

bool subtype(A(), D())

bool subtype(SORT(_), TREE())

```

## function PTcomparable1 {#lang-rascal-tests-extends1-PARSETREE-PTcomparable1}

```rascal
test bool PTcomparable1()

```

## function PTcomparable2 {#lang-rascal-tests-extends1-PARSETREE-PTcomparable2}

```rascal
test bool PTcomparable2()

```

## function PTcomparable3 {#lang-rascal-tests-extends1-PARSETREE-PTcomparable3}

```rascal
test bool PTcomparable3()

```

## function PTcomparableP4 {#lang-rascal-tests-extends1-PARSETREE-PTcomparableP4}

```rascal
test bool PTcomparableP4()

```

## function PTcomparable5 {#lang-rascal-tests-extends1-PARSETREE-PTcomparable5}

```rascal
test bool PTcomparable5()

```

## function PTcomparable6 {#lang-rascal-tests-extends1-PARSETREE-PTcomparable6}

```rascal
test bool PTcomparable6()

```

## function PTcomparable7 {#lang-rascal-tests-extends1-PARSETREE-PTcomparable7}

```rascal
test bool PTcomparable7()

```

## function PTcomparable8 {#lang-rascal-tests-extends1-PARSETREE-PTcomparable8}

```rascal
test bool PTcomparable8()

```

## function PTsubtype1 {#lang-rascal-tests-extends1-PARSETREE-PTsubtype1}

```rascal
test bool PTsubtype1()

```

## function PTsubtype2 {#lang-rascal-tests-extends1-PARSETREE-PTsubtype2}

```rascal
test bool PTsubtype2()

```

## function PTsubtype3 {#lang-rascal-tests-extends1-PARSETREE-PTsubtype3}

```rascal
test bool PTsubtype3()

```

## function PTsubtype4 {#lang-rascal-tests-extends1-PARSETREE-PTsubtype4}

```rascal
test bool PTsubtype4()

```

## function PTsubtype5 {#lang-rascal-tests-extends1-PARSETREE-PTsubtype5}

```rascal
test bool PTsubtype5()

```

## function PTsubtype6 {#lang-rascal-tests-extends1-PARSETREE-PTsubtype6}

```rascal
test bool PTsubtype6()

```

## function PTsubtype7 {#lang-rascal-tests-extends1-PARSETREE-PTsubtype7}

```rascal
test bool PTsubtype7()

```

## function PTsubtype8 {#lang-rascal-tests-extends1-PARSETREE-PTsubtype8}

```rascal
test bool PTsubtype8()

```

