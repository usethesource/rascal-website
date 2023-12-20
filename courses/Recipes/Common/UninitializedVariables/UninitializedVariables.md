---
title: Uninitialized Variables
---

Given a graph-like model of a program -a control flow graph-,
how can we detect the uninitialized variables? This recipe is simplified
to the bone to highlight the algorithm, as opposed to the intermediate
representation. 

```rascal-commands
import Relation;
import analysis::graphs::Graph;
```

We model expressions as line numbers here. Normally you could use a ((Values-Location)) to uniquely identify an expression or an ((Rascal:AlgebraicDataType)) of an abstract syntax tree of the expression or statement:
```rascal-commands,continue
alias Expr = int;
alias Varname = str;
```
The first line number is 1:
```rascal-commands,continue
Expr root = 1;
```

```rascal-shell,continue
Graph[Expr] pred = {<1,3>, <3,4>, <4,5>, <5,6>, <5,8>, <6,10>, <8,10>};
import vis::Graphs;
graph(pred);
```

Now we represent the example definitions (assignments) of variables at given line numbers
and the uses of variables at given lines:
```rascal-shell,continue
rel[Varname,Expr] defs = {<"x", 3>, <"p", 4>, <"z", 6>, <"x", 8>, <"y", 10>};
rel[Varname, Expr] uses =  {<"q", 5>, <"y", 6>, <"x", 6>, <"z", 10>};
```

The `uninit` function takes all the above information and computes for each variable
name if it is used without being initialized at which line of code:
```rascal-commands,continue
rel[Varname, Expr] uninit(rel[Varname,Expr] defs, rel[Varname, Expr] uses, Graph[Expr] pred) =
   { <v, e> | <Varname v, Expr e> <- uses,
              e in reachX(pred, {root}, defs[v])
   };
```

Let's give it a try:
```rascal-shell,continue
UNINIT = uninit(defs, uses, pred);
assert UNINIT == {<"q", 5>, <"y", 6>, <"z", 10>};
```

The unused variables should never be uninitialized:
```rascal-shell,continue
UNUSED = domain(defs) - domain(uses);
assert UNUSED == {"p"};
assert UNUSED & UNINIT<0> == {}; // empty intersection
```

