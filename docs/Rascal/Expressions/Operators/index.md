---
title: Operators
---

#### Synopsis

The Rascal operators.

#### Syntax

#### Types

#### Function

#### Description

An _operator expression_ consists of an operator and one or more operands. The evaluation order of the operands depends on the operator. 
The operator is applied to the operands and the resulting value (or values in some cases) is the result of the operator expression. 

All operators are summarized in the following table. They are listed from highest precedence
to lowest precedence. In other words, operators listed earlier in the table bind stronger.
 

| Operator | See  | Short Description |
| ---      | ---  | ---               |
| `Exp . Name` |
| [Field selection](/docs/Rascal/Expressions/Values/Location/FieldSelection), |
  [Field selection](/docs/Rascal/Expressions/Values/DateTime/FieldSelection), |
  [Field selection](/docs/Rascal/Expressions/Values/Tuple/FieldSelection), |
  [Field selection](/docs/Rascal/Expressions/Values/Relation/FieldSelection), |
| Select named field from structured value |
| `Exp<sub>1</sub> [ Name = Exp<sub>2</sub> ]` |
| [Field assignment](/docs/Rascal/Expressions/Operators/FieldAssignment) |
| Change value of named field of structured value |
| `Exp < field<sub>1</sub>, ... >` |
| [Field projection](/docs/Rascal/Expressions/Operators/FieldProjection) |
| Select fields from relation or structured value |
| `Exp is Name` |
| [Library:Parse tree](/docs/Library/ParseTree), |
  [Concrete syntax](/docs/Rascal/Expressions/ConcreteSyntax), |
  [Algebraic Data Type](/docs/Rascal/Declarations/AlgebraicDataType) |
| Returns true if and only if the constructor name of the value produced by _Exp_ is equal to _Name_ |
| `Exp has Name`  |
| [Library:Parse tree](/docs/Library/ParseTree), |
  [Concrete syntax](/docs/Rascal/Expressions/ConcreteSyntax), |
  [Algebraic Data Type](/docs/Rascal/Declarations/AlgebraicDataType) |
| Returns true if and only if the constructor (node or parse tree) of the value produced by _Exp_ has any field labeled _Name_ |
| `Exp<sub>1</sub> [ Exp<sub>2</sub> , Exp<sub>3</sub>, .... ]` |
| [Subscription](/docs/Rascal/Expressions/Values/List/Subscription), |
  [Subscription](/docs/Rascal/Expressions/Values/Map/Subscription), |
  [Subscription](/docs/Rascal/Expressions/Values/Tuple/Subscription), |
  [Subscription](/docs/Rascal/Expressions/Values/Relation/Subscription) |
| Retrieve values for given index/key from list, map, tuple or relation. |
| `Exp<sub>1</sub> [ Exp<sub>2</sub> , Exp<sub>3</sub> .. Exp<sub>4</sub> ]` |
| [Slice](/docs/Rascal/Expressions/Values/List/Slice), |
  [Slice](/docs/Rascal/Expressions/Values/String/Slice), |
  [Slice](/docs/Rascal/Expressions/Values/Node/Slice) |
| Retrieve a slice from a list, string, or node. |
|  `Exp?` |
| [Is defined](/docs/Rascal/Expressions/Values/Boolean/IsDefined) |
| Test whether an expression has a defined value |
|  `!Exp` |
| [Negation](/docs/Rascal/Expressions/Values/Boolean/Negation) |
| Negate a Boolean value |
| `- Exp` |
| [Negation](/docs/Rascal/Expressions/Values/Number/Negation) |
| Negation of numbers |
| `Exp +` |
| [Transitive closure](/docs/Rascal/Expressions/Values/Relation/TransitiveClosure), |
  [Transitive closure](/docs/Rascal/Expressions/Values/ListRelation/TransitiveClosure), |
| Transitive closure on relation or list relation |
| `Exp *` |
| [Reflexive transitive closure](/docs/Rascal/Expressions/Values/Relation/ReflexiveTransitiveClosure), |
  [Reflexive transitive closure](/docs/Rascal/Expressions/Values/ListRelation/ReflexiveTransitiveClosure) |
| Reflexive transitive closure on relation or list relation |
| `Exp @ Name` |
| [Annotation](/docs/Rascal/Declarations/Annotation) |
| Value of annotation _Name_ of _Exp_'s value |
| `Exp<sub>1</sub> [@ Name = Exp<sub>2</sub>]` |
| [Annotation](/docs/Rascal/Declarations/Annotation) |
| Assign value of _Exp_<sub>2</sub> to annotation _Name_ of _Exp_<sub>1</sub>'s value |
| `Exp<sub>1</sub> o Exp<sub>2</sub>` |
| [Composition](/docs/Rascal/Expressions/Values/Relation/Composition), |
  [Composition](/docs/Rascal/Expressions/Values/Map/Composition) |
