---
title: "lang::rascal::tests::basic::Functions"
---

#### Usage

`import lang::rascal::tests::basic::Functions;`


## data B {#lang-rascal-tests-basic-Functions-B}

```rascal
data B  
     = and(B lhs, B rhs)
     | or(B lhs, B rhs)
     | t()
     | f()
     ;
```

## function and {#lang-rascal-tests-basic-Functions-and}

* ``B and(B b1, and(B b2, B b3))``

## function callDelAnnotations {#lang-rascal-tests-basic-Functions-callDelAnnotations}

* ``value callDelAnnotations()``

## function testCallWithTypeParameterBound {#lang-rascal-tests-basic-Functions-testCallWithTypeParameterBound}

* ``test bool testCallWithTypeParameterBound()``

## function normalizedCall {#lang-rascal-tests-basic-Functions-normalizedCall}

* ``test bool normalizedCall(B b1, B b2, B b3)``

## function normalizedVisit {#lang-rascal-tests-basic-Functions-normalizedVisit}

* ``test bool normalizedVisit()``

## function giveOr {#lang-rascal-tests-basic-Functions-giveOr}

* ``B (B, B) giveOr()``

## function giveOr1 {#lang-rascal-tests-basic-Functions-giveOr1}

* ``test bool giveOr1()``

## function callKwp {#lang-rascal-tests-basic-Functions-callKwp}

* ``test bool callKwp()``

## function kwp {#lang-rascal-tests-basic-Functions-kwp}

* ``void kwp(value x = 1)``

## function g {#lang-rascal-tests-basic-Functions-g}

* ``str g(str s)``

## function functionWithWhen {#lang-rascal-tests-basic-Functions-functionWithWhen}

* ``test bool functionWithWhen()``

## function fn {#lang-rascal-tests-basic-Functions-fn}

* ``str fn(str s, int ints..., str kw = "keyword")``

## function functionWithVarargsAndKeyword1 {#lang-rascal-tests-basic-Functions-functionWithVarargsAndKeyword1}

* ``test bool functionWithVarargsAndKeyword1()``

## function functionWithVarargsAndKeyword2 {#lang-rascal-tests-basic-Functions-functionWithVarargsAndKeyword2}

* ``test bool functionWithVarargsAndKeyword2()``

## function functionWithVarargsAndKeyword3 {#lang-rascal-tests-basic-Functions-functionWithVarargsAndKeyword3}

* ``test bool functionWithVarargsAndKeyword3()``

## function functionWithVarargsAndKeyword4 {#lang-rascal-tests-basic-Functions-functionWithVarargsAndKeyword4}

* ``test bool functionWithVarargsAndKeyword4()``

## function fvarargs {#lang-rascal-tests-basic-Functions-fvarargs}

* ``int fvarargs(str _, value _...)``
* ``int fvarargs(int _, str s, value _...)``
* ``int fvarargs(bool _, int _, str _, value _...)``

## function overloadedWithVarArgs1 {#lang-rascal-tests-basic-Functions-overloadedWithVarArgs1}

* ``test bool overloadedWithVarArgs1()``

## function overloadedWithVarArgs2 {#lang-rascal-tests-basic-Functions-overloadedWithVarArgs2}

* ``test bool overloadedWithVarArgs2()``

## function overloadedWithVarArgs3 {#lang-rascal-tests-basic-Functions-overloadedWithVarArgs3}

* ``test bool overloadedWithVarArgs3()``

## function overloadedWithVarArgs4 {#lang-rascal-tests-basic-Functions-overloadedWithVarArgs4}

* ``test bool overloadedWithVarArgs4()``

## function overloadedWithVarArgs5 {#lang-rascal-tests-basic-Functions-overloadedWithVarArgs5}

* ``test bool overloadedWithVarArgs5()``

## function overloadedWithVarArgs6 {#lang-rascal-tests-basic-Functions-overloadedWithVarArgs6}

* ``test bool overloadedWithVarArgs6()``

