---
title: Abstract
---

#### Synopsis

A version of Exp based on abstract syntax.

#### Description

The [abstract syntax](../../../../Rascalopedia/AbstractSyntaxTree/index.md) for a language is a
data type that is used to represent programs in the language in an _abstract_ form.
Abstract syntax has the following properties:

*  It is "abstract" in the sense that it does not contain textual details such as parentheses,
  layout, and the like.
*  While a language has one grammar (also known as, _concrete syntax_) it may have several abstract syntaxes
  for different purposes: type analysis, code generation, etc.

#### Examples

The abstract syntax for Exp looks like this:

```rascal 
module demo::lang::Exp::Abstract::Syntax



data Exp 
    = con(int n)               ❶  
    | mul(Exp e1, Exp e2)      ❷  
    | add(Exp e1, Exp e2)      ❸  
    ;

```

* Line 4 defines integer constants, e.g., `con(123)`.
* Line 5 defines multiplication, e.g., `mul(con(2),con(3))`.
* Line 6 defines addition, e.g., `add(con(2),con(3))`.

Given the abstract syntax for Exp, we can define an interpreter that evaluates
expressions. An interpreter, in this case, is a function that takes `Exp` as input
and produces `int` as output:


```rascal 
module demo::lang::Exp::Abstract::Eval
import demo::lang::Exp::Abstract::Syntax;

int eval(con(int n)) = n;                                 ❶  
int eval(mul(Exp e1, Exp e2)) = eval(e1) * eval(e2);      ❷  
int eval(add(Exp e1, Exp e2)) = eval(e1) + eval(e2);
test bool tstEval2() = eval(mul(con(7), con(3))) == 21;
test bool tstEval3() = eval(add(con(7), con(3))) == 10;
test bool tstEval4() = eval(add(con(3), mul(con(4), con(5)))) == 23;

```

           
Here we see Rascal's _pattern-directed invocation_ in action (see [Function Declaration](../../../../Rascal/Declarations/Function/index.md)).
The essence is this: In other languages the formal parameters in a function declaration
are just that: Formal parameters, i.e., single names that can be used inside the function and
that are bound when the function is called.
In Rascal, however, the formal parameters are actually a _pattern_ and functions
can have arbitrarily complex patterns as (single) formal parameter.
These patterns may bind variables and thus introduce variables that can be used in tthe function body.

The big advantage of pattern-directed invocation is modularity and extensibility:

*  The treatment of the cases in the abstract syntax is decoupled.
*  If the abstract is extended later on with new cases, the functions for the old cases can be reused.


In this example we use this mechanism to define separate functions for each case in the abstract syntax.

* ❶  Defines the case for evaluating integer constants: They evaluate to themselves.
* ❷  Defines the case for evaluating multiplication: first evaluate the arguments `e1` and `e2`
    and return the multiplication of their values.
* ❸  Defines the case for evaluating addition: First evaluate the arguments `e1` and `e2`
    and return the addition of their values.



```rascal-shell 
rascal>import demo::lang::Exp::Abstract::Syntax;
ok
rascal>import demo::lang::Exp::Abstract::Eval;
ok
rascal>eval(mul(con(7), con(3)));
int: 21
rascal>eval(add(con(3), mul(con(4), con(5))));
int: 23
```
Entering expressions in abstract syntax form is no fun, and this is where concrete syntax comes to the rescue.



