---
title: "module lang::rascal::tests::functionality::Aliasing"
---

#### Usage

`import lang::rascal::tests::functionality::Aliasing;`


## alias INTEGER0 {#lang-rascal-tests-functionality-Aliasing-INTEGER0}

* `int`

## function usingAliases1 {#lang-rascal-tests-functionality-Aliasing-usingAliases1}

* ``test bool  usingAliases1()``

## function usingAliases2 {#lang-rascal-tests-functionality-Aliasing-usingAliases2}

* ``test bool  usingAliases2()``

## function usingAliases3 {#lang-rascal-tests-functionality-Aliasing-usingAliases3}

* ``test bool  usingAliases3()``

## function usingAliases4 {#lang-rascal-tests-functionality-Aliasing-usingAliases4}

* ``test bool  usingAliases4()``

## function usingAliases5 {#lang-rascal-tests-functionality-Aliasing-usingAliases5}

* ``test bool  usingAliases5()``

## function usingAliases6 {#lang-rascal-tests-functionality-Aliasing-usingAliases6}

* ``test bool  usingAliases6()``

## alias INTEGER1 {#lang-rascal-tests-functionality-Aliasing-INTEGER1}

* `INTEGER0`

## function usingIndirectAliases1 {#lang-rascal-tests-functionality-Aliasing-usingIndirectAliases1}

* ``test bool  usingIndirectAliases1()``

## function usingIndirectAliases2 {#lang-rascal-tests-functionality-Aliasing-usingIndirectAliases2}

* ``test bool  usingIndirectAliases2()``

## function usingIndirectAliases3 {#lang-rascal-tests-functionality-Aliasing-usingIndirectAliases3}

* ``test bool  usingIndirectAliases3()``

## function usingIndirectAliases4 {#lang-rascal-tests-functionality-Aliasing-usingIndirectAliases4}

* ``test bool  usingIndirectAliases4()``

## function usingIndirectAliases5 {#lang-rascal-tests-functionality-Aliasing-usingIndirectAliases5}

* ``test bool  usingIndirectAliases5()``

## function usingIndirectAliases6 {#lang-rascal-tests-functionality-Aliasing-usingIndirectAliases6}

* ``test bool  usingIndirectAliases6()``

## alias INTEGER2 {#lang-rascal-tests-functionality-Aliasing-INTEGER2}

* `INTEGER1`

## function usingVeryIndirectAliases1 {#lang-rascal-tests-functionality-Aliasing-usingVeryIndirectAliases1}

* ``test bool  usingVeryIndirectAliases1()``

## function usingVeryIndirectAliases2 {#lang-rascal-tests-functionality-Aliasing-usingVeryIndirectAliases2}

* ``test bool  usingVeryIndirectAliases2()``

## function usingVeryIndirectAliases3 {#lang-rascal-tests-functionality-Aliasing-usingVeryIndirectAliases3}

* ``test bool  usingVeryIndirectAliases3()``

## function usingVeryIndirectAliases4 {#lang-rascal-tests-functionality-Aliasing-usingVeryIndirectAliases4}

* ``test bool  usingVeryIndirectAliases4()``

## function usingVeryIndirectAliases5 {#lang-rascal-tests-functionality-Aliasing-usingVeryIndirectAliases5}

* ``test bool  usingVeryIndirectAliases5()``

## function usingVeryIndirectAliases6 {#lang-rascal-tests-functionality-Aliasing-usingVeryIndirectAliases6}

* ``test bool  usingVeryIndirectAliases6()``

## alias INTEGER4 {#lang-rascal-tests-functionality-Aliasing-INTEGER4}

* `INTEGER3`

## alias INTEGER3 {#lang-rascal-tests-functionality-Aliasing-INTEGER3}

* `int`

## function outofOrderDeclaration {#lang-rascal-tests-functionality-Aliasing-outofOrderDeclaration}

* ``test bool outofOrderDeclaration()``

## alias ADT0 {#lang-rascal-tests-functionality-Aliasing-ADT0}

* `ADT1`

## data ADT1 {#lang-rascal-tests-functionality-Aliasing-ADT1}

```rascal
data ADT1  
     = f(int)
     ;
```

## function aliasAndADT1 {#lang-rascal-tests-functionality-Aliasing-aliasAndADT1}

* ``test bool  aliasAndADT1()``

## alias StateId {#lang-rascal-tests-functionality-Aliasing-StateId}

* `int`

## alias Permutation {#lang-rascal-tests-functionality-Aliasing-Permutation}

* `list[int]`

## alias StatedId {#lang-rascal-tests-functionality-Aliasing-StatedId}

* `int`

## alias Sym {#lang-rascal-tests-functionality-Aliasing-Sym}

* `int`

## function aliasAndADT2 {#lang-rascal-tests-functionality-Aliasing-aliasAndADT2}

* ``test bool aliasAndADT2()``

## alias trans {#lang-rascal-tests-functionality-Aliasing-trans}

* `tuple[str, str, str]`

