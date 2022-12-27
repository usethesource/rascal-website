---
title: Compiler
---

#### Synopsis

Transform source code to an executable form.

#### Syntax

#### Types

#### Function
       
#### Usage

#### Description

A [compiler](http://en.wikipedia.org/wiki/Compiler) transforms the source code of a program (in a source language) to an executable form (in a target language) and consists of the following phases:

*  [Parsing]((Parser)): Read the source code and build an ((Abstract Syntax Tree)).
*  [Typechecking]((Typechecker)): Perform a semantic analysis of the code, resolving all names
  and verifying that the program is type correct.
*  Optimising: Perform optimisations (e.g., constant folding, dead code elimination, call unfolding).
  This can be seen as a form of ((Refactoring)).
*  Code generation: Generate the final code, this can be assembly language or directly executable code.

#### Examples

#### Benefits

#### Pitfalls