## function overloadedWithVarArgs7 {#lang-rascal-tests-basic-Functions-overloadedWithVarArgs7}

* ``test bool overloadedWithVarArgs7()``

## function overloadedWithVarArgs8 {#lang-rascal-tests-basic-Functions-overloadedWithVarArgs8}

* ``test bool overloadedWithVarArgs8()``

## function overloadedWithVarArgs9 {#lang-rascal-tests-basic-Functions-overloadedWithVarArgs9}

* ``test bool overloadedWithVarArgs9()``

## function f1 {#lang-rascal-tests-basic-Functions-f1}

* ``int f1()``

## function nestedFunctions1 {#lang-rascal-tests-basic-Functions-nestedFunctions1}

* ``value nestedFunctions1()``

## function f2 {#lang-rascal-tests-basic-Functions-f2}

* ``str f2(0)``
* ``str f2(1)``
* ``default str f2(int n)``

## function g2 {#lang-rascal-tests-basic-Functions-g2}

* ``str g2("0")``
* ``str g2("1")``
* ``default str g2(str s)``

## function nestedFunctionCall1 {#lang-rascal-tests-basic-Functions-nestedFunctionCall1}

* ``test bool nestedFunctionCall1()``

## function nestedFunctionCall2 {#lang-rascal-tests-basic-Functions-nestedFunctionCall2}

* ``test bool nestedFunctionCall2()``

## function nestedFunctionCall3 {#lang-rascal-tests-basic-Functions-nestedFunctionCall3}

* ``test bool nestedFunctionCall3()``

## function f3 {#lang-rascal-tests-basic-Functions-f3}

* ``str f3(0)``
* ``str f3(1)``
* ``default str f3(int n)``

## function g3 {#lang-rascal-tests-basic-Functions-g3}

* ``str g3("0")``
* ``str g3("1")``
* ``default str g3(str s)``

## function nestedFunctions3 {#lang-rascal-tests-basic-Functions-nestedFunctions3}

* ``test bool nestedFunctions3()``

## function g4 {#lang-rascal-tests-basic-Functions-g4}

* ``int () g4()``

## function nestedFunctions4 {#lang-rascal-tests-basic-Functions-nestedFunctions4}

* ``test bool nestedFunctions4()``

## function f5 {#lang-rascal-tests-basic-Functions-f5}

* ``int (int) f5()``

## function h5 {#lang-rascal-tests-basic-Functions-h5}

* ``int (int) h5(int n1)``

## function capture1 {#lang-rascal-tests-basic-Functions-capture1}

* ``test bool capture1()``

## function closure1 {#lang-rascal-tests-basic-Functions-closure1}

* ``test bool closure1()``

## function something {#lang-rascal-tests-basic-Functions-something}

* ``&T something(set[&T] x)``
* ``default value something({})``

## function parameterizedFunctionsDoNotReturnVoid {#lang-rascal-tests-basic-Functions-parameterizedFunctionsDoNotReturnVoid}

* ``test bool parameterizedFunctionsDoNotReturnVoid()``

## function functionTypeArgumentVariance1 {#lang-rascal-tests-basic-Functions-functionTypeArgumentVariance1}

* ``test bool functionTypeArgumentVariance1()``

## function functionTypeArgumentVariance2 {#lang-rascal-tests-basic-Functions-functionTypeArgumentVariance2}

* ``test bool functionTypeArgumentVariance2()``

## function functionTypeArgumentVariance3 {#lang-rascal-tests-basic-Functions-functionTypeArgumentVariance3}

* ``test bool functionTypeArgumentVariance3()``

## function higherOrderFunctionCompatibility1 {#lang-rascal-tests-basic-Functions-higherOrderFunctionCompatibility1}

* ``test bool higherOrderFunctionCompatibility1()``

## function higherOrderFunctionCompatibility2 {#lang-rascal-tests-basic-Functions-higherOrderFunctionCompatibility2}

