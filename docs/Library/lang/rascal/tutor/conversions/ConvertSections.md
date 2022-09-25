---
title: "module lang::rascal::tutor::conversions::ConvertSections"
---

#### Usage

`import lang::rascal::tutor::conversions::ConvertSections;`


## function convertAllSections {#lang-rascal-tutor-conversions-ConvertSections-convertAllSections}

* ``void convertAllSections(loc dir)``

## function isConceptFile {#lang-rascal-tutor-conversions-ConvertSections-isConceptFile}

* ``bool isConceptFile(loc f)``

## function isImageFile {#lang-rascal-tutor-conversions-ConvertSections-isImageFile}

* ``bool isImageFile(loc f)``

## function convertSections {#lang-rascal-tutor-conversions-ConvertSections-convertSections}

* ``list[str] convertSections(loc file)``
* ``list[str] convertSections([str first:/^\s*\[source,rascal<rest1:.*>]\s*$/, /---/, *str block, /----*<postfix:[^\-]*>/, *str rest2])``
* ``list[str] convertSections([str first:/^\s*\[source[^\]]*\]\s*$/, /---/, *str block, /----*<postfix:[^\-]*>/, *str rest2])``
* ``list[str] convertSections([str first:/^#\s+<title:.*>$/, *str rest2, /^\s*\.Index/, *str indexLines, str nextHeader:/^\s*\.[A-Z][a-z]*/, *str rest3])``
* ``list[str] convertSections([str first:/^#\s+<title:.*>$/, *str rest2, str nextHeader:/^\s*\.[A-Z][a-z]*/, *str rest3])``

## function words {#lang-rascal-tutor-conversions-ConvertSections-words}

* ``list[str] words(list[str] input)``
* ``list[str] words(str input)``

## function convertSections {#lang-rascal-tutor-conversions-ConvertSections-convertSections}

* ``list[str] convertSections(["---", *str headers, "---", *str otherStuff, /^\s*\.Details/, *str detailsLines, str nextHeader:/^\s*\.[A-Z][a-z]*/, *str moreStuff])``
* ``list[str] convertSections([/^\.<headerTitle:[A-Z][A-Za-z]+>\s*$/, *str otherStuff])``
* ``list[str] convertSections([     str before,     /^\s*\|====*\s*$/,      str firstLine,     *str body,     /^\s*\|====*\s*$/,     *str rest     ])``

## function emptyHeader {#lang-rascal-tutor-conversions-ConvertSections-emptyHeader}

* ``str emptyHeader(str firstLine)``

## function completeBodyLine {#lang-rascal-tutor-conversions-ConvertSections-completeBodyLine}

* ``str completeBodyLine(str body)``

## function columnsLine {#lang-rascal-tutor-conversions-ConvertSections-columnsLine}

* ``str columnsLine(/\|\s*\|<postfix:.*>$/)``
* ``str columnsLine("|")``

## function convertSections {#lang-rascal-tutor-conversions-ConvertSections-convertSections}

* ``list[str] convertSections([])``
* ``default list[str] convertSections([str first, *str last])``

## function removeQuotesThing {#lang-rascal-tutor-conversions-ConvertSections-removeQuotesThing}

* ``str removeQuotesThing(/^<prefix:.*>,subs=\"quotes\"<postfix:.*>/)``
* ``default str removeQuotesThing(str x)``

