---
title: "module lang::rascal::tutor::Indexer"
---

#### Usage

`import lang::rascal::tutor::Indexer;`


## alias Index {#lang-rascal-tutor-Indexer-Index}

* `rel[str reference, str url]`

## function readConceptIndex {#lang-rascal-tutor-Indexer-readConceptIndex}

* ``Index readConceptIndex(PathConfig pcfg)``

## function createConceptIndex {#lang-rascal-tutor-Indexer-createConceptIndex}

* ``Index createConceptIndex(PathConfig pcfg)``
* ``rel[str, str] createConceptIndex(list[loc] srcs)``
* ``rel[str, str] createConceptIndex(loc src)``

## function isConceptFile {#lang-rascal-tutor-Indexer-isConceptFile}

* ``bool isConceptFile(loc f)``

## function isImageFile {#lang-rascal-tutor-Indexer-isImageFile}

* ``bool isImageFile(loc f)``

## function safeExtract {#lang-rascal-tutor-Indexer-safeExtract}

* ``list[DeclarationInfo] safeExtract(loc f)``

#### Synopsis

ignores extracting errors because they will be found later

