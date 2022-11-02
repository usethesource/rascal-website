---
title: Continue
keywords:
  - continue

---

#### Synopsis

Continue with the next iteration of while, do or for loop.

#### Syntax

```rascal
continue;

continue Label;
```

#### Description

A continue statement is only allowed inside the body of a [While](../../../Rascal/Statements/While/index.md), [Do](../../../Rascal/Statements/Do/index.md) or [For](../../../Rascal/Statements/For/index.md) statement
and is associated with the innermost loop statement in which it is contained.
Its effect is to end the execution of the block for the current iteration of the loop
and to continue with the next iteration of the loop.

If the continue occurs in a nested loop, then it can also break to the outer loop if
it is labeled with `Label` and the break is also labeled with the same `Label`.

Also see [Break](../../../Rascal/Statements/Break/index.md) and [Fail](../../../Rascal/Statements/Fail/index.md).

#### Examples

Here is an example using continue to avoid printing numbers that are divisible by 3:

```rascal-shell 
rascal>import IO;
ok
rascal>for (int i <- [1 .. 10]) {
>>>>>>>    if (i % 3 == 0)
>>>>>>>       continue;
>>>>>>>    println("i = <i>");
>>>>>>>}
i = 1
i = 2
i = 4
i = 5
i = 7
i = 8
list[void]: []
```


