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

`[ < Exp~11~, Exp~12~, ... > , < Exp~21~, Exp~22~, ... > , ... ]`

#### Types

| `Exp~11~` |  `Exp~12~` |  ...  | `{ < Exp~11~, Exp~12~, ... > , ... }`   |
| --- | --- | --- | --- |
| `T~1~`    |    `T~2~`  |  ...  |  `lrel[T~1~, T~2~, ... ]`               |


#### Description

A list relation is a list of elements with the following property:

*  All elements have the same static tuple type.


ListRelations are thus nothing more than lists of tuples, but since they are used so often we provide a shorthand notation for them.
ListRelations are represented by the type `lrel[T~1~ L~1~, T~2~ L~2~, ... ]`, where _T_~1~, _T_~2~, ... are arbitrary types and
_L_~1~, _L_~2~, ... are optional labels. It is a shorthand for `list[tuple[T~1~ L~1~, T~2~ L~2~, ... ]]`.

An n-ary list relation with m tuples is denoted by
 `[< E~11~, E~12~, ..., E~1n~>,< E~21~, E~22~, ..., E~2n~>, ..., < E~m1~, E~m2~, ..., E~mn~>]`, 
where the _E_~ij~ are expressions that yield the desired element type _T_~i~.

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


