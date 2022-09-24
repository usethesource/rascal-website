---
title: "module lang::smtlib2::command::response::Ast"
---

#### Usage

`import lang::smtlib2::command::response::Ast;`

	Synopsis: Represents the AST of the SMT solver response

## data Response {#lang-smtlib2-command-response-Ast-Response}

```rascal
data Response  
     = response(CheckSat sat)
     | response(GetUnsatCore unsatCore)
     | response(GetValue model)
     | none()
     ;
```

## data CheckSat {#lang-smtlib2-command-response-Ast-CheckSat}

```rascal
data CheckSat  
     = sat()
     | unsat()
     | unkown()
     ;
```

## data GetUnsatCore {#lang-smtlib2-command-response-Ast-GetUnsatCore}

```rascal
data GetUnsatCore  
     = unsatCore(list[str] labels)
     ;
```

## data GetValue {#lang-smtlib2-command-response-Ast-GetValue}

```rascal
data GetValue  
     = foundValues(list[Model] models)
     ;
```

## data Model {#lang-smtlib2-command-response-Ast-Model}

```rascal
data Model  
     = model(Expr var, Expr val)
     ;
```

