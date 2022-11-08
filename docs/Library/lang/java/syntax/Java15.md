---
title: "module lang::java::\\syntax::Java15"
---

#### Usage

`import lang::java::\syntax::Java15;`


The grammar was based on the SDF2 definition in the  Java-frontend project for Stratego/XT 
See https://github.com/metaborg/java-front

#### Pitfalls

* The grammar has been changed to use Rascal's disambiguation constructs rather than SDF2's constructs,
but this has not been well tested. 


## function expectedAmb {#lang-java-\syntax-Java15-expectedAmb}

```rascal
bool expectedAmb({(Expr)`(<RefType t>) <Expr e>`, appl(_,[(Expr)`(<ExprName n>)`,*_])})

bool expectedAmb({appl(_,[*_,(Expr)`(<RefType t>) <Expr e>`]), appl(_,[appl(_,[*_,(Expr)`(<ExprName n>)`]),*_])})

default bool expectedAmb(set[Tree] t)

```

