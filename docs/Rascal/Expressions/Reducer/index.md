---
title: Reducer
keywords:
  - "("
  - "|"
  - ")"
  - it

---

#### Synopsis

Reduce generated values to a single value.

#### Syntax

`( InitExp | RedExp | Gen₁, Gen₂, ... )`

#### Description

Reducers are comprehesions (see [list comprehension](../../../Rascal/Expressions/Values/List/Comprehension/index.md), [set comprehension](../../../Rascal/Expressions/Values/Set/Comprehension/index.md)) that construct any
type of value by an iterating rather than just a list or a set.

Every reducer (as above)  is equivalent to the following code:
```rascal,subs="verbatim,quotes"
it = _InitExp_; // <1>
for(_Gen₁_, _Gen₂_, ... ) // <2>
    it = _RedExp_; // <3>
it; // <4>
```
and is executed as follows:

1. A fresh variable, always named `it`, is initialized with _InitExp_. 
    We call the variable `it` since we use `it` to initialize the reducer, to make changes to `it`,
    and to return `it` as result.
2. A for loop iterates over all values produced by the generators `Gen₁`, `Gen₂`, ... .
3. In the body of the loop, variable `it` is updated to reflect a new reduced value.
    Note that `it` itself and variables introduced in _Gen_₁, _Gen_₂, ... may occur in _RedExp_.
4. The final value of `it` is the result of the reducer.

#### Examples


```rascal-shell 
rascal>L = [1, 3, 5, 7];
list[int]: [1,3,5,7]
rascal>(0 | it + e | int e <- L);
int: 16
rascal>(1 | it * e | int e <- L);
int: 105
```

#### Benefits

* A reducer resembles the [fold](http://en.wikipedia.org/wiki/Fold_(higher-order_function)) function
found in most functional languages.

