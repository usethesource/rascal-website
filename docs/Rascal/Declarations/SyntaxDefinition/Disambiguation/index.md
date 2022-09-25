---
title: Disambiguation
---

#### Synopsis

Disambiguation is the definition of filters on the parse trees that [Syntax Definition](../../../../Rascal/Declarations/SyntaxDefinition/)s define. 
There are several ways of defining [Disambiguation](../../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/) in Rascal.

#### Description

There are generally three ways of removing ambiguity from parse forests that are produced by parsers generated from [Syntax Definition](../../../../Rascal/Declarations/SyntaxDefinition/)s.

*  The first way is to add disambiguation declarations to the [Syntax Definition](../../../../Rascal/Declarations/SyntaxDefinition/). You can choose from:
   **  [Priorities](../../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/Priority/)s, which can be used to define the relative priority in expression languages
   **  [./Associativity](../../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/Associativity/)s, which can be used to define relative associativity between operators of 
       expression languages
   **  [Follow](../../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/Follow/) constraints, which can be used to implement longest match using lookahead
   **  [Precede](../../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/Precede/) constraints, which can be used to implement first match using look behind
   **  [Reserve](../../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/Reserve/) constraintss, which allow you to remove a finite sets of strings from a [Syntax Definition](../../../../Rascal/Declarations/SyntaxDefinition/)
       to implement keyword reservation
*  The second way is to add [Action](../../../../Rascal/Declarations/SyntaxDefinition/Action/)s that will be triggered just after parsing and allow you to trim a parse forest 
   using any information necessary.
*  The third way is use the [Visit](../../../../Rascal/Statements/Visit/) statement on a parse tree and implement your own filter post-parsing time, 
   or any other kind of program that processes [Parse Trees](../../../../Rascal/Declarations/SyntaxDefinition/ParseTrees/).


