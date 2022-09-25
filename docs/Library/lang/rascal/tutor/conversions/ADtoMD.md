---
title: "module lang::rascal::tutor::conversions::ADtoMD"
---

#### Usage

`import lang::rascal::tutor::conversions::ADtoMD;`

#### Synopsis

Temporary utility conversions for evolving the tutor syntax from AsciiDoc to Docusaurus Markdown


## function ad2md {#lang-rascal-tutor-conversions-ADtoMD-ad2md}

* ``void ad2md()``
* ``void ad2md(loc root)``

## function isSourceFile {#lang-rascal-tutor-conversions-ADtoMD-isSourceFile}

* ``bool isSourceFile(loc f)``

## function convertFile {#lang-rascal-tutor-conversions-ADtoMD-convertFile}

* ``void convertFile(loc file)``

## function convertLine {#lang-rascal-tutor-conversions-ADtoMD-convertLine}

* ``str convertLine(/<prefix:.*>link:\/<course:[A-Za-z0-9]+>#<concept:[A-Za-z0-9\-]+>\[<title:[^\]]*>\]<postfix:.*$>/)``
* ``str convertLine(/<prefix:.*>link:\/<course:[A-Za-z0-9]+>\[<title:[^\]]*>\]<postfix:.*$>/)``
* ``str convertLine(/<prefix:.*>\<\<<concept:[A-Za-z0-9\-]+>\>\><postfix:.*$>/)``
* ``str convertLine(/^<prefix:.*>image:[:]*<filename:[A-Za-z\-0-9]+>\.<ext:png|jpeg|jpg|svg>\[<properties:[^\]]*>\]<postfix:.*$>/)``
* ``str convertLine(/^<prefix:.*>\<\<<concept:[A-Za-z\-0-9\ ]+>,<title:[A-Za-z\-0-9\ ]+>\>\><postfix:.*$>/)``
* ``str convertLine(/^<prefix:.*>\<\<<concept:[A-Za-z\-0-9\ ]+>\>\><postfix:.*$>/)``
* ``str convertLine(/^<prefix:.*>loctoc::\[[0-9]+\]<postfix:.*$>/)``
* ``str convertLine(/^<prefix:.*>kbd:\[<keys:.*?>\]<postfix:.*$>/)``
* ``str convertLine(/^\ \ \ \ \*\*<postfix:.*$>/)``
* ``str convertLine(/^<prefix:.*>\(\(Libraries:<postfix:.*$>/)``
* ``str convertLine(/^<prefix:.*>\(\(Library:Libraries-<postfix:.*$>/)``
* ``str convertLine(/^<prefix:.*>\(\(Library:Prelude-<postfix:.*$>/)``
* ``str convertLine(/^<prefix:.*>\(\(<pre:[^\)]+>-Prelude-<lst:[^\)\-]+>\)\)<postfix:.*>$/)``
* ``str convertLine(/^<prefix:.*>\(\(<pre:[^\)]+>-<fst:[^\)\-]+>-<lst:[^\)\-]+>\)\)<postfix:.*>$/)``
* ``str convertLine(/^<prefix:.*>\(\(Rascal:Concepts-<rest:[^)]+>\)\)<postfix:.*>$/)``
* ``str convertLine(/^<prefix:.*>`<prequote:[^`]*>_<italics:[A-Za-z0-9~]+>_<postquote:[^`]*>`<postfix:.*$>/)``
* ``str convertLine(/^<prefix:.*>http\:\/\/<url:[^\[\(\)]+>\[<label:[^\]\(\)]+>\]<postfix:.*$>/)``
* ``str convertLine(/^keywords: \"<stuff:.*>\"\s*$/)``
* ``str convertLine(/^details: <stuff:.*>\s*$/)``
* ``str convertLine(/^title: \"<stuff:.*>\"\s*$/)``
* ``str convertLine(/^\ \ \-\ \"\"<thing:[^A-Za-z0-9\-\_\ \t\"]+>\"\"\s*$/)``
* ``str convertLine(/^\ \ \-\ true\s*$/)``
* ``str convertLine(/^\ \ \-\ false\s*$/)``
* ``default str convertLine(str line)``

## function extractTitle {#lang-rascal-tutor-conversions-ADtoMD-extractTitle}

* ``str extractTitle(/title=\"<t:[^\"]+>\"/)``
* ``default str extractTitle(str x)``

