---
title: Runtime
sidebar_position: 1
---

#### Synopsis

The runtime representation of Lisp programs and data.

#### Description

There are several aspects of the runtime representation of Lisp programs and Lisp data
that have to be described:

*  The representation of values (see `Lval` below).
*  The handling of the _scope_ of variables (see `Scope`, `Env`, `makeEnv` and `find` below).
*  The way the interpreter returns its results (see `Result` below).



```rascal 
module demo::lang::Lisra::Runtime

import Prelude;

data Lval      ❶  
     = Integer(int n)   
     | Atom(str name)
     | List(list[Lval] elms)
     | Closure(Result(list[Lval] args, Env env))
     ;
         
alias Scope  = map[Lval,Lval];      ❷  
alias Env    = list[Scope];

public Env emptyEnv = [()];

Env makeEnv(list[Lval] vars, list[Lval] values, Env outer) =      ❸  
   [(vars[i] : values[i] | i <- index(vars))] + outer;

int find(Lval sym, Env e){      ❹  
   for(n <- index(e))
       if(e[n][sym]?)
          return n;
   return -1;
}

public Lval TRUE  = Atom("#t");      ❺  
public Lval FALSE = Atom("#f");

alias Result = tuple[Lval val, Env env];      ❻  

```

                
* ❶  The data type `Lval` takes care of the representation of Lisp values.
    It covers integers, atoms, lists and closures (the representation of a function and
    the context in which it will be executed).

* ❷  A `Scope` describes the binding of several related variables to their value.
    Since scopes may be nested, an environment (`Env`) consisted of a list of scope.
   The most inner scope is at the start of the list and the most global one at the end.

* ❸  Creating a new scope is done by `makeEnv` which takes a list of variables
    (represented by `Lval`s, in most cases this will be an atom like `Atom("X")`),
    a list of values and creates a new scope in front of the current environment.

* ❹  The function `find` tries to locate the scope in which a name was previously defined.
    It searches the nested scopes inside-out and returns the _index_ in the given environment
   of the scope in which the name is defined, or `-1` if it is not found.

* ❺  We define useful constants for true and false (the atoms `#t` and `#f`, respectively).

* ❻  Finally, we define `Result` as a tuple of an `Lval` and an `Env`.
    Each step during interpretation will thus return the value it computed and
    a possibly modified environment.


