---
title: "module lang::rascal::tutor::questions::ValueGenerator"
---

#### Usage

`import lang::rascal::tutor::questions::ValueGenerator;`

## function generateType {#lang-rascal-tutor-questions-ValueGenerator-generateType}

* ``Type generateType(Type tp)``

## function generateArbType {#lang-rascal-tutor-questions-ValueGenerator-generateArbType}

* ``Type generateArbType(int n, {Type ","}+ prefs)``
* ``Type generateArbType(int n, list[Type] prefs)``

## function size {#lang-rascal-tutor-questions-ValueGenerator-size}

* ``int size({Type ","}+ ets)``

## function makeTupleType {#lang-rascal-tutor-questions-ValueGenerator-makeTupleType}

* ``Type makeTupleType({Type ","}+ ets)``

## function generateArbTupleType {#lang-rascal-tutor-questions-ValueGenerator-generateArbTupleType}

* ``Type generateArbTupleType(int n, list[Type] prefs)``

## function generateArbRelType {#lang-rascal-tutor-questions-ValueGenerator-generateArbRelType}

* ``Type generateArbRelType(int n, list[Type] prefs)``

## function generateArbLRelType {#lang-rascal-tutor-questions-ValueGenerator-generateArbLRelType}

* ``Type generateArbLRelType(int n, list[Type] prefs)``

## function generateValue {#lang-rascal-tutor-questions-ValueGenerator-generateValue}

* ``str generateValue(Type tp)``

## function generateBool {#lang-rascal-tutor-questions-ValueGenerator-generateBool}

* ``str generateBool()``

## function generateInt {#lang-rascal-tutor-questions-ValueGenerator-generateInt}

* ``str generateInt(int from, int to)``

## function generateReal {#lang-rascal-tutor-questions-ValueGenerator-generateReal}

* ``str generateReal(int from, int to)``

## function generateNumber {#lang-rascal-tutor-questions-ValueGenerator-generateNumber}

* ``str generateNumber(int from, int to)``

## function generateLoc {#lang-rascal-tutor-questions-ValueGenerator-generateLoc}

* ``str generateLoc()``

## function generateDateTime {#lang-rascal-tutor-questions-ValueGenerator-generateDateTime}

* ``str generateDateTime()``

## function generateString {#lang-rascal-tutor-questions-ValueGenerator-generateString}

* ``str generateString()``

## function generateList {#lang-rascal-tutor-questions-ValueGenerator-generateList}

* ``str generateList(Type et, int from=0, int to=5)``

## function generateSet {#lang-rascal-tutor-questions-ValueGenerator-generateSet}

* ``str generateSet(Type et, int from=0, int to=5)``

## function generateMap {#lang-rascal-tutor-questions-ValueGenerator-generateMap}

* ``str generateMap(Type kt, Type vt,  int from=0, int to=5)``

## function generateTuple {#lang-rascal-tutor-questions-ValueGenerator-generateTuple}

* ``str generateTuple({Type ","}+ ets)``
* ``str generateTuple(list[Type] ets)``

## function generateRel {#lang-rascal-tutor-questions-ValueGenerator-generateRel}

* ``str generateRel({Type ","}+ ets)``
* ``str generateRel(list[Type] ets)``

## function generateLRel {#lang-rascal-tutor-questions-ValueGenerator-generateLRel}

* ``str generateLRel({Type ","}+ ets)``

## function generateArb {#lang-rascal-tutor-questions-ValueGenerator-generateArb}

* ``str generateArb(int n, list[Type] prefs)``

