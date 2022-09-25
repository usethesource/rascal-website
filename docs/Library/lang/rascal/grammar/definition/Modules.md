---
title: "module lang::rascal::grammar::definition::Modules"
---

#### Usage

`import lang::rascal::grammar::definition::Modules;`


## function modules2grammar {#lang-rascal-grammar-definition-Modules-modules2grammar}

* ``Grammar modules2grammar(str main, map[str name, tuple[set[str] imports, set[str] extends, set[SyntaxDefinition] defs] \mod] mods)``
* ``Grammar modules2grammar(str main, set[Module] modules)``

Converts internal module representation of Rascal interpreter to single grammar definition

## function modules2definition {#lang-rascal-grammar-definition-Modules-modules2definition}

* ``GrammarDefinition modules2definition(str main, set[Module] modules)``

Converts concrete syntax definitions to abstract grammar definitions

## function fuse {#lang-rascal-grammar-definition-Modules-fuse}

* ``Grammar fuse(GrammarDefinition def)``


  Combines a set of modules into one big Grammar, projecting only the rules that
  are visible locally, or via import and extend.

## function module2grammar {#lang-rascal-grammar-definition-Modules-module2grammar}

* ``GrammarModule module2grammar(Module \mod)``

## function getModuleMetaInf {#lang-rascal-grammar-definition-Modules-getModuleMetaInf}

* ``tuple[str, set[str], set[str]] getModuleMetaInf(Module \mod)``

## function getModuleSyntaxDefinitions {#lang-rascal-grammar-definition-Modules-getModuleSyntaxDefinitions}

* ``set[SyntaxDefinition] getModuleSyntaxDefinitions(Module \mod)``

## function deslash {#lang-rascal-grammar-definition-Modules-deslash}

* ``str deslash(str input)``

## function imports2grammar {#lang-rascal-grammar-definition-Modules-imports2grammar}

* ``Grammar imports2grammar(set[Import] imports)``

## function collect {#lang-rascal-grammar-definition-Modules-collect}

* ``set[SyntaxDefinition] collect(Module \mod)``

