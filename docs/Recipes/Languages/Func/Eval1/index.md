---
title: Eval1
---

#### Synopsis

Like Eval0 but with support for let-expressions.


#### Description

Interpreter Eval1 supports the following features of Func: 


| Feature              | Eval1 |
| --- | --- |
| function declaration | y |
| integer constant     | y |
| variable             | y |
| arithmetic operators | y |
| comparison operators | y |
| call                 | y |
| if                   | y |
| __let__              | y |
| sequence             |
| assignment           |
| address operator     |
| dereference operator |




In particular, the let construct is supported and this requires the addition
of an extra environment for <name, value> bindings.

#### Examples


```rascal 
module demo::lang::Func::Eval1

// using env, allowing let

import demo::lang::Func::AST;

import List;

alias Env = map[str, int];  // <1>
alias PEnv = map[str, Func];

int eval1(str main, list[int] args, Prog prog) {
  penv = ( f.name: f | f <- prog.funcs );
  f = penv[main];
  env = ( f.formals[i] : args[i] | i <- index(f.formals) ); 
  return eval1(f.body, env, penv);
}


int eval1(nat(int nat), Env env, PEnv penv)  = nat;

int eval1(var(str n), Env env, PEnv penv)  = env[n]; // <2>

int eval1(mul(Exp lhs, Exp rhs), Env env, PEnv penv) = 
    eval1(lhs, env, penv) * eval1(rhs, env, penv);
    
int eval1(div(Exp lhs, Exp rhs), Env env, PEnv penv) = 
    eval1(lhs, env, penv) / eval1(rhs, env, penv);
    
int eval1(add(Exp lhs, Exp rhs), Env env, PEnv penv) = 
    eval1(lhs, env, penv) + eval1(rhs, env, penv);
    
int eval1(sub(Exp lhs, Exp rhs), Env env, PEnv penv) = 
    eval1(lhs, env, penv) - eval1(rhs, env, penv);
    
int eval1(gt(Exp lhs, Exp rhs), Env env, PEnv penv) = 
    eval1(lhs, env, penv) > eval1(rhs, env, penv) ? 1 : 0;
    
int eval1(lt(Exp lhs, Exp rhs), Env env, PEnv penv) = 
    eval1(lhs, env, penv) < eval1(rhs, env, penv) ? 1 : 0;
    
int eval1(geq(Exp lhs, Exp rhs), Env env, PEnv penv) = 
    eval1(lhs, env, penv) >= eval1(rhs, env, penv) ? 1 : 0;
    
int eval1(leq(Exp lhs, Exp rhs), Env env, PEnv penv) = 
    eval1(lhs, env, penv) <= eval1(rhs, env, penv) ? 1 : 0;
  
int eval1(cond(Exp cond, Exp then, Exp otherwise), Env env, PEnv penv) =             
    (eval1(cond, env, penv) != 0) ? eval1(then, env, penv) : eval1(otherwise, env, penv);
                 
int eval1(call(str name, list[Exp] args), Env env, PEnv penv) {
   f = penv[name];
   env =  ( f.formals[i]: eval1(args[i], env, penv) | i <- index(f.formals) );
   return eval1(f.body, env, penv);
}
         
int eval1(let(list[Binding] bindings, Exp exp), Env env, PEnv penv) { // <3>
   env += ( b.var : eval1(b.exp, env, penv) | b <- bindings );  
   return eval1(exp, env, penv);  
}

```

                
<1> The alias `Env` is introduced that maps strings to integers.
    All evaluation functions get an extra Env argument.
<2> The environment is used to retrieve a variable's value.
<3> The environment is extended with new bindings.


Let's try this with F1:
```rascal
fact(n) = let
	        x = n
          in
	        if x <= 1 then 
	           x 
	        else 
		       x * fact(x-1)
	        end
	      end
```

The result:

```rascal-shell 
rascal>import demo::lang::Func::Load;
ok
rascal>import demo::lang::Func::Eval1;
ok
rascal>import demo::lang::Func::programs::F1;
ok
rascal>eval1("fact", [10], load(F1));
int: 3628800
```


