---
title: Case Distinction
sidebar_position: 7
---

#### Synopsis

Case distinction via pattern matching.

#### Description

The switch statement as known from C and Java is generalized: the subject value to switch on may be an 
arbitrary value and the cases are arbitrary patterns followed by a statement. 
Each case is comparable to a _transaction_: when the pattern succeeds and the following statement is 
executed successfully, all changes to variables made by the statement are committed and thus become permanent. 
The variables bound by the pattern are always local to the statement associated with the case. 

See [Switch](../../Rascal/Statements/Switch/index.md),[Visit](../../Rascal/Expressions/Visit/index.md) and 
[Pattern With Action](../../Rascal/Expressions/Visit/PatternWithAction/index.md) for more details.

#### Examples

We use the [ColoredTrees](../../Recipes/Common/ColoredTrees/index.md) datatype as example and use a switch to
distinguish between red and black nodes:

```rascal-shell 
rascal>data ColoredTree = 
>>>>>>>      leaf(int N) 
>>>>>>>    | red(ColoredTree left, ColoredTree right) 
>>>>>>>    | black(ColoredTree left, ColoredTree right);
ok
rascal>ColoredTree CT = red(black(leaf(1), red(leaf(2),leaf(3))), black(leaf(3), leaf(4)));
ColoredTree: red(
  black(
    leaf(1),
    red(
      leaf(2),
      leaf(3))),
  black(
    leaf(3),
    leaf(4)))
rascal>import IO;
ok
rascal>switch (CT){
>>>>>>>case red(_, _):
>>>>>>>     println("A red root node");
>>>>>>>case black(_, _):
>>>>>>>     println("A black root node");
>>>>>>>}
A red root node
ok
```

