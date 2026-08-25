---
title: RAP 15 - Conditional Patterns to avoid non-linear matching
sidebar_position: 15
---

| RAP | 15 |
| :---- | :---- |
| Title | Conditional Patterns |
| Author | Jurgen Vinju |
| Status | Draft |
| Type | Rascal Language, Static & Dynamic Type System, Runtime System  |

## Abstract

The proposal is to extend the Pattern notation like so:  
 `syntax Pattern = Pattern pattern “if” Expression condition`

The semantics is that if the `pattern` matches then we check if the boolean `condition` evaluates to true in the current environment (which includes optional bindings from the current pattern). 

And to introduce short-hand notation for all binary predicate operators (`==`, `!=`, `:=`, `!:=`, `<`, `<=`, `>=`, `>`) like so:  

```
syntax Pattern = Pattern pattern “==” Expression value`   
               |  Pattern pattern “!=” Expression value`  
               | ...`
```

And the short-hand expansion is:   
`p == v` expands to `tmp:p if tmp == v`

We also allow for short-hand application of boolean predicate functions:
```
int E if isOdd
```

This translates to:
```
int E if isOdd(E)
```

The `when` notation and semantics could be completely removed in time.

## Motivation

This RAP solves *a number of issues* in the design of Rascal’s syntax and semantics in one go:

* **Non-linear patterns (reused pattern variables)** often accidentally capture variables of the outer scope, leading to unexpected failure. This is one of the oldest issues in the design and has been mitigated by the checker providing info/warnings when it happens.   
* **When-clauses are written out of the execution order**
* **When-clauses are not allowed for functions with statement blocks as bodies**  
* Randomized input for tests has to be filtered inside of tests code block, often returning `true` when the test input is invalid (and wasting opportunity for the valid inputs).

The urgency of this RAP is *low*. However, it is still a cause of time loss through  debugging. The type-checker warns about non-linear matches with an info message; which helps while writing new code, but it is a frequent source of false positives in the code that is left.

There are other ways to solve the nonlinear matching problem than to rename a variable. For example by introducing specific syntax for equality testing in the Pattern notation. 

The benefit of the currently proposed new notation is that it fixes the non-linear matching problem but also other problems with “when” and with random tests. 
It would be less nice if we have to add conditional patterns anyway and have added yet another syntax for non-linear matching.

## Specification

`syntax Pattern = Pattern pattern “if” Expression condition`

Static semantics:

* The pattern may bind variables that are used in the condition  
* The condition may bind variables *inside* of it, but does not leak new variables beyond the current pattern.  
* The condition must be of type `bool` or the function type `bool(value)`

Dynamic semantics:

* First the pattern is matched against the current subject; with optional bindings as a side-effect. Note that if the pattern is not singular, backtracking may occur later.  
* Then a new backtracking and binding scope is wrapped around the evaluation of the condition (such that complex back-tracking conditions can introduce variables and be cleaned up nicely)  
* The condition finds the first way to evaluate to true (includes possible backtracking over the original pattern, but certainly also over non-singular parameters of `&&` and `||`. The semantics is comparable to the sematics of a `when` clause.
   * if the condition is of type `bool` we simply evaluate it
   * if the condition is of type `bool(value)` we evaluate the expression as `condition(p)`
* If there is no way to evaluate the condition to true, the entire pattern fails. if `condition(p)` fails (CallFailed) then we also fail the condition.
* Otherwise the pattern succeeds and continues with the bindings introduced by the pattern side (and drops the new bindings introduced by the condition side).

Test semantics

* Tests with a conditional pattern formal will try to generate a satisfying instance for a specific amount of maximum tries. This max counter is different from the current counter which generates a number of bindings for all parameters (usually 100^n where n is the number of parameters).   
* If a condition fails, the test input generator will try again  
* If a condition succeeds, the test input generator will move on to  the next parameter, or start the body of the test function.


Short-hand notation

* Expanding `p == v` to `tmp:p if tmp == v` for every binary operator. `tmp` must be fresh in the current scope, and unused in the succeeding scopes.  
* Note how `_ == a` and `_ := a` can be used for two different types of non-linear match. The first matches with equality (including keyword fields). The second matches with equality-modulo-keyword fields.

New static restrictions on patterns:

* Implicit nonlinear patterns are “duplicate declaration” errors:   
  * so: `and(x, x)` is and error (second x is a duplicate declaration). Initially this should be a warning (not an info anymore) and a quickfix should be generated to expand the non-linear match to either `_ := x` or `_ == x` 
  * Should be written as `and(x, _ := x) or and(x, _ == x)`  
* All variable introductions in patterns are “fresh” from now on, so the static semantics of:  
  * `int x` is the same as  
  * `x`  
  * Except for the possibility of type inference in the latter.

Removing `when`

* Any application of when can always be rewriting to an application of `if` to the last parameter.
* If an `if` uses only variables to the left, then it can be moved to earlier in the parameter list.
* Only `when` clauses to functions without parameters can not be transformed, 
however, we are pretty sure that those do not exist. In any case they could be rewrittten to an `if` inside the body of the function or a `?:` expression.

## Examples

```
// simulating "dependently typed patterns"
// because pattern matching is a runtime feature, we are _not_
// introducing a dependently typed type-system (!). However we come close 
// to the same level of expressiveness; since the conditions are guaranteed to be satisfied before we start running
// the body, the conditions offer a strong contract (preconditions) within that block of code.
int fac(0) = 1;
int fac(int n > 0) = fac(n - 1) * n;
// without use of the shorthand:
int fac(int n if n > 0) = fac(n - 1) * n;

