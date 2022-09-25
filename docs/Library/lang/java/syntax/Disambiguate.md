---
title: "module lang::java::\\syntax::Disambiguate"
---

#### Usage

`import lang::java::\syntax::Disambiguate;`


    Import this module to Disambiguate the ambiguity cause by the prefix operators +/- and infix operators +/-.
    An example of this ambiguity is (A) + (B) . This could be (A)(+ (B)) or`(A + B)`.
    We need to have a symbol table to decide if A is a type and thus a TypeCast, or it is a field/variable access.
    
    Java lacks operator overloading, therefore, prefix operators only work on numeric types.
    Moreover, there is no support for custom covariance and contravariance.
    Therefore, only if (A) is a primary/boxed numeric type can it be a prefix expression.
    
    We therefore have added this complete but not sound disambiguation as a separate module.
    
    These following cases will result in a incorrect parse tree:
    
    - Shadowing of Integer/Double/Float
    - An invalid type cast: (String)+(A) where A has a numeric type
      (This expression would be an uncompilable, and we would disambiguate it as a infix expression) 


## function isNumeric {#lang-java-\syntax-Disambiguate-isNumeric}

* ``bool isNumeric((RefType)`Byte`)``
* ``bool isNumeric((RefType)`java.lang.Byte`)``
* ``bool isNumeric((RefType)`Character`)``
* ``bool isNumeric((RefType)`java.lang.Character`)``
* ``bool isNumeric((RefType)`Short`)``
* ``bool isNumeric((RefType)`java.lang.Short`)``
* ``bool isNumeric((RefType)`Integer`)``
* ``bool isNumeric((RefType)`java.lang.Integer`)``
* ``bool isNumeric((RefType)`Long`)``
* ``bool isNumeric((RefType)`java.lang.Long`)``
* ``bool isNumeric((RefType)`Float`)``
* ``bool isNumeric((RefType)`java.lang.Float`)``
* ``bool isNumeric((RefType)`Double`)``
* ``bool isNumeric((RefType)`java.lang.Double`)``
* ``default bool isNumeric(RefType r)``

## function isPrefix {#lang-java-\syntax-Disambiguate-isPrefix}

* ``bool isPrefix((Expr)`+ <Expr _>`)``
* ``bool isPrefix((Expr)`++ <Expr _>`)``
* ``bool isPrefix((Expr)`- <Expr _>`)``
* ``bool isPrefix((Expr)`-- <Expr _>`)``
* ``default bool isPrefix(Expr x)``

## function amb {#lang-java-\syntax-Disambiguate-amb}

* ``Tree amb(set[Tree] alts)``

## function containsPrefixExpressions {#lang-java-\syntax-Disambiguate-containsPrefixExpressions}

* ``bool containsPrefixExpressions(set[Tree] trees)``

## function containsPrefixExpression {#lang-java-\syntax-Disambiguate-containsPrefixExpression}

* ``bool containsPrefixExpression(Tree t)``

