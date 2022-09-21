---
title: Expressions
---

#### Synopsis

The expressions available in Rascal.

#### Syntax

#### Types

#### Function

#### Description

The expression is the basic unit of evaluation and may consist of the ingredients shown in the figure.

*  An elementary _literal value_, e.g. constants of the types [Boolean](/docs//Rascal/Expressions/Values/Boolean), [Integer](/docs//Rascal/Expressions/Values/Integer), [Real](/docs//Rascal/Expressions/Values/Real), 
  [Number](/docs//Rascal/Expressions/Values/Number), [String](/docs//Rascal/Expressions/Values/String), [Location](/docs//Rascal/Expressions/Values/Location) or [Date time](/docs//Rascal/Expressions/Values/DateTime).

*  A _structured value_ for [List](/docs//Rascal/Expressions/Values/List), [Set](/docs//Rascal/Expressions/Values/Set), [Map](/docs//Rascal/Expressions/Values/Map), [Tuple](/docs//Rascal/Expressions/Values/Tuple) or [Relation](/docs//Rascal/Expressions/Values/Relation). 
  The elements are first evaluated before the structured value is built.

*  A _variable_ that evaluates to its current value.

*  A call to a function or constructor:

**  A _function call_. First the arguments are evaluated and the corresponding function is called. 
     The value returned by the function is used as value of the function call. See [Call](/docs//Rascal/Expressions/Call).
**  A _constructor_. First the arguments are evaluated and then a data value is constructed for the 
     corresponding type. This data value is used as value of the constructor. 
     Constructors are functions that can be used in all contexts where functions can be used. See [Constructor](/docs//Rascal/Expressions/Values/Constructor).

*  An operator expression. The operator is applied to the arguments; the evaluation order of the arguments depends 
  on the operator. The result returned by the operator is used as value of the operator expression.  See [Operators](/docs//Rascal/Expressions/Operators).

*  [./Comprehensions](/docs//Rascal/Expressions/Comprehensions).

*  A [Visit](/docs//Rascal/Expressions/Visit) expression.

*  A [Any](/docs//Rascal/Expressions/Values/Boolean/Any) expression.

*  An [All](/docs//Rascal/Expressions/Values/Boolean/All) expression.

*  Some statements like [./If](/docs//Rascal/Statements/If), [For](/docs//Rascal/Statements/For), [While](/docs//Rascal/Statements/While) and [Do](/docs//Rascal/Statements/Do) can also be used in expressions, see [Statement as Expression](/docs//Rascal/Expressions/StatementAsExpression).

#### Examples

#### Benefits


