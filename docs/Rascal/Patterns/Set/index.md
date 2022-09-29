---
title: Set Pattern
keywords:
  - "{"
  - "}"

---

#### Synopsis

Set in abstract pattern.

#### Description

A set pattern matches a set value (the subject), provided that _Pat_₁, _Pat_₂, ..., _Pat_ₙ match the elements of that set in *any* order
(recall that the elements of a set are unordered and do not contain duplicates).
Completely analogous to list patterns, there are special cases when one of the patterns _Pat_ᵢ is

*  a [VariableDeclaration](../../../Rascal/Patterns/VariableDeclaration/index.md) with a type that is identical to the element type of the subject set: the variable is matched with one value  in the subject set.

*  a [MultiVariable](../../../Rascal/Patterns/MultiVariable/index.md), with an optional element type that is identical to the element type of the subject set: set matching is applied and the variable can match an arbitrary number (in arbitrary order) of elements of the subject set.

*  a [Variable](../../../Rascal/Patterns/Variable/index.md), where the variable has been declared with a set type, but not initialized, outside the pattern: set matching is applied and the variable can match an arbitrary number (in arbitrary order) of elements of the subject set.

*  a [Variable](../../../Rascal/Patterns/Variable/index.md), where the variable has been declared with a type equal to the element type of the subject, but not initialized, outside the pattern: the variable is matched with one value in the subject set.




#### Examples


```rascal-shell 
rascal>import IO;
ok
```

* A single variable

```rascal-shell ,continue
rascal>if({10, 30, 40, 50, int N} := {10, 20, 30, 40, 50})
>>>>>>>   println("Match succeeded, N = <N>");
Match succeeded, N = 20
ok
```

* An untyped multi-variable:

```rascal-shell ,continue
rascal>if({10, *S, 50} := {50, 40, 30, 20, 10})
>>>>>>>   println("Match succeeded, S = <S>");
Match succeeded, S = {40,20,30}
ok
```

* A typed multi-variable:

```rascal-shell ,continue
rascal>if({10, *int S, 50} := {50, 40, 30, 20, 10})
>>>>>>>   println("Match succeeded, S = <S>");
Match succeeded, S = {40,20,30}
ok
```
Here we see an example, where all possible splits of a set in two subsets are printed:

```rascal-shell ,continue
rascal>for({*S1, *S2} :={30, 20, 10})
>>>>>>>    println("<S1> and <S2>");
{10,20,30} and {}
{10,20} and {30}
{10,30} and {20}
{10} and {20,30}
{20,30} and {10}
{20} and {10,30}
{30} and {10,20}
{} and {10,20,30}
list[void]: []
```

* Already declared set variable:

```rascal-shell ,continue
rascal>set[int] S;
ok
rascal>if({10, *S, 50} := {10, 20, 30, 40, 50})
>>>>>>>   println("Match succeeded, S = <S>");
Match succeeded, S = {40,20,30}
ok
```

* Already declared element variable:

```rascal-shell ,continue
rascal>int N;
ok
rascal>if({10, N, 30, 40, 50} := {50, 40, 30, 20, 10})
>>>>>>>   println("Match succeeded, N = <N>");
Match succeeded, N = 20
ok
```

