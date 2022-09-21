---
title: For
keywords:
  - for

---

#### Synopsis

For loop.

#### Syntax

`for ( Exp<sub>1</sub> , Exp<sub>2</sub> , ... , Exp~n~ ) Statement;`

#### Types

#### Function

#### Description

The for-statement executes _Statement_ for all possible combinations of values generated, and filtered, by the expressions _Exp_~i~.

Some of the expressions can generate bindings ([Enumerator](/docs//Rascal/Expressions/Comprehensions/Enumerator), <<Values,Boolean,Match>>), and some can filter them ([Values](/docs//Rascal/Expressions/Values)). 
The for loop will iterate over the cartesian product of all the generating expressions, and filter the combinations which fail the conditional expressions. 

By default, the value of a for statement is the empty list. In general, 
the value of a for statement consists of all values contributed by [Append](/docs//Rascal/Statements/Append) statements that are executed during the repeated execution of its body Statement.

#### Examples


```rascal-shell
rascal>import IO;
ok
rascal>for(int n <- [1 .. 5]) println("n = <n>");
for(int n <- [1 .. 5]) println("n = <n>");
n = 1
n = 2
n = 3
n = 4
list[void]: []
rascal>for(int n <- [1 .. 5]) append n * n;
list[int]: [1,4,9,16]
```

#### Benefits


