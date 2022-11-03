---
title: Operators
---

#### Synopsis

The Rascal operators.

#### Syntax

Some example operators:

```rascal
Exp + Exp
Exp [ Exp ]
! Exp
Exp in Exp
```

#### Description

An _operator expression_ consists of an operator and one or more operands. The evaluation order of the operands depends on the operator. 
The operator is applied to the operands and the resulting value (or values in some cases) is the result of the operator expression. 

All operators are summarized in the following table. They are listed from highest precedence
to lowest precedence. In other words, operators listed earlier in the table bind stronger.
 

| Operator     | See  | Short Description |
| ---          | ---  | ---               |
| `Exp . Name` |      | Select named field from structured value |
|              | [Location fields](../../../Rascal/Expressions/Values/Location/FieldSelection/index.md) |
|              | [DateTime fields](../../../Rascal/Expressions/Values/DateTime/FieldSelection/index.md) |
|              | [Tuple fields](../../../Rascal/Expressions/Values/Tuple/FieldSelection/index.md)  |
|              | [Relation columns](../../../Rascal/Expressions/Values/Relation/FieldSelection/index.md) |
| `Exp₁ [ Name = Exp₂ ]` |  [FieldAssignment](../../../Rascal/Expressions/Values/Node/FieldAssignment/index.md) [FieldAssignment](../../../Rascal/Expressions/Values/Constructor/FieldAssignment/index.md) [FieldAssignment](../../../Rascal/Expressions/Values/Tuple/FieldAssignment/index.md)  |  Change value of named field of structured value |
| `Exp < field₁, ... >` | [FieldProjection](../../../Rascal/Expressions/Values/Relation/FieldProjection/index.md), [FieldProjection](../../../Rascal/Expressions/Values/Tuple/FieldProjection/index.md) |  Select fields from relation or structured value |
| `Exp is Name` |                        | Check if `Exp` has name `Name` |
|               | [parse tree](../../../Library/ParseTree.md), |
|               | [ConcreteSyntax](../../../Rascal/Expressions/ConcreteSyntax/index.md), |
|               | [./Algebraic Data Type](../../../Rascal/Declarations/AlgebraicDataType/index.md) |
| `Exp has Name`  |   | Check if a field with `Name` is present on `Exp`
|                 | [parse tree](../../../Library/ParseTree.md) | | 
|                 | [ConcreteSyntax](../../../Rascal/Expressions/ConcreteSyntax/index.md) | | 
|                 | [./Algebraic Data Type](../../../Rascal/Declarations/AlgebraicDataType/index.md) | |
| `Exp₁ [ Exp₂ , Exp₃, .... ]` |  | Project values for given key from list, map, tuple or relation. |
|  | [list](../../../Rascal/Expressions/Values/List/Subscription/index.md)  | | 
|  | [map](../../../Rascal/Expressions/Values/Map/Subscription/index.md)  | |
|  | [tuple](../../../Rascal/Expressions/Values/Tuple/Subscription/index.md)  | |
|  | [relation](../../../Rascal/Expressions/Values/Relation/Subscription/index.md) | |
| `Exp₁ [ Exp₂ , Exp₃ .. Exp₄ ]` | | Retrieve a slice from a list, string, or node. |
|  | [list](../../../Rascal/Expressions/Values/List/Slice/index.md) | |
|  | [string](../../../Rascal/Expressions/Values/String/Slice/index.md) | |
|  | [node](../../../Rascal/Expressions/Values/Node/Slice/index.md) | |
|  `Exp?` | [IsDefined](../../../Rascal/Expressions/Values/Boolean/IsDefined/index.md) | Test whether an expression has a defined value  |
|  `!Exp` | [Negation](../../../Rascal/Expressions/Values/Boolean/Negation/index.md) | Negate a Boolean value |
| `- Exp` | [Negation](../../../Rascal/Expressions/Values/Number/Negation/index.md) | Negation of numbers |
| `Exp +` |                     | Transitive closure on relation or list relation |
|         | [Relation +](../../../Rascal/Expressions/Values/Relation/TransitiveClosure/index.md) | |
|         | [List +](../../../Rascal/Expressions/Values/ListRelation/TransitiveClosure/index.md) | |
| `Exp *` |             |  Reflexive transitive closure on relation or list relation |
|         | [Relation *](../../../Rascal/Expressions/Values/Relation/ReflexiveTransitiveClosure/index.md), |
|         | [List *](../../../Rascal/Expressions/Values/ListRelation/ReflexiveTransitiveClosure/index.md) |
| `Exp₁ o Exp₂` | | _Exp_₁ and _Exp_₂ should evaluate to a relation or map; return their composition. Note: the letter "o" is thus a keyword |
| | [relation](../../../Rascal/Expressions/Values/Relation/Composition/index.md) | |
| |  [map](../../../Rascal/Expressions/Values/Map/Composition/index.md) | |
| `Exp₁ / Exp₂` | [Division](../../../Rascal/Expressions/Values/Number/Division/index.md) | Divide two numbers |
| `Exp₁ % Exp₂` |[Remainder](../../../Rascal/Expressions/Values/Number/Remainder/index.md) | Remainder on numbers |
| `Exp₁ * Exp₂` | | Products | 
|  | [number](../../../Rascal/Expressions/Values/Number/Multiplication/index.md) | Multiply numbers |
|  |  [list](../../../Rascal/Expressions/Values/List/Product/index.md) | Cartesian product  on lists | 
|  |  [set](../../../Rascal/Expressions/Values/Set/Product/index.md) |Cartesian product  on sets |
|  |  [relation](../../../Rascal/Expressions/Values/Relation/CartesianProduct/index.md) | Cartesian product  on relations |
| `Exp₁ & Exp₂` | Intersection | 
|  | [list intersection](../../../Rascal/Expressions/Values/List/Intersection/index.md) | | 
|  | [set intersection](../../../Rascal/Expressions/Values/Set/Intersection/index.md) | | 
|  | [map intersection](../../../Rascal/Expressions/Values/Map/Intersection/index.md) | |
| `Exp₁ + Exp₂` |  | Sums |
|  | [Addition](../../../Rascal/Expressions/Values/Number/Addition/index.md) | Add numbers |
|  |  [Concatenation](../../../Rascal/Expressions/Values/String/Concatenation/index.md) | Concatenate strings | 
 |  | [Concatenation](../../../Rascal/Expressions/Values/List/Concatenation/index.md) | Concatenate lists |
