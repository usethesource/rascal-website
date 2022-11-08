---
title: "module lang::rascal::tests::functionality::Aliasing"
---

#### Usage

`import lang::rascal::tests::functionality::Aliasing;`


## alias INTEGER0 {#lang-rascal-tests-functionality-Aliasing-INTEGER0}

```rascal
int

```

## function usingAliases1 {#lang-rascal-tests-functionality-Aliasing-usingAliases1}

```rascal
test bool  usingAliases1()

```

## function usingAliases2 {#lang-rascal-tests-functionality-Aliasing-usingAliases2}

```rascal
test bool  usingAliases2()

```

## function usingAliases3 {#lang-rascal-tests-functionality-Aliasing-usingAliases3}

```rascal
test bool  usingAliases3()

```

## function usingAliases4 {#lang-rascal-tests-functionality-Aliasing-usingAliases4}

```rascal
test bool  usingAliases4()

```

## function usingAliases5 {#lang-rascal-tests-functionality-Aliasing-usingAliases5}

```rascal
test bool  usingAliases5()

```

## function usingAliases6 {#lang-rascal-tests-functionality-Aliasing-usingAliases6}

```rascal
test bool  usingAliases6()

```

## alias INTEGER1 {#lang-rascal-tests-functionality-Aliasing-INTEGER1}

```rascal
INTEGER0

```

## function usingIndirectAliases1 {#lang-rascal-tests-functionality-Aliasing-usingIndirectAliases1}

```rascal
test bool  usingIndirectAliases1()

```

## function usingIndirectAliases2 {#lang-rascal-tests-functionality-Aliasing-usingIndirectAliases2}

```rascal
test bool  usingIndirectAliases2()

```

## function usingIndirectAliases3 {#lang-rascal-tests-functionality-Aliasing-usingIndirectAliases3}

```rascal
test bool  usingIndirectAliases3()

```

## function usingIndirectAliases4 {#lang-rascal-tests-functionality-Aliasing-usingIndirectAliases4}

```rascal
test bool  usingIndirectAliases4()

```

## function usingIndirectAliases5 {#lang-rascal-tests-functionality-Aliasing-usingIndirectAliases5}

```rascal
test bool  usingIndirectAliases5()

```

## function usingIndirectAliases6 {#lang-rascal-tests-functionality-Aliasing-usingIndirectAliases6}

```rascal
test bool  usingIndirectAliases6()

```

## alias INTEGER2 {#lang-rascal-tests-functionality-Aliasing-INTEGER2}

```rascal
INTEGER1

```

## function usingVeryIndirectAliases1 {#lang-rascal-tests-functionality-Aliasing-usingVeryIndirectAliases1}

```rascal
test bool  usingVeryIndirectAliases1()

```

## function usingVeryIndirectAliases2 {#lang-rascal-tests-functionality-Aliasing-usingVeryIndirectAliases2}

```rascal
test bool  usingVeryIndirectAliases2()

```

## function usingVeryIndirectAliases3 {#lang-rascal-tests-functionality-Aliasing-usingVeryIndirectAliases3}

```rascal
test bool  usingVeryIndirectAliases3()

```

## function usingVeryIndirectAliases4 {#lang-rascal-tests-functionality-Aliasing-usingVeryIndirectAliases4}

```rascal
test bool  usingVeryIndirectAliases4()

```

## function usingVeryIndirectAliases5 {#lang-rascal-tests-functionality-Aliasing-usingVeryIndirectAliases5}

```rascal
test bool  usingVeryIndirectAliases5()

```

## function usingVeryIndirectAliases6 {#lang-rascal-tests-functionality-Aliasing-usingVeryIndirectAliases6}

```rascal
test bool  usingVeryIndirectAliases6()

```

## alias INTEGER4 {#lang-rascal-tests-functionality-Aliasing-INTEGER4}

```rascal
INTEGER3

```

## alias INTEGER3 {#lang-rascal-tests-functionality-Aliasing-INTEGER3}

```rascal
int

```

## function outofOrderDeclaration {#lang-rascal-tests-functionality-Aliasing-outofOrderDeclaration}

```rascal
test bool outofOrderDeclaration()

```

## alias ADT0 {#lang-rascal-tests-functionality-Aliasing-ADT0}

```rascal
ADT1

```

## data ADT1 {#lang-rascal-tests-functionality-Aliasing-ADT1}

```rascal
data ADT1  
     = f(int)
     ;
```

## function aliasAndADT1 {#lang-rascal-tests-functionality-Aliasing-aliasAndADT1}

```rascal
test bool  aliasAndADT1()

```

## alias StateId {#lang-rascal-tests-functionality-Aliasing-StateId}

```rascal
int

```

## alias Permutation {#lang-rascal-tests-functionality-Aliasing-Permutation}

```rascal
list[int]

```

## alias StatedId {#lang-rascal-tests-functionality-Aliasing-StatedId}

```rascal
int

```

## alias Sym {#lang-rascal-tests-functionality-Aliasing-Sym}

```rascal
int

```

## function aliasAndADT2 {#lang-rascal-tests-functionality-Aliasing-aliasAndADT2}

```rascal
test bool aliasAndADT2()

```

## alias trans {#lang-rascal-tests-functionality-Aliasing-trans}

