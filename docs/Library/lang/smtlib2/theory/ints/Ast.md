---
title: "lang::smtlib2::theory::ints::Ast"
---

#### Usage

`import lang::smtlib2::theory::ints::Ast;`


	Synopsis: AST for the SMTLIBv2 Ints theory


## data Sort {#lang-smtlib2-theory-ints-Ast-Sort}

```rascal
data Sort  
     = \int()
     ;
```

## data Expr {#lang-smtlib2-theory-ints-Ast-Expr}

```rascal
data Expr  
     = neg(Expr val)
     | sub(Expr lhs, Expr rhs)
     | add(Expr lhs, Expr rhs)
     | mul(Expr lhs, Expr rhs)
     | div(Expr lhs, Expr rhs)
     | \mod(Expr lhs, Expr rhs)
     | abs(Expr val)
     | lte(Expr lhs, Expr rhs)
     | lt (Expr lhs, Expr rhs)
     | gte(Expr lhs, Expr rhs)
     | gt (Expr lhs, Expr rhs)
     ;
```

## data Literal {#lang-smtlib2-theory-ints-Ast-Literal}

```rascal
data Literal  
     = intVal(int i)
     ;
```

