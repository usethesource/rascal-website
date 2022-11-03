---
title: Typecheck
---

#### Synopsis

Typechecker for Pico programs.

#### Examples

Recall the following properties of Pico that are relevant for type checking:

*  There are two types: natural numbers and strings.

*  Variables have to be declared.

*  Expressions may contain naturals, strings, variables, addition (`+`), subtraction (`-`) and concatenation (`||`).

*  The operators `+` and `-` have operands of type natural and their result is natural.

*  The operator `||` has operands of type string and its results is also of type string.

*  Tests in if-then-else statement and while-statement should be of type natural.


The type checker is going to check these rules and will produce an error message when they are violated.


```rascal 
module demo::lang::Pico::Typecheck

import Prelude;
import demo::lang::Pico::Abstract;
import demo::lang::Pico::Load;

alias TENV = tuple[ map[PicoId, TYPE] symbols, list[tuple[loc l, str msg]] errors];      ❶  

// highlight-next-line
TENV addError(TENV env, loc l, str msg) = env[errors = env.errors + <l, msg>];      ❷  

// highlight-next-line
str required(TYPE t, str got) = "Required <getName(t)>, but got <got>";      ❸  
str required(TYPE t1, TYPE t2) = required(t1, getName(t2));                  ❸  


TENV checkExp(exp:natCon(int N), TYPE req, TENV env) =      ❹  
  req := natural() ? env : addError(env, exp.src, required(req, "natural"));

TENV checkExp(exp:strCon(str S), TYPE req, TENV env) =
 req := string() ? env : addError(env, exp.src, required(req, "string"));

TENV checkExp(exp:id(PicoId Id), TYPE req, TENV env) {      ❺  
  if(!env.symbols[Id]?)
     return addError(env, exp.src, "Undeclared variable <Id>");
  tpid = env.symbols[Id];
  return req := tpid ? env : addError(env, exp.src, required(req, tpid));
}

TENV checkExp(exp:add(EXP E1, EXP E2), TYPE req, TENV env) =      ❻  
  natural() := req ? checkExp(E1, natural(), checkExp(E2, natural(), env))
                   : addError(env, exp.src, required(req, "natural"));
  
TENV checkExp(exp:sub(EXP E1, EXP E2), TYPE req, TENV env) =      ❼  
  natural() := req ? checkExp(E1, natural(), checkExp(E2, natural(), env))
                   : addError(env, exp.src, required(req, "natural"));

TENV checkExp(exp:conc(EXP E1, EXP E2), TYPE req, TENV env) =      ❽    
  string() := req ? checkExp(E1, string(), checkExp(E2, string(), env))
                   : addError(env, exp.src, required(req, "string"));



TENV checkStat(stat:asgStat(PicoId Id, EXP Exp), TENV env) {      ❾  
  if(!env.symbols[Id]?)
     return addError(env, stat.src, "Undeclared variable <Id>");
  tpid = env.symbols[Id];
  return checkExp(Exp, tpid, env);
}
	
TENV checkStat(stat:ifElseStat(EXP Exp,      ❶⓿  
                              list[STATEMENT] Stats1,
                              list[STATEMENT] Stats2),
               TENV env){
    env0 = checkExp(Exp, natural(), env);
    env1 = checkStats(Stats1, env0);
    env2 = checkStats(Stats2, env1);
    return env2;
}

TENV checkStat(stat:whileStat(EXP Exp, 
                             list[STATEMENT] Stats1),
                 TENV env) {
    env0 = checkExp(Exp, natural(), env);
    env1 = checkStats(Stats1, env0);
    return env1;
}


// highlight-next-line
TENV checkStats(list[STATEMENT] Stats1, TENV env) {      ❶❶  
  for(S <- Stats1){
      env = checkStat(S, env);
  }
  return env;
}
  

// highlight-next-line
TENV checkDecls(list[DECL] Decls) =      ❶❷  
    <( Id : tp | decl(PicoId Id, TYPE tp) <- Decls), []>;


// highlight-next-line
TENV checkProgram(program(list[DECL] Decls, list[STATEMENT] Series)) {       ❶❸  
    return checkStats(Series, checkDecls(Decls));
}

// highlight-next-line
list[tuple[loc l, str msg]] checkProgram(str txt) = checkProgram(load(txt)).errors;      ❶❹  
    

```

                
Notes:

* ❶   We will use `TENV` (short for type environment, as an alias for a tuple that contains all relevant type information:
     *  `symbols`: a map from Pico identifiers to their declared type.
     *  `errors`: a list of error messages. An error message is represented by its location (where the error occurred) and a textual message.
* ❷   `addError` is an auxiliary function to add in a given type environment an error message to the list of errors. It returns a new type environment.
* ❸   `required`is an auxiliarty function to produce readable messages, e.g., `"Required natural, got string"`.
* ❹   The actual type checking is done by the functions `checkExp`, `checkStat`, `checkStats`, `checkDecls` and `checkProgram`. They all have three arguments:
     *  the program fragment (an abstract syntax tree) to be checked.
     *  the required type of that fragment.
     *  the type environment.
     
     
     `checkExp` checks expressions. For instance, checking a natural constant (`natCon`) is ok when type `natural` is expected but will give an error message when a `string` is expected. Observe how all the arguments of the check functions have a labeled pattern as first argument, here `exp:natCon(int N)`. The benefit is that the whole argument is available inside the function (as value of variable `exp`) and this can be used to retrieve the location information from it (`exp@location`) when an error has to be created.

* ❺   An important case is to check whether an identifier has been defined and, if so, whether it is defined with the expected type.
* ❻  Check `add`.
* ❼   Check `sub`.
* ❽  Check `conc`.
* ❾   An assignment statement is checked: the identifier on the left-hand side should have been declared and should be type compatible with the expression on the right-hand side.
* ❶⓿   Checking if- and while-statements amounts to checking the embedded statements and ensuring that the type of the test is natural.
* ❶❶   Checking a list of statements amounts to checking each statement in the list.
* ❶❷   Checking declarations amounts to extracting each (id, type) pair form the declarations and using a map comprehension to build a type environment.
* ❶❸   Checking a complete Pico program is achieved by first checking the declarations of the program and using the resulting type environment to check its body.
* ❶❹   `checkProgram` defines how to check the source code of a given Pico program.


Checking an erroneous program goes like this:

```rascal-shell 
rascal>import demo::lang::Pico::Typecheck;
ok
rascal>checkProgram("begin declare  x : natural; x := \"abc\" end");
lrel[loc l,str msg]: [<|unknown:///|(33,5,<1,33>,<1,38>),"Required natural, but got string">]
```

The error location will be use later to give specific messages in the IDE.