```rascal
tuple[str, str, str]

```

## alias block {#lang-rascal-tests-functionality-Aliasing-block}

```rascal
set[trans]

```

## alias partition {#lang-rascal-tests-functionality-Aliasing-partition}

```rascal
set[block]

```

## data P {#lang-rascal-tests-functionality-Aliasing-P}

```rascal
data P[&T]  
     = p(&T a)
     ;
```

## function transitiveAliasAcrossTuples {#lang-rascal-tests-functionality-Aliasing-transitiveAliasAcrossTuples}

```rascal
test bool  transitiveAliasAcrossTuples()

```

## function reifiedAlias1 {#lang-rascal-tests-functionality-Aliasing-reifiedAlias1}

```rascal
test bool reifiedAlias1()

```

## function reifiedAlias2 {#lang-rascal-tests-functionality-Aliasing-reifiedAlias2}

```rascal
test bool reifiedAlias2()

```

## alias LIST[&T] {#lang-rascal-tests-functionality-Aliasing-LIST[&T]}

```rascal
list[&T]

```

## function reifiedAlias3 {#lang-rascal-tests-functionality-Aliasing-reifiedAlias3}

```rascal
test bool reifiedAlias3()

```

## function reifiedAlias4 {#lang-rascal-tests-functionality-Aliasing-reifiedAlias4}

```rascal
test bool reifiedAlias4()

```

## alias TUPLELIST[&T] {#lang-rascal-tests-functionality-Aliasing-TUPLELIST[&T]}

```rascal
tuple[LIST[&T], LIST[&T]]

```

## function reifiedAlias5 {#lang-rascal-tests-functionality-Aliasing-reifiedAlias5}

```rascal
test bool reifiedAlias5()

```

## alias STRING {#lang-rascal-tests-functionality-Aliasing-STRING}

```rascal
str

```

## data DATA1 {#lang-rascal-tests-functionality-Aliasing-DATA1}

```rascal
data DATA1  
     = d1(STRING s)
     ;
```

## function reifiedAlias6 {#lang-rascal-tests-functionality-Aliasing-reifiedAlias6}

```rascal
test bool reifiedAlias6()

```

## data DATA2 {#lang-rascal-tests-functionality-Aliasing-DATA2}

```rascal
data DATA2  
     = d2(DATA1(STRING) fun)
     ;
```

## function reifiedAlias7 {#lang-rascal-tests-functionality-Aliasing-reifiedAlias7}

```rascal
test bool reifiedAlias7()

```

## function reifiedAlias8 {#lang-rascal-tests-functionality-Aliasing-reifiedAlias8}

```rascal
test bool reifiedAlias8()

```

## alias SET[&T] {#lang-rascal-tests-functionality-Aliasing-SET[&T]}

```rascal
set[&T]

```

## function setOrRel1 {#lang-rascal-tests-functionality-Aliasing-setOrRel1}

```rascal
test bool setOrRel1()

```

## function setOrRel2 {#lang-rascal-tests-functionality-Aliasing-setOrRel2}

```rascal
test bool setOrRel2()

```

## function setOrRel3 {#lang-rascal-tests-functionality-Aliasing-setOrRel3}

```rascal
test bool setOrRel3()

```

## function setOrRel4 {#lang-rascal-tests-functionality-Aliasing-setOrRel4}

```rascal
test bool setOrRel4()

```

## function setOrRel5 {#lang-rascal-tests-functionality-Aliasing-setOrRel5}

```rascal
test bool setOrRel5()

```

## function setOrRel6 {#lang-rascal-tests-functionality-Aliasing-setOrRel6}

```rascal
test bool setOrRel6()

```

## function setOrRel7 {#lang-rascal-tests-functionality-Aliasing-setOrRel7}

```rascal
test bool setOrRel7()

```

## function setOrRel8 {#lang-rascal-tests-functionality-Aliasing-setOrRel8}

```rascal
test bool setOrRel8()

```

## function listOrLrel1 {#lang-rascal-tests-functionality-Aliasing-listOrLrel1}

```rascal
test bool listOrLrel1()

```

## function listOrLrel2 {#lang-rascal-tests-functionality-Aliasing-listOrLrel2}

```rascal
test bool listOrLrel2()

```

## function listOrLrel3 {#lang-rascal-tests-functionality-Aliasing-listOrLrel3}

```rascal
test bool listOrLrel3()

```

## function listOrLrel4 {#lang-rascal-tests-functionality-Aliasing-listOrLrel4}

```rascal
test bool listOrLrel4()

```

## function listOrLrel5 {#lang-rascal-tests-functionality-Aliasing-listOrLrel5}

```rascal
test bool listOrLrel5()

```

## function listOrLrel6 {#lang-rascal-tests-functionality-Aliasing-listOrLrel6}

```rascal
test bool listOrLrel6()

```

## function listOrLrel7 {#lang-rascal-tests-functionality-Aliasing-listOrLrel7}

```rascal
test bool listOrLrel7()

```

## function listOrLrel8 {#lang-rascal-tests-functionality-Aliasing-listOrLrel8}

```rascal
test bool listOrLrel8()

```

## function enumerableAlias {#lang-rascal-tests-functionality-Aliasing-enumerableAlias}

```rascal
test bool enumerableAlias()

```

this triggered issue #1595

