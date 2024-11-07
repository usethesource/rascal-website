---
authors: [jvinju]
title: "Rascal 0.40.x release notes"
sidebar_position: 96
---

In this post we report on the Rascal release 0.40.x

<!--truncate-->

## Release 0.40.14 - November 5, 2024

The public release 0.40.x follows release 0.24.x; many improvements have been made in projects that depends on the rascal interpreter and the standard library (the type checker, the VScode extensions, clair, etc.) Some of these improvements depend directly on fixes in the interpreter and additions to the standard library. 

The support for XML, JSON and HTML as exchange formats has been improved or completely rewritten. The main feature that was added was the optional `loc src` keyword field that provides the exact location of each node as it appears in the XML, HTML or JSON source text.

The following issues were solved: 
* TODO

Standard library maintenance:
* Accurate and correct parsers of Windows and Unix file paths were added to the standard library.
* `HTMLElement(loc src = |unknown:///|)` was added to position every tag from start to end via the `src` attribute.

The Java model has received big maintenance love and attention:
* Bumped and upgraded  to the JDT version from Eclipse 2020-03
* The AST nodes in `lang::java::m3::AST` now all satisfy the AST contract in `analysis::m3::AST`. This means that
all source code elements are represented in the tree, annotated with `src` origins and ordered from left-to-right as
they were in the original source file.
* The constructors: enum, enumConstant, compilationUnit, class, interface, method, field, etc. etc. all received
extra positional parameters for the concept of modifiers. Before these were modelled as keyword parameters, but 
that invalidated the earlier mentioned AST contract.
* An AST and M3 model of the Java 9 module system was added.
* The `isSuper` boolean was removed from the AST definition of methodInvocation and `new` calls, also to satisfy the AST contract.
* Java Annotations AST constructors were moved from Expression to Declaration.
* String based unary and binary operator constructors for Expressions were unfolded to a constructor for each operator, i.e. `plus(Expression, Expression) instead of `binop(Expression, "+", Expression)`
* TODO
    
