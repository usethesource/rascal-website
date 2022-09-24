---
title: "module demo::lang::Func::Eval3"
---

#### Usage

`import demo::lang::Func::Eval3;`

## alias Env {#demo-lang-Func-Eval3-Env}

* `map[str, Address]`

## alias PEnv {#demo-lang-Func-Eval3-PEnv}

* `map[str, Func]`

## alias Result3 {#demo-lang-Func-Eval3-Result3}

* `tuple[Mem, int]`

## alias Address {#demo-lang-Func-Eval3-Address}

* `int`

## alias Mem {#demo-lang-Func-Eval3-Mem}

* `list[int]`

## function push {#demo-lang-Func-Eval3-push}

* ``Address push(Mem mem)``

## function alloc {#demo-lang-Func-Eval3-alloc}

* ``tuple[Mem, Address] alloc(Mem mem, int v)``

## function pop {#demo-lang-Func-Eval3-pop}

* ``Mem pop(Mem mem, Address scope)``

## function eval3 {#demo-lang-Func-Eval3-eval3}

* ``Result3 eval3(str main, list[int] args, Prog prog)``

## function bind {#demo-lang-Func-Eval3-bind}

* ``tuple[Mem, Env] bind(list[str] fs, list[int] args, Mem mem)``

## function eval3 {#demo-lang-Func-Eval3-eval3}

* ``Result3 eval3(nat(int nat), Env env, PEnv penv, Mem mem)``
* ``Result3 eval3(var(str name), Env env, PEnv penv, Mem mem)``
* ``Result3 eval3(mul(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem)``
* ``Result3 eval3(div(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem)``
* ``Result3 eval3(add(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem)``
* ``Result3 eval3(sub(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem)``
* ``Result3 eval3(gt(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem)``
* ``Result3 eval3(lt(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem)``
* ``Result3 eval3(geq(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem)``
* ``Result3 eval3(leq(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem)``
* ``Result3 eval3(cond(Exp cond, Exp then, Exp otherwise), Env env, PEnv penv, Mem mem)``
* ``Result3 eval3(call(str name, list[Exp] args), Env env, PEnv penv, Mem mem)``
* ``Result3 eval3(address(str var), Env env, PEnv penv, Mem mem)``
* ``Result3 eval3(deref(Exp exp), Env env, PEnv penv, Mem mem)``
* ``Result3 eval3(let(list[Binding] bindings, Exp exp), Env env, PEnv penv, Mem mem)``
* ``Result3 eval3(seq(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem)``
* ``Result3 eval3(assign(var(str name), Exp e), Env env, PEnv penv, Mem mem)``
* ``Result3 eval3(assign(deref(Exp lvalue), Exp e), Env env, PEnv penv, Mem mem)``

