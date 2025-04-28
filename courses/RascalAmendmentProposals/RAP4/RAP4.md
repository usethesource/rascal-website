---
title: RAP 4 - Rascal Function Semantics
sidebar_position: 4
---

## Abstract

Rascal functions are special, different from functions, procedures or methods in other kinds of functional and procedural languages. Rascal functions are much like term rewriting rules instead. Yet we see Rascal as a functional/imperative programming language with a static type system. This small document clarifies what Rascal functions are, summarizing a (hopefully) coherent design story. 

We explore how their syntax, static and dynamic semantics works, with examples and counter-examples. The issue this document tries to clear up is the static and dynamic semantics of function calling, including types of functions, and their sub-typing relation, which influences pattern matching, which influences function dispatch. 

These four language concepts (functions, sub-typing, pattern matching and function dispatch) are intertwined and mutually dependent. Therefore this document aims at describing these concepts in concert, avoiding completeness where possible to keep the document concise, by employing abstraction and selection combined with the occasional hand-waving.

The definitions in this document are all defined informally by-example. This is a working document in this respect. The document is intended to motivate a number of design decisions, rather than document them in a formal sense. This is for another document.

## Motivation

Basic starting points for the design of Rascal functions are these:

* Rascal functions are open to extension, to match the openness of data and syntax types; the data processed by these functions. If a module adds a new syntactic construct, then existing functions should be extensible (without changing existing definitions in other modules) to work on this new data-type.  
* Rascal function parameters use pattern matching, for simplicity and consistency sake the pattern match language of Rascal function parameters is equal to the pattern match language for the `:=` and `<-` operators, and for `switch` and `visit` cases.
* Rewrite rules, as in term rewriting [Klop] have these two properties as well: open to extension and based on pattern matching.

