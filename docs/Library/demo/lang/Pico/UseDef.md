---
title: "module demo::lang::Pico::UseDef"
---

#### Usage

`import demo::lang::Pico::UseDef;`


## function usesExp {#demo-lang-Pico-UseDef-usesExp}

```rascal
set[Occurrence] usesExp(EXP e, STATEMENT s)

```

## function usesStat {#demo-lang-Pico-UseDef-usesStat}

```rascal
set[Occurrence] usesStat(s:asgStat(PicoId Id, EXP e))

set[Occurrence] usesStat(s: ifElseStat(EXP e,
                              list[STATEMENT] s1,
                              list[STATEMENT] s2))

set[Occurrence] usesStat(s: ifElseStat(EXP e,
                              list[STATEMENT] s1,
                              list[STATEMENT] s2))

set[Occurrence] usesStat(s: ifElseStat(EXP e,
                              list[STATEMENT] s1,
                              list[STATEMENT] s2))

set[Occurrence] usesStat(s: whileStat(EXP e,
                              list[STATEMENT] s1))

set[Occurrence] usesStat(s: whileStat(EXP e,
                              list[STATEMENT] s1))

```

## function usesStats {#demo-lang-Pico-UseDef-usesStats}

```rascal
set[Occurrence] usesStats(list[STATEMENT] stats)

```

## function uses {#demo-lang-Pico-UseDef-uses}

```rascal
set[Occurrence] uses(PROGRAM p)

```

## function defs {#demo-lang-Pico-UseDef-defs}

```rascal
set[Occurrence] defs(PROGRAM p)

```

