---
title: "module demo::lang::Func::Eval2"
---

#### Usage

`import demo::lang::Func::Eval2;`


## alias Env {#demo-lang-Func-Eval2-Env}

```rascal
map[str, int]

```

## alias PEnv {#demo-lang-Func-Eval2-PEnv}

```rascal
map[str, Func]

```

## alias Result2 {#demo-lang-Func-Eval2-Result2}

```rascal
tuple[Env, int]

```

## function eval2 {#demo-lang-Func-Eval2-eval2}

```rascal
Result2 eval2(str main, list[int] args, Prog prog)

Result2 eval2(nat(int nat), Env env, PEnv penv)

Result2 eval2(var(str name), Env env, PEnv penv)

Result2 eval2(mul(Exp lhs, Exp rhs), Env env, PEnv penv)

Result2 eval2(div(Exp lhs, Exp rhs), Env env, PEnv penv)

Result2 eval2(add(Exp lhs, Exp rhs), Env env, PEnv penv)

Result2 eval2(sub(Exp lhs, Exp rhs), Env env, PEnv penv)

Result2 eval2(gt(Exp lhs, Exp rhs), Env env, PEnv penv)

Result2 eval2(lt(Exp lhs, Exp rhs), Env env, PEnv penv)

Result2 eval2(geq(Exp lhs, Exp rhs), Env env, PEnv penv)

Result2 eval2(leq(Exp lhs, Exp rhs), Env env, PEnv penv)

Result2 eval2(cond(Exp cond, Exp then, Exp otherwise), Env env, PEnv penv)

Result2 eval2(call(str name, list[Exp] args), Env env, PEnv penv)

Result2 eval2(let(list[Binding] bindings, Exp exp), Env env, PEnv penv)

Result2 eval2(assign(var(str name), Exp exp), Env env, PEnv penv)

Result2 eval2(seq(Exp lhs, Exp rhs), Env env, PEnv penv)

```

