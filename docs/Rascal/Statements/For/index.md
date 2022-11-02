---
title: For
keywords:
  - for

---

#### Synopsis

For loop.

#### Syntax

```rascal
for (Exp₁ , Exp₂, ..., Expₙ) 
  Statement

for (Exp₁ , Exp₂, ..., Expₙ) {
  Statements
}

Label: for (Exp₁ , Exp₂, ..., Expₙ) 
  Statement

Label: for (Exp₁ , Exp₂, ..., Expₙ) {
  Statements
}

```

#### Description

The for-statement executes _Statement_ for all possible combinations of values generated, and filtered, by the expressions _Exp_ᵢ.

Some of the expressions can generate bindings ([Enumerator](../../../Rascal/Expressions/Values/Boolean/Enumerator/index.md), <<Values,Boolean,Match>>), and some can filter them ([Values](../../../Rascal/Expressions/Values/index.md)). 
The for loop will iterate over the cartesian product of all the generating expressions, and filter the combinations which fail the conditional expressions. 

By default, the value of a for statement is the empty list. In general, 
the value of a for statement consists of all values contributed by [Append](../../../Rascal/Statements/Append/index.md) statements that are executed during the repeated execution of its body Statement.

For loops maybe be labeled for the benefit of labeled versions of [Continue](../../../Rascal/Statements/Continue/index.md), [Break](../../../Rascal/Statements/Break/index.md) and [Fail](../../../Rascal/Statements/Fail/index.md).

#### Examples


```rascal-shell 
rascal>import IO;
ok
rascal>for(int n <- [1 .. 5])  
>>>>>>>  println("n = <n>");
n = 1
n = 2
n = 3
n = 4
list[void]: []
rascal>for(int n <- [1 .. 5]) 
>>>>>>>  append n * n;
list[int]: [1,4,9,16]
```


