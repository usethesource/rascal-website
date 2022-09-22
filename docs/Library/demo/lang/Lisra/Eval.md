---
title: "module demo::lang::Lisra::Eval"
---

#### Usage

`import demo::lang::Lisra::Eval;`


## function eval {#demo-lang-Lisra-Eval-eval}

* ``Lval eval(Lval x)``
* ``Result eval(str exp)``
* ``Result eval(Integer(int x), Env e)``
* ``Result eval(var:Atom(str name), Env e)``
* ``Result eval(List([Atom("quote"), *Lval exps]), Env e)``
* ``Result eval(List([Atom("set!"), var, exp]), Env e)``
* ``Result eval(List([Atom("if"), Lval tst, Lval conseq, Lval alt]), Env e)``
* ``Result eval(List([Atom("begin"), *Lval exps]) , Env e)``
* ``Result eval(List([Atom("define"), var, exp]), Env e)``
* ``Result eval(List([Atom("lambda"), List(list[Lval] vars), exp]), Env defEnv)``
* ``default Result eval(List([ *Lval exps ]), Env e)``

## function apply {#demo-lang-Lisra-Eval-apply}

* ``Result apply(Closure(Result(list[Lval] args, Env env) fn), list[Lval] args, Env e)``
* ``Result apply(Atom("+"),      [Integer(x), Integer(y)],      Env e)``
* ``Result apply(Atom("-"),      [Integer(x), Integer(y)],      Env e)``
* ``Result apply(Atom("*"),      [Integer(x), Integer(y)],      Env e)``
* ``Result apply(Atom("\<"),     [Lval x, Lval y],              Env e)``
* ``Result apply(Atom("\>"),     [Lval x, Lval y],              Env e)``
* ``Result apply(Atom("equal?"), [Lval x, Lval y],              Env e)``
* ``Result apply(Atom("null?"),  [List(list[Lval] x)],          Env e)``
* ``Result apply(Atom("cons"),   [Lval x, List(list[Lval] y)],  Env e)``
* ``Result apply(Atom("append"), [List(list[Lval] x), Lval y],  Env e)``
* ``Result apply(Atom("car"),    [List(list[Lval] x)],          Env e)``
* ``Result apply(Atom("cdr"),    [List(list[Lval] x)],          Env e)``
* ``Result apply(Atom("list"),   list[Lval] x,                  Env e)``
* ``default Result apply(Lval a,     list[Lval] b, Env e)``

