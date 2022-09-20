---
title: "demo::lang::Pico::Typecheck"
---

#### Usage

`import demo::lang::Pico::Typecheck;`


## alias TENV {#demo-lang-Pico-Typecheck-TENV}

* `tuple[ map[PicoId, TYPE] symbols, list[tuple[loc l, str msg]] errors]`

## function addError {#demo-lang-Pico-Typecheck-addError}

* ``TENV addError(TENV env, loc l, str msg)``

## function required {#demo-lang-Pico-Typecheck-required}

* ``str required(TYPE t, str got)``
* ``str required(TYPE t1, TYPE t2)``

## function checkExp {#demo-lang-Pico-Typecheck-checkExp}

* ``TENV checkExp(exp:natCon(int N), TYPE req, TENV env)``
* ``TENV checkExp(exp:strCon(str S), TYPE req, TENV env)``
* ``TENV checkExp(exp:id(PicoId Id), TYPE req, TENV env)``
* ``TENV checkExp(exp:add(EXP E1, EXP E2), TYPE req, TENV env)``
* ``TENV checkExp(exp:sub(EXP E1, EXP E2), TYPE req, TENV env)``
* ``TENV checkExp(exp:conc(EXP E1, EXP E2), TYPE req, TENV env)``

## function checkStat {#demo-lang-Pico-Typecheck-checkStat}

* ``TENV checkStat(stat:asgStat(PicoId Id, EXP Exp), TENV env)``
* ``TENV checkStat(stat:ifElseStat(EXP Exp, // <10>                               list[STATEMENT] Stats1,                               list[STATEMENT] Stats2),                TENV env)``
* ``TENV checkStat(stat:whileStat(EXP Exp,                               list[STATEMENT] Stats1),                  TENV env)``

## function checkStats {#demo-lang-Pico-Typecheck-checkStats}

* ``TENV checkStats(list[STATEMENT] Stats1, TENV env)``

## function checkDecls {#demo-lang-Pico-Typecheck-checkDecls}

* ``TENV checkDecls(list[DECL] Decls)``

## function checkProgram {#demo-lang-Pico-Typecheck-checkProgram}

* ``TENV checkProgram(program(list[DECL] Decls, list[STATEMENT] Series))``
* ``list[tuple[loc l, str msg]] checkProgram(str txt)``

