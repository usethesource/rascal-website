---
title: While
keywords:
  - while

---



#### Synopsis

While loop.

#### Syntax

`while ( Exp ) Statement;`

#### Description

The Boolean expression _Exp_ is evaluated repeatedly and _Statement_ is executed when the test is true. 
Execution ends the first time that the test yields false. 
The test _Exp_ is executed from scratch in each repetition and only the first `true` value (if any) is used.
This is relevant when _Exp_ contains a [Match](../../../Rascal/Expressions/Values/Boolean/Match/) or [NoMatch](../../../Rascal/Expressions/Values/Boolean/NoMatch/) operator.

By default, the value of a while statement is the empty list. In general, the value of a while statement 
consists of all values contributed by [Append](../../../Rascal/Statements/Append/) statements that are executed during the repeated execution 
of its body _Statement_.

#### Examples


```rascal-shell 
rascal>import IO;
ok
rascal>int n = 3;
int: 3
rascal>while( n > 0 ) { println("n = <n>"); n -= 1; }
while( n > 0 ) { println("n = <n>"); n -= 1; }
n = 3
n = 2
n = 1
list[void]: []
```
Now build a list result using the `append` statement:

```rascal-shell ,continue
rascal>n = 3;
int: 3
rascal>while (n > 0) { append n * n; n -= 1; }
list[int]: [9,4,1]
```

Just to be sure, a [Comprehension](../../../Rascal/Expressions/Values/List/Comprehension/) is the superior way to write this:

```rascal-shell 
rascal>[n * n | n <- [3 .. 1]];
list[int]: [9,4]
```