* ``test bool higherOrderFunctionCompatibility2()``

## function higherOrderFunctionCompatibility3 {#lang-rascal-tests-basic-Functions-higherOrderFunctionCompatibility3}

* ``test bool higherOrderFunctionCompatibility3()``

## function higherOrderVoidFunctionCompatibility {#lang-rascal-tests-basic-Functions-higherOrderVoidFunctionCompatibility}

* ``test bool higherOrderVoidFunctionCompatibility()``

## function returnOfAnInstantiatedGenericFunction {#lang-rascal-tests-basic-Functions-returnOfAnInstantiatedGenericFunction}

* ``test bool returnOfAnInstantiatedGenericFunction()``

## function curryAConstructor {#lang-rascal-tests-basic-Functions-curryAConstructor}

* ``test bool curryAConstructor()``

## function selfApplyCurry {#lang-rascal-tests-basic-Functions-selfApplyCurry}

* ``test bool selfApplyCurry()``

## function accessParameterInClosure {#lang-rascal-tests-basic-Functions-accessParameterInClosure}

* ``test bool accessParameterInClosure()``

## function assignVariableInNestedFunctions {#lang-rascal-tests-basic-Functions-assignVariableInNestedFunctions}

* ``test bool assignVariableInNestedFunctions()``

## function assignVariableInNestedFunctionWithVisit {#lang-rascal-tests-basic-Functions-assignVariableInNestedFunctionWithVisit}

* ``test bool assignVariableInNestedFunctionWithVisit()``

## function container {#lang-rascal-tests-basic-Functions-container}

* ``int container(int n)``

## function sharedFormal {#lang-rascal-tests-basic-Functions-sharedFormal}

* ``test bool sharedFormal()``

## function assignVariableInNestedFunctions1 {#lang-rascal-tests-basic-Functions-assignVariableInNestedFunctions1}

* ``test bool assignVariableInNestedFunctions1()``

## function assignVariableInVisit1 {#lang-rascal-tests-basic-Functions-assignVariableInVisit1}

* ``test bool assignVariableInVisit1()``

## function assignVariableInNestedFunctions2 {#lang-rascal-tests-basic-Functions-assignVariableInNestedFunctions2}

* ``test bool assignVariableInNestedFunctions2(int x)``

## function assignVariableInVisit2 {#lang-rascal-tests-basic-Functions-assignVariableInVisit2}

* ``test bool assignVariableInVisit2(int x)``

## function assignVariableInNestedFunctions3 {#lang-rascal-tests-basic-Functions-assignVariableInNestedFunctions3}

* ``test bool assignVariableInNestedFunctions3()``

## function assignVariableInVisit3 {#lang-rascal-tests-basic-Functions-assignVariableInVisit3}

* ``test bool assignVariableInVisit3()``

## function assignVariableInNestedFunctions4 {#lang-rascal-tests-basic-Functions-assignVariableInNestedFunctions4}

* ``test bool assignVariableInNestedFunctions4()``

## function assignVariableInVisit4 {#lang-rascal-tests-basic-Functions-assignVariableInVisit4}

* ``test bool assignVariableInVisit4()``

## function assignVariableInNestedFunctions5 {#lang-rascal-tests-basic-Functions-assignVariableInNestedFunctions5}

* ``test bool assignVariableInNestedFunctions5(int x)``

## function assignVariableInVisit5 {#lang-rascal-tests-basic-Functions-assignVariableInVisit5}

* ``test bool assignVariableInVisit5(int x)``

## data D {#lang-rascal-tests-basic-Functions-D}

```rascal
data D  
     = one_d(int(int a) n)
     ;
```

## function assignVariableViaFunctionValue {#lang-rascal-tests-basic-Functions-assignVariableViaFunctionValue}

* ``test bool assignVariableViaFunctionValue()``

## function namedParameterInClosure {#lang-rascal-tests-basic-Functions-namedParameterInClosure}

* ``test bool namedParameterInClosure()``

