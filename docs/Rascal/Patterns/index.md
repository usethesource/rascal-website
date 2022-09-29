---
title: Patterns
sidebar_position: 1
---

#### Synopsis

Patterns are a notation for pattern matching used to detect if a value has a certain shape, 
and then to bind variables to parts of the matched value. 

#### Syntax

For most of the [Values](../../Rascal/Expressions/Values/index.md), there is a corresponding pattern matching operator. Then there are
some "higher-order" matching operators which make complex patterns out of simpler ones. 
This is the complete list:
 
| Pattern              | Syntax                                                                       |
| --- | --- |
| Literal              | [Boolean](../../Rascal/Expressions/Values/Boolean/index.md), [Integer](../../Rascal/Expressions/Values/Integer/index.md), [Real](../../Rascal/Expressions/Values/Real/index.md), [Number](../../Rascal/Expressions/Values/Number/index.md), [String](../../Rascal/Expressions/Values/String/index.md), [Location](../../Rascal/Expressions/Values/Location/index.md), or [DateTime](../../Rascal/Expressions/Values/DateTime/index.md) |
| Regular Expression   | `/<Regular Expression>/` |
| Variable declaration | `Type Var`                                                               |
| Multi-variable       | `*Var`, `*Type Var`                                                    |
| Variable             | `Var`                                                                      |
| List                 | `[ Pat₁, Pat₂, ..., Patₙ ]`                                         |
| Set                  | `{ Pat₁, Pat₂, ..., Patₙ }`                                         |
| Tuple                | `< Pat₁, Pat₂, ..., Patₙ >`                                         |
| Node                 | `Name ( Pat₁, Pat₂, ..., Patₙ )`                                  |
| Descendant           | `/ Pat`                                                                    |
| Labelled             | `Var : Pat`                                                               |
| TypedLabelled        | `Type Var : Pat`                                                       |
| TypeConstrained      |  `[Type] Pat` |
| Concrete             | (Symbol) ` Token₁ Token₂ ... Tokenₙ `                                                          |


#### Description

Patterns are used to *dispatch* functions and conditional control flow, to *extract* information 
from values and to conditionally *filter* values. The pattern following pattern kinds can be arbitrarily nested, following
the above syntax:

* [Concrete](../../Rascal/Patterns/Concrete/index.md)
* [Descendant](../../Rascal/Patterns/Descendant/index.md)
* [Labelled](../../Rascal/Patterns/Labelled/index.md)
* [List](../../Rascal/Patterns/List/index.md)
* [Literal](../../Rascal/Patterns/Literal/index.md)
* [MultiVariable](../../Rascal/Patterns/MultiVariable/index.md)
* [Node](../../Rascal/Patterns/Node/index.md)
* [Regular](../../Rascal/Patterns/Regular/index.md)
* [Set](../../Rascal/Patterns/Set/index.md)
* [Tuple](../../Rascal/Patterns/Tuple/index.md)
* [TypeConstrained](../../Rascal/Patterns/TypeConstrained/index.md)
* [TypedLabelled](../../Rascal/Patterns/TypedLabelled/index.md)
* [Variable](../../Rascal/Patterns/Variable/index.md)
* [VariableDeclaration](../../Rascal/Patterns/VariableDeclaration/index.md)

All these patterns may be used in:

*  cases of a [Switch](../../Rascal/Statements/Switch/index.md) or [visit statements](../../Rascal/Statements/Visit/index.md) or [visit expressions](../../Rascal/Expressions/Visit/index.md), 
*  on the left of the [Match](../../Rascal/Expressions/Values/Boolean/Match/index.md) operator (`:=`),
*  on the left of the [Enumerator](../../Rascal/Expressions/Comprehensions/Enumerator/index.md) operator (`<-`), and
*  as formal parameters of [Function](../../Rascal/Declarations/Function/index.md)s. 
*  [try catch](../../Rascal/Statements/TryCatch/index.md) statements to match thrown exceptions.

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


