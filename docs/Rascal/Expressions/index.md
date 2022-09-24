---
title: Expressions
---

#### Synopsis

The expressions available in Rascal.

#### Description

The expression is the basic unit of evaluation and may consist of the ingredients shown in the figure.

*  An elementary _literal value_, e.g. constants of the types [Boolean](../../Rascal/Expressions/Values/Boolean), [Integer](../../Rascal/Expressions/Values/Integer), [Real](../../Rascal/Expressions/Values/Real), 
  [Number](../../Rascal/Expressions/Values/Number), [String](../../Rascal/Expressions/Values/String), [Location](../../Rascal/Expressions/Values/Location) or [DateTime](../../Rascal/Expressions/Values/DateTime).

*  A _structured value_ for [List](../../Rascal/Expressions/Values/List), [Set](../../Rascal/Expressions/Values/Set), [Map](../../Rascal/Expressions/Values/Map), [Tuple](../../Rascal/Expressions/Values/Tuple) or [Relation](../../Rascal/Expressions/Values/Relation). 
  The elements are first evaluated before the structured value is built.

*  A _variable_ that evaluates to its current value.

*  A call to a function or constructor:

**  A _function call_. First the arguments are evaluated and the corresponding function is called. 
     The value returned by the function is used as value of the function call. See [Call](../../Rascal/Expressions/Call).
**  A _constructor_. First the arguments are evaluated and then a data value is constructed for the 
     corresponding type. This data value is used as value of the constructor. 
     Constructors are functions that can be used in all contexts where functions can be used. See [Constructor](../../Rascal/Expressions/Values/Constructor).

*  An operator expression. The operator is applied to the arguments; the evaluation order of the arguments depends 
  on the operator. The result returned by the operator is used as value of the operator expression.  See [Operators](../../Rascal/Expressions/Operators).

*  [./Comprehensions](../../Rascal/Expressions/Comprehensions).

*  A [Visit](../../Rascal/Expressions/Visit) expression.

*  A [Any](../../Rascal/Expressions/Values/Boolean/Any) expression.

*  An [All](../../Rascal/Expressions/Values/Boolean/All) expression.

*  Some statements like [./If](../../Rascal/Statements/If), [For](../../Rascal/Statements/For), [While](../../Rascal/Statements/While) and [Do](../../Rascal/Statements/Do) can also be used in expressions, see [Statement as Expression](../../Rascal/Expressions/StatementAsExpression).

