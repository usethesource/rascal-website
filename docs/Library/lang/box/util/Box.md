---
title: "module lang::box::util::Box"
---

#### Usage

`import lang::box::util::Box;`


## data Box {#lang-box-util-Box-Box}

```rascal
data Box  
     = H (list[Box] h)
     | V(list[Box] v)
     | HOV (list[Box] hov)
     | HV (list[Box] hv)
     | I(list[Box] i)
     | WD(list[Box] wd)
     | R(list[Box] r)
     | A(list[Box] a)
     | SPACE(int space)
     | L(str l)
     | KW(Box kw)
     | VAR(Box  var)
     | NM(Box  nm)
     | STRING(Box  string)
     | COMM(Box  comm)
     | MATH(Box math)
     | ESC(Box esc)
     | REF(int ref)
     | NULL()
     ;
```

## alias text {#lang-box-util-Box-text}

```rascal
list[str]

```