|  |  [Insert](../../../Rascal/Expressions/Values/List/Insert/index.md) [Append](../../../Rascal/Expressions/Values/List/Append/index.md) | Insert and Append list elements |
|  |  [Concatenation](../../../Rascal/Expressions/Values/Tuple/Concatenation/index.md) | Concatenate tuples |
|  |  [Union](../../../Rascal/Expressions/Values/Set/Union/index.md) | Set union |
|  |  [Union](../../../Rascal/Expressions/Values/Map/Union/index.md) | Map "union" |
|  |  [AddSegment](../../../Rascal/Expressions/Values/Location/AddSegment/index.md) | Adding path segments to locations |
| `Exp₁ - Exp₂` | | Subtraction
|  | [numbers](../../../Rascal/Expressions/Values/Number/Subtraction/index.md) | subtraction of numbers |
|  |  [lists](../../../Rascal/Expressions/Values/List/Difference/index.md) | difference on lists | 
|  |  [sets](../../../Rascal/Expressions/Values/Set/Difference/index.md) | set difference |
|  |  [maps](../../../Rascal/Expressions/Values/Map/Difference/index.md) | map difference | 
| `Exp₁ join Exp₂` | [Join](../../../Rascal/Expressions/Values/Relation/Join/index.md) Join on relation |
| `Exp₁ in Exp₂` | | test membership |
|  | [list](../../../Rascal/Expressions/Values/List/in/index.md)  | list membership | 
|  |  [set](../../../Rascal/Expressions/Values/Set/in/index.md) | set membership |
|  |  [map](../../../Rascal/Expressions/Values/Map/in/index.md) | map key membership |
| `Exp₁ notin Exp₂` |  | inverse membership | 
|  | [list](../../../Rascal/Expressions/Values/List/notin/index.md) | list membership | 
|  |  [set](../../../Rascal/Expressions/Values/Set/notin/index.md) | set membership |
|  |  [map](../../../Rascal/Expressions/Values/Map/notin/index.md) | map key membership |
| `Exp₁ <= Exp₂` | reflexive less-than | 
|  | [number](../../../Rascal/Expressions/Values/Number/LessThanOrEqual/index.md) | numbers | 
|  | [string](../../../Rascal/Expressions/Values/String/LessThanOrEqual/index.md) | strings | 
|  |  [location](../../../Rascal/Expressions/Values/Location/LessThanOrEqual/index.md) | locations |
|  |  [datetime](../../../Rascal/Expressions/Values/DateTime/LessThanOrEqual/index.md) | datetime | 
|  |  [list](../../../Rascal/Expressions/Values/List/SubList/index.md) | list | 
|  |  [set](../../../Rascal/Expressions/Values/Set/SubSet/index.md) | set | 
|  |  [map](../../../Rascal/Expressions/Values/Map/SubMap/index.md) | map |
| `Exp₁ < Exp₂` | | irreflexive less-than |
|  | [number](../../../Rascal/Expressions/Values/Number/LessThan/index.md) | numbers |
|  |  [string](../../../Rascal/Expressions/Values/String/LessThan/index.md) |strings | 
|  |  [location](../../../Rascal/Expressions/Values/Location/LessThan/index.md) |locations |
|  |  [datetime](../../../Rascal/Expressions/Values/DateTime/LessThan/index.md) |datetime |
|  |  [list](../../../Rascal/Expressions/Values/List/StrictSubList/index.md) |list | 
|  |  [set](../../../Rascal/Expressions/Values/Set/StrictSubSet/index.md) |set |
|  |  [map](../../../Rascal/Expressions/Values/Map/StrictSubMap/index.md) | map |
| `Exp₁ >= Exp₂` | | reflexive greater-than |
|  | [number](../../../Rascal/Expressions/Values/Number/GreaterThanOrEqual/index.md) | numbers |
|  |  [string](../../../Rascal/Expressions/Values/String/GreaterThanOrEqual/index.md) |strings |
|  |  [location](../../../Rascal/Expressions/Values/Location/GreaterThanOrEqual/index.md) |locations |
|  |  [datetime](../../../Rascal/Expressions/Values/DateTime/GreaterThanOrEqual/index.md) |datetime |
|  |  [list](../../../Rascal/Expressions/Values/List/SuperList/index.md) |list |
|  |  [set](../../../Rascal/Expressions/Values/Set/SuperSet/index.md) |set |
|  |  [map](../../../Rascal/Expressions/Values/Map/SuperMap/index.md) |map |
| `Exp₁ > Exp₂` | | irreflexive greater-than |
|  | [number](../../../Rascal/Expressions/Values/Number/GreaterThan/index.md) | numbers |
|  |  [string](../../../Rascal/Expressions/Values/String/GreaterThan/index.md) |strings |
|  |   [location](../../../Rascal/Expressions/Values/Location/GreaterThan/index.md) |locations |
|  |  [datetime](../../../Rascal/Expressions/Values/DateTime/GreaterThan/index.md) |datetime |
|  |  [list](../../../Rascal/Expressions/Values/List/StrictSuperList/index.md) |list |
|  |  [set](../../../Rascal/Expressions/Values/Set/StrictSuperSet/index.md) |set |
|  |  [map](../../../Rascal/Expressions/Values/Map/StrictSuperMap/index.md) |map |
|  `Pat := Exp` | [Match](../../../Rascal/Expressions/Values/Boolean/Match/index.md) | Pattern matches value of expression |
|  `Pat !:= Exp` | [NoMatch](../../../Rascal/Expressions/Values/Boolean/NoMatch/index.md) | Pattern does not match value of expression |
| `Exp₁ == Exp₂` | | Equality | 
|  | [numbers](../../../Rascal/Expressions/Values/Number/Equal/index.md) | | 
|  |  [strings](../../../Rascal/Expressions/Values/String/Equal/index.md) | | 
|  |  [locations](../../../Rascal/Expressions/Values/Location/Equal/index.md) | | 
|  |  [datetime](../../../Rascal/Expressions/Values/DateTime/Equal/index.md) | |
|  |  [lists](../../../Rascal/Expressions/Values/List/Equal/index.md) | |
|  |  [sets](../../../Rascal/Expressions/Values/Set/Equal/index.md) | |
|  |  [maps](../../../Rascal/Expressions/Values/Map/Equal/index.md) | |
| `Exp₁ != Exp₂` | | Inequality |
|  | [numbers](../../../Rascal/Expressions/Values/Number/NotEqual/index.md) | |
|  |  [strings](../../../Rascal/Expressions/Values/String/NotEqual/index.md) | |
|  |  [locations](../../../Rascal/Expressions/Values/Location/NotEqual/index.md) | |
|  |  [datetime](../../../Rascal/Expressions/Values/DateTime/NotEqual/index.md) | |
|  |  [lists](../../../Rascal/Expressions/Values/List/NotEqual/index.md) | |
|  |  [sets](../../../Rascal/Expressions/Values/Set/NotEqual/index.md) | |
|  |  [maps](../../../Rascal/Expressions/Values/Map/NotEqual/index.md) | |
| `Exp₁ ? Exp₂` | [IfDefinedElse](../../../Rascal/Expressions/Values/Boolean/IfDefinedElse/index.md) | Value of expression when it is defined, otherwise alternative value |
| `Exp₁ ? Exp₂ : Exp₃` | [Conditional](../../../Rascal/Expressions/Values/Value/Conditional/index.md) | Conditional expression for all types |
| `Exp₁ ==> Exp₂` | [Implication](../../../Rascal/Expressions/Values/Boolean/Implication/index.md) |  Implication on Boolean values |
| `Exp₁ <==> Exp₂` | [Equivalence](../../../Rascal/Expressions/Values/Boolean/Equivalence/index.md) | Equivalence on Boolean values |
| `Exp₁ && Exp₂` | [And](../../../Rascal/Expressions/Values/Boolean/And/index.md) | And on Boolean values |
| `Exp₁ \|\| Exp₂` |  [Or](../../../Rascal/Expressions/Values/Boolean/Or/index.md) | Or on Boolean values |



