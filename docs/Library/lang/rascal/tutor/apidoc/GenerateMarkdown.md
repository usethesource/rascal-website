---
title: "module lang::rascal::tutor::apidoc::GenerateMarkdown"
---

#### Usage

`import lang::rascal::tutor::apidoc::GenerateMarkdown;`


## function generateAPIMarkdown {#lang-rascal-tutor-apidoc-GenerateMarkdown-generateAPIMarkdown}

* ``list[Output] generateAPIMarkdown(str parent, loc moduleLoc, PathConfig pcfg, CommandExecutor exec, Index ind)``

#### Synopsis

Generate markdown documentation from the declarations extracted from a Rascal module.

#### Description


    This function takes Rascal files as input, first extracts all declarations including their
    embedded (markdown) documentation tags, and then generates on-the-fly the output markdown
    as a list of lines and error messages. 
    
    This generator reuses the markdown compiler 
    to implement Rascal shell execution and concept linking, etc. This compilation is applied inside of the
    documentation tags that are written by the author of the Rascal code. The trick is to track the
    current line number inside those documentation tags to provide valuable feedback to the user
    of the tutor compiler.

## function declInfo2Doc {#lang-rascal-tutor-apidoc-GenerateMarkdown-declInfo2Doc}

* ``list[Output] declInfo2Doc(str parent, d:moduleInfo(), list[str] overloads, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls)``
* ``list[Output] declInfo2Doc(str parent, d:functionInfo(), list[str] overloads, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls)``
* ``list[Output] declInfo2Doc(str parent, constructorInfo(), list[str] overloads, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls)``
* ``list[Output] declInfo2Doc(str parent, d:dataInfo(), list[str] overloads, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls)``
* ``list[Output] declInfo2Doc(str parent, d:aliasInfo(), list[str] overloads, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls)``
* ``default list[Output] declInfo2Doc(str parent, DeclarationInfo d, list[str] overloads, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls)``

## function tags2Markdown {#lang-rascal-tutor-apidoc-GenerateMarkdown-tags2Markdown}

* ``list[Output] tags2Markdown(list[DocTag] tags, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls)``

## function basename {#lang-rascal-tutor-apidoc-GenerateMarkdown-basename}

* ``str basename(str cn)``

## function fragment {#lang-rascal-tutor-apidoc-GenerateMarkdown-fragment}

* ``str fragment(str moduleName)``

## function removeNewlines {#lang-rascal-tutor-apidoc-GenerateMarkdown-removeNewlines}

* ``str removeNewlines(str x)``

