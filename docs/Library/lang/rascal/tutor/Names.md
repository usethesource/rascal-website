---
title: "lang::rascal::tutor::Names"
---

#### Usage

`import lang::rascal::tutor::Names;`


## data PathConfig {#lang-rascal-tutor-Names-PathConfig}

```rascal
data PathConfig (loc currentRoot = |unknown:///|, loc currentFile = |unknown:///|)
```

## data Message {#lang-rascal-tutor-Names-Message}

```rascal
data Message (str cause="")
```

## function localLink {#lang-rascal-tutor-Names-localLink}

* ``str localLink(loc root, loc concept)``

## function localDirLink {#lang-rascal-tutor-Names-localDirLink}

* ``str localDirLink(loc root, loc dir)``

## function fragment {#lang-rascal-tutor-Names-fragment}

* ``str fragment(loc concept)``
* ``str fragment(loc root, loc concept)``

## function moduleFragment {#lang-rascal-tutor-Names-moduleFragment}

* ``str moduleFragment(str moduleName)``

## function stripDoubleEnd {#lang-rascal-tutor-Names-stripDoubleEnd}

* ``str stripDoubleEnd(/<prefix:.*>\/<a:[^\/]+>\/<b:[^\-]+>$/)``
* ``default str stripDoubleEnd(str x)``

## function removeSpaces {#lang-rascal-tutor-Names-removeSpaces}

* ``str removeSpaces(/^<prefix:.*><spaces:\s+><postfix:.*>$/)``
* ``default str removeSpaces(str s)``

## function addSpaces {#lang-rascal-tutor-Names-addSpaces}

* ``str addSpaces(/^<prefix:.*[a-z0-9]><postfix:[A-Z].+>/)``
* ``default str addSpaces(str s)``

## function pathToRoot {#lang-rascal-tutor-Names-pathToRoot}

* ``str pathToRoot(loc root, loc src)``
* ``str pathToRoot(loc root, loc src)``

#### Synopsis

produces `"../../.."` for pathToRoot(|aap:///a/b|, |aap:///a/b/c/d|)  

