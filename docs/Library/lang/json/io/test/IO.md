---
title: "lang::json::io::\\test::IO"
---

#### Usage

`import lang::json::io::\test::IO;`


## data Nat {#lang-json-io-\test-IO-Nat}

```rascal
data Nat  
     = suc(Nat next)
     | zero()
     | time(datetime d)
     | both(Nat n, int x)
     | twice(Nat n, Nat m)
     ;
```

## function writeRead {#lang-json-io-\test-IO-writeRead}

* ``test bool writeRead(Nat n)``

## function writeReadArray {#lang-json-io-\test-IO-writeReadArray}

* ``test bool writeReadArray(Nat n)``

