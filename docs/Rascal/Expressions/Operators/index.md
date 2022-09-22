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
| [Field selection](../../../Rascal/Expressions/Values/Location/FieldSelection), |
  [Field selection](../../../Rascal/Expressions/Values/DateTime/FieldSelection), |
  [Field selection](../../../Rascal/Expressions/Values/Tuple/FieldSelection), |
  [Field selection](../../../Rascal/Expressions/Values/Relation/FieldSelection), |
| Select named field from structured value |
| `Exp<sub>1</sub> [ Name = Exp<sub>2</sub> ]` |
| [Field assignment](../../../Rascal/Expressions/Operators/FieldAssignment) |
| Change value of named field of structured value |
| `Exp < field<sub>1</sub>, ... >` |
| [Field projection](../../../Rascal/Expressions/Operators/FieldProjection) |
| Select fields from relation or structured value |
| `Exp is Name` |
| [Library:Parse tree](../../../Library/ParseTree.md), |
  [Concrete syntax](../../../Rascal/Expressions/ConcreteSyntax), |
  [Algebraic Data Type](../../../Rascal/Declarations/AlgebraicDataType) |
| Returns true if and only if the constructor name of the value produced by _Exp_ is equal to _Name_ |
| `Exp has Name`  |
| [Library:Parse tree](../../../Library/ParseTree.md), |
  [Concrete syntax](../../../Rascal/Expressions/ConcreteSyntax), |
  [Algebraic Data Type](../../../Rascal/Declarations/AlgebraicDataType) |
| Returns true if and only if the constructor (node or parse tree) of the value produced by _Exp_ has any field labeled _Name_ |
| `Exp<sub>1</sub> [ Exp<sub>2</sub> , Exp<sub>3</sub>, .... ]` |
| [Subscription](../../../Rascal/Expressions/Values/List/Subscription), |
  [Subscription](../../../Rascal/Expressions/Values/Map/Subscription), |
  [Subscription](../../../Rascal/Expressions/Values/Tuple/Subscription), |
  [Subscription](../../../Rascal/Expressions/Values/Relation/Subscription) |
| Retrieve values for given index/key from list, map, tuple or relation. |
| `Exp<sub>1</sub> [ Exp<sub>2</sub> , Exp<sub>3</sub> .. Exp<sub>4</sub> ]` |
| [Slice](../../../Rascal/Expressions/Values/List/Slice), |
  [Slice](../../../Rascal/Expressions/Values/String/Slice), |
  [Slice](../../../Rascal/Expressions/Values/Node/Slice) |
| Retrieve a slice from a list, string, or node. |
|  `Exp?` |
| [Is defined](../../../Rascal/Expressions/Values/Boolean/IsDefined) |
| Test whether an expression has a defined value |
|  `!Exp` |
| [Negation](../../../Rascal/Expressions/Values/Boolean/Negation) |
| Negate a Boolean value |
| `- Exp` |
| [Negation](../../../Rascal/Expressions/Values/Number/Negation) |
| Negation of numbers |
| `Exp +` |
| [Transitive closure](../../../Rascal/Expressions/Values/Relation/TransitiveClosure), |
  [Transitive closure](../../../Rascal/Expressions/Values/ListRelation/TransitiveClosure), |
| Transitive closure on relation or list relation |
| `Exp *` |
| [Reflexive transitive closure](../../../Rascal/Expressions/Values/Relation/ReflexiveTransitiveClosure), |
  [Reflexive transitive closure](../../../Rascal/Expressions/Values/ListRelation/ReflexiveTransitiveClosure) |
| Reflexive transitive closure on relation or list relation |
| `Exp @ Name` |
| [Annotation](../../../Rascal/Declarations/Annotation) |
| Value of annotation _Name_ of _Exp_'s value |
| `Exp<sub>1</sub> [@ Name = Exp<sub>2</sub>]` |
| [Annotation](../../../Rascal/Declarations/Annotation) |
| Assign value of _Exp_<sub>2</sub> to annotation _Name_ of _Exp_<sub>1</sub>'s value |
| `Exp<sub>1</sub> o Exp<sub>2</sub>` |
| [Composition](../../../Rascal/Expressions/Values/Relation/Composition), |
  [Composition](../../../Rascal/Expressions/Values/Map/Composition) |
