---
title: "module lang::rascal::grammar::definition::Literals"
---

#### Usage

`import lang::rascal::grammar::definition::Literals;`


## function literals {#lang-rascal-grammar-definition-Literals-literals}

```rascal
Grammar literals(Grammar g)

```

## function literal {#lang-rascal-grammar-definition-Literals-literal}

```rascal
Production literal(str s)

```

## function ciliteral {#lang-rascal-grammar-definition-Literals-ciliteral}

```rascal
Production ciliteral(str s)

```

## function str2syms {#lang-rascal-grammar-definition-Literals-str2syms}

```rascal
list[Symbol] str2syms(str x)

```

## function cistr2syms {#lang-rascal-grammar-definition-Literals-cistr2syms}

```rascal
list[Symbol] cistr2syms(str x)

```

## function unescapeLiteral {#lang-rascal-grammar-definition-Literals-unescapeLiteral}

```rascal
str unescapeLiteral(CaseInsensitiveStringConstant s)

str unescapeLiteral(StringConstant s)

```

## function character {#lang-rascal-grammar-definition-Literals-character}

```rascal
str character(StringCharacter c)

```

## function unescapeLiteral {#lang-rascal-grammar-definition-Literals-unescapeLiteral}

```rascal
str unescapeLiteral(str s)

```

