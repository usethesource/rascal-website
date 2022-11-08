---
title: "module lang::sdf2::filters::IndirectPreferAvoid"
---

#### Usage

`import lang::sdf2::filters::IndirectPreferAvoid;`


## function isPreferred {#lang-sdf2-filters-IndirectPreferAvoid-isPreferred}

```rascal
default bool isPreferred(Tree _)

bool isPreferred(appl(prod(_,_,{\tag("prefer"()),*_}),_))

bool isPreferred(appl(prod(Symbol _,[Symbol _],set[Attr] _), [Tree arg]))

```

## function isAvoided {#lang-sdf2-filters-IndirectPreferAvoid-isAvoided}

```rascal
default bool isAvoided(Tree _)

bool isAvoided(appl(prod(_,_,{\tag("avoid"()),*_}),_))

bool isAvoided(appl(prod(Symbol _,[Symbol _],set[Attr] _), [Tree arg]))

```

## function indirectPreferAvoidFilter {#lang-sdf2-filters-IndirectPreferAvoid-indirectPreferAvoidFilter}

```rascal
&T <:Tree indirectPreferAvoidFilter(amb(set[&T <:Tree] alternatives))

```


Import his module if you want prefer/avoid filtering enabled for your grammar. Use @prefer and @avoid to
label alternatives.

