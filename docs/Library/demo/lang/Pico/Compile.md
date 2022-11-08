---
title: "module demo::lang::Pico::Compile"
---

#### Usage

`import demo::lang::Pico::Compile;`


## alias Instrs {#demo-lang-Pico-Compile-Instrs}

```rascal
list[Instr]

```

## function compileExp {#demo-lang-Pico-Compile-compileExp}

```rascal
Instrs compileExp(natCon(int N))

Instrs compileExp(strCon(str S))

Instrs compileExp(id(PicoId Id))

Instrs compileExp(add(EXP E1, EXP E2))

Instrs compileExp(sub(EXP E1, EXP E2))

Instrs compileExp(conc(EXP E1, EXP E2))

```

#### Synopsis

Compile expressions to stackmachine instructions

## function nextLabel {#demo-lang-Pico-Compile-nextLabel}

```rascal
str nextLabel()

```

#### Synopsis

Unique label generation

## function compileStat {#demo-lang-Pico-Compile-compileStat}

```rascal
Instrs compileStat(asgStat(PicoId Id, EXP Exp))

Instrs compileStat(ifElseStat(EXP Exp,                   // <5>
                              list[STATEMENT] Stats1,
                              list[STATEMENT] Stats2))

Instrs compileStat(ifElseStat(EXP Exp,                   // <5>
                              list[STATEMENT] Stats1,
                              list[STATEMENT] Stats2))

Instrs compileStat(ifElseStat(EXP Exp,                   // <5>
                              list[STATEMENT] Stats1,
                              list[STATEMENT] Stats2))

Instrs compileStat(whileStat(EXP Exp, 
                             list[STATEMENT] Stats1))

Instrs compileStat(whileStat(EXP Exp, 
                             list[STATEMENT] Stats1))

```

#### Synopsis

Compile a statement

## function compileStats {#demo-lang-Pico-Compile-compileStats}

```rascal
Instrs compileStats(list[STATEMENT] Stats1)

```

#### Synopsis

Compile a list of statements

## function compileDecls {#demo-lang-Pico-Compile-compileDecls}

```rascal
Instrs compileDecls(list[DECL] Decls)

```

#### Synopsis

Compile declarations

## function compileProgram {#demo-lang-Pico-Compile-compileProgram}

```rascal
Instrs compileProgram(PROGRAM P)

Instrs compileProgram(str txt)

```

#### Synopsis

Compile a Pico program

