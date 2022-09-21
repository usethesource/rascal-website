---
title: "lang::json::internal::\\test::IO"
---

#### Usage

`import lang::json::internal::\test::IO;`


## data Nat {#lang-json-internal-\test-IO-Nat}

```rascal
data Nat  
     = suc(Nat next)
     | zero()
     | time(datetime d)
     | both(Nat n, int x)
     | twice(Nat n, Nat m)
     ;
```

## function writeRead {#lang-json-internal-\test-IO-writeRead}

* ``test bool writeRead(Nat n)``

## function writeReadArray {#lang-json-internal-\test-IO-writeReadArray}

* ``test bool writeReadArray(Nat n)``