bool evenOdd(int E if E % 2 == 0, 
             int O if E % 2 == 1) = true;

default bool evenOdd(int _, int _) = false;

// shorter and sweeter:
bool isOdd(int i) = i %% 2 == 1;
bool isEven(int i) = i %% 2 == 0;

bool evenOdd(int E if isEven, int O if isOdd) = true;

// remove duplicates with list matching
Bool and([*Bool x, Bool a, *Bool y, _ == a, *Bool z])
	= and([*x, a, *y])
```

## Implementation

This simplifies the implementation of the type-checker and the interpreter alike. Given the fact that we have had the warning for non-linear matches for so long, we can change it to a warning as soon as we have added the conditional patterns. 

1. First we add the conditional pattern notations and the short-hands  
2. Then we add warnings:  
   1. change the current informational message on nonlinear matches to a warning with suggestion for refactoring.  
   2. Add warnings for all “when” clauses to be refactored to conditional patterns (if possible)  
   3. Add warnings for tests that use `==>` for input filtering or `if(expression) return true;`  
   4. Add simple quick-fixes to the warnings
3. Then, in time, we remove the old semantics:  
   1. Make non-linear matches produce double declaration errors  
   2. **Remove syntax and semantics of `when`**

## Alternative solutions

* Think of another syntax for non-linear matching and forget about all the other possible conditions.  
* Introduce a type system with dependent types (the current solution comes really close to a *dynamic* dependently typed system; a static dependently types system is much more involved and also hard to work with for programmers since nothing runs until it type-checks).

## Design by contract (ideas for a next RAP)

* An observation: `if` clauses to patterns offer a way to express strongly enforced _preconditions_ on the input parameters (contracts). 
* And, there is [RAP](https://www.rascal-mpl.org/docs/RascalAmendmentProposals/RAP7/) for enforcing immutability of all pattern variables. Assume we accept this.
   * with immutability of the input there is no need for a notation to looking back in time when formulating post-conditions.
* And, we also assume global variables will not be mutable in the future anymore (only local variables). Otherwise we need a notation for preconditions on globals next to the `if` on patterns.
* Then the question remains: What would be a syntax for imposing post-conditions on the return value, which would mirror the conditions on input variables nicely?
   * For example `"return" Expresion expression "if" Expression condition ";";` would go a long way, where the function throws `CallFailed()` for example if it can not satisfy the post condition(s).
  

## References

