---
title: List Pattern
keywords:
  - "["
  - "]"

---

#### Synopsis

List in abstract pattern.

#### Description

A list pattern matches a list value (the subject), provided that _Pat_<sub>1</sub>, _Pat_<sub>2</sub>, ..., _Pat_~n~ match the elements of that list in order. 
Special cases exist when one of the patterns _Pat_~i~ is

*  a [Variable](../../../Rascal/Patterns/Variable) with a type that is identical to the element type of the subject list: the variable is matched with the value at the corresponding position in the subject list.

*  a [MultiVariable](../../../Rascal/Patterns/MultiVariable), with an optional element type that is identical to the element type of the subject list: list matching is applied and the variable can match an arbitrary number of elements of the subject list.

*  a [Variable](../../../Rascal/Patterns/Variable), where the variable has been declared with a list type, but not initialized, outside the pattern: list matching is applied and the variable can match an arbitrary number of elements of the subject list.

*  a [Variable](../../../Rascal/Patterns/Variable), where the variable has been declared with a type equal to the element type of the subject, but not initialized, outside the pattern: the variable is matched with the value at the corresponding position in the subject list.


#### Examples


```rascal-shell
rascal>import IO;
ok
```

* A single variable

```rascal-shell
rascal>if([10, int N, 30, 40, 50] := [10, 20, 30, 40, 50])
>>>>>>>   println("Match succeeded, N = <N>");
   println("Match succeeded, N = <N>");
Match succeeded, N = 20
ok
```

* An untyped multi-variable:

```rascal-shell
rascal>if([10, *L, 50] := [10, 20, 30, 40, 50])
>>>>>>>   println("Match succeeded, L = <L>");
   println("Match succeeded, L = <L>");
Match succeeded, L = [20,30,40]
ok
```

* A typed multi-variable:

```rascal-shell
rascal>if([10, *int L, 50] := [10, 20, 30, 40, 50])
>>>>>>>   println("Match succeeded, L = <L>");
   println("Match succeeded, L = <L>");
Match succeeded, L = [20,30,40]
ok
```

A list pattern may also be __non-linear__, i.e., it may contain uses of variables that were bound earlier in the pattern
(here, the second occurence of `L`):

```rascal-shell
rascal>if([10, *L, 40, *L, 50] := [10, 20, 30, 40, 20, 30, 50])
>>>>>>>   println("Match succeeded, L = <L>");
   println("Match succeeded, L = <L>");
Match succeeded, L = [20,30]
ok
```
Here we see an example, where all pairs of equal elements in a list are printed:

```rascal-shell
rascal>for([*L1, int N, *L2, N, *L3] := [ 5, 10, 20, 30, 40, 30, 15, 20, 10])
>>>>>>>    println("N = <N>");
    println("N = <N>");
N = 10
N = 20
N = 30
list[void]: []
```
Here we print all ways in which a given list can be partitioned in two lists:

```rascal-shell
rascal>for([*L1, *L2] := [10, 20, 30, 40, 50]) 
>>>>>>>    println("<L1> and <L2>");
    println("<L1> and <L2>");
[] and [10,20,30,40,50]
[10] and [20,30,40,50]
[10,20] and [30,40,50]
[10,20,30] and [40,50]
[10,20,30,40] and [50]
[10,20,30,40,50] and []
list[void]: []
```

* Already declared list variable:

```rascal-shell
rascal>list[int] L;
ok
rascal>if([10, L, 50] := [10, 20, 30, 40, 50])
>>>>>>>   println("Match succeeded, L = <L>");
   println("Match succeeded, L = <L>");
Match succeeded, L = [20,30,40]
ok
```

* Already declared element variable:

```rascal-shell
rascal>int N;
ok
rascal>if([10, N, 30, 40, 50] := [10, 20, 30, 40, 50])
>>>>>>>   println("Match succeeded, N = <N>");
   println("Match succeeded, N = <N>");
Match succeeded, N = 20
ok
```


