---
title: "module lang::sdf2::filters::InjectionCount"
---

#### Usage

`import lang::sdf2::filters::InjectionCount;`


## function count {#lang-sdf2-filters-InjectionCount-count}

* ``default int count(Tree _)``
* ``int count(appl(prod(Symbol _,[Symbol _],set[Attr] _), [Tree arg]))``

## function injectionCountFilter {#lang-sdf2-filters-InjectionCount-injectionCountFilter}

* ``&T <: Tree injectionCountFilter(amb(set[&T <: Tree] alts))``

