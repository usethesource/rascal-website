---
title: "module demo::ReachingDefs"
---

#### Usage

`import demo::ReachingDefs;`


## alias stat {#demo-ReachingDefs-stat}

```rascal
int

```

## alias var {#demo-ReachingDefs-var}

```rascal
str

```

## alias def {#demo-ReachingDefs-def}

```rascal
tuple[stat, var]

```

## alias use {#demo-ReachingDefs-use}

```rascal
tuple[stat,var]

```

## function definition {#demo-ReachingDefs-definition}

```rascal
rel[stat,def] definition(rel[stat,var] DEFS)

```

## function use {#demo-ReachingDefs-use}

```rascal
rel[stat,def] use(rel[stat, var] USES)

```

## function kill {#demo-ReachingDefs-kill}

```rascal
rel[stat,def] kill(rel[stat,var] DEFS)

```

## function reachingDefinitions {#demo-ReachingDefs-reachingDefinitions}

```rascal
rel[stat, def] reachingDefinitions(rel[stat,var] DEFS, rel[stat,stat] PRED)

```

## function liveVariables {#demo-ReachingDefs-liveVariables}

```rascal
rel[stat,def] liveVariables(rel[stat,var] DEFS, rel[stat, var] USES, rel[stat,stat] PRED)

```

## function testReaching1 {#demo-ReachingDefs-testReaching1}

```rascal
test bool testReaching1()

```

## function testReaching2 {#demo-ReachingDefs-testReaching2}

```rascal
test bool testReaching2()

```

## function testLive {#demo-ReachingDefs-testLive}

```rascal
test bool testLive()

```

