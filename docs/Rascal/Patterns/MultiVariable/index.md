---
title: MultiVariable Pattern
keywords:
  - "*"
  - multivariable
  - multi-variable
  - splice
---

#### Synopsis

Multi-variable (also known as Splice-variable) in abstract pattern.

#### Syntax

```rascal
* Var

* Type Var
```

#### Description

A multi-variable as nested in a [List](../../../Rascal/Patterns/List/index.md) or [Set](../../../Rascal/Patterns/Set/index.md) pattern matches zero
or more elements of said container. Optionally the *element type* of the multi-variable may be specified, in that case only elements that match the specific type are bound to the variable.

#### Examples


```rascal-shell 
rascal>import IO;
ok
```
Using lists:

```rascal-shell ,continue
rascal>if([10, *N, 50] := [10, 20, 30, 40, 50])
>>>>>>>   println("Match succeeds, N == <N>");
Match succeeds, N == [20,30,40]
ok
```
the above is equivalent with:

```rascal-shell ,continue
rascal>if([10, *int N, 50] := [10, 20, 30, 40, 50])
>>>>>>>   println("Match succeeds, N == <N>");
Match succeeds, N == [20,30,40]
ok
```
Using sets:

```rascal-shell ,continue
rascal>if({10, *S, 50} := {50, 40, 30, 30, 10})
>>>>>>>   println("Match succeeds, S == <S>");
Match succeeds, S == {40,30}
ok
```
the above is equivalent with:

```rascal-shell ,continue
rascal>if({10, *int S, 50} := {50, 40, 30, 30, 10})
>>>>>>>   println("Match succeeds, S == <S>");
Match succeeds, S == {40,30}
ok
```

#### Pitfalls

In older versions of Rascal the type of a multi-variable had to be a list or set type.


