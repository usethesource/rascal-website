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

`{ < Exp<sub>11</sub>, Exp<sub>12</sub>, ... > , < Exp<sub>21</sub>, Exp<sub>22</sub>, ... > , ... }`

#### Types


| `Exp<sub>11</sub>` |  `Exp<sub>12</sub>` |  ...  | `{ < Exp<sub>11</sub>, Exp<sub>12</sub>, ... > , ... }`   |
| --- | --- | --- | --- |
| `T<sub>1</sub>`    |    `T<sub>2</sub>`  |  ...  |  `rel[T<sub>1</sub>, T<sub>2</sub>, ... ]`               |


#### Description

A relation is a set of elements with the following property:

*  All elements have the same static tuple type.


Relations are thus nothing more than sets of tuples, but since they are used so often we provide a shorthand notation for them.
Relations are represented by the type `rel[T<sub>1</sub> L<sub>1</sub>, T<sub>2</sub> L<sub>2</sub>, ... ]`, where _T_<sub>1</sub>, _T_<sub>2</sub>, ... are arbitrary types and
_L_<sub>1</sub>, _L_<sub>2</sub>, ... are optional labels. It is a shorthand for `set[tuple[T<sub>1</sub> L<sub>1</sub>, T<sub>2</sub> L<sub>2</sub>, ... ]]`.

An n-ary relations with m tuples is denoted by
 `{< E<sub>11</sub>, E<sub>12</sub>, ..., E~1n~ >,< E<sub>21</sub>, E<sub>22</sub>, ..., E~2n~ >, ..., < E~m1~, E~m2~, ..., E~mn~ >}`, 
where the _E_~ij~ are expressions that yield the desired element type _T_~i~.

Since relations are a form of set all operations (see [Set](../../../../Rascal/Expressions/Values/Set)) and functions
(see [Set](../../../../Library/Set.md)) are also applicable to relations.

The following additional operators are provided for relations:
* ((Rascal:Expressions/Values/Relation))
* ((Rascal:Expressions/Values/Relation/CartesianProduct))
* ((Rascal:Expressions/Values/Relation/Composition))
* ((Rascal:Expressions/Values/Relation/FieldSelection))
* ((Rascal:Expressions/Values/Relation/Join))
* ((Rascal:Expressions/Values/Relation/ReflexiveTransitiveClosure))
* ((Rascal:Expressions/Values/Relation/Subscription))
* ((Rascal:Expressions/Values/Relation/TransitiveClosure))

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

```rascal-shell
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


