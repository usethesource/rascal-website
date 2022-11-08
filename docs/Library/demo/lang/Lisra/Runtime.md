---
title: "module demo::lang::Lisra::Runtime"
---

#### Usage

`import demo::lang::Lisra::Runtime;`


## data Lval {#demo-lang-Lisra-Runtime-Lval}

```rascal
data Lval  
     = Integer(int n)
     | Atom(str name)
     | List(list[Lval] elms)
     | Closure(Result(list[Lval] args, Env env))
     ;
```

## alias Scope {#demo-lang-Lisra-Runtime-Scope}

```rascal
map[Lval,Lval]

```

## alias Env {#demo-lang-Lisra-Runtime-Env}

```rascal
list[Scope]

```

## function makeEnv {#demo-lang-Lisra-Runtime-makeEnv}

```rascal
Env makeEnv(list[Lval] vars, list[Lval] values, Env outer)

```

## function find {#demo-lang-Lisra-Runtime-find}

```rascal
int find(Lval sym, Env e)

```

## alias Result {#demo-lang-Lisra-Runtime-Result}

```rascal
tuple[Lval val, Env env]

```

