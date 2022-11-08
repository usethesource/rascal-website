---
title: "module lang::rascal::tests::library::lang::java::m3::BasicM3Tests"
---

#### Usage

`import lang::rascal::tests::library::lang::java::m3::BasicM3Tests;`


## function getSnakesAndLaddersPath {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-getSnakesAndLaddersPath}

```rascal
loc getSnakesAndLaddersPath()

```

## function unpackExampleProject {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-unpackExampleProject}

```rascal
loc unpackExampleProject(str name, loc projectZip)

```

## function compareJarM3s {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-compareJarM3s}

```rascal
bool compareJarM3s(loc reference, loc jar, M3 (loc) builder)

```

## function junitClassPath {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-junitClassPath}

```rascal
list[loc] junitClassPath(loc root)

```

## function junitSourcePath {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-junitSourcePath}

```rascal
list[loc] junitSourcePath(loc root)

```

## function getJunitASTs {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-getJunitASTs}

```rascal
set[Declaration] getJunitASTs(loc root)

```

## function getJunitM3 {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-getJunitM3}

```rascal
M3 getJunitM3(loc root)

```

## function snakesClassPath {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-snakesClassPath}

```rascal
list[loc] snakesClassPath(loc root)

```

## function snakesSourcePath {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-snakesSourcePath}

```rascal
list[loc] snakesSourcePath(loc root)

```

## function getSnakesASTs {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-getSnakesASTs}

```rascal
set[Declaration] getSnakesASTs(loc root)

```

## function getSnakesM3 {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-getSnakesM3}

```rascal
M3 getSnakesM3(loc root)

```

## function buildASTs {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-buildASTs}

```rascal
set[Declaration] buildASTs(loc root, list[loc] classPath, list[loc] sourcePath)

```

## function buildM3 {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-buildM3}

```rascal
M3 buildM3(loc projectName, loc root, list[loc] classPath, list[loc] sourcePath)

```

## function compareM3s {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-compareM3s}

```rascal
bool compareM3s(loc reference, str projectName, loc sourceZip, M3 (loc) builder)

```

## function junitM3RemainedTheSame {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-junitM3RemainedTheSame}

```rascal
test bool junitM3RemainedTheSame()

```

## function snakesM3RemainedTheSame {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-snakesM3RemainedTheSame}

```rascal
test bool snakesM3RemainedTheSame()

```

## function compareASTs {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-compareASTs}

```rascal
bool compareASTs(loc reference, str projectName, loc sourceZip, set[Declaration] (loc) builder)

```

## function junitASTsRemainedTheSame {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-junitASTsRemainedTheSame}

```rascal
test bool junitASTsRemainedTheSame()

```

## function snakesASTsRemainedTheSame {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-snakesASTsRemainedTheSame}

```rascal
test bool snakesASTsRemainedTheSame()

```

## function compareASTs {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-compareASTs}

```rascal
bool compareASTs(set[Declaration] a, set[Declaration] b)

```

## function compareMessages {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-compareMessages}

```rascal
bool compareMessages(Message a, Message b)

```

## function buildM3FromJar {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-buildM3FromJar}

```rascal
M3 buildM3FromJar(loc jar)

```

## function getHamcrestM3 {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-getHamcrestM3}

```rascal
M3 getHamcrestM3(loc root)

```

## function compareJarM3s {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-compareJarM3s}

```rascal
bool compareJarM3s(loc reference, loc jar, M3 (loc) builder)

```

## function hamcrestJarM3RemainedTheSame {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-hamcrestJarM3RemainedTheSame}

```rascal
test bool hamcrestJarM3RemainedTheSame()

```

## function compareM3s {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-compareM3s}

```rascal
bool compareM3s(M3 a, M3 b)

```