## alias block {#lang-rascal-tests-functionality-Aliasing-block}

* `set[trans]`

## alias partition {#lang-rascal-tests-functionality-Aliasing-partition}

* `set[block]`

## data P {#lang-rascal-tests-functionality-Aliasing-P}

```rascal
data P[&T]  
     = p(&T a)
     ;
```

## function transitiveAliasAcrossTuples {#lang-rascal-tests-functionality-Aliasing-transitiveAliasAcrossTuples}

* ``test bool  transitiveAliasAcrossTuples()``

## function reifiedAlias1 {#lang-rascal-tests-functionality-Aliasing-reifiedAlias1}

* ``test bool reifiedAlias1()``

## function reifiedAlias2 {#lang-rascal-tests-functionality-Aliasing-reifiedAlias2}

* ``test bool reifiedAlias2()``

## alias LIST[&T] {#lang-rascal-tests-functionality-Aliasing-LIST[&T]}

* `list[&T]`

## function reifiedAlias3 {#lang-rascal-tests-functionality-Aliasing-reifiedAlias3}

* ``test bool reifiedAlias3()``

## function reifiedAlias4 {#lang-rascal-tests-functionality-Aliasing-reifiedAlias4}

* ``test bool reifiedAlias4()``

## alias TUPLELIST[&T] {#lang-rascal-tests-functionality-Aliasing-TUPLELIST[&T]}

* `tuple[LIST[&T], LIST[&T]]`

## function reifiedAlias5 {#lang-rascal-tests-functionality-Aliasing-reifiedAlias5}

* ``test bool reifiedAlias5()``

## alias STRING {#lang-rascal-tests-functionality-Aliasing-STRING}

* `str`

## data DATA1 {#lang-rascal-tests-functionality-Aliasing-DATA1}

```rascal
data DATA1  
     = d1(STRING s)
     ;
```

## function reifiedAlias6 {#lang-rascal-tests-functionality-Aliasing-reifiedAlias6}

* ``test bool reifiedAlias6()``

## data DATA2 {#lang-rascal-tests-functionality-Aliasing-DATA2}

```rascal
data DATA2  
     = d2(DATA1(STRING) fun)
     ;
```

## function reifiedAlias7 {#lang-rascal-tests-functionality-Aliasing-reifiedAlias7}

* ``test bool reifiedAlias7()``

## function reifiedAlias8 {#lang-rascal-tests-functionality-Aliasing-reifiedAlias8}

* ``test bool reifiedAlias8()``

## alias SET[&T] {#lang-rascal-tests-functionality-Aliasing-SET[&T]}

* `set[&T]`

## function setOrRel1 {#lang-rascal-tests-functionality-Aliasing-setOrRel1}

* ``test bool setOrRel1()``

## function setOrRel2 {#lang-rascal-tests-functionality-Aliasing-setOrRel2}

* ``test bool setOrRel2()``

## function setOrRel3 {#lang-rascal-tests-functionality-Aliasing-setOrRel3}

* ``test bool setOrRel3()``

## function setOrRel4 {#lang-rascal-tests-functionality-Aliasing-setOrRel4}

* ``test bool setOrRel4()``

## function setOrRel5 {#lang-rascal-tests-functionality-Aliasing-setOrRel5}

* ``test bool setOrRel5()``

## function setOrRel6 {#lang-rascal-tests-functionality-Aliasing-setOrRel6}

* ``test bool setOrRel6()``

## function setOrRel7 {#lang-rascal-tests-functionality-Aliasing-setOrRel7}

* ``test bool setOrRel7()``

## function setOrRel8 {#lang-rascal-tests-functionality-Aliasing-setOrRel8}

* ``test bool setOrRel8()``

## function listOrLrel1 {#lang-rascal-tests-functionality-Aliasing-listOrLrel1}

* ``test bool listOrLrel1()``

## function listOrLrel2 {#lang-rascal-tests-functionality-Aliasing-listOrLrel2}

* ``test bool listOrLrel2()``

## function listOrLrel3 {#lang-rascal-tests-functionality-Aliasing-listOrLrel3}

* ``test bool listOrLrel3()``

## function listOrLrel4 {#lang-rascal-tests-functionality-Aliasing-listOrLrel4}

* ``test bool listOrLrel4()``

## function listOrLrel5 {#lang-rascal-tests-functionality-Aliasing-listOrLrel5}

* ``test bool listOrLrel5()``

## function listOrLrel6 {#lang-rascal-tests-functionality-Aliasing-listOrLrel6}

* ``test bool listOrLrel6()``

## function listOrLrel7 {#lang-rascal-tests-functionality-Aliasing-listOrLrel7}

* ``test bool listOrLrel7()``

## function listOrLrel8 {#lang-rascal-tests-functionality-Aliasing-listOrLrel8}

* ``test bool listOrLrel8()``

## function enumerableAlias {#lang-rascal-tests-functionality-Aliasing-enumerableAlias}

* ``test bool enumerableAlias()``

this triggered issue #1595

