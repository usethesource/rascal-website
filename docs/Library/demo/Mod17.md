---
title: "module demo::Mod17"
---

#### Usage

`import demo::Mod17;`


## data Bool {#demo-Mod17-Bool}

```rascal
data Bool  
     = TRUE()
     | FALSE()
     ;
```

## data Nat {#demo-Mod17-Nat}

```rascal
data Nat  
     = ZERO()
     | S(Nat s1)
     ;
```

## data SNat {#demo-Mod17-SNat}

```rascal
data SNat  
     = EXZERO()
     | EXS(SNat s1)
     | EXPLUS(SNat s1, SNat s2)
     | EXMULT(SNat s1, SNat s2)
     | EXEXP(SNat s1, SNat s2)
     | EXONE()
     ;
```

## data TREE {#demo-Mod17-TREE}

```rascal
data TREE  
     = LEAF(Nat n1)
     | NODE(Nat n1,Nat n2, TREE t3, TREE t4)
     ;
```

## function equal {#demo-Mod17-equal}

* ``Bool equal(Nat t1, t1)``
* ``default Bool equal(Nat _, Nat _)``

## function int2SNat {#demo-Mod17-int2SNat}

* ``SNat int2SNat(int n)``

## function run_evalsym17 {#demo-Mod17-run_evalsym17}

* ``void run_evalsym17(int max)``

## function run_evalexp17 {#demo-Mod17-run_evalexp17}

* ``void run_evalexp17(int max)``

## function run_evaltree17 {#demo-Mod17-run_evaltree17}

* ``void run_evaltree17(int max)``

## function main {#demo-Mod17-main}

* ``int main(int max)``

## function BUILDTREE {#demo-Mod17-BUILDTREE}

* ``TREE BUILDTREE(ZERO(), Nat val)``
* ``TREE BUILDTREE(S(Nat x), Nat y)``

## function PLUS {#demo-Mod17-PLUS}

* ``Nat PLUS(Nat x, ZERO())``
* ``Nat PLUS(Nat x, S(Nat y))``

## function MULT {#demo-Mod17-MULT}

* ``Nat MULT(Nat x, ZERO())``
* ``Nat MULT(Nat x, S(Nat y))``

## function EXP {#demo-Mod17-EXP}

* ``Nat EXP(Nat _, ZERO())``

## function Exp {#demo-Mod17-Exp}

* ``Nat Exp(Nat x, S(Nat y))``

## function SUCC17 {#demo-Mod17-SUCC17}

* ``Nat SUCC17(S(S(S(S(S(S(S(S(S(S(S(S(S(S(S(S(ZERO())))))))))))))))))``
* ``default Nat SUCC17(Nat x)``

## function PRED17 {#demo-Mod17-PRED17}

* ``Nat PRED17(S(Nat x))``
* ``Nat PRED17(ZERO())``

## function PLUS17 {#demo-Mod17-PLUS17}

* ``Nat PLUS17(Nat x,ZERO())``
* ``Nat PLUS17(Nat x,S(Nat y))``

## function MULT17 {#demo-Mod17-MULT17}

* ``Nat MULT17(Nat x,ZERO())``
* ``Nat MULT17(Nat x,S(Nat y))``

## function EXP17 {#demo-Mod17-EXP17}

* ``Nat EXP17(Nat x,ZERO())``
* ``Nat EXP17(Nat x,S(Nat y))``

## function EVAL {#demo-Mod17-EVAL}

* ``Nat EVAL(EXZERO())``
* ``Nat EVAL(EXS(SNat Xs))``
* ``Nat EVAL(EXPLUS(SNat Xs,SNat Ys))``
* ``Nat EVAL(EXMULT(SNat Xs,SNat Ys))``
* ``Nat EVAL(EXEXP(SNat Xs,SNat Ys))``

## function EVALSYM17 {#demo-Mod17-EVALSYM17}

