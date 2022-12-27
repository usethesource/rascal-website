---
title: Factorial
---

#### Synopsis

Compute the factorial function.

#### Syntax

#### Types

#### Function

#### Description

#### Examples

The [factorial](http://en.wikipedia.org/wiki/Factorial)
of a number `n` is defined as `n * (n-1) * (n-2) * ... * 1`.

Here is the Rascal version:
```rascal-commands
@synopsis{fac1 demonstrates the ternary conditional and recursion}
int fac1(int n) = n <= 0 ? 1 : n * fac1(n - 1); //<1>

@synopsis{fac2 demonstrates overloading and dynamic dispatch with pattern matching}
int fac2(0) = 1;  //<2>
default int fac2(int n) = n * fac2(n - 1); //<3>

@synopsis{fac3 demonstrates structured programming and recursion}
int fac3(int n)  { //<4>
  if (n == 0) 
     return 1;
  return n * fac3(n - 1);
}
```
          
<1> `fac1` is defined using a conditional expression to distinguish cases.
<2> `fac2` distinguishes cases using pattern-based dispatch ([Rascal Functions]((Rascal:Function))).
    Here the case for `0` is defined.
<3> Here all other cases for `fac2` are defined (as indicated by the `default` keyword).
<4> `fac3` shows a more imperative implementation of factorial.

Here is how to use `fac`:

```rascal-shell,continue
fac1(47);
```

NOTE: Indeed, Rascal supports arbitrary length numbers.
 
Here is an example of `fac2`:
```rascal-shell,continue
fac2(47);
```

#### Benefits

* This simple demo shows how (recursive) Rascal functions work in three different ways.

#### Pitfalls

* Typically writing recursive functions can be avoided using ((Statements-Visit)) and ((Patterns-Descendant)), so this example isn't very exemplary of typical Rascal code.
