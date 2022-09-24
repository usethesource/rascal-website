---
title: "module lang::rascal::mutation::ModuleMutator"
---

#### Usage

`import lang::rascal::mutation::ModuleMutator;`

#### Synopsis

Mutant Generator for Rascal modules

#### Description

  Rascal module. The use case is to test how good the tests are for such a module. The tests
  should be able to find the bugs we introduce using the mutators.
  
Examples

```rascal
import lang::rascal::mutation::ModuleMutator;
mutate(|project://rascal/src/org/rascalmpl/library/lang/rascal/format/Grammar.rsc|, mutations=5)
```

## function mutate {#lang-rascal-mutation-ModuleMutator-mutate}

* ``list[str] mutate(loc input, int mutations = 5, str folder="mutants", str prefix="")``
* ``list[Module] mutate(Module input, int mutations = 5, str prefix="", str parentMod="")``

## function muOperPatt {#lang-rascal-mutation-ModuleMutator-muOperPatt}

* ``tuple[bool,PatternWithAction] muOperPatt(0, (PatternWithAction) `<Pattern p> =\> <Replacement _>`)``
* ``tuple[bool,PatternWithAction] muOperPatt(1, (PatternWithAction) `<Pattern p> : <Statement _>`)``
* ``default tuple[bool,PatternWithAction] muOperPatt(int opId, PatternWithAction pa)``

## function muOperStm {#lang-rascal-mutation-ModuleMutator-muOperStm}

* ``tuple[bool,Statement] muOperStm(2, (Statement) `if (<{Expression ","}+ cond>) <Statement s>`)``
* ``tuple[bool,Statement] muOperStm(3, (Statement) `if (<{Expression ","}+ cond>) <Statement s> else <Statement t>`)``
* ``tuple[bool,Statement] muOperStm(4, (Statement) `if (<{Expression ","}+ cond>) <Statement s> else <Statement t>`)``
* ``tuple[bool,Statement] muOperStm(5, (Statement) `while (<{Expression ","}+ cond>) <Statement s>`)``
* ``tuple[bool,Statement] muOperStm(6, (Statement) `for (<{Expression ","}+ cond>) <Statement s>`)``
* ``default tuple[bool,Statement] muOperStm(int opId, Statement stm)``

## function mutationOp {#lang-rascal-mutation-ModuleMutator-mutationOp}

* ``list[Module] mutationOp(int opId, Module input)``

## function make {#lang-rascal-mutation-ModuleMutator-make}

* ``list[Module] make(Module input, int opId, str prefix="", str parentMod="")``

## function rename {#lang-rascal-mutation-ModuleMutator-rename}

* ``Module rename(int c, str prefix, "", (Module) `<Tags t> module <{Name "::"}+ p> :: <Name last> <Import* i> <Body b>`)``
* ``Module rename(int c, str prefix, str parentMod, (Module) `<Tags t> module <{Name "::"}+ p> :: <Name last> <Import* i> <Body b>`)``
* ``Module rename(int c, str prefix, "", (Module) `<Tags t> module <Name last> <Import* i> <Body b>`)``
* ``Module rename(int c, str prefix, str parentMod, (Module) `<Tags t> module <Name last> <Import* i> <Body b>`)``
* ``default str rename(Module x)``

## function getModuleName {#lang-rascal-mutation-ModuleMutator-getModuleName}

* ``str getModuleName((Module) `<Tags _> module <{Name "::"}+ _> :: <Name last> <Import* _> <Body _>`)``
* ``str getModuleName((Module) `<Tags _> module <Name last> <Import* _> <Body _>`)``
* ``default str getModuleName(Module x)``

## function renameTest1 {#lang-rascal-mutation-ModuleMutator-renameTest1}

* ``test bool renameTest1()``

## function renameTest2 {#lang-rascal-mutation-ModuleMutator-renameTest2}

* ``test bool renameTest2()``

## function renameTest3 {#lang-rascal-mutation-ModuleMutator-renameTest3}

* ``test bool renameTest3()``

## function renameTest4 {#lang-rascal-mutation-ModuleMutator-renameTest4}

* ``test bool renameTest4()``

