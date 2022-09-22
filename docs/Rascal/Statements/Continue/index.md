---
title: Continue
keywords:
  - continue

---

#### Synopsis

Continue with the next iteration of while, do or for loop.

#### Description

A continue statement is only allowed inside the body of a [While](../../../Rascal/Statements/While), [Do](../../../Rascal/Statements/Do) or [For](../../../Rascal/Statements/For) statement
and is associated with the innermost loop statement in which it is contained.
Its effect is to end the execution of the block for the current iteration of the loop
and to continue with the next iteration of the loop.

Also see [Break](../../../Rascal/Statements/Break) and [Fail](../../../Rascal/Statements/Fail).

#### Examples

Here is an example using continue to avoid printing numbers that are divisible by 3:

```rascal-shell
rascal>import IO;
ok
rascal>for(int i <- [1 .. 10]){
>>>>>>>    if(i % 3 == 0)
>>>>>>>       continue;
>>>>>>>    println("i = <i>");
>>>>>>>}
}
i = 1
i = 2
i = 4
i = 5
i = 7
i = 8
list[void]: []
```


