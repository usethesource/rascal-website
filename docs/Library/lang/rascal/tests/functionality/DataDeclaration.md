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

```rascal
str

```

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

```rascal
test bool bool1()

```

## function bool2 {#lang-rascal-tests-functionality-DataDeclaration-bool2}

```rascal
test bool bool2()

```

## function bool3 {#lang-rascal-tests-functionality-DataDeclaration-bool3}

```rascal
test bool bool3()

```

## function bool4 {#lang-rascal-tests-functionality-DataDeclaration-bool4}

```rascal
test bool bool4()

```

## function bool5 {#lang-rascal-tests-functionality-DataDeclaration-bool5}

```rascal
test bool bool5()

```

## function bool6 {#lang-rascal-tests-functionality-DataDeclaration-bool6}

```rascal
test bool bool6()

```

## function bool7 {#lang-rascal-tests-functionality-DataDeclaration-bool7}

```rascal
test bool bool7()

```

## function bool8 {#lang-rascal-tests-functionality-DataDeclaration-bool8}

```rascal
test bool bool8()

```

## function bool9 {#lang-rascal-tests-functionality-DataDeclaration-bool9}

```rascal
test bool bool9()

```

## function bool10 {#lang-rascal-tests-functionality-DataDeclaration-bool10}

```rascal
test bool bool10()

```

## function bool11 {#lang-rascal-tests-functionality-DataDeclaration-bool11}

```rascal
test bool bool11()

```

## function boolFieldUpdate1 {#lang-rascal-tests-functionality-DataDeclaration-boolFieldUpdate1}

```rascal
test bool boolFieldUpdate1()

```

## function boolFieldUpdate2 {#lang-rascal-tests-functionality-DataDeclaration-boolFieldUpdate2}

```rascal
test bool boolFieldUpdate2()

```

## function boolFieldUpdate3 {#lang-rascal-tests-functionality-DataDeclaration-boolFieldUpdate3}

```rascal
test bool boolFieldUpdate3()

```

## function boolFieldUpdate4 {#lang-rascal-tests-functionality-DataDeclaration-boolFieldUpdate4}

```rascal
test bool boolFieldUpdate4()

```

## function boolFieldUpdate5 {#lang-rascal-tests-functionality-DataDeclaration-boolFieldUpdate5}

```rascal
test bool boolFieldUpdate5()

```

## function boolFieldUpdate6 {#lang-rascal-tests-functionality-DataDeclaration-boolFieldUpdate6}

```rascal
test bool boolFieldUpdate6()

```

## function let1 {#lang-rascal-tests-functionality-DataDeclaration-let1}

```rascal
test bool let1()

```

## function let2 {#lang-rascal-tests-functionality-DataDeclaration-let2}

```rascal
test bool let2()

```

## function let3 {#lang-rascal-tests-functionality-DataDeclaration-let3}

```rascal
test bool let3()

```

## function parameterized1 {#lang-rascal-tests-functionality-DataDeclaration-parameterized1}

```rascal
test bool parameterized1()

```

## function parameterized2 {#lang-rascal-tests-functionality-DataDeclaration-parameterized2}

```rascal
test bool parameterized2()

```

## function parameterized3 {#lang-rascal-tests-functionality-DataDeclaration-parameterized3}

```rascal
test bool parameterized3()

```

## function parameterized4 {#lang-rascal-tests-functionality-DataDeclaration-parameterized4}

```rascal
test bool parameterized4()

```

## function parameterized4a {#lang-rascal-tests-functionality-DataDeclaration-parameterized4a}

```rascal
test bool parameterized4a()

```

## function parameterized5 {#lang-rascal-tests-functionality-DataDeclaration-parameterized5}

```rascal
test bool parameterized5()

```

## function parameterized6 {#lang-rascal-tests-functionality-DataDeclaration-parameterized6}

```rascal
test bool parameterized6()

```

## function parameterized7 {#lang-rascal-tests-functionality-DataDeclaration-parameterized7}

```rascal
test bool parameterized7()

```

## function parameterized8 {#lang-rascal-tests-functionality-DataDeclaration-parameterized8}

```rascal
test bool parameterized8()

```

## function parameterized9 {#lang-rascal-tests-functionality-DataDeclaration-parameterized9}

```rascal
test bool parameterized9()

```

## function parameterized10 {#lang-rascal-tests-functionality-DataDeclaration-parameterized10}

```rascal
test bool parameterized10()

```

## function parameterized11 {#lang-rascal-tests-functionality-DataDeclaration-parameterized11}

```rascal
test bool parameterized11()

```

## function parameterized12 {#lang-rascal-tests-functionality-DataDeclaration-parameterized12}

```rascal
test bool parameterized12()

```

## function parameterized13 {#lang-rascal-tests-functionality-DataDeclaration-parameterized13}

```rascal
test bool parameterized13()

```

## function parameterized14 {#lang-rascal-tests-functionality-DataDeclaration-parameterized14}

```rascal
test bool parameterized14()

```

## function parameterized15 {#lang-rascal-tests-functionality-DataDeclaration-parameterized15}

```rascal
test bool parameterized15()

```

## function parameterized16 {#lang-rascal-tests-functionality-DataDeclaration-parameterized16}

```rascal
test bool parameterized16()

```

## function parameterized17 {#lang-rascal-tests-functionality-DataDeclaration-parameterized17}

```rascal
test bool parameterized17()

```

## function parameterizedErrorTest1 {#lang-rascal-tests-functionality-DataDeclaration-parameterizedErrorTest1}

```rascal
test bool parameterizedErrorTest1()

```

## function unboundTypeVar1 {#lang-rascal-tests-functionality-DataDeclaration-unboundTypeVar1}

```rascal
test bool unboundTypeVar1()

```

## function unboundTypeVar2 {#lang-rascal-tests-functionality-DataDeclaration-unboundTypeVar2}

```rascal
test bool unboundTypeVar2()

```

## function unequalParameterType1 {#lang-rascal-tests-functionality-DataDeclaration-unequalParameterType1}

```rascal
test bool unequalParameterType1()

```

## function let4 {#lang-rascal-tests-functionality-DataDeclaration-let4}

```rascal
test bool let4()

```

## function let5 {#lang-rascal-tests-functionality-DataDeclaration-let5}

```rascal
test bool let5()

```

## function let6 {#lang-rascal-tests-functionality-DataDeclaration-let6}

```rascal
test bool let6()

```

## function let7 {#lang-rascal-tests-functionality-DataDeclaration-let7}

```rascal
test bool let7()

```

## data DwithEscapes {#lang-rascal-tests-functionality-DataDeclaration-DwithEscapes}

```rascal
data DwithEscapes  
     = \f()
     | \g(int \lft, str \rht)
     ;
```

## function escape1a {#lang-rascal-tests-functionality-DataDeclaration-escape1a}

```rascal
test bool escape1a()

```

## function escape1b {#lang-rascal-tests-functionality-DataDeclaration-escape1b}

```rascal
test bool escape1b()

```

## function escape1c {#lang-rascal-tests-functionality-DataDeclaration-escape1c}

```rascal
test bool escape1c()

```

## function escape1d {#lang-rascal-tests-functionality-DataDeclaration-escape1d}

```rascal
test bool escape1d()

```

## function escape1e {#lang-rascal-tests-functionality-DataDeclaration-escape1e}

```rascal
test bool escape1e()

```

