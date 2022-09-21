---
title: "analysis::graphs::Graph"
---

#### Usage

`import analysis::graphs::Graph;`


#### Synopsis

A `Graph` datatype with associated functions.

#### Types

`alias Graph[&T] = rel[&T from, &T to];`

#### Description

The Graph data type is a binary relation and all operators and functions defined
on [relations](/docs//Rascal/Expressions/Values/Relation) are also defined on Graphs.

The `Graph` library provides the following functions:
* ((Library:alias:analysis::graphs::Graph::Graph[&T]))
* [Library:function:analysis::graphs::Graph::bottom](/docs//Library/analysis/graphs/Graph#analysis::graphs::Graph-bottom)
* [Library:function:analysis::graphs::Graph::connected components](/docs//Library/analysis/graphs/Graph#analysis::graphs::Graph-connectedComponents)
* [Library:function:analysis::graphs::Graph::order](/docs//Library/analysis/graphs/Graph#analysis::graphs::Graph-order)
* [Library:function:analysis::graphs::Graph::predecessors](/docs//Library/analysis/graphs/Graph#analysis::graphs::Graph-predecessors)
* [Library:function:analysis::graphs::Graph::reach](/docs//Library/analysis/graphs/Graph#analysis::graphs::Graph-reach)
* [Library:function:analysis::graphs::Graph::reachR](/docs//Library/analysis/graphs/Graph#analysis::graphs::Graph-reachR)
* [Library:function:analysis::graphs::Graph::reachX](/docs//Library/analysis/graphs/Graph#analysis::graphs::Graph-reachX)
* [Library:function:analysis::graphs::Graph::shortest path pair](/docs//Library/analysis/graphs/Graph#analysis::graphs::Graph-shortestPathPair)
* [Library:function:analysis::graphs::Graph::strongly connected components](/docs//Library/analysis/graphs/Graph#analysis::graphs::Graph-stronglyConnectedComponents)
* [Library:function:analysis::graphs::Graph::strongly connected components and top sort](/docs//Library/analysis/graphs/Graph#analysis::graphs::Graph-stronglyConnectedComponentsAndTopSort)
* [Library:function:analysis::graphs::Graph::successors](/docs//Library/analysis/graphs/Graph#analysis::graphs::Graph-successors)
* [Library:function:analysis::graphs::Graph::top](/docs//Library/analysis/graphs/Graph#analysis::graphs::Graph-top)


## alias Graph[&T] {#analysis-graphs-Graph-Graph[&T]}

* `rel[&T from, &T to]`

## function order {#analysis-graphs-Graph-order}

* ``list[&T] order(Graph[&T] g)``


#### Synopsis

Compute topological order of the nodes in a graph.

#### Examples


```rascal-shell
rascal>import  analysis::graphs::Graph;
ok
rascal>order({<3,4>, <1,2>, <2,4>, <1,3>});
list[int]: [1,2,3,4]
```

## function stronglyConnectedComponents {#analysis-graphs-Graph-stronglyConnectedComponents}

* ``set[set[&T]] stronglyConnectedComponents(Graph[&T] g)``


#### Synopsis

Compute strongly connected components in a graph.

#### Examples


```rascal-shell
rascal>import  analysis::graphs::Graph;
ok
rascal>stronglyConnectedComponents({<1, 2>, <2, 3>, <3, 2>, <2, 4>, <4, 2>, <3, 5>, <5, 3>, <4, 5>, <5, 3>});
set[set[int]]: {
  {1},
  {5,3,2,4}
}
```

## function stronglyConnectedComponentsAndTopSort {#analysis-graphs-Graph-stronglyConnectedComponentsAndTopSort}

* ``tuple[set[set[&T]], list[&T]]  stronglyConnectedComponentsAndTopSort(Graph[&T] ag)``

## function bottom {#analysis-graphs-Graph-bottom}

* ``set[&T] bottom(Graph[&T] G)``


#### Synopsis

Determine the bottom nodes (leaves) of a graph.

#### Description

Returns the bottom nodes of Graph `G`, i.e., the leaf nodes that don't have any descendants.

#### Examples


```rascal-shell
rascal>import analysis::graphs::Graph;
ok
rascal>bottom({<1,2>, <1,3>, <2,4>, <3,4>});
set[int]: {4}
```

## function predecessors {#analysis-graphs-Graph-predecessors}

* ``set[&T] predecessors(Graph[&T] G, &T From)``


#### Synopsis

Determine the direct predecessors of a graph node.

#### Description

Returns the direct predecessors of node `From` in Graph `G`.

#### Examples


```rascal-shell
rascal>import analysis::graphs::Graph;
ok
rascal>predecessors({<1,2>, <1,3>, <2,4>, <3,4>}, 4);
set[int]: {3,2}
```

## function reach {#analysis-graphs-Graph-reach}

* ``set[&T] reach(Graph[&T] G, set[&T] Start)``


#### Synopsis

Determine the graph nodes reachable from a set of nodes.

#### Description

Returns the set of nodes in Graph `G` that are reachable from any of the nodes
in the set `Start`.

## function reachR {#analysis-graphs-Graph-reachR}

* ``set[&T] reachR(Graph[&T] G, set[&T] Start, set[&T] Restr)``


#### Synopsis

Determine the graph nodes reachable from a set of nodes using a restricted set of intermediate nodes.

#### Description

Returns the set of nodes in Graph `G` that are reachable from any of the nodes
in set `Start` using path that only use nodes in the set `Restr`.

#### Examples


```rascal-shell
rascal>import analysis::graphs::Graph;
ok
rascal>reachR({<1,2>, <1,3>, <2,4>, <3,4>}, {1}, {1, 2, 3});
set[int]: {3,2}
```

## function reachX {#analysis-graphs-Graph-reachX}

* ``set[&T] reachX(Graph[&T] G, set[&T] Start, set[&T] Excl)``


#### Synopsis

Determine the graph nodes reachable from a set of nodes excluding certain intermediate nodes.

#### Description

Returns set of nodes in Graph `G` that are reachable from any of the nodes
in `Start` via path that exclude nodes in `Excl`.

#### Examples


```rascal-shell
rascal>import analysis::graphs::Graph;
ok
rascal>reachX({<1,2>, <1,3>, <2,4>, <3,4>}, {1}, {2});
set[int]: {3,4}
```

## function shortestPathPair {#analysis-graphs-Graph-shortestPathPair}

* ``list[&T] shortestPathPair(Graph[&T] G, &T From, &T To)``


#### Synopsis

Determine the shortest path between two graph nodes.

#### Description

Returns the shortest path between nodes `From` and `To` in Graph `G`.

## function successors {#analysis-graphs-Graph-successors}

* ``set[&T] successors(Graph[&T] G, &T From)``


#### Synopsis

Determine the direct successors of a graph node.

#### Description

Returns the direct successors of node `From` in Graph `G`.

#### Examples


```rascal-shell
rascal>import analysis::graphs::Graph;
ok
rascal>successors({<1,2>, <1,3>, <2,4>, <3,4>}, 1);
set[int]: {3,2}
```

## function top {#analysis-graphs-Graph-top}

* ``set[&T] top(Graph[&T] G)``


#### Synopsis

Determine the set of top nodes (roots) of a graph.

#### Description

Returns the top nodes of Graph `G`, i.e., the root nodes that do not have any predecessors.

#### Examples


```rascal-shell
rascal>import analysis::graphs::Graph;
ok
rascal>top({<1,2>, <1,3>, <2,4>, <3,4>});
set[int]: {1}
```

## function connectedComponents {#analysis-graphs-Graph-connectedComponents}

* ``set[set[&T]] connectedComponents(Graph[&T] G)``


#### Synopsis

Determine the connected components of a graph.

#### Description

Returns the http://en.wikipedia.org/wiki/Connected_component_(graph_theory)[connected components] of Graph `G`, as sets of nodes. All nodes within one component are all reachable from one another, there are no paths between two nodes from different components. The graph is assumed to be undirected.

#### Examples


```rascal-shell
rascal>import analysis::graphs::Graph;
ok
rascal>connectedComponents({<1,2>, <1,3>, <4,5>, <5,6>});
set[set[int]]: {
  {5,4,6},
  {1,3,2}
}
```

