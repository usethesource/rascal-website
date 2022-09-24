---
title: "module lang::rascal::tests::basic::DynamicDispatch"
---

#### Usage

`import lang::rascal::tests::basic::DynamicDispatch;`

## data D {#lang-rascal-tests-basic-DynamicDispatch-D}

```rascal
data D  
     = d()
     ;
```

## function foo {#lang-rascal-tests-basic-DynamicDispatch-foo}

* ``bool foo(d())``
* ``default bool foo(value n)``

## function dispatchOnRuntimeType {#lang-rascal-tests-basic-DynamicDispatch-dispatchOnRuntimeType}

* ``test bool dispatchOnRuntimeType()``