* ``Nat EVALSYM17(EXZERO())``
* ``Nat EVALSYM17(EXS(SNat Xs))``
* ``Nat EVALSYM17(EXPLUS(SNat Xs,SNat Ys))``
* ``Nat EVALSYM17(EXMULT(SNat Xs,EXZERO()))``
* ``Nat EVALSYM17(EXMULT(SNat Xs,EXS(SNat Ys)))``
* ``Nat EVALSYM17(EXMULT(SNat Xs,EXPLUS(SNat Ys,SNat Zs)))``
* ``Nat EVALSYM17(EXMULT(SNat Xs,EXMULT(SNat Ys,SNat Zs)))``
* ``Nat EVALSYM17(EXMULT(SNat Xs,EXEXP(SNat Ys,SNat Zs)))``
* ``Nat EVALSYM17(EXEXP(SNat Xs,EXZERO()))``
* ``Nat EVALSYM17(EXEXP(SNat Xs,EXS(SNat Ys)))``
* ``Nat EVALSYM17(EXEXP(SNat Xs,EXPLUS(SNat Ys,SNat Zs)))``
* ``Nat EVALSYM17(EXEXP(SNat Xs,EXMULT(SNat Ys,SNat Zs)))``
* ``Nat EVALSYM17(EXEXP(SNat Xs,EXEXP(SNat Ys,SNat Zs)))``

## function EVALEXP17 {#demo-Mod17-EVALEXP17}

* ``Nat EVALEXP17(SNat Xs)``

## function DEC {#demo-Mod17-DEC}

* ``SNat DEC(EXEXP(SNat Xs,EXZERO()))``
* ``SNat DEC(EXEXP(SNat Xs,EXS(SNat Ys)))``
* ``SNat DEC(EXEXP(SNat Xs,EXPLUS(SNat Ys,SNat Zs)))``
* ``SNat DEC(EXEXP(SNat Xs,EXMULT(SNat Ys,SNat Zs)))``
* ``SNat DEC(EXEXP(SNat Xs,EXEXP(SNat Ys,SNat Zs)))``

## function EVAL17 {#demo-Mod17-EVAL17}

* ``Nat EVAL17(EXONE())``
* ``Nat EVAL17(EXZERO())``
* ``Nat EVAL17(EXS(SNat Xs))``
* ``Nat EVAL17(EXPLUS(SNat Xs,SNat Ys))``
* ``Nat EVAL17(EXMULT(SNat Xs,SNat Ys))``
* ``Nat EVAL17(EXEXP(SNat Xs,SNat Ys))``

## function EXPAND {#demo-Mod17-EXPAND}

* ``SNat EXPAND(EXZERO())``
* ``SNat EXPAND(EXONE())``
* ``SNat EXPAND(EXS(SNat Xs))``
* ``SNat EXPAND(EXPLUS(SNat Xs,SNat Ys))``
* ``SNat EXPAND(EXMULT(SNat Xs,EXZERO()))``
* ``SNat EXPAND(EXMULT(SNat Xs,EXONE()))``
* ``SNat EXPAND(EXMULT(SNat Xs,EXPLUS(SNat Ys,SNat Zs)))``
* ``SNat EXPAND(EXMULT(SNat Xs,SNat Ys))``
* ``SNat EXPAND(EXEXP(SNat Xs,EXZERO()))``
* ``SNat EXPAND(EXEXP(SNat Xs,EXONE()))``
* ``SNat EXPAND(EXEXP(SNat Xs,EXPLUS(SNat Ys,SNat Zs)))``
* ``SNat EXPAND(EXEXP(SNat Xs,SNat Ys))``

## function GETVAL {#demo-Mod17-GETVAL}

* ``Nat GETVAL(LEAF(Nat val))``
* ``Nat GETVAL(NODE(Nat val,Nat _,TREE _, TREE _))``

## function GETMAX {#demo-Mod17-GETMAX}

* ``Nat GETMAX(LEAF(val))``
* ``Nat GETMAX(NODE(Nat _, Nat max, TREE _, TREE _))``

## function calctree17 {#demo-Mod17-calctree17}

* ``Nat calctree17(Nat X)``

