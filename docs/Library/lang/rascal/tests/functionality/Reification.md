---
title: "module lang::rascal::tests::functionality::Reification"
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

```rascal
test bool reifyBool()

```

## function reifyStr {#lang-rascal-tests-functionality-Reification-reifyStr}

```rascal
test bool reifyStr()

```

## function reifyInt {#lang-rascal-tests-functionality-Reification-reifyInt}

```rascal
test bool reifyInt()

```

## function reifyReal {#lang-rascal-tests-functionality-Reification-reifyReal}

```rascal
test bool reifyReal()

```

## function reifyRat {#lang-rascal-tests-functionality-Reification-reifyRat}

```rascal
test bool reifyRat()

```

## function reifyNum {#lang-rascal-tests-functionality-Reification-reifyNum}

```rascal
test bool reifyNum()

```

## function reifyLoc {#lang-rascal-tests-functionality-Reification-reifyLoc}

```rascal
test bool reifyLoc()

```

## function reifyDatetime {#lang-rascal-tests-functionality-Reification-reifyDatetime}

```rascal
test bool reifyDatetime()

```

## function reifyNode {#lang-rascal-tests-functionality-Reification-reifyNode}

```rascal
test bool reifyNode()

```

## function reifyVoid {#lang-rascal-tests-functionality-Reification-reifyVoid}

```rascal
test bool reifyVoid()

```

## function reifyValue {#lang-rascal-tests-functionality-Reification-reifyValue}

```rascal
test bool reifyValue()

```

## function reifyList {#lang-rascal-tests-functionality-Reification-reifyList}

```rascal
test bool reifyList()

```

## function reifySet {#lang-rascal-tests-functionality-Reification-reifySet}

```rascal
test bool reifySet()

```

## function reifyBag {#lang-rascal-tests-functionality-Reification-reifyBag}

```rascal
test bool reifyBag()

```

## function reifyMap {#lang-rascal-tests-functionality-Reification-reifyMap}

```rascal
test bool reifyMap()

```

## function reifyMapWithLabels {#lang-rascal-tests-functionality-Reification-reifyMapWithLabels}

```rascal
test bool reifyMapWithLabels()

```

## function reifyFunction {#lang-rascal-tests-functionality-Reification-reifyFunction}

```rascal
test bool reifyFunction()

```

## function reifyFunctionWithLabel {#lang-rascal-tests-functionality-Reification-reifyFunctionWithLabel}

```rascal
test bool reifyFunctionWithLabel()

```

## function reifyParameter {#lang-rascal-tests-functionality-Reification-reifyParameter}

```rascal
test bool reifyParameter()

```

## function reifyParameterWithBound {#lang-rascal-tests-functionality-Reification-reifyParameterWithBound}

```rascal
test bool reifyParameterWithBound()

```

## function reifyTuple {#lang-rascal-tests-functionality-Reification-reifyTuple}

```rascal
test bool reifyTuple()

```

## function reifyTupleWithLabels {#lang-rascal-tests-functionality-Reification-reifyTupleWithLabels}

```rascal
test bool reifyTupleWithLabels()

```

## function reifyRel {#lang-rascal-tests-functionality-Reification-reifyRel}

```rascal
test bool reifyRel()

```

## function reifyRelWithLabels {#lang-rascal-tests-functionality-Reification-reifyRelWithLabels}

```rascal
test bool reifyRelWithLabels()

```

## function reifyLrel {#lang-rascal-tests-functionality-Reification-reifyLrel}

```rascal
test bool reifyLrel()

```

## function reifyLrelWithLabels {#lang-rascal-tests-functionality-Reification-reifyLrelWithLabels}

```rascal
test bool reifyLrelWithLabels()

```

## function reifyReified1 {#lang-rascal-tests-functionality-Reification-reifyReified1}

```rascal
test bool reifyReified1()

```

## function reifyReified2 {#lang-rascal-tests-functionality-Reification-reifyReified2}

```rascal
test bool reifyReified2()

```

## function reifyReified3 {#lang-rascal-tests-functionality-Reification-reifyReified3}

```rascal
test bool reifyReified3()

```

## function everyTypeCanBeReifiedWithoutExceptions {#lang-rascal-tests-functionality-Reification-everyTypeCanBeReifiedWithoutExceptions}

```rascal
test bool everyTypeCanBeReifiedWithoutExceptions(&T u)

```

## function allConstructorsAreDefined {#lang-rascal-tests-functionality-Reification-allConstructorsAreDefined}

```rascal
test bool allConstructorsAreDefined()

```

## function allConstructorsForAnAlternativeDefineTheSameSort {#lang-rascal-tests-functionality-Reification-allConstructorsForAnAlternativeDefineTheSameSort}

```rascal
test bool allConstructorsForAnAlternativeDefineTheSameSort()

```

## function typeParameterReificationIsStatic1 {#lang-rascal-tests-functionality-Reification-typeParameterReificationIsStatic1}

```rascal
test bool typeParameterReificationIsStatic1(&F _)

```

## function typeParameterReificationIsStatic2 {#lang-rascal-tests-functionality-Reification-typeParameterReificationIsStatic2}

```rascal
test bool typeParameterReificationIsStatic2(list[&F] _)

```

## function typeParameterReificationIsStatic3 {#lang-rascal-tests-functionality-Reification-typeParameterReificationIsStatic3}

```rascal
test bool typeParameterReificationIsStatic3(&T <: list[&F] f)

```

## function dynamicTypesAreAlwaysGeneric {#lang-rascal-tests-functionality-Reification-dynamicTypesAreAlwaysGeneric}

```rascal
test bool dynamicTypesAreAlwaysGeneric(value v)

```

## data P {#lang-rascal-tests-functionality-Reification-P}

```rascal
data P (int size = 0)
```

## function allConstructorsHaveTheCommonKwParam {#lang-rascal-tests-functionality-Reification-allConstructorsHaveTheCommonKwParam}

```rascal
test bool allConstructorsHaveTheCommonKwParam()

```

## function axiomHasItsKwParam {#lang-rascal-tests-functionality-Reification-axiomHasItsKwParam}

```rascal
test bool axiomHasItsKwParam()

```

## function axiomsKwParamIsExclusive {#lang-rascal-tests-functionality-Reification-axiomsKwParamIsExclusive}

```rascal
test bool axiomsKwParamIsExclusive()

```