Still, simple Rascal programs should be familiar to normal Java and C[#,++,] programmers and not just term rewriting and functional experts. 
* An important goal is to give a “familiar” look and feel to Rascal’s functions which have term rewriting semantics, in terms of syntax, static semantics and dynamic semantics.
* Another important goal is to make sure the static semantics as implemented by the type checker is a good over-approximate model of the dynamic semantics of Rascal; the type checker should not prevent to run programs which are fine. At the same time, the type checker should reject programs which will always throw exceptions, and warn about programs which throw exceptions in all likelihood.
* We understand from the start that due to the pattern matching semantics of Rascal’s function parameters, static checking can be made sound but not complete; not all call sites are guaranteed to find a matching function application at run-time, although statically we can discern between 3 cases: 
* if certainly no function will match, (this should be a static error)
* maybe some functions will match, or maybe not (hence the incompleteness)
* that certainly one function will match (this would be a point of compiler optimization)
* Due to rewrite rule incompleteness, a run-time exception is thrown when no function matches (the CallFailed exception). This exception can also be caught to allow for complex back-tracking strategies if so desired.
* We strive for a design with no exceptional rules, **all kinds of values and kinds of types should be treated equally**.

## Specification and examples

#### Simple functions with simple patterns

A single function, with a single alternative is defined as follows by a return type, a possibly empty list of formal parameter _patterns_ and a result expression:

```
int z() = 42;
int f(int i) = 2 * i;
```

Alternatively, return expressions can be constructed using imperative control flow:

```
int f(int i) { 
  return 2 * i; 
}
```

For the purpose of the current definition, the body of a function is irrelevant. What matters is that the formal parameters are specified by patterns. In the above example, `int i` is a pattern which matches any value which happens to be of type `int` at _run-time_.

Calling this function goes like so:
`f(1)`, and will return `2` in this case.

The whole pattern language is at the disposal of the programmer defining a function, this includes literal patterns and deep patterns for example:

```
int f(0) = 0; // match only with integers equal to 0
int f(/0) = 0; // match any value which has a 0 in it somewhere
```

The `when` condition to a function strictly enhances the fallibility of a function with arbitrary predicates on the parameters bound by the formal patterns:

```
int f(int i) = 2 * i when i mod 2 == 0;
```

The function fails to apply when the condition is `false` and does apply when it is true. Conditions may also introduce variables using the `:=` or `<-` pattern match boolean expressions.

Finally, the body of a simple function may contain a `fail` statement like so:

```
int f(int i) {
   if (i mod 2 == 0)  {
     fail f;
   }
   
   return i * 2;
}
```

A `fail` to the encapsulating  function name, as in `fail f` has the same effect as a failing `when` condition.
   

#### Types of formal parameter patterns of simple functions

The static type of a formal pattern (it can only be _static_ since a pattern is a code feature not a data feature) is simply the static type of the _outermost_ pattern operator. I.e. `1` is an int, `int a` is an int. When `data X = x()` then the type of `x()` in `int f(x()) = 0;` is `X`, etc.

Patterns are interesting in a static type checking sense; because patterns match dynamic values. For a pattern to match it must be that the type of the run-time value is a (non-strict) subtype of the static type of the pattern. Focusing on the typed variable pattern `int a`: it matches any value `v` _if and only if_ the dynamic type of `v` is a sub-type of the static type of the pattern: `int`.

Note that in this sense a _pattern match_ is a bit like a _cast_ in other programming languages with sub-typing, such as Java. As you may know, downcasts may fail and so may pattern matching. 

A failed match in the context of a `visit`, `switch`, `<-` or `:=` will produce a `false` boolean value. For patterns at formal parameter positions of functions this semantics is a little different. If pattern matching on the formal patterns fails, then the function fails to apply dynamically and an exception is thrown. More on this feature of Rascal below.

Variable patterns, without an explicit type, as in `a` in `int f(a) = 0;` are not allowed in function headers if they are unbound in the current scope. This is because _type inference_ for fresh variables is scoped only within function bodies. The reason for this design decision is to also scope the impact of a programmer mistake to the lexical scope of a function body. Otherwise, if function headers would also have type inference, errors could propagate between functions and cause all kinds of intractable and non-local type inference effects (see the Haskell language).

An exception is made for the immediate children of ADT constructors; for example:

```
data X = x(int i);
int f(x(j)) = 2 * j;
```

Here we allow the omission of `int` before `j`, because `x` could be uniquely resolved and this implies a unique type for `j` without further inference. If there is another `f` in scope with the same amount of arguments, then it is required to type `j`, as in `int j`, or to qualify the constructor as in `X::x(j)`.

#### Simple functions, with complex patterns

The language for formal parameters to functions is the complete pattern language of Rascal, this includes the non-unitary pattern match operators for deep matching (`/`), list matching (`[*_,*_]`) and set matching (`{*_,e}`).

A function with a non-unitary pattern will _backtrack_ over all formal patterns until a match is found:

```
int f([*_, 1, *_, int last]) = last;
```

when applied: `f([0,1,2])` the first match to succeed will bind the variables in the pattern, and then execute the body of the function. 

Note that the `fail` statement, as in `fail f;`, when used in the body of a function called `f` will make a function backtrack to the next possible match until all matches are tried. Only after the final match fails, an exception will be thrown.

#### Multiple parameters

There is a simple generalization from single parameters to multiple parameters. Patterns can bind values from left to right using typed variables. Patterns on the right may use values bound earlier on the left. Like so:

```
bool same(int a, a) = true;
```

#### Failing functions

If the actual parameters to a function, their dynamic value that is, do not match the formal parameter patterns of a function definition, then the application of the function _fails_. Other reasons for a function to fail are a failing `when` condition or the execution of the `fail` statement. The `CallFailed` exception is catchable.

I.e. the `same` function applied to different integers will fail to execute: `same(1,2)` will throw the following dynamic exception: `CallFailed(...fd..., [1, 2])` where `...fd...` represents an abstract representation of the `same` function and the second argument of the exception is the list of arguments which failed to match.

This function will always fail:

```
int f(int i) { fail; }
```

Another big reason to make sure the Rascal run-time can deal with failing functions in a predictable and complete manner, is that it makes the semantics of functions more compositional. _The semantics of a single function being completely defined, independent of the following concepts of higher-orderness and function overloading, is key to keeping the design concise and predictable._ 


#### Overloading and choice for dynamic dispatch

The open extensibility of functions, designed to match the open extensibility of data types and context-free grammars, is predicated on Rascal’s functions failing to match. When one overloaded definition of a function fails, the next one is tried, etc, until all alternatives have been depleted.

For example:

int suc(0) = 1
int suc(1) = 2
int suc(2) = 3;

When `suc(2)` is expressed, the semantics of Rascal dictate that only the final definition succeeds. The alternatives of a function are not tried in any specific order, at least that order is left undefined and open to compiler optimizations. 

To have some control over the order of applying overloaded functions, we have the `default` keyword:

default int suc(int i) = i + 1;

The overloaded alternatives of the `suc` function which are labeled with `default` are guaranteed to be tried only after the other non-labeled definitions have been tried. 

Also when functions fail explicitly using the `fail` statement or when their `when` clauses fail, the other functions will be tried next i.e these two definitions together define a complete function over the integers:

int f(int i) = 2 * i + 1 when i % 2 == 0;
int f(int i) = 3 * i when i % 2 != 0;

Or one could define a function by dispatching over the alternative definitions of an adt:

int cc(ifThenElse(_, _, _)) = 1;
int cc(while(_, _)) = 1;
default int cc(statement _) = 0;

In other words, the fallibile pattern matching feature for function parameters is the foremost (and preferred) mechanism for dynamic dispatch in Rascal. Overloaded definitions can be distributed over multiple modules and will be fused into one if one module extends another. 
Finally, sometimes its handy to define an overloaded function from two existing ones with different names. The + operator on functions does exactly this, i.e:

boolean mod2(int i) = true when i %% 2 == 0;
boolean mod3(int i) = true when i %% 3 == 0;
default  other(int i) = false; 

(f + g + other)(9) // will return true because mod3 matches
 
#### Higher order functions

Now this is interesting. Since all formal parameters to functions are in fact patterns, the consequence is that passing around functions is also done via pattern matching itself. 

**Intermezzo**: higher-order functions in the context of a language with sub-typing can be called confusing at least. In other languages without strong pattern matching, but with sub-typing, already typing higher-order functions is complex. The main reason is the necessary contra-variance for the types of the formal parameter positions. I.e. unlike co-variance, where we have it that `list[int] <: list[value]` for functions it is necessarily the case that `int (value) <: int (int)` and not vice versa. You can see this via Liskov's substitution principle; something which is a sub-type of something else must be immediately substitutable at all the code positions where the super-type used to be. This means a function, at the place where it is called, must at least be able to handle the argument types declared locally. Perhaps more, but certainly not fewer. Hence we define contra-variance at the argument positions for such languages. Note however, that Rascal is not like other languages and the sub-typing rules for parameter positions are exactly what is going to be different.

So, we are now defining what function typing and function sub-typing means, if formal parameters are patterns instead of simply typed formal parameter names. Based on this we will know how to _match_ function types, and thus how to pass functions as actual parameters to higher-order functions. 

A first class function is a Rascal run-time value with an actual concrete function type. So what is a function type? An example is this: `int (real)`. This is the type of a function with return type `int` and first formal pattern type `real`. 

Some other example types of functions are:

```
int f(0) = 1; // type is int(int)
str f([]) = "hello" // type is str(list[void])
data X = x(); // type is X()`
list[value] f(x(), 1) = 1; // type is list[value] (X, int)
```

Pattern matching against function types allows programmers to pass these functions around:

```
int apply(int (int) func, int arg) = func(arg);
int f(0) = 1;

int example = apply(f, 0); // f is matched against `int (int)` to bind the parameter `func` of `apply`
```

Since Rascal's types are _not data-dependent_ but patterns are very much data-dependent, we have an interesting issue here with static checking: it can not possibly be _complete_ for function calling in theory. Whatever we come up with (short of lifting the whole pattern language to the type language), we will always be able somehow to call functions statically which _will fail_ at run-time. 

For example, there is in principle no guarantee that the function passed to `apply` is actually fully defined on _all integers_. Note this is consistent with function application in general in Rascal. The function `int f(0) = 1;` is of type `int (int)`, yet it will throw a run-time exception on any integer except `0`.

A Rascal type checker, therefore should not reject the following code, since it is entirely valid:

```
value x = someExpressionProducingValues;
int f(int i) = 0;
f(x); 
```

`x` is of a strict supertype of the parameter type of `f`, yet this is allowed by Rascal. Like with all pattern matching in Rascal, the only requirement for the static type of the pattern and the subject term is for them to be _compatible_, i.e. for pattern _p_ and subject _s_, it is required that either `subtype(typeof(p),typeof(s)), or subtype(typeof(s), typeof(p))`, (inclusive or). Type incompatibility would imply dead code, since the pattern could never, ever, match. Hence this is a good static error message.

The benefit of this static semantics is that dynamically, functions can be used to filter and dispatch on all kind of data using pattern matching which is essential for modular extensibility and other beneficial features of the language. 

That kind of power is paid for by the loss of a kind of completeness here for the static type system: a well-typed program may still go wrong! Namely we do not promise that for every function call instance that the function will not _fail_ to match, like other programming languages (Haskell, Java, C, C++, C#, etc._ do. The behavior, in fact, is much more like ASF+SDF and Prolog.

To express the semantics of pattern matching on first class functions with typed patterns, driving the point home, is to have the following definition of sub-type for function types with one argument:

```
bool subtype(T1 (T2), T3 (T4)) = subtype(T1, T3) && comparable(T2, T4);
```

This generalizes to multiple arguments via pairwise compatibility, naturally, and functions with different arities are never comparable. 

As a consequence, when passing in functions as values to a higher-order (and probably generic) function there is a pretty good chance that the actual application of the function will not match. So higher-order functions should cater for this event by catching that exception and dealing with it:

int apply (int (int) f, int arg) {
  try {
    return f(arg);
  } 
 catch CallFailed(_, _) {
    return -1;
 }
}

There is a short-hand for this using the IfDefinedOtherWise operator: `return f(arg) ? -1`;

#### Warnings for probably incomplete function calls

In many cases, it is possible to _warn_ the user about imminent pattern match failure, as in the above example. It is _not_, however, a static error. For consistency's sake pattern matching is only statically erroneous in case of type incompatibility, even for higher-order functions. Especially when functions are nested in deeper values, this becomes absolutely essential functionality. Also in the context of polymorphic types, like `&T`, this behavior is essential. 

Warnings on patterns which will never match (i.e. at function call sites) should be sound and not complete, i.e. we prefer the warnings to have no false positives, but false negatives are expected. The type checker will not always be able to predict imminent application failure. If we go for sound warnings, probably all interesting (dynamically dispatched, or higher-order) function calls would be labeled as possibly incomplete. 

For the `apply` example, above, it can be predicted that failure will occur, and the type checker would generate a warning that the call to `apply` never match. The checker could infer this because at the call site enough context information is present to decide the dynamic type of the first parameter to `apply`. This is not always the case of course. 

### Types for overloaded functions

A question is what the dynamic type of an overloaded function would be. Especially when such a function is passed as a higher-order parameter this is an interesting issue since the type of the _dynamic value_ drives pattern matching.

Examples:

```
int f(int _) = 0;
int f(real _) = 1;

int g(int _) = 0;
real g(real _) = 0.0;
```

The type of the value produced by evaluating the expression `f`; what is it? We introduce here, for the sake of argument, a new type constructor `+` for a disjunctive type. Note that this actually does not exist in Rascal, we just use it to explain here why we did not introduce disjunctive types. The type of `f` namely might be exactly: `int(int) + int(real)` and the type of `g` is `int(int) + real(real)`.

Such disjunctive types do not exist in Rascal’s type system, and for a good reason. They make type inference non-unique in a confusing way. There is an easier solution for this conundrum. 
Because function types are both co- and contra-variant in their argument types in Rascal (the arguments only need to be comparable), a conservative approximation of the type of an overloaded function is to simply compute the least-upper-bound of the argument types. 

So the type of `int(int) + int(real)` is actually `int(num)` in Rascal. 

This design decision inherits the same weakness as typing call sites, it may be incomplete and thus calls to overloaded functions which were passed in as arguments may lead to CallFailed exceptions at run-time. In this sense the higher-order type system for function calls is consistent with the first-order calling semantics of functions. 

### Function construction

Next to overloading by name, Rascal also features the construction of first class dynamically dispatched function alternatives via the addition operator: `+`.

```
int f(int i) = 0;
int g(real r) = 1;
int example = (f + g)(0);
```

The semantics is the same as overloading. The type of `(f+g)` is the least upper bound function type of `f` and `g` and the first function to match `0` will execute. When none of the alternatives match, the call expression fails as usual. Of course f and g must have the same number of parameters for this to typecheck: otherwise their `lub` would be `value` and function calling would be statically not supported. 

Another operator is function composition (f o g).

#### Keyword parameters

Functions in Rascal may also have additional parameters in the form of keyword parameters. These are quite different from formal pattern parameters:

```
int f(int i = 0) = i * 2;
```

The differences are:

* a keyword parameter is always a typed variable name, and not a general pattern;
* a keyword parameter _always_ has an associated default value
* functions do not _match_ or _fail_ on keyword parameters. They simply bind actual keyword parameters to formal keyword parameters (if provided and of the right type), and otherwise the default value is bound.

Consequently, keyword parameters are not a part of the dynamic dispatch feature of Rascal. 

Also, keyword parameters are not part of the type of a function.  

## Backward compatibility

The current document actually describes mostly Rascal as it is already, with the following exceptions:

* the current type checker produces errors sometimes where the proposal above would generate a warning, and it produces errors where the above proposal would not produce any warning or error. This implies a strictly weaker type checking which is _statically_ not backward compatible but can not dynamically change semantics. It will simply make more dynamic semantics possible, including more function calls to fail, but also more function calls to succeed than before. 
* It can be that the compiler/type checker would filter out "dead code" before, which is not dead anymore when implementing the above proposal. With non-deterministic overlap, or order-dependent function definitions, this may lead to new non-deterministic behavior of existing programs. A warning feature for overlapping pattern matches for the overloaded alternatives seems to be in order.
* the ? operator on functions is not implemented
 
## References



