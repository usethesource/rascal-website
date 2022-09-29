---
title: Even
sidebar_position: 3
---

#### Synopsis

Produce a list of even numbers.

#### Description

Let's write a function that generates all the even numbers in a list up to a certain maximum. We will do it in a few alternative 
ways: from very imperative to very declarative and some steps in between.


```rascal-shell 
rascal>list[int] even0(int max) {
>>>>>>>  list[int] result = [];
>>>>>>>  for (int i <- [0..max])
>>>>>>>    if (i % 2 == 0)
>>>>>>>      result += i;
>>>>>>>  return result;
>>>>>>>}
list[int] (int): function(|prompt:///|(0,135,<1,0>,<7,1>))
rascal>even0(25);
list[int]: [0,2,4,6,8,10,12,14,16,18,20,22,24]
```
Now lets remove the temporary type declarations:

```rascal-shell ,continue
rascal>list[int] even1(int max) {
>>>>>>>  result = [];
>>>>>>>  for (i <- [0..max])
>>>>>>>    if (i % 2 == 0)
>>>>>>>      result += i;
>>>>>>>  return result;
>>>>>>>}
list[int] (int): function(|prompt:///|(0,121,<1,0>,<7,1>))
rascal>even1(25);
list[int]: [0,2,4,6,8,10,12,14,16,18,20,22,24]
```
To make the code shorter, we can inline the condition in the for loop:

```rascal-shell ,continue
rascal>list[int] even2(int max) {
>>>>>>>  result = [];
>>>>>>>  for (i <- [0..max], i % 2 == 0)
>>>>>>>    result += i;
>>>>>>>  return result;
>>>>>>>}
list[int] (int): function(|prompt:///|(0,111,<1,0>,<6,1>))
rascal>even2(25);
list[int]: [0,2,4,6,8,10,12,14,16,18,20,22,24]
```
In fact, for loops may produce lists as values, using the append statement:

```rascal-shell ,continue
rascal>list[int] even3(int max) {
>>>>>>>  result = for (i <- [0..max], i % 2 == 0)
>>>>>>>    append i;
>>>>>>>  return result;
>>>>>>>}
list[int] (int): function(|prompt:///|(0,102,<1,0>,<5,1>))
rascal>even3(25);
list[int]: [0,2,4,6,8,10,12,14,16,18,20,22,24]
```
So now, the result temporary is not necessary anymore:

```rascal-shell ,continue
rascal>list[int] even4(int max) {
>>>>>>>  return for (i <- [0..max], i % 2 == 0)
>>>>>>>           append i;
>>>>>>>}
list[int] (int): function(|prompt:///|(0,90,<1,0>,<4,1>))
rascal>even4(25);
list[int]: [0,2,4,6,8,10,12,14,16,18,20,22,24]
```
This code is actually very close to a list comprehension already:

```rascal-shell ,continue
rascal>list[int] even5(int max) {
>>>>>>>  return [ i | i <- [0..max], i % 2 == 0];
>>>>>>>}
list[int] (int): function(|prompt:///|(0,71,<1,0>,<3,1>))
rascal>even5(25);
list[int]: [0,2,4,6,8,10,12,14,16,18,20,22,24]
```
And now we can just define `even` using an expression only:

```rascal-shell ,continue
rascal>list[int] even6(int max) = [i | i <- [0..max], i % 2 == 0];
list[int] (int): function(|prompt:///|(0,59,<1,0>,<1,59>))
rascal>even6(25);
list[int]: [0,2,4,6,8,10,12,14,16,18,20,22,24]
```
Or, perhaps we prefer creating a set instead of a list:

```rascal-shell ,continue
rascal>set[int] even7(int max) = {i | i <- [0..max], i % 2 == 0};
set[int] (int): function(|prompt:///|(0,58,<1,0>,<1,58>))
rascal>even7(25);
set[int]: {10,16,8,14,20,2,4,6,24,12,22,18,0}
```

#### Benefits

*  You can program in for loops and use temporary variables if you like.
*  Comprehensions are shorter and more powerful.
*  There are comprehensions for lists, sets, and maps

#### Pitfalls

*  Trainwreck alert: if you start putting too many conditions in a single for loop or comprehension the code may become unreadable.


