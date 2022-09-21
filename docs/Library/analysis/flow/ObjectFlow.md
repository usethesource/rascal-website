---
title: "analysis::flow::ObjectFlow"
---

#### Usage

`import analysis::flow::ObjectFlow;`


#### Synopsis

Intermediate Language and Basic Algorithms for object flow analysis
  
#### Description
  
The object flow language from the Tonella and Potrich book 
"Reverse Engineering Object Oriented Code" is an intermediate
representation for object flow. We may translate for example
Java to this intermediate language and then analyze object flow
based on the simpler language.
  
The implementation in this file is intended to work with [M3](/docs/Library/analysis/m3/Core/#analysis::m3::Core-M3) models


## data FlowProgram {#analysis-flow-ObjectFlow-FlowProgram}

```rascal
data FlowProgram  
     = flowProgram(set[FlowDecl] decls, set[FlowStm] statements)
     ;
```

## data FlowDecl {#analysis-flow-ObjectFlow-FlowDecl}

```rascal
data FlowDecl  
     = attribute(loc id)
     | method(loc id, list[loc] formalParameters)
     | constructor(loc id, list[loc] formalParameters)
     ;
```

Figure 2.1

## data FlowStm {#analysis-flow-ObjectFlow-FlowStm}

```rascal
data FlowStm  
     = newAssign(loc target, loc class, loc ctor, list[loc] actualParameters)
     | assign(loc target, loc cast, loc source)
     | call(loc target, loc cast, loc receiver, loc method, list[loc] actualParameters)
     ;
```

Figure 2.1

## alias OFG {#analysis-flow-ObjectFlow-OFG}

* `rel[loc from, loc to]`

## function buildFlowGraph {#analysis-flow-ObjectFlow-buildFlowGraph}

* ``OFG buildFlowGraph(FlowProgram p)``

Figure 2.2

## function propagate {#analysis-flow-ObjectFlow-propagate}

* ``rel[loc,&T] propagate(OFG g, rel[loc,&T] gen, rel[loc,&T] kill, bool back)``

Section 2.4

