---
title: Operators
---

#### Synopsis

The Rascal operators.

#### Description

An _operator expression_ consists of an operator and one or more operands. The evaluation order of the operands depends on the operator. 
The operator is applied to the operands and the resulting value (or values in some cases) is the result of the operator expression. 

All operators are summarized in the following table. They are listed from highest precedence
to lowest precedence. In other words, operators listed earlier in the table bind stronger.
 

| Operator | See  | Short Description |
| ---      | ---  | ---               |
| `Exp . Name` |
| [FieldSelection](../../../Rascal/Expressions/Values/Location/FieldSelection/index.md), |
  [FieldSelection](../../../Rascal/Expressions/Values/DateTime/FieldSelection/index.md), |
  [FieldSelection](../../../Rascal/Expressions/Values/Tuple/FieldSelection/index.md), |
  [FieldSelection](../../../Rascal/Expressions/Values/Relation/FieldSelection/index.md), |
| Select named field from structured value |
| `Exp₁ [ Name = Exp₂ ]` |
| [field assignment](../../../Rascal/Expressions/Operators/FieldAssignment/index.md) |
| Change value of named field of structured value |
| `Exp < field₁, ... >` |
| [field projection](../../../Rascal/Expressions/Operators/FieldProjection/index.md) |
| Select fields from relation or structured value |
| `Exp is Name` |
| [parse tree](../../../Library/ParseTree.md), |
  [ConcreteSyntax](../../../Rascal/Expressions/ConcreteSyntax/index.md), |
  [Algebraic Data Type](../../../Rascal/Declarations/AlgebraicDataType/index.md) |
| Returns true if and only if the constructor name of the value produced by _Exp_ is equal to _Name_ |
| `Exp has Name`  |
| [parse tree](../../../Library/ParseTree.md), |
  [ConcreteSyntax](../../../Rascal/Expressions/ConcreteSyntax/index.md), |
  [Algebraic Data Type](../../../Rascal/Declarations/AlgebraicDataType/index.md) |
| Returns true if and only if the constructor (node or parse tree) of the value produced by _Exp_ has any field labeled _Name_ |
| `Exp₁ [ Exp₂ , Exp₃, .... ]` |
| [Subscription](../../../Rascal/Expressions/Values/List/Subscription/index.md), |
  [Subscription](../../../Rascal/Expressions/Values/Map/Subscription/index.md), |
  [Subscription](../../../Rascal/Expressions/Values/Tuple/Subscription/index.md), |
  [Subscription](../../../Rascal/Expressions/Values/Relation/Subscription/index.md) |
| Retrieve values for given index/key from list, map, tuple or relation. |
| `Exp₁ [ Exp₂ , Exp₃ .. Exp₄ ]` |
| [Slice](../../../Rascal/Expressions/Values/List/Slice/index.md), |
  [Slice](../../../Rascal/Expressions/Values/String/Slice/index.md), |
  [Slice](../../../Rascal/Expressions/Values/Node/Slice/index.md) |
| Retrieve a slice from a list, string, or node. |
|  `Exp?` |
| [IsDefined](../../../Rascal/Expressions/Values/Boolean/IsDefined/index.md) |
| Test whether an expression has a defined value |
|  `!Exp` |
| [Negation](../../../Rascal/Expressions/Values/Boolean/Negation/index.md) |
| Negate a Boolean value |
| `- Exp` |
| [Negation](../../../Rascal/Expressions/Values/Number/Negation/index.md) |
| Negation of numbers |
| `Exp +` |
| [TransitiveClosure](../../../Rascal/Expressions/Values/Relation/TransitiveClosure/index.md), |
  [TransitiveClosure](../../../Rascal/Expressions/Values/ListRelation/TransitiveClosure/index.md), |
| Transitive closure on relation or list relation |
| `Exp *` |
| [ReflexiveTransitiveClosure](../../../Rascal/Expressions/Values/Relation/ReflexiveTransitiveClosure/index.md), |
  [ReflexiveTransitiveClosure](../../../Rascal/Expressions/Values/ListRelation/ReflexiveTransitiveClosure/index.md) |
| Reflexive transitive closure on relation or list relation |
| `Exp @ Name` |
| [Annotation](../../../Rascal/Declarations/Annotation/index.md) |
| Value of annotation _Name_ of _Exp_'s value |
| `Exp₁ [@ Name = Exp₂]` |
| [Annotation](../../../Rascal/Declarations/Annotation/index.md) |
| Assign value of _Exp_₂ to annotation _Name_ of _Exp_₁'s value |
| `Exp₁ o Exp₂` |
| [Composition](../../../Rascal/Expressions/Values/Relation/Composition/index.md), |
  [Composition](../../../Rascal/Expressions/Values/Map/Composition/index.md) |
