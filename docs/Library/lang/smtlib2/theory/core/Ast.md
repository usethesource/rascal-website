---
title: "module lang::smtlib2::theory::core::Ast"
---

#### Usage

`import lang::smtlib2::theory::core::Ast;`

	Synopsis: AST for the SMTLIBv2 Core theory (boolean logic)

## data Sort {#lang-smtlib2-theory-core-Ast-Sort}

```rascal
data Sort  
     = \bool()
     ;
```

## data Expr {#lang-smtlib2-theory-core-Ast-Expr}

```rascal
data Expr  
     = \not(Expr val)
     | implies(Expr lhs, Expr rhs)
     | and(Expr lhs, Expr rhs)
     | or(Expr lhs, Expr rhs)
     | xor(Expr lhs, Expr rhs)
     | eq(Expr lhs, Expr rhs)
     | distinct(Expr lhs, Expr rhs)
     | ite(Expr condition, Expr whenTrue, Expr whenFalse)
     ;
```

## data Literal {#lang-smtlib2-theory-core-Ast-Literal}

```rascal
data Literal  
     = boolVal(bool b)
     ;
```

