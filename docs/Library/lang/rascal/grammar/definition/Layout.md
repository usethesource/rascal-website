---
title: "lang::rascal::grammar::definition::Layout"
---

#### Usage

`import lang::rascal::grammar::definition::Layout;`


## function \layouts {#lang-rascal-grammar-definition-Layout-\layouts}

* ``GrammarDefinition \layouts(GrammarDefinition def)``

intermixes the actively visible layout definition in each module into the relevant syntax definitions

## function allLayouts {#lang-rascal-grammar-definition-Layout-allLayouts}

* ``set[Symbol] allLayouts(set[str] defs, GrammarDefinition def)``

collects for a set of modules the names of all layout sorts and returns them as sorts for later processing

## function activeLayout {#lang-rascal-grammar-definition-Layout-activeLayout}

* ``Symbol activeLayout(str name, set[str] deps, GrammarDefinition def)``

computes which layout definitions are visible in a certain given module.
     if a module contains a layout definition, this overrides any imported layout definition
     if a module does not contain a layout definition, it will collect the definitions from all imports (not recursively),
     and also collect the definitions from all extends (recursively).
     the static checker should check whether multiple visible layout definitions are active, because this function
     will just produce an arbitrary one if there are multiple definitions

## function \layouts {#lang-rascal-grammar-definition-Layout-\layouts}

* ``Grammar \layouts(Grammar g, Symbol l, set[Symbol] others)``

intersperses layout symbols in all non-lexical productions

## function intermix {#lang-rascal-grammar-definition-Layout-intermix}

* ``list[Symbol] intermix(list[Symbol] syms, Symbol l, set[Symbol] others)``

## function sepInOthers {#lang-rascal-grammar-definition-Layout-sepInOthers}

* ``bool sepInOthers(Symbol sep, set[Symbol] others)``

## function regulars {#lang-rascal-grammar-definition-Layout-regulars}

* ``Symbol regulars(Symbol s, Symbol l, set[Symbol] others)``

