---
title: Eval
---

#### Synopsis

A Lisp interpreter.

#### Description

Here is the core of our Lisp interpreter. Its basic functionality is to take

*  An `Lval` and an Environment (both defined in [Runtime](../../../../Recipes/Languages/Lisra/Runtime)).
*  Distinguish the various forms an `Lval` can have and compute the
  effect of evaluating it.
*  Return a `Result` that captures the value just computed and possibleside-effects
on the environment.

Rascal provides pattern-directed dispatch: a function with the same name
can have complete patterns as arguments. When called, a pattern match determines which
variant of the function will be called. This is used extensively in the definitions below:

```rascal 
module demo::lang::Lisra::Eval

import Prelude;
import demo::lang::Lisra::Parse;
import demo::lang::Lisra::Runtime;

Result eval(str exp) = eval(parse(exp),  [()]);

Lval eval(Lval x) = eval(x, [()]).val;

Result eval(Integer(int x), Env e) = <Integer(x), e>; // <1>

Result eval(var:Atom(str name), Env e) { // <2>
  n = find(var, e);
  return <(n < 0) ? var : e[n][var], e>;
}

Result eval(List([Atom("quote"), *Lval exps]), Env e) = // <3>
  <size(exps) == 1 ? exps[0] : List(exps), e>;

Result eval(List([Atom("set!"), var, exp]), Env e) { // <4>
  val = eval(exp, e).val;
  n = find(var, e);
  if(n < 0) e[0][var] = val; else e[n][var] = val;
  return <val, e>;
}
                                                            
Result eval(List([Atom("if"), Lval tst, Lval conseq, Lval alt]), Env e) = // <5>
  eval(tst, e).val != FALSE ? eval(conseq, e) : eval(alt, e);
       
Result eval(List([Atom("begin"), *Lval exps]) , Env e) { // <6>
  val = FALSE;
  for(Lval exp <- exps){
      <val, e> = eval(exp, e);
  }
  return <val, e>;
}
                                                           
Result eval(List([Atom("define"), var, exp]), Env e){ // <7>
   e[0][var] = eval(exp, e).val;
   return <FALSE, e>;
}
                                                            
Result eval(List([Atom("lambda"), List(list[Lval] vars), exp]), Env defEnv) = // <8>
  <Closure(Result(list[Lval] args, Env callEnv) { 
                 return eval(exp, makeEnv(vars, args, tail(callEnv, size(defEnv))));
           }),
   defEnv>;

default Result eval(List([ *Lval exps ]), Env e) { // <9>
  if(isEmpty(exps))
     return <List([]), e>;
  vals = [ eval(exp, e).val | exp <- exps ];
  return apply(head(vals), tail(vals), e);
}

//default Result eval(Lval exp, Env e) = <exp, e>;

// Apply an Lval to a list of arguments and return a Result
Result apply(Closure(Result(list[Lval] args, Env env) fn), list[Lval] args, Env e) { // <10>
  return <fn(args, e).val, e>;
}

// <11>

Result apply(Atom("+"),      [Integer(x), Integer(y)],      Env e) = <Integer(x + y), e>;
Result apply(Atom("-"),      [Integer(x), Integer(y)],      Env e) = <Integer(x - y), e>;
Result apply(Atom("*"),      [Integer(x), Integer(y)],      Env e) = <Integer(x * y), e>;
Result apply(Atom("\<"),     [Lval x, Lval y],              Env e) = <x < y ? TRUE : FALSE, e>;
Result apply(Atom("\>"),     [Lval x, Lval y],              Env e) = <x >= y ? TRUE : FALSE, e>;
Result apply(Atom("equal?"), [Lval x, Lval y],              Env e) = <x == y ? TRUE : FALSE, e>;
Result apply(Atom("null?"),  [List(list[Lval] x)],          Env e) = <isEmpty(x) ? TRUE : FALSE, e>;
Result apply(Atom("cons"),   [Lval x, List(list[Lval] y)],  Env e) = <List([x, *y]), e>;
Result apply(Atom("append"), [List(list[Lval] x), Lval y],  Env e) = <List([*x, y]), e>;
Result apply(Atom("car"),    [List(list[Lval] x)],          Env e) = <head(x), e>;
Result apply(Atom("cdr"),    [List(list[Lval] x)],          Env e) = <List(tail(x)), e>;
Result apply(Atom("list"),   list[Lval] x,                  Env e) = <List(x), e>;

default Result apply(Lval a,     list[Lval] b, Env e) { // <12>
  println("Cannot apply <a> to <b> using <e>");
  return <FALSE, e>;
}

```

