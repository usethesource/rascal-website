---
title: Uninit
---

#### Synopsis

Find unitialized variables in a Pico program.

#### Examples

Uninitialized variables are variables that are used without being initialized.
This means that there is a path in the control flow graph from the entry point of the program
to a specific use of a variable, where that path does not contain a definition of that variable.

This can be computed as follows:

```rascal 
module demo::lang::Pico::Uninit

import demo::lang::Pico::Abstract;
import demo::lang::Pico::Load;

import demo::lang::Pico::UseDef;
import demo::lang::Pico::ControlFlow;

import analysis::graphs::Graph;

set[CFNode] defNodes(PicoId Id, set[Occurrence] Defs) =
   {statement(occ.stat.src, occ.stat) | Occurrence occ <- Defs, occ.name == Id};

set[Occurrence] uninitProgram(PROGRAM P) {
   // highlight-start
   D = defs(P); 
   CFG = cflowProgram(P); 
   return { occ | occ <- uses(P), 
                  any(CFNode N <- reachX(CFG.graph, CFG.entry, defNodes(occ.name, D)),
                      N has location && occ.src <= N.location) 
          }; 
   // highlight-end
}

set[Occurrence] uninitProgram(str txt) = uninitProgram(load(txt)); 

```

                
* First, we determine the variable definitions of the program, and its control flow graph.
* Next we ask for every use of a variable the question: can it be reached from the entries
    of the program without encountering a definition? This determined as follows:
    *  `rangeR(D, {occ.item})` is the set of definition for the variable were are looking at. See [Rascal:Relation/rangeR].
    *  `reachX` determines the reachability in a graph while excluding certain nodes, see [Rascal:Graph/reachX]. Here
        `reachX(CFG.graph, CFG.entry, rangeR(D, {occ.item}))` determines the nodes in the graph that can be reached from the
         entry point of the program without passing a definition of the current variable.
    *  `any(CFNode N <- reachX( ... ), N has location && occ.location \<= N.location)` yields true if there is such a reachable node
        that covers the location of the current variable.
* The complete comprehension returns the set of occurrences of uninitialized variables.


The function `uninitProgram` performs this analysis on the source text of a Pico program.

Here is a simple example, where variable `p` is used without intialization:

```rascal-shell 
rascal>import demo::lang::Pico::Uninit;
ok
rascal>uninitProgram("begin declare n : natural, m : natural, p : natural; n := 10; m := n + p end");
rel[loc src,str name,STATEMENT stat]: {<|unknown:///|(71,1,<1,71>,<1,72>),"p",asgStat(
    "m",
    add(
      id(
        "n",
        src=|unknown:///|(67,1,<1,67>,<1,68>),
        comments=()),
      id(
        "p",
        src=|unknown:///|(71,1,<1,71>,<1,72>),
        comments=()),
      src=|unknown:///|(67,5,<1,67>,<1,72>),
      comments=()),
    src=|unknown:///|(62,10,<1,62>,<1,72>),
    comments=())>}
```



