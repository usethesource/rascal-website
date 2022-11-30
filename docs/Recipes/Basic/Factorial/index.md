---
title: Factorial
sidebar_position: 1
---

#### Synopsis

Compute the factorial function.

#### Examples

The [factorial](http://en.wikipedia.org/wiki/Factorial)
of a number `n` is defined as `n * (n-1) * (n-2) * ... * 1`.

Here is the Rascal version:

```rascal 

module demo::basic::Factorial




int fac1(int n) = n <= 0 ? 1 : n * fac1(n - 1);     ❶  


int fac2(0) = 1;      ❷  
default int fac2(int n) = n * fac2(n - 1);     ❸  


int fac3(int n)  {     ❹  
  if (n == 0) 
     return 1;
  return n * fac3(n - 1);
}
test bool tfac1()  = fac2(1)  == 1;
test bool tfac2()  = fac3(4)  == 24;
test bool tfac47() = fac3(47) == 258623241511168180642964355153611979969197632389120000000000;

```
          
* ❶  `fac1` is defined using a conditional expression to distinguish cases.
* ❷  `fac2` distinguishes cases using pattern-based dispatch ([Rascal Functions](../../../Rascal/Declarations/Function/index.md)).
    Here the case for `0` is defined.
* ❸  Here all other cases for `fac2` are defined (as indicated by the `default` keyword).
* ❹  `fac3` shows a more imperative implementation of factorial.

Here is how to use `fac`:


```rascal-shell 
rascal>import demo::basic::Factorial;
ok
rascal>fac1(47);
int: 258623241511168180642964355153611979969197632389120000000000
```

NOTE: Indeed, Rascal supports arbitrary length numbers.
 
Here is an example of `fac2`:

```rascal-shell ,continue
rascal>fac2(47);
int: 258623241511168180642964355153611979969197632389120000000000
```


