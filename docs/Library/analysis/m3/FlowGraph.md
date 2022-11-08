---
title: "module analysis::m3::FlowGraph"
---

#### Usage

`import analysis::m3::FlowGraph;`


## data M3 {#analysis-m3-FlowGraph-M3}

```rascal
data M3 (
    rel[loc decl, BasicBlocks blocks] basicBlocks = {},
    rel[loc decl, FlowGraph graph] dataFlow = {},
    rel[loc decl, FlowGraph graph] controlFlow = {}
)
```

## alias BasicBlocks {#analysis-m3-FlowGraph-BasicBlocks}

```rascal
rel[loc whole, list[loc] parts]

```

## alias FlowGraph {#analysis-m3-FlowGraph-FlowGraph}

```rascal
rel[loc from, set[EdgeProperty] properties, loc to]

```

## data EdgeProperty {#analysis-m3-FlowGraph-EdgeProperty}

```rascal
data EdgeProperty  
     = trueCondition()
     | falseCondition()
     ;
```

