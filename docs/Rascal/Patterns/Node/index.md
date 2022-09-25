---
title: Node pattern
---

#### Synopsis

Node in abstract pattern.

#### Description

A node pattern matches a node value or a datatype value, provided that _Name_ matches with the constructor symbol of that value 
and _Pat_~1~, _Pat_~2~, ..., _Pat_~n~  match the children of that value in order.

#### Examples


```rascal-shell 
```
Match on node values (recall that the function symbol of a node has to be quoted, see [Values/Node]):

```rascal-shell ,continue
rascal>import IO;
ok
rascal>if("f"(A,13,B) := "f"("abc", 13, false))
>>>>>>>   println("A = <A>, B = <B>");
   println("A = <A>, B = <B>");
A = abc, B = false
ok
```
Define a data type and use it to match:

```rascal-shell ,continue
rascal>data Color = red(int N) | black(int N);
ok
rascal>if(red(K) := red(13))
>>>>>>>   println("K = <K>");
   println("K = <K>");
K = 13
ok
```


