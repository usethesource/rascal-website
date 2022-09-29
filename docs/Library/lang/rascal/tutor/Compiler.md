---
title: "module lang::rascal::tutor::Compiler"
---

#### Usage

`import lang::rascal::tutor::Compiler;`

#### Synopsis

compiles .rsc and .md files to markdown by executing Rascal-specific code and inlining its output

#### Description


  This compiler collects .rsc files and .md files from a PathConfig's srcs folders.
  
  Every .rsc file is compiled to a .md file with an outline of the declarations contained
  in the file and the contents of the @synopsis, @description, @pitfalls, @benefits, @examples
  tags with those declarations. @doc is also supported for backward compatibility's purposes.
  The resulting markdown is processed by the rest of the compiler, as if written by hand.

  Every .md file is scanned for rascal-shell between triple backticks elements. The contents between the backticks are
  executed by a private Rascal REPL and the output is captured in different ways. Normal IO
  via stderr and stdout is literally printed back and HTML or image output is inlined into 
  the document.

  For (nested) folders in the srcs folders, which do not contain an `index.md` file, or
  a `<name>.md` file where the name is equal to the name of the current folder, a fresh index.md
  file is generated.


## function defaultCompile {#lang-rascal-tutor-Compiler-defaultCompile}

* ``void defaultCompile()``

## function compileOne {#lang-rascal-tutor-Compiler-compileOne}

* ``void compileOne(loc root, loc src, PathConfig pcfg)``

## function onlyAPICompile {#lang-rascal-tutor-Compiler-onlyAPICompile}

* ``void onlyAPICompile()``

## function compile {#lang-rascal-tutor-Compiler-compile}

* ``list[Message] compile(PathConfig pcfg, CommandExecutor exec = createExecutor(pcfg))``

#### Synopsis

compiles each pcfg.srcs folder as a course root

## function compileCourse {#lang-rascal-tutor-Compiler-compileCourse}

* ``list[Message] compileCourse(loc root, PathConfig pcfg, CommandExecutor exec, Index ind)``

## function compile {#lang-rascal-tutor-Compiler-compile}

* ``list[Message] compile(loc src, PathConfig pcfg, CommandExecutor exec, Index ind, int sidebar_position=-1)``

## function compileDirectory {#lang-rascal-tutor-Compiler-compileDirectory}

* ``list[Message] compileDirectory(loc d, PathConfig pcfg, CommandExecutor exec, Index ind, int sidebar_position=-1)``

## function generateIndexFile {#lang-rascal-tutor-Compiler-generateIndexFile}

* ``list[Message] generateIndexFile(loc d, PathConfig pcfg, int sidebar_position=-1)``

## function compileRascalFile {#lang-rascal-tutor-Compiler-compileRascalFile}

* ``list[Message] compileRascalFile(loc m, PathConfig pcfg, CommandExecutor exec, Index ind)``

#### Synopsis

Translates Rascal source files to docusaurus markdown.

## function createDetailsList {#lang-rascal-tutor-Compiler-createDetailsList}

* ``list[str] createDetailsList(loc m, PathConfig pcfg)``

#### Synopsis

This uses another nested directory listing to construct information for the TOC embedded in the current document.

## function compileMarkdownFile {#lang-rascal-tutor-Compiler-compileMarkdownFile}

* ``list[Message] compileMarkdownFile(loc m, PathConfig pcfg, CommandExecutor exec, Index ind, int sidebar_position=-1)``

## function compileMarkdown {#lang-rascal-tutor-Compiler-compileMarkdown}

* ``list[Output] compileMarkdown(loc m, PathConfig pcfg, CommandExecutor exec, Index ind, int sidebar_position=-1)``
* ``list[Output] compileMarkdown([str first:/^\s*``````/, *block, str second:/^``````/, *str rest], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)``
* ``list[Output] compileMarkdown([str first:/^\s*```rascal-include<rest1:.*>$/, *str components, /^\s*```/, *str rest2], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)``
* ``list[Output] compileMarkdown([str first:/^\s*```rascal-shell<rest1:.*>$/, *block, /^\s*```/, *str rest2], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)``
* ``list[Output] compileMarkdown([str first:/^\s*```rascal-prepare<rest1:.*>$/, *block, /^\s*```/, *str rest2], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)``
* ``list[Output] compileMarkdown([str first:/^\s*\(\(\(\s*TOC\s*\)\)\)\s*$/, *str rest], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)``
* ``list[Output] compileMarkdown([str first:/^\s*\(\(\(\s*TODO<msg:[^\)]*>\s*\)\)\)\s*$/, *str rest], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)``
* ``list[Output] compileMarkdown([str first:/^\s*\(\(\|<url:[^\|]+>\|\)\)\s*$/, *str rest], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)``
* ``list[Output] compileMarkdown([/^<prefix:.*>~<digits:[aeh-pr-vx0-9\(\)+\-]+>~<postfix:.*>$/, *str rest], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)``
* ``list[Output] compileMarkdown([/^<prefix:.*>~<digits:[^~]*[^aeh-pr-vx0-9]+[^~]*>~<postfix:.*>$/, *str rest], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)``
* ``list[Output] compileMarkdown([/^<prefix:.*>\[<title:[^\]]+>\]\(\(<link:[A-Za-z0-9\-\ \t\.\:]+>\)\)<postfix:.*>$/, *str rest], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)``
* ``default list[Output] compileMarkdown([/^<prefix:.*>\(\(<link:[A-Za-z0-9\-\ \t\.\:]+>\)\)<postfix:.*>$/, *str rest], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)``
* ``list[Output] compileMarkdown([a:/^\-\-\-\s*$/, *str header, b:/^\-\-\-\s*$/, *str rest], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)``
* ``list[Output] compileMarkdown([str first:/^\s*#+\s+<title:.*>$/, *str emptySection, nextSection:/^\s*#+\s+.*$/, *str rest], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)``
* ``list[Output] compileMarkdown([str first:/^\s*#+\s+<title:.*>$/, *str emptySection, /^\s*$/], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)``
* ``list[Output] compileMarkdown([], int _/*line*/, int _/*offset*/, PathConfig _, CommandExecutor _, Index _, list[str] _)``
* ``default list[Output] compileMarkdown([str head, *str tail], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)``

## function compileRascalShell {#lang-rascal-tutor-Compiler-compileRascalShell}

* ``list[Output] compileRascalShell(list[str] block, bool allowErrors, bool isContinued, int lineOffset, int offset, PathConfig pcfg, CommandExecutor exec, Index _)``

## function compileRascalShellPrepare {#lang-rascal-tutor-Compiler-compileRascalShellPrepare}

* ``list[Output] compileRascalShellPrepare(list[str] block, bool isContinued, int lineOffset, int offset, PathConfig pcfg, CommandExecutor exec, Index _)``

#### Synopsis

Prepare blocks run the REPL but show no input or output

## function skipEmpty {#lang-rascal-tutor-Compiler-skipEmpty}

* ``list[str] skipEmpty([/^s*$/, *str rest])``
* ``default list[str] skipEmpty(list[str] lst)``

## function filterErrors {#lang-rascal-tutor-Compiler-filterErrors}

* ``str filterErrors(str errorStream)``
* ``list[str] filterErrors([/^warning, ambiguity/, *str rest])``
* ``list[str] filterErrors([/^Generating parser/, *str rest])``
* ``default list[str] filterErrors([str head, *str tail])``
* ``list[str] filterErrors([])``

## function length {#lang-rascal-tutor-Compiler-length}

* ``int length(list[str] lines)``
* ``int length(str line)``

