---
title: "lang::rascal::tests::library::lang::json::JSONIOTests"
---

#### Usage

`import lang::rascal::tests::library::lang::json::JSONIOTests;`


## function jsonFeaturesSupported {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonFeaturesSupported}

* ``bool jsonFeaturesSupported(value v)``

## function writeRead {#lang-rascal-tests-library-lang-json-JSONIOTests-writeRead}

* ``bool writeRead(type[&T] returnType, &T dt)``

## data DATA1 {#lang-rascal-tests-library-lang-json-JSONIOTests-DATA1}

```rascal
data DATA1  
     = f1(int n)
     | f1(int n, str s)
     | rec1(DATA1 d1, DATA1 d2)
     ;
```

## data DATA2 {#lang-rascal-tests-library-lang-json-JSONIOTests-DATA2}

```rascal
data DATA2  
     = f2(int n, str kw = "abc")
     | f2(int n, str s)
     | rec2(DATA2 d1, DATA2 d2, int n = 0)
     ;
```

## function jsonWithBool1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithBool1}

* ``test bool jsonWithBool1(bool dt)``

## function jsonWithInt1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithInt1}

* ``test bool jsonWithInt1(int dt)``

## function jsonWithReal1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithReal1}

* ``test bool jsonWithReal1(real dt)``

## function jsonWithRat1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithRat1}

* ``test bool jsonWithRat1(rat dt)``

## function jsonWithNum1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithNum1}

* ``test bool jsonWithNum1(num dt)``

## function jsonWithLoc1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithLoc1}

* ``test bool jsonWithLoc1(loc dt)``

## function jsonWithStr1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithStr1}

* ``test bool jsonWithStr1(str dt)``

## function jsonWithDatetime1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithDatetime1}

* ``test bool jsonWithDatetime1(datetime dt)``

## function jsonWithList1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithList1}

* ``test bool jsonWithList1(list[int] dt)``

## function jsonWithSet1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithSet1}

* ``test bool jsonWithSet1(set[int] dt)``

## function jsonWithMap1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithMap1}

* ``test bool jsonWithMap1(map[int, int]  dt)``

## function jsonWithNode1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithNode1}

* ``test bool jsonWithNode1(node  dt)``

## function jsonWithDATA11 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithDATA11}

* ``test bool jsonWithDATA11(DATA1 dt)``

## function jsonWithDATA21 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithDATA21}

* ``test bool jsonWithDATA21(DATA2 dt)``

## function jsonRandom1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonRandom1}

* ``test bool jsonRandom1(value dt)``

## data D {#lang-rascal-tests-library-lang-json-JSONIOTests-D}

```rascal
data D  
     = date(datetime dt)
     | uri(loc l)
     | string(str s)
     | integer(int n)
     | float(real r)
     | lists(list[D] ls)
     | maps(map[str,str] strmaps)
     | maps2(map[str,D] dmaps)
     | nested(D d1, D d2)
     | kwparams(int x = 2, D d = integer(0))
     ;
```

## function jsonStreaming1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonStreaming1}

* ``test bool jsonStreaming1(D dt)``

## function jsonStreaming2 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonStreaming2}

* ``test bool jsonStreaming2(D dt)``

