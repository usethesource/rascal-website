---
title: "demo::lang::Func::Eval0"
---

#### Usage

`import demo::lang::Func::Eval0;`


## alias PEnv {#demo-lang-Func-Eval0-PEnv}

* `map[str, Func]`

## function eval0 {#demo-lang-Func-Eval0-eval0}

* ``value eval0(str main, list[int] args, Prog prog)``

## function subst {#demo-lang-Func-Eval0-subst}

* ``Exp subst(Exp exp, list[str] vars, list[int] values)``

## function eval0 {#demo-lang-Func-Eval0-eval0}

* ``int eval0(nat(int nat), PEnv penv)``
* ``int eval0(mul(Exp lhs, Exp rhs), PEnv penv)``
* ``int eval0(div(Exp lhs, Exp rhs), PEnv penv)``
* ``int eval0(add(Exp lhs, Exp rhs), PEnv penv)``
* ``int eval0(sub(Exp lhs, Exp rhs), PEnv penv)``
* ``int eval0(gt(Exp lhs, Exp rhs), PEnv penv)``
* ``int eval0(lt(Exp lhs, Exp rhs), PEnv penv)``
* ``int eval0(geq(Exp lhs, Exp rhs), PEnv penv)``
* ``int eval0(leq(Exp lhs, Exp rhs), PEnv penv)``
* ``int eval0(cond(Exp cond, Exp then, Exp otherwise), PEnv penv)``
* ``int eval0(call(str name, list[Exp] args), PEnv penv)``

