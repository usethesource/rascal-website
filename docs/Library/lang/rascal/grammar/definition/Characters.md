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

```rascal
CharRange \new-range(int from, int to)

```

## function \new-char-class {#lang-rascal-grammar-definition-Characters-\new-char-class}

```rascal
Symbol \new-char-class(list[CharRange] ranges)

```

## function complement {#lang-rascal-grammar-definition-Characters-complement}

```rascal
Symbol complement(\char-class(list[CharRange] r1))

default Symbol  complement(Symbol s)

```

## function difference {#lang-rascal-grammar-definition-Characters-difference}

```rascal
Symbol difference(\char-class(list[CharRange] r1), \char-class(list[CharRange] r2))

default Symbol  difference(Symbol s, Symbol t)

```

## function union {#lang-rascal-grammar-definition-Characters-union}

```rascal
Symbol union(\char-class(list[CharRange] r1), \char-class(list[CharRange] r2))

default Symbol  union(Symbol s, Symbol t)

```

## function intersection {#lang-rascal-grammar-definition-Characters-intersection}

```rascal
Symbol intersection(\char-class(list[CharRange] r1), \char-class(list[CharRange] r2))

default Symbol  intersection(Symbol s, Symbol t)

```

## function lessThan {#lang-rascal-grammar-definition-Characters-lessThan}

```rascal
bool lessThan(CharRange r1, CharRange r2)

```

## function difference {#lang-rascal-grammar-definition-Characters-difference}

```rascal
CharRange difference(CharRange l, CharRange r)

```

## function intersect {#lang-rascal-grammar-definition-Characters-intersect}

```rascal
CharRange intersect(CharRange r1, CharRange r2)

```

## function complement {#lang-rascal-grammar-definition-Characters-complement}

```rascal
list[CharRange] complement(list[CharRange] s)

```

## function intersection {#lang-rascal-grammar-definition-Characters-intersection}

```rascal
list[CharRange] intersection(list[CharRange] l, list[CharRange] r)

```

## function union {#lang-rascal-grammar-definition-Characters-union}

```rascal
list[CharRange] union(list[CharRange] l, list[CharRange] r)

```

## function difference {#lang-rascal-grammar-definition-Characters-difference}

```rascal
list[CharRange] difference(list[CharRange] l, list[CharRange] r)

```

## function cc2ranges {#lang-rascal-grammar-definition-Characters-cc2ranges}

```rascal
Symbol cc2ranges(Class cc)

```

## function range {#lang-rascal-grammar-definition-Characters-range}

```rascal
CharRange range(Range r)

```

## function charToInt {#lang-rascal-grammar-definition-Characters-charToInt}

```rascal
int charToInt(Char c)

```

