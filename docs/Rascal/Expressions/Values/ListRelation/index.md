---
title: ListRelation
keywords:
  - "["
  - "]"
  - "<"
  - ">"

---

#### Synopsis

List relations are lists of tuples with relational calculus operators defined on them.

#### Syntax

`[ < Exp₁₁, Exp₁₂, ... > , < Exp₂₁, Exp₂₂, ... > , ... ]`

#### Types

| `Exp₁₁` |  `Exp₁₂` |  ...  | `{ < Exp₁₁, Exp₁₂, ... > , ... }`   |
| --- | --- | --- | --- |
| `T₁`    |    `T₂`  |  ...  |  `lrel[T₁, T₂, ... ]`               |


#### Description

A list relation is a list of elements with the following property:

*  All elements have the same static tuple type.


ListRelations are thus nothing more than lists of tuples, but since they are used so often we provide a shorthand notation for them.
ListRelations are represented by the type `lrel[T₁ L₁, T₂ L₂, ... ]`, where _T_₁, _T_₂, ... are arbitrary types and
_L_₁, _L_₂, ... are optional labels. It is a shorthand for `list[tuple[T₁ L₁, T₂ L₂, ... ]]`.

An n-ary list relation with m tuples is denoted by
 `[< E₁₁, E₁₂, ..., E₁ₙ>,< E₂₁, E₂₂, ..., E₂ₙ>, ..., < Eₘ₁, Eₘ₂, ..., Eₘₙ>]`, 
where the _E_ᵢⱼ are expressions that yield the desired element type _T_ᵢ.

Since list relations are a form of list all operations (see [List](../../../../Rascal/Expressions/Values/List/index.md)) and functions
(see [List](../../../../Library/List.md)) are also applicable to relations.

The following additional operators are provided for list relations:
* [CartesianProduct](../../../../Rascal/Expressions/Values/ListRelation/CartesianProduct/index.md)
* [Composition](../../../../Rascal/Expressions/Values/ListRelation/Composition/index.md)
* [FieldSelection](../../../../Rascal/Expressions/Values/ListRelation/FieldSelection/index.md)
* [Join](../../../../Rascal/Expressions/Values/ListRelation/Join/index.md)
* [ReflexiveTransitiveClosure](../../../../Rascal/Expressions/Values/ListRelation/ReflexiveTransitiveClosure/index.md)
* [Subscription](../../../../Rascal/Expressions/Values/ListRelation/Subscription/index.md)
* [TransitiveClosure](../../../../Rascal/Expressions/Values/ListRelation/TransitiveClosure/index.md)

There are also [library functions](../../../../Library/ListRelation.md) available for list relations.


#### Examples


```rascal-shell 
rascal>[<1,10>, <2,20>, <3,30>]
lrel[int,int]: [
  <1,10>,
  <2,20>,
  <3,30>
]
```

Instead of `lrel[int,int]` we can also give `list[tuple[int,int]]` as type of the above expression
remember that these types are interchangeable.


```rascal-shell ,continue
rascal>[<"a",10>, <"b",20>, <"c",30>]
lrel[str,int]: [
  <"a",10>,
  <"b",20>,
  <"c",30>
]
rascal>[<"a", 1, "b">, <"c", 2, "d">]
lrel[str,int,str]: [
  <"a",1,"b">,
  <"c",2,"d">
]
```


