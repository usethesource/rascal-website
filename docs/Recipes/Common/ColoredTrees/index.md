---
title: Colored Trees
---

#### Synopsis

Computations on binary trees.

#### Description

We consider binary trees---trees with exactly two children---that have integers as their leaves. 
Our trees can have red and black nodes and we want to perform the following operations on them:

*  Count the number of red nodes.
*  Compute the sum of all the integers that occur in the leaves.
*  Extend the tree data type with green nodes.
*  Replace all red nodes by green ones.

#### Examples

The definition of ColoredTrees is as follows:

```rascal

//START
// tag::module[]
module demo::common::ColoredTrees

// Define ColoredTrees with red and black nodes and integer leaves



data ColoredTree = leaf(int N) // <1>
                 | red(ColoredTree left, ColoredTree right) 
                 | black(ColoredTree left, ColoredTree right);

public ColoredTree  rb = red(black(leaf(1), red(leaf(2),leaf(3))), black(leaf(3), leaf(4)));
          
// Count the number of red nodes
          
int cntRed(ColoredTree t) {
   int c = 0;
   visit(t) {
     case red(_,_): c = c + 1; // <2>
   };
   return c;
}
int addLeaves(ColoredTree t) {
   int c = 0;
   visit(t) {
     case leaf(int N): c = c + N; // <3>
   };
   return c;
}

test bool tstAddLeaves() = addLeaves(rb) == 13;

// Add green nodes to ColoredTree

data ColoredTree = green(ColoredTree left, ColoredTree right); // <4>

// Transform red nodes into green nodes

ColoredTree makeGreen(ColoredTree t) {
   return visit(t) {
     case red(l, r) => green(l, r) // <5>
   };
}
// end::module[]

test bool tstMakeGreen() = makeGreen(rb) == green(black(leaf(1),green(leaf(2),leaf(3))),black(leaf(3),leaf(4)));

```
       
<1> We define the data type of `ColoredTrees` with constructors `leaf`, `red` and `black`.

<2> `cntRed` counts all red nodes by visiting all nodes and incrementing
the counter `c` for each red one.

<3> `addLeaves` visits all nodes and adds the integers in each leaf node.

<4> `coloredTrees` are extended with a new constructor `green`.

<5> `makeGreen` visits all nodes and turns red nodes in green ones.

We can now explore ColoredTrees:

```rascal-shell
rascal>import demo::common::ColoredTrees;
ok
rascal>rb = red(black(leaf(1), red(leaf(2),leaf(3))), black(leaf(3), leaf(4)));
ColoredTree: red(
  black(
    leaf(1),
    red(
      leaf(2),
      leaf(3))),
  black(
    leaf(3),
    leaf(4)))
```
Count the red nodes in `rb`:

```rascal-shell
rascal>cntRed(rb);
int: 2
```
and compute the sum of all leaves:

```rascal-shell
rascal>addLeaves(rb);
int: 13
```
Finally, we convert all red nodes:

```rascal-shell
rascal>makeGreen(rb);
ColoredTree: green(
  black(
    leaf(1),
    green(
      leaf(2),
      leaf(3))),
  black(
    leaf(3),
    leaf(4)))
```

#### Benefits

This example illustrates the fully automatic visiting of the elements of a structured data type.
Compare this with the traditional programming style in which a switch statement is used to determine
the constructor and recursion is used to visit substructures. This style becomes particularly cumbersome
for data types with large numbers of constructors such as, for instance, abstract syntax trees for real
programming languages.

#### Pitfalls

The visit statement is based on a new paradigm one has to learn.