| _Exp_<sub>1</sub> and _Exp_<sub>2</sub> should evaluate to a relation or map; return their composition. Note: the letter "o" is thus a keyword |
| `Exp<sub>1</sub> / Exp<sub>2</sub>` |
| [Division](../../../Rascal/Expressions/Values/Number/Division) |
| Divide two numbers |
| `Exp<sub>1</sub> % Exp<sub>2</sub>` |
| [Remainder](../../../Rascal/Expressions/Values/Number/Remainder) |
| Remainder on numbers |
| `Exp<sub>1</sub> * Exp<sub>2</sub>` |
| [Multiplication](../../../Rascal/Expressions/Values/Number/Multiplication), |
  [Product](../../../Rascal/Expressions/Values/List/Product), |
  [Product](../../../Rascal/Expressions/Values/Set/Product), |
  [Cartesian product](../../../Rascal/Expressions/Values/Relation/CartesianProduct) |
| Multiply numbers; product of list, set, or relation |
| `Exp<sub>1</sub> & Exp<sub>2</sub>` |
| [Intersection](../../../Rascal/Expressions/Values/List/Intersection), |
  [Intersection](../../../Rascal/Expressions/Values/Set/Intersection), |
  [Intersection](../../../Rascal/Expressions/Values/Map/Intersection) |
| Intersection of list, set (including relation), or map |
| `Exp<sub>1</sub> + Exp<sub>2</sub>` |
| [Addition](../../../Rascal/Expressions/Values/Number/Addition), |
  [Concatenation](../../../Rascal/Expressions/Values/String/Concatenation), |
  [Concatenation](../../../Rascal/Expressions/Values/List/Concatenation), |
  [Insert](../../../Rascal/Expressions/Values/List/Insert),[Append](../../../Rascal/Expressions/Values/List/Append), |
  [Concatenation](../../../Rascal/Expressions/Values/Tuple/Concatenation), |
  [Union](../../../Rascal/Expressions/Values/Set/Union), |
  [Union](../../../Rascal/Expressions/Values/Map/Union), |
  [Add segment](../../../Rascal/Expressions/Values/Location/AddSegment) |
| Add numbers; concatenate string, list or tuple;  |
  union on set (including relation), or map; |
  concatenate location and string |
| `Exp<sub>1</sub> - Exp<sub>2</sub>` |
| [Subtraction](../../../Rascal/Expressions/Values/Number/Subtraction), |
  [Difference](../../../Rascal/Expressions/Values/List/Difference), |
  [Difference](../../../Rascal/Expressions/Values/Set/Difference), |
  [Difference](../../../Rascal/Expressions/Values/Map/Difference) |
| Subtract numbers; difference of list, set (including relation), or map |
| `Exp<sub>1</sub> join Exp<sub>2</sub>` |
| [Join](../../../Rascal/Expressions/Values/Relation/Join) |
| Join on relation |
| `Exp<sub>1</sub> in Exp<sub>2</sub>` |
| [in](../../../Rascal/Expressions/Values/List/in),  |
  [in](../../../Rascal/Expressions/Values/Set/in), |
  [in](../../../Rascal/Expressions/Values/Map/in) |
| Membership test for element in list, map, set (including relation) |
| `Exp<sub>1</sub> notin Exp<sub>2</sub>` |
| [notin](../../../Rascal/Expressions/Values/List/notin), |
  [notin](../../../Rascal/Expressions/Values/Set/notin), |
  [notin](../../../Rascal/Expressions/Values/Map/notin) |
| Negated membership test for element in  list, map, set (including relation) |
| `Exp<sub>1</sub> <= Exp<sub>2</sub>` |
| [Less than or equal](../../../Rascal/Expressions/Values/Number/LessThanOrEqual), |
  [Less than or equal](../../../Rascal/Expressions/Values/String/LessThanOrEqual), |
  [Less than or equal](../../../Rascal/Expressions/Values/Location/LessThanOrEqual), |
  [Less than or equal](../../../Rascal/Expressions/Values/DateTime/LessThanOrEqual), |
  [Sub list](../../../Rascal/Expressions/Values/List/SubList), |
  [Sub set](../../../Rascal/Expressions/Values/Set/SubSet), |
  [Sub map](../../../Rascal/Expressions/Values/Map/SubMap) |
| Less than or equal on all values |
| `Exp<sub>1</sub> < Exp<sub>2</sub>` |
| [Less than](../../../Rascal/Expressions/Values/Number/LessThan), |
  [Less than](../../../Rascal/Expressions/Values/String/LessThan), |
  [Less than](../../../Rascal/Expressions/Values/Location/LessThan), |
  [Less than](../../../Rascal/Expressions/Values/DateTime/LessThan), |
  [Strict sub list](../../../Rascal/Expressions/Values/List/StrictSubList), |
  [Strict sub set](../../../Rascal/Expressions/Values/Set/StrictSubSet), |
  [Strict sub map](../../../Rascal/Expressions/Values/Map/StrictSubMap) |
