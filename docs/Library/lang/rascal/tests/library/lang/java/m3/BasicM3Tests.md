---
title: "module lang::rascal::tests::library::lang::java::m3::BasicM3Tests"
---

#### Usage

`import lang::rascal::tests::library::lang::java::m3::BasicM3Tests;`

## function getSnakesAndLaddersPath {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-getSnakesAndLaddersPath}

* ``loc getSnakesAndLaddersPath()``

## function unpackExampleProject {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-unpackExampleProject}

* ``loc unpackExampleProject(str name, loc projectZip)``

## function compareJarM3s {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-compareJarM3s}

* ``bool compareJarM3s(loc reference, loc jar, M3 (loc) builder)``

## function junitClassPath {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-junitClassPath}

* ``list[loc] junitClassPath(loc root)``

## function junitSourcePath {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-junitSourcePath}

* ``list[loc] junitSourcePath(loc root)``

## function getJunitASTs {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-getJunitASTs}

* ``set[Declaration] getJunitASTs(loc root)``

## function getJunitM3 {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-getJunitM3}

* ``M3 getJunitM3(loc root)``

## function snakesClassPath {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-snakesClassPath}

* ``list[loc] snakesClassPath(loc root)``

## function snakesSourcePath {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-snakesSourcePath}

* ``list[loc] snakesSourcePath(loc root)``

## function getSnakesASTs {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-getSnakesASTs}

* ``set[Declaration] getSnakesASTs(loc root)``

## function getSnakesM3 {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-getSnakesM3}

* ``M3 getSnakesM3(loc root)``

## function buildASTs {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-buildASTs}

* ``set[Declaration] buildASTs(loc root, list[loc] classPath, list[loc] sourcePath)``

## function buildM3 {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-buildM3}

* ``M3 buildM3(loc projectName, loc root, list[loc] classPath, list[loc] sourcePath)``

## function compareM3s {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-compareM3s}

* ``bool compareM3s(loc reference, str projectName, loc sourceZip, M3 (loc) builder)``

## function junitM3RemainedTheSame {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-junitM3RemainedTheSame}

* ``test bool junitM3RemainedTheSame()``

## function snakesM3RemainedTheSame {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-snakesM3RemainedTheSame}

* ``test bool snakesM3RemainedTheSame()``

## function compareASTs {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-compareASTs}

* ``bool compareASTs(loc reference, str projectName, loc sourceZip, set[Declaration] (loc) builder)``

## function junitASTsRemainedTheSame {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-junitASTsRemainedTheSame}

* ``test bool junitASTsRemainedTheSame()``

## function snakesASTsRemainedTheSame {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-snakesASTsRemainedTheSame}

* ``test bool snakesASTsRemainedTheSame()``

## function compareASTs {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-compareASTs}

* ``bool compareASTs(set[Declaration] a, set[Declaration] b)``

## function compareMessages {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-compareMessages}

* ``bool compareMessages(Message a, Message b)``

## function buildM3FromJar {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-buildM3FromJar}

* ``M3 buildM3FromJar(loc jar)``

## function getHamcrestM3 {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-getHamcrestM3}

* ``M3 getHamcrestM3(loc root)``

## function compareJarM3s {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-compareJarM3s}

* ``bool compareJarM3s(loc reference, loc jar, M3 (loc) builder)``

## function hamcrestJarM3RemainedTheSame {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-hamcrestJarM3RemainedTheSame}

* ``test bool hamcrestJarM3RemainedTheSame()``

## function compareM3s {#lang-rascal-tests-library-lang-java-m3-BasicM3Tests-compareM3s}

* ``bool compareM3s(M3 a, M3 b)``

