---
title: Eval2
---

#### Synopsis

Like Eval1 but with support for sequences and assignments.


#### Description

Interpreter Eval2 supports the following features of Func: 


| Feature              | Eval2 |
| --- | --- |
| function declaration | y |
| integer constant     | y |
| variable             | y |
| arithmetic operators | y |
| comparison operators | y |
| call                 | y |
| if                   | y |
| let                  | y |
| __sequence__         | y |
| __assignment__       | y |
| address operator     |
| dereference operator |




The main additions are local side effects and the sequence operator.

#### Examples


```rascal 
module demo::lang::Func::Eval2

// local side effects, returning env

import demo::lang::Func::AST;

import List;

alias Env = map[str, int];
alias PEnv = map[str, Func];

alias Result2 = tuple[Env, int];       ❶  

Result2 eval2(str main, list[int] args, Prog prog) {
  penv = ( f.name: f | f <- prog.funcs );
  f = penv[main];
  env = ( f.formals[i] : args[i] | i <- index(f.formals) ); 
  return eval2(f.body, env, penv);
}

Result2 eval2(nat(int nat), Env env, PEnv penv) = <env, nat>;
 
Result2 eval2(var(str name), Env env, PEnv penv) = <env, env[name]>;       
       
Result2 eval2(mul(Exp lhs, Exp rhs), Env env, PEnv penv) {       ❷  
  <env, x> = eval2(lhs, env, penv);
  <env, y> = eval2(rhs, env, penv);
  return <env, x * y>;
} 
      
Result2 eval2(div(Exp lhs, Exp rhs), Env env, PEnv penv) {
  <env, x> = eval2(lhs, env, penv);
  <env, y> = eval2(rhs, env, penv);
  return <env, x / y>;
} 
      
Result2 eval2(add(Exp lhs, Exp rhs), Env env, PEnv penv)  {
  <env, x> = eval2(lhs, env, penv);
  <env, y> = eval2(rhs, env, penv);
  return <env, x + y>;
} 
      
Result2 eval2(sub(Exp lhs, Exp rhs), Env env, PEnv penv)  {
  <env, x> = eval2(lhs, env, penv);
  <env, y> = eval2(rhs, env, penv);
  return <env, x - y>;
} 
      
Result2 eval2(gt(Exp lhs, Exp rhs), Env env, PEnv penv)  {
  <env, x> = eval2(lhs, env, penv);
  <env, y> = eval2(rhs, env, penv);
  return <env, (x > y) ? 1 : 0>;
} 
      
Result2 eval2(lt(Exp lhs, Exp rhs), Env env, PEnv penv)  {
  <env, x> = eval2(lhs, env, penv);
  <env, y> = eval2(rhs, env, penv);
  return <env, (x < y) ? 1 : 0>;
} 
      
Result2 eval2(geq(Exp lhs, Exp rhs), Env env, PEnv penv)  {
  <env, x> = eval2(lhs, env, penv);
  <env, y> = eval2(rhs, env, penv);
  return <env, (x >= y) ? 1 : 0>;
} 
      
Result2 eval2(leq(Exp lhs, Exp rhs), Env env, PEnv penv)  {
  <env, x> = eval2(lhs, env, penv);
  <env, y> = eval2(rhs, env, penv);
  return <env, (x <= y) ? 1 : 0>;
} 
  
Result2 eval2(cond(Exp cond, Exp then, Exp otherwise), Env env, PEnv penv)  {
  <env, c> = eval2(cond, env, penv);
  return (c != 0) ? eval2(then, env, penv) : eval2(otherwise, env, penv);
}
      
Result2 eval2(call(str name, list[Exp] args), Env env, PEnv penv)  {
   f = penv[name];
   for (i <- index(f.formals)) {
     <env, v> = eval2(args[i], env, penv);
     env[f.formals[i]] = v;
   }
   return eval2(f.body, env, penv);
}
         
Result2 eval2(let(list[Binding] bindings, Exp exp), Env env, PEnv penv)  {
   for (b <- bindings) {
     <env, x> = eval2(b.exp, env, penv);
     env[b.var] = x;
   }
   return eval2(exp, env, penv);
} 
    
Result2 eval2(assign(var(str name), Exp exp), Env env, PEnv penv)  {      ❸  
  <env, v> = eval2(exp, env, penv);
  env[name] = v;
  return <env, v>;
}

Result2 eval2(seq(Exp lhs, Exp rhs), Env env, PEnv penv)  {       ❹  
  <env, _> = eval2(lhs, env, penv);
  return eval2(rhs, env, penv);
}

```

                
* ❶  The alias `Result` is introduced: a pair of an environment and an integer value.
    All evaluator functions are changed from returning an integer (the result of evaluation) to
   `Result` (the result of evaluation _and_ the local side effects).
* ❷  The effect of this change can be seen in all functions. For instance, when evaluating
    multiplication, the environment produced by the left operand ahs to be passed as 
    argument to the right operand of the multiplication. This is needed, to propagate any side effects
    caused by the left operand to propagate to the right one.
* ❸  Assignment is implemented.
* ❹   Sequencing is implemented. Observe that that the value of the left operand is ignored and that
  the value of the right operand is returned.


We apply `eval2` to example `F2`:
```rascal
fact(n) = if n <= 1 then 
             n := 1
	      else 
	         n := n * fact(n-1)
	      end;
	      n
```

                
Let's try this.

```rascal-shell 
rascal>import demo::lang::Func::Load;
ok
rascal>import demo::lang::Func::Eval2;
ok
rascal>import demo::lang::Func::programs::F2;
ok
rascal>eval2("fact", [10], load(F2));
tuple[map[str, int],int]: <("n":3628800),3628800>
```


