---
title: "module demo::lang::Pico::Typecheck"
---

#### Usage

`import demo::lang::Pico::Typecheck;`


## alias TENV {#demo-lang-Pico-Typecheck-TENV}

```rascal
tuple[ map[PicoId, TYPE] symbols, list[tuple[loc l, str msg]] errors]

```

## function addError {#demo-lang-Pico-Typecheck-addError}

```rascal
TENV addError(TENV env, loc l, str msg)

```

## function required {#demo-lang-Pico-Typecheck-required}

```rascal
str required(TYPE t, str got)

str required(TYPE t1, TYPE t2)

```

## function checkExp {#demo-lang-Pico-Typecheck-checkExp}

```rascal
TENV checkExp(exp:natCon(int N), TYPE req, TENV env)

TENV checkExp(exp:strCon(str S), TYPE req, TENV env)

TENV checkExp(exp:id(PicoId Id), TYPE req, TENV env)

TENV checkExp(exp:add(EXP E1, EXP E2), TYPE req, TENV env)

TENV checkExp(exp:sub(EXP E1, EXP E2), TYPE req, TENV env)

TENV checkExp(exp:conc(EXP E1, EXP E2), TYPE req, TENV env)

```

#### Synopsis

Checking Expressions

## function checkStat {#demo-lang-Pico-Typecheck-checkStat}

```rascal
TENV checkStat(stat:asgStat(PicoId Id, EXP Exp), TENV env)

TENV checkStat(stat:ifElseStat(EXP Exp, // <10>
                              list[STATEMENT] Stats1,
                              list[STATEMENT] Stats2),
               TENV env)

TENV checkStat(stat:ifElseStat(EXP Exp, // <10>
                              list[STATEMENT] Stats1,
                              list[STATEMENT] Stats2),
               TENV env)

TENV checkStat(stat:ifElseStat(EXP Exp, // <10>
                              list[STATEMENT] Stats1,
                              list[STATEMENT] Stats2),
               TENV env)

TENV checkStat(stat:ifElseStat(EXP Exp, // <10>
                              list[STATEMENT] Stats1,
                              list[STATEMENT] Stats2),
               TENV env)

TENV checkStat(stat:whileStat(EXP Exp, 
                             list[STATEMENT] Stats1),
                 TENV env)

TENV checkStat(stat:whileStat(EXP Exp, 
                             list[STATEMENT] Stats1),
                 TENV env)

TENV checkStat(stat:whileStat(EXP Exp, 
                             list[STATEMENT] Stats1),
                 TENV env)

```

#### Synopsis

Check a statement

## function checkStats {#demo-lang-Pico-Typecheck-checkStats}

```rascal
TENV checkStats(list[STATEMENT] Stats1, TENV env)

```

#### Synopsis

Check a list of statements

## function checkDecls {#demo-lang-Pico-Typecheck-checkDecls}

```rascal
TENV checkDecls(list[DECL] Decls)

```

#### Synopsis

Check declarations

## function checkProgram {#demo-lang-Pico-Typecheck-checkProgram}

```rascal
TENV checkProgram(program(list[DECL] Decls, list[STATEMENT] Series))

list[tuple[loc l, str msg]] checkProgram(str txt)

```

#### Synopsis

Check a Pico program

