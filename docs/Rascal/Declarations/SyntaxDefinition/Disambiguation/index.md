---
title: Disambiguation
---

#### Synopsis

Disambiguation is the definition of filters on the parse trees that [Syntax Definition](/docs//Rascal/Declarations/SyntaxDefinition)s define. 
There are several ways of defining [Disambiguation](/docs//Rascal/Declarations/SyntaxDefinition/Disambiguation) in Rascal.

#### Syntax

#### Types

#### Function

#### Description

There are generally three ways of removing ambiguity from parse forests that are produced by parsers generated from [Syntax Definition](/docs//Rascal/Declarations/SyntaxDefinition)s.

*  The first way is to add disambiguation declarations to the [Syntax Definition](/docs//Rascal/Declarations/SyntaxDefinition). You can choose from:
   **  [Priorities](/docs//Rascal/Declarations/SyntaxDefinition/Disambiguation/Priority)s, which can be used to define the relative priority in expression languages
   **  [./Associativity](/docs//Rascal/Declarations/SyntaxDefinition/Disambiguation/Associativity)s, which can be used to define relative associativity between operators of 
       expression languages
   **  [Follow](/docs//Rascal/Declarations/SyntaxDefinition/Disambiguation/Follow) constraints, which can be used to implement longest match using lookahead
   **  [Precede](/docs//Rascal/Declarations/SyntaxDefinition/Disambiguation/Precede) constraints, which can be used to implement first match using look behind
   **  [Reserve](/docs//Rascal/Declarations/SyntaxDefinition/Disambiguation/Reserve) constraintss, which allow you to remove a finite sets of strings from a [Syntax Definition](/docs//Rascal/Declarations/SyntaxDefinition)
       to implement keyword reservation
*  The second way is to add [Action](/docs//Rascal/Declarations/SyntaxDefinition/Action)s that will be triggered just after parsing and allow you to trim a parse forest 
   using any information necessary.
*  The third way is use the [Visit](/docs//Rascal/Statements/Visit) statement on a parse tree and implement your own filter post-parsing time, 
   or any other kind of program that processes [Parse Trees](/docs//Rascal/Declarations/SyntaxDefinition/ParseTrees).

#### Examples

#### Benefits


