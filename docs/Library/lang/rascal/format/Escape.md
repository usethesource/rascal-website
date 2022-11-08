---
title: "module lang::rascal::format::Escape"
---

#### Usage

`import lang::rascal::format::Escape;`


## function makeCharClassChar {#lang-rascal-format-Escape-makeCharClassChar}

```rascal
str makeCharClassChar(int ch)

```


  Creates a Rascal-character-classes escaped string character from a given
  decimal index into the UTF8 table. 

## function makeStringChar {#lang-rascal-format-Escape-makeStringChar}

```rascal
str makeStringChar(int ch)

```


  Creates a Rascal escaped string character from a given decimal index into the UTF8 table.

## function testA {#lang-rascal-format-Escape-testA}

```rascal
test bool testA()

```

## function testNl {#lang-rascal-format-Escape-testNl}

```rascal
test bool testNl()

```

## function testQuote {#lang-rascal-format-Escape-testQuote}

```rascal
test bool testQuote()

```

## function testEOF {#lang-rascal-format-Escape-testEOF}

```rascal
test bool testEOF()

```

## function testHex {#lang-rascal-format-Escape-testHex}

```rascal
test bool testHex()

```

## function escape {#lang-rascal-format-Escape-escape}

```rascal
str escape(str s)

```


  Escapes the characters of the given string using the Rascal escaping conventions.

## function quote {#lang-rascal-format-Escape-quote}

```rascal
str quote(str s)

```


  Escapes the characters of the given string using the Rascal escaping conventions.
  and surround by " quotes.

## function ciquote {#lang-rascal-format-Escape-ciquote}

```rascal
str ciquote(str s)

```


  Escapes the characters of the given string using the Rascal escaping conventions.
  and surround by ' quotes.