| Less than on all values |
| `Exp<sub>1</sub> >= Exp<sub>2</sub>` |
| [Greater than or equal](../../../Rascal/Expressions/Values/Number/GreaterThanOrEqual), |
  [Greater than or equal](../../../Rascal/Expressions/Values/String/GreaterThanOrEqual), |
  [Greater than or equal](../../../Rascal/Expressions/Values/Location/GreaterThanOrEqual), |
  [Greater than or equal](../../../Rascal/Expressions/Values/DateTime/GreaterThanOrEqual), |
  [Super list](../../../Rascal/Expressions/Values/List/SuperList), |
  [Super set](../../../Rascal/Expressions/Values/Set/SuperSet), |
  [Super map](../../../Rascal/Expressions/Values/Map/SuperMap) |
| Greater than or equal on all values |
| `Exp<sub>1</sub> > Exp<sub>2</sub>` |
| [Greater than](../../../Rascal/Expressions/Values/Number/GreaterThan), |
  [Greater than](../../../Rascal/Expressions/Values/String/GreaterThan), |
  [Greater than](../../../Rascal/Expressions/Values/Location/GreaterThan), |
  [Greater than](../../../Rascal/Expressions/Values/DateTime/GreaterThan), |
  [Strict super list](../../../Rascal/Expressions/Values/List/StrictSuperList), |
  [Strict super set](../../../Rascal/Expressions/Values/Set/StrictSuperSet), |
  [Strict super map](../../../Rascal/Expressions/Values/Map/StrictSuperMap) |
| Greater than on all values. |
|  `Pat := Exp` |
| [Match](../../../Rascal/Expressions/Values/Boolean/Match) |
| Pattern matches value of expression |
|  `Pat !:= Exp` |
| [No match](../../../Rascal/Expressions/Values/Boolean/NoMatch) |
| Pattern does not match value of expression |
| `Exp<sub>1</sub> == Exp<sub>2</sub>` |
| [Equal](../../../Rascal/Expressions/Values/Number/Equal), |
  [Equal](../../../Rascal/Expressions/Values/String/Equal), |
  [Equal](../../../Rascal/Expressions/Values/Location/Equal), |
  [Equal](../../../Rascal/Expressions/Values/DateTime/Equal), |
  [Equal](../../../Rascal/Expressions/Values/List/Equal), |
  [Equal](../../../Rascal/Expressions/Values/Set/Equal), |
  [Equal](../../../Rascal/Expressions/Values/Map/Equal) |
| Equality on all values |
| `Exp<sub>1</sub> != Exp<sub>2</sub>` |
| [Not equal](../../../Rascal/Expressions/Values/Number/NotEqual), |
  [Not equal](../../../Rascal/Expressions/Values/String/NotEqual), |
  [Not equal](../../../Rascal/Expressions/Values/Location/NotEqual), |
  [Not equal](../../../Rascal/Expressions/Values/DateTime/NotEqual), |
  [Not equal](../../../Rascal/Expressions/Values/List/NotEqual), |
  [Not equal](../../../Rascal/Expressions/Values/Set/NotEqual), |
  [Not equal](../../../Rascal/Expressions/Values/Map/NotEqual) |
| Inequality on all values |
| `Exp<sub>1</sub> ? Exp<sub>2</sub>` |
| [If defined else](../../../Rascal/Expressions/Values/Boolean/IfDefinedElse) |
| Value of expression when it is defined, otherwise alternative value |
| `Exp<sub>1</sub> ? Exp<sub>2</sub> : Exp<sub>3</sub>` |
| [Conditional](../../../Rascal/Expressions/Values/Value/Conditional) |
| Conditional expression for all types |
| `Exp<sub>1</sub> ==> Exp<sub>2</sub>` |
| [Implication](../../../Rascal/Expressions/Values/Boolean/Implication) |
| Implication on Boolean values |
| `Exp<sub>1</sub> <==> Exp<sub>2</sub>` |
| [Equivalence](../../../Rascal/Expressions/Values/Boolean/Equivalence) |
| Equivalence on Boolean values |
| `Exp<sub>1</sub> && Exp<sub>2</sub>` |
| [And](../../../Rascal/Expressions/Values/Boolean/And) |
| And on Boolean values |
| `Exp<sub>1</sub> \|\| Exp<sub>2</sub>` |
| [Or](../../../Rascal/Expressions/Values/Boolean/Or) |
| Or on Boolean values |



