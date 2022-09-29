---
title: "module analysis::m3::TypeSymbol"
---

#### Usage

`import analysis::m3::TypeSymbol;`


#### Synopsis

a symbolic representation for types that occur in programming languages.

#### Description

M3 provides a general mechanism to associate types, symbolically, with source code artifacts or even run-time artifacts.

The `TypeSymbol` type is a general concept which needs to be extended for specific programming languages. One language will 
class and interface definitions which coincide with types, another may have higher order function types etc.

As a basic principle, the symbols for declared types always link to their definition in the source code using a [Location](../../../Rascal/Expressions/Values/Location/index.md),
while other implicit types do not have such a link (i.e. `int` and `void`).

We cater for languages to have a subtype relation to be defined, and a least upper bound computation. 

You will find an interesting examples in [lang::java::m3::TypeSymbol].



#### Benefits

*  symbolic types can be analyzed and manipulated symbolically, i.e. to instatiate parametrized types.
*  symbolic types can be used directly as constraint variables.

#### Pitfalls

*  If you import extensions to this M3 model for two different languages, ambiguity and other confusion may arise 
because the subtype and lub functions of the two languages will merge.


## data TypeSymbol {#analysis-m3-TypeSymbol-TypeSymbol}

```rascal
data TypeSymbol  
     = \any()
     ;
```

## function subtype {#analysis-m3-TypeSymbol-subtype}

* ``bool subtype(\any(), \any())``

## function lub {#analysis-m3-TypeSymbol-lub}

* ``TypeSymbol lub(\any(), \any())``