| _Exp_<sub>1</sub> and _Exp_<sub>2</sub> should evaluate to a relation or map; return their composition. Note: the letter "o" is thus a keyword |
| `Exp<sub>1</sub> / Exp<sub>2</sub>` |
| [Division](/docs/Rascal/Expressions/Values/Number/Division) |
| Divide two numbers |
| `Exp<sub>1</sub> % Exp<sub>2</sub>` |
| [Remainder](/docs/Rascal/Expressions/Values/Number/Remainder) |
| Remainder on numbers |
| `Exp<sub>1</sub> * Exp<sub>2</sub>` |
| [Multiplication](/docs/Rascal/Expressions/Values/Number/Multiplication), |
  [Product](/docs/Rascal/Expressions/Values/List/Product), |
  [Product](/docs/Rascal/Expressions/Values/Set/Product), |
  [Cartesian product](/docs/Rascal/Expressions/Values/Relation/CartesianProduct) |
| Multiply numbers; product of list, set, or relation |
| `Exp<sub>1</sub> & Exp<sub>2</sub>` |
| [Intersection](/docs/Rascal/Expressions/Values/List/Intersection), |
  [Intersection](/docs/Rascal/Expressions/Values/Set/Intersection), |
  [Intersection](/docs/Rascal/Expressions/Values/Map/Intersection) |
| Intersection of list, set (including relation), or map |
| `Exp<sub>1</sub> + Exp<sub>2</sub>` |
| [Addition](/docs/Rascal/Expressions/Values/Number/Addition), |
  [Concatenation](/docs/Rascal/Expressions/Values/String/Concatenation), |
  [Concatenation](/docs/Rascal/Expressions/Values/List/Concatenation), |
  [Insert](/docs/Rascal/Expressions/Values/List/Insert),[Append](/docs/Rascal/Expressions/Values/List/Append), |
  [Concatenation](/docs/Rascal/Expressions/Values/Tuple/Concatenation), |
  [Union](/docs/Rascal/Expressions/Values/Set/Union), |
  [Union](/docs/Rascal/Expressions/Values/Map/Union), |
  [Add segment](/docs/Rascal/Expressions/Values/Location/AddSegment) |
| Add numbers; concatenate string, list or tuple;  |
  union on set (including relation), or map; |
  concatenate location and string |
| `Exp<sub>1</sub> - Exp<sub>2</sub>` |
| [Subtraction](/docs/Rascal/Expressions/Values/Number/Subtraction), |
  [Difference](/docs/Rascal/Expressions/Values/List/Difference), |
  [Difference](/docs/Rascal/Expressions/Values/Set/Difference), |
  [Difference](/docs/Rascal/Expressions/Values/Map/Difference) |
| Subtract numbers; difference of list, set (including relation), or map |
| `Exp<sub>1</sub> join Exp<sub>2</sub>` |
| [Join](/docs/Rascal/Expressions/Values/Relation/Join) |
| Join on relation |
| `Exp<sub>1</sub> in Exp<sub>2</sub>` |
| [in](/docs/Rascal/Expressions/Values/List/in),  |
  [in](/docs/Rascal/Expressions/Values/Set/in), |
  [in](/docs/Rascal/Expressions/Values/Map/in) |
| Membership test for element in list, map, set (including relation) |
| `Exp<sub>1</sub> notin Exp<sub>2</sub>` |
| [notin](/docs/Rascal/Expressions/Values/List/notin), |
  [notin](/docs/Rascal/Expressions/Values/Set/notin), |
  [notin](/docs/Rascal/Expressions/Values/Map/notin) |
| Negated membership test for element in  list, map, set (including relation) |
| `Exp<sub>1</sub> <= Exp<sub>2</sub>` |
| [Less than or equal](/docs/Rascal/Expressions/Values/Number/LessThanOrEqual), |
  [Less than or equal](/docs/Rascal/Expressions/Values/String/LessThanOrEqual), |
  [Less than or equal](/docs/Rascal/Expressions/Values/Location/LessThanOrEqual), |
  [Less than or equal](/docs/Rascal/Expressions/Values/DateTime/LessThanOrEqual), |
  [Sub list](/docs/Rascal/Expressions/Values/List/SubList), |
  [Sub set](/docs/Rascal/Expressions/Values/Set/SubSet), |
  [Sub map](/docs/Rascal/Expressions/Values/Map/SubMap) |
| Less than or equal on all values |
| `Exp<sub>1</sub> < Exp<sub>2</sub>` |
| [Less than](/docs/Rascal/Expressions/Values/Number/LessThan), |
  [Less than](/docs/Rascal/Expressions/Values/String/LessThan), |
  [Less than](/docs/Rascal/Expressions/Values/Location/LessThan), |
  [Less than](/docs/Rascal/Expressions/Values/DateTime/LessThan), |
  [Strict sub list](/docs/Rascal/Expressions/Values/List/StrictSubList), |
  [Strict sub set](/docs/Rascal/Expressions/Values/Set/StrictSubSet), |
  [Strict sub map](/docs/Rascal/Expressions/Values/Map/StrictSubMap) |
