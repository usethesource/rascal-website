---
title: "module lang::rascal::grammar::SyntaxTreeGenerator"
---

#### Usage

`import lang::rascal::grammar::SyntaxTreeGenerator;`


## data AST {#lang-rascal-grammar-SyntaxTreeGenerator-AST}

```rascal
data AST  
     = ast(str name, set[Sig] sigs)
     | leaf(str name)
     ;
```

## data Sig {#lang-rascal-grammar-SyntaxTreeGenerator-Sig}

```rascal
data Sig  
     = sig(str name, list[Arg] args, bool breakable = false)
     ;
```

## data Arg {#lang-rascal-grammar-SyntaxTreeGenerator-Arg}

```rascal
data Arg  
     = arg(str typ, str name, bool isOptional = false)
     ;
```

## function isBreakable {#lang-rascal-grammar-SyntaxTreeGenerator-isBreakable}

* ``bool isBreakable(prod(_,_,{\tag("breakable"()), *_}))``
* ``default bool isBreakable(Production p)``

## function grammarToASTModel {#lang-rascal-grammar-SyntaxTreeGenerator-grammarToASTModel}

* ``set[AST] grammarToASTModel(str pkg, Grammar g)``

## function grammarToJavaAPI {#lang-rascal-grammar-SyntaxTreeGenerator-grammarToJavaAPI}

* ``void grammarToJavaAPI(loc outdir, str pkg, Grammar g)``

## function grammarToVisitor {#lang-rascal-grammar-SyntaxTreeGenerator-grammarToVisitor}

* ``void grammarToVisitor(loc outdir, str pkg, set[AST] asts, str licenseHeader = header)``

## function grammarToASTClasses {#lang-rascal-grammar-SyntaxTreeGenerator-grammarToASTClasses}

* ``void grammarToASTClasses(loc outdir, str pkg, set[AST] asts, str licenseHeader = header)``

## function classForSort {#lang-rascal-grammar-SyntaxTreeGenerator-classForSort}

* ``str classForSort(str pkg, list[str] imports, AST ast)``

## function classForProduction {#lang-rascal-grammar-SyntaxTreeGenerator-classForProduction}

* ``str classForProduction(str _, str super, Sig sig)``

## function makeMonotonic {#lang-rascal-grammar-SyntaxTreeGenerator-makeMonotonic}

* ``str makeMonotonic(arg(str typ, _, isOptional = true))``
* ``str makeMonotonic(arg(str typ, _, isOptional = false))``

## function nullableHashCode {#lang-rascal-grammar-SyntaxTreeGenerator-nullableHashCode}

* ``str nullableHashCode(arg(_, str name, isOptional = true))``
* ``str nullableHashCode(arg(_, str name, isOptional = false))``

## function nullableEquals {#lang-rascal-grammar-SyntaxTreeGenerator-nullableEquals}

* ``str nullableEquals(arg(_, str name, isOptional = true))``
* ``str nullableEquals(arg(_, str name, isOptional = false))``

## function lexicalClass {#lang-rascal-grammar-SyntaxTreeGenerator-lexicalClass}

* ``str lexicalClass(str name)``

## function productionArgs {#lang-rascal-grammar-SyntaxTreeGenerator-productionArgs}

* ``list[Arg] productionArgs(str pkg, Production p)``

## function signature {#lang-rascal-grammar-SyntaxTreeGenerator-signature}

* ``str signature(list[Arg] args)``

## function actuals {#lang-rascal-grammar-SyntaxTreeGenerator-actuals}

* ``str actuals(list[Arg] args)``

## function cloneActuals {#lang-rascal-grammar-SyntaxTreeGenerator-cloneActuals}

* ``str cloneActuals(list[Arg] args)``

## function construct {#lang-rascal-grammar-SyntaxTreeGenerator-construct}

* ``str construct(Sig sig)``

## function loggedWriteFile {#lang-rascal-grammar-SyntaxTreeGenerator-loggedWriteFile}

* ``void loggedWriteFile(loc file, str src, str licenseHeader)``

