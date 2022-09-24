---
title: "module lang::smtlib2::command::Ast"
---

#### Usage

`import lang::smtlib2::command::Ast;`

	Synopsis: The SMTLIBv2 Command AST. This is the basic AST needed to construct SMTLIBv2 constraint problems. Sorts, Expressions and Literals are implemented in the different theories

## data Script {#lang-smtlib2-command-Ast-Script}

```rascal
data Script  
     = script(list[Command] commands)
     ;
```

## data Command {#lang-smtlib2-command-Ast-Command}

```rascal
data Command  
     = setLogic(Logic logic)
     | setOption(Option option)
     | setInfo(Info info)
     | declareSort(str name, int arity)
     | defineSort(str name, list[str] sorts, list[Sort] types)
     | declareFunction(str name, list[Sort] params, Sort returnType)
     | defineFunction(str name, list[SortedVar] sParams, Sort returnType, Expr body)
     | \assert(Expr expr)
     | checkSatisfiable()
     | getValue(list[Expr] exprs)
     | getUnsatCore()
     | push(int nr)
     | pop(int nr)
     | exit()
     ;
```

## data SortedVar {#lang-smtlib2-command-Ast-SortedVar}

```rascal
data SortedVar  
     = sortedVar(str name, Sort sort)
     ;
```

## data Sort {#lang-smtlib2-command-Ast-Sort}

```rascal
data Sort  
     = custom(str name)
     ;
```

## data Expr {#lang-smtlib2-command-Ast-Expr}

```rascal
data Expr  
     = var(str name)
     | lit(Literal lit)
     | named(Expr labeledExpr, str label)
     | customFunctionCall(str name, list[Expr] params)
     ;
```

## data Option {#lang-smtlib2-command-Ast-Option}

```rascal
data Option  
     = printSuccess(bool val)
     | regularOutputChannel(str channel)
     | diagnosticOutputChannel(str channel)
     | expandDefinitions(bool val)
     | interactiveMode(bool val)
     | produceProofs(bool val)
     | produceUnsatCores(bool val)
     | produceModels(bool val)
     | produceAssignments(bool val)
     | randomSeed(int seed)
     | verbosity(int level)
     ;
```

## data Logic {#lang-smtlib2-command-Ast-Logic}

```rascal
data Logic  
     = logic()
     ;
```

## data Info {#lang-smtlib2-command-Ast-Info}

```rascal
data Info  
     = info()
     ;
```

