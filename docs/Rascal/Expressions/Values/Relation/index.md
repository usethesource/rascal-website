---
title: Relation
keywords:
  - "{"
  - "}"
  - rel
---

#### Synopsis

Relation values.

#### Syntax

`{ < Exp₁₁, Exp₁₂, ... > , < Exp₂₁, Exp₂₂, ... > , ... }`

#### Types


| `Exp₁₁` |  `Exp₁₂` |  ...  | `{ < Exp₁₁, Exp₁₂, ... > , ... }`   |
| --- | --- | --- | --- |
| `T₁`    |    `T₂`  |  ...  |  `rel[T₁, T₂, ... ]`               |


#### Description

A relation is a set of elements with the following property:

*  All elements have the same static tuple type.


Relations are thus nothing more than sets of tuples, but since they are used so often we provide a shorthand notation for them.
Relations are represented by the type `rel[T₁ L₁, T₂ L₂, ... ]`, where _T_₁, _T_₂, ... are arbitrary types and
_L_₁, _L_₂, ... are optional labels. It is a shorthand for `set[tuple[T₁ L₁, T₂ L₂, ... ]]`.

An n-ary relations with m tuples is denoted by
 `{< E₁₁, E₁₂, ..., E₁ₙ >,< E₂₁, E₂₂, ..., E₂ₙ >, ..., < Eₘ₁, Eₘ₂, ..., Eₘₙ >}`, 
where the _E_ᵢⱼ are expressions that yield the desired element type _T_ᵢ.

Since relations are a form of set all operations (see [Set](../../../../Rascal/Expressions/Values/Set/index.md)) and functions
(see [Set](../../../../Library/Set.md)) are also applicable to relations.

The following additional operators are provided for relations:
* [CartesianProduct](../../../../Rascal/Expressions/Values/Relation/CartesianProduct/index.md)
* [Composition](../../../../Rascal/Expressions/Values/Relation/Composition/index.md)
* [FieldSelection](../../../../Rascal/Expressions/Values/Relation/FieldSelection/index.md)
* [Join](../../../../Rascal/Expressions/Values/Relation/Join/index.md)
* [ReflexiveTransitiveClosure](../../../../Rascal/Expressions/Values/Relation/ReflexiveTransitiveClosure/index.md)
* [Subscription](../../../../Rascal/Expressions/Values/Relation/Subscription/index.md)
* [TransitiveClosure](../../../../Rascal/Expressions/Values/Relation/TransitiveClosure/index.md)

There are also [library functions](../../../../Library/Relation.md) available for Relations.


#### Examples


```rascal-shell 
rascal>{<1,10>, <2,20>, <3,30>}
rel[int,int]: {
  <1,10>,
  <3,30>,
  <2,20>
}
```
instead of `rel[int,int]` we can also give `set[tuple[int,int]]` as type of the above expression
remember that these types are interchangeable.

```rascal-shell ,continue
rascal>{<"a",10>, <"b",20>, <"c",30>}
rel[str,int]: {
  <"a",10>,
  <"b",20>,
  <"c",30>
}
rascal>{<"a", 1, "b">, <"c", 2, "d">}
rel[str,int,str]: {
  <"c",2,"d">,
  <"a",1,"b">
}
```


