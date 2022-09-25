---
title: Follow Declaration
keywords:
  - ">>"
  - "!>>"

---

#### Synopsis

A conditional [./Symbol](../../../../../Rascal/Declarations/SyntaxDefinition/Symbol/index.md), constraining the characters that can immediately follow a symbol in the input source text.

#### Syntax

*  `Symbol >> constraint` 
*  `Symbol !>> constraint`


where a _constraint_ is any character class, a literal or a keyword non-terminal [Symbol](../../../../../Rascal/Declarations/SyntaxDefinition/Symbol/index.md).

#### Description

Using `!>>`, the parser will not accept the _Symbol_ if it is immediately followed by the _terminal_ in the input string. If the end of the symbol coincides with end-of-file, the constraint will always succeed and the symbol is accepted.


