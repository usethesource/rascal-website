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

`[ < Exp<sub>11</sub>, Exp<sub>12</sub>, ... > , < Exp<sub>21</sub>, Exp<sub>22</sub>, ... > , ... ]`

#### Types

| `Exp<sub>11</sub>` |  `Exp<sub>12</sub>` |  ...  | `{ < Exp<sub>11</sub>, Exp<sub>12</sub>, ... > , ... }`   |
| --- | --- | --- | --- |
| `T<sub>1</sub>`    |    `T<sub>2</sub>`  |  ...  |  `lrel[T<sub>1</sub>, T<sub>2</sub>, ... ]`               |


#### Description

A list relation is a list of elements with the following property:

*  All elements have the same static tuple type.


ListRelations are thus nothing more than lists of tuples, but since they are used so often we provide a shorthand notation for them.
ListRelations are represented by the type `lrel[T<sub>1</sub> L<sub>1</sub>, T<sub>2</sub> L<sub>2</sub>, ... ]`, where _T_<sub>1</sub>, _T_<sub>2</sub>, ... are arbitrary types and
_L_<sub>1</sub>, _L_<sub>2</sub>, ... are optional labels. It is a shorthand for `list[tuple[T<sub>1</sub> L<sub>1</sub>, T<sub>2</sub> L<sub>2</sub>, ... ]]`.

An n-ary list relation with m tuples is denoted by
 `[< E<sub>11</sub>, E<sub>12</sub>, ..., E~1n~>,< E<sub>21</sub>, E<sub>22</sub>, ..., E~2n~>, ..., < E~m1~, E~m2~, ..., E~mn~>]`, 
where the _E_~ij~ are expressions that yield the desired element type _T_~i~.

Since list relations are a form of list all operations (see [List](../../../../Rascal/Expressions/Values/List)) and functions
(see [List](../../../../Library/List.md)) are also applicable to relations.

The following additional operators are provided for list relations:
* [ListRelation](../../../../Rascal/Expressions/Values/ListRelation)
* [CartesianProduct](../../../../Rascal/Expressions/Values/ListRelation/CartesianProduct)
* [Composition](../../../../Rascal/Expressions/Values/ListRelation/Composition)
* [FieldSelection](../../../../Rascal/Expressions/Values/ListRelation/FieldSelection)
* [Join](../../../../Rascal/Expressions/Values/ListRelation/Join)
* [ReflexiveTransitiveClosure](../../../../Rascal/Expressions/Values/ListRelation/ReflexiveTransitiveClosure)
* [Subscription](../../../../Rascal/Expressions/Values/ListRelation/Subscription)
* [TransitiveClosure](../../../../Rascal/Expressions/Values/ListRelation/TransitiveClosure)

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


```rascal-shell
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


