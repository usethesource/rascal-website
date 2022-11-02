---
title: Return
keywords:
  - return

---

#### Synopsis

Return a value as result of a [Function].

#### Syntax

```rascal
return;

return Exp;
```

#### Description

A return statement comes in four variants: without and with an expression,
both variants end the execution of the current function. 
The first variant applies to functions with `void` as return type. 
The second variants applies to non-void functions and returns the value of _Exp_ as result of the function invocation.
The following rules apply:

*  The static type of _Exp_ should be compatible with the declared return type of the function in 
  which the return statement occurs.

*  In each function with a return type that is not void, every possible execution path through the body of 
  the function should end in a return statement.


In each function with a return type that is void, a return statement is implicitly assumed at the end of each execution path through the function body.

#### Examples


```rascal-shell 
rascal>int twice(int n) { 
>>>>>>>  return 2 * n; 
>>>>>>>}
int (int): function(|prompt:///|(0,38,<1,0>,<3,1>))
rascal>twice(5);
int: 10
```

Functions that only return a value can be abbreviated (and the return is implicit):

```rascal-shell ,continue
rascal>int twiceb(int n) = 2 * n;
int (int): function(|prompt:///|(0,26,<1,0>,<1,26>))
rascal>twiceb(5);
int: 10
```

Sometimes we return the result of a for loop or a visit:

```rascal-shell 
rascal>list[int] even1(int n) {
>>>>>>>  return for (i <- [0..n + 1], i % 2 == 0) {
>>>>>>>    append i;
>>>>>>>  };
>>>>>>>}
list[int] (int): function(|prompt:///|(0,90,<1,0>,<5,1>))
rascal>even1(10)
list[int]: [0,2,4,6,8,10]
```
although that could be written easier using a comprehension
```rascal-shell
rascal>list[int] even2(int n) = [i | i <- [0..n+1], i %2 == 0];
list[int] (int): function(|prompt:///|(0,56,<1,0>,<1,56>))
rascal>even2(10);
list[int]: [0,2,4,6,8,10]
```


