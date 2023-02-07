---
title: Dominator Trees
---

A dominator tree describes the dominance relationship between nodes in a control flow graph
(statements in a program).

Given nodes X and Y in a control flow graph, node X dominates node Y if and only if every 
directed path from entry to Y (not including Y) contains X.

A dominator tree has the following characteristics:
* the initial node is the entry node
* each node dominates only its descendents in the tree

The function `dominators` defined below computes the direct and indirect descendants that each node dominates.

```rascal-commands
import Relation;
import analysis::graphs::Graph;

rel[&T, set[&T]] dominators(rel[&T,&T] pred, &T root) {
	set[&T] vertices = carrier(pred);

	return  { <v, (vertices - {v, root}) - reachX(pred, {root}, {v})> |  &T v <- vertices};
}
```

Notice how `dominators` is a generic function, which will work on any type of binary reflexive relation.

This is example 1 from T. Lengauer and R.E. Tarjan, A Fast Algorithm for Finding Dominators
in a Flowgraph, TOPLAS, Vol. 1, N0. 1, July 1979, 121-141:

```ascii-art
+------------------- R ----------+
|         +----- / /             |
|         |       /              |
|         |       v              v
|         |    +--B       +----- C -----+
|         |    |  |       |             | 
|         v    |  |       |             |       
|         A <--+  |       |             |
|         |       |       |             |
|         v       v       v             v       
|         D    +--E       F      +----- G
|         |    |  ^       |      |      |
|         v    |  |       |      |      |
|         L    |  |       |      |      |
|         |    v  |       |      v      v
|         +->  H -+       +----> I <--- J
|              +--------+      ^ |
|                       |     /  |
|                       v   /    |
+---------------------> K / <----+
```

```rascal-commands,continue
rel[str,set[str]] example1() {
	str ROOT = "R";

	rel[str,str] PRED ={
		<"R", "A">,<"R", "B">, <"R", "C">,
		<"A", "D">,
		<"B", "A">, <"B", "D">, <"B", "E">,
		<"C", "F">, <"C", "G">,
		<"D", "L">,
		<"E", "H">,
		<"F", "I">,
		<"G", "I">, <"G", "J">,
		<"H", "K">, <"H", "E">,
		<"I", "K">, 
		<"K", "I">, <"K", "R">,
		<"L", "H">
	};

	return dominators(PRED, ROOT);
}

test bool t1() =
  example1() ==
 	{
		<"R", {"A", "B", "C", "D", "E", "F", "G", "L", "H", "I", "J", "K"}>, 
		<"A", {}>, 
		<"B", {}>, 
		<"C", {"F", "G", "J"}>, 
		<"D", {"L"}>, 
		<"E", {}>, 
		<"F", {}>, 
		<"G", {"J"}>, 
		<"L", {}>, 
		<"H", {}>, 
		<"I", {}>, 
		<"J", {}>, 
		<"K", {}>
	};
```	

This is example 2, taken from Aho, Sethi Ullman, p603:

```rascal-commands,continue
rel[int,set[int]] example2() {
	int ROOT = 1;

	rel[int,int] PRED = {
		<1,2>, <1,3>,
		<2,3>,
		<3,4>,
		<4,3>,<4,5>, <4,6>,
		<5,7>,
		<6,7>,
		<7,4>,<7,8>,
		<8,9>,<8,10>,<8,3>,
		<9,1>,
		<10,7>
	};

	return dominators(PRED, ROOT);
}

test bool t2() =
  example2() ==
	{
		<1, {2, 3, 4, 5, 6, 7, 8, 9, 10}>, 
		<2, {}>,
		<3, {4, 5, 6, 7, 8, 9, 10}>,
		<4, {5, 6, 7, 8, 9, 10}>, 
		<5, {}>,
		<6, {}>,
		<7, {8, 9, 10}>,
		<8, {9, 10}>,
		<9, {}>,
		<10, {}>
	};
```

There are other ways of computing dominator trees in Rascal, possibly with other ways of encoding the output or the input, and possibly using faster operators. In Rascal it is always a good plan to use the relational calculus primitives to reason about graphs and networks, because under-the-hood advanced data-structures try to optimize queries and construction of the relations.
