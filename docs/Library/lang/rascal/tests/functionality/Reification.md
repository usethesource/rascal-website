---
title: "lang::rascal::tests::functionality::Reification"
---

#### Usage

`import lang::rascal::tests::functionality::Reification;`


## data P {#lang-rascal-tests-functionality-Reification-P}

```rascal
data P  
     = prop(str name)
     | and(P l, P r)
     | or(P l, P r)
     | not(P a)
     | t()
     | f()
     | axiom(P mine = t())
     ;
```

## data D {#lang-rascal-tests-functionality-Reification-D}

```rascal
data D[&T]  
     = d1(&T fld)
     ;
```

## function reifyBool {#lang-rascal-tests-functionality-Reification-reifyBool}

* ``test bool reifyBool()``

## function reifyStr {#lang-rascal-tests-functionality-Reification-reifyStr}

* ``test bool reifyStr()``

## function reifyInt {#lang-rascal-tests-functionality-Reification-reifyInt}

* ``test bool reifyInt()``

## function reifyReal {#lang-rascal-tests-functionality-Reification-reifyReal}

* ``test bool reifyReal()``

## function reifyRat {#lang-rascal-tests-functionality-Reification-reifyRat}

* ``test bool reifyRat()``

## function reifyNum {#lang-rascal-tests-functionality-Reification-reifyNum}

* ``test bool reifyNum()``

## function reifyLoc {#lang-rascal-tests-functionality-Reification-reifyLoc}

* ``test bool reifyLoc()``

## function reifyDatetime {#lang-rascal-tests-functionality-Reification-reifyDatetime}

* ``test bool reifyDatetime()``

## function reifyNode {#lang-rascal-tests-functionality-Reification-reifyNode}

* ``test bool reifyNode()``

## function reifyVoid {#lang-rascal-tests-functionality-Reification-reifyVoid}

* ``test bool reifyVoid()``

## function reifyValue {#lang-rascal-tests-functionality-Reification-reifyValue}

* ``test bool reifyValue()``

## function reifyList {#lang-rascal-tests-functionality-Reification-reifyList}

* ``test bool reifyList()``

## function reifySet {#lang-rascal-tests-functionality-Reification-reifySet}

* ``test bool reifySet()``

## function reifyBag {#lang-rascal-tests-functionality-Reification-reifyBag}

* ``test bool reifyBag()``

## function reifyMap {#lang-rascal-tests-functionality-Reification-reifyMap}

* ``test bool reifyMap()``

## function reifyMapWithLabels {#lang-rascal-tests-functionality-Reification-reifyMapWithLabels}

* ``test bool reifyMapWithLabels()``

## function reifyFunction {#lang-rascal-tests-functionality-Reification-reifyFunction}

* ``test bool reifyFunction()``

## function reifyFunctionWithLabel {#lang-rascal-tests-functionality-Reification-reifyFunctionWithLabel}

* ``test bool reifyFunctionWithLabel()``

## function reifyParameter {#lang-rascal-tests-functionality-Reification-reifyParameter}

* ``test bool reifyParameter()``

## function reifyParameterWithBound {#lang-rascal-tests-functionality-Reification-reifyParameterWithBound}

* ``test bool reifyParameterWithBound()``

## function reifyTuple {#lang-rascal-tests-functionality-Reification-reifyTuple}

* ``test bool reifyTuple()``

## function reifyTupleWithLabels {#lang-rascal-tests-functionality-Reification-reifyTupleWithLabels}

* ``test bool reifyTupleWithLabels()``

## function reifyRel {#lang-rascal-tests-functionality-Reification-reifyRel}

* ``test bool reifyRel()``

## function reifyRelWithLabels {#lang-rascal-tests-functionality-Reification-reifyRelWithLabels}

* ``test bool reifyRelWithLabels()``

## function reifyLrel {#lang-rascal-tests-functionality-Reification-reifyLrel}

* ``test bool reifyLrel()``

## function reifyLrelWithLabels {#lang-rascal-tests-functionality-Reification-reifyLrelWithLabels}

* ``test bool reifyLrelWithLabels()``

## function reifyReified1 {#lang-rascal-tests-functionality-Reification-reifyReified1}

* ``test bool reifyReified1()``

## function reifyReified2 {#lang-rascal-tests-functionality-Reification-reifyReified2}

* ``test bool reifyReified2()``

## function reifyReified3 {#lang-rascal-tests-functionality-Reification-reifyReified3}

* ``test bool reifyReified3()``

## function everyTypeCanBeReifiedWithoutExceptions {#lang-rascal-tests-functionality-Reification-everyTypeCanBeReifiedWithoutExceptions}

* ``test bool everyTypeCanBeReifiedWithoutExceptions(&T u)``

## function allConstructorsAreDefined {#lang-rascal-tests-functionality-Reification-allConstructorsAreDefined}

* ``test bool allConstructorsAreDefined()``

## function allConstructorsForAnAlternativeDefineTheSameSort {#lang-rascal-tests-functionality-Reification-allConstructorsForAnAlternativeDefineTheSameSort}

* ``test bool allConstructorsForAnAlternativeDefineTheSameSort()``

## function typeParameterReificationIsStatic1 {#lang-rascal-tests-functionality-Reification-typeParameterReificationIsStatic1}

* ``test bool typeParameterReificationIsStatic1(&F _)``

## function typeParameterReificationIsStatic2 {#lang-rascal-tests-functionality-Reification-typeParameterReificationIsStatic2}

* ``test bool typeParameterReificationIsStatic2(list[&F] _)``

## function typeParameterReificationIsStatic3 {#lang-rascal-tests-functionality-Reification-typeParameterReificationIsStatic3}

* ``test bool typeParameterReificationIsStatic3(&T <: list[&F] f)``

## function dynamicTypesAreAlwaysGeneric {#lang-rascal-tests-functionality-Reification-dynamicTypesAreAlwaysGeneric}

* ``test bool dynamicTypesAreAlwaysGeneric(value v)``

## data P {#lang-rascal-tests-functionality-Reification-P}

```rascal
data P (int size = 0)
```

## function allConstructorsHaveTheCommonKwParam {#lang-rascal-tests-functionality-Reification-allConstructorsHaveTheCommonKwParam}

* ``test bool allConstructorsHaveTheCommonKwParam()``

## function axiomHasItsKwParam {#lang-rascal-tests-functionality-Reification-axiomHasItsKwParam}

* ``test bool axiomHasItsKwParam()``

## function axiomsKwParamIsExclusive {#lang-rascal-tests-functionality-Reification-axiomsKwParamIsExclusive}

* ``test bool axiomsKwParamIsExclusive()``