| Less than on all values |
| `Exp<sub>1</sub> >= Exp<sub>2</sub>` |
| [Greater than or equal](/docs/Rascal/Expressions/Values/Number/GreaterThanOrEqual), |
  [Greater than or equal](/docs/Rascal/Expressions/Values/String/GreaterThanOrEqual), |
  [Greater than or equal](/docs/Rascal/Expressions/Values/Location/GreaterThanOrEqual), |
  [Greater than or equal](/docs/Rascal/Expressions/Values/DateTime/GreaterThanOrEqual), |
  [Super list](/docs/Rascal/Expressions/Values/List/SuperList), |
  [Super set](/docs/Rascal/Expressions/Values/Set/SuperSet), |
  [Super map](/docs/Rascal/Expressions/Values/Map/SuperMap) |
| Greater than or equal on all values |
| `Exp<sub>1</sub> > Exp<sub>2</sub>` |
| [Greater than](/docs/Rascal/Expressions/Values/Number/GreaterThan), |
  [Greater than](/docs/Rascal/Expressions/Values/String/GreaterThan), |
  [Greater than](/docs/Rascal/Expressions/Values/Location/GreaterThan), |
  [Greater than](/docs/Rascal/Expressions/Values/DateTime/GreaterThan), |
  [Strict super list](/docs/Rascal/Expressions/Values/List/StrictSuperList), |
  [Strict super set](/docs/Rascal/Expressions/Values/Set/StrictSuperSet), |
  [Strict super map](/docs/Rascal/Expressions/Values/Map/StrictSuperMap) |
| Greater than on all values. |
|  `Pat := Exp` |
| [Match](/docs/Rascal/Expressions/Values/Boolean/Match) |
| Pattern matches value of expression |
|  `Pat !:= Exp` |
| [No match](/docs/Rascal/Expressions/Values/Boolean/NoMatch) |
| Pattern does not match value of expression |
| `Exp<sub>1</sub> == Exp<sub>2</sub>` |
| [Equal](/docs/Rascal/Expressions/Values/Number/Equal), |
  [Equal](/docs/Rascal/Expressions/Values/String/Equal), |
  [Equal](/docs/Rascal/Expressions/Values/Location/Equal), |
  [Equal](/docs/Rascal/Expressions/Values/DateTime/Equal), |
  [Equal](/docs/Rascal/Expressions/Values/List/Equal), |
  [Equal](/docs/Rascal/Expressions/Values/Set/Equal), |
  [Equal](/docs/Rascal/Expressions/Values/Map/Equal) |
| Equality on all values |
| `Exp<sub>1</sub> != Exp<sub>2</sub>` |
| [Not equal](/docs/Rascal/Expressions/Values/Number/NotEqual), |
  [Not equal](/docs/Rascal/Expressions/Values/String/NotEqual), |
  [Not equal](/docs/Rascal/Expressions/Values/Location/NotEqual), |
  [Not equal](/docs/Rascal/Expressions/Values/DateTime/NotEqual), |
  [Not equal](/docs/Rascal/Expressions/Values/List/NotEqual), |
  [Not equal](/docs/Rascal/Expressions/Values/Set/NotEqual), |
  [Not equal](/docs/Rascal/Expressions/Values/Map/NotEqual) |
| Inequality on all values |
| `Exp<sub>1</sub> ? Exp<sub>2</sub>` |
| [If defined else](/docs/Rascal/Expressions/Values/Boolean/IfDefinedElse) |
| Value of expression when it is defined, otherwise alternative value |
| `Exp<sub>1</sub> ? Exp<sub>2</sub> : Exp<sub>3</sub>` |
| [Conditional](/docs/Rascal/Expressions/Values/Value/Conditional) |
| Conditional expression for all types |
| `Exp<sub>1</sub> ==> Exp<sub>2</sub>` |
| [Implication](/docs/Rascal/Expressions/Values/Boolean/Implication) |
| Implication on Boolean values |
| `Exp<sub>1</sub> <==> Exp<sub>2</sub>` |
| [Equivalence](/docs/Rascal/Expressions/Values/Boolean/Equivalence) |
| Equivalence on Boolean values |
| `Exp<sub>1</sub> && Exp<sub>2</sub>` |
| [And](/docs/Rascal/Expressions/Values/Boolean/And) |
| And on Boolean values |
| `Exp<sub>1</sub> \|\| Exp<sub>2</sub>` |
| [Or](/docs/Rascal/Expressions/Values/Boolean/Or) |
| Or on Boolean values |


#### Examples

#### Benefits


