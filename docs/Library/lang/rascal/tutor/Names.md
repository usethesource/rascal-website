---
title: "module lang::rascal::tutor::Names"
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

## function fragment {#lang-rascal-tutor-Names-fragment}

* ``default str fragment(loc root, loc concept)``
* ``str fragment(loc root, loc concept)``
* ``str fragment(loc root, loc concept)``

## function moduleFragment {#lang-rascal-tutor-Names-moduleFragment}

* ``str moduleFragment(str moduleName)``

## function removeSpaces {#lang-rascal-tutor-Names-removeSpaces}

* ``str removeSpaces(/^<prefix:.*><spaces:\s+><postfix:.*>$/)``
* ``default str removeSpaces(str s)``

## function addSpaces {#lang-rascal-tutor-Names-addSpaces}

* ``str addSpaces(/^<prefix:[^:]+>:<postfix:[^:].*>$/)``
* ``str addSpaces(/^<prefix:.+>::<name:[^:]+>$/)``
* ``str addSpaces(/^<prefix:[A-Za-z0-9\ ]+[a-z0-9]><postfix:[A-Z].+>/)``
* ``default str addSpaces(str s)``

## function pathToRoot {#lang-rascal-tutor-Names-pathToRoot}

* ``str pathToRoot(loc root, loc src)``
* ``str pathToRoot(loc root, loc src)``

#### Synopsis

produces `"../../.."` for pathToRoot(|aap:///a/b|, |aap:///a/b/c/d|)  

