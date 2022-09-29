---
title: "module analysis::graphs::Graph"
---

#### Usage

`import analysis::graphs::Graph;`


#### Synopsis

A `Graph` datatype with associated functions.

#### Types

`alias Graph[&T] = rel[&T from, &T to];`

#### Description

The Graph data type is a binary relation and all operators and functions defined
on [relations](../../../Rascal/Expressions/Values/Relation/index.md) are also defined on Graphs.

The `Graph` library provides the following functions:
* ((Library:alias:analysis::graphs::Graph::Graph[&T]))
* [bottom](../../../Library/analysis/graphs/Graph.md#analysis::graphs::Graph-bottom)
* [connectedComponents](../../../Library/analysis/graphs/Graph.md#analysis::graphs::Graph-connectedComponents)
* [order](../../../Library/analysis/graphs/Graph.md#analysis::graphs::Graph-order)
* [predecessors](../../../Library/analysis/graphs/Graph.md#analysis::graphs::Graph-predecessors)
* [reach](../../../Library/analysis/graphs/Graph.md#analysis::graphs::Graph-reach)
* [reachR](../../../Library/analysis/graphs/Graph.md#analysis::graphs::Graph-reachR)
* [reachX](../../../Library/analysis/graphs/Graph.md#analysis::graphs::Graph-reachX)
* [shortestPathPair](../../../Library/analysis/graphs/Graph.md#analysis::graphs::Graph-shortestPathPair)
* [stronglyConnectedComponents](../../../Library/analysis/graphs/Graph.md#analysis::graphs::Graph-stronglyConnectedComponents)
* [stronglyConnectedComponentsAndTopSort](../../../Library/analysis/graphs/Graph.md#analysis::graphs::Graph-stronglyConnectedComponentsAndTopSort)
* [successors](../../../Library/analysis/graphs/Graph.md#analysis::graphs::Graph-successors)
* [top](../../../Library/analysis/graphs/Graph.md#analysis::graphs::Graph-top)


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

#### Synopsis

Compute the strongly connected components in a graph and return also the topologically sorted elements

#### Description


Tarjan's algorithm for computing strongly connected components in a graph
Returns :
* a set of strongly connected components (sets of vertices)
* the topological sort of vertices even for cyclic graphs)
* See <https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm>

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

Returns the [connected components](http://en.wikipedia.org/wiki/Connected_component_(graph_theory) of Graph `G`, as sets of nodes. All nodes within one component are all reachable from one another, there are no paths between two nodes from different components. The graph is assumed to be undirected.

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

