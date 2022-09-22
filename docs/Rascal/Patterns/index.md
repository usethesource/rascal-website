---
title: Patterns
---

#### Synopsis

Patterns are a notation for pattern matching used to detect if a value has a certain shape, 
and then to bind variables to parts of the matched value. 

#### Syntax

For most of the [Values](../../Rascal/Expressions/Values), there is a corresponding pattern matching operator. Then there are
some "higher-order" matching operators which make complex patterns out of simpler ones. 
This is the complete list:
 
| Pattern              | Syntax                                                                       |
| --- | --- |
| Literal              | [Boolean](../../Rascal/Expressions/Values/Boolean), [Integer](../../Rascal/Expressions/Values/Integer), [Real](../../Rascal/Expressions/Values/Real), [Number](../../Rascal/Expressions/Values/Number), [String](../../Rascal/Expressions/Values/String), [Location](../../Rascal/Expressions/Values/Location), or [Date time](../../Rascal/Expressions/Values/DateTime) |
| Regular Expression   | `/<Regular Expression>/` |
| Variable declaration | `Type Var`                                                               |
| Multi-variable       | `*Var`, `*Type Var`                                                    |
| Variable             | `Var`                                                                      |
| List                 | `[ Pat<sub>1</sub>, Pat<sub>2</sub>, ..., Pat~n~ ]`                                         |
| Set                  | `{ Pat<sub>1</sub>, Pat<sub>2</sub>, ..., Pat~n~ }`                                         |
| Tuple                | `< Pat<sub>1</sub>, Pat<sub>2</sub>, ..., Pat~n~ >`                                         |
| Node                 | `Name ( Pat<sub>1</sub>, Pat<sub>2</sub>, ..., Pat~n~ )`                                  |
| Descendant           | `/ Pat`                                                                    |
| Labelled             | `Var : Pat`                                                               |
| TypedLabelled        | `Type Var : Pat`                                                       |
| TypeConstrained      |  `[Type] Pat` |
| Concrete             | (Symbol) ` Token<sub>1</sub> Token<sub>2</sub> ... Token~n~ `                                                          |


#### Description

Patterns are used to *dispatch* functions and conditional control flow, to *extract* information 
from values and to conditionally *filter* values. The pattern following pattern kinds can be arbitrarily nested, following
the above syntax:

* [Rascal:Patterns](../../Rascal/Patterns)
* ((Rascal:Patterns/Concrete))
* ((Rascal:Patterns/Descendant))
* ((Rascal:Patterns/Labelled))
* ((Rascal:Patterns/List))
* ((Rascal:Patterns/Literal))
* ((Rascal:Patterns/MultiVariable))
* ((Rascal:Patterns/Node))
* ((Rascal:Patterns/Regular))
* ((Rascal:Patterns/Set))
* ((Rascal:Patterns/Tuple))
* ((Rascal:Patterns/TypeConstrained))
* ((Rascal:Patterns/TypedLabelled))
* ((Rascal:Patterns/Variable))
* ((Rascal:Patterns/VariableDeclaration))

All these patterns may be used in:

*  cases of a [Switch](../../Rascal/Statements/Switch) or [visit statements](../../Rascal/Statements/Visit) or [visit expressions](../../Rascal/Expressions/Visit), 
*  on the left of the [Match](../../Rascal/Expressions/Values/Boolean/Match) operator (`:=`),
*  on the left of the [Enumerator](../../Rascal/Expressions/Comprehensions/Enumerator) operator (`<-`), and
*  as formal parameters of [Function](../../Rascal/Declarations/Function)s. 
*  [Try catch](../../Rascal/Statements/TryCatch) statements to match thrown exceptions.

Each pattern binds variables in a conditional scope:

* in further patterns to the right of the name which is bound in the same pattern
* in the body of case statement (either a replacement or a statement body) 
* in the conditions and bodies of `<If>`, `<For>`, and `<While>` control flow statements
* in the yielding expressions of comprehensions and in furter conditions of the comprehensions

#### Pitfalls

* If a pattern does not match, then it may be hard to find out why. A small test case is the best thing to create. Often a default alternative
which `<Throw>`s an exception with the value which is not matched can be used to find out why this is happening.
* If a variable is bound in the scope of a pattern, then it acts as an `==` test, so make sure to use fresh variables
to avoid such accidental collisions. 


