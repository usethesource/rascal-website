---
title: "module lang::rascal::format::Grammar"
---

#### Usage

`import lang::rascal::format::Grammar;`


  Convert the Rascal internal grammar representation format (Grammar) to 
  a syntax definition in Rascal source code.


## function definition2disk {#lang-rascal-format-Grammar-definition2disk}

```rascal
void definition2disk(loc prefix, GrammarDefinition def)

```

## function definition2rascal {#lang-rascal-format-Grammar-definition2rascal}

```rascal
str definition2rascal(GrammarDefinition def)

```

## function module2rascal {#lang-rascal-format-Grammar-module2rascal}

```rascal
str module2rascal(GrammarModule m)

```

## function grammar2rascal {#lang-rascal-format-Grammar-grammar2rascal}

```rascal
str grammar2rascal(Grammar g, str name)

str grammar2rascal(Grammar g)

```

## function cleanIdentifiers {#lang-rascal-format-Grammar-cleanIdentifiers}

```rascal
Grammar cleanIdentifiers(Grammar g)

```

## function grammar2rascal {#lang-rascal-format-Grammar-grammar2rascal}

```rascal
str grammar2rascal(Grammar g, list[Symbol] _/*nonterminals*/)

```

## function same {#lang-rascal-format-Grammar-same}

```rascal
bool same(Production p, Production q)

```

## function topProd2rascal {#lang-rascal-format-Grammar-topProd2rascal}

```rascal
str topProd2rascal(Production p)

```

## function layoutname {#lang-rascal-format-Grammar-layoutname}

```rascal
str layoutname(Symbol s)

```

## function alt2r {#lang-rascal-format-Grammar-alt2r}

```rascal
str alt2r(Symbol _def, Production p, str sep = "=")

```

## function alt2rascal {#lang-rascal-format-Grammar-alt2rascal}

```rascal
str alt2rascal(Production p:prod(def,_,_))

str alt2rascal(Production p:priority(def,_))

str alt2rascal(Production p:\associativity(def,a,_))

str alt2rascal(Production p:regular(_))

default str alt2rascal(Production p)

```

## function prod2rascal {#lang-rascal-format-Grammar-prod2rascal}

```rascal
str prod2rascal(Production p)

```

## function associativity {#lang-rascal-format-Grammar-associativity}

```rascal
str associativity(\left())

str associativity(\right())

str associativity(\assoc())

str associativity(\non-assoc())

```

## function reserved {#lang-rascal-format-Grammar-reserved}

```rascal
str reserved(str name)

```

## function noAttrs {#lang-rascal-format-Grammar-noAttrs}

```rascal
test bool noAttrs()

```

## function AttrsAndCons {#lang-rascal-format-Grammar-AttrsAndCons}

```rascal
test bool AttrsAndCons()

```

## function CC {#lang-rascal-format-Grammar-CC}

```rascal
test bool CC()

```

## function Prio {#lang-rascal-format-Grammar-Prio}

```rascal
test bool Prio()

```

## function attr2mod {#lang-rascal-format-Grammar-attr2mod}

```rascal
str attr2mod(Attr a)

```

## function symbol2rascal {#lang-rascal-format-Grammar-symbol2rascal}

```rascal
str symbol2rascal(Symbol sym)

```

## function iterseps2rascal {#lang-rascal-format-Grammar-iterseps2rascal}

```rascal
str iterseps2rascal(Symbol sym, list[Symbol] seps, str iter)

```

## function params2rascal {#lang-rascal-format-Grammar-params2rascal}

```rascal
str params2rascal(list[Symbol] params)

```

## function cc2rascal {#lang-rascal-format-Grammar-cc2rascal}

```rascal
str cc2rascal(list[CharRange] ranges)

```

## function range2rascal {#lang-rascal-format-Grammar-range2rascal}

```rascal
str range2rascal(CharRange r)

```

