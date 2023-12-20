---
title: McCabe's cyclomatic complexity
---

McCabe Complexity (also Cyclomatic Complexity) is a measure for source code
complexity, see <http://en.wikipedia.org/wiki/Cyclomatic_complexity>
or McCabe's original article:
> T.J. McCabe, A Complexity Measure, IEEE Transactions on Software Engineering,
> Vol. 2, No. 4, p. 308 (1976)

It is defined as a metric on the control flow graph:
  `number_of_edges - number_of_nodes + 2`

If you have computed a control flow graph and represented it as a binary reflexive
relation in Rascal, then this simple function computes its CC:

```rascal-commands
import analysis::graphs::Graph;
import Set;
import Relation;

int cyclomaticComplexity(Graph[&T] CFG){
    return size(CFG) - size(carrier(CFG)) + 2;
}
```

Let's take that for a spin:
```rascal-commands,continue
Graph[int] G1 = {<1,2>, <2,3>};
Graph[int] G3 = {<1,2>, <1,3>, <2,6>, <3,4>, <3,5>, <4,7>, <5,8>, <6,7>, <7,8>};
Graph[int] G5 = {<1,2>, <2,3>, <2,4>, <3,6>, <4,2>, <4,5>, <5, 10>, <6, 7>, 
                 <7, 8>, <7,9>, <8,9>, <9, 7>, <9,10>};

test bool tstCyclomaticComplexity1() = cyclomaticComplexity(G1) == 1;
test bool tstCyclomaticComplexity2() = cyclomaticComplexity(G3) == 3;
test bool tstCyclomaticComplexity3() = cyclomaticComplexity(G5) == 5;
```

```rascal-shell
:test
```

Of course there are other ways of computing the Cyclomatic Complexity for code units,
namely based on the abstract syntax tree. That is for another time.
