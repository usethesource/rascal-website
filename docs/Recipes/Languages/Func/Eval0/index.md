---
title: Eval0
---

#### Synopsis

A Func interpreter that does not support let-expressions and pointers.

#### Description

Interpreter Eval0 supports the following features of Func:


| Feature              | Eval0 |
| --- | --- |
| function declaration | y |
| integer constant     | y |
| variable             | y |
| arithmetic operators | y |
| comparison operators | y |
| call                 | y |
| if                   | y |
| let                  |
| sequence             |
| assignment           |
| address operator     |
| dereference operator |


#### Examples

Here is the code for Eval0:

```rascal 
module demo::lang::Func::Eval0

// No let

import demo::lang::Func::AST;
import List;

alias PEnv = map[str, Func];      ❶  

value eval0(str main, list[int] args, Prog prog) {      ❷  
  penv = ( f.name: f | f <- prog.funcs );
  f = penv[main];
  return eval0(subst(f.body, f.formals, args), penv);
}


Exp subst(Exp exp, list[str] vars, list[int] values) {      ❸  
  env = ( vars[i]: values[i] | i <- index(vars) );
  return visit (exp) {
    case var(str name) => nat(env[name])
  };
}

int eval0(nat(int nat), PEnv penv)  = nat;      ❹  

int eval0(mul(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) * eval0(rhs, penv);
    
int eval0(div(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) / eval0(rhs, penv);
    
int eval0(add(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) + eval0(rhs, penv);
    
int eval0(sub(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) - eval0(rhs, penv);
    
int eval0(gt(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) > eval0(rhs, penv) ? 1 : 0;
    
int eval0(lt(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) < eval0(rhs, penv) ? 1 : 0;
    
int eval0(geq(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) >= eval0(rhs, penv) ? 1 : 0;
    
int eval0(leq(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) <= eval0(rhs, penv) ? 1 : 0;
  
int eval0(cond(Exp cond, Exp then, Exp otherwise), PEnv penv) =       ❺  
    (eval0(cond, penv) != 0) ? eval0(then, penv) : eval0(otherwise, penv);
               
int eval0(call(str name, list[Exp] args), PEnv penv) =       ❻  
    eval0(subst(penv[name].body, penv[name].formals, [ eval0(a, penv) | a <- args]), penv);

```

Some points to note:

* ❶  `PEnv` is used as an alias for a map from names to functions. Such maps are used to represent the function definitions in the program.
* ❷  Here the top level interpreter `eval0` is defined. It takes the name of the main function, a list of actual parameters, and the complete Func program. Binding of variables is done by substitution.
* ❸  The substitution function is defined. It takes an expression, a list of variables, and a list of integer values to be substituted for them. Note how a [Rascal:Visit] is used to find all the variables in the expression and to replace them.
* ❹  The versions of `eval0` for each implemented construct. They all have a `PEnv` argument that is needed
    to resolve calls.
* ❺  The if expression is defined: the then-branch is taken when the test evaluates to a non-zero integer.
* ❻  The call expression is interpreted. It contains the following steps:
    *  The actual parameters are evaluated.
    *  A substitution is made in the body of the called function, replacing formal parameters by actual values.
    *  The result of this substitution is evaluated.


Let's try this on example `F0`:
```rascal
fact(n) = if n <= 1 then
             1 
          else 
             n * fact(n-1)
          end
```

                

```rascal-shell 
rascal>import demo::lang::Func::Load;
ok
rascal>import demo::lang::Func::Eval0;
ok
rascal>import demo::lang::Func::programs::F0;
ok
rascal>eval0("fact", [10], load(F0));
value: 3628800
```


