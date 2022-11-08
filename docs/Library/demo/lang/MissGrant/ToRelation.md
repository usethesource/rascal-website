---
title: "module demo::lang::MissGrant::ToRelation"
---

#### Usage

`import demo::lang::MissGrant::ToRelation;`


## alias TransRel {#demo-lang-MissGrant-ToRelation-TransRel}

```rascal
rel[str state, str eventToken,  str toState]

```

## alias ActionRel {#demo-lang-MissGrant-ToRelation-ActionRel}

```rascal
rel[str state, str commandToken]

```

## function transRel {#demo-lang-MissGrant-ToRelation-transRel}

```rascal
TransRel transRel(Controller ctl)

```

## function commands {#demo-lang-MissGrant-ToRelation-commands}

```rascal
ActionRel commands(Controller ctl)

```

