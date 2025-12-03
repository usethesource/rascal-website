---
title: IDE Construction
keywords:
    - LSP
    - IDE
    - Language Server Protocol
    - Eclipse
    - VScode
---

#### Synopsis

Extend an IDE with interactive, language-specific, features (VSCode)

#### Syntax

#### Types

#### Function

#### Description

Meta-programs become most useful, when they are integrated with an Interactive Development Environment (IDE). 

A Rascal program running inside a [language server protocol](https://microsoft.github.io/language-server-protocol/) server that is part of the VScode IDE can service most of the typical IDE features such as syntax highlighting,
outlining, documentation hovering and much more. Similarly Rascal programs running inside VScode have access to all features
of the , and more.

Rascal builds on top of the [language server protocol](https://microsoft.github.io/language-server-protocol/) for its own services, and for services that
Rascal programmers create for their own languages. By default Rascal can instantiate an LSP server for VScode, but there is nothing in the way of using other editors that have LSP clients.

To instantiate an IDE for a language implemented using Rascal, use the following steps:

*  Define the grammar for the language.
*  Define a parse function for the language.
*  Register the language with the LSP/VScode, using ((util::LanguageServer))

You find more information on these topics [here]((util::LanguageServer))

> **Notice** We deprecated and then archived the [rascal-eclipse](http://github.com/usethesource/rascal-eclipse) plugin, which offered Rascal IDE support and a IDE plugin generated for DSLs. This functionality is now provided by the [rascal-language-servers](http://github.com/usethesource/rascal-language-servers) project.



