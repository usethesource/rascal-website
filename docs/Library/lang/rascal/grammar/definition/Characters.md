---
title: "module lang::rascal::grammar::definition::Characters"
---

#### Usage

`import lang::rascal::grammar::definition::Characters;`


  In this module character classes are normalized.
  
  It also provides a number of convenience functions on character classes.


## data CharRange {#lang-rascal-grammar-definition-Characters-CharRange}

```rascal
data CharRange  
     = \empty-range()
     ;
```

## function \new-range {#lang-rascal-grammar-definition-Characters-\new-range}

* ``CharRange \new-range(int from, int to)``

## function \new-char-class {#lang-rascal-grammar-definition-Characters-\new-char-class}

* ``Symbol \new-char-class(list[CharRange] ranges)``

## function complement {#lang-rascal-grammar-definition-Characters-complement}

* ``Symbol complement(\char-class(list[CharRange] r1))``
* ``default Symbol  complement(Symbol s)``

## function difference {#lang-rascal-grammar-definition-Characters-difference}

* ``Symbol difference(\char-class(list[CharRange] r1), \char-class(list[CharRange] r2))``
* ``default Symbol  difference(Symbol s, Symbol t)``

## function union {#lang-rascal-grammar-definition-Characters-union}

* ``Symbol union(\char-class(list[CharRange] r1), \char-class(list[CharRange] r2))``
* ``default Symbol  union(Symbol s, Symbol t)``

## function intersection {#lang-rascal-grammar-definition-Characters-intersection}

* ``Symbol intersection(\char-class(list[CharRange] r1), \char-class(list[CharRange] r2))``
* ``default Symbol  intersection(Symbol s, Symbol t)``

## function lessThan {#lang-rascal-grammar-definition-Characters-lessThan}

* ``bool lessThan(CharRange r1, CharRange r2)``

## function difference {#lang-rascal-grammar-definition-Characters-difference}

* ``CharRange difference(CharRange l, CharRange r)``

## function intersect {#lang-rascal-grammar-definition-Characters-intersect}

* ``CharRange intersect(CharRange r1, CharRange r2)``

## function complement {#lang-rascal-grammar-definition-Characters-complement}

* ``list[CharRange] complement(list[CharRange] s)``

## function intersection {#lang-rascal-grammar-definition-Characters-intersection}

* ``list[CharRange] intersection(list[CharRange] l, list[CharRange] r)``

## function union {#lang-rascal-grammar-definition-Characters-union}

* ``list[CharRange] union(list[CharRange] l, list[CharRange] r)``

## function difference {#lang-rascal-grammar-definition-Characters-difference}

* ``list[CharRange] difference(list[CharRange] l, list[CharRange] r)``

## function cc2ranges {#lang-rascal-grammar-definition-Characters-cc2ranges}

* ``Symbol cc2ranges(Class cc)``

## function range {#lang-rascal-grammar-definition-Characters-range}

* ``CharRange range(Range r)``

## function charToInt {#lang-rascal-grammar-definition-Characters-charToInt}

* ``int charToInt(Char c)``

