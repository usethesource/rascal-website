---
title: Append
keywords:
  - append

---

#### Synopsis

Append an element to the list value produced by various loop statements.

#### Syntax

```rascal
append Exp

append Label: Exp
```

#### Description

An append statement may only occur in the body of a [While](../../../Rascal/Statements/While/index.md), [Do](../../../Rascal/Statements/Do/index.md) or [For](../../../Rascal/Statements/For/index.md) statement. 
It appends the value of _Exp_ to the resulting list value of the loop construct in which it occurs.

#### Examples


```rascal-shell 
rascal>for(int i <- [1..5]) 
>>>>>>>  append i*i;
list[int]: [1,4,9,16]
rascal>L = for(int i <- [1..5]) 
>>>>>>>  append i*i;
list[int]: [1,4,9,16]
rascal>
rascal>OUTER:for (int i <-[1..5])
>>>>>>>  for (int j <- [1..5])
>>>>>>>    append OUTER: <i,j>;
lrel[int,int]: [
  <1,1>,
  <1,2>,
  <1,3>,
  <1,4>,
  <2,1>,
  <2,2>,
  <2,3>,
  <2,4>,
  <3,1>,
  <3,2>,
  <3,3>,
  <3,4>,
  <4,1>,
  <4,2>,
  <4,3>,
  <4,4>
]
```


