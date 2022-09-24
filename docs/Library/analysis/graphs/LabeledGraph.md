---
title: "module analysis::graphs::LabeledGraph"
---

#### Usage

`import analysis::graphs::LabeledGraph;`

## alias LGraph[&T,&L] {#analysis-graphs-LabeledGraph-LGraph[&T,&L]}

* `rel[&T from, &L label, &T to]`

## function bottom {#analysis-graphs-LabeledGraph-bottom}

* ``set[&T] bottom(LGraph[&T,&L] G)``

#### Synopsis

Return the bottom nodes of a LGraph.

## function predecessors {#analysis-graphs-LabeledGraph-predecessors}

* ``set[&T] predecessors(LGraph[&T,&L] G, &T From)``

#### Synopsis

The predecessors of a single node in a LGraph.

## function reach {#analysis-graphs-LabeledGraph-reach}

* ``set[&T] reach(LGraph[&T,&L] G, set[&T] Start)``

#### Synopsis

Reachability from a given start set of nodes.

## function reachR {#analysis-graphs-LabeledGraph-reachR}

* ``set[&T] reachR(LGraph[&T,&L] G, set[&T] Start, set[&T] Restr)``

#### Synopsis

Reachability from given start set of nodes with restrictions.

## function reachX {#analysis-graphs-LabeledGraph-reachX}

* ``set[&T] reachX(LGraph[&T,&L] G, set[&T] Start, set[&T] Excl)``

#### Synopsis

Reachability from given start set of nodes with exclusions.

## function successors {#analysis-graphs-LabeledGraph-successors}

* ``set[&T] successors(LGraph[&T, &L] G, &T From)``

#### Synopsis

The successors of a single node in a LGraph.

## function top {#analysis-graphs-LabeledGraph-top}

* ``set[&T] top(LGraph[&T,&L] G)``

#### Synopsis

Return the top nodes of a LGraph.

