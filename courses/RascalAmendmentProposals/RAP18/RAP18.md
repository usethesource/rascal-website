---
title: RAP 18 - Keyword Fields in Function Types
sidebar_position: 1
---

## Abstract

Rascal has higher-order first-class functions. This means that:
* functions can return functions and functions can take functions as parameters. 
* because functions are values and expressions can return functions (names and lambda's) there also syntax and semantics for function types: `Return (Param1, Param2, ...)`. 
* These types may be generic as in `&T(&T)`, for the type-preserving functions.
* Functions may have positional parameters and keyword parameters: `int f(int i, int j = 1)`
* However, there is no syntax or semantics for the types of keyword parameters of functions.

This RAP adds syntax, static semantics, and dynamic semantics for function types with keyword parameters.

## Motivation

This means all kinds of natural uses of higher-order functions with keyword parameters can not
be written in Rascal. Also it hampers code evolution since we can not simply add a new keyword parameter
with a default to a higher-order function. We must always add a positional parameter and break all
the current clients.

An example in `util::Formatters` (simplified)

* `str(str) generateFormatter(type[&T <: Tree], Style style)` is the original
* `str(str, FormattingOptions opts = ...) generateFormatter(type[&T <: Tree], Style style)` is the impossible to write due to use of a keyword field in a higher-order return type.

## Syntax

This proposal would add syntax to write `int(int j = ..., int k = ...)`

```rascal
syntax FunctionType
	= typeArguments: Type type "(" {TypeArg ","}* arguments ")" 
    | typeArgumentsAndField; Type type "(" {TypeArg ","}* arguments "," {KeywordTypeArg ","}+ ")" 

syntax KeywordTypeArg
    = keywordArguments: TypeArg "=" "..."
    ;
```

A noted difference with function declarations, as opposed to these function types, is that these do not
have a `default` expression associated. This is quite essential. Currently every default expression is 
uniquely associated with a function instance. If we would add default instances here, we would introduce
ambiguity of defaults via all kinds of routes that a type can reach a value (diamond problems and problems
associated with multiple inheritance). So no defaults!

## Static Semantics

Function types contribute to the "bounded type lattice" of Rascal. We have to define subtype, lub and glb for function 
types with keyword fields now, such that the lattice properties are preserved:
* partial reflexive order
   - reflexive: $a <= a$
   - antisymmatric: $a <= b \wedge b <= a  \rightarrow  a == b$
   - transitive: $a <= b \wedge b <= c \rightarrow  a <= c$
* top `value` is identity for glb
* bottom `void` is identity for lub

### More parameters is fine, less is not, and contra variance (not co-variance) for parameter types

For two function types `a <= b`, `a` must 
* have at least the same parameter names as `b`
* these parameter types per name are to be supertypes (contra-variant), so 
   * wrong: `int(int f = ...) <= int(num f = ...)`, because the sub-type can now not handle parameters of type `rat`
   * right: `int(num f = ...) <= int(int f = ...)`, because the passed function can also deal with ints
* more parameters is fine, fewer parameters is not fine:
   * wrong: `int(int f = ...) <= int(int f = ..., int g=...)`, because the sub-type missed the `g` parameter
   * right: `int(int f = ..., int g=...) <= int(int f = ...)`, because the function has unused (defaults) which is fine.

Note that the `more parameters is fine, fewer parameters is not fine` is essential for the lattice property. Dynamically
we could have allowed fewer parameters too (since all that would happen is passing superfluous parameters). However, such
a rule would make it **easy to break antisymmetry** (i.e. create $a <= b \wedge b <= a \wedge b != a$) and break termination and unique solution properties of type inference. Also we believe "more parameters is fine" to coincide with what people 
expect from sub-typing/sub-classing in programming languages. Java classes may have more methods, and not fewer, too.

If a generic parameter is used in keyword parameter type:
* substitution must be extended to the keyword fields
* `lub` must call `glb` on the keyword field types due to contra-variance (not that `lub` already calls `lub` on the positional parameters since they are both contra- and co-variant due to pattern matching semantics). So this is a distinctive property of keyword parameter types.

## Dynamic Semantics

* for a type correct program the dynamic semantics of Rascal remains (almost) unchanged. In Rascal we only have concrete function instances, which all carry their own defaults.
* for type-parametrized programs, type instantation must be extended to keyword parameters
* the dynamic version of `subtype` must reflect the static semantics and will change the way typed variable patterns match or don't match.

## Implementation

* This requires changes in Rascal.rsc grammar, as above and regeneration of the parser code
* This requires additions to all the type processors in the rascal project, reification, AST to type, AST to symbol, Types::collect, AType and AType to Symbol.
* This requires a single new test file that focuses on all the different static cases (return types, parameters, type parametrized)

## Backward compatibility

* AType and Symbol already have keyword parameter types in their representation
* What subtype and lub and glb currently do has to be investigated. That could be incompatible with this proposal

## References

* https://github.com/usethesource/rascal/issues/2077 - original issue report
* https://github.com/usethesource/rascal-language-servers/blob/ff7a953bcd7af22e1df0d70b368dca6af9c68a15/rascal-lsp/src/main/rascal/lsp/lang/rascal/lsp/Formatter.rsc#L35 - motivating case on the client side
* https://github.com/usethesource/rascal/blob/3d7089ae140acc70e9bda444eac304cac6b32f0a/src/org/rascalmpl/library/util/Formatters.rsc#L132 - motivating cases on the function generator side

