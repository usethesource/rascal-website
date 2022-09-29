---
title: Break
keywords:
  - break

---

#### Synopsis

End the execution of a while, do or for loop.

#### Description

A `break` statement is only allowed inside the body of a [While](../../../Rascal/Statements/While/index.md), [Do](../../../Rascal/Statements/Do/index.md) or [For](../../../Rascal/Statements/For/index.md) statement
and is associated with the innermost loop statement in which it is contained.
Its effect is to end the execution of the loop.

Also see [Continue](../../../Rascal/Statements/Continue/index.md) and [Fail](../../../Rascal/Statements/Fail/index.md).

#### Examples

Here is an example using break to find the first number divisible by 3:

```rascal-shell 
rascal>import IO;
ok
rascal>for(int i <- [1 .. 10]){
>>>>>>>    if(i % 3 == 0){
>>>>>>>       println("i = <i> is divisible by 3");
>>>>>>>       break;
>>>>>>>    }
>>>>>>>}
i = 3 is divisible by 3
list[void]: []
```


