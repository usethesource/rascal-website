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
of a number N is defined as `N * (N-1) * (N-2) * ... * 1`.
Here is the Rascal version:

```rascal

//START
// tag::module[]
module demo::basic::Factorial



int fac(int N) = N <= 0 ? 1 : N * fac(N - 1); //<1>

int fac2(0) = 1;  //<2>
default int fac2(int N) = N * fac2(N - 1); //<3>

int fac3(int N)  { //<4>
  if (N == 0) 
     return 1;
  return N * fac3(N - 1);
}
test bool tfac1()  = fac(1)  == 1;
test bool tfac2()  = fac(4)  == 24;
test bool tfac47() = fac(47) == 258623241511168180642964355153611979969197632389120000000000;

```
          
<1> `fac` is defined using a conditional expression to distinguish cases.
<2> `fac2` distinguishes cases using pattern-based dispatch ([Rascal Functions](/Rascal/Declarations/Function)).
    Here the case for `0` is defined.
<3> Here all other cases for `fac2` are defined (as indicated by the `default` keyword).
<4> `fac3` shows a more imperative implementation of factorial.

Here is how to use `fac`:


```rascal-shell
rascal>import demo::basic::Factorial;
ok
rascal>fac(47);
int: 258623241511168180642964355153611979969197632389120000000000
```

NOTE: Indeed, Rascal supports arbitrary length numbers.
 
Here is an example of `fac2`:

```rascal-shell
rascal>fac2(47);
int: 258623241511168180642964355153611979969197632389120000000000
```

#### Benefits


