---
title: "module demo::ReachingDefs"
---

#### Usage

`import demo::ReachingDefs;`

## alias stat {#demo-ReachingDefs-stat}

* `int`

## alias var {#demo-ReachingDefs-var}

* `str`

## alias def {#demo-ReachingDefs-def}

* `tuple[stat, var]`

## alias use {#demo-ReachingDefs-use}

* `tuple[stat,var]`

## function definition {#demo-ReachingDefs-definition}

* ``rel[stat,def] definition(rel[stat,var] DEFS)``

## function use {#demo-ReachingDefs-use}

* ``rel[stat,def] use(rel[stat, var] USES)``

## function kill {#demo-ReachingDefs-kill}

* ``rel[stat,def] kill(rel[stat,var] DEFS)``

## function reachingDefinitions {#demo-ReachingDefs-reachingDefinitions}

* ``rel[stat, def] reachingDefinitions(rel[stat,var] DEFS, rel[stat,stat] PRED)``

## function liveVariables {#demo-ReachingDefs-liveVariables}

* ``rel[stat,def] liveVariables(rel[stat,var] DEFS, rel[stat, var] USES, rel[stat,stat] PRED)``

## function testReaching1 {#demo-ReachingDefs-testReaching1}

* ``test bool testReaching1()``

## function testReaching2 {#demo-ReachingDefs-testReaching2}

* ``test bool testReaching2()``

## function testLive {#demo-ReachingDefs-testLive}

* ``test bool testLive()``

