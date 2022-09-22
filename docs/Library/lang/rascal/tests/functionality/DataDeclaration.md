---
title: "module lang::rascal::tests::functionality::DataDeclaration"
---

#### Usage

`import lang::rascal::tests::functionality::DataDeclaration;`


## data Bool {#lang-rascal-tests-functionality-DataDeclaration-Bool}

```rascal
data Bool  
     = btrue()
     | bfalse()
     | band(Bool left, Bool right)
     | bor(Bool left, Bool right)
     ;
```

## data Exp {#lang-rascal-tests-functionality-DataDeclaration-Exp}

```rascal
data Exp  
     = let(str name, Exp exp1, Exp exp2)
     | var(str name)
     | \int(int intVal)
     ;
```

## data Exp1 {#lang-rascal-tests-functionality-DataDeclaration-Exp1}

```rascal
data Exp1[&T]  
     = tval(&T tval)
     | tval2(&T tval1, &T tval2)
     | ival(int x)
     ;
```

## alias Var2 {#lang-rascal-tests-functionality-DataDeclaration-Var2}

* `str`

## data Exp2 {#lang-rascal-tests-functionality-DataDeclaration-Exp2}

```rascal
data Exp2  
     = let(Var2 var, Exp2 exp1, Exp2 exp2)
     | var2(Var2 var)
     | \int2(int intVal)
     ;
```

## data Maybe {#lang-rascal-tests-functionality-DataDeclaration-Maybe}

```rascal
data Maybe[&T]  
     = None()
     | Some(&T t)
     ;
```

## function bool1 {#lang-rascal-tests-functionality-DataDeclaration-bool1}

* ``test bool bool1()``

## function bool2 {#lang-rascal-tests-functionality-DataDeclaration-bool2}

* ``test bool bool2()``

## function bool3 {#lang-rascal-tests-functionality-DataDeclaration-bool3}

* ``test bool bool3()``

## function bool4 {#lang-rascal-tests-functionality-DataDeclaration-bool4}

* ``test bool bool4()``

## function bool5 {#lang-rascal-tests-functionality-DataDeclaration-bool5}

* ``test bool bool5()``

## function bool6 {#lang-rascal-tests-functionality-DataDeclaration-bool6}

* ``test bool bool6()``

## function bool7 {#lang-rascal-tests-functionality-DataDeclaration-bool7}

* ``test bool bool7()``

## function bool8 {#lang-rascal-tests-functionality-DataDeclaration-bool8}

* ``test bool bool8()``

## function bool9 {#lang-rascal-tests-functionality-DataDeclaration-bool9}

* ``test bool bool9()``

## function bool10 {#lang-rascal-tests-functionality-DataDeclaration-bool10}

* ``test bool bool10()``

## function bool11 {#lang-rascal-tests-functionality-DataDeclaration-bool11}

* ``test bool bool11()``

## function boolFieldUpdate1 {#lang-rascal-tests-functionality-DataDeclaration-boolFieldUpdate1}

* ``test bool boolFieldUpdate1()``

## function boolFieldUpdate2 {#lang-rascal-tests-functionality-DataDeclaration-boolFieldUpdate2}

* ``test bool boolFieldUpdate2()``

## function boolFieldUpdate3 {#lang-rascal-tests-functionality-DataDeclaration-boolFieldUpdate3}

* ``test bool boolFieldUpdate3()``

## function boolFieldUpdate4 {#lang-rascal-tests-functionality-DataDeclaration-boolFieldUpdate4}

* ``test bool boolFieldUpdate4()``

## function boolFieldUpdate5 {#lang-rascal-tests-functionality-DataDeclaration-boolFieldUpdate5}

* ``test bool boolFieldUpdate5()``

## function boolFieldUpdate6 {#lang-rascal-tests-functionality-DataDeclaration-boolFieldUpdate6}

* ``test bool boolFieldUpdate6()``

## function let1 {#lang-rascal-tests-functionality-DataDeclaration-let1}

* ``test bool let1()``

## function let2 {#lang-rascal-tests-functionality-DataDeclaration-let2}

* ``test bool let2()``

## function let3 {#lang-rascal-tests-functionality-DataDeclaration-let3}

* ``test bool let3()``

## function parameterized1 {#lang-rascal-tests-functionality-DataDeclaration-parameterized1}

