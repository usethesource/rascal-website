---
title: "lang::sexp::SExp"
---

#### Usage

`import lang::sexp::SExp;`


#### Synopsis

AST model for S-Expressions.


## data SExp {#lang-sexp-SExp-SExp}

```rascal
data SExp  
     = string(String \str)
     | \list(list[SExp] elts)
     ;
```

## data String {#lang-sexp-SExp-String}

```rascal
data String  
     = simple(SimpleString simpleStr)
     | display(str display, SimpleString simpleStr)
     ;
```

## data SimpleString {#lang-sexp-SExp-SimpleString}

```rascal
data SimpleString  
     = raw(Raw raw)
     | token(str \value)
     | base64(list[str] chars)
     | hex(list[str] digits)
     | quoted(str \value)
     ;
```

## data Raw {#lang-sexp-SExp-Raw}

```rascal
data Raw  
     = raw(int size, str bytes)
     ;
```

## function parseSExp {#lang-sexp-SExp-parseSExp}

* ``SExp parseSExp(str src, loc l)``

