---
title: "module demo::common::ColoredTrees"
---

#### Usage

`import demo::common::ColoredTrees;`


## data ColoredTree {#demo-common-ColoredTrees-ColoredTree}

```rascal
data ColoredTree  
     = leaf(int N)
     | red(ColoredTree left, ColoredTree right)
     | black(ColoredTree left, ColoredTree right)
     ;
```

## function cntRed {#demo-common-ColoredTrees-cntRed}

```rascal
int cntRed(ColoredTree t)

```

## function tstCntRed {#demo-common-ColoredTrees-tstCntRed}

```rascal
test bool tstCntRed()

```

## function addLeaves {#demo-common-ColoredTrees-addLeaves}

```rascal
int addLeaves(ColoredTree t)

```

## function tstAddLeaves {#demo-common-ColoredTrees-tstAddLeaves}

```rascal
test bool tstAddLeaves()

```

## data ColoredTree {#demo-common-ColoredTrees-ColoredTree}

```rascal
data ColoredTree  
     = green(ColoredTree left, ColoredTree right)
     ;
```

## function makeGreen {#demo-common-ColoredTrees-makeGreen}

```rascal
ColoredTree makeGreen(ColoredTree t)

```

## function tstMakeGreen {#demo-common-ColoredTrees-tstMakeGreen}

```rascal
test bool tstMakeGreen()

```

