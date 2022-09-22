---
title: "module lang::rascal::\\syntax::tests::ImplodeTests"
---

#### Usage

`import lang::rascal::\syntax::tests::ImplodeTests;`

Tests the potential clashes among value constructors of different adts, plus, the identified clash with: bool eq(value, value);


## data Num {#lang-rascal-\syntax-tests-ImplodeTests-Num}

```rascal
data Num  
     = \int(str n)
     ;
```

## data Exp {#lang-rascal-\syntax-tests-ImplodeTests-Exp}

```rascal
data Exp  
     = id(str name)
     | eq(Exp e1, Exp e2)
     | number(Num n)
     ;
```

## data Number {#lang-rascal-\syntax-tests-ImplodeTests-Number}

```rascal
data Number  
     = \int(str n)
     ;
```

## data Expr {#lang-rascal-\syntax-tests-ImplodeTests-Expr}

```rascal
data Expr  
     = id(str name)
     | eq(Expr e1, Expr e2)
     | number(Number n)
     ;
```

## function implodeExp {#lang-rascal-\syntax-tests-ImplodeTests-implodeExp}

* ``Exp implodeExp(str s)``

## function implodeExpLit1 {#lang-rascal-\syntax-tests-ImplodeTests-implodeExpLit1}

* ``Exp implodeExpLit1()``

## function implodeExpLit2 {#lang-rascal-\syntax-tests-ImplodeTests-implodeExpLit2}

* ``Exp implodeExpLit2()``

## function implodeExpr {#lang-rascal-\syntax-tests-ImplodeTests-implodeExpr}

* ``Expr implodeExpr(str s)``

## function implodeExprLit1 {#lang-rascal-\syntax-tests-ImplodeTests-implodeExprLit1}

* ``Expr implodeExprLit1()``

## function implodeExprLit2 {#lang-rascal-\syntax-tests-ImplodeTests-implodeExprLit2}

* ``Expr implodeExprLit2()``

## function test11 {#lang-rascal-\syntax-tests-ImplodeTests-test11}

* ``test bool test11()``

## function test12 {#lang-rascal-\syntax-tests-ImplodeTests-test12}

* ``test bool test12()``

## function test13 {#lang-rascal-\syntax-tests-ImplodeTests-test13}

* ``test bool test13()``

## function test14 {#lang-rascal-\syntax-tests-ImplodeTests-test14}

* ``test bool test14()``

## function test15 {#lang-rascal-\syntax-tests-ImplodeTests-test15}

* ``test bool test15()``

## function test16 {#lang-rascal-\syntax-tests-ImplodeTests-test16}

* ``test bool test16()``

## function test17 {#lang-rascal-\syntax-tests-ImplodeTests-test17}

* ``test bool test17()``

## function test18 {#lang-rascal-\syntax-tests-ImplodeTests-test18}

* ``test bool test18()``

## function test21 {#lang-rascal-\syntax-tests-ImplodeTests-test21}

* ``test bool test21()``

## function test22 {#lang-rascal-\syntax-tests-ImplodeTests-test22}

* ``test bool test22()``

## function test23 {#lang-rascal-\syntax-tests-ImplodeTests-test23}

* ``test bool test23()``

## function test24 {#lang-rascal-\syntax-tests-ImplodeTests-test24}

* ``test bool test24()``

