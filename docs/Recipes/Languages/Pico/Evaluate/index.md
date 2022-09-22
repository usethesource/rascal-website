---
title: Evaluate
---

#### Synopsis

Evaluate a Pico program.

#### Examples

A complete evaluator (interpreter) for Pico is defined below.

```rascal
// tag::module[]
module demo::lang::Pico::Eval

import demo::lang::Pico::Abstract;
import demo::lang::Pico::Load;

data PicoValue = natval(int n) | strval(str s) | errorval(loc l, str msg); // <1>

alias VENV = map[PicoId, PicoValue]; // <2>

// Evaluate Expressions.

PicoValue evalExp(exp:natCon(int N), VENV env) = natval(N);

PicoValue evalExp(exp:strCon(str S), VENV env) = strval(S);

PicoValue evalExp(exp:id(PicoId Id), VENV env)  = 
    env[Id]?  ? env[Id] : errorval(exp@location, "Uninitialized variable <Id>");

PicoValue evalExp(exp:add(EXP E1, EXP E2), VENV env) = 
   (natval(n1) := evalExp(E1, env) && 
    natval(n2) := evalExp(E2, env)) ? natval(n1 + n2)
                                    : errorval(exp@location, "+ requires natural arguments");
  
PicoValue evalExp(exp:sub(EXP E1, EXP E2), VENV env) = 
   (natval(n1) := evalExp(E1, env) && 
    natval(n2) := evalExp(E2, env)) ? natval(n1 - n2)
                                    : errorval(exp@location, "- requires natural arguments");
                                                                     
PicoValue evalExp(exp:conc(EXP E1, EXP E2), VENV env) = 
   (strval(s1) := evalExp(E1, env) && 
    strval(s2) := evalExp(E2, env)) ? strval(s1 + s2)
                                    : errorval(exp@location, "|| requires string arguments");

// Evaluate a statement

VENV evalStat(stat:asgStat(PicoId Id, EXP Exp), VENV env) {
  env[Id] = evalExp(Exp, env);
  return env;
}
	
VENV evalStat(stat:ifElseStat(EXP Exp, 
                              list[STATEMENT] Stats1,
                              list[STATEMENT] Stats2),
              VENV env) =
  evalStats(evalExp(Exp, env) != natval(0) ? Stats1 : Stats2, env);

VENV evalStat(stat:whileStat(EXP Exp, 
                             list[STATEMENT] Stats1),
              VENV env) {
    while(evalExp(Exp, env) != natval(0)){
       env = evalStats(Stats1, env);
    }
    return env;
}

// Evaluate a list of statements
VENV evalStats(list[STATEMENT] Stats1, VENV env) {
  for(S <- Stats1){
      env = evalStat(S, env);
  }
  return env;
}
  
// Eval declarations

VENV evalDecls(list[DECL] Decls) =
    ( Id : (tp == demo::lang::Pico::Abstract::natural() ? natval(0) : strval(""))  
    | decl(PicoId Id, TYPE tp) <- Decls
    );

// Evaluate a Pico program

public VENV evalProgram(PROGRAM P){
  if(program(list[DECL] Decls, list[STATEMENT] Series) := P){
     VENV env = evalDecls(Decls);
     return evalStats(Series, env);
  } else
    throw "Cannot happen";
}

public VENV evalProgram(str txt) = evalProgram(load(txt));
// end::module[]
    

```

                
Notes:

<1> First we introduce a data type `PicoValue` that wraps all possible values that can occur at run-time.
<2> Compared to [Pico/Typecheck], we use `VENV`, a value environment (a map from Pico identifiers to Pico values).
*   The actual evaluator consists of the functions `evalExp`, `evalStat`, `evalStats`, `evalDecls` and `evalProgram`.
    They are written in a similar style as the typechecker.
*  `evalProgram` evaluates a given Pico program.


Here is how to evaluate a Pico program:

```rascal-shell
rascal>import demo::lang::Pico::Eval;
ok
rascal>evalProgram("begin declare x : natural, y : natural; x := 1; y := x + 5 end");
map[str, PicoValue]: (
  "x":natval(1),
  "y":natval(6)
)
```


