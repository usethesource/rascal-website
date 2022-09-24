---
title: "module lang::java::flow::JavaToObjectFlow"
---

#### Usage

`import lang::java::flow::JavaToObjectFlow;`

#### Synopsis

mapping all of Java to the object flow language

#### Description

More information can be found in [ObjectFlow](../../../../Library/analysis/flow/ObjectFlow.md).

## function createOFG {#lang-java-flow-JavaToObjectFlow-createOFG}

* ``FlowProgram createOFG(set[Declaration] asts)``

## function correctInsertArg {#lang-java-flow-JavaToObjectFlow-correctInsertArg}

* ``Expression correctInsertArg(Expression _/*receiver*/, str name, list[Expression] args)``

## function isContainerInsert {#lang-java-flow-JavaToObjectFlow-isContainerInsert}

* ``bool isContainerInsert(Expression recv, str name)``

## function isContainerExtract {#lang-java-flow-JavaToObjectFlow-isContainerExtract}

* ``bool isContainerExtract(Expression recv, str name)``

## function fixCollections {#lang-java-flow-JavaToObjectFlow-fixCollections}

* ``list[Declaration] fixCollections(list[Declaration] ast)``

## function ignoreType {#lang-java-flow-JavaToObjectFlow-ignoreType}

* ``bool ignoreType(arrayType(t))``
* ``bool ignoreType(upperbound(t))``
* ``bool ignoreType(lowerbound(t))``
* ``bool ignoreType(parameterizedType(_))``
* ``bool ignoreType(Type::qualifiedType(t,_))``
* ``bool ignoreType(simpleType(t))``
* ``bool ignoreType(unionType(tt))``
* ``default bool ignoreType(Type t)``
* ``bool ignoreType(Expression::simpleName(n))``
* ``bool ignoreType(Expression::qualifiedName(Expression q, n))``
* ``default bool ignoreType(Expression e)``
* ``bool ignoreType(TypeSymbol::interface(_,_))``
* ``bool ignoreType(TypeSymbol::\enum(_))``
* ``bool ignoreType(TypeSymbol::\typeParameter(_,_))``
* ``bool ignoreType(TypeSymbol::\wildcard(_))``
* ``bool ignoreType(TypeSymbol::\capture(_,_))``
* ``bool ignoreType(TypeSymbol::intersection(tt))``
* ``bool ignoreType(TypeSymbol::union(tt))``
* ``bool ignoreType(TypeSymbol::\class(t,_))``
* ``bool ignoreType(TypeSymbol::\object())``
* ``bool ignoreType(TypeSymbol::\array(_,_))``
* ``default bool ignoreType(TypeSymbol t)``

## function getDeclarations {#lang-java-flow-JavaToObjectFlow-getDeclarations}

* ``set[FlowDecl] getDeclarations(set[Declaration] asts)``

## function lhsDecl {#lang-java-flow-JavaToObjectFlow-lhsDecl}

* ``loc lhsDecl(arrayAccess(e,_))``
* ``loc lhsDecl(f:fieldAccess(_,_,_))``
* ``loc lhsDecl(f:fieldAccess(_,_))``
* ``loc lhsDecl(v:variable(_,_))``
* ``loc lhsDecl(s:simpleName(_))``
* ``loc lhsDecl(q:qualifiedName(_,_))``
* ``default loc lhsDecl(Expression e)``

## function getStatements {#lang-java-flow-JavaToObjectFlow-getStatements}

* ``set[FlowStm] getStatements(set[Declaration] asts)``

## function translate {#lang-java-flow-JavaToObjectFlow-translate}

* ``set[FlowStm] translate(loc base, loc target, c:cast(_, e))``
* ``set[FlowStm] translate(loc base, loc target, conditional(con, t, e))``
* ``set[FlowStm] translate(loc base, loc target, f:fieldAccess(_,_,_))``
* ``set[FlowStm] translate(loc base, loc target, f:fieldAccess(_,_))``
* ``set[FlowStm] translate(loc base, loc target, s:simpleName(_))``
* ``set[FlowStm] translate(loc base, loc target, a:assignment(l,_,r))``
* ``set[FlowStm] translate(loc base, loc target, m:methodCall(s, n, a))``
* ``set[FlowStm] translate(loc base, loc target, m:methodCall(_, r, n, a))``

## function newObject {#lang-java-flow-JavaToObjectFlow-newObject}

* ``Expression newObject(Type t, list[Expression] args, Expression original)``

## function translate {#lang-java-flow-JavaToObjectFlow-translate}

* ``set[FlowStm] translate(loc base, loc target, Expression ob:newObject(Expression _, Type t, list[Expression] a))``
* ``set[FlowStm] translate(loc base, loc target, Expression ob:newObject(_, Type t, list[Expression] a, Declaration _))``
* ``set[FlowStm] translate(loc base, loc target, Expression ob:newObject(Type t, list[Expression] a, Declaration _))``
* ``set[FlowStm] translate(loc base, loc target, Expression ob:newObject(Type t, a))``

## function simpleExpression {#lang-java-flow-JavaToObjectFlow-simpleExpression}

* ``bool simpleExpression(fieldAccess(_,_,_))``
* ``bool simpleExpression(fieldAccess(_,_))``
* ``bool simpleExpression(qualifiedName(_,e))``
* ``bool simpleExpression(this())``
* ``bool simpleExpression(this(_))``
* ``bool simpleExpression(simpleName(_))``
* ``default bool simpleExpression(Expression e)``

## function removeNesting {#lang-java-flow-JavaToObjectFlow-removeNesting}

* ``Expression removeNesting(cast(_, e))``
* ``Expression removeNesting(arrayAccess(e, _))``
* ``Expression removeNesting(\bracket(e))``
* ``default Expression removeNesting(Expression e)``

## function unnestExpressions {#lang-java-flow-JavaToObjectFlow-unnestExpressions}

* ``tuple[list[loc], set[FlowStm]] unnestExpressions(loc prefix, int uniqNum, list[Expression] exprs)``

## function translate {#lang-java-flow-JavaToObjectFlow-translate}

* ``default set[FlowStm] translate(loc base, loc target, Expression e)``