| _Exp_₁ and _Exp_₂ should evaluate to a relation or map; return their composition. Note: the letter "o" is thus a keyword |
| `Exp₁ / Exp₂` |
| [Division](../../../Rascal/Expressions/Values/Number/Division/index.md) |
| Divide two numbers |
| `Exp₁ % Exp₂` |
| [Remainder](../../../Rascal/Expressions/Values/Number/Remainder/index.md) |
| Remainder on numbers |
| `Exp₁ * Exp₂` |
| [Multiplication](../../../Rascal/Expressions/Values/Number/Multiplication/index.md), |
  [Product](../../../Rascal/Expressions/Values/List/Product/index.md), |
  [Product](../../../Rascal/Expressions/Values/Set/Product/index.md), |
  [CartesianProduct](../../../Rascal/Expressions/Values/Relation/CartesianProduct/index.md) |
| Multiply numbers; product of list, set, or relation |
| `Exp₁ & Exp₂` |
| [Intersection](../../../Rascal/Expressions/Values/List/Intersection/index.md), |
  [Intersection](../../../Rascal/Expressions/Values/Set/Intersection/index.md), |
  [Intersection](../../../Rascal/Expressions/Values/Map/Intersection/index.md) |
| Intersection of list, set (including relation), or map |
| `Exp₁ + Exp₂` |
| [Addition](../../../Rascal/Expressions/Values/Number/Addition/index.md), |
  [Concatenation](../../../Rascal/Expressions/Values/String/Concatenation/index.md), |
  [Concatenation](../../../Rascal/Expressions/Values/List/Concatenation/index.md), |
  [Insert](../../../Rascal/Expressions/Values/List/Insert/index.md),[Append](../../../Rascal/Expressions/Values/List/Append/index.md), |
  [Concatenation](../../../Rascal/Expressions/Values/Tuple/Concatenation/index.md), |
  [Union](../../../Rascal/Expressions/Values/Set/Union/index.md), |
  [Union](../../../Rascal/Expressions/Values/Map/Union/index.md), |
  [AddSegment](../../../Rascal/Expressions/Values/Location/AddSegment/index.md) |
| Add numbers; concatenate string, list or tuple;  |
  union on set (including relation), or map; |
  concatenate location and string |
| `Exp₁ - Exp₂` |
| [Subtraction](../../../Rascal/Expressions/Values/Number/Subtraction/index.md), |
  [Difference](../../../Rascal/Expressions/Values/List/Difference/index.md), |
  [Difference](../../../Rascal/Expressions/Values/Set/Difference/index.md), |
  [Difference](../../../Rascal/Expressions/Values/Map/Difference/index.md) |
| Subtract numbers; difference of list, set (including relation), or map |
| `Exp₁ join Exp₂` |
| [Join](../../../Rascal/Expressions/Values/Relation/Join/index.md) |
| Join on relation |
| `Exp₁ in Exp₂` |
| [in](../../../Rascal/Expressions/Values/List/in/index.md),  |
  [in](../../../Rascal/Expressions/Values/Set/in/index.md), |
  [in](../../../Rascal/Expressions/Values/Map/in/index.md) |
| Membership test for element in list, map, set (including relation) |
| `Exp₁ notin Exp₂` |
| [notin](../../../Rascal/Expressions/Values/List/notin/index.md), |
  [notin](../../../Rascal/Expressions/Values/Set/notin/index.md), |
  [notin](../../../Rascal/Expressions/Values/Map/notin/index.md) |
| Negated membership test for element in  list, map, set (including relation) |
| `Exp₁ <= Exp₂` |
| [LessThanOrEqual](../../../Rascal/Expressions/Values/Number/LessThanOrEqual/index.md), |
  [LessThanOrEqual](../../../Rascal/Expressions/Values/String/LessThanOrEqual/index.md), |
  [LessThanOrEqual](../../../Rascal/Expressions/Values/Location/LessThanOrEqual/index.md), |
  [LessThanOrEqual](../../../Rascal/Expressions/Values/DateTime/LessThanOrEqual/index.md), |
  [SubList](../../../Rascal/Expressions/Values/List/SubList/index.md), |
  [SubSet](../../../Rascal/Expressions/Values/Set/SubSet/index.md), |
  [SubMap](../../../Rascal/Expressions/Values/Map/SubMap/index.md) |
| Less than or equal on all values |
| `Exp₁ < Exp₂` |
| [LessThan](../../../Rascal/Expressions/Values/Number/LessThan/index.md), |
  [LessThan](../../../Rascal/Expressions/Values/String/LessThan/index.md), |
  [LessThan](../../../Rascal/Expressions/Values/Location/LessThan/index.md), |
  [LessThan](../../../Rascal/Expressions/Values/DateTime/LessThan/index.md), |
  [StrictSubList](../../../Rascal/Expressions/Values/List/StrictSubList/index.md), |
  [StrictSubSet](../../../Rascal/Expressions/Values/Set/StrictSubSet/index.md), |
  [StrictSubMap](../../../Rascal/Expressions/Values/Map/StrictSubMap/index.md) |
