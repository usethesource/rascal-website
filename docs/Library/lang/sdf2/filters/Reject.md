---
title: "lang::sdf2::filters::Reject"
---

#### Usage

`import lang::sdf2::filters::Reject;`


## function rejectFilter {#lang-sdf2-filters-Reject-rejectFilter}

* ``&T <: Tree rejectFilter(amb(set[&T <: Tree] alts))``

 Import his module if you want SDF2 style reject filtering enabled for your grammar. Use @reject to
label one alternative and the whole non-terminal will be filtered if it matches.

