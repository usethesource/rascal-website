---
title: "module demo::lang::Pico::ControlFlow"
---

#### Usage

`import demo::lang::Pico::ControlFlow;`


## data CFNode {#demo-lang-Pico-ControlFlow-CFNode}

```rascal
data CFNode  
     = entry(loc location)
     | exit()
     | choice(loc location, EXP exp)
     | statement(loc location, STATEMENT stat)
     ;
```

## alias CFGraph {#demo-lang-Pico-ControlFlow-CFGraph}

* `tuple[set[CFNode] entry, Graph[CFNode] graph, set[CFNode] exit]`

## function cflowStat {#demo-lang-Pico-ControlFlow-cflowStat}

* ``CFGraph cflowStat(s:asgStat(PicoId Id, EXP Exp))``
* ``CFGraph cflowStat(ifElseStat(EXP Exp,                                                 list[STATEMENT] Stats1,                               list[STATEMENT] Stats2))``
* ``CFGraph cflowStat(whileStat(EXP Exp, list[STATEMENT] Stats))``

## function cflowStats {#demo-lang-Pico-ControlFlow-cflowStats}

* ``CFGraph cflowStats(list[STATEMENT] Stats)``

## function cflowProgram {#demo-lang-Pico-ControlFlow-cflowProgram}

* ``CFGraph cflowProgram(PROGRAM P:program(list[DECL] _, list[STATEMENT] Series))``
* ``CFGraph cflowProgram(str txt)``

