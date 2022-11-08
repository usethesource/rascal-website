---
title: "module demo::common::Cycles"
---

#### Usage

`import demo::common::Cycles;`


## function cycles {#demo-common-Cycles-cycles}

```rascal
rel[int, set[int]] cycles(rel[int,int] graph)

```

## function isProperCycle {#demo-common-Cycles-isProperCycle}

```rascal
bool isProperCycle(rel[int,int] graph, int n, set[int] C)

```

## function subCycles {#demo-common-Cycles-subCycles}

```rascal
set[set[int]] subCycles (rel[int,int] graph, int n, set[int] Cycle)

```

## function allSubCycles {#demo-common-Cycles-allSubCycles}

```rascal
rel[int, set[set[int]]] allSubCycles(rel[int,int] graph, rel[int, set[int]] Cycles)

```

## function t1 {#demo-common-Cycles-t1}

```rascal
test bool t1()

```

## function t2 {#demo-common-Cycles-t2}

```rascal
test bool t2()

```

## function t3 {#demo-common-Cycles-t3}

```rascal
test bool t3()

```

