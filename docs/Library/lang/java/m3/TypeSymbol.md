---
title: "module lang::java::m3::TypeSymbol"
---

#### Usage

`import lang::java::m3::TypeSymbol;`


## data Bound {#lang-java-m3-TypeSymbol-Bound}

```rascal
data Bound  
     = \super(list[TypeSymbol] bound)
     | \extends(list[TypeSymbol] bound)
     | \unbounded()
     ;
```

## data TypeSymbol {#lang-java-m3-TypeSymbol-TypeSymbol}

```rascal
data TypeSymbol  
     = \class(loc decl, list[TypeSymbol] typeParameters)
     | \interface(loc decl, list[TypeSymbol] typeParameters)
     | \enum(loc decl)
     | \method(loc decl, list[TypeSymbol] typeParameters, TypeSymbol returnType, list[TypeSymbol] parameters)
     | \constructor(loc decl, list[TypeSymbol] parameters)
     | \typeParameter(loc decl, Bound upperbound)
     | \typeArgument(loc decl)
     | \wildcard(Bound bound)
     | \capture(Bound bound, TypeSymbol wildcard)
     | \intersection(list[TypeSymbol] types)
     | \union(list[TypeSymbol] types)
     | \object()
     | \int()
     | \float()
     | \double()
     | \short()
     | \boolean()
     | \char()
     | \byte()
     | \long()
     | \void()
     | \null()
     | \array(TypeSymbol component, int dimension)
     | \typeVariable(loc decl)
     | \unresolved()
     ;
```

## function subtype {#lang-java-m3-TypeSymbol-subtype}

```rascal
default bool subtype(TypeSymbol s, TypeSymbol t)

```

## function lub {#lang-java-m3-TypeSymbol-lub}

```rascal
default TypeSymbol lub(TypeSymbol s, TypeSymbol t)

```

