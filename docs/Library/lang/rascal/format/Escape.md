---
title: "module lang::rascal::format::Escape"
---

#### Usage

`import lang::rascal::format::Escape;`


## function makeCharClassChar {#lang-rascal-format-Escape-makeCharClassChar}

* ``str makeCharClassChar(int ch)``


  Creates a Rascal-character-classes escaped string character from a given
  decimal index into the UTF8 table. 

## function makeStringChar {#lang-rascal-format-Escape-makeStringChar}

* ``str makeStringChar(int ch)``


  Creates a Rascal escaped string character from a given decimal index into the UTF8 table.

## function testA {#lang-rascal-format-Escape-testA}

* ``test bool testA()``

## function testNl {#lang-rascal-format-Escape-testNl}

* ``test bool testNl()``

## function testQuote {#lang-rascal-format-Escape-testQuote}

* ``test bool testQuote()``

## function testEOF {#lang-rascal-format-Escape-testEOF}

* ``test bool testEOF()``

## function testHex {#lang-rascal-format-Escape-testHex}

* ``test bool testHex()``

## function escape {#lang-rascal-format-Escape-escape}

* ``str escape(str s)``


  Escapes the characters of the given string using the Rascal escaping conventions.

## function quote {#lang-rascal-format-Escape-quote}

* ``str quote(str s)``


  Escapes the characters of the given string using the Rascal escaping conventions.
  and surround by " quotes.

## function ciquote {#lang-rascal-format-Escape-ciquote}

* ``str ciquote(str s)``


  Escapes the characters of the given string using the Rascal escaping conventions.
  and surround by ' quotes.

