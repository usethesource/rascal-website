---
title: Compiler
---

#### Synopsis

Transform source code to an executable form.

#### Description

A [compiler](http://en.wikipedia.org/wiki/Compiler) transforms the source code of a program (in a source language) to an executable form
(in a target language)
and consists of the following phases:

*  [Parsing](../../Rascalopedia/Parser/index.md): Read the source code and build an [Abstract Syntax Tree](../../Rascalopedia/AbstractSyntaxTree/index.md).
*  [Typechecking](../../Rascalopedia/Typechecker/index.md): Perform a semantic analysis of the code, resolving all names
  and verifying that the program is type correct.
*  Optimising: Perform optimisations (e.g., constant folding, dead code elimination, call unfolding).
  This can be seen as a form of [Refactoring](../../Rascalopedia/Refactoring/index.md).
*  Code generation: Generate the final code, this can be assembly language or directly executable code.


