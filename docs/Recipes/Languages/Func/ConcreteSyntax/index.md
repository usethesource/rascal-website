---
title: Concrete Syntax
---

#### Synopsis

The concrete syntax of Func.

#### Examples


```rascal
// tag::module[]
module demo::lang::Func::Func

lexical Ident =  [a-zA-Z][a-zA-Z0-9]* !>> [a-zA-Z0-9];

lexical Natural = [0-9]+ !>> [0-9];

lexical LAYOUT = [\t-\n\r\ ];

layout LAYOUTLIST = LAYOUT*  !>> [\t-\n\r\ ] ;

start syntax Prog = prog: Func* ;

syntax Func = func: Ident name "(" {Ident ","}* ")" "=" Exp;

syntax Exp = let: "let" {Binding ","}* "in" Exp "end"
           | cond: "if" Exp "then" Exp "else" Exp "end"
           | bracket "(" Exp ")"
           | var: Ident
           | nat: Natural 
           | call: Ident "(" {Exp ","}* ")"
           | address: "&" Ident
           > deref: "*" Exp 
           > non-assoc (
               left mul: Exp "*" Exp 
             | non-assoc div: Exp "/" Exp
           ) 
           > left (
               left add: Exp "+" Exp 
             | left sub: Exp "-" Exp
           )
           >
           non-assoc (
               non-assoc gt: Exp "\>" Exp
             | non-assoc lt:  Exp "\<" Exp
             | non-assoc geq:  Exp "\>=" Exp
             | non-assoc leq:  Exp "\<=" Exp
           )
           >
           right assign: Exp ":=" Exp
           >
           right seq: Exp ";" Exp; 

syntax Binding = binding: Ident "=" Exp;

```

                
The concrete syntax of Func uses many features of Rascal's syntax definitions. Some notes:

*   The definition of lexical syntax follows the pattern:
**  Define lexical symbols (`Ident`, `Natural`).
**  Define rules for layout.
**  Use follow restrictions (`!>>`) to enforce the longest match of lexical symbols.
*  The definition of lexical also follows a common pattern:
**  List of non-terminal is defined with their alternatives.
**  One non-terminal is designated as start symbol (`Prog`).
**  Each alternative has a label, this is for the benefit of converting parse trees to abstract syntaxt trees.
**  Each alternative spells out its priority and associativity.


