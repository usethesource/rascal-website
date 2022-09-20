---
title: "util::Test"
---

#### Usage

`import util::Test;`

#### Synopsis

Provides occasionally useful access to Rascal's testing framework

#### Description



Rascal's test framework can normally be accessed via UI and commandline interfaces:

  * Running as JUnit tests in IDEs
  * Running as JUnit tests from Maven
  * Executing the `:test` command in a Rascal REPL
  
This module provides a programmatic interface, and reports the test results
as values. It can be handy to construct more UI components which interact
with tests, but also to query larger volumes of failing tests. 


## data TestResult {#util-Test-TestResult}

```rascal
data TestResult  
     = \testResult(str name, bool success, loc src, str message = "", list[value] exceptions = [])
     ;
```

## function runTests {#util-Test-runTests}

* ``list[TestResult] runTests(str moduleName)``

#### Synopsis

Run all tests for the given module name

#### Description


This function works under the assumption that the named module is available in the current execution environment.

## function testTest {#util-Test-testTest}

* ``test bool testTest()``

