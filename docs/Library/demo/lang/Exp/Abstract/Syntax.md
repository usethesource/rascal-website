---
title: "module demo::lang::Exp::Abstract::Syntax"
---

#### Usage

`import demo::lang::Exp::Abstract::Syntax;`


## data Exp {#demo-lang-Exp-Abstract-Syntax-Exp}

```rascal
data Exp  
     = con(int n)
     | mul(Exp e1, Exp e2)
     | add(Exp e1, Exp e2)
     ;
```

