---
title: "module demo::lang::MissGrant::Step"
---

#### Usage

`import demo::lang::MissGrant::Step;`


## alias Output {#demo-lang-MissGrant-Step-Output}

* `tuple[str state, list[str] commands]`

## function merge {#demo-lang-MissGrant-Step-merge}

* ``Output merge(Output a, Output b)``

## function eval {#demo-lang-MissGrant-Step-eval}

* ``Output eval(TransRel trans, ActionRel commands, str init, list[str] tokens)``

## function step {#demo-lang-MissGrant-Step-step}

* ``Output step(TransRel trans, ActionRel commands, str state, str token)``

