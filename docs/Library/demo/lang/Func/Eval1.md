---
title: "module demo::lang::Func::Eval1"
---

#### Usage

`import demo::lang::Func::Eval1;`


## alias Env {#demo-lang-Func-Eval1-Env}

* `map[str, int]`

## alias PEnv {#demo-lang-Func-Eval1-PEnv}

* `map[str, Func]`

## function eval1 {#demo-lang-Func-Eval1-eval1}

* ``int eval1(str main, list[int] args, Prog prog)``
* ``int eval1(nat(int nat), Env env, PEnv penv)``
* ``int eval1(var(str n), Env env, PEnv penv)``
* ``int eval1(mul(Exp lhs, Exp rhs), Env env, PEnv penv)``
* ``int eval1(div(Exp lhs, Exp rhs), Env env, PEnv penv)``
* ``int eval1(add(Exp lhs, Exp rhs), Env env, PEnv penv)``
* ``int eval1(sub(Exp lhs, Exp rhs), Env env, PEnv penv)``
* ``int eval1(gt(Exp lhs, Exp rhs), Env env, PEnv penv)``
* ``int eval1(lt(Exp lhs, Exp rhs), Env env, PEnv penv)``
* ``int eval1(geq(Exp lhs, Exp rhs), Env env, PEnv penv)``
* ``int eval1(leq(Exp lhs, Exp rhs), Env env, PEnv penv)``
* ``int eval1(cond(Exp cond, Exp then, Exp otherwise), Env env, PEnv penv)``
* ``int eval1(call(str name, list[Exp] args), Env env, PEnv penv)``
* ``int eval1(let(list[Binding] bindings, Exp exp), Env env, PEnv penv)``

