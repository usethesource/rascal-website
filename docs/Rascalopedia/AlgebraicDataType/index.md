---
title: Algebraic Data Type
---

#### Synopsis

An Algebraic Data Type (ADT) is a composite type, defined by a number of "constructors" for each type, and each constructor has a number of (typed) fields.

#### Description

First things first: algebraic data types should not be confused with [abstract data type](../../Rascalopedia/AbstractDataType/index.md)s, which are definitions of data-structures that clearly separate the external interface from the (hidden) implementation of the data structure. Both sare the abbreviation "ADT".

In functional languages, and also in Rascal, algebraic datatypes
are used to define new structured data types of arbitrary complexity. An algebraic data type consists of alternative "constructors" (tree nodes) that each have a number of "fields" of a given type. By combining algebraic data-types (using them as fields of others), you can construct arbitrarily complex hierarchical structures, such as:
* The abstract syntax of logical formulas
* Representations of complex run-time or static types
* Abstract syntax trees of programming languages and domain specific languages

See [Algebraic Data Types](../../Rascal/Declarations/AlgebraicDataType/index.md) and 
[Constructors](../../Rascal/Expressions/Values/Constructor/index.md) in the [Rascal Language Reference](../../Rascal/index.md).

#### Examples

*  An algebraic type for trees with integer leafs and labeled internal nodes:
```rascal
data MyTree 
   = leaf(int n) 
   | tree(str name, MyTree left, MyTree right);
```

* An algebraic type for boolean formulas :
```rascal
data Formula 
   = and(Formula l, Formula r)
   | or(Formula l, Formula r)
   | not(Formula n)
   | \true()
   | \false()
   ;
```

#### Benefits

* ADTs are a very general way of constructing hierarchical data-types. You can model almost anything with them.
* ADTs instances are typically `immutable`, so you can share them among different parts of a meta-program without interference

#### Pitfalls

* To model cycles and cross-edges, typically an ADT is not sufficient. It is possible to model such things on top of ADTs but it gets complex quickly with the use of closures. Better use [./Relation](../../Rascalopedia/Relation/index.md)s for those graph-like structures.