We now explain the different cases in more detail:

<1> An integer constant evaluates to itself. Note how `Integer(int x)` is used as first
    argument of this `eval` function. It is a pattern that describes that the constructor `Integer`
    with an `int` argument `x` is to be matched.
<2> An atom evaluates to the value to which it is bound or to itself. `find` (see [Runtime]) is used
    to search for the atom in question. The first argument is `var:Atom(str name)`, a pattern that matches
    an `Atom`. The `var:` prefix binds the complete atom to a variable `var` to be used in the body of the function.
<3> A quoted list evaluates to itself. The pattern `List([Atom("quote"), exp*])` matches a `List` constructor
    whose first element is `Atom("quote")`. `exp*` means that the remaining list elements are assignment to `exp`.
    There are two cases: if the argument list has size 1, its first element is used, otherwise a list with all elements of `exp`
    vare returned. This ensures that `List([Atom("quote"), Integer(17)])` evaluates to  `Integer(17)` and not to `List([ Integer(17)]`.
<4> Evaluates a `set!` expression that assigns the value of `exp` to variable `var`.

<5> Evaluates the `if` expression. The test `tst` is evaluated and is not false, the value of `conseq` is returned and otherwise
    that of `alt`.

<6> Evaluates a `block` expression. The list of expressions `exps` is evaluated one by one. Observe that in the for loop
    `<val, e> = eval(exp, e);` captures both the value and the environment that results from executing one expression. That new environment is
    is used to evaluate the next expression(s) in the list. The value of the last expression and a possible modied environment are returned.

<7> Evaluate a `define` expression that binds the value of `exp` to variable `var`.
    The value of the expression is bound `var` in the local scope.

<8> Evaluate a lambda expression. Essentially we return a `Closure` value that contains the expression in the lambda expression
    properly wrapped to do variable binding and environment management. 
    A Closure contains a function that return type `Results` and has two arguments:
   `list[lval] args` the actual parameter values when the closure is applied, and
   `Env e` the environment at the site of the call.
    In the body of the closure we construct a new environment `makeEnv(vars, args, tail(callEnv, size(defEnv)))` that binds the variables
    in the lambda expression to the actual parameter values. What is special here is that we shorten the calling environment to the
    same length as the defining environment. This implements _lexical scoping_ and avoids that names are visible in the called
    function that were not visible when the function was defined. Remember that Rascal values are immutable, meaning that after a value was 
    created it cannot be changed. Using the above trick, we ensure that the called function has access to the most recent version of
    its environment.

<9> Evaluates an arbitrary list. As a special case, the empty list is returned as false.
    Otherwise, all elements are evaluated and the auxiliary function ` apply` is used to apply the value of the first element to the values of   
    the remaining elements.

<10> Apply an `Lval` to a list of arguments and return a `Result`. The first case handles a `Closure`; it amounts
     to calling the function in the closure (environment handling and parameter binding are done in the closure as discussed above.

<11> Definition of all built-in functions.

<12> A default function that prints an error message when an undefined function is called.

#### Examples

```rascal-shell 
rascal>import demo::lang::Lisra::Runtime;
ok
rascal>import demo::lang::Lisra::Eval;
ok
rascal>eval(Integer(5));
Lval: Integer(5)
rascal>eval(Atom("x"));
Lval: Atom("x")
rascal>eval(List([Atom("+"), Integer(5), Integer(7)]));
Lval: Integer(12)
```

#### Benefits

*  A very modular, rule-based, type safe Lisp interpreter.

#### Pitfalls

*  It is no pleasure to type in `Lval`s directly, that is why a parser is needed, see [Parse](../../../../Recipes/Languages/Lisra/Parse).