| Less than on all values |
| `Exp₁ >= Exp₂` |
| [GreaterThanOrEqual](../../../Rascal/Expressions/Values/Number/GreaterThanOrEqual/index.md), |
  [GreaterThanOrEqual](../../../Rascal/Expressions/Values/String/GreaterThanOrEqual/index.md), |
  [GreaterThanOrEqual](../../../Rascal/Expressions/Values/Location/GreaterThanOrEqual/index.md), |
  [GreaterThanOrEqual](../../../Rascal/Expressions/Values/DateTime/GreaterThanOrEqual/index.md), |
  [SuperList](../../../Rascal/Expressions/Values/List/SuperList/index.md), |
  [SuperSet](../../../Rascal/Expressions/Values/Set/SuperSet/index.md), |
  [SuperMap](../../../Rascal/Expressions/Values/Map/SuperMap/index.md) |
| Greater than or equal on all values |
| `Exp₁ > Exp₂` |
| [GreaterThan](../../../Rascal/Expressions/Values/Number/GreaterThan/index.md), |
  [GreaterThan](../../../Rascal/Expressions/Values/String/GreaterThan/index.md), |
  [GreaterThan](../../../Rascal/Expressions/Values/Location/GreaterThan/index.md), |
  [GreaterThan](../../../Rascal/Expressions/Values/DateTime/GreaterThan/index.md), |
  [StrictSuperList](../../../Rascal/Expressions/Values/List/StrictSuperList/index.md), |
  [StrictSuperSet](../../../Rascal/Expressions/Values/Set/StrictSuperSet/index.md), |
  [StrictSuperMap](../../../Rascal/Expressions/Values/Map/StrictSuperMap/index.md) |
| Greater than on all values. |
|  `Pat := Exp` |
| [Match](../../../Rascal/Expressions/Values/Boolean/Match/index.md) |
| Pattern matches value of expression |
|  `Pat !:= Exp` |
| [NoMatch](../../../Rascal/Expressions/Values/Boolean/NoMatch/index.md) |
| Pattern does not match value of expression |
| `Exp₁ == Exp₂` |
| [Equal](../../../Rascal/Expressions/Values/Number/Equal/index.md), |
  [Equal](../../../Rascal/Expressions/Values/String/Equal/index.md), |
  [Equal](../../../Rascal/Expressions/Values/Location/Equal/index.md), |
  [Equal](../../../Rascal/Expressions/Values/DateTime/Equal/index.md), |
  [Equal](../../../Rascal/Expressions/Values/List/Equal/index.md), |
  [Equal](../../../Rascal/Expressions/Values/Set/Equal/index.md), |
  [Equal](../../../Rascal/Expressions/Values/Map/Equal/index.md) |
| Equality on all values |
| `Exp₁ != Exp₂` |
| [NotEqual](../../../Rascal/Expressions/Values/Number/NotEqual/index.md), |
  [NotEqual](../../../Rascal/Expressions/Values/String/NotEqual/index.md), |
  [NotEqual](../../../Rascal/Expressions/Values/Location/NotEqual/index.md), |
  [NotEqual](../../../Rascal/Expressions/Values/DateTime/NotEqual/index.md), |
  [NotEqual](../../../Rascal/Expressions/Values/List/NotEqual/index.md), |
  [NotEqual](../../../Rascal/Expressions/Values/Set/NotEqual/index.md), |
  [NotEqual](../../../Rascal/Expressions/Values/Map/NotEqual/index.md) |
| Inequality on all values |
| `Exp₁ ? Exp₂` |
| [IfDefinedElse](../../../Rascal/Expressions/Values/Boolean/IfDefinedElse/index.md) |
| Value of expression when it is defined, otherwise alternative value |
| `Exp₁ ? Exp₂ : Exp₃` |
| [Conditional](../../../Rascal/Expressions/Values/Value/Conditional/index.md) |
| Conditional expression for all types |
| `Exp₁ ==> Exp₂` |
| [Implication](../../../Rascal/Expressions/Values/Boolean/Implication/index.md) |
| Implication on Boolean values |
| `Exp₁ <==> Exp₂` |
| [Equivalence](../../../Rascal/Expressions/Values/Boolean/Equivalence/index.md) |
| Equivalence on Boolean values |
| `Exp₁ && Exp₂` |
| [And](../../../Rascal/Expressions/Values/Boolean/And/index.md) |
| And on Boolean values |
| `Exp₁ \|\| Exp₂` |
| [Or](../../../Rascal/Expressions/Values/Boolean/Or/index.md) |
| Or on Boolean values |



