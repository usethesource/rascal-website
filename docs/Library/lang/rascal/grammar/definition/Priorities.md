---
title: "module lang::rascal::grammar::definition::Priorities"
---

#### Usage

`import lang::rascal::grammar::definition::Priorities;`

## data Associativity {#lang-rascal-grammar-definition-Priorities-Associativity}

```rascal
data Associativity  
     = prio()
     ;
```

## alias Extracted {#lang-rascal-grammar-definition-Priorities-Extracted}

* `rel[Production father, Associativity rule, Production child]`

## alias DoNotNest {#lang-rascal-grammar-definition-Priorities-DoNotNest}

* `rel[Production father, int position, Production child]`

## function doNotNest {#lang-rascal-grammar-definition-Priorities-doNotNest}

* ``DoNotNest doNotNest(Grammar g)``

#### Synopsis

Extract which productions are not to be nested under which other productions, at given 
recursive positions in the parents' defining symbols list.

#### Description

This DoNotNest relation is generated from the grammar using the > priority definitions,
the associativity groups and the ! restriction operator. 

* The > generates a partial order among production rules, which is transitively closed
* The associativity groups fit into this partial order as equivalence classes on the same
  level in the priority ordering. Within these groups left and right recursive rules are
  limited according to the associativity declaration of the given group.
* The DoNotNest relation contains eventually only restrictions in case between two
  related productions an ambiguity can be "proven" to exist between the outermost (left-most
  and right-most) recursive occurences of the defined non-terminal. This is such that
  the disambiguation by priority and associativity remains 'syntax-safe'
* the non-assoc groups and ! are notably not 'syntax-safe', they remove sentences from non-terminals.

## function extract {#lang-rascal-grammar-definition-Priorities-extract}

* ``default Extracted extract(Production _)``
* ``Extracted extract(choice(Symbol s, set[Production] alts))``
* ``Extracted extract(associativity(Symbol s, Associativity a, set[Production] alts))``
* ``Extracted extract(priority(Symbol s, list[Production] levels))``
* ``Extracted extract(high:prod(_,_,_), low:prod(_,_,_))``
* ``Extracted extract(choice(_, set[Production] alts), Production low)``
* ``Extracted extract(Production high, choice(_, set[Production] alts))``
* ``Extracted extract(Production a:associativity(_, _, set[Production] alts), Production low)``
* ``Extracted extract(Production high, Production a:associativity(_, _, set[Production] alts))``
* ``Extracted extract(Production p:priority(Symbol _, list[Production] alts), Production low)``
* ``Extracted extract(Production high, Production p:priority(Symbol _, list[Production] alts))``

## function except {#lang-rascal-grammar-definition-Priorities-except}

* ``DoNotNest except(Production p:prod(Symbol _, list[Symbol] lhs, set[Attr] _), Grammar g)``

This one-liner searches a given production for "except restrictions". 
For every position in the production that is restricted, and for every restriction it finds 
at this position, it adds a 'do-not-nest' tuple to the result.

## function isdef {#lang-rascal-grammar-definition-Priorities-isdef}

* ``bool isdef(Grammar g, Symbol s)``

## function find {#lang-rascal-grammar-definition-Priorities-find}

* ``Maybe[Production] find(str c, Symbol s, Symbol t, Grammar g)``

## function except {#lang-rascal-grammar-definition-Priorities-except}

* ``DoNotNest except(Production p:regular(Symbol s), Grammar g)``

## function same {#lang-rascal-grammar-definition-Priorities-same}

* ``bool same(Symbol x, Symbol ref)``

