---
title: Expressions
---

#### Synopsis

The expressions available in Rascal.

#### Description

The expression is the basic unit of evaluation and may consist of the ingredients shown in the figure.

*  An elementary _literal value_, e.g. constants of the types [Boolean](../../Rascal/Expressions/Values/Boolean/index.md), [Integer](../../Rascal/Expressions/Values/Integer/index.md), [Real](../../Rascal/Expressions/Values/Real/index.md), 
  [Number](../../Rascal/Expressions/Values/Number/index.md), [String](../../Rascal/Expressions/Values/String/index.md), [Location](../../Rascal/Expressions/Values/Location/index.md) or [DateTime](../../Rascal/Expressions/Values/DateTime/index.md).

*  A _structured value_ for [List](../../Rascal/Expressions/Values/List/index.md), [Set](../../Rascal/Expressions/Values/Set/index.md), [Map](../../Rascal/Expressions/Values/Map/index.md), [Tuple](../../Rascal/Expressions/Values/Tuple/index.md) or [Relation](../../Rascal/Expressions/Values/Relation/index.md). 
  The elements are first evaluated before the structured value is built.

*  A _variable_ that evaluates to its current value.

*  A call to a function or constructor:

**  A _function call_. First the arguments are evaluated and the corresponding function is called. 
     The value returned by the function is used as value of the function call. See [Call](../../Rascal/Expressions/Call/index.md).
**  A _constructor_. First the arguments are evaluated and then a data value is constructed for the 
     corresponding type. This data value is used as value of the constructor. 
     Constructors are functions that can be used in all contexts where functions can be used. See [Constructor](../../Rascal/Expressions/Values/Constructor/index.md).

*  An operator expression. The operator is applied to the arguments; the evaluation order of the arguments depends 
  on the operator. The result returned by the operator is used as value of the operator expression.  See [Operators](../../Rascal/Expressions/Operators/index.md).

*  [./Comprehensions](../../Rascal/Expressions/Comprehensions/index.md).

*  A [Visit](../../Rascal/Expressions/Visit/index.md) expression.

*  A [Any](../../Rascal/Expressions/Values/Boolean/Any/index.md) expression.

*  An [All](../../Rascal/Expressions/Values/Boolean/All/index.md) expression.

*  Some statements like [./If](../../Rascal/Statements/If/index.md), [For](../../Rascal/Statements/For/index.md), [While](../../Rascal/Statements/While/index.md) and [Do](../../Rascal/Statements/Do/index.md) can also be used in expressions, see [Statement as Expression](../../Rascal/Expressions/StatementAsExpression/index.md).


