---
title: Variable
---

#### Synopsis

Markup for a variable.

#### Syntax

We use subscript syntax for variable indices. 

* `\VarName`
* `\VarName\ₐ`

Watch out, only characters in this class are supported `[aeh-pr-vx0-9()+-]`.

#### Description

Variables in text and code are represented by [Italic](../../../../Tutor/Markup/InlineMarkup/Italic/index.md) markup. 
They may be followed by one or more subscripts (enclosed by tildes).

#### Examples

* `\Var` gives _Var_.

* `\Var\₁` gives _Var_₁.

#### Pitfalls

* This feature is broken currently. The italics do not work in code fragments and subscripts are broken as well.
* We only support a limited set of characters currently: `[aeh-pr-vx0-9()+-]`

