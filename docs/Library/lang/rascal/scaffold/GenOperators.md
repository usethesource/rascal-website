---
title: "module lang::rascal::scaffold::GenOperators"
---

#### Usage

`import lang::rascal::scaffold::GenOperators;`

## function numOfCases {#lang-rascal-scaffold-GenOperators-numOfCases}

* ``int numOfCases()``

## function type2iface {#lang-rascal-scaffold-GenOperators-type2iface}

* ``str type2iface("fun")``
* ``str type2iface("list")``
* ``str type2iface("real")``
* ``str type2iface("map")``
* ``str type2iface("datetime")``
* ``str type2iface("rel")``
* ``str type2iface("cons")``
* ``str type2iface("str")``
* ``str type2iface("value")``
* ``str type2iface("int")``
* ``str type2iface("bool")``
* ``str type2iface("tuple")``
* ``str type2iface("num")``
* ``str type2iface("rat")``
* ``str type2iface("set")``
* ``str type2iface("node")``
* ``str type2iface("loc")``

## function genClasses {#lang-rascal-scaffold-GenOperators-genClasses}

* ``str genClasses()``

## function genBinClass {#lang-rascal-scaffold-GenOperators-genBinClass}

* ``str genBinClass(str op, rel[str,str] args)``

## function classNameForOp {#lang-rascal-scaffold-GenOperators-classNameForOp}

* ``str classNameForOp(str op)``

## function genMethod {#lang-rascal-scaffold-GenOperators-genMethod}

* ``str genMethod(str op, list[str] types)``

