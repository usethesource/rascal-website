---
title: "lang::json::ast::Implode"
---

#### Usage

`import lang::json::ast::Implode;`


## function removeEnds {#lang-json-ast-Implode-removeEnds}

* ``str removeEnds(str s)``

## function buildAST {#lang-json-ast-Implode-buildAST}

* ``JSON buildAST(start[JSONText] jt)``
* ``JSON buildAST((JSONText)`<Object obj>`)``
* ``JSON buildAST((JSONText)`<Array a>`)``

## function convertValue {#lang-json-ast-Implode-convertValue}

* ``JSON convertValue((Value)`<Object obj>`)``
* ``JSON convertValue((Value)`<Array a>`)``
* ``JSON convertValue((Value)`<IntegerLiteral il>`)``
* ``JSON convertValue((Value)`<RealLiteral rl>`)``
* ``JSON convertValue((Value)`<StringLiteral sl>`)``
* ``JSON convertValue((Value)`false`)``
* ``JSON convertValue((Value)`null`)``
* ``JSON convertValue((Value)`true`)``

## function convertObject {#lang-json-ast-Implode-convertObject}

* ``map[str,JSON] convertObject((Object)`{ < {Member ","}* ms > }`)``

## function convertArray {#lang-json-ast-Implode-convertArray}

* ``list[JSON] convertArray((Array)`[ < {Value ","}* vs > ]`)``

