---
title: "module lang::rascal::grammar::definition::Attributes"
---

#### Usage

`import lang::rascal::grammar::definition::Attributes;`

## function attribute {#lang-rascal-grammar-definition-Attributes-attribute}

* ``Production attribute(Production p, Attr a)``

adds an attribute to all productions it can find

## function mods2attrs {#lang-rascal-grammar-definition-Attributes-mods2attrs}

* ``set[Attr] mods2attrs(ProdModifier* mods)``

## function mod2attr {#lang-rascal-grammar-definition-Attributes-mod2attr}

* ``Maybe[Attr] mod2attr(ProdModifier m)``

## function testAssoc {#lang-rascal-grammar-definition-Attributes-testAssoc}

* ``Maybe[Associativity] testAssoc(str m)``

## function mods2assoc {#lang-rascal-grammar-definition-Attributes-mods2assoc}

* ``Maybe[Associativity] mods2assoc(ProdModifier* mods)``

## function mod2assoc {#lang-rascal-grammar-definition-Attributes-mod2assoc}

* ``Maybe[Associativity] mod2assoc(ProdModifier _:\associativity(\left()))``
* ``Maybe[Associativity] mod2assoc(ProdModifier _:\associativity(\right()))``
* ``Maybe[Associativity] mod2assoc(ProdModifier _:\associativity(\associative()))``
* ``Maybe[Associativity] mod2assoc(ProdModifier _:\associativity(\nonAssociative()))``
* ``default Maybe[Associativity] mod2assoc(ProdModifier _)``

