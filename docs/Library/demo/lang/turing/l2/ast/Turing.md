---
title: "module demo::lang::turing::l2::ast::Turing"
---

#### Usage

`import demo::lang::turing::l2::ast::Turing;`

## data Statement {#demo-lang-turing-l2-ast-Turing-Statement}

```rascal
data Statement  
     = jumpAlwaysLabel(str name)
     | jumpSetLabel(str name)
     | jumpUnsetLabel(str name)
     | label(str name)
     | loop(int count, list[Statement] body)
     ;
```

