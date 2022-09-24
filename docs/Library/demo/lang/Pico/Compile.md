---
title: "module demo::lang::Pico::Compile"
---

#### Usage

`import demo::lang::Pico::Compile;`

## alias Instrs {#demo-lang-Pico-Compile-Instrs}

* `list[Instr]`

## function compileExp {#demo-lang-Pico-Compile-compileExp}

* ``Instrs compileExp(natCon(int N))``
* ``Instrs compileExp(strCon(str S))``
* ``Instrs compileExp(id(PicoId Id))``
* ``Instrs compileExp(add(EXP E1, EXP E2))``
* ``Instrs compileExp(sub(EXP E1, EXP E2))``
* ``Instrs compileExp(conc(EXP E1, EXP E2))``

#### Synopsis

Compile expressions to stackmachine instructions

## function nextLabel {#demo-lang-Pico-Compile-nextLabel}

* ``str nextLabel()``

## function compileStat {#demo-lang-Pico-Compile-compileStat}

* ``Instrs compileStat(asgStat(PicoId Id, EXP Exp))``
* ``Instrs compileStat(ifElseStat(EXP Exp, // <5>                               list[STATEMENT] Stats1,                               list[STATEMENT] Stats2))``
* ``Instrs compileStat(whileStat(EXP Exp,                               list[STATEMENT] Stats1))``

## function compileStats {#demo-lang-Pico-Compile-compileStats}

* ``Instrs compileStats(list[STATEMENT] Stats1)``

## function compileDecls {#demo-lang-Pico-Compile-compileDecls}

* ``Instrs compileDecls(list[DECL] Decls)``

## function compileProgram {#demo-lang-Pico-Compile-compileProgram}

* ``Instrs compileProgram(PROGRAM P)``
* ``Instrs compileProgram(str txt)``

