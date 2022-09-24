---
title: "module demo::lang::Pico::Eval"
---

#### Usage

`import demo::lang::Pico::Eval;`

## data PicoValue {#demo-lang-Pico-Eval-PicoValue}

```rascal
data PicoValue  
     = natval(int n)
     | strval(str s)
     | errorval(loc l, str msg)
     ;
```

## alias VENV {#demo-lang-Pico-Eval-VENV}

* `map[PicoId, PicoValue]`

## function evalExp {#demo-lang-Pico-Eval-evalExp}

* ``PicoValue evalExp(exp:natCon(int N), VENV env)``
* ``PicoValue evalExp(exp:strCon(str S), VENV env)``
* ``PicoValue evalExp(exp:id(PicoId Id), VENV env)``
* ``PicoValue evalExp(exp:add(EXP E1, EXP E2), VENV env)``
* ``PicoValue evalExp(exp:sub(EXP E1, EXP E2), VENV env)``
* ``PicoValue evalExp(exp:conc(EXP E1, EXP E2), VENV env)``

## function evalStat {#demo-lang-Pico-Eval-evalStat}

* ``VENV evalStat(stat:asgStat(PicoId Id, EXP Exp), VENV env)``
* ``VENV evalStat(stat:ifElseStat(EXP Exp,                                list[STATEMENT] Stats1,                               list[STATEMENT] Stats2),               VENV env)``
* ``VENV evalStat(stat:whileStat(EXP Exp,                               list[STATEMENT] Stats1),               VENV env)``

## function evalStats {#demo-lang-Pico-Eval-evalStats}

* ``VENV evalStats(list[STATEMENT] Stats1, VENV env)``

## function evalDecls {#demo-lang-Pico-Eval-evalDecls}

* ``VENV evalDecls(list[DECL] Decls)``

## function evalProgram {#demo-lang-Pico-Eval-evalProgram}

* ``VENV evalProgram(PROGRAM P)``
* ``VENV evalProgram(str txt)``

