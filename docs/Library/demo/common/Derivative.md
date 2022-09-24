---
title: "module demo::common::Derivative"
---

#### Usage

`import demo::common::Derivative;`

## data Exp {#demo-common-Derivative-Exp}

```rascal
data Exp  
     = con(int n)
     | var(str name)
     | mul(Exp e1, Exp e2)
     | add(Exp e1, Exp e2)
     ;
```

## function dd {#demo-common-Derivative-dd}

* ``Exp dd(con(n), var(V))``
* ``Exp dd(var(V1), var(V2))``
* ``Exp dd(add(Exp e1, Exp e2), var(V))``
* ``Exp dd(mul(Exp e1, Exp e2), var(V))``

## function simp {#demo-common-Derivative-simp}

* ``Exp simp(add(con(n), con(m)))``
* ``Exp simp(mul(con(n), con(m)))``
* ``Exp simp(mul(con(1), Exp e))``
* ``Exp simp(mul(Exp e, con(1)))``
* ``Exp simp(mul(con(0), Exp e))``
* ``Exp simp(mul(Exp e, con(0)))``
* ``Exp simp(add(con(0), Exp e))``
* ``Exp simp(add(Exp e, con(0)))``
* ``default Exp simp(Exp e)``

## function simplify {#demo-common-Derivative-simplify}

* ``Exp simplify(Exp e)``

## function tstSimplity1 {#demo-common-Derivative-tstSimplity1}

* ``test bool tstSimplity1()``

## function tstSimplity2 {#demo-common-Derivative-tstSimplity2}

* ``test bool tstSimplity2()``

