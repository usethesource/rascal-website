---
title: "module demo::lang::Pico::UseDef"
---

#### Usage

`import demo::lang::Pico::UseDef;`

## function usesExp {#demo-lang-Pico-UseDef-usesExp}

* ``set[Occurrence] usesExp(EXP e, STATEMENT s)``

## function usesStat {#demo-lang-Pico-UseDef-usesStat}

* ``set[Occurrence] usesStat(s:asgStat(PicoId Id, EXP e))``
* ``set[Occurrence] usesStat(s: ifElseStat(EXP e,                               list[STATEMENT] s1,                               list[STATEMENT] s2))``
* ``set[Occurrence] usesStat(s: whileStat(EXP e,                               list[STATEMENT] s1))``

## function usesStats {#demo-lang-Pico-UseDef-usesStats}

* ``set[Occurrence] usesStats(list[STATEMENT] stats)``

## function uses {#demo-lang-Pico-UseDef-uses}

* ``set[Occurrence] uses(PROGRAM p)``

## function defs {#demo-lang-Pico-UseDef-defs}

* ``set[Occurrence] defs(PROGRAM p)``

