---
layout: post 
published: true
author: Jurgen Vinju
authorlink: http://homepages.cwi.nl/~jurgenv
title: "From imperative programming to functional programming"
---

Rascal features immutable data, but at the same time a number of language constructs which are a lot like "traditional" structured imperative programming: `while`, `if`, etc. Without going into the full power of these constructs in Rascal (featuring lexically scoped backtracking, for example) in this post we go into how _in the same language_ we can program imperatively and functionally at the same time.

The reason Rascal features these two styles is that we want to make it easy for programmers who are used to the imperative paradigm to step into the language. More importantly, we want to make it easy to type classical textbook examples of program analysis and transformations pseudocode rather directly into Rascal syntax. 

Let's write a function that generates all the even numbers in a list up to a certain maximum. We will do it in a few alternative 
ways: from very imperative to very declarative and some steps in between.

```
list[int] even0(int max) {
  list[int] result = [];
  for (int i <- [0..max])
    if (i % 2 == 0)
      result += i;
  return result;
}
```

Now lets remove the temporary type declarations:

```
list[int] even1(int max) {
  result = [];
  for (i <- [0..max])
    if (i % 2 == 0)
      result += i;
  return result;
}
```

To make the code shorter, we can inline the condition in the for loop:

```
list[int] even2(int max) {
  result = [];
  for (i <- [0..max], i % 2 == 0)
    result += i;
  return result;
}
```

In fact, for loops may produce lists as values, using the append statement:

```
list[int] even3(int max) {
  result = for (i <- [0..max], i % 2 == 0)
    append i;
  return result;
}
```

So now, the result temporary is not necessary anymore:

```
list[int] even4(int max) {
  return for (i <- [0..max], i % 2 == 0)
           append i;
}
```

This code is actually very close to a list comprehension already:

```
list[int] even5(int max) {
  return [ i | i <- [0..max], i % 2 == 0];
}
```

And now we can just define even using an expression only:

```
list[int] even6(int max) = [i | i <- [0..max], i % 2 == 0];
```

Or, perhaps we like a set instead of a list:

```
set[int] even7(int max) = {i | i <- [0..max], i % 2 == 0};
```

Benefits:

* You can program in for loops and use temporary variables if you like.
* Comprehensions are shorter and more powerful.
* There are comprehensions for lists, sets, and maps

Pitfalls:

* Trainwreck alert: if you start putting too many conditions in a single for loop or comprehension the code may become unreadable.
