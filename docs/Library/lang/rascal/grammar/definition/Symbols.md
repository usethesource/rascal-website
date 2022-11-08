---
title: "module lang::rascal::grammar::definition::Symbols"
---

#### Usage

`import lang::rascal::grammar::definition::Symbols;`


## function striprec {#lang-rascal-grammar-definition-Symbols-striprec}

```rascal
default Symbol striprec(Symbol s_ori)

```

## function strip {#lang-rascal-grammar-definition-Symbols-strip}

```rascal
Symbol strip(label(str _, Symbol s))

Symbol strip(conditional(Symbol s, set[Condition] _))

default Symbol strip(Symbol s)

```

## function match {#lang-rascal-grammar-definition-Symbols-match}

```rascal
bool match(Symbol checked, Symbol referenced)

```

## function delabel {#lang-rascal-grammar-definition-Symbols-delabel}

```rascal
Symbol delabel(Symbol s)

```

## function sym2symbol {#lang-rascal-grammar-definition-Symbols-sym2symbol}

```rascal
Symbol sym2symbol(Sym sym)

```

## function args2symbols {#lang-rascal-grammar-definition-Symbols-args2symbols}

```rascal
list[Symbol] args2symbols(Sym* args)

```

## function separgs2symbols {#lang-rascal-grammar-definition-Symbols-separgs2symbols}

```rascal
list[Symbol] separgs2symbols({Sym ","}+ args)

```

## function \seq {#lang-rascal-grammar-definition-Symbols-\seq}

```rascal
Symbol \seq([*Symbol a, \seq(list[Symbol] b), *Symbol c])

```

## function \alt {#lang-rascal-grammar-definition-Symbols-\alt}

```rascal
Symbol \alt({*Symbol a, \alt(set[Symbol] b)})

```

## function \conditional {#lang-rascal-grammar-definition-Symbols-\conditional}

```rascal
Symbol \conditional(\conditional(Symbol s, set[Condition] cs1), set[Condition] cs2)

Symbol \conditional(Symbol s, set[Condition] cs)

```

