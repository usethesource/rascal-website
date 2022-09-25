---
title: Syntax
---

#### Synopsis

The textual syntax of Lisp.

#### Description

The first step in defining Lisp's textual format, we define a grammar for it:


```rascal 
module demo::lang::Lisra::Syntax

layout Whitespace      = [\t-\n\r\ ]*; 
lexical IntegerLiteral = [0-9]+ !>> [0-9];
lexical AtomExp        = (![0-9()\t-\n\r\ ])+ !>>  ![0-9()\t-\n\r\ ];

start syntax LispExp            // TODO: remove constructor names (needed for compiler)
      = int_lit: IntegerLiteral
      | atom_exp: AtomExp
      | par_exp: "(" LispExp* ")"
      ;

```

                
`Whitespace` defines the characters that can be ignored between tokens.

`IntegerLiteral` defines integer constants. In a first approximation `[0-9]` is enough.
However, to ensure that the longest possible sequence of digits is used, the `!>> [0-9]` part
ensures that an integer cannot be followed by another digit.

`AtomExp` defines a Lisp symbol that may contain a wide range of characters (except layout and digits).

The main syntactic concept is a `LispExp` that may be an `IntegerLiteral`, `AtomExp` or a list
of `LispExp`s surrouned by parentheses.

#### Examples

This grammar is demonstrated in [Parse](../../../../Recipes/Languages/Lisra/Parse/index.md).


