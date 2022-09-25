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
| [FieldSelection](../../../Rascal/Expressions/Values/Location/FieldSelection/), |
  [FieldSelection](../../../Rascal/Expressions/Values/DateTime/FieldSelection/), |
  [FieldSelection](../../../Rascal/Expressions/Values/Tuple/FieldSelection/), |
  [FieldSelection](../../../Rascal/Expressions/Values/Relation/FieldSelection/), |
| Select named field from structured value |
| `Exp~1~ [ Name = Exp~2~ ]` |
| [field assignment](../../../Rascal/Expressions/Operators/FieldAssignment/) |
| Change value of named field of structured value |
| `Exp < field~1~, ... >` |
| [field projection](../../../Rascal/Expressions/Operators/FieldProjection/) |
| Select fields from relation or structured value |
| `Exp is Name` |
| [parse tree](../../../Library/ParseTree.md/), |
  [ConcreteSyntax](../../../Rascal/Expressions/ConcreteSyntax/), |
  [Algebraic Data Type](../../../Rascal/Declarations/AlgebraicDataType/) |
| Returns true if and only if the constructor name of the value produced by _Exp_ is equal to _Name_ |
| `Exp has Name`  |
| [parse tree](../../../Library/ParseTree.md/), |
  [ConcreteSyntax](../../../Rascal/Expressions/ConcreteSyntax/), |
  [Algebraic Data Type](../../../Rascal/Declarations/AlgebraicDataType/) |
| Returns true if and only if the constructor (node or parse tree) of the value produced by _Exp_ has any field labeled _Name_ |
| `Exp~1~ [ Exp~2~ , Exp~3~, .... ]` |
| [Subscription](../../../Rascal/Expressions/Values/List/Subscription/), |
  [Subscription](../../../Rascal/Expressions/Values/Map/Subscription/), |
  [Subscription](../../../Rascal/Expressions/Values/Tuple/Subscription/), |
  [Subscription](../../../Rascal/Expressions/Values/Relation/Subscription/) |
| Retrieve values for given index/key from list, map, tuple or relation. |
| `Exp~1~ [ Exp~2~ , Exp~3~ .. Exp~4~ ]` |
| [Slice](../../../Rascal/Expressions/Values/List/Slice/), |
  [Slice](../../../Rascal/Expressions/Values/String/Slice/), |
  [Slice](../../../Rascal/Expressions/Values/Node/Slice/) |
| Retrieve a slice from a list, string, or node. |
|  `Exp?` |
| [IsDefined](../../../Rascal/Expressions/Values/Boolean/IsDefined/) |
| Test whether an expression has a defined value |
|  `!Exp` |
| [Negation](../../../Rascal/Expressions/Values/Boolean/Negation/) |
| Negate a Boolean value |
| `- Exp` |
| [Negation](../../../Rascal/Expressions/Values/Number/Negation/) |
| Negation of numbers |
| `Exp +` |
| [TransitiveClosure](../../../Rascal/Expressions/Values/Relation/TransitiveClosure/), |
  [TransitiveClosure](../../../Rascal/Expressions/Values/ListRelation/TransitiveClosure/), |
| Transitive closure on relation or list relation |
| `Exp *` |
| [ReflexiveTransitiveClosure](../../../Rascal/Expressions/Values/Relation/ReflexiveTransitiveClosure/), |
  [ReflexiveTransitiveClosure](../../../Rascal/Expressions/Values/ListRelation/ReflexiveTransitiveClosure/) |
| Reflexive transitive closure on relation or list relation |
| `Exp @ Name` |
| [Annotation](../../../Rascal/Declarations/Annotation/) |
| Value of annotation _Name_ of _Exp_'s value |
| `Exp~1~ [@ Name = Exp~2~]` |
| [Annotation](../../../Rascal/Declarations/Annotation/) |
| Assign value of _Exp_~2~ to annotation _Name_ of _Exp_~1~'s value |
| `Exp~1~ o Exp~2~` |
| [Composition](../../../Rascal/Expressions/Values/Relation/Composition/), |
  [Composition](../../../Rascal/Expressions/Values/Map/Composition/) |
