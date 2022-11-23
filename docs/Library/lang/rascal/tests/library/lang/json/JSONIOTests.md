---
title: "module lang::rascal::tests::library::lang::json::JSONIOTests"
---

#### Usage

`import lang::rascal::tests::library::lang::json::JSONIOTests;`


## function jsonFeaturesSupported {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonFeaturesSupported}

```rascal
bool jsonFeaturesSupported(value v)

```

## function writeRead {#lang-rascal-tests-library-lang-json-JSONIOTests-writeRead}

```rascal
bool writeRead(type[&T] returnType, &T dt)

```

## data DATA1 {#lang-rascal-tests-library-lang-json-JSONIOTests-DATA1}

```rascal
data DATA1  
     = data1(int n)
     ;
```

## data DATA2 {#lang-rascal-tests-library-lang-json-JSONIOTests-DATA2}

```rascal
data DATA2  
     = data2(str n)
     ;
```

## data DATA3 {#lang-rascal-tests-library-lang-json-JSONIOTests-DATA3}

```rascal
data DATA3  
     = data3(int n, str kw = "abc")
     ;
```

## data Enum {#lang-rascal-tests-library-lang-json-JSONIOTests-Enum}

```rascal
data Enum  
     = x()
     | y()
     | z()
     ;
```

## data DATA4 {#lang-rascal-tests-library-lang-json-JSONIOTests-DATA4}

```rascal
data DATA4  
     = data4(Enum e = x())
     ;
```

## function jsonWithBool1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithBool1}

```rascal
test bool jsonWithBool1(bool dt)

```

## function jsonWithInt1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithInt1}

```rascal
test bool jsonWithInt1(int dt)

```

## function jsonWithReal1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithReal1}

```rascal
test bool jsonWithReal1(real dt)

```

## function jsonWithRat1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithRat1}

```rascal
test bool jsonWithRat1(rat dt)

```

## function jsonWithNum1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithNum1}

```rascal
test bool jsonWithNum1(num dt)

```

## function jsonWithLoc1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithLoc1}

```rascal
test bool jsonWithLoc1(loc dt)

```

## function jsonWithStr1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithStr1}

```rascal
test bool jsonWithStr1(str dt)

```

## function jsonWithDatetime1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithDatetime1}

```rascal
test bool jsonWithDatetime1(datetime dt)

```

## function jsonWithList1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithList1}

```rascal
test bool jsonWithList1(list[int] dt)

```

## function jsonWithSet1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithSet1}

```rascal
test bool jsonWithSet1(set[int] dt)

```

## function jsonWithMap1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithMap1}

```rascal
test bool jsonWithMap1(map[int, int] dt)

```

## function jsonWithNode1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithNode1}

```rascal
test bool jsonWithNode1(node  dt)

```

## function jsonWithDATA11 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithDATA11}

```rascal
test bool jsonWithDATA11(DATA1 dt)

```

## function jsonWithDATA21 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonWithDATA21}

```rascal
test bool jsonWithDATA21(DATA2 dt)

```

## function jsonRandom1 {#lang-rascal-tests-library-lang-json-JSONIOTests-jsonRandom1}

```rascal
test bool jsonRandom1(value dt)

```

## function json1 {#lang-rascal-tests-library-lang-json-JSONIOTests-json1}

```rascal
test bool json1()

```

## function json2 {#lang-rascal-tests-library-lang-json-JSONIOTests-json2}

```rascal
test bool json2()

```

## function json3 {#lang-rascal-tests-library-lang-json-JSONIOTests-json3}

```rascal
test bool json3()

```

## function json4 {#lang-rascal-tests-library-lang-json-JSONIOTests-json4}

```rascal
test bool json4(Enum e)

```

