---
title: "lang::rascal::tutor::conversions::Includes"
---

#### Usage

`import lang::rascal::tutor::conversions::Includes;`


## function findModuleIncludes {#lang-rascal-tutor-conversions-Includes-findModuleIncludes}

* ``list[loc] findModuleIncludes()``

## function fixModuleIncludes {#lang-rascal-tutor-conversions-Includes-fixModuleIncludes}

* ``void fixModuleIncludes()``
* ``void fixModuleIncludes(loc f)``

## function fixIncludes {#lang-rascal-tutor-conversions-Includes-fixIncludes}

* ``list[str] fixIncludes([/include::\{LibDir\}<path:[^\]]+>\[\]/, *str tail])``
* ``list[str] fixIncludes(["```rascal",  l:/include::\{LibDir\}<path:[^\]]+>\.rsc\[tags=module\]/, "```", *str tail])``
* ``default list[str] fixIncludes([str head, *str tail])``
* ``list[str] fixIncludes([])``