| _Exp_~1~ and _Exp_~2~ should evaluate to a relation or map; return their composition. Note: the letter "o" is thus a keyword |
| `Exp~1~ / Exp~2~` |
| [Division](../../../Rascal/Expressions/Values/Number/Division/) |
| Divide two numbers |
| `Exp~1~ % Exp~2~` |
| [Remainder](../../../Rascal/Expressions/Values/Number/Remainder/) |
| Remainder on numbers |
| `Exp~1~ * Exp~2~` |
| [Multiplication](../../../Rascal/Expressions/Values/Number/Multiplication/), |
  [Product](../../../Rascal/Expressions/Values/List/Product/), |
  [Product](../../../Rascal/Expressions/Values/Set/Product/), |
  [CartesianProduct](../../../Rascal/Expressions/Values/Relation/CartesianProduct/) |
| Multiply numbers; product of list, set, or relation |
| `Exp~1~ & Exp~2~` |
| [Intersection](../../../Rascal/Expressions/Values/List/Intersection/), |
  [Intersection](../../../Rascal/Expressions/Values/Set/Intersection/), |
  [Intersection](../../../Rascal/Expressions/Values/Map/Intersection/) |
| Intersection of list, set (including relation), or map |
| `Exp~1~ + Exp~2~` |
| [Addition](../../../Rascal/Expressions/Values/Number/Addition/), |
  [Concatenation](../../../Rascal/Expressions/Values/String/Concatenation/), |
  [Concatenation](../../../Rascal/Expressions/Values/List/Concatenation/), |
  [Insert](../../../Rascal/Expressions/Values/List/Insert/),[Append](../../../Rascal/Expressions/Values/List/Append/), |
  [Concatenation](../../../Rascal/Expressions/Values/Tuple/Concatenation/), |
  [Union](../../../Rascal/Expressions/Values/Set/Union/), |
  [Union](../../../Rascal/Expressions/Values/Map/Union/), |
  [AddSegment](../../../Rascal/Expressions/Values/Location/AddSegment/) |
| Add numbers; concatenate string, list or tuple;  |
  union on set (including relation), or map; |
  concatenate location and string |
| `Exp~1~ - Exp~2~` |
| [Subtraction](../../../Rascal/Expressions/Values/Number/Subtraction/), |
  [Difference](../../../Rascal/Expressions/Values/List/Difference/), |
  [Difference](../../../Rascal/Expressions/Values/Set/Difference/), |
  [Difference](../../../Rascal/Expressions/Values/Map/Difference/) |
| Subtract numbers; difference of list, set (including relation), or map |
| `Exp~1~ join Exp~2~` |
| [Join](../../../Rascal/Expressions/Values/Relation/Join/) |
| Join on relation |
| `Exp~1~ in Exp~2~` |
| [in](../../../Rascal/Expressions/Values/List/in/),  |
  [in](../../../Rascal/Expressions/Values/Set/in/), |
  [in](../../../Rascal/Expressions/Values/Map/in/) |
| Membership test for element in list, map, set (including relation) |
| `Exp~1~ notin Exp~2~` |
| [notin](../../../Rascal/Expressions/Values/List/notin/), |
  [notin](../../../Rascal/Expressions/Values/Set/notin/), |
  [notin](../../../Rascal/Expressions/Values/Map/notin/) |
| Negated membership test for element in  list, map, set (including relation) |
| `Exp~1~ <= Exp~2~` |
| [LessThanOrEqual](../../../Rascal/Expressions/Values/Number/LessThanOrEqual/), |
  [LessThanOrEqual](../../../Rascal/Expressions/Values/String/LessThanOrEqual/), |
  [LessThanOrEqual](../../../Rascal/Expressions/Values/Location/LessThanOrEqual/), |
  [LessThanOrEqual](../../../Rascal/Expressions/Values/DateTime/LessThanOrEqual/), |
  [SubList](../../../Rascal/Expressions/Values/List/SubList/), |
  [SubSet](../../../Rascal/Expressions/Values/Set/SubSet/), |
  [SubMap](../../../Rascal/Expressions/Values/Map/SubMap/) |
| Less than or equal on all values |
| `Exp~1~ < Exp~2~` |
| [LessThan](../../../Rascal/Expressions/Values/Number/LessThan/), |
  [LessThan](../../../Rascal/Expressions/Values/String/LessThan/), |
  [LessThan](../../../Rascal/Expressions/Values/Location/LessThan/), |
  [LessThan](../../../Rascal/Expressions/Values/DateTime/LessThan/), |
  [StrictSubList](../../../Rascal/Expressions/Values/List/StrictSubList/), |
  [StrictSubSet](../../../Rascal/Expressions/Values/Set/StrictSubSet/), |
  [StrictSubMap](../../../Rascal/Expressions/Values/Map/StrictSubMap/) |
