---
title: "module demo::lang::turing::l1::ast::Turing"
---

#### Usage

`import demo::lang::turing::l1::ast::Turing;`

## data Program {#demo-lang-turing-l1-ast-Turing-Program}

```rascal
data Program  
     = program(list[Statement] statements)
     ;
```

## data Statement {#demo-lang-turing-l1-ast-Turing-Statement}

```rascal
data Statement  
     = jumpAlways(int line)
     | jumpSet(int line)
     | jumpUnset(int line)
     | writeSet()
     | writeUnset()
     | moveForward()
     | moveBackward()
     ;
```

