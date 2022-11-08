---
title: "module demo::McCabe"
---

#### Usage

`import demo::McCabe;`


## function cyclomaticComplexity {#demo-McCabe-cyclomaticComplexity}

```rascal
int cyclomaticComplexity(Graph[&T] CFG)

```

#### Synopsis

Compute the cyclomatic complexity of a graph

#### Description



McCabe Complexity (also Cyclomatic Complexity) is a measure for source code
complexity, see <http://en.wikipedia.org/wiki/Cyclomatic_complexity>
or McCabe's original article:
> T.J. McCabe, A Complexity Measure, IEEE Transactions on Software Engineering,
> Vol. 2, No. 4, p. 308 (1976)

It is defined as a metric on the control flow graph:
  `number_of_edges - number_of_nodes + 2`

## function tstCyclomaticComplexity1 {#demo-McCabe-tstCyclomaticComplexity1}

```rascal
test bool tstCyclomaticComplexity1()

```

## function tstCyclomaticComplexity2 {#demo-McCabe-tstCyclomaticComplexity2}

```rascal
test bool tstCyclomaticComplexity2()

```

## function tstCyclomaticComplexity3 {#demo-McCabe-tstCyclomaticComplexity3}

```rascal
test bool tstCyclomaticComplexity3()

```