| Less than on all values |
| `Exp~1~ >= Exp~2~` |
| [GreaterThanOrEqual](../../../Rascal/Expressions/Values/Number/GreaterThanOrEqual/), |
  [GreaterThanOrEqual](../../../Rascal/Expressions/Values/String/GreaterThanOrEqual/), |
  [GreaterThanOrEqual](../../../Rascal/Expressions/Values/Location/GreaterThanOrEqual/), |
  [GreaterThanOrEqual](../../../Rascal/Expressions/Values/DateTime/GreaterThanOrEqual/), |
  [SuperList](../../../Rascal/Expressions/Values/List/SuperList/), |
  [SuperSet](../../../Rascal/Expressions/Values/Set/SuperSet/), |
  [SuperMap](../../../Rascal/Expressions/Values/Map/SuperMap/) |
| Greater than or equal on all values |
| `Exp~1~ > Exp~2~` |
| [GreaterThan](../../../Rascal/Expressions/Values/Number/GreaterThan/), |
  [GreaterThan](../../../Rascal/Expressions/Values/String/GreaterThan/), |
  [GreaterThan](../../../Rascal/Expressions/Values/Location/GreaterThan/), |
  [GreaterThan](../../../Rascal/Expressions/Values/DateTime/GreaterThan/), |
  [StrictSuperList](../../../Rascal/Expressions/Values/List/StrictSuperList/), |
  [StrictSuperSet](../../../Rascal/Expressions/Values/Set/StrictSuperSet/), |
  [StrictSuperMap](../../../Rascal/Expressions/Values/Map/StrictSuperMap/) |
| Greater than on all values. |
|  `Pat := Exp` |
| [Match](../../../Rascal/Expressions/Values/Boolean/Match/) |
| Pattern matches value of expression |
|  `Pat !:= Exp` |
| [NoMatch](../../../Rascal/Expressions/Values/Boolean/NoMatch/) |
| Pattern does not match value of expression |
| `Exp~1~ == Exp~2~` |
| [Equal](../../../Rascal/Expressions/Values/Number/Equal/), |
  [Equal](../../../Rascal/Expressions/Values/String/Equal/), |
  [Equal](../../../Rascal/Expressions/Values/Location/Equal/), |
  [Equal](../../../Rascal/Expressions/Values/DateTime/Equal/), |
  [Equal](../../../Rascal/Expressions/Values/List/Equal/), |
  [Equal](../../../Rascal/Expressions/Values/Set/Equal/), |
  [Equal](../../../Rascal/Expressions/Values/Map/Equal/) |
| Equality on all values |
| `Exp~1~ != Exp~2~` |
| [NotEqual](../../../Rascal/Expressions/Values/Number/NotEqual/), |
  [NotEqual](../../../Rascal/Expressions/Values/String/NotEqual/), |
  [NotEqual](../../../Rascal/Expressions/Values/Location/NotEqual/), |
  [NotEqual](../../../Rascal/Expressions/Values/DateTime/NotEqual/), |
  [NotEqual](../../../Rascal/Expressions/Values/List/NotEqual/), |
  [NotEqual](../../../Rascal/Expressions/Values/Set/NotEqual/), |
  [NotEqual](../../../Rascal/Expressions/Values/Map/NotEqual/) |
| Inequality on all values |
| `Exp~1~ ? Exp~2~` |
| [IfDefinedElse](../../../Rascal/Expressions/Values/Boolean/IfDefinedElse/) |
| Value of expression when it is defined, otherwise alternative value |
| `Exp~1~ ? Exp~2~ : Exp~3~` |
| [Conditional](../../../Rascal/Expressions/Values/Value/Conditional/) |
| Conditional expression for all types |
| `Exp~1~ ==> Exp~2~` |
| [Implication](../../../Rascal/Expressions/Values/Boolean/Implication/) |
| Implication on Boolean values |
| `Exp~1~ <==> Exp~2~` |
| [Equivalence](../../../Rascal/Expressions/Values/Boolean/Equivalence/) |
| Equivalence on Boolean values |
| `Exp~1~ && Exp~2~` |
| [And](../../../Rascal/Expressions/Values/Boolean/And/) |
| And on Boolean values |
| `Exp~1~ \|\| Exp~2~` |
| [Or](../../../Rascal/Expressions/Values/Boolean/Or/) |
| Or on Boolean values |



