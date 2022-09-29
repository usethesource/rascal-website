---
title: AbstractDataType
---

#### Synopsis

A definition of a data type.

#### Description

An [Abstract Data Type](http://en.wikipedia.org/wiki/Abstract_data_type) is a mathematical description of a structure
that can be implemented in various ways. For instance, a stack data type can be characterized by `empty` (the empty stack),
two functions `push` and `pop` and axioms that define them. At the implementation level, a stack
can be implemented using a list, array or something else.

In functional languages, and also in Rascal, abstract datatypes (or ADTs for short)
are used to define new data types. Well-known examples are [stack](http://en.wikipedia.org/wiki/Stack_(data_structure)) and [tree](http://en.wikipedia.org/wiki/Tree_(data_structure), but for these we may use the builtin's [List](../../Rascal/Expressions/Values/List/index.md) and _Values-Nodes (broken link)_. In Rascal it is more natural to use them to define symbolic representations of domains, such as:
* the abstract syntax of logical formulas
* representations of complex run-time or static types
* abstract syntax trees of programming languages and domain specific languages

See [Algebraic Data Types](../../Rascal/Declarations/AlgebraicDataType/index.md) and 
[Constructors](../../Rascal/Expressions/Values/Constructor/index.md) in the [Rascal Language Reference](../../Rascal/index.md).

## Abstract Data Types in Daily Life

*  A stack of trays in the local cafetaria: ![][dispenser.jpg](/assets/Rascalopedia/AbstractDataType/dispenser.jpg)
   [credit](http://www.thermo-box.co.uk/fimi-food-transport-and-handling-products/self-levelling-heated-and-unheated-plate-and-tray-systems.html)

*  A tree:
   ![][tree.jpg](/assets/Rascalopedia/AbstractDataType/tree.jpg)
   [credit](http://free-extras.com/images/tree-569.htm)

*  Coral:
   ![][coral.jpg](/assets/Rascalopedia/AbstractDataType/coral.jpg)
   [credit](http://blog.enn.com/?p=476)


## Abstract Data Types in computer science

*  The run-time stack of a programming language interpreter.
*  A search tree.
*  An ontology.


## Abstract Data Types in Rascal

*  A tree data type:
```rascal
data MyTree = leaf(int n) | tree(str name, MyTree left, MyTree right);
```

