---
title: "module lang::rascal::grammar::definition::Modules"
---

#### Usage

`import lang::rascal::grammar::definition::Modules;`


## function modules2grammar {#lang-rascal-grammar-definition-Modules-modules2grammar}

```rascal
Grammar modules2grammar(str main, map[str name, tuple[set[str] imports, set[str] extends, set[SyntaxDefinition] defs] \mod] mods)

Grammar modules2grammar(str main, set[Module] modules)

```

Converts internal module representation of Rascal interpreter to single grammar definition

## function modules2definition {#lang-rascal-grammar-definition-Modules-modules2definition}

```rascal
GrammarDefinition modules2definition(str main, set[Module] modules)

```

Converts concrete syntax definitions to abstract grammar definitions

## function fuse {#lang-rascal-grammar-definition-Modules-fuse}

```rascal
Grammar fuse(GrammarDefinition def)

```


  Combines a set of modules into one big Grammar, projecting only the rules that
  are visible locally, or via import and extend.

## function module2grammar {#lang-rascal-grammar-definition-Modules-module2grammar}

```rascal
GrammarModule module2grammar(Module \mod)

```

## function getModuleMetaInf {#lang-rascal-grammar-definition-Modules-getModuleMetaInf}

```rascal
tuple[str, set[str], set[str]] getModuleMetaInf(Module \mod)

```

## function getModuleSyntaxDefinitions {#lang-rascal-grammar-definition-Modules-getModuleSyntaxDefinitions}

```rascal
set[SyntaxDefinition] getModuleSyntaxDefinitions(Module \mod)

```

## function deslash {#lang-rascal-grammar-definition-Modules-deslash}

```rascal
str deslash(str input)

```

## function imports2grammar {#lang-rascal-grammar-definition-Modules-imports2grammar}

```rascal
Grammar imports2grammar(set[Import] imports)

```

## function collect {#lang-rascal-grammar-definition-Modules-collect}

```rascal
set[SyntaxDefinition] collect(Module \mod)

```

