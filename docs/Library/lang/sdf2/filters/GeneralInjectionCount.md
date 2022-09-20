---
title: "lang::sdf2::filters::GeneralInjectionCount"
---

#### Usage

`import lang::sdf2::filters::GeneralInjectionCount;`


## function injection {#lang-sdf2-filters-GeneralInjectionCount-injection}

* ``default bool injection(Tree _)``
* ``bool injection(appl(prod(Symbol _,[Symbol _],set[Attr] _), [Tree _]))``

## function generalInjectionCountFilter {#lang-sdf2-filters-GeneralInjectionCount-generalInjectionCountFilter}

* ``&T <: Tree generalInjectionCountFilter(amb(set[&T <: Tree] alts))``