* ``test bool parameterized1()``

## function parameterized2 {#lang-rascal-tests-functionality-DataDeclaration-parameterized2}

* ``test bool parameterized2()``

## function parameterized3 {#lang-rascal-tests-functionality-DataDeclaration-parameterized3}

* ``test bool parameterized3()``

## function parameterized4 {#lang-rascal-tests-functionality-DataDeclaration-parameterized4}

* ``test bool parameterized4()``

## function parameterized4a {#lang-rascal-tests-functionality-DataDeclaration-parameterized4a}

* ``test bool parameterized4a()``

## function parameterized5 {#lang-rascal-tests-functionality-DataDeclaration-parameterized5}

* ``test bool parameterized5()``

## function parameterized6 {#lang-rascal-tests-functionality-DataDeclaration-parameterized6}

* ``test bool parameterized6()``

## function parameterized7 {#lang-rascal-tests-functionality-DataDeclaration-parameterized7}

* ``test bool parameterized7()``

## function parameterized8 {#lang-rascal-tests-functionality-DataDeclaration-parameterized8}

* ``test bool parameterized8()``

## function parameterized9 {#lang-rascal-tests-functionality-DataDeclaration-parameterized9}

* ``test bool parameterized9()``

## function parameterized10 {#lang-rascal-tests-functionality-DataDeclaration-parameterized10}

* ``test bool parameterized10()``

## function parameterized11 {#lang-rascal-tests-functionality-DataDeclaration-parameterized11}

* ``test bool parameterized11()``

## function parameterized12 {#lang-rascal-tests-functionality-DataDeclaration-parameterized12}

* ``test bool parameterized12()``

## function parameterized13 {#lang-rascal-tests-functionality-DataDeclaration-parameterized13}

* ``test bool parameterized13()``

## function parameterized14 {#lang-rascal-tests-functionality-DataDeclaration-parameterized14}

* ``test bool parameterized14()``

## function parameterized15 {#lang-rascal-tests-functionality-DataDeclaration-parameterized15}

* ``test bool parameterized15()``

## function parameterized16 {#lang-rascal-tests-functionality-DataDeclaration-parameterized16}

* ``test bool parameterized16()``

## function parameterized17 {#lang-rascal-tests-functionality-DataDeclaration-parameterized17}

* ``test bool parameterized17()``

## function parameterizedErrorTest1 {#lang-rascal-tests-functionality-DataDeclaration-parameterizedErrorTest1}

* ``test bool parameterizedErrorTest1()``

## function unboundTypeVar1 {#lang-rascal-tests-functionality-DataDeclaration-unboundTypeVar1}

* ``test bool unboundTypeVar1()``

## function unboundTypeVar2 {#lang-rascal-tests-functionality-DataDeclaration-unboundTypeVar2}

* ``test bool unboundTypeVar2()``

## function unequalParameterType1 {#lang-rascal-tests-functionality-DataDeclaration-unequalParameterType1}

* ``test bool unequalParameterType1()``

## function let4 {#lang-rascal-tests-functionality-DataDeclaration-let4}

* ``test bool let4()``

## function let5 {#lang-rascal-tests-functionality-DataDeclaration-let5}

* ``test bool let5()``

## function let6 {#lang-rascal-tests-functionality-DataDeclaration-let6}

* ``test bool let6()``

## function let7 {#lang-rascal-tests-functionality-DataDeclaration-let7}

* ``test bool let7()``

## data DwithEscapes {#lang-rascal-tests-functionality-DataDeclaration-DwithEscapes}

```rascal
data DwithEscapes  
     = \f()
     | \g(int \lft, str \rht)
     ;
```

## function escape1a {#lang-rascal-tests-functionality-DataDeclaration-escape1a}

* ``test bool escape1a()``

## function escape1b {#lang-rascal-tests-functionality-DataDeclaration-escape1b}

* ``test bool escape1b()``

## function escape1c {#lang-rascal-tests-functionality-DataDeclaration-escape1c}

* ``test bool escape1c()``

## function escape1d {#lang-rascal-tests-functionality-DataDeclaration-escape1d}

* ``test bool escape1d()``

## function escape1e {#lang-rascal-tests-functionality-DataDeclaration-escape1e}

* ``test bool escape1e()``

