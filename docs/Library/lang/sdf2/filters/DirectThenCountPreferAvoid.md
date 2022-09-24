---
title: "module lang::sdf2::filters::DirectThenCountPreferAvoid"
---

#### Usage

`import lang::sdf2::filters::DirectThenCountPreferAvoid;`

## function directThenCountPreferAvoidFilter {#lang-sdf2-filters-DirectThenCountPreferAvoid-directThenCountPreferAvoidFilter}

* ``&T <:Tree directThenCountPreferAvoidFilter(amb(set[&T <:Tree] alternatives))``

Import his module if you want prefer/avoid filtering with counting enabled for your grammar. Use @prefer and @avoid to
label alternatives.

## function getTags {#lang-sdf2-filters-DirectThenCountPreferAvoid-getTags}

* ``list[list[value]] getTags(list[Tree] ts)``
* ``list[value] getTags(Tree t)``

