---
title: Syntax Definition and Parsing
sidebar_position: 10
---

#### Synopsis

Syntax definition and parser generation for new languages.

#### Description

All source code analysis projects need to extract information directly from the source code. 
There are two main approaches to this:

*  _Lexical information_: Use regular expressions to extract useful, but somewhat superficial, flat, information. 
   This can be achieved using regular expression patterns, 
   see [Regular Expression Pattern](../../Rascal/Patterns/Regular/index.md)s.
*  _Structured information_: Use syntax analysis to extract the complete, nested, structure of the source code 
   in the form of a syntax tree. Rascal can directly manipulate the parse trees, but it also enables user-defined
   mappings from parse tree to abstract syntax tree.


Using [Syntax Definitions](../../Rascal/Declarations/SyntaxDefinition/index.md) you can define the syntax of any (programming) language. 
Then Rascal will:

*  Generate the parser, and
*  Provide pattern matching and pattern construction on parse trees and abstract syntax trees,
   see [Abstract Patterns](../../Rascal/Patterns/Node/index.md) and    
  [Concrete Patterns](../../Rascal/Patterns/Concrete/index.md).

#### Examples

Let's use the Exp language as example. It contains the following elements:

*  Integer constants, e.g., `123`.
*  A multiplication operator, e.g., `3*4`.
*  An addition operator, e.g., `3+4`.
*  Multiplication is left-associative and has precedence over addition.
*  Addition is left-associative.
*  Parentheses can be used to override the precedence of the operators.

Here are some examples:

*  `123`
*  `2+3+4`
*  `2+3*4`
*  `(2+3)*4`


The EXP language can be defined as follows:


```rascal 
module demo::lang::Exp::Concrete::WithLayout::Syntax

layout Whitespace = [\t-\n\r\ ]*;      ❶  
    
lexical IntegerLiteral = [0-9]+;           

start syntax Exp 
  = IntegerLiteral          
  | bracket "(" Exp ")"     
  > left Exp "*" Exp        
  > left Exp "+" Exp        
  ;

```

                
Now you may parse and manipulate programs in the EXP language. Let's demonstrate parsing an expression:

```rascal-shell 
rascal>import demo::lang::Exp::Concrete::WithLayout::Syntax;
ok
rascal>import ParseTree;
ok
rascal>parse(#start[Exp], "2+3*4");
start[Exp]: (start[Exp]) `2+3*4`
```

First we import the syntax definition and the link:/Libraries/Prelude-ParseTree[ParseTree] module that provides the parsing functionality.
Finally, we parse `2+3*4` using the start symbol `Exp`.

Don't be worried, we are just showing the resulting parse tree here which is intended for programs and not for humans.
The points we want to make are:

*  Rascal grammars are relatively easy to read and write (unfortunately, writing grammars will never become simple).
*  Parser generation is completely implicit.
*  Given a syntax definition, it can be used immediately for parsing.


See [Recipes](../../Recipes/index.md) for a more extensive presentation of the 
[EXP](../../Recipes/Languages/Exp/index.md)
language and [Languages](../../Recipes/Languages/index.md) for other language examples.

#### Pitfalls

